const PDFDocument = require("pdfkit");

function writeParagraph(doc, text, options = {}) {
  doc.font(options.font || "Helvetica").fontSize(options.size || 10.5).fillColor(options.color || "#1f2937");
  doc.text(text, {
    align: "left",
    lineGap: options.lineGap ?? 3,
  });
}

function createProductPdf(product) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "LETTER",
      margins: { top: 56, bottom: 56, left: 56, right: 56 },
      info: {
        Title: product.name,
        Author: "Cassandra Peterson",
        Subject: "Digital product prompt pack",
      },
    });
    const chunks = [];

    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    doc
      .font("Helvetica-Bold")
      .fontSize(24)
      .fillColor("#0f172a")
      .text(product.name, { lineGap: 4 });

    doc.moveDown(0.5);
    doc.font("Helvetica").fontSize(11).fillColor("#475569").text("By Cassandra Peterson");
    doc.moveDown(1.4);
    writeParagraph(doc, product.intro, { size: 11.5, lineGap: 5 });

    product.sections.forEach((section, sectionIndex) => {
      if (sectionIndex > 0) {
        doc.addPage();
      } else {
        doc.moveDown(1.8);
      }

      doc.font("Helvetica-Bold").fontSize(16).fillColor("#0f172a").text(section.title);
      doc.moveDown(0.8);

      section.prompts.forEach((prompt, promptIndex) => {
        if (doc.y > 650) {
          doc.addPage();
        }

        doc
          .font("Helvetica-Bold")
          .fontSize(12)
          .fillColor("#111827")
          .text(`${promptIndex + 1}. ${prompt.title}`);
        doc.moveDown(0.25);
        writeParagraph(doc, prompt.body, { size: 10.5, lineGap: 4 });
        doc.moveDown(0.9);
      });
    });

    doc.addPage();
    doc.font("Helvetica-Bold").fontSize(16).fillColor("#0f172a").text("A Simple Workflow");
    doc.moveDown(0.8);
    writeParagraph(
      doc,
      "1. Choose one prompt that matches the decision in front of you.\n2. Add specific context from your product, audience, and current constraints.\n3. Ask for a concrete artifact: checklist, page outline, implementation brief, launch plan, or review.\n4. Edit the answer with your judgment.\n5. Save the useful output in your product notes so it can become part of your system.",
      { size: 11, lineGap: 5 }
    );
    doc.moveDown(1.3);
    writeParagraph(
      doc,
      "Thank you for buying this pack. You can reply to your delivery email if you have trouble accessing the file.",
      { size: 10.5, color: "#475569" }
    );

    doc.end();
  });
}

module.exports = { createProductPdf };
