const fs = require('fs');
const path = require('path');

console.log('Checking Trendly E-Commerce project setup...\n');
console.log('Project by ELYES');
console.log('© ELYES 2024-2025. All rights reserved.\n');

// Check for required files
const requiredFiles = [
  'package.json',
  'tsconfig.json',
  'next.config.js',
  'tailwind.config.js',
  'postcss.config.js',
  '.env.local',
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/components/hero.tsx',
  'src/components/featured-products.tsx',
  'src/components/trending-section.tsx',
  'src/components/community-feed.tsx',
  'src/components/product/product-card.tsx',
  'next-env.d.ts',
  'src/types.d.ts'
];

let missingFiles = [];

requiredFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    missingFiles.push(file);
  }
});

if (missingFiles.length > 0) {
  console.log('❌ Missing required files:');
  missingFiles.forEach(file => {
    console.log(`   - ${file}`);
  });
} else {
  console.log('✅ All required files are present');
}

// Check for required directories
const requiredDirs = [
  'public/products',
  'public/categories',
  'public/avatars',
  'src/components/ui',
  'src/components/layout',
  'src/components/product',
  'src/components/cart',
  'src/lib',
  'src/hooks',
  'src/store',
  'src/styles'
];

let missingDirs = [];

requiredDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    missingDirs.push(dir);
  }
});

if (missingDirs.length > 0) {
  console.log('\n❌ Missing required directories:');
  missingDirs.forEach(dir => {
    console.log(`   - ${dir}`);
  });
} else {
  console.log('\n✅ All required directories are present');
}

// Check for Node.js and npm
try {
  const nodeVersion = process.version;
  console.log(`\n✅ Node.js is installed (version ${nodeVersion})`);
} catch (error) {
  console.log('\n❌ Node.js is not installed or not in PATH');
}

try {
  const npmVersion = require('child_process').execSync('npm --version').toString().trim();
  console.log(`✅ npm is installed (version ${npmVersion})`);
} catch (error) {
  console.log('❌ npm is not installed or not in PATH');
}

// Summary
if (missingFiles.length === 0 && missingDirs.length === 0) {
  console.log('\n🎉 Your project is set up correctly!');
  console.log('Run "npm run dev" to start the development server.');
} else {
  console.log('\n⚠️ Your project setup is incomplete.');
  console.log('Please follow the instructions in SETUP.md to complete the setup.');
}

console.log('\nDone by ELYES'); 