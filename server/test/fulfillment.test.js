const assert = require("node:assert/strict");
const test = require("node:test");
const { fulfillCheckoutSession } = require("../lib/fulfillment");
const { findProductByStripeSession } = require("../productCatalog");

const originalEnv = { ...process.env };

function restoreEnv() {
  process.env = { ...originalEnv };
}

function setProductEnv() {
  process.env.STRIPE_AI_PROMPT_PACKS_PRODUCT_ID = "prod_ai_prompt_packs";
  process.env.STRIPE_AI_PROMPT_PACKS_PRICE_ID = "price_ai_prompt_packs";
  process.env.STRIPE_AI_PROMPT_PACKS_PAYMENT_LINK_ID = "plink_ai_prompt_packs";
}

function createCheckoutEvent(overrides = {}) {
  return {
    id: overrides.eventId || "evt_checkout_completed",
    type: "checkout.session.completed",
    data: {
      object: {
        id: overrides.sessionId || "cs_live_mock",
      },
    },
  };
}

function createFullSession(overrides = {}) {
  return {
    id: overrides.sessionId || "cs_live_mock",
    payment_link: overrides.paymentLink || "plink_ai_prompt_packs",
    customer_details: {
      email: overrides.email,
      name: overrides.name || "Test Buyer",
    },
    customer_email: overrides.customerEmail || "buyer@example.com",
    line_items: {
      data: [
        {
          price: {
            id: overrides.priceId || "price_ai_prompt_packs",
            product: {
              id: overrides.productId || "prod_ai_prompt_packs",
            },
          },
        },
      ],
    },
  };
}

function createFakeStripe({ event, fullSession }) {
  return {
    checkout: {
      sessions: {
        async retrieve(sessionId, options) {
          assert.equal(sessionId, event.data.object.id);
          assert.deepEqual(options, { expand: ["line_items.data.price.product"] });
          return fullSession;
        },
      },
    },
  };
}

test("fulfills AI Prompt Packs checkout session", async () => {
  restoreEnv();
  setProductEnv();

  const event = createCheckoutEvent();
  const fullSession = createFullSession({ email: "buyer@example.com" });
  const deliveries = [];
  const markedEvents = [];

  const result = await fulfillCheckoutSession({
    event,
    findProductByStripeSession,
    reserveFulfillment: async (eventId) => {
      assert.equal(eventId, event.id);
      return true;
    },
    markFulfilled: async (eventId) => markedEvents.push(eventId),
    sendProductDeliveryEmail: async (delivery) => deliveries.push(delivery),
    stripe: createFakeStripe({ event, fullSession }),
  });

  assert.deepEqual(result, { received: true, fulfilled: "ai-prompt-packs" });
  assert.equal(deliveries.length, 1);
  assert.equal(deliveries[0].customerEmail, "buyer@example.com");
  assert.equal(deliveries[0].customerName, "Test Buyer");
  assert.equal(deliveries[0].orderId, "cs_live_mock");
  assert.equal(deliveries[0].product.id, "ai-prompt-packs");
  assert.deepEqual(markedEvents, [event.id]);
});

test("does not send duplicate fulfillment emails for already reserved events", async () => {
  restoreEnv();
  setProductEnv();

  const event = createCheckoutEvent({ eventId: "evt_duplicate" });
  const deliveries = [];

  const result = await fulfillCheckoutSession({
    event,
    findProductByStripeSession,
    reserveFulfillment: async () => false,
    markFulfilled: async () => {
      throw new Error("markFulfilled should not run for duplicates");
    },
    sendProductDeliveryEmail: async (delivery) => deliveries.push(delivery),
    stripe: createFakeStripe({ event, fullSession: createFullSession() }),
  });

  assert.deepEqual(result, { received: true, duplicate: true });
  assert.equal(deliveries.length, 0);
});

test("fails when checkout line items do not match a known product", async () => {
  restoreEnv();
  setProductEnv();

  const event = createCheckoutEvent();

  await assert.rejects(
    fulfillCheckoutSession({
      event,
      findProductByStripeSession,
      reserveFulfillment: async () => true,
      markFulfilled: async () => {},
      sendProductDeliveryEmail: async () => {},
      stripe: createFakeStripe({
        event,
        fullSession: createFullSession({
          paymentLink: "plink_unknown",
          priceId: "price_unknown",
          productId: "prod_unknown",
        }),
      }),
    }),
    /No fulfillment product matched checkout session/
  );
});

test("fails when Stripe Checkout does not provide a customer email", async () => {
  restoreEnv();
  setProductEnv();

  const event = createCheckoutEvent();

  await assert.rejects(
    fulfillCheckoutSession({
      event,
      findProductByStripeSession,
      reserveFulfillment: async () => true,
      markFulfilled: async () => {},
      sendProductDeliveryEmail: async () => {},
      stripe: createFakeStripe({
        event,
        fullSession: {
          ...createFullSession({ email: null, customerEmail: null }),
          customer_details: { email: null, name: "No Email Buyer" },
          customer_email: null,
        },
      }),
    }),
    /No customer email found for checkout session/
  );
});
