# DecksRXKC SEO Improvement Plan

Prepared July 16, 2026 from:

- SE Ranking project report for July 9-15, 2026
- Current DecksRXKC source code and sitemap
- Live response checks of the homepage, service pages, service-area pages, robots.txt, and sitemap.xml

## Executive diagnosis

The report is an early rank-tracking baseline, not a complete SEO audit. It shows four unique queries ranking in Google's top 100 on both desktop and mobile, for eight keyword/device entries total. No tracked query is in the top 30, reported search visibility is 0%, and the average tracked position is 98.

The most important technical finding is outside the PDF: the live homepage returns HTTP 200 and correct metadata, but its server rendering currently fails because the Supabase client is created during server module initialization under Node 20. The response falls back to client rendering and does not contain the homepage's visible content, H1, internal links, reviews, or JSON-LD in the initial body. Dedicated service and service-area pages sampled during this review do render complete HTML.

This makes the work order:

1. Restore full server-rendered homepage HTML.
2. Improve the pages for queries already ranking between positions 39 and 86.
3. Build authority with original project proof, stronger local business information, reviews, and relevant local links.
4. Expand service and location coverage only where DecksRXKC has genuine services, projects, and useful local information.

## Report baseline

July 15 positions from the report:

| Query | Desktop | Mobile | Recommended page | Immediate action |
|---|---:|---:|---|---|
| covered decks kansas city | 42 | 39 | `/services/covered-decks` | Highest-priority content improvement |
| covered deck installation kansas city | 46 | 49 | `/services/covered-decks` | Support on the same page; do not create a synonym page |
| deck repair kansas city | 51 | 50 | `/services/deck-repair` | Add repair-specific depth and proof |
| deck stairs replacement kansas city | 71 | 86 | `/services/stairs-and-railings` | Align title/H1 and add replacement-specific content |

All other tracked phrases were outside the top 100 on July 15, including the broad deck builder/contractor terms, composite and screened-in terms, and the tracked city queries.

The seven-day changes at these positions are noisy. Use them as a baseline, not evidence that a one-position daily move was caused by a site change.

## What is already in good shape

- Dedicated, indexable service and service-area URLs exist.
- The sampled non-homepage routes return 200 with server-rendered body copy.
- Titles, descriptions, canonicals, robots directives, Open Graph tags, and crawlable links are present.
- The robots file allows crawling and points to the sitemap.
- The sitemap contains the current service and service-area routes.
- Service pages contain Service and Breadcrumb structured data.
- Homepage, service, and location templates use one clear H1 and descriptive image alt text.
- Service pages and city pages link to each other through normal anchor elements.

## Prioritized roadmap

### P0 - Crawlability and measurement, days 1-3

#### 1. Fix homepage server rendering

Cause observed live: `src/lib/supabase.ts` creates a configured Supabase client at module load. On Netlify's Node 20 server runtime, Supabase Realtime tries to initialize WebSocket support and throws before the homepage body can render.

Recommended implementation:

- Stop creating the browser Supabase client during server module import.
- Prefer a server-side form action/API endpoint for quote submission, or lazily import/create the client only inside the browser submit path.
- Keep the lead form functional without making the whole homepage depend on browser-only code.

Acceptance criteria:

- A raw request to `/` contains the H1, service copy, internal links, reviews, contact content, and homepage JSON-LD.
- The HTML no longer contains `Switched to client rendering because the server rendering errored`.
- The form still submits successfully.
- The homepage and every sitemap URL return 200 and a self-referencing canonical.

#### 2. Add an automated rendered-SEO check

Create a small build/deployment check that requests each sitemap URL and fails if a priority page has any of the following:

- non-200 status
- missing or duplicate title, description, canonical, or H1
- canonical that does not match the intended URL
- empty server-rendered main content
- server-rendering error template
- missing internal links from the homepage to priority service pages

#### 3. Establish first-party measurement

- Verify the canonical domain property in Google Search Console.
- Submit `/sitemap.xml` and inspect the homepage plus the three ranking service pages.
- Record Page Indexing status, last crawl, rendered screenshot, canonical selection, crawl errors, query/page impressions, and Core Web Vitals.
- Track quote submissions, click-to-call actions, and form errors in analytics.
- Annotate the deployment date of each SEO change.

### P1 - Improve the pages with current ranking traction, week 1-2

#### 1. Covered decks page

Keep both covered-deck query variants mapped to `/services/covered-decks`. Expand the page with first-hand, decision-useful information such as:

- when a roof can be added to an existing deck versus when framing must be rebuilt
- roof connection, drainage, gutters, lighting, fans, ceilings, screening, and weather considerations
- Kansas City permit/inspection considerations, verified against the jurisdictions actually served
- material and design options
- cost and timeline drivers without inventing fixed prices
- at least one real covered-deck project with city, scope, materials, photos, challenge, and result
- a relevant customer review and links to covered-deck project examples

Goal: move the two existing position 39-49 queries into the top 30 before creating additional covered-deck URLs.

#### 2. Deck repair page

Expand `/services/deck-repair` around the decisions a homeowner is actually making:

- repair versus replacement criteria
- boards, railings, stairs, posts, framing, ledger, and water-damage symptoms
- what DecksRXKC will and will not repair
- inspection and quoting process
- real repair examples with original photos and city context
- safety caveat that structural concerns require an on-site assessment

Do not merge this page with `/services/deck-replacement`; make the choice between the two explicit and cross-link them.

#### 3. Stairs and railings page

If stair replacement is a core offered service, align the page more directly with the query:

- consider the title/H1 wording `Deck Stair Replacement & Railings in Kansas City`
- add stair rebuild and replacement sections, not only general stair-layout copy
- cover railing materials, grade and access considerations, typical failure signs, and the assessment process
- show one or more stair/railing projects with before-and-after evidence

#### 4. Broad custom-deck intent

The broad deck builder, construction, installation, and custom-deck queries are outside the top 100. Keep the homepage focused on `deck builder Kansas City`, and add `/services/custom-decks` only if it can be a substantial, original service page. Target `custom decks`, `deck construction`, and `deck installation` there so the homepage and service page have distinct roles.

Avoid a separate page for every close synonym. One strong page should cover builder, contractor, company, construction, and installation language naturally.

#### 5. Strengthen internal linking

- Link to the covered, repair, stairs, composite, screened-in, replacement, and custom-deck pages from relevant homepage copy, not only cards or the footer.
- Add contextual service links inside city copy and contextual city/project links inside service copy.
- Use descriptive anchors such as `covered deck installation in Kansas City`, while keeping wording natural and varied.
- Add visible breadcrumbs to service and service-area templates.

### P2 - Original project proof and local-page quality, weeks 2-5

#### 1. Create project case studies

The strongest content opportunity is a crawlable project library, not generic blog volume. Publish three to six initial case studies using existing and new job photos. Each should include:

- city and project type
- homeowner problem or goal
- existing conditions
- chosen materials and design decisions
- scope of work
- constraints or challenges
- outcome
- original images with useful captions
- related service and service-area links
- a relevant customer quote when permission exists

These pages create evidence for service expertise, support image search, and give city pages genuinely local material.

#### 2. Improve priority service-area pages before expanding

First choose roughly five areas based on actual revenue potential and completed work. The report tracks Overland Park, Olathe, Leawood, Lenexa, Shawnee, Prairie Village, Lee's Summit, Blue Springs, Liberty, Parkville, Raymore, Belton, and Johnson County terms, but the site should not create all possible service-by-city combinations.

For each selected city page, add:

- one or more real projects in or near that city
- unique photos and captions
- local lot, housing, terrain, weather, or permitting considerations that DecksRXKC genuinely encounters
- the services most often requested there
- a city-relevant testimonial where available
- links to the matching project and service pages
- consistent business contact information

Consolidate or leave lower-priority pages alone until there is enough unique material. Do not mass-produce near-duplicate city/service pages.

#### 3. Add trust and entity pages

- Create an About page with the owner/team, experience, service philosophy, and original team/worksite photos.
- Create a dedicated Contact page with the phone, hours, service area, quote form, and Business Profile link.
- Publish accurate license, insurance, warranty, financing, manufacturer, and certification details only when confirmed.
- Connect one consistent business entity across structured data with a stable `@id`, phone, URL, logo, service area, and verified profile/social links.

Do not mark each service-area page as a separate physical business location. Represent DecksRXKC once and describe the cities it serves.

### P3 - Google Business Profile and local authority, ongoing

Google says local results are primarily influenced by relevance, distance, and prominence. Website work improves relevance and organic authority, but local-pack visibility also depends heavily on the verified Business Profile and business prominence.

- Confirm the profile is verified and linked to the canonical homepage.
- Confirm the real-world business name is used without keyword stuffing.
- Review the primary and secondary categories; use the most specific accurate primary category.
- Complete phone, hours, service areas, services, business description, and appointment/quote link.
- Upload fresh project photos and short videos regularly, using only real work.
- Ask every satisfied customer for an honest review without incentives or review gating.
- Reply to reviews with useful, natural service/project context.
- Audit major local and trade citations for consistent name, phone, URL, and service-area details.
- Pursue earned local links from suppliers, manufacturers, trade associations, community sponsorships, project partners, and relevant local publications. Avoid bulk directory and paid-link packages.

### P4 - Performance and image search, after measurement

- Use Search Console Core Web Vitals and PageSpeed field data to decide what needs work.
- Convert large hero/project images to responsive modern formats and serve correctly sized variants where the data shows an LCP or transfer-size problem.
- Add width/height and preserve lazy loading below the fold; keep the true LCP image eager and prioritized.
- Extend the generated sitemap with important project images if project pages are added.
- Keep sitemap `lastmod` values tied to meaningful page changes rather than a permanently hard-coded date.

## Recommended keyword-to-page map

| Intent cluster | Primary page |
|---|---|
| deck builder / deck contractor / deck company Kansas City | `/` |
| custom decks / deck construction / deck installation Kansas City | `/services/custom-decks` if built substantively |
| covered decks / covered deck builder / covered deck installation / roof over deck | `/services/covered-decks` |
| deck repair Kansas City | `/services/deck-repair` |
| deck replacement Kansas City | `/services/deck-replacement` |
| deck stair replacement / railing installation | `/services/stairs-and-railings` |
| composite / low-maintenance / Trex / TimberTech | `/services/composite-decks`, with brand terms only if actually offered |
| screened-in deck / screened porch | `/services/screened-in-decks` |
| deck builder in a specific served city | the matching high-quality `/service-areas/{city-state}` page |
| real project plus city/service evidence | `/projects/{descriptive-project-slug}` |

Do not target pergolas, patios, porches, PVC, cedar, pressure-treated decking, or particular manufacturers merely because the report tracks them. Confirm DecksRXKC offers and wants those jobs first.

## Measurement cadence and decision rules

### Weekly

- SE Ranking positions by desktop and mobile
- server-rendered SEO check on all sitemap URLs
- form submissions and click-to-call actions
- new reviews and Business Profile activity

### Every 28 days

- Search Console clicks, impressions, CTR, and average position by query and page
- indexed versus submitted URLs
- non-brand impressions for each priority service page
- mobile Core Web Vitals
- Business Profile searches, views, website clicks, calls, and messages when available

### Expected evaluation windows

- Days 1-14: confirm crawlability, successful indexing, and recrawl of changed pages.
- Weeks 4-6: look for impression growth, more distinct ranking queries, and movement into the top 30.
- Weeks 8-12: assess whether the covered-deck terms are moving from positions 39-49 toward the top 20-30 and whether repair/stairs pages are gaining impressions and rank.

These are decision windows, not ranking guarantees. If technically sound, indexed, substantially improved pages show no impression or position growth after 8-12 weeks, compare the top local competitors page by page for project proof, content usefulness, Business Profile strength, reviews, and relevant backlinks before publishing more pages.

## Access and business information needed

The plan can begin with the current code access. The following would materially improve prioritization and validation:

1. Google Search Console read-only access, or exports of Performance, Page Indexing, Sitemaps, Core Web Vitals, Links, Manual Actions, and URL Inspection results.
2. Google Business Profile manager access, or a profile-performance export plus the public profile URL.
3. GA4, Netlify Analytics, or another analytics export with quote submissions and click-to-call events.
4. SE Ranking project access or an export that includes search volume, landing URL, keyword tags, and competitor data.
5. A business fact sheet: priority cities, service radius, real address versus service-area status, hours, owner/team details, years in business, licenses/insurance, warranties, financing, brands/materials offered, and services that should or should not be promoted.
6. Three to six recent projects with city, scope, materials, approximate timing, photos, and permission to publish.
7. Three to five real local competitors that regularly win the jobs DecksRXKC wants.

## Source guidance

- Google Search developer guidance: https://developers.google.com/search/docs/fundamentals/get-started-developers
- Google people-first content guidance: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google local ranking guidance: https://support.google.com/business/answer/7091
