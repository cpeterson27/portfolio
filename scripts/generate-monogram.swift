// Run with: swift scripts/generate-monogram.swift
// Creates the ivory and antique-gold CP master used by generate-icons.js.
import AppKit

let size = 1030
let bitmap = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: size, pixelsHigh: size,
    bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false,
    colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: bitmap)
NSColor(srgbRed: 250/255, green: 247/255, blue: 240/255, alpha: 1).setFill()
NSBezierPath(rect: NSRect(x: 0, y: 0, width: size, height: size)).fill()
NSColor(srgbRed: 181/255, green: 147/255, blue: 76/255, alpha: 1).setStroke()
let ring = NSBezierPath(ovalIn: NSRect(x: 95, y: 95, width: 840, height: 840))
ring.lineWidth = 28
ring.stroke()
let text = "CP" as NSString
let attributes: [NSAttributedString.Key: Any] = [
    .font: NSFont(name: "Georgia", size: 440)!,
    .foregroundColor: NSColor(srgbRed: 128/255, green: 96/255, blue: 30/255, alpha: 1),
    .kern: -30
]
let bounds = text.size(withAttributes: attributes)
text.draw(at: NSPoint(x: (1030 - bounds.width) / 2, y: (1030 - bounds.height) / 2 + 12), withAttributes: attributes)
NSGraphicsContext.restoreGraphicsState()
try bitmap.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: "public/favicon-master.png"))
