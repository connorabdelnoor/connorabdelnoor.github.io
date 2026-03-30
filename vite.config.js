import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import eslint from 'vite-plugin-eslint2';
import { defineConfig } from 'vite';

import { serveNotFoundPage } from './vite/notFoundPage.js';
import { prerenderPages } from './vite/prerenderPages.js';
import { sharedHead } from './vite/sharedHead.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Each page's HTML file, the module that renders its content, and its nav link.
const pages = {
  main: { html: 'index.html', content: 'home.js', currentPage: 'home' },
  about: { html: 'about.html', content: 'about.js', currentPage: 'about' },
  portfolio: {
    html: 'portfolio.html',
    content: 'portfolio.js',
    currentPage: 'portfolio',
  },
  monochrome: {
    html: 'monochrome.html',
    content: 'monochrome.js',
    currentPage: 'monochrome',
  },
  notFound: { html: '404.html', content: 'notFound.js', currentPage: null },
};

const pageInputs = Object.fromEntries(
  Object.entries(pages).map(([name, { html }]) => [
    name,
    resolve(__dirname, html),
  ]),
);

const prerenderedPages = Object.fromEntries(
  Object.values(pages).map(({ html, content, currentPage }) => [
    `/${html}`,
    { content: resolve(__dirname, 'src/js/pages', content), currentPage },
  ]),
);

export default defineConfig({
  appType: 'mpa',
  publicDir: 'public',
  root: './',
  build: {
    outDir: 'dist',
    rolldownOptions: {
      input: pageInputs,
      output: {
        minify: true,
      },
    },
  },
  plugins: [
    sharedHead(resolve(__dirname, 'src/partials/head.html')),
    prerenderPages(resolve(__dirname, 'src/js/layout.js'), prerenderedPages),
    serveNotFoundPage(__dirname),
    eslint({
      cache: false,
      fix: true,
      include: ['src/**/*.js', 'src/**/*.mjs', 'src/**/*.cjs', 'src/**/*.ts'],
      exclude: ['node_modules', 'dist', 'build'],
    }),
  ],
});
