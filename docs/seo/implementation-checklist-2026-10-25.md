# DecksRX KC SEO implementation — October 25, 2026

Scope: October 24 audit and October 25 SE Ranking companion, DecksRX KC only. Resumed the preserved uncommitted work in `/tmp/decksrxkc-seo-current` after fetching remote main and confirming base `d1391f40bab802bbf72bdc96deda6d5a6d04d1b2`. The earlier stale-base checkout was not used. Original project's `codex/privacy-terms` edits and unrelated assets were preserved.

## Implemented

- [x] Homepage title targets “Kansas City Deck Builder,” custom and covered decks, with the DecksRX KC entity name. H1 reads “Kansas City Deck Builder for Your Home.” Existing service copy, screened-in content, stairs links, and conversion paths remain.
- [x] Branded root 404 with navigation, one H1, unique “Page Not Found | DecksRX KC” title and `noindex, follow`. Shared head handling and root not-found rendering cover loader failures and unknown suffixes beneath valid pages; these no longer inherit a valid page's indexable metadata.
- [x] GET/HEAD trailing-slash normalization returns 301 for service, guide, project, service-area and other top-level content pages. Query attribution is preserved. POST methods, `/__forms.html`, and `/thank-you/` retain their existing behavior.
- [x] Descriptive feature-based alt text on homepage service photos and guide hub cards, without assigning unverified project cities or brands. Existing homepage project cards already had alt text on current main. Intentionally decorative backgrounds, hidden hover previews and menu decoration retain empty alt text; the audit's aggregate empty-alt count is not a requirement to describe decoration.
- [x] Added winter-care links to deck repair and stairs pages; added fall-planning links to covered and screened-in services. Current composite service already links to wood-to-composite resurfacing and Trex vs. TimberTech; current custom/covered/repair service pages already carry dedicated intent and contextual links. Preserved strong stairs content rather than creating competing pages.
- [x] Guide and service-area hubs now provide CollectionPage + ItemList JSON-LD with all 11 guide and 17 city destinations and the existing business entity ID.
- [x] Removed filesystem-derived sitemap `lastmod` values. Build/checkout timestamps do not represent editorial changes. All 49 canonical URLs are retained; optional lastmod can return when genuine page-level dates are maintained.
- [x] Added SEO regressions for 11 missing root/nested URLs, 20 GET/HEAD redirects with query preservation, and exact child-page coverage in both hub schemas.

## Verification

- [x] `npm run typecheck`.
- [x] `npm run build` (production Vite client/server and Netlify SSR adapter).
- [x] `npm run check:seo`: 49 sitemap URLs, 10 priority intent mappings, unique titles/descriptions, single H1, correct indexability and canonicals, server-rendered content, valid JSON-LD, guide citations, internal destinations and no orphan sitemap pages; expanded routing/schema assertions pass.
- [x] `node --experimental-strip-types --test tests/*.test.mjs`: all 6 existing attribution tests pass. The local Node 22.17 runtime needs this flag to load the TypeScript source; unflagged Node cannot run these tests.
- [x] `git diff --check`.
- [x] Browser QA at 320, 390, 768 and 1440px on homepage, custom/covered/repair/stairs services, guide hub/article, city hub/page, project, contact and missing routes: no horizontal overflow, broken visible images or page errors. Menu opens and Escape closes it. Contact inputs, required fields, radio groups and `/__forms.html` action inspected; no real lead submitted.
- [x] Visual review of mobile homepage, contact form after scroll-triggered reveals, and branded missing-page layout. Screenshots remain local under `output/playwright/` (excluded from the release staging list). Reviewed React head handling, stable map keys, semantics and existing effect boundaries; no new dependency added.
- [x] Analytics/Ads IDs, event handling, visit attribution, lead submission code, static Netlify form skeleton, thank-you page, and Netlify configuration are untouched by this change. Existing font self-hosting/preloads/`font-display: swap` and responsive WebP/srcset delivery were confirmed in current main.

## Deferred with reasons

- GBP website/category/service settings, review outreach, directories, supplier listings, social profiles and backlinks: external work outside this implementation's authority. No listings, messages, plans, billing or tracking settings changed.
- Address/locality/postal code, founder/full name, founding date, license/insurance, years in business and warranties: require Kyle/client confirmation. Serving Kansas City does not establish a business address. Do not manufacture schema facts or credentials.
- Fence/staining/pergola/porch service pages, additional cities and city-by-service pages: require confirmed services/coverage and enough unique evidence. Customer review mentions do not establish the current service offering.
- Local project URLs/city attribution and expanded project schema: require verified project location, scope, dates and permission. Existing neutral project pages are preserved.
- Performance: existing fonts and responsive images address parts of the older snapshot. No new Lighthouse score or field-CWV improvement is claimed. GA4/Ads interaction delays or Partytown are deferred to a separately measured tracking/performance change; early visit and conversion measurement must remain reliable.
- Reviews, competitor counts, search volumes and rankings remain dated/provider-reported evidence. No ranking improvement is claimed from code QA. Live GBP/GSC/CrUX and full backlink/citation coverage remain unverified.

## Release record

Only explicit source, sitemap, SEO check and audit-document paths are staged. The final exact main SHA, Netlify deployment ID/state and production SEO checks are recorded after publication in `release-verification-2026-10-25.txt` alongside this checklist in both the original project and implementation checkout. That local receipt intentionally follows the commit it verifies.

## October 26 follow-up

Completed an additional supported pass: three curated related-guide links on every article, accurate image width descriptors, and intermediate 800px WebP candidates. Fresh mobile Lighthouse baselines and validation details are in `followup-2026-10-26.txt`; final deployment measurements are in the local `followup-release-verification-2026-10-26.txt`. Business-fact and external-listing deferrals above still apply.
