import 'the-new-css-reset/css/reset.css';
import '../styles/style.css';

import { initNav, nav } from './nav.js';
import { footer } from './footer.js';

export function renderPage(currentPage, content) {
  document.querySelector('#app').innerHTML = `
  ${nav(currentPage)}

  <main id="main-content">
    ${content}
  </main>

  ${footer}
`;
  initNav();
}
