# Marco Mendoza — Portfolio

Astro portfolio workspace migrated from the local `portfolio` project.

## Structure
- `apps/site`: Astro website
- `packages/ui`: shared components and Storybook
- `packages/tokens`: theme, typography, and layout tokens
- `assets`: reference screenshots and Figma exports; not automatically published

## Local development
Use Node.js 22.12+ (Node 24 is used in CI).
Run these commands from the repository root:

```sh
npm ci
npm run dev
```

Other commands: `npm run check`, `npm run build`, `npm run preview`, `npm run storybook`.
The site builds into `apps/site/dist`.

Read `AGENTS.md` and `PROJECT_STATUS.md` when continuing development.
The homepage is currently a gallery of hero explorations, and several pages contain sample content.

## GitHub Pages
Target: https://aguynamedmarco.github.io
This migration adds build validation only. Publishing is not enabled.
When ready, select GitHub Actions in repository Pages settings and add a deployment workflow that uploads `apps/site/dist`.
The private repository requires an eligible GitHub plan for Pages.

## Sync with VS Code
Clone this repository into a new local folder to preserve the original project as a backup, then check out the migration branch. Do not initialize a second unrelated Git history and force-push it.
Commit and push local changes; pull changes made elsewhere before continuing.
