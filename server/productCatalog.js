const { aiPromptPacks } = require("./products/aiPromptPacks");

const products = [aiPromptPacks];

function getConfiguredProductMatchers() {
  return {
    [aiPromptPacks.id]: {
      productId: process.env.STRIPE_AI_PROMPT_PACKS_PRODUCT_ID,
      priceId: process.env.STRIPE_AI_PROMPT_PACKS_PRICE_ID,
      paymentLinkId: process.env.STRIPE_AI_PROMPT_PACKS_PAYMENT_LINK_ID,
    },
  };
}

function findProductByStripeSession({ session, lineItems }) {
  const matchers = getConfiguredProductMatchers();

  for (const product of products) {
    const matcher = matchers[product.id] || {};
    const matchesPaymentLink = matcher.paymentLinkId && session.payment_link === matcher.paymentLinkId;
    const matchesLineItem = lineItems.some((item) => {
      const priceId = item.price?.id;
      const productId = typeof item.price?.product === "string" ? item.price.product : item.price?.product?.id;

      return (matcher.priceId && priceId === matcher.priceId) || (matcher.productId && productId === matcher.productId);
    });

    if (matchesPaymentLink || matchesLineItem) {
      return product;
    }
  }

  return null;
}

module.exports = {
  findProductByStripeSession,
  products,
};
