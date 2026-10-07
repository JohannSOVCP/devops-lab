const { mkdirSync, copyFileSync } = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
mkdirSync(path.join(root, 'dist'), { recursive: true });
copyFileSync(path.join(root, 'src', 'app.js'), path.join(root, 'dist', 'app.js'));
console.log('Build ready: dist/app.js');
