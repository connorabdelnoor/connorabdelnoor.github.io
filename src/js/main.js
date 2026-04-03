import 'the-new-css-reset/css/reset.css';
import 'bulma/css/bulma.css';
import '../styles/style.css';

import { nav } from './nav.js';
import { projectsSection } from './projects.js';
import { brandsSection } from './brands.js';
import { footer } from './footer.js';

document.querySelector('#app').innerHTML = `
  ${nav}

  <main id="main-content">
  <section class="hero is-fullheight-with-navbar" aria-labelledby="page-heading">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-narrow">
            <div class="hero-image">
              <img
                src="/portfolio_image.jpg"
                alt="Connor Abdelnoor"
                width="480"
                height="522"
                decoding="async"
              />
            </div>
          </div>
          <div class="column hero-content-col">
            <h1 class="hero-heading" id="page-heading">Hello, <span class="gradient-text">I'm Connor.</span><br />
            </h1>
            <p class="hero-body-text">
              Software engineer, gardener, atavistic wanderer of mountains.
              I've spent 11 years learning from every corner of my career,
              equally comfortable in Figma dev mode, or delving the depths of AWS.
              Now I work with clients to build technical solutions that provide measurable value.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  ${projectsSection}

  ${brandsSection}

  </main>

  ${footer}
`;
