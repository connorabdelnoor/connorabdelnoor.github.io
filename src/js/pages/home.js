import { projectsSection } from '../projects.js';

// The fact is filled in by main.js on load; it isn't needed in the HTML for search.
export const content = `
  <section class="page-hero" aria-labelledby="page-heading">
    <div class="container">
      <h1 class="page-hero-heading" id="page-heading">Hello</h1>
      <div class="printer-fact">
        <p class="printer-fact-intro">Let's talk printers.</p>
        <p class="printer-fact-label"></p>
        <p class="printer-fact-text"></p>
      </div>
    </div>
  </section>

  ${projectsSection}
`;
