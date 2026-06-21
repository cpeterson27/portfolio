const { Resend } = require("resend");
const { createProductPdf } = require("./createProductPdf");

function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is required to send fulfillment emails.");
  }

  return new Resend(process.env.RESEND_API_KEY);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getDelivery(product) {
  if (product.delivery?.type === "link") {
    const url = process.env[product.delivery.urlEnv];

    if (!url) {
      throw new Error(`${product.delivery.urlEnv} is required to deliver ${product.name}.`);
    }

    return {
      attachments: [],
      content: `
        <p>Thank you for purchasing <strong>${escapeHtml(product.name)}</strong>.</p>
        <p>${escapeHtml(product.fulfillmentCopy)}</p>
        <p style="margin:24px 0;">
          <a href="${escapeHtml(url)}" style="display:inline-block;padding:12px 18px;border-radius:8px;background:#9f5d32;color:#ffffff;font-weight:700;text-decoration:none;">
            ${escapeHtml(product.delivery.buttonLabel || "Access your product")}
          </a>
        </p>
        <p>If the duplicate button is missing or anything looks wrong, reply to this email and I will help.</p>
      `,
    };
  }

  return {
    attachments: null,
    content: `
      <p>Thank you for purchasing <strong>${escapeHtml(product.name)}</strong>. Your PDF is attached to this email.</p>
      <p>This pack is designed to help you plan products, review UX, shape content, map workflows, and turn ideas into implementation-ready notes.</p>
      <p>If anything looks off with the attachment, reply to this email and I will help.</p>
    `,
  };
}

async function sendProductDeliveryEmail({ customerEmail, customerName, product, orderId }) {
  const from = process.env.FULFILLMENT_FROM_EMAIL;
  const replyTo = process.env.FULFILLMENT_REPLY_TO || process.env.FULFILLMENT_FROM_EMAIL;

  if (!from) {
    throw new Error("FULFILLMENT_FROM_EMAIL is required to send fulfillment emails.");
  }

  const resend = getResendClient();
  const greeting = customerName ? `Hi ${escapeHtml(customerName)},` : "Hi,";
  const delivery = getDelivery(product);
  let attachments = delivery.attachments;

  if (attachments === null) {
    const pdf = await createProductPdf(product);
    attachments = [
      {
        filename: product.filename,
        content: pdf.toString("base64"),
      },
    ];
  }

  return resend.emails.send({
    from,
    to: customerEmail,
    replyTo,
    subject: product.subject,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;max-width:640px;margin:0 auto;padding:24px;">
        <p>${greeting}</p>
        ${delivery.content}
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
        <p style="font-size:13px;color:#6b7280;">Order reference: ${escapeHtml(orderId)}</p>
        <p style="font-size:13px;color:#6b7280;">Cassandra Peterson</p>
      </div>
    `,
    attachments,
  });
}

module.exports = { getDelivery, sendProductDeliveryEmail };
