import path from 'path';

import { defineConfig } from 'vitest/config';
import { AliasOptions } from 'vite';

const makeAliases = (): AliasOptions => {
  const prefix = '$';
  const srcDirsToAlias = ['features', 'lib', 'pages'];

  return srcDirsToAlias.map(dir => {
    const aliasedPath = `${prefix}${dir}`;
    const actualDirPath = path.resolve(__dirname, `src/${dir}`);

    return { find: aliasedPath, replacement: actualDirPath };
  });
};

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: makeAliases(),
  },
});