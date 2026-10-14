import '../styles/nav.css';

const links = [
  { page: 'home', href: '/', label: 'Home' },
  { page: 'about', href: '/about', label: 'About' },
  { page: 'portfolio', href: '/portfolio', label: 'Portfolio' },
  { page: 'monochrome', href: '/monochrome', label: 'Monochrome' },
];

export function nav(currentPage) {
  const items = links
    .map(({ page, href, label }) => {
      const current = page === currentPage ? ' aria-current="page"' : '';
      return `<li><a class="site-nav-link" href="${href}"${current}>${label}</a></li>`;
    })
    .join('');

  return `
  <header class="site-header">
    <div class="site-header-inner">
      <div class="site-branding">
        <a class="site-title" href="/">Connor Abdelnoor</a>
        <p class="site-description">Doing stuff on the web</p>
      </div>
      <nav class="site-nav" aria-label="Main">
        <button class="site-nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav-list">
          <span class="site-nav-toggle-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Menu</span>
        </button>
        <ul class="site-nav-list" id="site-nav-list">
          ${items}
        </ul>
      </nav>
    </div>
  </header>
`;
}

// The toggle is only visible below the desktop breakpoint; the sidebar ignores its state.
export function initNav() {
  const toggle = document.querySelector('.site-nav-toggle');
  const setOpen = (open) => toggle.setAttribute('aria-expanded', String(open));
  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  toggle.addEventListener('click', () => setOpen(!isOpen()));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });
}
