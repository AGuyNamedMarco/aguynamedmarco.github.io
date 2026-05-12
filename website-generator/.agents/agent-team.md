# AI Agent Environment (Astro/Tailwind/Netlify Track)

This file defines the operating environment for an AI agent team building lean static websites.

## Team Roles

1. **Orchestrator Agent**
   - Owns planning, ticket sequencing, and handoff control.
2. **Frontend Agent**
   - Owns Astro components, routing, and responsive UI implementation.
3. **Design System Agent**
   - Owns Tailwind tokens, reusable primitives, and visual consistency.
4. **Content & SEO Agent**
   - Owns metadata, schema, content structure, and internal linking.
5. **QA & Performance Agent**
   - Owns accessibility, regression checks, and performance gates.
6. **DevOps Agent**
   - Owns Netlify build/deploy configuration and release validation.

## Shared Rules

- No direct commits to `main`.
- Every change must include:
  - scope summary,
  - files changed,
  - validation steps run,
  - follow-up risks.
- QA blocks merge on critical accessibility/performance failures.
- Human approval is required before production deploys.

## Branch and PR Convention

- Branch naming: `agent/<role>/<ticket-id>-<slug>`
- Commit style: `type(scope): message`
  - Example: `feat(frontend): add hero section with responsive layout`
- PR template sections:
  1. Problem
  2. Solution
  3. Validation
  4. Risks
  5. Preview URL

## Definition of Done

A task is done only when all are true:

- Acceptance criteria are met.
- Build succeeds.
- Accessibility checks pass for changed surfaces.
- No critical performance regression.
- SEO requirements are present where relevant.
- Preview deployment is available.

## Initial Ticket Breakdown (Sprint 1)

1. Scaffold Astro + Tailwind + Netlify config.
2. Implement core layout primitives (`Container`, `Section`, `Button`, `Card`).
3. Implement Home and About pages.
4. Implement Projects list and project detail template.
5. Implement Contact page and submission flow.
6. Add baseline technical SEO and schema.
7. Run QA/performance pass and fix critical findings.
