import 'the-new-css-reset/css/reset.css';
import 'bulma/css/bulma.css';
import '../styles/style.css';

import { nav } from './nav.js';
import { projectsSection } from './projects.js';
import { footer } from './footer.js';

document.querySelector('#app').innerHTML = `
  ${nav('home')}

  <main id="main-content">
    <section class="page-hero" aria-labelledby="page-heading">
      <div class="container">
        <h1 class="page-hero-heading" id="page-heading">
          <span class="gradient-text">Connor Abdelnoor</span>
        </h1>
        <p class="page-hero-tagline">Software engineer, gardener, atavistic wanderer of mountains.</p>
      </div>
    </section>

    ${projectsSection}
  </main>

  ${footer}
`;
