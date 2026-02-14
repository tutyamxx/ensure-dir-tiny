/**
 * Ensures that the directory at the given path exists. Creates it recursively if it doesn't.
 * Prevents "File Not Found" errors when saving files.
 *
 * @param {string} path - The path of the directory to ensure.
 * @returns {void}
 *
 * @example
 * ensureDirTiny("./data/logs");
 */
declare function ensureDirTiny(path: string): void;

export  = ensureDirTiny;
