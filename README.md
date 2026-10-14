# Portfolio

Connor Abdelnoor's personal site, live at https://connorabdelnoor.github.io.
Built with Vite, vanilla JavaScript, and PostCSS.

Pages: Home, About, Portfolio, and Monochrome, plus a 404 page.

## Development

Requires Node 24 (see `.nvmrc`).

```bash
npm install
```

`.npmrc` sets `legacy-peer-deps=true`, so no extra flag is needed for ESLint 10.

| Script                      | Description                               |
| --------------------------- | ----------------------------------------- |
| `npm run dev`               | Dev server                                |
| `npm run build`             | Production build to `dist/`               |
| `npm run preview`           | Preview the production build              |
| `npm run buildpreview`      | Build, then preview                       |
| `npm run deploy`            | Build and publish `dist/` to GitHub Pages |
| `npm run lint` / `lint:fix` | ESLint                                    |
| `npm run format`            | Prettier                                  |
| `npm test`                  | Unit tests for the Vite plugins           |

## Deploying

`npm run deploy` builds the site and pushes `dist/` to the `gh-pages` branch with [gh-pages](https://www.npmjs.com/package/gh-pages).
GitHub Pages serves that branch.

## MCP (Figma)

`.mcp.json` is gitignored so tokens are not committed.
To wire up the Figma MCP server:

1. Copy **`.mcp.json.example`** to **`.mcp.json`** in the project root.
2. Provide a **Figma API key** (personal access token from [Figma account settings](https://www.figma.com/developers/api#access-tokens)).
   The example maps `FIGMA_API_KEY` to `${FIGMA_ACCESS_TOKEN}`.
   Set `FIGMA_ACCESS_TOKEN` in your environment so the variable expands, or replace the value in `.mcp.json` with the token directly (keep that file local and uncommitted).

See [`figma-mcp`](https://www.npmjs.com/package/figma-mcp) if you need to adjust env names or flags.
