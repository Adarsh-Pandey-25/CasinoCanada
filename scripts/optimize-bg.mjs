import sharp from "sharp";
import path from "path";

const src = path.join(
  "C:/Users/user/.cursor/projects/c-Users-user-Desktop-canadacasino/assets",
  "c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_e5ae0397e9e1ee94e7c684246f0cb177_images_ChatGPT_Image_Jun_11__2026__12_39_25_PM-31112ae0-aed7-491f-aeb9-49c20762a7ea.png"
);

const pipeline = sharp(src).resize(1920, null, {
  withoutEnlargement: true,
  fit: "inside",
});

await pipeline
  .clone()
  .webp({ quality: 78, effort: 4 })
  .toFile("public/casino-bg.webp");

await pipeline
  .clone()
  .jpeg({ quality: 72, mozjpeg: true })
  .toFile("public/casino-bg.jpg");

console.log("Background optimized: casino-bg.webp & casino-bg.jpg");
