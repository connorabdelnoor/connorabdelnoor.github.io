import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import eslint from 'vite-plugin-eslint2';
import { defineConfig } from 'vite';

import { serveNotFoundPage } from './vite/notFoundPage.js';
import { sharedHead } from './vite/sharedHead.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  appType: 'mpa',
  publicDir: 'public',
  root: './',
  build: {
    outDir: 'dist',
    rolldownOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        monochrome: resolve(__dirname, 'monochrome.html'),
        notFound: resolve(__dirname, '404.html'),
      },
      output: {
        minify: true,
      },
    },
  },
  plugins: [
    sharedHead(resolve(__dirname, 'src/partials/head.html')),
    serveNotFoundPage(__dirname),
    eslint({
      cache: false,
      fix: true,
      include: ['src/**/*.js', 'src/**/*.mjs', 'src/**/*.cjs', 'src/**/*.ts'],
      exclude: ['node_modules', 'dist', 'build'],
    }),
  ],
});
