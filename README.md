# DecksRXKC Landing Page

Single-page TanStack Start v1 landing page for DecksRXKC, a Kansas City deck contractor. Built with React 19, TypeScript, Tailwind CSS v4, Framer Motion, lucide-react, and local project photography.

## Setup

```bash
npm install
npm run dev
```

Local dev server runs at `http://127.0.0.1:4321/`.

## Build

```bash
npm run build
npm run preview
```

The production build outputs client assets to `dist/client` and the server bundle to `dist/server`.

## Project Structure

- `src/routes/index.tsx` contains the landing page sections: Hero, Services, ProjectShowcase, Testimonials.
- `src/routes/__root.tsx` contains the document shell and SEO meta tags.
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
