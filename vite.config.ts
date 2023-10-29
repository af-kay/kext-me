import path from 'path';

import { AliasOptions, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const makeAliases = (): AliasOptions => {
  const prefix = '$';
  const srcDirsToAlias = ['features', 'lib', 'pages'];

  return srcDirsToAlias.map(dir => {
    const aliasedPath = `${prefix}${dir}`;
    const actualDirPath = path.resolve(__dirname, `src/${dir}`);

    return { find: aliasedPath, replacement: actualDirPath };
  });
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: makeAliases(),
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3300,
  },
});
