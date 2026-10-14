# AGENTS.md

This file gives coding agents context for working in this repository.

## Project

Connor Abdelnoor's personal site, deployed to GitHub Pages at https://connorabdelnoor.github.io.
Multi-page static site built with vanilla JS and Vite, no framework.
Bootstrapped from [Barata-Ribeiro/vite-vanilla-js-template](https://github.com/Barata-Ribeiro/vite-vanilla-js-template).

## Commands

```bash
npm run dev           # Start dev server (auto-opens browser)
npm run build         # Production build -> dist/
npm run preview       # Preview production build
npm run buildpreview  # Build, then preview
npm run deploy        # Build and push dist/ to the gh-pages branch
npm run lint          # Run ESLint
npm run lint:fix      # Auto-fix lint issues
npm run format        # Format with Prettier
npm test              # Unit tests for the Vite plugins (node --test)
```

## Stack

- **Node 24** (`.nvmrc`, `engines`).
  `.npmrc` sets `legacy-peer-deps=true` because of ESLint 10 peer ranges.
- **Vite 8**: bundler and dev server, multi-page via Rolldown inputs.
- **Vanilla JS**: no framework.
- **the-new-css-reset**: baseline CSS.
  The few base styles and the `.container` layout the site needs live in `style.css`.
- **PostCSS**: nesting, autoprefixer, cssnano.
- **ESLint + Prettier**: enforced via a Vite plugin (auto-fix on save).
- **gh-pages**: deploys `dist/`.

## Structure

```
index.html            # Home (/)
about.html            # About (/about)
portfolio.html        # Portfolio (/portfolio)
monochrome.html       # Monochrome Technologies (/monochrome)
404.html              # Not found page for GitHub Pages
src/
  js/
    main.js           # Home entry
    about.js          # About entry
    portfolio.js      # Portfolio entry
    monochrome.js     # Monochrome entry
    notFound.js       # 404 entry
    layout.js         # renderPage(currentPage, content): global CSS, nav, main, footer
    nav.js            # Sidebar nav on desktop, menu toggle on mobile
    footer.js         # Shared footer
    projects.js       # Home page projects section
    printerFacts.js   # Random printer fact for the home page
  data/               # Raw text data imported by JS
  partials/head.html  # Analytics, favicon, fonts, skip-link styles shared by every page
  styles/
    style.css         # Global styles and theme tokens
    page.css          # Shared content-page styles (About, Portfolio, Monochrome, 404)
    *.css             # Per-component or per-page styles
public/               # Copied as-is to dist/ (favicon, robots, sitemap, llms.txt)
  media/              # Images, served at /media/
vite/                 # Vite plugins (shared head, local 404) and their tests
docs/specs/           # Design specs
```

## Pages

Each page is an HTML file at the root plus an entry script in `src/js/`.
The entry script imports page-specific CSS and calls `renderPage(currentPage, content)` from `layout.js`, which loads the global CSS and renders the nav, `<main>`, and footer into `#app`.
The `<!-- shared-head -->` marker in each page's `<head>` is replaced with `src/partials/head.html` at build and dev time.

To add a page:

1. Add `<name>.html` at the root with its own `<title>` and meta, plus the `<!-- shared-head -->` marker.
2. Add `src/js/<name>.js` as its entry, calling `renderPage`.
3. Add the HTML file to `build.rolldownOptions.input` in `vite.config.js`.
4. Add a link in `src/js/nav.js`.
5. Update `public/sitemap.xml` and `public/llms.txt`.

## Conventions

- ES modules throughout (`type: module`).
- Light theme only.
  Colors are CSS custom properties on `:root` in `style.css`; use the tokens, not raw colors.
- **CSS is mobile-first**: base styles target small viewports; use **`min-width`** media queries (not `max-width`) to add or override for larger screens.
  Default "tablet and up" breakpoint is **769px**; the sidebar layout starts at **1024px**.
  See `.cursor/rules/css-mobile-first.mdc`.
- 2-space indent, single quotes, trailing commas, LF line endings (see `.prettierrc`).
- No `console.log`; use `console.warn` or `console.error` if needed.

## Web accessibility (WCAG 2.2 AA)

New or changed code must meet **WCAG 2.2 Level AA** where it applies.
See [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/).

- **Semantics**: Use correct landmarks, heading levels, lists, and interactive elements (`button` vs link). Avoid hiding essential content with `aria-hidden` unless an equivalent exists for assistive tech.
- **Keyboard**: Full keyboard access, no traps, **visible `:focus-visible`** styles (do not remove outlines without a better indicator).
- **Perceivable**: Sufficient color contrast (4.5:1 normal text, 3:1 large/UI); do not rely on color alone; meaningful `alt` text; respect **`prefers-reduced-motion`** and **`forced-colors`**.
- **Links**: Clear purpose; for `target="_blank"` use `rel="noopener noreferrer"` and indicate a new tab (e.g. `aria-label` or visually hidden text).
- **Forms / dynamic UI** (if added): labels, error association, live regions or focus management as needed.

Project rule: `.cursor/rules/web-accessibility.mdc` (Cursor).
Mirror this section when updating agent context.

## Architectural decisions

Project context lives in this file (`CLAUDE.md` loads it).
Design specs for larger changes go in `docs/specs/`.
Read the relevant spec before making structural changes, and update this file when a decision changes the structure or conventions.
