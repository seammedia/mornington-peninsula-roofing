// /tools/build-images.mjs - Generate modern formats following exact specifications
import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const srcDir = 'assets/img';
const outDir = 'assets/img';
const heroDir = 'assets/img/hero';
const widths = [800, 1200, 1600, 2000];

if (!existsSync(heroDir)) mkdirSync(heroDir, { recursive: true });

// Process hero image with exact naming convention
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
    console.log(`✓ Generated hero images: ${base}-[${widths.join(',')}].[avif,webp,jpg]`);
}

// Process all other images (service images, etc.)
console.log('Processing service and content images...');
for (const f of readdirSync(srcDir)) {
    if (!/\.(jpe?g|png)$/i.test(f) || f === heroFile) continue;
    
    const base = f.replace(/\.(jpe?g|png)$/i, '').toLowerCase().replace(/[_\s]/g, '-');
    console.log(`Processing: ${f} -> ${base}-*`);
    
    for (const w of widths) {
        const pipeline = sharp(join(srcDir, f)).resize({ width: w });
        await pipeline.avif({ quality: 55 }).toFile(join(outDir, `${base}-${w}.avif`));
        await pipeline.webp({ quality: 60 }).toFile(join(outDir, `${base}-${w}.webp`));
        await pipeline.jpeg({ quality: 70, mozjpeg: true }).toFile(join(outDir, `${base}-${w}.jpg`));
    }
}

console.log('✓ Image generation complete! All images converted to AVIF/WebP/JPEG with responsive variants.');