# Site restructure: Home and About

**Date:** 2026-06-11
**Status:** Implemented, then superseded by [2026-10-14-light-theme-and-pages.md](2026-10-14-light-theme-and-pages.md).

Kept for history.
The page split and the `nav(currentPage)` pattern still hold.
The hero, brands carousel, and About layout described here are gone.

## Goal

Split the single-page portfolio into two pages.

- `/` (Home): current work, in the present tense.
- `/about` (About): the career story and context.

Audience: developers and the tech community.
This is a personal site, not client acquisition.

## Pages

### Home (`/`, `index.html`)

- Hero with the name in gradient text and the tagline "Software engineer, gardener, atavistic wanderer of mountains."
- No photo or long bio; those live on About.
- Projects section with three current projects, numbered 01 to 03.
- Footer with GitHub and LinkedIn.

### About (`/about`, `about.html`)

- Bio with a photo, side by side on desktop and stacked on mobile.
- Brands carousel, moved from Home because it belongs to the Portland career chapter.
- Footer with GitHub and LinkedIn.

## Decisions

- `nav()` takes a `currentPage` argument so the right link gets `aria-current="page"`.
- Vite builds both `index.html` and `about.html` as Rolldown inputs.
- The brands carousel is career context, not current work, so it moved to About.
- `docs/project_context.md` was removed; project context moved to `CLAUDE.md`, and later to `AGENTS.md`.
