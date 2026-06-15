# Site Restructure: Homepage + About Page

**Date:** 2026-06-11
**Status:** Implemented

---

## Goal

Split the current single-page portfolio into two pages:
- `/` — Homepage: present-tense, current work
- `/about` — About: narrative, career story, career context

**Audience:** Developers and tech community (personal brand, not client acquisition).

---

## Pages

### Homepage (`/`, `index.html`)

**Hero**
- Name: Connor Abdelnoor (gradient text)
- Tagline: "Software engineer, gardener, atavistic wanderer of mountains."
- No photo, no extended bio — those live on About

**Projects section** — three current projects with numbered index (01/02/03)

**Footer** — GitHub + LinkedIn

**Nav** — Home (active) | About

---

### About Page (`/about`, `about.html`)

**Bio narrative** with photo (left column on desktop, stacked on mobile).

**Brands carousel** — moved here from homepage; contextual to the Portland career chapter.

**Footer** — GitHub + LinkedIn

**Nav** — Home | About (active)

---

## Key decisions

- `nav()` is now a function taking `currentPage` param for correct `aria-current`
- Vite multi-page: both `index.html` and `about.html` declared as Rolldown inputs
- Brands carousel belongs on About, not Homepage — it's career context, not current work
- `docs/project_context.md` removed; project context lives in `CLAUDE.md`
