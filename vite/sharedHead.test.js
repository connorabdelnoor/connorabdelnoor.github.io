import assert from 'node:assert/strict';
import { test } from 'node:test';

import { injectSharedHead } from './sharedHead.js';

test('replaces the marker with the partial', () => {
  const html = '<head>\n<title>Home</title>\n<!-- shared-head -->\n</head>';
  const result = injectSharedHead(
    html,
    '<link rel="icon" href="/favicon.png" />\n',
    '/index.html',
  );

  assert.equal(
    result,
    '<head>\n<title>Home</title>\n<link rel="icon" href="/favicon.png" />\n</head>',
  );
});

test('throws when a page is missing the marker', () => {
  assert.throws(
    () => injectSharedHead('<head></head>', '<link />', '/about.html'),
    /about\.html is missing the <!-- shared-head --> marker/,
  );
});
