# Portfolio (about)

Vite, vanilla JavaScript, Bulma, and PostCSS. Personal portfolio site.

## Development

Install (this repo expects ESLint 10; use legacy peer deps if npm complains):

```bash
npm install --legacy-peer-deps
```

| Script        | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Dev server               |
| `npm run build` | Production build       |
| `npm run preview` | Preview production build |
| `npm run lint` / `lint:fix` | ESLint        |
| `npm run format` | Prettier              |

## MCP (Figma)

`.mcp.json` is gitignored so tokens are not committed. To wire up the Figma MCP server:

1. Copy **`.mcp.json.example`** to **`.mcp.json`** in the project root.
2. Provide a **Figma API key** (personal access token from [Figma account settings](https://www.figma.com/developers/api#access-tokens)). The example maps `FIGMA_API_KEY` to `${FIGMA_ACCESS_TOKEN}`—set `FIGMA_ACCESS_TOKEN` in your environment (e.g. Cursor **Settings → MCP** / user `settings.json` `env`) so the variable expands, or replace the value in `.mcp.json` with the token directly (keep that file local and uncommitted).

See [`figma-mcp`](https://www.npmjs.com/package/figma-mcp) if you need to adjust env names or flags.
