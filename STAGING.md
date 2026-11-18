# Local staging

## Private browser review

Use the private preview link shared with the project owner. The Search case study is at `/work/usaspending-search`.

After a portfolio change is ready for review, build the review branch and deploy it to
the existing private Sites project. Use a separate Sites source
checkout without the GitHub Actions workflows. Run `npm run check` and
`npm run build`, then copy `apps/site/dist/` to the Sites checkout's `dist/`
before packaging. Confirm the private deployment succeeds before sharing the
same review link. GitHub Pages remains the production target.

## Local development

The local checkout starts from GitHub `main` at `51771d81` and uses the
`staging/portfolio-review` branch. Review changes here before merging to `main`.
Pushes to `main` trigger the existing GitHub Pages production workflow.

## Run on your computer

Use Node.js 22.12 or newer. From the repository root:

```sh
npm ci
npm run dev
```

Open the Local URL printed by Astro, normally `http://localhost:4321`.
The Search case study is at `/work/usaspending-search`.
Edits reload automatically. Stop the server with Ctrl+C.

## Run in the ChatGPT workspace

```sh
sites-preview start "$PWD"
sites-preview status
```

Use the exact forwarded URL returned by `sites-preview`. The preview runs
in this workspace, not on Marco's Windows computer. It is a temporary
development environment and may need restarting after workspace inactivity.

## Validate

```sh
npm run check
npm run build
```

Keep edits on a staging or feature branch and review them through a pull request
before merging to production.
