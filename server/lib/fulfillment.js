async function fulfillCheckoutSession({
  event,
  findProductByStripeSession,
  markFulfilled,
  reserveFulfillment,
  sendProductDeliveryEmail,
  stripe,
}) {
  const shouldProcess = await reserveFulfillment(event.id);

  if (!shouldProcess) {
    return { received: true, duplicate: true };
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
  return { received: true, fulfilled: product.id };
}

module.exports = { fulfillCheckoutSession };
