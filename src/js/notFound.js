import { renderPage } from './layout.js';
import '../styles/page.css';

renderPage(
  null,
  `
  <section class="content-page" aria-labelledby="page-heading">
    <div class="container">
      <h1 class="content-page-heading" id="page-heading">Page not found</h1>
      <div class="content-page-body">
        <p>Woah, let's back up. This page doesn't exist.</p>
      </div>
    </div>
  </section>
`,
);
