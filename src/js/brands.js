import '../styles/brands.css';

const brandNames = [
  'Zumiez',
  'IDX (ID Experts)',
  'Yogi Tea',
  "Dr. Bronner's",
  'Chrome Industries',
  'Nau Clothing',
  'Danner Boots',
  'LaCrosse Footwear',
  'IndieHops',
  'Dr. Martens',
  'Yakima',
];

const items = brandNames
  .map((name) => `<span class="brand-item">${name}</span>`)
  .join('');

export const brandsSection = `
  <section class="brands-section" aria-labelledby="brands-heading">
    <h2 class="brands-label" id="brands-heading">Brands I've worked with</h2>
    <ul class="brands-list-sr">
      ${brandNames.map((name) => `<li>${name}</li>`).join('')}
    </ul>
    <div class="brands-carousel-wrapper" aria-hidden="true">
      <div class="brands-track">
        ${items}
        ${items}
      </div>
    </div>
  </section>
`;
