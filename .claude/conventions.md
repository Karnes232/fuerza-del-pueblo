# Conventions & Patterns

## Language
- All **user-facing copy** is in **Spanish**.
- All **code** (variable names, type names, comments, file names) is in **English**.

## Components

### Structure
- Each page maps 1:1 to a folder under `src/components/<PageName>/`.
- Break pages into small, focused components — sections, cards, and sub-elements are separate files.
- Shared layout (Navbar, Footer) lives in `src/components/layout/`.

### Props
- Define prop types inline with the component (no separate Props file for simple cases).
- For complex or reused shapes, define them in `src/types/<domain>.types.ts`.

## Sanity

### Adding a new schema
1. Create `src/sanity/schemaTypes/<PageName>/<SectionName>.ts`
2. Create matching query at `src/sanity/queries/<PageName>/<SectionName>.ts`
3. Register the schema in `src/sanity/schemaTypes/index.ts`

### Querying data
- Always import from `src/sanity/lib/client.ts` — never instantiate a new client.
- Use `src/sanity/lib/image.ts` for image URL building (wraps `@sanity/image-url`).
- Always use `next/image` with the built URL — never `<img>`.

### Portable Text
Use the renderers in `src/components/BlockContent/` when rendering Sanity rich text fields.

## Server Actions
- File suffix: `.action.ts`, directive: `"use server"` at the top.
- Return `{ success: boolean; message: string }` for form submissions.
- Save to Supabase first, send email second — a DB failure blocks everything; an email failure is recoverable.
- Use `console.error` with a `[ActionName]` prefix for all error logging.

## Styling
- Use Tailwind utility classes exclusively — no inline styles except inside email HTML templates.
- Use brand color tokens (`text-primaryGreen`, `bg-darkGreen`, etc.) — never raw hex values.
- Dark mode is disabled. Never add `dark:` variants.
- Fonts: `font-heading` (Montserrat) for headings, `font-body` (Open Sans) for body text.

## Images
- Remote images allowed: `cdn.sanity.io`, `encrypted-tbn0.gstatic.com`, `listindiario.com`, `picsum.photos`.
- Minimum cache TTL: 3 days (259200s) — matches ISR revalidation period.
- Always provide `alt` text in Spanish.

## Forms
- Validate required fields in the Server Action, not only in the client.
- Normalize emails to lowercase before DB lookups.
- Check for duplicate emails before inserting (return a user-friendly Spanish error).

## ISR / Caching
- Revalidation is handled via the `/api/revalidate` webhook triggered from Sanity on publish.
- Revalidation period is 3 days, matching the image cache TTL.

## No Tests
There is currently no test suite. Verify new features manually with `npm run dev`. If adding a test setup, prefer integration tests that hit real services (not mocks) — especially for DB and email flows.
