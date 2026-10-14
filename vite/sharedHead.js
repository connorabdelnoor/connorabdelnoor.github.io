import { readFileSync } from 'node:fs';

const MARKER = '<!-- shared-head -->';

export function injectSharedHead(html, partial, pagePath) {
  if (!html.includes(MARKER)) {
    throw new Error(
      `${pagePath} is missing the ${MARKER} marker in its <head>.`,
    );
  }
  return html.replace(MARKER, partial.trim());
}

// Analytics, favicon, fonts, and skip-link styles are the same on every page, so
// they live in one partial instead of being copied into each HTML entry.
export function sharedHead(partialPath) {
  return {
    name: 'shared-head',
    configureServer(server) {
      server.watcher.add(partialPath);
      server.watcher.on('change', (file) => {
        if (file === partialPath) {
          server.ws.send({ type: 'full-reload' });
        }
      });
    },
    transformIndexHtml: {
      // Run before Vite's own HTML processing so the injected links are bundled too.
      order: 'pre',
      handler(html, { path }) {
        return injectSharedHead(html, readFileSync(partialPath, 'utf8'), path);
      },
    },
  };
}
