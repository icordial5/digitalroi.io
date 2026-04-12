const { execSync } = require('child_process');
console.log(execSync('git log -p -10 src/features/home/sections/HeroSection.tsx').toString());
