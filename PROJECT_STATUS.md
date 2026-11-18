# Portfolio project status

Updated: 2026-11-17

## Private browser preview — November 17

- The project owner can review the latest build at the private browser preview.
- Refresh the same private preview after reviewable portfolio changes. See `STAGING.md` for the workflow.

## Search wireframe — November 17

- Updated the local Search case study with the concise Notion narrative, reviewed figure captions, and verified community quote.
- Used the desktop Figma export for visual hierarchy and placement. The current Notion version places the quote near the opening.
- Added responsive figure sizes, original interface crops, and placeholders for the NAICS and keyword/help screenshots. This is the first local layout for review before adapting it to Award Details and Ark.

## Local staging — November 13

- GitHub main at `51771d81` checked out locally on `staging/local-preview`.
- Local staging setup and restart instructions are in `STAGING.md`.
- The GitHub Pages production deployment is already configured in
  `.github/workflows/deploy-pages.yml`; the older hosting notes below are historical.
- Keep staging work separate from main; a push to main deploys production.
- The live Search case-study format is the chosen reference for future edits.
- The Portfolio Website planning page in Notion links to the current writing sources.
- No website copy or design changes were made as part of staging setup.
- Fixed root dev-command argument forwarding so the managed preview can set
  its host and port correctly.
- Validation: Astro check passed with 0 errors/warnings; build generated 8 pages.
  Homepage and Search navigation verified in the staging browser.

## Current state
Imported from Marco's local portfolio ZIP. This branch replaces the older Jekyll source while preserving it in Git history. No Pages deployment is enabled by this migration.

## Implemented
- Astro/TypeScript npm workspace with site, UI library, and design tokens
- Storybook component stories and accessibility addon
- Home, Work, case-study detail, About, Contact, and style-guide routes
- Twenty homepage hero explorations around "Let's build something great together."
- Fern/Nocturne theme switching and reusable navigation/cards/carousel
- Earlier USAspending Search draft in apps/site/src/data/projects.ts
- Reference screenshots and Figma exports in assets/ (not yet integrated into pages)

## Unfinished / decisions pending
- Select a final hero direction; current homepage is an exploration gallery
- Replace mock featured cards, sample projects, and unsupported sample metrics
- Populate homepage Work History and About Me
- Replace About/Contact identity and contact placeholders; add real resume link
- Integrate the latest approved Search case study and visuals
- Verify whether previously authorized Search edits 2–6 and quote reordering were saved in the source document
- Develop Govini library/templates case study; third case study remains deferred
- Verify browser interactions, responsiveness, and accessibility
- Local validation passed: npm ci, npm run check (0 errors/warnings), npm run build (8 pages)
- Confirm GitHub Pages eligibility for this private repository before enabling deployment

## Shared workflow
The main ChatGPT portfolio conversation tracks direction and content. VS Code Codex handles local implementation. GitHub holds shared source and decisions.
Push local changes before asking for repository review; pull remote changes before continuing locally.
Record approved decisions here rather than relying on chat history being synchronized.

## Hosting
Intended URL: https://aguynamedmarco.github.io
Astro site URL configured. CI builds/checks only; it does not deploy.
Later Pages workflow should install at repository root, build there, and upload apps/site/dist.
