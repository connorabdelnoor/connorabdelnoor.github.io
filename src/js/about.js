import 'the-new-css-reset/css/reset.css';
import 'bulma/css/bulma.css';
import '../styles/style.css';
import '../styles/about.css';

import { nav } from './nav.js';
import { brandsSection } from './brands.js';
import { footer } from './footer.js';

document.querySelector('#app').innerHTML = `
  ${nav('about')}

  <main id="main-content">
    <section class="about-section" aria-labelledby="about-heading">
      <div class="container">
        <div class="about-layout">
          <div class="about-photo-col">
            <img
              src="/portfolio_image.jpg"
              alt="Connor Abdelnoor"
              class="about-photo"
              width="480"
              height="522"
              decoding="async"
            />
          </div>
          <div class="about-bio">
            <h1 class="about-label" id="about-heading">About</h1>
            <div class="bio-text">
              <p>I'm Connor Abdelnoor. I live in Lebanon, New Hampshire — in the Upper Valley, where the Connecticut River separates Vermont from New Hampshire and the White Mountains are close enough to ski on a Friday evening.</p>
              <p>Most of my career was in Portland. Eleven years building software for brands — Doc Martens, Chrome Industries, Danner Boots, Zumiez, Yakima. Agency work first, at Copious and then Ergon Tech, then five years inside LaCrosse Footwear, an American boot manufacturer. I started there in DevOps and finished as a senior engineer. The work was e-commerce infrastructure: ERPs, inventory systems, order flows, the architecture behind the storefronts. Two million transactions a year. A shipping estimator that saved the company half a million dollars. The kind of work that goes unnoticed until it doesn't.</p>
              <p>My partner matched into her residency here, so we moved. The White Mountains are better for skiing than the Cascades, which wasn't something I'd expected.</p>
              <p>Now I run Monochrome Technologies, a consulting practice. B2B platforms, AI integration, the infrastructure problems that don't have obvious answers.</p>
              <p>I started <a href="https://uppervalleytech.org" target="_blank" rel="noopener noreferrer" aria-label="Upper Valley Tech (opens in new tab)">Upper Valley Tech</a> because moving here meant discovering a city of engineers who didn't know each other existed. We meet monthly.</p>
              <p>A current side project: an <a href="https://connorabdelnoor.com" target="_blank" rel="noopener noreferrer" aria-label="AI agent portfolio (opens in new tab)">AI agent trained on my career</a>. RAG pipeline on Pinecone and Gemini, N8N for orchestration, React frontend — running entirely on AWS free tier, which has become a design constraint I've grown fond of.</p>
              <p>Outside of code I grow flowers. My dog Otto is present for most of what I do. I mountain bike in summer, surf in the fall, ski in winter, and kiteboard in cheap corners of the world when the flights line up.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${brandsSection}
  </main>

  ${footer}
`;
