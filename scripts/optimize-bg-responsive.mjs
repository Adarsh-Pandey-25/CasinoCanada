import sharp from "sharp";
import path from "path";

const src = path.join(
  "C:/Users/user/.cursor/projects/c-Users-user-Desktop-canadacasino/assets",
  "c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_e5ae0397e9e1ee94e7c684246f0cb177_images_ChatGPT_Image_Jun_11__2026__12_39_25_PM-31112ae0-aed7-491f-aeb9-49c20762a7ea.png"
);

const sizes = [
  { width: 768, name: "casino-bg-768.webp", quality: 72 },
  { width: 1280, name: "casino-bg-1280.webp", quality: 74 },
  { width: 1920, name: "casino-bg.webp", quality: 76 },
];

for (const { width, name, quality } of sizes) {
  await sharp(src)
    .resize(width, null, { withoutEnlargement: true, fit: "inside" })
    .webp({ quality, effort: 4 })
    .toFile(path.join("public", name));
  console.log(`Created ${name}`);
}

await sharp(src)
  .resize(1280, null, { withoutEnlargement: true, fit: "inside" })
  .jpeg({ quality: 68, mozjpeg: true })
  .toFile("public/casino-bg.jpg");

console.log("Responsive backgrounds ready.");
