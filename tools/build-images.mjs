// /tools/build-images.mjs
import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync } from "fs";
import { join, extname, basename } from "path";

const SRC = "assets/img";
const OUT = "assets/img/hero";
const widths = [640, 960, 1280, 1600];

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

// Process hero image specifically
const heroFile = "Mornington_Peninsula_Roofing_Hero.png";
if (existsSync(join(SRC, heroFile))) {
    const base = "MPR-hero";
    for (const w of widths) {
        const pipeline = sharp(join(SRC, heroFile)).resize({ width: w });
        await pipeline.avif({ quality: 50 }).toFile(join(OUT, `${base}-${w}.avif`));
        await pipeline.webp({ quality: 70 }).toFile(join(OUT, `${base}-${w}.webp`));
        await pipeline.jpeg({ quality: 78, mozjpeg: true }).toFile(join(OUT, `${base}-${w}.jpg`));
    }
    console.log("Generated optimized hero images:", heroFile);
} else {
    console.log("Hero file not found, creating placeholder structure");
    // Create placeholder structure for deployment
    for (const w of widths) {
        const base = "MPR-hero";
        // Copy original as fallbacks until Sharp can process
        if (existsSync(join(SRC, "Mornington_Peninsula_Roofing_Hero.png"))) {
            await sharp(join(SRC, "Mornington_Peninsula_Roofing_Hero.png"))
                .resize({ width: w })
                .jpeg({ quality: 78 })
                .toFile(join(OUT, `${base}-${w}.jpg`));
        }
    }
}

console.log("Image generation complete!");