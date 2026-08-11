/**
 * Copia subsets woff2 (latin + latin-ext) do Fontsource para site/assets/fonts.
 * Uso: npm run fonts:sync
 */
import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dest = join(root, "site", "assets", "fonts");

const packs = [
  {
    id: "cormorant-garamond",
    files: [
      "cormorant-garamond-latin-600-normal.woff2",
      "cormorant-garamond-latin-600-italic.woff2",
      "cormorant-garamond-latin-700-normal.woff2",
      "cormorant-garamond-latin-ext-600-normal.woff2",
      "cormorant-garamond-latin-ext-600-italic.woff2",
      "cormorant-garamond-latin-ext-700-normal.woff2",
    ],
  },
  {
    id: "nunito-sans",
    files: [
      "nunito-sans-latin-400-normal.woff2",
      "nunito-sans-latin-400-italic.woff2",
      "nunito-sans-latin-600-normal.woff2",
      "nunito-sans-latin-700-normal.woff2",
      "nunito-sans-latin-ext-400-normal.woff2",
      "nunito-sans-latin-ext-400-italic.woff2",
      "nunito-sans-latin-ext-600-normal.woff2",
      "nunito-sans-latin-ext-700-normal.woff2",
    ],
  },
  {
    id: "bebas-neue",
    files: ["bebas-neue-latin-400-normal.woff2", "bebas-neue-latin-ext-400-normal.woff2"],
  },
];

mkdirSync(dest, { recursive: true });

let ok = 0;
for (const pack of packs) {
  const srcDir = join(root, "node_modules", "@fontsource", pack.id, "files");
  const license = join(root, "node_modules", "@fontsource", pack.id, "LICENSE");
  for (const file of pack.files) {
    const from = join(srcDir, file);
    if (!existsSync(from)) {
      console.error(`Missing: ${from}`);
      process.exitCode = 1;
      continue;
    }
    copyFileSync(from, join(dest, file));
    ok += 1;
  }
  if (existsSync(license)) {
    copyFileSync(license, join(dest, `OFL-${pack.id}.txt`));
  }
}

console.log(`Synced ${ok} font files → site/assets/fonts`);
