# DecksRXKC Website

TanStack Start v1 website for DecksRXKC, a Kansas City deck contractor. Built with React 19, TypeScript, Tailwind CSS v4, lucide-react, local project photography, SEO-focused service pages, and Supabase lead capture.

## Setup

```bash
npm install
npm run dev
```

Local dev server runs at `http://127.0.0.1:4321/`.

## Build

```bash
npm run typecheck
npm run build
npm run check:seo
npm run preview
```

The production build outputs client assets to `dist/client` and the server bundle to `dist/server`.

`npm run build` runs `npm run generate:sitemap` before bundling so `public/sitemap.xml` stays in sync with service and service-area data.

`npm run check:seo` renders every sitemap URL through the built server entry and verifies status, title, description, canonical, robots metadata, H1 count, main content, and homepage SEO signals. To check a deployed environment instead, set `SEO_BASE_URL`, for example `SEO_BASE_URL=https://decksrxkc.com npm run check:seo`.

Optional GA4 measurement uses `VITE_GA_MEASUREMENT_ID`. When configured, the site records `quote_cta_click`, `click_to_call`, and `generate_lead`; when omitted, analytics safely remains inactive.

## Project Structure

- `src/routes/index.tsx` composes the homepage and homepage structured data.
- `src/data/servicePages.ts`, `src/data/projects.ts`, and `src/data/guides.ts` hold typed SEO content used to generate service, project, and guide routes.
- `src/data/business.ts` is the source of truth for the business entity used in structured data and contact links.
- `src/components/home/` contains focused homepage sections.
- `src/routes/services.index.tsx` and `src/routes/services.$slug.tsx` contain dedicated service pages.
- `src/routes/service-areas.index.tsx` and `src/routes/service-areas.$slug.tsx` contain location pages.
- `src/routes/__root.tsx` contains the document shell and SEO meta tags.
- `src/data/servicePages.ts` and `src/data/serviceAreas.ts` define crawlable service and location pages.
- `scripts/generate-sitemap.mjs` generates `public/sitemap.xml`.
- `src/styles.css` defines the Tailwind v4 theme tokens and global styles.
- `public/images/` contains the local DecksRXKC project photography used throughout the page.
- `supabase/schema.sql` creates the lead capture table and row-level security policies.

## Supabase Form Setup

Run `supabase/schema.sql` in the Supabase SQL editor before sending traffic to the form. The quote form writes to `public.quote_requests`.

Add these environment variables locally and in Netlify:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_publishable_anon_key
```

The public anon key is used only for inserting quote requests. Row-level security allows anonymous inserts, but does not allow anonymous reads.

## Netlify

Netlify settings are defined in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist/client`
