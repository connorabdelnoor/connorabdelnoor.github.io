import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const personId = 'https://connorabdelnoor.github.io/#person';

function structuredData(page) {
  const html = readFileSync(resolve(projectRoot, page), 'utf8');
  const blocks = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    ),
  ];
  assert.equal(blocks.length, 1, `${page} should have one JSON-LD block`);
  return JSON.parse(blocks[0][1]);
}

function findNode(data, type) {
  return data['@graph'].find((node) => node['@type'] === type);
}

for (const page of ['index.html', 'about.html']) {
  // Search engines merge pages into one Person only when the @id matches,
  // and schema.org has no `founder` on Person, so the organization points back to him.
  test(`${page} links the Person and Upper Valley Tech by @id`, () => {
    const data = structuredData(page);

    assert.equal(findNode(data, 'Person')['@id'], personId);
    assert.deepEqual(findNode(data, 'Organization').founder, {
      '@id': personId,
    });
  });
}
