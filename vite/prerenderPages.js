import { runnerImport } from 'vite';

const EMPTY_APP = '<div id="app"></div>';

export function injectPageContent(html, pageHtml, pagePath) {
  const count = html.split(EMPTY_APP).length - 1;
  if (count !== 1) {
    throw new Error(`${pagePath} must contain exactly one empty ${EMPTY_APP}.`);
  }
  return html.replace(EMPTY_APP, `<div id="app">${pageHtml}</div>`);
}

// Crawlers that don't run JS would otherwise see an empty #app, so each page's
// content is rendered into its HTML at dev and build time.
// `pages` maps an HTML path like '/about.html' to { content, currentPage },
// where `content` is the absolute path of a module that exports `content`.
export function prerenderPages(layoutPath, pages) {
  return {
    name: 'prerender-pages',
    transformIndexHtml: {
      order: 'pre',
      async handler(html, { path }) {
        const page = pages[path];
        if (!page) {
          throw new Error(`${path} has no entry in prerenderPages.`);
        }

        // A fresh runner on every call means content edits show up on the next
        // page load in dev without a server restart.
        const [{ module: layout }, { module: pageModule }] = await Promise.all([
          runnerImport(layoutPath),
          runnerImport(page.content),
        ]);

        const pageHtml = layout.pageHtml(page.currentPage, pageModule.content);
        return injectPageContent(html, pageHtml, path);
      },
    },
  };
}
