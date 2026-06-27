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
npm run preview
```

The production build outputs client assets to `dist/client` and the server bundle to `dist/server`.

`npm run build` runs `npm run generate:sitemap` before bundling so `public/sitemap.xml` stays in sync with service and service-area data.

## Project Structure

- `src/routes/index.tsx` composes the homepage and homepage structured data.
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
