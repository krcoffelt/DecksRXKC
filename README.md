# DecksRXKC Website

TanStack Start v1 website for DecksRXKC, a Kansas City deck contractor. Built with React 19, TypeScript, Tailwind CSS v4, lucide-react, local project photography, SEO-focused service pages, and Netlify Forms lead capture.

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

`npm run check:seo` renders every sitemap URL through the built server entry and verifies status, unique titles and descriptions, canonicals, robots metadata, H1 count, main content, JSON-LD validity, internal sitemap links, orphan pages, guide citations, homepage SEO signals, and answer terms for the priority-query map. To check a deployed environment instead, set `SEO_BASE_URL`, for example `SEO_BASE_URL=https://decksrxkc.com npm run check:seo`.

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
- `public/__forms.html` registers the quote form with Netlify at build time.

## Design System

The site uses a "built from the footings up" design system (2026 redesign): condensed architectural type, blueprint details, and one copper accent pulled from the DecksRXKC logo.

- **Type** — self-hosted in `public/fonts/` (SIL Open Font License; license texts sit beside the files): Archivo variable (`archivo-variable.woff2`, width + weight axes) sets both the condensed uppercase display type (`font-display`, `display-xl/lg/md/sm`, and every `h1`/`h2`) and body copy; Instrument Serif italic is the accent voice for `<em>` inside headings; Geist Mono carries labels and measurements.
- **Font loading** — all fonts are `woff2`. Archivo and the serif italic are preloaded, and size-matched local fallbacks (`Archivo Fallback`, `Archivo Condensed Fallback`, `Instrument Serif Fallback` in `src/styles.css`) keep text from shifting while they load.
- **Performance** — route loaders are code-split (`vite.config.ts`), and route `head` functions import URL helpers from `src/data/paths.ts` so page content stays out of the shared bundle. Quote submissions post directly to Netlify Forms, the homepage anatomy drawing is built only when it scrolls near, secondary hero photos and menu previews load after first paint, and Lenis is skipped on touch devices.
- **Palette** — charcoal (`night`, `charcoal`, `graphite`), Kansas City limestone (`bone`, `paper`, `sand`), and copper (`soft-beige` for dark backgrounds, `bronze`, `wood` for text on light backgrounds) tokens in `src/styles.css`.
- **Primitives** — `src/components/ui.tsx` holds `ButtonLink` (sharp, fill-wipe buttons), `CircleLink` (magnetic round CTA), `SectionIntro`, `PageHero` (every inner page's dark hero and single H1), `FaqList`, `NumberedList`, `ArrowRow`, `Figure`, `CtaBand`, and the typographic `Wordmark` used in the header and footer.
- **Header** — `SiteHeader` samples the background beneath it and switches between light and dark text automatically; no per-section tagging is needed (an explicit `data-header-tone="light|dark"` still wins).
- **Homepage signatures** — the hero photo window opens to full-bleed on scroll (`.hero-window`, driven by `--progress`), deck boards clear off the photo via a CSS scroll-driven animation (load-time fallback where unsupported), featured services stack as sticky cards, and `src/components/home/Anatomy.tsx` assembles an exploded isometric deck (footings → posts → beams → joists → decking → rails and stairs) as the visitor scrolls.
- **Motion** — `src/components/motion.tsx` (`MotionController`, mounted once in `__root.tsx`) starts after the page route hydrates (`usePageHydrated`, called from `SiteHeader`) and drives Lenis smooth scrolling (lazy-loaded) plus every scroll and pointer effect through data attributes: `data-reveal`, `data-parallax`, `data-progress`, `data-hscroll` (pinned horizontal gallery), `data-scrub`, `data-count`, `data-velocity` (scroll-reactive marquee), `data-magnetic`, `data-page-progress`, and `data-cursor`. Reveals only hide content when scripting is enabled, and everything respects `prefers-reduced-motion`.

## Quote Form Setup

Enable form detection in the existing Netlify project before deploying. The static skeleton in `public/__forms.html` registers `deck-quote`; `LeadForm` posts URL-encoded submissions to that static path so the SSR handler does not intercept them. Leads appear in Netlify > Forms > deck-quote. A honeypot field provides additional spam protection.

Configure email notifications in Netlify Project configuration > Notifications > Form submission notifications.

Google Ads tracking requires build-time variables:

```bash
VITE_GOOGLE_ADS_ID=AW-18079934013
VITE_GOOGLE_ADS_CONVERSION_LABEL=ywkVCJ3Xo44dEL3Ml61D
```

The global Google tag loads once. A successful form response fires the website quote conversion with value 1 USD and a unique transaction ID. Validation failures and failed requests do not fire a conversion. Optional GA4 `generate_lead` tracking remains separate.

Supabase files are retained as legacy setup references; the website form no longer depends on Supabase.

## Netlify

Netlify settings are defined in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist/client`
