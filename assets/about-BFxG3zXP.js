import{t as e}from"./layout-QNVybhl_.js";/* empty css             */e(`about`,`
  <section class="about-intro" aria-labelledby="about-heading">
    <div class="container">
      <h1 class="content-page-heading" id="about-heading">About</h1>
      <p class="about-intro-text">Great, the about section. Maybe I'll start with a photo dump.</p>
      <ul class="photo-mosaic">
        ${[{file:`profile.webp`,alt:`Portrait of Connor Abdelnoor.`,tile:`feature`},{file:`garden.webp`,alt:`Raised garden beds in a sunny backyard, with a yellow house behind them.`,tile:`under-feature`},{file:`ski.webp`,alt:`Night ski race in a blue one-piece suit and bib number 35, kicking one ski up.`,tile:`under-feature`},{file:`hood.webp`,alt:`Mountaineering on a snowfield above the clouds in a helmet and blue jacket, with a rock spire behind.`,tile:`tall`},{file:`house.webp`,alt:`Painting the peak of a yellow clapboard house from a tall ladder, above a bed of cosmos.`},{file:`ice-cream.webp`,alt:`Eating a double scoop ice cream cone against a white wall.`},{file:`usa-touch.webp`,alt:`Holding up a USA Touch jersey with the number 6.`},{file:`pdx-touch.webp`,alt:`Kneeling with a medal next to a black and white dog at a soccer field.`}].map(({file:e,alt:t,tile:n})=>`
      <li class="photo-mosaic-item${n?` photo-mosaic-item--${n}`:``}">
        <img src="/media/${e}" alt="${t}" width="900" height="1200" decoding="async" />
      </li>`).join(``)}
      </ul>
    </div>
  </section>

  <section class="about-section" aria-labelledby="bio-heading">
    <div class="container">
      <h2 class="visually-hidden" id="bio-heading">Bio</h2>
      <div class="bio-text">
        <p>I live in New England and spend most of my free time outside. I like to ski, climb mountains, garden, and play rugby. My house was built in 1860, so I've become a carpenter, painter, landscaper, electrician, and plumber in addition to being a software engineer. I know everyone is enamored with blue-collar trades these days, but I'll stick with typing on the computer when I can and I'll wire in my heat pump when I have to.</p>
        <p>For me, building software is a creative exercise with endless learning capacity. I love it. Most of my work is in e-commerce: full stack applications, integrations, analytics, infrastructure, and DevOps. I'm always looking to grow, and to help others grow too.</p>
      </div>
    </div>
  </section>
`);