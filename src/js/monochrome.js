import { renderPage } from './layout.js';
import '../styles/page.css';

renderPage(
  'monochrome',
  `
  <section class="content-page" aria-labelledby="page-heading">
    <div class="container">
      <hgroup class="content-page-title">
        <h1 class="content-page-heading" id="page-heading">Monochrome</h1>
        <p class="content-page-subtitle">Monochrome Technologies LLC</p>
      </hgroup>
      <div class="content-page-body">
        <p>Monochrome Technologies is my implementation consulting practice.</p>
        <p>Taking an in-house job in 2020 scared me. Using the same technology day to day. Working with the same insulated team. I needed more, so I used my old agency connections to find small side projects that challenged me in new ways. Now this work has become my full-time job. I design and build systems, end to end. I've had clients in banking, startups, agricultural businesses, and design agencies.</p>
        <p>Website coming soon. Until then, reach me at <a href="mailto:monotechllc@gmail.com">monotechllc@gmail.com</a>.</p>
      </div>
    </div>
  </section>
`,
);
