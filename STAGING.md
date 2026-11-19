# GitHub staging

## Review workflow

GitHub holds the website copy, code, and project decisions. Fetch the current
review branch before editing, and push reviewable changes back to GitHub.
Use a pull request to compare proposed changes before merging. The active
review branch is `staging/portfolio-review`.

GitHub Pages serves production at `aguynamedmarco.github.io`. A push to
`main` triggers the deployment workflow.

## Run on your computer

Use Node.js 22.12 or newer. From the repository root:

```sh
npm ci
npm run dev
```

Open the Local URL printed by Astro, normally `http://localhost:4321`.
The Search case study is at `/work/usaspending-search`.
Edits reload automatically. Stop the server with Ctrl+C.

## Validate

```sh
npm run check
npm run build
```
