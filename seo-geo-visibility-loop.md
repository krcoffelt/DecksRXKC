# SEO/GEO Visibility Loop

## Benchmark State

- Date of benchmark: 2026-06-22
- Site URL: https://decksrxkc.com
- Locale/location: Kansas City metro, Kansas and Missouri
- Search engines checked: Web search provider queries for branded/local terms; live deployed URL checks with curl
- AI answer engines checked: Not directly accessible from this environment; benchmark methodology created from repo and rendered HTML inspection
- SEO type: Local SEO for a Kansas City deck contractor
- Target audience: Kansas City metro homeowners planning deck, screened-in deck, covered deck, stair, railing, repair, or replacement projects
- Target services/topics: custom decks, screened-in decks, covered decks, deck replacement, composite decks, wood decks, stairs, railings, outdoor living spaces
- Priority pages: `/`, `/service-areas`, `/service-areas/overland-park-ks`, `/service-areas/kansas-city-mo`, `/service-areas/lees-summit-mo`, plus the remaining service-area city pages in `public/sitemap.xml`
- Main competitors: Not supplied

## Repo Inspection

- Framework/CMS/static setup: TanStack Start with React 19, Vite 8, Tailwind CSS 4, Netlify deployment
- Routing structure: file routes in `src/routes`; homepage at `/`, service-area index at `/service-areas`, dynamic city pages at `/service-areas/$slug`
- Page templates: `src/routes/index.tsx`, `src/routes/service-areas.index.tsx`, `src/routes/service-areas.$slug.tsx`
- Metadata handling: TanStack Router `head()` in `__root.tsx`, service-area index, and dynamic service-area pages
- Sitemap/robots setup: static `public/robots.txt` and `public/sitemap.xml`; live sitemap matches repo
- Structured data: dynamic service-area pages have `LocalBusiness` JSON-LD; homepage lacked structured data before iteration 1
- Internal linking: homepage links to featured service areas and full service-area index; service-area pages link back to service areas, services, work, contact, and quote CTAs
- Content structure: strong local service copy, location pages, testimonials/reviews, service descriptions, image alt text; homepage had no `h1` issue visible in source
- Existing SEO utilities: none beyond route-level `head()` definitions and static sitemap/robots
- Build/lint/test commands: `npm run build`; no lint, typecheck, or test script defined
- Docs/conventions: README documents setup, build, route structure, Supabase form, and Netlify publish directory

## Target Queries

| Query/question | Search intent | Best matching page |
|---|---|---|
| deck builder Kansas City | Local service | `/` |
| custom decks Kansas City | Local service | `/` |
| screened-in deck builder Kansas City | Local service | `/#screened-in-decks` |
| covered deck builder Kansas City | Local service | `/#covered-decks` |
| deck replacement Kansas City | Local service | `/` |
| composite deck builder Overland Park KS | Local service by city | `/service-areas/overland-park-ks` |
| deck builder Lee's Summit MO | Local service by city | `/service-areas/lees-summit-mo` |
| deck builder Shawnee KS | Local service by city | `/service-areas/shawnee-ks` |
| who builds screened-in decks near me in Kansas City | AI/local answer | `/` |
| what deck services does DecksRXKC offer | Branded answer | `/` |

## Baseline Benchmark

| Query/question | Search intent | Best matching page | Indexable? | Answer-ready? | Title quality | Meta description quality | H1 quality | Internal link support | Structured data present? | Source/citation strength | Traditional search visibility notes | AI answer engine visibility notes | Priority score | Recommended fix |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---:|---|
| deck builder Kansas City | Local service | `/` | Yes, live 200 | Medium | Good | Good | Good | Medium | No before iteration 1 | Medium: reviews shown, no schema | Search provider returned no reliable ranking data | Needs entity/schema and concise service facts | 95 | Add homepage canonical, social metadata, and local business JSON-LD |
| custom decks Kansas City | Local service | `/` | Yes | Medium | Good | Good | Good | Medium | No before iteration 1 | Medium | Repo content supports intent | Needs machine-readable business/service context | 90 | Add homepage structured data |
| screened-in deck builder Kansas City | Local service | `/#screened-in-decks` | Yes | Medium | Medium | Good | Good | Medium | No before iteration 1 | Medium | Section exists but no dedicated indexable service URL | Could answer, but service answer is embedded in a broad homepage | 84 | Consider dedicated screened-in deck page in a later iteration |
| covered deck builder Kansas City | Local service | `/#covered-decks` | Yes | Medium | Medium | Good | Good | Medium | No before iteration 1 | Medium | Section exists but no dedicated indexable service URL | Could answer, but service answer is embedded in a broad homepage | 82 | Consider dedicated covered deck page in a later iteration |
| deck replacement Kansas City | Local service | `/` | Yes | Medium | Medium | Good | Good | Medium | No before iteration 1 | Medium | Mentioned in content and form options | Needs stronger direct answer block | 76 | Add homepage FAQ/answer block later |
| composite deck builder Overland Park KS | Local service by city | `/service-areas/overland-park-ks` | Yes, live 200 | Good | Good | Good | Good | Good | Yes | Medium | Live page has canonical and JSON-LD | City page is clear and machine-readable | 70 | Improve city page answer blocks later |
| deck builder Lee's Summit MO | Local service by city | `/service-areas/lees-summit-mo` | Yes via sitemap | Good | Good | Good | Good | Good | Yes | Medium | URL present in sitemap | City page likely answer-ready by template | 66 | Spot-check rendered page later |
| deck builder Shawnee KS | Local service by city | `/service-areas/shawnee-ks` | Yes via sitemap | Good | Good | Good | Good | Good | Yes | Medium | URL present in sitemap | City page likely answer-ready by template | 64 | Spot-check rendered page later |
| who builds screened-in decks near me in Kansas City | AI/local answer | `/` | Yes | Medium | Medium | Good | Good | Medium | No before iteration 1 | Medium | Live search not conclusive | Needs direct short answer and entity context | 88 | Add homepage structured data first, answer block later |
| what deck services does DecksRXKC offer | Branded answer | `/` | Yes | Good | Good | Good | Good | Medium | No before iteration 1 | Medium | Branded query had no reliable visible results from provider | Services are clear to users, less explicit to machines | 86 | Add homepage service catalog JSON-LD |

## Technical SEO Audit

| Issue | Impact | Confidence | Effort | Risk | Notes |
|---|---|---|---|---|---|
| Homepage lacks canonical link and structured data | High | High | Small | Low | Live homepage HTML showed title and description only; no canonical or JSON-LD detected |
| Homepage lacks OG image/Twitter preview metadata | Medium | High | Small | Low | Root had OG title/description/type, but no share image or Twitter metadata |
| No dedicated indexable service pages for screened-in decks, covered decks, composite decks, or deck replacement | High | Medium | Large | Medium | Current service sections are homepage anchors, not crawlable service URLs |
| Static sitemap must be manually updated when service areas change | Medium | High | Medium | Low | Routes and sitemap are separate sources of truth |
| No lint/typecheck/test scripts | Medium | High | Medium | Low | Build is the only validation command available |
| Service-area index has no structured data | Medium | Medium | Small | Low | City detail pages have schema; index could use ItemList/Breadcrumb later |
| Local NAP is incomplete in structured data | Medium | Medium | Small | Low | Phone exists; no physical address found in repo, so do not invent it |

## GEO / Answer-Engine Audit

- Homepage directly explains services and service area, but could use a concise early answer block for "Who builds decks in Kansas City?"
- Homepage trust signals are visible through Google reviews, rating display, local photos, and contact phone.
- Service-area pages are answer-ready for city-specific "deck builder in [city]" queries and include LocalBusiness JSON-LD.
- Source/citation strength is moderate because review snippets are present, but no external review profile URL, license/credential details, address, or richer citation fields were found in repo.
- For AI answer engines, the biggest first-pass gap was homepage entity/service schema, because the broadest page had no machine-readable business context.

## Current Iteration

- Iteration: 1 of 3
- Selected issue: Homepage lacks canonical link, rich social metadata, and local business/service structured data.
- Why selected: `/` is the highest-priority page for broad Kansas City deck queries, live HTML was indexable but missing machine-readable entity context, and the fix is small, low-risk, and easy to validate.
- Files changed: `src/routes/index.tsx`, `seo-geo-visibility-loop.md`

## Fixes Made

- Added homepage-specific `head()` metadata in `src/routes/index.tsx`:
  - canonical URL
  - title and description
  - Open Graph URL/image
  - Twitter summary card metadata
- Added homepage JSON-LD for `HomeAndConstructionBusiness` with:
  - business name, URL, image, phone, description
  - Kansas City metro and city-level service areas from `serviceAreas`
  - service catalog for custom decks, screened-in decks, and covered decks

## Validation Commands

- Passed: `npm run build`
- Passed: local preview homepage rendered HTML inspection confirmed:
  - `<link rel="canonical" href="https://decksrxkc.com">`
  - `og:image`
  - `twitter:card`
  - `application/ld+json`
- Passed: local preview spot-check for `/service-areas/overland-park-ks` confirmed the city page still renders its own canonical and `application/ld+json`

## Remaining Issues

- Dedicated crawlable service pages for screened-in decks, covered decks, composite decks, and deck replacement would better match non-city service queries.
- Add answer blocks/FAQ-style sections for high-intent questions once business-approved wording is available.
- Consider generating `public/sitemap.xml` from `serviceAreas` to prevent drift.
- Add a lint or typecheck script for a stronger validation harness.
- Add richer NAP/schema fields only when business address/profile details are confirmed.

## Stop Condition Status

- No critical crawlability/indexation issues remain: likely yes for existing routes; live homepage and sampled service-area page returned 200
- Every priority query maps to a clear answer-ready page: partial; broad and city queries map, service-specific queries rely on homepage anchors
- Priority pages have unique, intent-matched titles and descriptions: mostly yes; homepage improved and validated in iteration 1
- Internal links support priority pages: partial; city pages are supported, service-specific pages do not exist
- Structured data is present where appropriate: improved; homepage and dynamic service-area pages now render JSON-LD, service-area index can improve later
- No high-impact content gap remains: no; dedicated service pages remain the major content gap

## Iteration 1 Result

- Status: Resolved selected issue
- Validation result: Passed
- Benchmark change: Homepage priority score risk lowered because canonical and structured business/service context now render in SSR HTML.
- Recommended next iteration: Create one dedicated crawlable service page for the highest-priority non-city service query, likely screened-in deck builder Kansas City, or add a concise homepage answer block if a new route is too large for the next pass.
