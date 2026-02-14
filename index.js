/**
 *  ensure-dir-tiny - 📁 Ensures that the directory at the given path exists. Creates it recursively if it doesn't. Prevents "File Not Found" errors when saving files.
 *  @version: v1.0.4
 *  @link: https://github.com/tutyamxx/ensure-dir-tiny
 *  @license: MIT
 **/

const fs = require('fs');

/**
 * Ensures that the directory at the given path exists. Creates it recursively if it doesn't.
 * Prevents "File Not Found" errors when saving files.
 *
 * @param {string} path - The path of the directory to ensure.
 * @returns {void}
 *
 * @example
 * ensureDir("./data/logs");
 */
const ensureDir = path => fs.existsSync(path) || fs.mkdirSync(path, { recursive: true });

// --| CommonJS export
module.exports = ensureDir;

// --| ESM default export for `import` statements
module.exports.default = ensureDir;
