// build.js

const fs = require('fs');
const path = require('path');

// Simulating a build process by creating a "dist" folder and a file inside
const buildDirectory = path.join(__dirname, 'dist');

// Create 'dist' directory if it doesn't exist
if (!fs.existsSync(buildDirectory)) {
    fs.mkdirSync(buildDirectory);
    console.log('Created dist directory');
}

// Write a sample build file to 'dist' folder
const buildFilePath = path.join(buildDirectory, 'index.html');
fs.writeFileSync(buildFilePath, '<h1>Build Successful</h1>');
console.log('Build complete: index.html created in dist folder');

// Exiting process successfully
process.exit(0);
