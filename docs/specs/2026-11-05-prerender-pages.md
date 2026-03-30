# Prerender page content into the HTML

**Date:** 2026-11-05
**Status:** Implemented.

## Goal

Ship each page's content in its HTML file, so crawlers that don't run JS see the full page.
Today every page ships an empty `<div id="app"></div>` and `renderPage` in `src/js/layout.js` fills it in the browser.
A crawl of the live site returned only the skip link.

Copy keeps living in JS template strings.
The site stays vanilla JS and Vite, with no framework.

## Non-goals

- Changing any page's copy, markup, styles, or layout, except the printer fact `min-height` below.
- Changing H1 text, JSON-LD fields, or meta tags.
  The new home description in `index.html` is a separate change that lands before this one; build on top of it.
- The domain move to connorabdelnoor.com.
- Prerendering the printer fact. It isn't needed for search.

## Anti-goals

These would make the change a failure even if the HTML is right.

- The browser re-renders `#app` on load. That causes a flash and throws the prerendered HTML away.
- A built page differs between two builds of the same source, apart from Vite's hashed asset names.
- A page looks or behaves differently from today.
  The only change is what the HTML file contains before JS runs.
- A third-party prerender plugin. `vite-prerender-plugin` was tried and assumes one HTML template for every route, which breaks this multi-page site.

## Design

### Content modules

Each page gets a content module that exports its `<main>` content as an HTML string.
Content modules are pure: no CSS imports, no `document` or `window`, no Vite-only imports like `?raw`.
They can import other pure modules, such as `projects.js`.

`layout.js` exports a pure function that wraps content in the nav, `<main id="main-content">`, and footer, and returns a string.
`nav(currentPage)` and `footer` stay pure string builders.
The footer year is computed at build time, so it only changes on a rebuild.

### Browser entries

Each page keeps its entry script in `src/js/`.
An entry imports the page's CSS and attaches behavior to the HTML that is already there.
It never writes to `#app`.

CSS imports move out of `nav.js`, `footer.js`, `projects.js`, and `layout.js` into the browser side, so content modules stay pure.
Every page must still load the same stylesheets as today.

Behavior today:

- Every page: the mobile menu toggle (`initNav`).
- Home: the printer fact.

### Printer fact

The prerendered home page includes the hero, the H1, and "Let's talk printers.".
The fact label ("Printer fact No. N") and fact text are empty elements in the HTML.
`main.js` fills them with a random fact on load, as `randomFact()` does today.
`printerFacts.js` and its `?raw` import stay browser-only.

Today the whole page appears at once.
With prerendering, the hero and projects show first, and filling the fact would push the projects section down.
To avoid that, the fact block gets a `min-height` that holds space for a typical fact.
After load it must look the same as today, so the reserved space must not exceed the space a typical fact already takes.
This is the only style change.

### Vite plugin

A new plugin in `vite/`, next to `sharedHead.js`, runs in `transformIndexHtml` for each page.
It loads the page's content module, renders the layout, and puts the result inside `#app`.
It runs in both `npm run dev` and `npm run build`, so dev shows the same HTML as production.

The pure injection step is a separate exported function, like `injectSharedHead`, so it can be unit tested.
It throws a clear error naming the page if the page doesn't contain exactly one empty `<div id="app"></div>`.

Which content module and current-page name belong to which HTML file is configured in `vite.config.js`, next to `build.rolldownOptions.input`.
The 404 page renders with no current nav link, as today.

In dev, editing a content module must show up on the next page load, without restarting the server.

In dev, Vite injects CSS from JS, so the prerendered HTML may show unstyled for a moment before the styles load.
That's acceptable in dev only.
Production builds emit `<link>` tags, so the built site must not flash.

## Tests

- Unit tests for the injection function: it injects the content, and it throws when `#app` is missing or appears twice.
- A build test that runs a real Vite build into a temp directory.
  For every page, it checks that `#app` is not empty and contains the page's H1 text.
  It also checks that building twice produces the same HTML.
- Tests run under the existing `npm test` (`node --test`).

## Verification

- Open `dist/about.html` in an editor and confirm the About H1 and bio text are in the file.
- Click through every page in `npm run preview` and confirm they look the same as before, with no flash of unstyled content.
- Click through every page in `npm run dev` and confirm they look the same as before once styles load.
- On the home page, the projects section doesn't jump when the fact appears.
- The mobile menu opens, closes, and closes on Escape.
- The home page shows a random printer fact after load.
- `npm run lint` and `npm test` pass.

## Docs

Update the Pages and Structure sections of `AGENTS.md`, including the steps to add a page.
Set this spec's status to Implemented.

## Left to the builder

- File names and folder for the content modules.
- How the plugin loads content modules in dev and build, as long as dev edits show on reload.
- How the page-to-module mapping is shaped in `vite.config.js`.
