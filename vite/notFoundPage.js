import { readFileSync, statSync } from 'node:fs';
import { isAbsolute, relative, resolve } from 'node:path';

export function isKnownPage(root, url) {
  const pathname = decodePathname(url);
  if (pathname === null) {
    return false;
  }

  const candidates = pathname.endsWith('/')
    ? [`${pathname}index.html`]
    : [pathname, `${pathname}.html`];

  return candidates.some((candidate) => isFileInside(root, candidate));
}

function decodePathname(url) {
  try {
    return decodeURIComponent(new URL(url, 'http://localhost').pathname);
  } catch {
    return null;
  }
}

function isFileInside(root, pathname) {
  const file = resolve(root, `.${pathname}`);
  const pathFromRoot = relative(root, file);
  if (pathFromRoot.startsWith('..') || isAbsolute(pathFromRoot)) {
    return false;
  }

  return statSync(file, { throwIfNoEntry: false })?.isFile() ?? false;
}

// GitHub Pages serves 404.html with a 404 status for unknown paths. Do the same in
// dev and preview so the not-found page can be checked locally.
export function serveNotFoundPage(projectRoot) {
  return {
    name: 'serve-not-found-page',
    configureServer(server) {
      const renderNotFoundPage = () =>
        server.transformIndexHtml(
          '/404.html',
          readFileSync(resolve(projectRoot, '404.html'), 'utf8'),
        );
      return () =>
        server.middlewares.use(
          notFoundMiddleware(projectRoot, renderNotFoundPage),
        );
    },
    configurePreviewServer(server) {
      const distRoot = resolve(projectRoot, 'dist');
      const renderNotFoundPage = () =>
        readFileSync(resolve(distRoot, '404.html'), 'utf8');
      return () =>
        server.middlewares.use(
          notFoundMiddleware(distRoot, renderNotFoundPage),
        );
    },
  };
}

// The page is sent here rather than by rewriting req.url, because Vite's HTML
// middleware always responds with 200.
function notFoundMiddleware(root, renderNotFoundPage) {
  return async (req, res, next) => {
    const wantsHtml = req.headers.accept?.includes('text/html');
    if (!wantsHtml || isKnownPage(root, req.url)) {
      return next();
    }

    try {
      const html = await renderNotFoundPage();
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
    } catch (error) {
      next(error);
    }
  };
}
