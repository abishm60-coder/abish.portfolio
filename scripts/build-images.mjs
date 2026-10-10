// Builds optimized portrait assets from portrait-source.png, removing its solid edge-connected background.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const { data, info } = await sharp('portrait-source.png').removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const pixelCount = width * height;
const background = new Uint8Array(pixelCount);
const queue = new Uint32Array(pixelCount);
let head = 0;
let tail = 0;

const isWhiteBackground = (pixel) => {
  const offset = pixel * channels;
  const red = data[offset];
  const green = data[offset + 1];
  const blue = data[offset + 2];
  const white = red >= 242 && green >= 242 && blue >= 242 && Math.max(red, green, blue) - Math.min(red, green, blue) <= 18;
  const blueGray = blue >= 90 && blue - red >= 25 && green - red >= 10 && blue - green <= 70;
  return white || blueGray;
};

const enqueue = (pixel) => {
  if (!background[pixel] && isWhiteBackground(pixel)) {
    background[pixel] = 1;
    queue[tail++] = pixel;
  }
};

for (let x = 0; x < width; x++) {
  enqueue(x);
  enqueue((height - 1) * width + x);
}
for (let y = 1; y < height - 1; y++) {
  enqueue(y * width);
  enqueue(y * width + width - 1);
}

while (head < tail) {
  const pixel = queue[head++];
  const x = pixel % width;
  if (x > 0) enqueue(pixel - 1);
  if (x < width - 1) enqueue(pixel + 1);
  if (pixel >= width) enqueue(pixel - width);
  if (pixel < pixelCount - width) enqueue(pixel + width);
}

const rgba = Buffer.alloc(pixelCount * 4);
for (let i = 0; i < pixelCount; i++) {
  rgba[i * 4] = data[i * channels];
  rgba[i * 4 + 1] = data[i * channels + 1];
  rgba[i * 4 + 2] = data[i * channels + 2];
  rgba[i * 4 + 3] = background[i] ? 0 : 255;
}
const cutout = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();

for (const w of [1100, 720, 420]) {
  await sharp(cutout).resize({ width: w }).webp({ quality: 86, alphaQuality: 90 }).toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop
const portrait = await sharp(cutout).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="128" fill="#f4f1ec" letter-spacing="4">ABISH</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">MERN STACK DEVELOPER • FULL-STACK WEB DEVELOPMENT • JAVASCRIPT</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);
console.log('images built');
