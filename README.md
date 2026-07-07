# Courtney Youngberg — Portfolio

A professional portfolio positioning Courtney Youngberg at the intersection of data analytics, business process automation, business/systems analysis, data science, analytics engineering, integration, and AI-assisted operations.

Core brand: **"I turn messy data and manual processes into useful systems."**

The flagship case study is the [Equity Gap Calculator](https://di-calculator.com), a live public application implementing the CCCCO PPG-1 disproportionate-impact methodology.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, static generation)
- TypeScript
- Tailwind CSS 4
- Vitest for tests
- Deployable to Vercel with zero configuration

## Architecture

The site is content-driven: every page renders typed data from `content/`, and components own presentation only.

```
app/                    Routes (App Router)
  page.tsx              Home
  projects/             Project index with category/role filtering
  projects/[slug]/      Case-study detail pages (SSG)
  about/  resume/  contact/
  sitemap.ts robots.ts  SEO plumbing
components/
  layout/               Header, Footer, Container
  ui/                   Buttons, tags, section headings
  project/              Project cards + client-side filter explorer
  case-study/           Block renderer (paragraphs, code, tables, callouts, diagrams, stats)
  diagrams/             Inline SVG architecture diagrams + registry
content/
  site.ts               Identity, headline, impact stats, home-page copy
  projects.ts           Project metadata (categories, roles, skills, metrics)
  case-studies.ts       Full case-study content as typed blocks
  skills.ts             Skill groups (capability-based, no percentage bars)
  experience.ts         Resume timeline + education
lib/
  types.ts              Content model types
  filtering.ts          Pure, tested project-filter logic
  utils.ts
tests/                  Vitest: filtering behavior + content integrity
public/resume/          Drop the resume PDF here (see TODO below)
```

## Commands

```bash
npm run dev        # local development (http://localhost:3000)
npm run build      # production build
npm start          # serve the production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm test           # Vitest (filter logic + content integrity)
```

## Deployment

The site is fully static — deploy to Vercel by importing the repository (or `npx vercel`). Before going to production:

1. Set the real domain in `content/site.ts` (`site.url`) — it drives metadata, Open Graph, sitemap, and robots.
2. Search the repo for `TODO` and resolve each item (see below).

## Editing content

All copy lives in `content/`. Components never hard-code project or biography text.

### How to add a new project

1. Add a `Project` entry to `content/projects.ts` (slug, title, tagline, summary, categories, roles, skills; optional metrics/liveUrl). Set `confidential: true` for employer-internal work.
2. Add a matching `CaseStudy` (same slug) to `content/case-studies.ts`, composed of typed blocks: `p`, `list`, `code`, `table`, `callout`, `diagram`, `stats`.
3. If the case study needs a diagram, add an SVG component under `components/diagrams/` and register it in `components/diagrams/index.tsx` (plus the union type in `lib/types.ts`).
4. Run `npm test` — the content-integrity suite verifies slugs match, sections are unique, diagrams exist, and confidential case studies label synthetic examples.

The detail page, project index, filters, sitemap, and static params all pick up the new project automatically.

## Privacy & truthfulness principles

These are enforced by convention and, where possible, by tests (`tests/content.test.ts`):

- **No employer-confidential data.** Case studies for internal work are anonymized; code and data examples are synthetic and visibly labeled "Synthetic example."
- **No fabricated metrics.** The impact figures on the home page are an approved allowlist checked by a test. Don't add numbers that can't be verified.
- **No fabricated links.** `repoUrl` stays unset until a verified public repository exists; social links in `content/site.ts` stay empty until confirmed.
- **No invented dates.** Unverified role dates are empty strings with `// TODO` comments; the UI hides empty periods rather than guessing.
- **Honest AI attribution.** Where AI coding tools accelerated implementation, the case studies say so.

## Outstanding TODOs

- `content/experience.ts` — exact dates for pre-2024 roles.
- `app/resume/page.tsx` — add `public/resume/courtney-youngberg-resume.pdf` and flip `RESUME_PDF_AVAILABLE`.
- Vercel dashboard — set `www.courtneyyoungberg.com` to redirect to the apex domain (Settings → Domains).
- Optional: real screenshots of the Equity Gap Calculator under `public/images/` to complement the flow diagram.
