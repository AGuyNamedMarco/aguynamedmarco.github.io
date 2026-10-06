# Button Contract

## Purpose

- Provide a consistent, accessible call-to-action control for primary and secondary actions across portfolio surfaces.
  <!--
  Why this is best practice:
  A clear purpose prevents "scope creep" and keeps a component focused on one job.
  -->

## API

-->

- Astro component: `Button.astro`
  <!--
  Why this is best practice:
  Writing the exact function signature makes integration predictable for everyone using the component.
  -->
- Type: `ButtonVariant = "primary" | "secondary"`
  <!--
  Why this is best practice:
  A strict union type prevents unsupported values and reduces styling bugs.
  -->
- Defaults: `variant` defaults to `"primary"`
  <!--
  Why this is best practice:
  Safe defaults reduce required setup and keep behavior consistent when callers omit optional inputs.
  -->

## Inputs

- `label`
  <!--
  Why this is best practice:
  Naming and documenting required inputs helps consumers avoid runtime mistakes.
  -->
  - Required.
    <!--
    Why this is best practice:
    Required content ensures the button is always understandable to users.
    -->
  - Plain text content rendered as the button label.
    <!--
    Why this is best practice:
    Plain text avoids accidental HTML injection and improves security.
    -->
  - Must be meaningful on its own (avoid "Click here").
    <!--
    Why this is best practice:
    Descriptive labels improve usability and screen-reader clarity.
    -->
- `variant`
  <!--
  Why this is best practice:
  Separating visual style from content keeps the API simple and reusable.
  -->
  - Optional visual style selector.
    <!--
    Why this is best practice:
    Optional style props allow flexibility without forcing extra configuration.
    -->
  - Accepted values: `"primary"`, `"secondary"`.
    <!--
    Why this is best practice:
    Enumerated values protect design consistency and prevent random one-off variants.
    -->

## Output Structure

- Renders Astro markup with:
  <!--
  Why this is best practice:
  Declaring output format helps consumers know exactly what they can render and test.
  -->
  - Root element: `<button>`
    <!--
    Why this is best practice:
    Native button semantics provide built-in accessibility and keyboard behavior.
    -->
  - Required attributes:
    <!--
    Why this is best practice:
    Standard attributes create consistent styling hooks and expected behavior.
    -->
    - `class="ui-button"`
      <!--
      Why this is best practice:
      A stable class name gives CSS and tests a reliable target.
      -->
    - `data-variant="primary|secondary"`
      <!--
      Why this is best practice:
      Data attributes are clean, explicit hooks for variant styling.
      -->
    - `type="button"`
      <!--
      Why this is best practice:
      Explicit button type avoids accidental form submission bugs.
      -->

## Visual States

- Default: visible control with variant-specific styling.
  <!--
  Why this is best practice:
  Every component needs a documented baseline look so implementations are consistent.
  -->
- Hover: style may change, but text contrast must remain AA compliant.
  <!--
  Why this is best practice:
  Hover feedback improves discoverability, and contrast rules keep text readable.
  -->
- Focus-visible: 3px outline using `--focus` token with offset.
  <!--
  Why this is best practice:
  Strong focus styles are critical for keyboard users and accessibility compliance.
  -->
- Active/Pressed: no custom state yet.
  <!--
  Why this is best practice:
  Documenting omitted states prevents confusion and sets future work clearly.
  -->
- Disabled: not currently supported by API.
  <!--
  Why this is best practice:
  Calling out limitations explicitly avoids incorrect assumptions by consumers.
  -->

## Accessibility Requirements

- Control must use native `<button>` semantics.
  <!--
  Why this is best practice:
  Native elements handle keyboard and assistive technology behavior better than custom divs.
  -->
- Label must always be visible text.
  <!--
  Why this is best practice:
  Visible labels help all users and ensure the control is understandable at a glance.
  -->
- Focus indicator must be clearly visible in both themes.
  <!--
  Why this is best practice:
  Theme changes should never hide keyboard focus.
  -->
- Do not replace native button behavior with non-semantic elements.
  <!--
  Why this is best practice:
  Recreating native behavior is error-prone and often harms accessibility.
  -->

## Token Usage

- Typography and sizing should use design tokens (`--step-0`, spacing, border tokens).
  <!--
  Why this is best practice:
  Tokens keep spacing and type scales consistent across components and apps.
  -->
- Colors must come from token variables (`--accent`, `--surface`, `--border`, `--text`, `--focus`) where possible.
  <!--
  Why this is best practice:
  Tokenized colors make theming and future rebranding much easier.
  -->

## Behavior Rules

- Component is presentational; consumers pass destination/content through props.
  <!--
  Why this is best practice:
  Separating presentation from business logic makes components reusable in many contexts.
  -->
- Component must not inject inline scripts or event handlers.
  <!--
  Why this is best practice:
  Avoiding inline behavior improves security and keeps rendering deterministic.
  -->
- Rendered markup should remain deterministic for the same prop values.
  <!--
  Why this is best practice:
  Deterministic output simplifies testing, debugging, and snapshot stability.
  -->

## Validation and Errors

- Caller is responsible for passing non-empty labels.
  <!--
  Why this is best practice:
  Explicit caller responsibility clarifies where validation belongs.
  -->
- Invalid `variant` values are prevented by TypeScript typing.
  <!--
  Why this is best practice:
  Type-level protection catches mistakes before runtime.
  -->

## Storybook Coverage (Required)

- Default story (`primary`).
  <!--
  Why this is best practice:
  A baseline story acts as the canonical reference.
  -->
- Secondary variant story.
  <!--
  Why this is best practice:
  Variant stories prevent silent styling regressions.
  -->
- Long-label story to verify wrapping/overflow behavior.
  <!--
  Why this is best practice:
  Edge-case stories catch layout issues early.
  -->
- Keyboard focus check (`:focus-visible`) in docs/testing workflow.
  <!--
  Why this is best practice:
  Accessibility checks should be repeatable, not ad hoc.
  -->

## Out of Scope (Current Version)

- Icon support.
  <!--
  Why this is best practice:
  Declaring out-of-scope items keeps delivery focused.
  -->
- Loading state.
  <!--
  Why this is best practice:
  Explicitly deferring features helps prioritize core quality first.
  -->
- Disabled state.
  <!--
  Why this is best practice:
  Stating missing states avoids misuse and incorrect assumptions.
  -->
- Size variants.
  <!--
  Why this is best practice:
  Limiting variants early reduces API complexity while patterns mature.
  -->
