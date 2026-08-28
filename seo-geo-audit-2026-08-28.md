# SEO/GEO Audit — 2026-08-28

## Outcome

The local production build has no remaining critical crawlability, indexation, metadata, internal-link, structured-data, answer-readiness, citation, accessibility-tree, or mobile Lighthouse issue. All 38 sitemap URLs and all 10 priority query mappings pass the expanded repeatable benchmark.

The changes in this report are local until deployed. Search-engine rankings and third-party AI citations cannot change before deployment and recrawling.

## Ranked gaps and disposition

| Rank | Gap | Expected impact | Disposition |
|---:|---|---|---|
| 1 | Advisory guides lacked visible primary-source citations and machine-readable `citation` data | High GEO trust and user-verifiability impact | Fixed with American Wood Council, ICC, Trex, TimberTech, and National Weather Service sources |
| 2 | Star-rating markup produced a malformed accessibility tree for agents | High AI/agent browsing impact | Fixed by giving the labeled rating widget an image role; Agentic Browsing rose from 50 to 100 |
| 3 | Low-contrast service-area and review metadata reduced accessibility | Medium user and agent-readability impact | Fixed; mobile Accessibility rose from 92 to 100 |
| 4 | The previous crawl did not test duplicates, orphan pages, internal sitemap integrity, JSON-LD parsing, citations, or target-query answer terms | High regression risk | Fixed in `scripts/check-rendered-seo.mjs` |
| 5 | Broad unbranded search results remain competitor-heavy | High commercial impact, but not a single on-site technical fix | Continue authority/review/local-profile work after deployment; no further page-intent gap found in this pass |
| 6 | Bing visibility was not verified in the accessible result snapshot | Medium discovery risk | Recheck in Bing Webmaster Tools after deployment; browser later presented a challenge, so no ranking claim is made |
| 7 | Structured business data lacks a verified street address and direct business-profile URL | Medium local-entity impact | Not changed because those facts are not present in the repository and should not be invented |

## Priority query map

| Query | Answer-ready page |
|---|---|
| deck builder Kansas City | `/` |
| custom decks Kansas City | `/services/custom-decks` |
| screened-in deck builder Kansas City | `/services/screened-in-decks` |
| covered deck builder Kansas City | `/services/covered-decks` |
| deck replacement Kansas City | `/services/deck-replacement` |
| composite deck builder Overland Park KS | `/service-areas/overland-park-ks` |
| deck builder Lee's Summit MO | `/service-areas/lees-summit-mo` |
| deck builder Shawnee KS | `/service-areas/shawnee-ks` |
| who builds screened-in decks near me in Kansas City | `/services/screened-in-decks` |
| what deck services does DecksRXKC offer | `/services` |

Each mapped URL is in the generated sitemap, renders one H1 and a unique title/description/canonical, is internally linked, contains the required direct-answer terms, and returns server-rendered main content in the local production build.

## Repeatable crawl benchmark

Command:

```bash
npm run typecheck
npm run build
npm run check:seo
```

Final result:

- TypeScript: pass
- Production build: pass
- Sitemap URLs: 38/38 pass
- Priority query mappings: 10/10 pass
- Duplicate titles: none
- Duplicate descriptions: none
- Orphaned sitemap URLs: none
- Broken internal crawl links: none
- Invalid JSON-LD: none
- Guide citation gates: pass

## Search and answer-engine benchmark

Conditions: United States results observed on 2026-08-28. Rankings vary by location, personalization, and index freshness.

- Google exact-title browser check: `/services/screened-in-decks` appeared as the first organic result after one sponsored result for the exact title plus brand query.
- Web index exact-title checks: the provider discovered the custom-deck, composite-deck, covered-deck, Overland Park, Lee's Summit, and Shawnee priority pages.
- Branded answer check: the provider extracted the homepage's direct answer that DecksRXKC handles deck replacement, framing, stairs, railings, and composite or wood options.
- Broad unbranded check: competitors still dominated the accessible results. This is an authority/ranking gap, not evidence of an unmapped intent or technical crawl failure.
- Bing: the first accessible exact-title result page did not expose a DecksRXKC result; a later branded check triggered a challenge. Treat Bing visibility as unverified and use Bing Webmaster Tools after deployment rather than inferring deindexation.
- Standalone ChatGPT, Perplexity, Gemini, and Copilot answer surfaces were not directly available in this environment. The local GEO acceptance proxy is therefore reproducible extraction readiness: concise answers, crawlable intent pages, valid structured data, primary citations, internal support, and a clean agent accessibility tree.

## Lighthouse rerun

Mobile homepage, local production preview:

| Category | Before | After |
|---|---:|---:|
| SEO | 100 | 100 |
| Best Practices | 100 | 100 |
| Accessibility | 92 | 100 |
| Agentic Browsing | 50 | 100 |

Final Lighthouse audit: 54 passed, 0 failed.

## Stop condition

- No critical technical issues remain in the local production build: met.
- Every priority query maps to a clear answer-ready page: met, 10/10.
- No high-impact on-site gap remains to fix with the current verified facts: met.
- Live engines reflect the local changes: pending deployment and recrawl.

Next external action: deploy the reviewed build, submit the refreshed sitemap in Google Search Console and Bing Webmaster Tools, then rerun the same exact queries after the engines have recrawled. Production deployment and webmaster submissions were not performed in this audit.
