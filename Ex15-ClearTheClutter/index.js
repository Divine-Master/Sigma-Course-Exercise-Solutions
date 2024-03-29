const fs = require('fs');
const p = require('path');

const path = './sample-clutter/';

async function organizeFiles() {
  try {
    const files = await fs.promises.readdir(path);

    for (const filename of files) {
      const fullPath = p.join(path, filename);
      const stats = await fs.promises.stat(fullPath);

      if (stats.isFile()) {
        const extension = p.extname(filename).toLowerCase(); // Get extension with dot
        const extensionDir = p.join(path, extension.slice(1)); // Remove leading dot

        await fs.promises.mkdir(extensionDir, { recursive: true }); // Create nested dirs
        const newPath = p.join(extensionDir, filename);
        await fs.promises.rename(fullPath, newPath); // Use rename for potential overwrites
        console.log(`File ${filename} moved successfully!`);
      }
    }
  } catch (err) {
    console.error('Error organizing files:', err);
  }
}

organizeFiles();