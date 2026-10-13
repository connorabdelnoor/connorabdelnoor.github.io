import 'the-new-css-reset/css/reset.css';
import 'bulma/css/bulma.css';
import '../styles/style.css';

import { nav } from './nav.js';
import { projectsSection } from './projects.js';
import { footer } from './footer.js';
import { randomFact } from './printerFacts.js';

const fact = randomFact();

document.querySelector('#app').innerHTML = `
  ${nav('home')}

  <main id="main-content">
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
  </main>

  ${footer}
`;
