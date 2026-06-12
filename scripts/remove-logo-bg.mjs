import sharp from "sharp";
import { rename, unlink } from "fs/promises";
import path from "path";

function isBackgroundPixel(r, g, b, a) {
  if (a < 20) return true;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const spread = max - min;

  // White & off-white
  if (min >= 190 && spread <= 35) return true;

  // Checkerboard / light gray neutrals
  if (spread <= 18 && min >= 140) return true;

  return false;
}

function floodFillBackground(pixels, width, height) {
  const visited = new Uint8Array(width * height);
  const queue = [];

  const pushIfBg = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const idx = y * width + x;
    if (visited[idx]) return;

    const i = idx * 4;
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];

    if (!isBackgroundPixel(r, g, b, a)) return;

    visited[idx] = 1;
    queue.push(idx);
  };

  // Flood from all image edges
  for (let x = 0; x < width; x++) {
    pushIfBg(x, 0);
    pushIfBg(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    pushIfBg(0, y);
    pushIfBg(width - 1, y);
  }

  // Also seed from center for enclosed white areas (e.g. circular logos)
  pushIfBg(Math.floor(width / 2), Math.floor(height / 2));

  while (queue.length > 0) {
    const idx = queue.pop();
    const x = idx % width;
    const y = Math.floor(idx / width);

    pushIfBg(x - 1, y);
    pushIfBg(x + 1, y);
    pushIfBg(x, y - 1);
    pushIfBg(x, y + 1);
  }

  for (let idx = 0; idx < width * height; idx++) {
    if (visited[idx]) {
      pixels[idx * 4 + 3] = 0;
    }
  }
}

function cleanFringe(pixels) {
  for (let i = 0; i < pixels.length; i += 4) {
    const a = pixels[i + 3];
    if (a === 0) continue;

    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    // Remove leftover near-white fringe pixels
    if (r >= 210 && g >= 210 && b >= 210) {
      pixels[i + 3] = 0;
    }
  }
}

async function processLogo(inputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = new Uint8Array(data);
  floodFillBackground(pixels, info.width, info.height);
  cleanFringe(pixels);

  const tempPath = `${inputPath}.tmp`;
  await sharp(pixels, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim()
    .png({ compressionLevel: 9 })
    .toFile(tempPath);

  try {
    await unlink(inputPath);
  } catch {
    // ignore
  }
  await rename(tempPath, inputPath);
  console.log(`Processed: ${path.basename(inputPath)}`);
}

const originals = [
  "c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_e5ae0397e9e1ee94e7c684246f0cb177_images_cas1-229d23f3-aba8-4d88-ba56-9a52876cef43.png",
  "c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_e5ae0397e9e1ee94e7c684246f0cb177_images_cas2-b777f946-b24e-4064-bc18-34ae774e5c85.png",
  "c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_e5ae0397e9e1ee94e7c684246f0cb177_images_cas3-ec06e1e8-f240-40c9-833c-fe91a5f583a1.png",
  "c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_e5ae0397e9e1ee94e7c684246f0cb177_images_cas4-98697deb-8d65-430e-925b-778027886b13.png",
  "c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_e5ae0397e9e1ee94e7c684246f0cb177_images_cas5-69834a5a-093d-43c9-bbc9-b92d9c381a4b.png",
];

const assetsDir =
  "C:/Users/user/.cursor/projects/c-Users-user-Desktop-canadacasino/assets";

for (let i = 0; i < originals.length; i++) {
  const src = path.join(assetsDir, originals[i]);
  const dest = path.join("public", `casino-logo-${i + 1}.png`);
  await sharp(src).png().toFile(dest);
  await processLogo(dest);
}

console.log("All logos restored and processed.");
