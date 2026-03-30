import { initNav } from './nav.js';

// Pages ship prerendered, so the browser only attaches behavior to the existing HTML.
export function initSite() {
  initNav();
}
