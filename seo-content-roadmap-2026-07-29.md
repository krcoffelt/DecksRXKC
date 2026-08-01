# DecksRXKC SEO and Content Roadmap

Prepared July 31, 2026 from the SE Ranking report covering July 23-29, the July 15 baseline, the current repository, and live rendered-HTML checks.

## Executive summary

The site is gaining traction, especially on dedicated service pages:

| Metric | July 15 baseline | July 29 report | Change |
|---|---:|---:|---:|
| Keyword/device entries in the top 100 | 8 | 15 | +7 |
| Entries in the top 30 | 0 | 8 | +8 |
| Entries in the top 10 | 0 | 2 | +2 |
| Average position | 98 | 95 | +3 |
| Reported visibility | 0% | 0% | Rounded/no material visibility yet |

This is meaningful early progress, but it is concentrated in a few service queries. Broad deck-builder terms, screened-in deck terms, and nearly all city terms remain outside the top 100.

The highest-priority technical issue remains unresolved on the live site: the homepage still falls back to client rendering because Supabase is initialized during server rendering. A local fix and automated SEO checker already exist in the worktree but have not been deployed. Until that is deployed, Google receives no server-rendered homepage H1, body content, internal links, reviews, or homepage JSON-LD.

The correct sequence is:

1. Deploy the prepared homepage rendering fix.
2. Protect and deepen pages already ranking in positions 9-34.
3. Add real project evidence and contractor expertise to those pages.
4. Resolve mobile volatility and landing-page ownership before adding new service pages.
5. Strengthen a small number of proven city pages rather than multiplying generic location pages.

## July 29 keyword opportunities

Positions shown are desktop/mobile on July 29. A dash means outside the tracked top 100.

| Query | Desktop | Mobile | Intended page | Priority |
|---|---:|---:|---|---|
| deck stairs replacement kansas city | 9 | 9 | `/services/stairs-and-railings` | Defend top 10; pursue top 5 |
| covered decks kansas city | 23 | 23 | `/services/covered-decks` | Push toward top 10 |
| deck repair kansas city | 29 | 27 | `/services/deck-repair` | Push toward top 20, then top 10 |
| deck replacement kansas city | 34 | 34 | `/services/deck-replacement` | Push into top 20-30 |
| custom decks kansas city | 27 | - | Confirm landing URL before changing page ownership | Stabilize mobile visibility |
| trex decking kansas city | 31 | 33 | `/services/composite-decks` if Trex is genuinely offered | Push into top 20 |
| trex deck builder kansas city | - | 50 | `/services/composite-decks` if accurate | Improve relevance and proof |
| covered deck installation kansas city | 29 | - | `/services/covered-decks` | Stabilize mobile visibility |
| deck stairs contractor kansas city | - | 73 | `/services/stairs-and-railings` | Support on existing page |
| composite deck builder lenexa | 89 | - | `/service-areas/lenexa-ks` plus composite page | First weak city signal |

The report's top-10 count is two because the stair-replacement query ranks ninth on both tracked devices. The top-30 count is eight keyword/device entries, not eight distinct query phrases.

## What the movement means

### 1. Dedicated service URLs are working

The strongest gains align with the stairs, covered-deck, repair, and replacement service pages. These URLs should be improved in place. Do not replace them, change their slugs, or create close synonym pages that split relevance.

### 2. The current service-page template is too generic to compete consistently

Each service page currently relies on a short hero, three benefit bullets, two FAQs, generic related links, and a shared service-area section. That is enough to establish relevance, but it does not demonstrate much first-hand experience or help a homeowner make a detailed decision.

The next content gains should come from original project evidence, process knowledge, comparisons, limitations, and accurate local considerations - not from repeating the target keyword more often.

### 3. Mobile visibility is volatile

`custom decks kansas city` reached position 27 on desktop but left the mobile top 100. `covered deck installation kansas city` reached 29 on desktop but left the mobile top 100 after ranking in the 40s earlier in the week. Before creating new URLs, use SE Ranking and Search Console to confirm which URL ranks for each device and whether Google is switching between the homepage and a service page.

### 4. Local pages have not earned visibility yet

Nearly every tracked city query remains outside the top 100. The exception is a weak desktop appearance at 89 for `composite deck builder lenexa`. The existing city pages share substantial template content and contain little project-specific proof. Publishing more city pages in the same format is unlikely to solve this.

## Priority 0 - Deploy and verify the technical fix

### Work

- Deploy the existing lazy Supabase client initialization in `src/lib/supabase.ts` and `src/components/LeadForm.tsx`.
- Deploy the `npm run check:seo` rendered-HTML validation script.
- Run the checker against production after deployment.
- Inspect `/`, `/services/stairs-and-railings`, `/services/covered-decks`, `/services/deck-repair`, `/services/deck-replacement`, and `/services/composite-decks` in Search Console.
- Request recrawling of the homepage and priority service pages after the deployment is live.

### Acceptance criteria

- All sitemap URLs return 200 with complete server-rendered main content.
- The homepage response contains one H1, visible service copy, crawlable links, reviews, contact content, and JSON-LD.
- No response contains a server-rendering fallback error.
- Google-selected canonicals match the declared URLs.
- The quote form still submits successfully in production.

## Priority 1 - Content sprint for current winners

### A. Deck stairs and railings

Current opportunity: position 9 on both devices.

Keep `/services/stairs-and-railings`, but align the page more directly with the query that is winning.

Recommended title/H1 direction, if stair replacement is a core service:

- Title: `Deck Stair Replacement & Railings Kansas City | DecksRXKC`
- H1: `Deck Stair Replacement and Railings in Kansas City`

Add these content modules:

- signs deck stairs may need repair or replacement
- stair rebuild versus limited repair
- stringers, treads, landings, handrails, guardrails, and connections
- how yard grade, door location, traffic flow, and patio access affect design
- railing options that DecksRXKC actually installs
- inspection and quote process
- one real before-and-after stair project with city, challenge, scope, materials, and outcome
- three to five specific customer questions based on actual sales conversations

Internal links:

- link to deck repair and deck replacement where the frame condition affects the recommendation
- link to one or more city/project pages with completed stair work
- link from the homepage, repair page, replacement page, and relevant city pages using descriptive anchors

### B. Covered decks

Current opportunity: position 23 for `covered decks`; position 29 desktop for `covered deck installation`, with mobile volatility.

Keep both query variants on `/services/covered-decks`.

Add these content modules:

- whether an existing deck can support a roof or needs framing work
- roof connection and integration with the house
- drainage, gutters, finished ceilings, lighting, fans, screening, and shade
- freestanding versus attached cover considerations, if both are offered
- material and finish choices
- installation sequence and homeowner preparation
- major cost and schedule drivers without inventing fixed prices
- one real covered-deck project with original photos and location context
- links to screened-in decks, replacement, and the relevant project/city pages

Do not create separate pages for `covered deck installation`, `deck roof builder`, and `roof over deck`. Cover those natural variants comprehensively on this page.

### C. Deck repair

Current opportunity: positions 27-29.

Add these content modules:

- repair-versus-replacement decision table
- common issues involving boards, railings, stairs, posts, framing, fasteners, and water exposure
- what can be assessed visually and what requires an on-site structural review
- when a focused repair is practical and when DecksRXKC will recommend replacement
- repair scope and quote process
- two small real repair examples with photos and outcomes
- links to stairs, railings, and full replacement

The page should be frank about limitations. Trustworthy boundaries are more useful than claiming every deck can be repaired.

### D. Deck replacement

Current opportunity: position 34 on both devices.

Add these content modules:

- replacement versus resurfacing versus repair
- what happens during removal and framing evaluation
- when existing footings or framing might be reusable, subject to inspection
- opportunities to improve footprint, stairs, railing, material, shade, and yard access
- composite versus wood replacement considerations
- project timeline and disruption factors
- one full rebuild case study with before-and-after photos
- direct links to repair, composite decks, stairs, and covered decks

### E. Composite and Trex-related searches

Current opportunity: `trex decking kansas city` at 31/33, plus `trex deck builder kansas city` at 50 mobile.

Before editing, confirm whether DecksRXKC installs Trex, TimberTech, both, or other brands. Do not claim dealer, installer, certification, warranty, or product relationships that are not accurate.

If Trex is genuinely offered, expand `/services/composite-decks` with:

- brands and product lines actually installed
- composite versus wood maintenance and appearance tradeoffs
- heat, sun, moisture, staining, scratching, and freeze-thaw considerations based on field experience
- board, fascia, fastening, picture-frame, stair, and railing choices
- warranty responsibility explained accurately
- one real composite project with product name, color, location, and original photos

### F. Custom decks and broad deck-builder intent

Current opportunity: position 27 desktop for `custom decks kansas city`, but outside the mobile top 100. Broad deck builder/contractor/company queries remain outside the top 100.

Do not immediately create a new page until the ranking URL is confirmed.

- If the homepage ranks for `custom decks kansas city`, deploy the SSR fix, deepen the homepage's custom-build section, and monitor for two to four weeks.
- If an unrelated service page ranks, create a substantial `/services/custom-decks` page and make the homepage target the broader `deck builder Kansas City` cluster.
- If Google alternates between pages, clarify headings, internal links, and page roles before adding content.

A custom-decks page should cover design goals, site assessment, framing, materials, stairs, railings, code/permit process, build sequence, and real project examples. It should not be a duplicate of the homepage.

## Priority 2 - Build project evidence

The next major content asset should be a project library, not a high-volume generic blog.

Create three to six initial case studies. Each should include:

- descriptive project title and clean URL
- city and general project location without exposing customer privacy
- homeowner goal or problem
- existing conditions
- scope of work
- material brand/product/color when accurate
- design constraints and decisions
- before, progress, and finished photos where available
- outcome and relevant customer quote with permission
- links to the matching service and service-area pages

Best initial case-study themes based on current rankings:

1. deck stair replacement or stair rebuild
2. covered deck installation
3. repair-versus-replacement project
4. full deck replacement
5. composite deck using a confirmed product brand

The homepage project gallery should link to these pages instead of showing only non-clickable summaries.

## Priority 3 - Improve local pages selectively

Choose three to five priority cities using revenue potential, completed projects, and service demand. Include Lenexa because the report shows the first city-specific ranking signal, then choose the remaining cities from actual business data rather than search volume alone.

For each priority city page:

- add at least one real nearby project
- use unique project photography and captions
- explain genuine local lot, grade, housing, weather, access, or permitting considerations
- feature the services most commonly requested there
- add a city-relevant testimonial when available
- link to the matching service and project pages
- keep business name, phone, URL, hours, and service-area information consistent

Do not create a service-by-city matrix such as separate pages for every combination of covered decks, composite decks, repairs, and every suburb. Build fewer pages with stronger evidence.

## Priority 4 - Add trust and decision content

### Core trust pages

- About page with owner/team names, experience, process, and original photos
- Contact page with phone, hours, service area, quote form, and Google Business Profile link
- accurate insurance, license, warranty, financing, manufacturer, and certification information where applicable
- consistent structured-data entity using one stable business `@id`

### High-value homeowner guides

Publish these only after the priority service pages and initial projects are improved:

- `Should I Repair or Replace My Deck?`
- `What Affects the Cost of a Covered Deck in Kansas City?`
- `Composite vs. Wood Decking for Kansas City Weather`
- `Signs Your Deck Stairs Need to Be Rebuilt`
- a permit/process guide covering only jurisdictions that can be accurately maintained

Every guide should be reviewed by the owner or lead builder, include first-hand observations, use original project photos where possible, and link to a relevant service page. Avoid publishing filler articles on a fixed weekly schedule.

## Internal-linking plan

- Homepage: contextual links to stairs, covered decks, repair, replacement, composite decks, and custom decks if created.
- Service pages: links to related services plus two or three relevant projects and priority cities.
- Project pages: links to one primary service, one city page, and genuinely related projects.
- City pages: links to real projects completed nearby and the two or three most relevant services.
- Guides: links to the primary service page and supporting project examples.

Use concise descriptive anchors. Avoid repeating one exact-match anchor everywhere.

## Google Business Profile and authority work

Local-pack rankings require more than website copy. Confirm and maintain:

- verified profile status
- accurate real-world business name
- most specific accurate primary category and relevant secondary categories
- phone, website, hours, service areas, services, description, and quote link
- regular uploads of genuine project photos and short videos
- ongoing honest review requests without incentives or review gating
- useful owner responses to reviews
- consistent major citations and trade profiles
- earned links from suppliers, manufacturers, associations, community partners, and relevant local publications

Avoid bulk directory packages and paid-link schemes.

## 30/60/90-day execution plan

### Days 1-7

- deploy and verify the homepage SSR fix
- submit sitemap and request recrawling in Search Console
- confirm ranking URLs for custom decks, covered installation, stairs, repair, replacement, and Trex terms
- gather business facts and project assets
- improve the stairs page first

### Days 8-30

- improve covered decks, repair, replacement, and composite pages
- publish the first two project case studies
- add contextual internal links
- optimize the Google Business Profile and begin a consistent photo/review routine

### Days 31-60

- publish two to four additional case studies
- improve the first three priority city pages
- decide whether a dedicated custom-decks page is needed based on landing-page data
- create About and Contact pages if business details are available

### Days 61-90

- publish one or two high-value homeowner guides
- improve the remaining selected city pages
- compare top-ranking competitors for the queries that have stalled
- consolidate or rewrite pages that receive no impressions despite being indexed

## Measurement and targets

Use 28-day comparisons in Search Console; do not make content decisions from one-day rank changes.

Track:

- indexed priority URLs
- non-brand impressions and clicks by query and page
- average position and CTR by device
- count of keyword/device entries in the top 100, top 30, and top 10
- quote submissions and click-to-call conversions by landing page
- Google Business Profile searches, calls, website clicks, and reviews
- referring domains and earned local links

Directional 90-day targets, not guarantees:

- keep stair replacement in the top 10 and work toward the top 5
- move covered decks and deck repair toward the top 10-20
- move deck replacement and relevant composite terms into the top 20-30
- establish stable mobile visibility for custom decks and covered installation
- earn initial top-100 visibility for broad deck-builder terms and selected priority cities
- increase top-100 keyword/device entries beyond 15 and top-10 entries beyond 2

## Inputs needed before content production

1. Google Search Console query/page export and URL Inspection results.
2. SE Ranking landing URLs for each ranking keyword and device.
3. Google Business Profile public URL and performance export.
4. Confirmation of materials and brands installed, especially Trex and TimberTech.
5. Three to six projects with city, scope, materials, timing, photos, challenges, and outcome.
6. Owner/team background, years of experience, insurance/license details, warranties, financing, and service boundaries.
7. Priority cities based on actual lead quality and revenue.
8. Three to five local competitors that frequently win the desired projects.

## Content quality gate

Do not publish a page unless it:

- answers a real homeowner decision or question
- contains accurate first-hand detail or project evidence
- has a distinct role in the keyword-to-page map
- avoids duplicating another service or city page
- has been reviewed for factual accuracy by DecksRXKC
- includes useful internal links and a clear next step
- is included in the sitemap and passes the rendered-SEO check
