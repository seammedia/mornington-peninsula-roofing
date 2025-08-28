// Generate only hero images with exact naming
import sharp from 'sharp';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const srcDir = 'assets/img';
const heroDir = 'assets/img/hero';
const widths = [800, 1200, 1600, 2000];

if (!existsSync(heroDir)) mkdirSync(heroDir, { recursive: true });

const heroFile = 'Mornington_Peninsula_Roofing_Hero.png';
if (existsSync(join(srcDir, heroFile))) {
    console.log('Processing hero image...');
    const base = 'mpr-hero';
    for (const w of widths) {
        const pipeline = sharp(join(srcDir, heroFile)).resize({ width: w });
        await pipeline.avif({ quality: 55 }).toFile(join(heroDir, `${base}-${w}.avif`));
        await pipeline.webp({ quality: 60 }).toFile(join(heroDir, `${base}-${w}.webp`));
        await pipeline.jpeg({ quality: 70, mozjpeg: true }).toFile(join(heroDir, `${base}-${w}.jpg`));
    }
    console.log('Hero images generated!');
}