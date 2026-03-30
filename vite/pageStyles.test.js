import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { after, before, test } from 'node:test';
import { fileURLToPath } from 'node:url';

import { createServer } from 'vite';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const sharedStyles = [
  '/src/styles/style.css',
  '/src/styles/nav.css',
  '/src/styles/footer.css',
];

// Pages ship prerendered, so styles must load from <head> before first paint.
// CSS imported from JS only arrives after the module runs, which flashes unstyled content in dev.
const expectedStyles = {
  '/index.html': [...sharedStyles, '/src/styles/projects.css'],
  '/about.html': [
    ...sharedStyles,
    '/src/styles/page.css',
    '/src/styles/about.css',
  ],
  '/portfolio.html': [...sharedStyles, '/src/styles/page.css'],
  '/monochrome.html': [...sharedStyles, '/src/styles/page.css'],
  '/404.html': [...sharedStyles, '/src/styles/page.css'],
};

let server;

before(async () => {
  server = await createServer({
    root: projectRoot,
    configFile: resolve(projectRoot, 'vite.config.js'),
    logLevel: 'silent',
    server: { middlewareMode: true },
  });
});

after(() => server.close());

function headStylesheets(html) {
  const head = html.slice(0, html.indexOf('</head>'));
  const links = head.matchAll(/<link rel="stylesheet"[^>]*href="([^"]+)"/g);
  return [...links]
    .map(([, href]) => href)
    .filter((href) => href.startsWith('/src/'));
}

for (const [page, styles] of Object.entries(expectedStyles)) {
  test(`${page} links its stylesheets in <head> in dev`, async () => {
    const source = readFileSync(resolve(projectRoot, `.${page}`), 'utf8');
    const html = await server.transformIndexHtml(page, source);
    assert.deepEqual(headStylesheets(html), styles);
  });
}
