import '../styles/nav.css';

export function nav(currentPage = 'home') {
  return `
  <header>
    <nav class="navbar" aria-label="Main">
      <div class="navbar-menu is-active">
        <div class="navbar-center">
          <a class="navbar-item ${currentPage === 'home' ? 'nav-active' : 'nav-muted'}"
             href="/"
             ${currentPage === 'home' ? 'aria-current="page"' : ''}
          >Home</a>
          <a class="navbar-item ${currentPage === 'about' ? 'nav-active' : 'nav-muted'}"
             href="/about"
             ${currentPage === 'about' ? 'aria-current="page"' : ''}
          >About</a>
        </div>
      </div>
    </nav>
  </header>
`;
}
