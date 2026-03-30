import { nav } from './nav.js';
import { footer } from './footer.js';

// Runs at build time in Node, so it must stay free of CSS imports and DOM access.
export function pageHtml(currentPage, content) {
  return `
  ${nav(currentPage)}

  <main id="main-content">
    ${content}
  </main>

  ${footer}
`;
}
