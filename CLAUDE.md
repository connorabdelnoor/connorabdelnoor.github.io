# CLAUDE.md

This file gives Claude Code context for working in this repository.

## Project

Personal portfolio — "About" page. Vanilla JS + Vite, no framework.
Bootstrapped from [Barata-Ribeiro/vite-vanilla-js-template](https://github.com/Barata-Ribeiro/vite-vanilla-js-template).

## Commands

```bash
npm run dev          # Start dev server (auto-opens browser)
npm run build        # Production build → dist/
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix lint issues
npm run format       # Format with Prettier
```

## Stack

- **Vite 8** — bundler, dev server
- **Vanilla JS** — no framework
- **PostCSS** — nesting, autoprefixer, cssnano
- **ESLint + Prettier** — enforced via vite plugin (auto-fix on save)
- **the-new-css-reset** — baseline CSS reset

## Structure

```
src/
  js/main.js          # Entry point
  styles/style.css    # Global styles (PostCSS nesting ok)
  assets/images/      # Static images
public/               # Copied as-is to dist/
index.html            # HTML entry
```

## Conventions

- ES modules throughout (`type: module`)
- CSS custom properties for theming; supports `prefers-color-scheme: light`
- **CSS is mobile-first**: base styles target small viewports; use **`min-width`** media queries (not `max-width`) to add or override for larger screens. Default “tablet and up” breakpoint: **769px** (Bulma tablet). See `.cursor/rules/css-mobile-first.mdc`.
- 2-space indent, single quotes, trailing commas, LF line endings (see `.prettierrc`)
- No `console.log` — use `console.warn` / `console.error` if needed

## Web accessibility (WCAG 2.2 AA)

New or changed code must meet **WCAG 2.2 Level AA** where it applies. See [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/).

- **Semantics**: Use correct landmarks, heading levels, lists, and interactive elements (`button` vs link). Avoid hiding essential content with `aria-hidden` unless an equivalent exists for assistive tech.
- **Keyboard**: Full keyboard access, no traps, **visible `:focus-visible`** styles (do not remove outlines without a better indicator).
- **Perceivable**: Sufficient color contrast (4.5:1 normal text, 3:1 large/UI); do not rely on color alone; meaningful `alt` text; respect **`prefers-reduced-motion`**.
- **Links**: Clear purpose; for `target="_blank"` use `rel="noopener noreferrer"` and indicate a new tab (e.g. `aria-label` or visually hidden text).
- **Forms / dynamic UI** (if added): labels, error association, live regions or focus management as needed.

Project rule: `.cursor/rules/web-accessibility.mdc` (Cursor). Mirror this section when updating agent context.

## Architectural decisions

Larger decisions are tracked in [`docs/project_context.md`](docs/project_context.md). Read it before making structural changes.
