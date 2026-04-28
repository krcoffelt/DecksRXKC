# DecksRXKC Website

Static Astro website for DecksRXKC, a Kansas City deck builder. Built with Astro, Tailwind CSS, Netlify Forms, local image assets, and static SEO routes.

## Setup

```bash
npm install
npm run dev
```

Local dev server defaults to `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

The production build outputs to `dist/`.

## Netlify Deploy

Netlify settings are defined in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- Forms: Netlify Forms with honeypot spam protection
- Success redirect: `/thank-you/`

Enable Forms in the Netlify project UI after deploying.

## Updating Business Details

Global business details live in `src/data/site.ts`:

- Phone
- Email
- Address
- Site URL
- Service area list

Service page copy is in `src/data/services.ts`. City page copy is in `src/data/areas.ts`.

## Images

Project images are stored in `public/images/`. The current gallery and hero imagery use optimized local JPEG copies of real DecksRXKC project photos.
