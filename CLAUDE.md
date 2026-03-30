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
- 2-space indent, single quotes, trailing commas, LF line endings (see `.prettierrc`)
- No `console.log` — use `console.warn` / `console.error` if needed

## Architectural decisions

Larger decisions are tracked in [`docs/project_context.md`](docs/project_context.md). Read it before making structural changes.
