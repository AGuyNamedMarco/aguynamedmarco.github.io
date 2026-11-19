# Portfolio project status

Updated: 2026-11-18

## Desktop footer

- Offset the footer by the fixed sidebar width on desktop so its border and content clear the sidebar.

## Search case-study figures

- Centered figure captions and source lines beneath each figure.
- Added responsive space above and below figures and applied shadows directly to the cropped screenshot images, including the chart and map.
- Narrowed the reading column to 40rem and adjusted heading weights and line spacing.

## GitHub workflow — November 17

- GitHub is the source of truth for portfolio code, copy, and project decisions.
- Use `staging/portfolio-review` for the current draft. Review changes through GitHub and merge to `main` when approved for production. See `STAGING.md`.

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
- The Notion planning page and earlier drafts document the writing process up to this point.
- No website copy or design changes were made as part of staging setup.
- Fixed root dev-command argument forwarding so the managed preview can set
  its host and port correctly.
- Validation: Astro check passed with 0 errors/warnings; build generated 8 pages.
  Homepage and Search navigation verified in the staging browser.

## Current state
The Astro workspace replaced the older Jekyll source, which remains in Git history.

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
- Review the Search draft and replace the remaining image placeholders
- Develop Govini library/templates case study; third case study remains deferred
- Verify browser interactions, responsiveness, and accessibility
- Local validation passed: npm ci, npm run check (0 errors/warnings), npm run build (8 pages)

## Shared workflow
Record approved decisions here and edit website copy in the repository. Fetch remote changes before starting work. Push reviewable edits to a branch and use a pull request for review.

## Hosting
Production URL: https://aguynamedmarco.github.io

The Pages workflow builds from `main` and deploys `apps/site/dist`.
