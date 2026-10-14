import { renderPage } from './layout.js';
import { projectsSection } from './projects.js';
import { randomFact } from './printerFacts.js';

const fact = randomFact();

renderPage(
  'home',
  `
  <section class="page-hero" aria-labelledby="page-heading">
    <div class="container">
      <h1 class="page-hero-heading" id="page-heading">Hello</h1>
      <div class="printer-fact">
        <p class="printer-fact-intro">Let's talk printers.</p>
        <p class="printer-fact-label">Printer fact No. ${fact.number}</p>
        <p class="printer-fact-text">${fact.text}</p>
      </div>
    </div>
  </section>

  ${projectsSection}
`,
);
