const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, ".env") });
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const cors = require("cors");
const express = require("express");
const Stripe = require("stripe");
const { sendProductDeliveryEmail } = require("./lib/email");
const { markFulfilled, reserveFulfillment } = require("./lib/idempotency");
const { findProductByStripeSession } = require("./productCatalog");

const app = express();
const port = process.env.PORT || 4242;

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is required.");
}

if (!process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error("STRIPE_WEBHOOK_SECRET is required.");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const allowedOrigins = (process.env.STOREFRONT_URL || "https://cpeterson27.github.io")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
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
    event = stripe.webhooks.constructEvent(request.body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (error) {
    console.error("Webhook signature verification failed:", error.message);
    return response.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (event.type !== "checkout.session.completed") {
    return response.json({ received: true, ignored: true });
  }

  try {
    const shouldProcess = await reserveFulfillment(event.id);

    if (!shouldProcess) {
      return response.json({ received: true, duplicate: true });
    }

    const session = event.data.object;
    const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ["line_items.data.price.product"],
    });
    const lineItems = fullSession.line_items?.data || [];
    const product = findProductByStripeSession({ session: fullSession, lineItems });
    const customerEmail = fullSession.customer_details?.email || fullSession.customer_email;
    const customerName = fullSession.customer_details?.name;

    if (!product) {
      throw new Error(`No fulfillment product matched checkout session ${fullSession.id}.`);
    }

    if (!customerEmail) {
      throw new Error(`No customer email found for checkout session ${fullSession.id}.`);
    }

    await sendProductDeliveryEmail({
      customerEmail,
      customerName,
      product,
      orderId: fullSession.id,
    });

    await markFulfilled(event.id);
    return response.json({ received: true, fulfilled: product.id });
  } catch (error) {
    console.error("Fulfillment failed:", error);
    return response.status(500).json({ error: "Fulfillment failed" });
  }
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Fulfillment server listening on port ${port}`);
});
