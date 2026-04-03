/* empty css                          *//* empty css              */(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`
  <header>
    <nav class="navbar" aria-label="Main">
      <div class="navbar-menu is-active">
        <div class="navbar-center">
          <a class="navbar-item nav-active" href="/" aria-current="page">Home</a>
          <a
            class="navbar-item nav-muted"
            href="https://connorabdelnoor.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Main portfolio site, connorabdelnoor.com (opens in new tab)"
          >About</a>
        </div>
      </div>
    </nav>
  </header>
`,t=`
  <section class="projects-section" aria-labelledby="projects-heading">
    <div class="container">
      <h2 class="projects-heading" id="projects-heading">What I'm working on</h2>
      <ul class="projects-list">
        ${[{title:`AI Agent Portfolio`,url:`https://connorabdelnoor.com`,displayUrl:`connorabdelnoor.com`,description:`Why answer questions about myself when I can train an agent to do it for me. RAG via Pinecone and Gemini. React frontend, self hosted N8N instance to facilitate workflows, IAC with OpenTofu, and hosted on AWS within the free tier`},{title:`Upper Valley Tech Meetup`,url:`https://uppervalleytech.org/`,displayUrl:`uppervalleytech.org`,description:`A strong belief in the value of community led me to start Upper Valley Tech this year. The goal: bring together tech folk for socializing, mentorship, and special events.`},{title:`Lebanon Data Project`,url:`https://lebanondataproject.org/`,displayUrl:`WIP`,description:`Free as in speech, or free as in beer. Either way, here in Lebanon, NH, the town data is available for free and a great sandbox for Python projects. Apache Airflow setup to run ETL pipelines with data stored in MongoDB. Generated reports in S3 with a React frontend, so once again, AWS free tier`}].map(({title:e,url:t,displayUrl:n,description:r})=>`
  <li class="project-item">
    <span class="project-arrow" aria-hidden="true">→</span>
    <div class="project-content">
      <h3 class="project-title">${e}</h3>
      <a
        class="project-link"
        href="${t}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${e}, ${n} (opens in new tab)"
      ><span aria-hidden="true">${n}</span></a>
      <p class="project-description">${r}</p>
    </div>
  </li>`).join(``)}
      </ul>
    </div>
  </section>
`,n=[`Zumiez`,`IDX (ID Experts)`,`Yogi Tea`,`Dr. Bronner's`,`Chrome Industries`,`Nau Clothing`,`Danner Boots`,`LaCrosse Footwear`,`IndieHops`,`Dr. Martens`,`Yakima`],r=n.map(e=>`<span class="brand-item">${e}</span>`).join(``),i=`
  <section class="brands-section" aria-labelledby="brands-heading">
    <h2 class="brands-label" id="brands-heading">Brands I've worked with</h2>
    <ul class="brands-list-sr">
      ${n.map(e=>`<li>${e}</li>`).join(``)}
    </ul>
    <div class="brands-carousel-wrapper" aria-hidden="true">
      <div class="brands-track">
        ${r}
        ${r}
      </div>
    </div>
  </section>
`,a=`
  <footer class="site-footer">
    <div class="container">
      <div class="footer-links">
        <a class="footer-link" href="https://github.com/lvampa/" aria-label="Connor on GitHub (opens in new tab)" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          GitHub
        </a>
        <a class="footer-link" href="https://www.linkedin.com/in/connorabdelnoor/" aria-label="Connor on LinkedIn (opens in new tab)" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
`;document.querySelector(`#app`).innerHTML=`
  ${e}

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

  ${t}

  ${i}

  </main>

  ${a}
`;