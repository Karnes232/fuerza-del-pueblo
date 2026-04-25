# Fuerza del Pueblo — Claude Guide

## Project Overview

Website for **Fuerza del Pueblo**, the Verón–Punta Cana chapter of the Dominican political party. The site handles public-facing content, member recruitment, event RSVPs, and news — all in Spanish.

**Live domain:** `fuerzadelpuebloveronpuntacana.com`

## Tech Stack

| Layer     | Tool                                     |
| --------- | ---------------------------------------- |
| Framework | Next.js 16.1.6 (App Router)              |
| UI        | React 19, Tailwind CSS v4                |
| Language  | TypeScript 5                             |
| CMS       | Sanity v4 (Studio embedded at `/studio`) |
| Database  | Supabase (member applications)           |
| Email     | Resend                                   |
| Icons     | Lucide React                             |
| Carousel  | Swiper                                   |
| Rich Text | @portabletext/react                      |

## Commands

```bash
npm run dev       # Start dev server (port 3000)
npm run build     # Production build
npm run lint      # ESLint
npm run format    # Prettier (all JS/TS/JSON/MD/CSS)
```

## Brand Colors

Defined in `tailwind.config.ts` — always use these tokens, never raw hex values:

| Token          | Hex       | Use                       |
| -------------- | --------- | ------------------------- |
| `primaryGreen` | `#00A651` | CTAs, links, accents      |
| `darkGreen`    | `#1F4D2B` | Headers, dark backgrounds |
| `charcoal`     | `#111111` | Body text                 |
| `lightGray`    | `#F4F4F4` | Page backgrounds          |
| `pureWhite`    | `#FFFFFF` | Cards, modals             |

Dark mode is **disabled** (`darkMode: false` in tailwind.config.ts).

## Architecture Patterns

### Component Organization

Each page has its own folder under `src/components/<PageName>/`. Components are granular — sections, cards, and sub-elements are separate files. Layout-level components (Navbar, Footer) live in `src/components/layout/`.

### Sanity Integration

- **Schemas** → `src/sanity/schemaTypes/<PageName>/`
- **GROQ Queries** → `src/sanity/queries/<PageName>/`
- Schema and query folder names mirror each other exactly.
- Sanity Studio is accessible at `/studio` (no separate Sanity project).

### Server Actions

All form submissions go through Next.js Server Actions in `src/app/actions/`. Files use the `.action.ts` suffix and `"use server"` at the top.

| Action                 | Purpose                                    |
| ---------------------- | ------------------------------------------ |
| `contact.action.ts`    | Contact form → Resend email                |
| `join.action.ts`       | Membership form → Supabase + Resend emails |
| `newsletter.action.ts` | Newsletter opt-in                          |
| `rsvp.action.ts`       | Event RSVP                                 |

### Types

All TypeScript interfaces live in `src/types/` with a `.types.ts` suffix, one file per page/domain.

### Config Files

Static/seed data that isn't in Sanity lives in `src/config/` with a `.config.ts` suffix (navigation links, footer columns, etc.).

## Environment Variables

See `.claude/env-vars.md` for the full reference. Required for local dev:

```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY
RESEND_API_KEY
```

## Key Conventions

- **Language:** All user-facing copy is in Spanish. Variable names, types, and code comments are in English.
- **Images:** Remote images from `cdn.sanity.io` are allowed in `next.config.ts`. Always use `next/image` — never `<img>`.
- **No dark mode:** Don't add `dark:` Tailwind variants.
- **No test suite** currently exists — test new UI in the browser with `npm run dev`.
- See `.claude/conventions.md` for full coding conventions.
- See `.claude/file-structure.md` for the full directory map.
