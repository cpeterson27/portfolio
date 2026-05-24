const cors = require("cors");
const express = require("express");
const { sendProductDeliveryEmail: defaultSendProductDeliveryEmail } = require("./lib/email");
const {
  markFulfilled: defaultMarkFulfilled,
  reserveFulfillment: defaultReserveFulfillment,
} = require("./lib/idempotency");
const { fulfillCheckoutSession } = require("./lib/fulfillment");
const { findProductByStripeSession: defaultFindProductByStripeSession } = require("./productCatalog");

function getAllowedOrigins(storefrontUrl) {
  return (storefrontUrl || "https://cpeterson27.github.io")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function createApp({
  findProductByStripeSession = defaultFindProductByStripeSession,
  logger = console,
  markFulfilled = defaultMarkFulfilled,
  reserveFulfillment = defaultReserveFulfillment,
  sendProductDeliveryEmail = defaultSendProductDeliveryEmail,
  storefrontUrl = process.env.STOREFRONT_URL,
  stripe,
  webhookSecret = process.env.STRIPE_WEBHOOK_SECRET,
}) {
  if (!stripe) {
    throw new Error("A Stripe client is required.");
  }

  if (!webhookSecret) {
    throw new Error("STRIPE_WEBHOOK_SECRET is required.");
  }

  const app = express();

  app.use(
    cors({
      origin: getAllowedOrigins(storefrontUrl),
    })
  );

  app.get("/", (_request, response) => {
    response.json({
      ok: true,
      service: "portfolio-fulfillment",
      routes: ["/health", "/stripe/webhook"],
    });
  });

  app.get("/health", (_request, response) => {
    response.json({ ok: true, service: "portfolio-fulfillment" });
  });

  app.post("/stripe/webhook", express.raw({ type: "application/json" }), async (request, response) => {
    const signature = request.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, signature, webhookSecret);
    } catch (error) {
      logger.error("Webhook signature verification failed:", error.message);
      return response.status(400).send(`Webhook Error: ${error.message}`);
    }

    if (event.type !== "checkout.session.completed") {
      return response.json({ received: true, ignored: true });
    }

    try {
      const result = await fulfillCheckoutSession({
        event,
        findProductByStripeSession,
        markFulfilled,
        reserveFulfillment,
        sendProductDeliveryEmail,
        stripe,
      });
      return response.json(result);
    } catch (error) {
      logger.error("Fulfillment failed:", error);
      return response.status(500).json({ error: "Fulfillment failed" });
    }
  });

  app.use(express.json());

  return app;
}

module.exports = {
  createApp,
  getAllowedOrigins,
};
