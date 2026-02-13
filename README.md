# ensure-dir

<p align="center"><a href="https://nodei.co/npm/ensure-dir-tiny/"><img src="https://nodei.co/npm/ensure-dir-tiny.png"></a></a></p>
<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
</p>

* 📁 Lightweight package that ensures that the directory at the given path exists. Creates it recursively if it doesn't. Prevents `"File Not Found"` errors when saving files.
* ♻️ Works seamlessly with `CommonJS`, `ESM` and `TypeScript`

# 📦 Install via [NPM](https://www.npmjs.com/package/contains-emoji)

```bash
$ npm i ensure-dir
```

# 💻 Usage

- See examples below

## CommonJS
```javascript
const path = require('path');
const fs = require('fs');
const ensureDir = require('ensure-dir-tiny');

const testDir = path.join(__dirname, 'demo/a/b/c');

console.log('Creating directory:', testDir);
ensureDir(testDir);

if (fs.existsSync(testDir)) {
    console.log('✅ Directory exists — module works');
} else {
    console.log('❌ Directory not created');
}

// --| Run again to test idempotency
ensureDir(testDir);
console.log('✅ Called twice without crashing');

```

## ESM
```javascript
import path from 'path';
import fs from 'fs';
import ensureDir from 'ensure-dir-tiny';
import { fileURLToPath } from 'url';

// __dirname replacement in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testDir = path.join(__dirname, 'demo/a/b/c');

console.log('Creating directory:', testDir);
ensureDir(testDir);

if (fs.existsSync(testDir)) {
    console.log('✅ Directory exists — module works');
} else {
    console.log('❌ Directory not created');
}

// --| Run again to test idempotency
ensureDir(testDir);
console.log('✅ Called twice without crashing');
```

## TypeScript
```javascript
import path from 'path';
import fs from 'fs';
import ensureDir from 'ensure-dir-tiny';

const testDir: string = path.join(__dirname, 'demo/a/b/c');
console.log('Creating directory:', testDir);

ensureDir(testDir);

if (fs.existsSync(testDir)) {
    console.log('✅ Directory exists — module works');
} else {
    console.log('❌ Directory not created');
}

ensureDir(testDir);
console.log('✅ Called twice without crashing');
```
