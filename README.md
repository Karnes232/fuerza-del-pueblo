## Fuerza del Pueblo — Website

This repository contains the **Fuerza del Pueblo** public website (Verón–Punta Cana chapter).

In simple terms, it’s a website where people can **learn about the party**, **stay up to date**, and **take action** (join, contact, RSVP to events, subscribe to the newsletter).

### What a visitor can do on the website

- **Read news**
  - See a list of articles, filter them by category, and open an article to read the full story
  - Share an article from the article page
- **Browse events**
  - See upcoming and past events
  - Open an event to see details like date/time, location, and schedule (when available)
  - RSVP to an upcoming event (if it’s not full)
- **Join the movement**
  - Fill out the “Únete” (Join) form to register interest and choose membership options
- **Contact the organization**
  - Send a message through the contact form
  - View official contact details, map/location, and social media links
- **Subscribe to the newsletter**
  - Opt in to email updates from the party
- **Learn about the party**
  - Read informational pages about who we are, our history, leadership, mission/vision/values, and candidates

### Website pages (for reference)

- **Home** (`/`)
  - Highlights **hero CTA**, **about**, **values**, latest **news**, upcoming **events**
  - Prominent CTA sections to **join** and **contact**
- **News** (`/noticias`)
  - Browse all articles
  - Filter/search articles on the client
  - View a featured article
- **News article** (`/noticias/[slug]`)
  - Read an individual article
  - Navigate to next/previous articles and see related articles
  - Share the article (social share UI)
- **Events** (`/eventos`)
  - Browse featured event, categories, upcoming events, and past events
- **Event detail** (`/eventos/[slug]`)
  - View event info (details, schedule if available, location/map info)
  - RSVP form (enabled only for upcoming events and disabled if capacity is reached)
- **Event RSVP** (`/eventos/[slug]/rsvp`)
  - Dedicated RSVP page for an event
- **Join** (`/unete`)
  - Learn why to join, view membership tiers, FAQs, testimonials
  - Complete a membership registration form (interests, availability, agreement checkbox)
- **Contact** (`/contacto`)
  - View contact info, send a message, see a map/location embed, follow social links
- **Party section** (`/partido/*`)
  - `quienes-somos`, `historia`, `liderazgo`, `mision-vision-valores`, `candidatos`
- **Legal**
  - `/terminos-y-condiciones`, `/politica-de-privacidad`

### Admin area (internal)

A private admin dashboard lives at `/admin`. It is gated by Supabase Auth and an email whitelist (`ADMIN_ALLOWED_EMAILS`). Routes:

- `/admin/login` — sign in
- `/admin` — dashboard overview
- `/admin/solicitudes` — membership applications submitted via the Join form
- `/admin/contactos` — messages submitted via the contact form
- `/admin/rsvps` — event RSVPs
- `/admin/newsletters` — compose and send newsletters to subscribers

### Forms

The site has four public-facing forms, all wired to real services:

- **Contact form** → stores submissions in Supabase (`contact_submissions`) and sends two emails via Resend (an admin notification and a confirmation to the sender).
- **Join form (Únete)** → stores applications in Supabase (`member_applications`), sends two Resend emails, and (if opted in) subscribes the user to the newsletter.
- **Event RSVP** → stores RSVPs in Supabase (`event_rsvps`).
- **Newsletter signup** → adds subscribers to Supabase (`newsletter_subscribers`).

In addition, the admin newsletter tool composes HTML in a **Tiptap** editor, sanitizes it with `sanitize-html`, and sends batched emails through Resend with per-recipient unsubscribe tokens (RFC 8058 `List-Unsubscribe` headers). Sent and failed counts are tracked per send.

### Updating website content

The site has two content/admin surfaces:

- **Sanity Studio** (`/studio`) — content editing for **news articles**, **events**, and page-section text/images (home page blocks, party pages, etc.).
- **Admin dashboard** (`/admin`) — review submissions from the public forms (members, contacts, RSVPs) and compose/send newsletters.

## For developers (setup)

### Tech stack

- **Next.js 16.1.6** + React 19.2.3 (App Router)
- **TypeScript 5**
- **Sanity v4** via `next-sanity` (Studio embedded at `/studio`); `@portabletext/react` for Portable Text rendering
- **Supabase** (`@supabase/supabase-js`, `@supabase/ssr`) for form storage and admin auth
- **Resend** for transactional and bulk email
- **Tiptap** (newsletter editor) with `sanitize-html` for email-safe HTML
- **Tailwind CSS v4** + `styled-components`
- **Swiper** (carousels) + `lucide-react` icons

## Getting started (local development)

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env.local` file in the project root. The full list (a mirror of `.claude/env-vars.md`):

```bash
# --- Sanity (required) ---
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="your_dataset"
NEXT_PUBLIC_SANITY_API_VERSION="2026-02-02"   # optional, default shown

# --- Supabase (required) ---
NEXT_PUBLIC_SUPABASE_URL="https://xxxxx.supabase.co"
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY="anon_public_key"
SUPABASE_SERVICE_ROLE_KEY="service_role_key"           # server-only, bypasses RLS
ADMIN_ALLOWED_EMAILS="me@example.com,other@example.com" # comma-separated whitelist for /admin

# --- Resend / email (required for forms to send mail) ---
RESEND_API_KEY="re_..."
RESEND_FROM_EMAIL="info@your-verified-domain.com"
CONTACT_RECIPIENT_EMAIL="info@your-verified-domain.com"
NEWSLETTER_REPLY_TO="info@your-verified-domain.com"     # optional

# --- Optional ---
WHATSAPP_NUMBER="18299328036"          # used in confirmation email WhatsApp link
CONTACT_DEBUG_RESEND="false"           # "true" to surface Resend errors in responses (dev only)
NEXT_PUBLIC_SITE_URL=""                # auto-derived from request headers if unset
```

Notes:

- The Sanity and Supabase project/URL variables are **required** — the app throws on startup if missing.
- `NEXT_PUBLIC_SANITY_API_VERSION` is optional and defaults to `2026-02-02`.
- Without Resend keys configured, form submissions still persist to Supabase but no emails are sent.
- The `member_applications` table can be bootstrapped from `supabase/member_applications.sql` (run it in the Supabase SQL editor).

### 3) Run the dev server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Common commands

```bash
npm run dev       # start dev server
npm run build     # production build
npm run start     # start production server
npm run lint      # lint
npm run format    # prettier
```

## Deployment

This is a standard Next.js app and can be deployed to any Node-compatible platform (Vercel, Render, etc.).

Make sure the deployment environment has the same env vars set as `.env.local` above:

- Sanity: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, optional `NEXT_PUBLIC_SANITY_API_VERSION`
- Supabase: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_ALLOWED_EMAILS`
- Resend: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_RECIPIENT_EMAIL`, optional `NEWSLETTER_REPLY_TO`
- Optional: `WHATSAPP_NUMBER`, `CONTACT_DEBUG_RESEND`, `NEXT_PUBLIC_SITE_URL`
