const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const { sendProductDeliveryEmail } = require("../lib/email");
const { aiPromptPacks } = require("../products/aiPromptPacks");

async function main() {
  const customerEmail = process.env.DELIVERY_TEST_EMAIL || process.env.FULFILLMENT_REPLY_TO;

  if (!customerEmail) {
    throw new Error("Set DELIVERY_TEST_EMAIL or FULFILLMENT_REPLY_TO before running this script.");
  }

  const result = await sendProductDeliveryEmail({
    customerEmail,
    customerName: "Cassandra",
    product: aiPromptPacks,
    orderId: "manual-delivery-test",
  });

  console.log(`Sent ${aiPromptPacks.name} test delivery to ${customerEmail}.`);
  if (result?.data?.id) {
    console.log(`Resend email id: ${result.data.id}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
