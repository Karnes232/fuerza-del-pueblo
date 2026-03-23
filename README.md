## Fuerza del Pueblo — Website

This repository contains the **Fuerza del Pueblo** public website.

In simple terms, it’s a website where people can **learn about the party**, **stay up to date**, and **take action** (join, contact, RSVP to events).

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

### Forms (important note)

The website includes forms for:

- **Contact form**
- **Join form**
- **Event RSVP form**
- **Newsletter email subscription**

Right now, the forms are set up to **show a success message** as a demo. To make them truly “send” messages or store signups (email delivery, spreadsheet/CRM, database, etc.), you’ll connect them to a real service or a server endpoint.

### Updating website content (admin/editor)

The site has an admin editor area called **Sanity Studio**:

- **Sanity Studio**: `/studio`

This is where a content editor can typically:

- Add/edit **news articles**
- Add/edit **events**
- Update text/images for page sections (home page blocks, party pages, etc.)

## For developers (setup)

### Tech stack

- **Next.js 16** + React 19 (App Router)
- **Sanity CMS** via `next-sanity`
- Tailwind CSS (v4) + `styled-components`
- Swiper (carousels) + lucide icons

## Getting started (local development)

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env.local` file in the project root with:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="your_dataset"
NEXT_PUBLIC_SANITY_API_VERSION="2026-02-02"
```

Notes:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are **required** (the app will throw on startup if missing).
- `NEXT_PUBLIC_SANITY_API_VERSION` is optional and defaults to `2026-02-02`.

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

Make sure the deployment environment has the same Sanity env vars set:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION` (optional)
