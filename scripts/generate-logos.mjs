import sharp from "sharp";

const names = [
  "ROYAL CROWN",
  "MAPLE FORTUNE",
  "NORTHERN LIGHTS",
  "AURORA SPINS",
  "GREAT NORTH",
];

await Promise.all(
  names.map((name, i) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="50">
      <rect width="150" height="50" rx="6" fill="#1a1a2e"/>
      <text x="75" y="32" text-anchor="middle" fill="#FFD700" font-family="Arial" font-size="11" font-weight="bold">${name}</text>
    </svg>`;

    return sharp(Buffer.from(svg)).png().toFile(`public/casino-logo-${i + 1}.png`);
  })
);

console.log("Placeholder logos generated.");
