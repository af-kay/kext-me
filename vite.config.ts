import path from 'path';

import { AliasOptions, ConfigEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProdMode = (mode: ConfigEnv['mode']) => mode === 'production';
const isDevMode = (mode: ConfigEnv['mode']) => mode === 'development';

const getAppBase = (mode: ConfigEnv['mode']) =>
  isProdMode(mode) ? '/kext-me/' : '';

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
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: getAppBase(mode),
  resolve: {
    alias: makeAliases(),
  },
  define: {
    APP_BASE: JSON.stringify(getAppBase(mode)),
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3300,
  },
}));
