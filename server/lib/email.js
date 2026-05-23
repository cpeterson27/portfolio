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

async function sendProductDeliveryEmail({ customerEmail, customerName, product, orderId }) {
  const from = process.env.FULFILLMENT_FROM_EMAIL;
  const replyTo = process.env.FULFILLMENT_REPLY_TO || process.env.FULFILLMENT_FROM_EMAIL;

  if (!from) {
    throw new Error("FULFILLMENT_FROM_EMAIL is required to send fulfillment emails.");
  }

  const resend = getResendClient();
  const pdf = await createProductPdf(product);
  const greeting = customerName ? `Hi ${escapeHtml(customerName)},` : "Hi,";

  return resend.emails.send({
    from,
    to: customerEmail,
    replyTo,
    subject: product.subject,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;max-width:640px;margin:0 auto;padding:24px;">
        <p>${greeting}</p>
        <p>Thank you for purchasing <strong>${escapeHtml(product.name)}</strong>. Your PDF is attached to this email.</p>
        <p>This pack is designed to help you plan products, review UX, shape content, map workflows, and turn ideas into implementation-ready notes.</p>
        <p>If anything looks off with the attachment, reply to this email and I will help.</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
        <p style="font-size:13px;color:#6b7280;">Order reference: ${escapeHtml(orderId)}</p>
        <p style="font-size:13px;color:#6b7280;">Cassandra Peterson</p>
      </div>
    `,
    attachments: [
      {
        filename: product.filename,
        content: pdf.toString("base64"),
      },
    ],
  });
}

module.exports = { sendProductDeliveryEmail };
