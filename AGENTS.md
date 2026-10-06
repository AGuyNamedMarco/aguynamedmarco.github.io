# Portfolio development instructions

## Project
Marco Mendoza's professional portfolio. Astro + TypeScript npm workspaces:
- apps/site: pages, site styles, and case-study data
- packages/ui: reusable Astro components and Storybook
- packages/tokens: theme, typography, and layout tokens

Read PROJECT_STATUS.md before starting; update it when progress or decisions change.
Preserve the existing component/token architecture. Prefer existing components and tokens.
Keep writing concise and natural. Explain why design decisions were made; preserve useful subsection titles.
Do not invent projects, quotes, results, metrics, or personal information. Existing sample content is not evidence of Marco's work.
Separate site implementation from approval of portfolio claims.

## Commands (workspace root)
- npm ci
- npm run dev
- npm run check
- npm run build
- npm run storybook

Run check and build for code changes; report failures honestly.
Keep secrets, node_modules, generated output, and caches out of Git.
Use branches and pull requests. Do not publish or enable deployment unless requested.
GitHub Pages is the intended host. The build output is apps/site/dist; no repository base path is required.
