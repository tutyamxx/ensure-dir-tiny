const fs = require('fs');
const path = require('path');
const ensureDirTiny = require('../index.js');

describe('ensureDir', () => {
    const baseDir = path.join(__dirname, 'tmp_test');

    const cleanup = () => {
        if (fs.existsSync(baseDir)) {
            fs.rmSync(baseDir, { recursive: true, force: true });
        }
    };

    beforeEach(cleanup);
    afterAll(cleanup);

    test('Creates a new directory if it does not exist', () => {
        const dir = path.join(baseDir, 'newDir');

        ensureDirTiny(dir);
        expect(fs.existsSync(dir)).toBe(true);
    });

    test('Does not throw if directory already exists', () => {
        const dir = path.join(baseDir, 'existingDir');

        fs.mkdirSync(dir, { recursive: true });
        expect(() => ensureDirTiny(dir)).not.toThrow();
    });

    test('Creates nested directories recursively', () => {
        const nestedDir = path.join(baseDir, 'a/b/c/d');

        ensureDirTiny(nestedDir);
        expect(fs.existsSync(nestedDir)).toBe(true);
    });

    test('Is safe to call multiple times (idempotent)', () => {
        const dir = path.join(baseDir, 'repeat');

        ensureDirTiny(dir);
        ensureDirTiny(dir);
        ensureDirTiny(dir);

        expect(fs.existsSync(dir)).toBe(true);
    });

    test('Works with trailing slash', () => {
        const dir = path.join(baseDir, 'slash/') ;

        ensureDirTiny(dir);
        expect(fs.existsSync(dir)).toBe(true);
    });

    test('Works with absolute paths', () => {
        const abs = path.resolve(baseDir, 'absoluteDir');

        ensureDirTiny(abs);
        expect(fs.existsSync(abs)).toBe(true);
    });

    test('Works with relative paths', () => {
        const rel = './tmp_test/relativeDir';

        ensureDirTiny(rel);
        expect(fs.existsSync(rel)).toBe(true);
    });

    test('Handles directory names with spaces', () => {
        const dir = path.join(baseDir, 'dir with spaces');

        ensureDirTiny(dir);
        expect(fs.existsSync(dir)).toBe(true);
    });

    test('Does nothing if path points to an existing file', () => {
        const filePath = path.join(baseDir, 'file.txt');

        ensureDirTiny(baseDir);
        fs.writeFileSync(filePath, 'x');

        expect(() => ensureDirTiny(filePath)).not.toThrow();
        expect(fs.statSync(filePath).isFile()).toBe(true);
    });

    test('Throws on empty path', () => {
        expect(() => ensureDirTiny('')).toThrow();
    });
});
