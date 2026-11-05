const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function buildFavicon() {
  const srcPath = 'C:/Users/9c23s/.gemini/antigravity/brain/a4799aed-78b3-4de9-871a-f76a89401098/.user_uploaded/media_1793888659023_23f0ec80.png';
  
  if (!fs.existsSync(srcPath)) {
    throw new Error('Source image not found at ' + srcPath);
  }

  // Crop the glyph region tightly
  const crop = await sharp(srcPath)
    .extract({ left: 135, top: 255, width: 360, height: 295 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = crop;
  const glyphBuffer = Buffer.alloc(info.width * info.height * 4);

  // Convert dark ink to ivory #F8F4E9 with smooth alpha
  for (let i = 0; i < info.width * info.height; i++) {
    const srcIdx = i * info.channels;
    const dstIdx = i * 4;
    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];
    const brightness = (r + g + b) / 3;

    let alpha = 0;
    if (brightness < 248) {
      alpha = Math.min(255, Math.round(((250 - brightness) / 225) * 255));
    }

    glyphBuffer[dstIdx] = 248;     // #F8F4E9
    glyphBuffer[dstIdx + 1] = 244;
    glyphBuffer[dstIdx + 2] = 233;
    glyphBuffer[dstIdx + 3] = alpha;
  }

  // Save the isolated calligraphic R glyph
  const glyphPng = await sharp(glyphBuffer, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
    .resize(340, null, { fit: 'inside' })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '../public/assets/r-glyph.png'), glyphPng);

  // Circular dark badge SVG
  const circleSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg" cx="50%" cy="38%" r="60%">
          <stop offset="0%" stop-color="#24132B" />
          <stop offset="65%" stop-color="#0D0712" />
          <stop offset="100%" stop-color="#060308" />
        </radialGradient>
      </defs>
      <circle cx="256" cy="256" r="248" fill="url(#bg)" stroke="#935073" stroke-width="4" stroke-opacity="0.4" />
      <circle cx="256" cy="256" r="248" fill="none" stroke="#502D55" stroke-width="2" />
    </svg>
  `);

  // Composite calligraphic R centered in circular badge
  const icon512 = await sharp(circleSvg)
    .composite([{ input: glyphPng, gravity: 'center' }])
    .png()
    .toBuffer();

  // Write Next.js App Router icons and public fallback icons
  fs.writeFileSync(path.join(__dirname, '../src/app/icon.png'), icon512);
  fs.writeFileSync(path.join(__dirname, '../public/icon.png'), icon512);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.png'), await sharp(icon512).resize(32, 32).png().toBuffer());
  fs.writeFileSync(path.join(__dirname, '../public/apple-touch-icon.png'), await sharp(icon512).resize(180, 180).png().toBuffer());
  fs.writeFileSync(path.join(__dirname, '../src/app/apple-icon.png'), await sharp(icon512).resize(180, 180).png().toBuffer());

  // Generate ICO format with 16x16, 32x32, and 48x48 PNG frames
  const p16 = await sharp(icon512).resize(16, 16).png().toBuffer();
  const p32 = await sharp(icon512).resize(32, 32).png().toBuffer();
  const p48 = await sharp(icon512).resize(48, 48).png().toBuffer();

  function makeIco(images) {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // icon type
    header.writeUInt16LE(images.length, 4); // count

    const entries = [];
    let offset = 6 + images.length * 16;
    for (const img of images) {
      const entry = Buffer.alloc(16);
      entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
      entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
      entry.writeUInt8(0, 2); // color palette count
      entry.writeUInt8(0, 3); // reserved
      entry.writeUInt16LE(1, 4); // color planes
      entry.writeUInt16LE(32, 6); // bits per pixel
      entry.writeUInt32LE(img.data.length, 8); // image size in bytes
      entry.writeUInt32LE(offset, 12); // image data offset
      entries.push(entry);
      offset += img.data.length;
    }

    return Buffer.concat([header, ...entries, ...images.map((img) => img.data)]);
  }

  const icoBuffer = makeIco([
    { width: 16, height: 16, data: p16 },
    { width: 32, height: 32, data: p32 },
    { width: 48, height: 48, data: p48 },
  ]);

  fs.writeFileSync(path.join(__dirname, '../src/app/favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);

  console.log('Successfully created R favicon and icons!');
}

buildFavicon().catch((err) => {
  console.error('Error generating favicon:', err);
  process.exit(1);
});
