const fs = require('fs');
const path = require('path');

function searchFiles(dir, keyword) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      searchFiles(fullPath, keyword);
    } else if (fullPath.endsWith('.txt') || fullPath.endsWith('.log')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes(keyword)) {
        console.log(`Found in: ${fullPath}`);
        const lines = content.split('\n');
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes(keyword)) {
            console.log(lines.slice(Math.max(0, i - 10), i + 10).join('\n'));
            console.log('---');
          }
        }
      }
    }
  }
}

searchFiles('/.gemini/antigravity/brain/', 'HeroSection.tsx');
