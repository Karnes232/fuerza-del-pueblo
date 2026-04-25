# File Structure

```
fuerza-del-pueblo/
├── .claude/                        # Claude Code documentation
│   ├── CLAUDE.md                   # Main project guide
│   ├── file-structure.md           # This file
│   ├── env-vars.md                 # Environment variable reference
│   └── conventions.md              # Coding conventions & patterns
│
├── public/                         # Static assets
│
├── supabase/
│   └── member_applications.sql     # Schema for the member_applications table
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (fonts, metadata, analytics)
│   │   ├── global.css              # Global styles
│   │   ├── not-found.tsx           # 404 page
│   │   ├── robots.ts               # robots.txt generation
│   │   │
│   │   ├── actions/                # Next.js Server Actions ("use server")
│   │   │   ├── contact.action.ts   # Contact form → Resend
│   │   │   ├── join.action.ts      # Membership form → Supabase + Resend
│   │   │   ├── newsletter.action.ts# Newsletter opt-in
│   │   │   └── rsvp.action.ts      # Event RSVP
│   │   │
│   │   ├── api/
│   │   │   └── revalidate/         # On-demand ISR revalidation webhook
│   │   │
│   │   ├── (root)/                 # Route group — shares Navbar + Footer layout
│   │   │   ├── layout.tsx          # Wraps all public pages with Nav/Footer
│   │   │   ├── page.tsx            # / — Home
│   │   │   ├── sitemap.ts          # Sitemap generation
│   │   │   │
│   │   │   ├── contacto/page.tsx           # /contacto
│   │   │   ├── unete/page.tsx              # /unete — Join/membership
│   │   │   │
│   │   │   ├── eventos/
│   │   │   │   ├── page.tsx                # /eventos — Events listing
│   │   │   │   └── [slug]/
│   │   │   │       ├── page.tsx            # /eventos/[slug]
│   │   │   │       └── rsvp/page.tsx       # /eventos/[slug]/rsvp
│   │   │   │
│   │   │   ├── noticias/
│   │   │   │   ├── page.tsx                # /noticias — News listing
│   │   │   │   └── [slug]/page.tsx         # /noticias/[slug]
│   │   │   │
│   │   │   ├── partido/
│   │   │   │   ├── candidatos/page.tsx          # /partido/candidatos
│   │   │   │   ├── historia/page.tsx             # /partido/historia
│   │   │   │   ├── liderazgo/page.tsx            # /partido/liderazgo
│   │   │   │   ├── mision-vision-valores/page.tsx
│   │   │   │   └── quienes-somos/page.tsx        # /partido/quienes-somos
│   │   │   │
│   │   │   ├── politica-de-privacidad/page.tsx
│   │   │   └── terminos-y-condiciones/page.tsx
│   │   │
│   │   └── studio/[[...tool]]/     # Embedded Sanity Studio at /studio
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       └── StudioClient.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav/                # Navbar (desktop + mobile)
│   │   │   │   ├── NavbarContainer.tsx
│   │   │   │   ├── DesktopNav.tsx
│   │   │   │   ├── MobileNav.tsx
│   │   │   │   ├── NavDropdown.tsx
│   │   │   │   ├── NavLink.tsx
│   │   │   │   ├── DropdownItem.tsx
│   │   │   │   ├── MobileMenuButton.tsx
│   │   │   │   ├── NavbarLogo.tsx
│   │   │   │   └── CTAButton.tsx
│   │   │   └── Footer/
│   │   │       ├── FooterContainer.tsx
│   │   │       ├── FooterTop.tsx
│   │   │       ├── FooterBottom.tsx
│   │   │       ├── FooterNav.tsx
│   │   │       ├── FooterColumn.tsx
│   │   │       ├── FooterLogo.tsx
│   │   │       ├── FooterContact.tsx
│   │   │       ├── FooterNewsletter.tsx
│   │   │       ├── FooterSocial.tsx
│   │   │       ├── FooterLink.tsx
│   │   │       └── SocialIcon.tsx
│   │   │
│   │   ├── BlockContent/           # Sanity Portable Text renderers
│   │   │   ├── SanityBlogBody.tsx
│   │   │   ├── TextComponentHeading.tsx
│   │   │   ├── TextComponentList.tsx
│   │   │   └── TextComponentParagraph.tsx
│   │   │
│   │   ├── HomePage/
│   │   ├── AboutUsPage/            # /partido/quienes-somos
│   │   ├── CandidatesPage/
│   │   ├── ContactPage/
│   │   ├── EventsPage/
│   │   ├── HistoryPage/
│   │   ├── IndividualEventPage/
│   │   ├── IndividualNewsPage/
│   │   ├── JoinPage/               # /unete — includes MembershipSelectionContext
│   │   ├── LeadershipPage/
│   │   ├── MissionPage/
│   │   └── NewsPage/
│   │
│   ├── config/                     # Static config / seed data (not in Sanity)
│   │   ├── navigation.config.ts    # Nav links and dropdown structure
│   │   ├── footer.config.ts        # Footer columns and links
│   │   ├── home.config.ts
│   │   ├── events.config.ts
│   │   ├── news.config.ts
│   │   └── history.config.ts
│   │
│   ├── hooks/
│   │   └── useNavbar.ts            # Scroll-aware navbar state
│   │
│   ├── lib/
│   │   ├── supabase/               # Supabase client helpers
│   │   └── someother/              # (placeholder — check contents before use)
│   │
│   ├── sanity/
│   │   ├── env.ts                  # Reads NEXT_PUBLIC_SANITY_* env vars
│   │   ├── structure.ts            # Sanity Studio structure builder
│   │   ├── lib/
│   │   │   ├── client.ts           # Sanity client instance
│   │   │   ├── image.ts            # sanity image URL builder
│   │   │   └── live.ts             # Live content helpers
│   │   ├── schemaTypes/            # Schema definitions, organized by page
│   │   │   ├── index.ts            # Registers all schemas
│   │   │   ├── AboutPage/
│   │   │   ├── CandidatesPage/
│   │   │   ├── ContactPage/
│   │   │   ├── EventsPage/
│   │   │   ├── GeneralLayout/
│   │   │   ├── HistoryPage/
│   │   │   ├── HomePage/
│   │   │   ├── JoinPage/
│   │   │   ├── LeadershipPage/
│   │   │   ├── LegalDocuments/
│   │   │   ├── MissionPage/
│   │   │   ├── NewsPage/
│   │   │   └── SEO/
│   │   └── queries/                # GROQ queries — mirrors schemaTypes/ structure
│   │       ├── AboutPage/
│   │       ├── CandidatesPage/
│   │       ├── ContactPage/
│   │       ├── EventsPage/
│   │       ├── GeneralLayout/
│   │       ├── HistoryPage/
│   │       ├── HomePage/
│   │       ├── JoinPage/
│   │       ├── LeadershipPage/
│   │       ├── LegalDocuments/
│   │       ├── MissionPage/
│   │       ├── NewsPage/
│   │       └── SEO/
│   │
│   └── types/                      # TypeScript interfaces (*.types.ts)
│       ├── about.types.ts
│       ├── article.types.ts
│       ├── candidates.types.ts
│       ├── contact.types.ts
│       ├── event.types.ts
│       ├── events.types.ts
│       ├── footer.types.ts
│       ├── history.types.ts
│       ├── home.types.ts
│       ├── leadership.types.ts
│       ├── mission.types.ts
│       ├── navbar.types.ts
│       ├── news.types.ts
│       └── unete.types.ts          # JoinFormData lives here
│
├── sanity.config.ts                # Sanity project config
├── sanity.cli.ts                   # Sanity CLI config
├── next.config.ts                  # Next.js config (image domains, transpile)
├── tailwind.config.ts              # Tailwind theme (brand colors, fonts)
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
└── .prettierrc
```

## Naming Conventions

| Thing                     | Convention               | Example                    |
| ------------------------- | ------------------------ | -------------------------- |
| Component files           | PascalCase               | `MembershipTierCard.tsx`   |
| Component folders         | PascalCase               | `JoinPage/`                |
| Type files                | camelCase + `.types.ts`  | `unete.types.ts`           |
| Config files              | camelCase + `.config.ts` | `navigation.config.ts`     |
| Action files              | camelCase + `.action.ts` | `join.action.ts`           |
| Sanity schema/query files | PascalCase               | `MemberShipTierSection.ts` |
| Hooks                     | camelCase + `use` prefix | `useNavbar.ts`             |
