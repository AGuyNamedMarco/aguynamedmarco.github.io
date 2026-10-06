# Card Contract

## Purpose
- Provide a reusable content container for project and case-study summaries with optional metadata and call-to-action link.

<!--
Why this is best practice:
A specific purpose keeps the component focused and prevents it from becoming a generic catch-all layout.
-->

## API
- Astro component: `Card.astro`
- Type: `CardTone = "default" | "featured"`
- Type: `CardContent = { eyebrow?: string; title: string; body: string; href?: string; linkLabel?: string; tone?: CardTone }`
- Defaults:
  - `eyebrow = ""`
  - `href = "#"`
  - `linkLabel = "Read more"`
  - `tone = "default"`

<!--
Why this is best practice:
Typed shapes and explicit defaults produce predictable behavior and reduce boilerplate for consumers.
-->

## Inputs
- `content.title`
  - Required.
  - Plain text heading for the card.
- `content.body`
  - Required.
  - Plain text summary copy.
- `content.eyebrow`
  - Optional metadata label.
- `content.href`
  - Optional URL target for the card link.
- `content.linkLabel`
  - Optional visible text for the link action.
- `content.tone`
  - Optional visual emphasis selector (`"default" | "featured"`).

<!--
Why this is best practice:
Clear field-level rules prevent invalid content structures and help ensure usable, understandable cards.
-->

## Output Structure
- Renders Astro markup with:
  - Root element: `<article class="ui-card" data-tone="...">`
  - Optional eyebrow: `<p class="ui-card__eyebrow">...` when provided.
  - Required title: `<h3 class="ui-card__title">...`
  - Required body: `<p class="ui-card__body">...`
  - Required link: `<a class="ui-card__link" href="...">...`.

<!--
Why this is best practice:
A documented DOM structure provides stable styling and test hooks and preserves semantic meaning.
-->

## Visual States
- Default: token-based surface, border, and shadow.
- Featured tone: elevated border/shadow treatment.
- Hover: link color transition and standard container hover treatment.
- Focus-visible: inherited global focus treatment must remain visible.

<!--
Why this is best practice:
Defining states up front prevents inconsistent interaction behavior and visual regressions.
-->

## Accessibility Requirements
- Use `<article>` for semantic grouping of independent content.
- Keep heading text meaningful and unique in page context.
- Link label must communicate action clearly.
- Color choices must preserve readable contrast in both themes.

<!--
Why this is best practice:
Semantic structure and clear labels improve navigation for assistive technology and all users.
-->

## Token Usage
- Typography, spacing, radius, border, and shadows should rely on token values.
- Tone differences should be implemented with token-aligned values, not arbitrary one-off styling.

<!--
Why this is best practice:
Token alignment keeps components visually coherent across apps and simplifies theme changes.
-->

## Behavior Rules
- Rendering is presentational only; interaction logic belongs to the consumer.
- Optional eyebrow should be omitted from markup when empty.
- Output must be deterministic for the same `content` input.

<!--
Why this is best practice:
Presentation-only components are easier to reuse, reason about, and test.
-->

## Validation and Errors
- Caller is responsible for passing non-empty `title` and `body`.
- Caller is responsible for passing safe, valid URLs for `href`.
- Invalid `tone` values are prevented by TypeScript typing.

<!--
Why this is best practice:
Stating validation ownership prevents confusion and catches failures at the correct layer.
-->

## Storybook Coverage (Required)
- Default tone story.
- Featured tone story.
- No-eyebrow story.
- Long-title and long-body story.
- Keyboard focus walkthrough for the link.

<!--
Why this is best practice:
Story coverage across common and edge cases reduces regression risk and increases confidence before app integration.
-->

## Out of Scope (Current Version)
- Clickable-card wrapper behavior (entire card as a link).
- Media slot (image/video/icon region).
- Action button groups.
- Collapsible/expandable behavior.

<!--
Why this is best practice:
Explicitly deferring features keeps the API stable while the base component matures.
-->
