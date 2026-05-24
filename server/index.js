const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, ".env") });
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const Stripe = require("stripe");
const { createApp } = require("./app");

const port = process.env.PORT || 4242;

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is required.");
}

if (!process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error("STRIPE_WEBHOOK_SECRET is required.");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const app = createApp({
  storefrontUrl: process.env.STOREFRONT_URL,
  stripe,
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
});

app.listen(port, () => {
  console.log(`Fulfillment server listening on port ${port}`);
});
