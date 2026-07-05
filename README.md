# Food Foundry

Marketing site for [Food Foundry](https://www.thefoodfoundry.com) — a Chicago founder community
and accelerator program for startups disrupting food and foodservice, built with Relish Works
and Gordon Food Service.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Radix UI · Zod · nuqs

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build (also runs a full TypeScript check) |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

---

## Where things live

```
src/
├── app/               Routes. One folder per URL. Pages are thin — they just
│                      compose sections and export page metadata.
│   ├── page.tsx              /
│   ├── startups/page.tsx     /startups
│   ├── program/page.tsx      /program
│   ├── contact/page.tsx      /contact
│   ├── layout.tsx            Shared shell: fonts, navbar, footer, skip link
│   ├── globals.css           Design tokens (colors, radii, shadows) live here
│   ├── not-found.tsx         404 page
│   ├── opengraph-image.tsx   Auto-generated social share image
│   ├── sitemap.ts            /sitemap.xml
│   └── robots.ts             /robots.txt
│
├── content/           ⭐ ALL EDITABLE TEXT AND DATA. Start here to change copy.
│   ├── site.ts               Name, email, address, socials, nav links
│   ├── startups.ts           The 30 portfolio companies + filter helpers
│   ├── cohorts.ts            Cohort numbers, years, descriptions
│   ├── stats.ts              Impact numbers (with sourcing notes)
│   ├── pillars.ts            Funding / Resources / Community
│   ├── timeline.ts           The 5 founder-journey steps
│   ├── faq.ts                FAQ entries for home, program, contact
│   ├── partners.ts           Relish Works, Gordon Food Service, 1871
│   └── gallery.ts            Demo Day and hero photography
│
├── components/
│   ├── ui/            Design-system primitives: Button, Card, Badge, Input,
│   │                  Section, Accordion, Tabs, Sticker, StatTile…
│   │                  Generic and reusable — no business logic.
│   ├── layout/        Navbar and Footer.
│   ├── motion/        Scroll-reveal wrappers (Reveal, StaggerGroup/Item).
│   │                  The only place Framer Motion is imported.
│   ├── sections/      Full page sections, grouped by the page they belong to.
│   │   ├── shared/           Used on 2+ pages (FAQ, CTA band, newsletter form)
│   │   ├── home/  startups/  program/  contact/
│   ├── seo/           <JsonLd> structured-data tag.
│   └── icons/         Brand SVGs (lucide-react no longer ships these).
│
├── actions/           Server actions — form submissions run here, on the server.
│   ├── contact.ts
│   └── newsletter.ts
│
├── lib/               Utilities and infrastructure (no UI).
│   ├── seo/metadata.ts          buildMetadata() used by every page
│   ├── seo/structured-data.ts   Organization + FAQPage JSON-LD
│   ├── validations/contact.ts   Zod schema, shared by client and server
│   ├── search-params.ts         Typed URL state for the startup directory
│   └── utils.ts                 cn() className helper
│
└── types/             Shared TypeScript interfaces (Startup, FAQItem, Stat…).

public/images/
├── startups/          29 portfolio logos
├── hero/              Hero and Demo Day photography
└── brand/             Food Foundry wordmark and favicon
```

**Rule of thumb:** content lives in `src/content/`, look-and-feel lives in
`src/components/`, and `src/app/` just wires them together.

---

## Common changes

**Change wording on a page** → find the matching file in `src/content/`. Most visible copy
is there, not in the components.

**Add a startup** → append an object to the array in `src/content/startups.ts`, and drop its
logo in `public/images/startups/`. It appears in the directory automatically, filtered and
grouped by its `cohort`. TypeScript will tell you if a field is missing.

**Add a new cohort** → add it to `src/content/cohorts.ts`, then widen the `CohortNumber` union
in `src/types/startup.ts` and the `cohortValues` list in `src/lib/search-params.ts`.

**Change brand colors, spacing, or shadows** → edit the CSS variables at the top of
`src/app/globals.css`. Every component reads from those tokens, so one edit updates the
whole site.

**Add a new page** → create `src/app/<route>/page.tsx`, export `metadata` via `buildMetadata()`,
compose sections, and add the route to `src/app/sitemap.ts` and `primaryNav` in
`src/content/site.ts`.

---

## Things to know

**Server vs. Client Components.** Almost everything renders on the server. Only these are
client components (`"use client"`): the navbar (mobile menu), the startup search bar, cohort
tabs and category filters, both forms, the accordion and tabs primitives, and the motion
wrappers. Keep new components on the server unless they need state or browser APIs.

**Startup filtering runs in the URL.** Search, cohort, and category state lives in query
params via `nuqs`, so `/startups?cohort=4&q=snack` is shareable and bookmarkable, and the
grid itself stays a Server Component. This is why `/startups` is the one dynamically
rendered route; the other three are fully static.

**Content data is a seam.** Components never hardcode copy — they read from `src/content/`.
If you move to a CMS later, only those files change.

**Accessibility.** One `h1` per page, semantic landmarks, visible focus rings, labelled
inputs, and `prefers-reduced-motion` support. Scroll-reveal sections start at `opacity: 0`,
so `src/app/layout.tsx` has a `<noscript>` fallback that reveals them if JS fails — keep it.

---

## Not finished yet

- **The contact and newsletter forms don't send anything.** Both validate input and return a
  success state, but no email provider is connected. See `src/actions/contact.ts` and
  `src/actions/newsletter.ts`, and `.env.example` for the keys to add.
- **Impact stats need confirming.** `src/content/stats.ts` uses figures published by Gordon
  Food Service in January 2023 (30 alumni, $90M+ raised). Two cohorts have run since, so the
  real numbers are higher. They're written as `30+` and `$90M+` so they stay truthful as
  minimums until you have current ones.
- **No testimonials or mentor bios.** Deliberately left out rather than filled with
  placeholder people. Add a section under `src/components/sections/home/` when real content
  exists.
