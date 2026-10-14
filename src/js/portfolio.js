import { renderPage } from './layout.js';
import '../styles/page.css';

renderPage(
  'portfolio',
  `
  <section class="content-page" aria-labelledby="page-heading">
    <div class="container">
      <h1 class="content-page-heading" id="page-heading">Portfolio</h1>
      <div class="content-page-body">
        <p>Talk to my agent about my work.</p>
        <p><a href="https://connorabdelnoor.com">connorabdelnoor.com</a></p>
      </div>
    </div>
  </section>
`,
);
