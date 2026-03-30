import assert from 'node:assert/strict';
import { test } from 'node:test';

import { injectPageContent } from './prerenderPages.js';

test('puts the page HTML inside the empty #app', () => {
  const html = '<body>\n<div id="app"></div>\n</body>';
  const result = injectPageContent(html, '<main>Hi</main>', '/index.html');

  assert.equal(result, '<body>\n<div id="app"><main>Hi</main></div>\n</body>');
});

test('throws when a page has no empty #app', () => {
  assert.throws(
    () => injectPageContent('<body></body>', '<main></main>', '/about.html'),
    /about\.html must contain exactly one empty <div id="app"><\/div>/,
  );
});

test('throws when a page has two empty #app elements', () => {
  const html = '<div id="app"></div><div id="app"></div>';
  assert.throws(
    () => injectPageContent(html, '<main></main>', '/portfolio.html'),
    /portfolio\.html must contain exactly one/,
  );
});
