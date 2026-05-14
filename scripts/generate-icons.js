const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync } = require("child_process");

const publicDir = path.join(__dirname, "..", "public");
const svgPath = path.join(publicDir, "favicon.svg");
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "cp-favicon-"));

function renderMaster() {
  execFileSync("qlmanage", ["-t", "-s", "1024", "-o", tmpDir, svgPath], {
    stdio: "ignore",
  });

  const rendered = path.join(tmpDir, "favicon.svg.png");
  if (!fs.existsSync(rendered)) {
    throw new Error("Quick Look did not render favicon.svg");
  }
  return rendered;
}

function resize(source, size, destination) {
  execFileSync("sips", ["-z", String(size), String(size), source, "--out", destination], {
    stdio: "ignore",
  });
}

function iconDirEntry(png, size, offset) {
  const entry = Buffer.alloc(16);
  entry[0] = size === 256 ? 0 : size;
  entry[1] = size === 256 ? 0 : size;
  entry[2] = 0;
  entry[3] = 0;
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(offset, 12);
  return entry;
}

function writeIco(pngFiles) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngFiles.length, 4);

  const images = pngFiles.map(([size, file]) => [size, fs.readFileSync(file)]);
  let offset = header.length + images.length * 16;
  const entries = images.map(([size, png]) => {
    const entry = iconDirEntry(png, size, offset);
    offset += png.length;
    return entry;
  });

  fs.writeFileSync(
    path.join(publicDir, "favicon.ico"),
    Buffer.concat([header, ...entries, ...images.map(([, png]) => png)])
  );
}

const master = renderMaster();
const files = [
  [16, path.join(publicDir, "favicon-16x16.png")],
  [32, path.join(publicDir, "favicon-32x32.png")],
  [48, path.join(tmpDir, "favicon-48x48.png")],
  [64, path.join(tmpDir, "favicon-64x64.png")],
  [180, path.join(publicDir, "apple-touch-icon.png")],
  [192, path.join(publicDir, "android-chrome-192x192.png")],
  [512, path.join(publicDir, "android-chrome-512x512.png")],
];

files.forEach(([size, file]) => resize(master, size, file));
writeIco(files.slice(0, 4));

console.log("Generated anti-aliased favicon and app icon assets from public/favicon.svg.");
