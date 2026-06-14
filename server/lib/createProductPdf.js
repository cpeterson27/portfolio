const PDFDocument = require("pdfkit");

function writeParagraph(doc, text, options = {}) {
  doc.font(options.font || "Helvetica").fontSize(options.size || 10.5).fillColor(options.color || "#1f2937");
  doc.text(text, {
    align: "left",
    lineGap: options.lineGap ?? 3,
  });
}

function writeList(doc, items, options = {}) {
  items.forEach((item) => {
    doc.font(options.font || "Helvetica").fontSize(options.size || 10.5).fillColor(options.color || "#1f2937");
    doc.text(`- ${item}`, { lineGap: options.lineGap ?? 3 });
  });
}

function writeHeading(doc, text, size = 16) {
  doc.font("Helvetica-Bold").fontSize(size).fillColor("#0f172a").text(text);
}

function drawMiniPage(doc, x, y, width, height, title, color = "#dbeafe") {
  doc.roundedRect(x, y, width, height, 8).fillAndStroke("#ffffff", "#cbd5e1");
  doc.rect(x, y, width, 24).fill(color);
  doc.font("Helvetica-Bold").fontSize(8.5).fillColor("#0f172a").text(title, x + 10, y + 8, {
    width: width - 20,
  });
  doc.roundedRect(x + 10, y + 38, width - 20, 7, 3).fill("#cbd5e1");
  doc.roundedRect(x + 10, y + 52, width - 42, 7, 3).fill("#e2e8f0");
  doc.roundedRect(x + 10, y + 66, width - 30, 7, 3).fill("#e2e8f0");
  doc.roundedRect(x + 10, y + 90, width - 20, 24, 5).fill("#f8fafc").stroke("#e2e8f0");
}

function drawWorkflowVisual(doc) {
  const startX = 66;
  const startY = doc.y;
  const steps = [
    ["1", "Context"],
    ["2", "Prompt"],
    ["3", "Artifact"],
    ["4", "Review"],
    ["5", "Save"],
  ];

  doc.roundedRect(56, startY, 500, 128, 10).fillAndStroke("#f8fafc", "#dbeafe");
  doc.font("Helvetica-Bold").fontSize(12).fillColor("#0f172a").text("The working loop", 76, startY + 16);
  doc.font("Helvetica").fontSize(9.5).fillColor("#475569").text(
    "Each prompt is designed to move from messy context to a reusable product asset.",
    76,
    startY + 34,
    { width: 430 }
  );

  steps.forEach(([number, label], index) => {
    const x = startX + index * 94;
    const y = startY + 68;
    doc.circle(x + 18, y + 18, 18).fill(index % 2 === 0 ? "#bbf7d0" : "#bfdbfe");
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#0f172a").text(number, x + 14, y + 12);
    doc.font("Helvetica-Bold").fontSize(8).fillColor("#334155").text(label, x - 6, y + 44, { width: 48, align: "center" });

    if (index < steps.length - 1) {
      doc.moveTo(x + 42, y + 18).lineTo(x + 74, y + 18).strokeColor("#94a3b8").lineWidth(1.2).stroke();
    }
  });

  doc.x = 56;
  doc.y = startY + 152;
}

function drawArtifactMap(doc, artifacts) {
  const startY = doc.y;
  const colors = ["#dcfce7", "#dbeafe", "#ffe4e6", "#fef3c7", "#ede9fe", "#e0f2fe"];

  doc.font("Helvetica-Bold").fontSize(14).fillColor("#0f172a").text("Artifact Map", 56, startY);
  doc.font("Helvetica").fontSize(9.5).fillColor("#475569").text(
    "The product is organized around useful documents buyers can produce, edit, and reuse.",
    56,
    startY + 20,
    { width: 470 }
  );

  artifacts.forEach((artifact, index) => {
    const col = index % 2;
    const row = Math.floor(index / 2);
    const x = 56 + col * 255;
    const y = startY + 54 + row * 74;

    doc.roundedRect(x, y, 236, 56, 7).fillAndStroke("#ffffff", "#e2e8f0");
    doc.roundedRect(x + 12, y + 14, 28, 28, 7).fill(colors[index]);
    doc.font("Helvetica-Bold").fontSize(10).fillColor("#0f172a").text(artifact[0], x + 52, y + 12, { width: 160 });
    doc.font("Helvetica").fontSize(8.5).fillColor("#475569").text(artifact[1], x + 52, y + 27, {
      width: 160,
      height: 22,
    });
  });

  doc.x = 56;
  doc.y = startY + 292;
}

function drawWorkbookPreview(doc, product) {
  const startY = doc.y;

  doc.roundedRect(56, startY, 500, 238, 10).fillAndStroke("#f1f5f9", "#cbd5e1");
  doc.roundedRect(84, startY + 28, 190, 180, 10).fillAndStroke("#ffffff", "#bfdbfe");
  doc.rect(84, startY + 28, 190, 44).fill("#d9f99d");
  doc.font("Helvetica-Bold").fontSize(9).fillColor("#0f172a").text("PDF WORKBOOK", 104, startY + 44);
  doc.font("Helvetica-Bold").fontSize(18).fillColor("#0f172a").text(product.name, 104, startY + 92, {
    width: 142,
    lineGap: 2,
  });
  doc.roundedRect(104, startY + 160, 118, 8, 4).fill("#cbd5e1");
  doc.roundedRect(104, startY + 176, 84, 8, 4).fill("#e2e8f0");

  drawMiniPage(doc, 302, startY + 34, 96, 126, "Product brief", "#bfdbfe");
  drawMiniPage(doc, 420, startY + 58, 96, 126, "Launch plan", "#fecdd3");

  doc.x = 56;
  doc.y = startY + 268;
}

function writeCallout(doc, title, body) {
  const startY = doc.y;
  doc.roundedRect(doc.x, startY, 500, 84, 6).fillAndStroke("#f8fafc", "#e2e8f0");
  doc.y = startY + 14;
  doc.x = 72;
  doc.font("Helvetica-Bold").fontSize(11).fillColor("#0f172a").text(title);
  doc.moveDown(0.35);
  writeParagraph(doc, body, { size: 10, color: "#334155", lineGap: 3 });
  doc.x = 56;
  doc.y = startY + 104;
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
    doc.moveDown(1);
    writeCallout(doc, "What this helps you create", product.promise);
    doc.moveDown(0.4);
    drawWorkflowVisual(doc);

    doc.addPage();
    writeHeading(doc, "What Is Inside", 18);
    doc.moveDown(0.8);
    drawWorkbookPreview(doc, product);
    drawArtifactMap(doc, product.artifacts || []);

    doc.addPage();
    writeHeading(doc, "Who This Is For");
    doc.moveDown(0.7);
    writeList(doc, product.audience, { size: 10.5, lineGap: 4 });
    doc.moveDown(1.4);
    writeHeading(doc, "What You Should Walk Away With");
    doc.moveDown(0.7);
    writeList(doc, product.outcomes, { size: 10.5, lineGap: 4 });
    doc.moveDown(1.4);
    writeHeading(doc, "30-Minute Quick Start");
    doc.moveDown(0.7);
    product.quickStart.forEach((item, index) => {
      writeParagraph(doc, `${index + 1}. ${item}`, { size: 10.5, lineGap: 4 });
    });

    product.sections.forEach((section, sectionIndex) => {
      doc.addPage();

      writeHeading(doc, section.title);
      doc.moveDown(0.8);

      section.prompts.forEach((prompt, promptIndex) => {
        if (doc.y > 620) {
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
