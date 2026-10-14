import{t as e}from"./layout-QNVybhl_.js";/* empty css             */var t=[{name:`profile`,alt:`Portrait of Connor Abdelnoor.`,tile:`feature`},{name:`garden`,alt:`Raised garden beds in a sunny backyard, with a yellow house behind them.`,tile:`under-feature`},{name:`ski`,alt:`Night ski race in a blue one-piece suit and bib number 35, kicking one ski up.`,tile:`under-feature`},{name:`hood`,alt:`Mountaineering on a snowfield above the clouds in a helmet and blue jacket, with a rock spire behind.`,tile:`tall`},{name:`house`,alt:`Painting the peak of a yellow clapboard house from a tall ladder, above a bed of cosmos.`},{name:`ice-cream`,alt:`Eating a double scoop ice cream cone against a white wall.`},{name:`usa-touch`,alt:`Holding up a USA Touch jersey with the number 6.`},{name:`pdx-touch`,alt:`Kneeling with a medal next to a black and white dog at a soccer field.`}],n={single:`(min-width: 769px) 150px, 33vw`,feature:`(min-width: 769px) 310px, 66vw`,tall:`(min-width: 769px) 310px, 66vw`};e(`about`,`
  <section class="about-intro" aria-labelledby="about-heading">
    <div class="container">
      <h1 class="content-page-heading" id="about-heading">About</h1>
      <p class="about-intro-text">Great, the about section. Maybe I'll start with a photo dump.</p>
      <ul class="photo-mosaic">
        ${t.map(({name:e,alt:t,tile:r})=>`
      <li class="photo-mosaic-item${r?` photo-mosaic-item--${r}`:``}">
        <img
          src="/media/${e}.webp"
          srcset="/media/${e}-450.webp 450w, /media/${e}.webp 900w"
          sizes="${n[r]??n.single}"
          alt="${t}"
          width="900"
          height="1200"
          decoding="async"
        />
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