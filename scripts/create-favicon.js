const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createFavicon() {
  try {
    const inputPath = path.join(__dirname, '../public/MinhTien_logo.png');
    const squareLogoPath = path.join(__dirname, '../public/MinhTien_logo_square.png');
    const faviconPath = path.join(__dirname, '../public/favicon.ico');

    console.log('Creating square logo from MinhTien_logo.png...');
    
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`Original dimensions: ${metadata.width} x ${metadata.height}`);

    // Create square version with padding (use the smaller dimension)
    const size = Math.min(metadata.width, metadata.height);
    
    // Create square logo with transparent background
    await sharp(inputPath)
      .resize(256, 256, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toFile(squareLogoPath);
    
    console.log(`✓ Square logo created: ${squareLogoPath}`);

    // Create favicon from square logo
    await sharp(squareLogoPath)
      .resize(64, 64)
      .toFile(faviconPath.replace('.ico', '.png'));
    
    // Create 32x32 version for favicon
    await sharp(squareLogoPath)
      .resize(32, 32)
      .toFile(faviconPath.replace('.ico', '_32.png'));

    console.log(`✓ Favicon created: ${faviconPath}`);
    console.log('Done!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

createFavicon();
