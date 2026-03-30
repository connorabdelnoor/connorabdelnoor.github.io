// A 2x2 feature with two photos under it, one tall tile, and four singles fill the grid evenly at 3 and 4 columns.
const photos = [
  {
    name: 'profile',
    alt: 'Portrait of Connor Abdelnoor.',
    tile: 'feature',
  },
  {
    name: 'garden',
    alt: 'Raised garden beds in a sunny backyard, with a yellow house behind them.',
    tile: 'under-feature',
  },
  {
    name: 'ski',
    alt: 'Night ski race in a blue one-piece suit and bib number 35, kicking one ski up.',
    tile: 'under-feature',
  },
  {
    name: 'hood',
    alt: 'Mountaineering on a snowfield above the clouds in a helmet and blue jacket, with a rock spire behind.',
    tile: 'tall',
  },
  {
    name: 'house',
    alt: 'Painting the peak of a yellow clapboard house from a tall ladder, above a bed of cosmos.',
  },
  {
    name: 'ice-cream',
    alt: 'Eating a double scoop ice cream cone against a white wall.',
  },
  {
    name: 'usa-touch',
    alt: 'Holding up a USA Touch jersey with the number 6.',
  },
  {
    name: 'pdx-touch',
    alt: 'Kneeling with a medal next to a black and white dog at a soccer field.',
  },
];

// Display widths for the browser to pick a file. Above 769px the grid is 4 columns in 640px;
// below it, 3 columns across the screen. A tall tile is cropped from a photo as wide as a feature.
const tileSizes = {
  single: '(min-width: 769px) 150px, 33vw',
  feature: '(min-width: 769px) 310px, 66vw',
  tall: '(min-width: 769px) 310px, 66vw',
};

const mosaicItems = photos
  .map(({ name, alt, tile }) => {
    const tileClass = tile ? ` photo-mosaic-item--${tile}` : '';
    const sizes = tileSizes[tile] ?? tileSizes.single;
    return `
      <li class="photo-mosaic-item${tileClass}">
        <img
          src="/media/${name}.webp"
          srcset="/media/${name}-450.webp 450w, /media/${name}.webp 900w"
          sizes="${sizes}"
          alt="${alt}"
          width="900"
          height="1200"
          decoding="async"
        />
      </li>`;
  })
  .join('');

export const content = `
  <section class="about-intro" aria-labelledby="about-heading">
    <div class="container">
      <h1 class="content-page-heading" id="about-heading">About</h1>
      <p class="about-intro-text">Great, the about section. Maybe I'll start with a photo dump.</p>
      <ul class="photo-mosaic">
        ${mosaicItems}
      </ul>
    </div>
  </section>

  <section class="about-section" aria-labelledby="bio-heading">
    <div class="container">
      <h2 class="visually-hidden" id="bio-heading">Bio</h2>
      <div class="bio-text">
        <p>Lots of hobbies, finally getting good at a few. Current passion is tiramisu, making mascarpone from scratch because I get heavy cream from the farm down the road for ridiculously cheap. Perks of living in New England. Current hobby is thermal imaging my 1860s home. Windows ordered and arriving in December, follow along for the install, links in bio.</p>

        <p>Ski season is here, but the snow is not. I'll be on the computer instead.</p>
      </div>
    </div>
  </section>
`;
