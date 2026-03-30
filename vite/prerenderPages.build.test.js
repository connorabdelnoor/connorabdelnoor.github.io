import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { after, before, test } from 'node:test';
import { fileURLToPath } from 'node:url';

import { build } from 'vite';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const expectedHeadings = {
  'index.html': 'Hello',
  'about.html': 'About',
  'portfolio.html': 'Portfolio',
  'monochrome.html': 'Monochrome',
  '404.html': 'Page not found',
};

let workDir;

async function buildSite(outDir) {
  await build({
    root: projectRoot,
    configFile: resolve(projectRoot, 'vite.config.js'),
    logLevel: 'silent',
    build: { outDir, emptyOutDir: true },
  });
}

function appContents(html) {
  const match = html.match(/<div id="app">([\s\S]*)<\/div>\s*<\/body>/);
  return match?.[1] ?? '';
}

before(async () => {
  workDir = mkdtempSync(join(tmpdir(), 'prerender-build-'));
  await buildSite(join(workDir, 'first'));
  await buildSite(join(workDir, 'second'));
});

after(() => rmSync(workDir, { recursive: true, force: true }));

for (const [page, heading] of Object.entries(expectedHeadings)) {
  test(`${page} ships its content in #app`, () => {
    const html = readFileSync(join(workDir, 'first', page), 'utf8');
    const app = appContents(html);

    assert.match(app, new RegExp(`<h1[^>]*>${heading}</h1>`));
    assert.match(app, /<nav class="site-nav"/);
    assert.match(app, /<footer class="site-footer"/);
  });

  test(`${page} is the same on every build`, () => {
    const first = readFileSync(join(workDir, 'first', page), 'utf8');
    const second = readFileSync(join(workDir, 'second', page), 'utf8');
    assert.equal(first, second);
  });
}

test('the current nav link matches the page', () => {
  const about = readFileSync(join(workDir, 'first', 'about.html'), 'utf8');
  const notFound = readFileSync(join(workDir, 'first', '404.html'), 'utf8');

  assert.match(about, /href="\/about" aria-current="page"/);
  assert.doesNotMatch(notFound, /aria-current/);
});
