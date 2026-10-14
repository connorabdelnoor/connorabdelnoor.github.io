import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { isKnownPage } from './notFoundPage.js';

const sandbox = mkdtempSync(join(tmpdir(), 'not-found-page-'));
const root = join(sandbox, 'site');
mkdirSync(root);
writeFileSync(join(root, 'index.html'), '');
writeFileSync(join(root, 'about.html'), '');
mkdirSync(join(root, 'src'));

test('known pages resolve with or without the .html extension', () => {
  assert.equal(isKnownPage(root, '/'), true);
  assert.equal(isKnownPage(root, '/about'), true);
  assert.equal(isKnownPage(root, '/about.html'), true);
  assert.equal(isKnownPage(root, '/about?ref=nav'), true);
});

test('unknown paths are not pages', () => {
  assert.equal(isKnownPage(root, '/nope'), false);
  assert.equal(isKnownPage(root, '/about/'), false);
});

test('directories are not pages', () => {
  assert.equal(isKnownPage(root, '/src'), false);
});

test('malformed percent-encoding is not a page instead of throwing', () => {
  assert.equal(isKnownPage(root, '/%E0%A4%A'), false);
});

test('encoded traversal cannot reach files outside the root', () => {
  writeFileSync(join(sandbox, 'outside.html'), '');

  assert.equal(isKnownPage(root, '/..%2Foutside.html'), false);
  assert.equal(isKnownPage(root, '/..%2Foutside'), false);
});
