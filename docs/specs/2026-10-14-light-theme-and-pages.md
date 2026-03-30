# Light theme, sidebar nav, and more pages

**Date:** 2026-10-14
**Status:** Implemented.
Replaces the layout in [2026-06-11-site-restructure-about-page.md](2026-06-11-site-restructure-about-page.md).

## Goal

Make the site feel personal and lighter.
Give the consulting practice and the AI agent portfolio their own pages.
Keep it a static site with no framework.

This site is https://connorabdelnoor.github.io.
It is separate from https://connorabdelnoor.com, which hosts the AI agent portfolio.

## Pages

| Page       | URL           | Content                                                                                |
| ---------- | ------------- | -------------------------------------------------------------------------------------- |
| Home       | `/`           | "Hello" hero with a random printer fact, then "What I'm working on".                   |
| About      | `/about`      | Intro line, photo mosaic, and a short personal bio.                                    |
| Portfolio  | `/portfolio`  | One line pointing to the AI agent at connorabdelnoor.com.                              |
| Monochrome | `/monochrome` | Monochrome Technologies, the implementation consulting practice, with a contact email. |
| 404        | none          | Not found page; GitHub Pages serves it for unknown URLs.                               |

The nav order is Home, About, Portfolio, Monochrome.
The 404 page marks no nav link as current.

## Layout

- Light, off-white theme only, with colors as tokens on `:root` in `style.css`.
- Below 1024px, a top header with a menu toggle.
- From 1024px, a fixed sidebar with the name, "Doing stuff on the web", and the nav.
- The current nav link is darker, heavier, and underlined, so it is not marked by color alone.
- Footer on every page with "© year Connor Abdelnoor" and links to GitHub and LinkedIn.

## About page

- A visible "About" heading, then the intro line "Great, the about section. Maybe I'll start with a photo dump."
- The mosaic has eight photos in 3:4 cells, capped at 640px to line up with the bio text.
- The profile photo is a 2x2 tile, with garden and ski directly under it, and Hood is a tall tile.
- The grid has 3 columns on phones and 4 from 769px, so every cell is filled at both sizes.
- The bio is about personality only.
  Career proof lives in the résumé and on LinkedIn.

## Shared code

- `src/js/layout.js` exports `renderPage(currentPage, content)`.
  It loads the global CSS and renders the nav, `<main>`, and footer.
- `src/partials/head.html` holds analytics, the favicon, fonts, and skip-link styles.
  The `sharedHead` Vite plugin replaces the `<!-- shared-head -->` marker in each page with it.
- The `serveNotFoundPage` Vite plugin serves `404.html` for unknown URLs in dev and preview.
  The status is 200 locally; GitHub Pages sends a real 404.

## Decisions

- **Brands carousel removed.** It read as a résumé, and the site is about the person.
- **Bulma removed.** It loaded about 677 KB of CSS for `.container` alone, which now lives in `style.css`.
- **Images moved to `public/media/` as WebP.** They are resized to 1200px on the long side at quality 80, with metadata stripped.
  `portfolio_image.jpg` stays a JPEG because some link previews don't support WebP.
- **Canonical and social URLs point to connorabdelnoor.github.io.** The JSON-LD `sameAs` lists connorabdelnoor.com.
- **GitHub links use `lvampa`.** That is the main GitHub account; `connorabdelnoor` exists only to host this site.
- **Home keeps the "Impactful software engineer" description** in its meta and JSON-LD, because it is the text meant for search results.
