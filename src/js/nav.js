import '../styles/nav.css';

const links = [
  { page: 'home', href: '/', label: 'Home' },
  { page: 'about', href: '/about', label: 'About' },
];

export function nav(currentPage = 'home') {
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
        <ul class="site-nav-list">
          ${items}
        </ul>
      </nav>
    </div>
  </header>
`;
}
