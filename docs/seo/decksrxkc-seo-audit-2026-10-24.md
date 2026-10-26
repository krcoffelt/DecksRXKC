# SEO Audit: decksrxkc.com (DecksRXKC)
**Prepared for:** Hometown Marketing Agency (Kyle Coffelt) · **Audit date:** Sat Oct 24, 2026 (CDT) · **Pages crawled:** 49 (every URL in the sitemap; the crawl found no other internal URLs)

---

## Conclusion
The website itself is in very good shape. It's fast enough, every page can be indexed, it has unique titles and meta descriptions throughout, and it's well structured, with 7 service pages, 17 city pages, 11 guides and 5 project case studies. **The site is not what's holding DecksRXKC back. Its off-site presence is.** I found very few reviews compared with competitors, no directory or citation listings, almost no backlinks, and a brand name that gets confused with an unrelated company called "Decks RX" in Gig Harbor, WA. The next 90 days should go mostly to Google Business Profile, reviews, citations and links, plus a few content additions (services the customers already mention, real local project pages, and city + service pages).

## Scorecard (1–10)
| Area | Score | Why (one line) |
|---|---|---|
| Technical | **8** | Clean indexability, sitemap, canonicals, HTTPS + HSTS and schema. The only real weakness is mobile lab speed: Lighthouse Performance scored 67–83 and LCP was 3.9–6.1 s. |
| On-page | **8** | All 49 pages have unique titles, metas and H1s, with exactly one H1 each and strong CTAs. Gaps: the homepage title doesn't target "deck builder", and 62 of 203 images have empty alt text. |
| Content | **7** | Broad coverage and long guides. However, projects aren't tied to cities, services customers mention (fences, staining) have no pages, trust content (license/insurance/years/owner) is thin, and there are no city + service pages. |
| Local | **4** | A GBP exists and the site says 5.0★ from 18 reviews. Competitors have 57–233 reviews, I found no Yelp/BBB/Angi/Houzz/Facebook citations, there's no public address, and the name collides with "Decks RX" (WA). |
| Authority | **2** | The only external references I found were the agency's own portfolio page, a lead-gen "report" site and a DNS lookup site. No local, press, supplier or association links were visible. |

---

## Business confirmation (as shown on the site)
- **Name:** shown in several forms. Schema `name` is **"DecksRX KC"**, `alternateName` is "DecksRXKC", page titles use "DecksRXKC", and the header/logo text reads "Decks RX KC". The Google Maps place name in the Maps HTML is "DecksRX KC" (place_id `ChIJkzUai5uhMyYRAdvQsND0a9s`).
- **Phone:** **(913) 205-6531** (tel:+19132056531), the same on every page and in schema.
- **Address:** **None published.** It's run as a service-area business ("DecksRXKC is a service-area deck builder serving homeowners throughout the Kansas City metropolitan area", /contact). Schema has no `address`. No email is published.
- **Hours:** Mon–Sat, 8 AM–5 PM (site and schema).
- **Services (7 pages):** Custom Decks, Screened-In Decks, Covered Decks, Composite (Trex & TimberTech) Decks, Deck Replacement, Deck Repair, Stairs & Railings.
- **Service area (17 city pages):** Kansas City KS, Overland Park, Leawood, Lenexa, Olathe, Shawnee, Prairie Village, Mission Hills and Merriam (KS); Kansas City MO, Lee's Summit, Blue Springs, Independence, Liberty, Parkville, Gladstone and Raymore (MO). It also names Johnson, Wyandotte, Jackson, Clay, Platte and Cass counties.
- **Owner/crew:** "Charlie" (and "Ryan") appear only inside quoted customer reviews, not in the site's own copy.
- **Platform:** a custom React/Vite build (hashed `/assets/index-*.css` bundles) hosted on **Netlify** (`server: Netlify`). The content is server-rendered: a plain curl returns the full HTML, about 163 KB for the homepage. Tracking: GA4 `G-9ZMJHY5TRD` and Google Ads `AW-18079934013`. The footer reads "Website by Hometown Marketing Agency".

---

## Biggest problems (with evidence)

### 1. Review count is far behind the competitors that show up for "deck builder Kansas City"
- The site shows **"5.0★ 18 reviews on Google"** (homepage and /about).
- Competitor counts, taken from the third-party report at reports.lpraudit.com/kansas/overland-park/deck-builder/ (snapshot date unknown): **DW Elite Decks 233 (5.0)**, **All Weather Decks 165 (4.5)**, **Hinkle Outdoor Living 144 (4.8)**, **Archadeck of KC 132 (4.9)**, **Total Home Fence & Deck 128 (4.8)**, The Decksperts 46 (5.0), Heartland Decks 28 (4.6). Willow Outdoor's own schema says **57 reviews, 5.0**.
- The same third-party report lists "DecksRX KC" with **9 reviews** and **"No Website"** on its GBP. That's probably an older snapshot, but **the GBP website field should be checked right away.**

### 2. No citations or directory listings found, and the name collides with another company
- WebSearch for "DecksRX" with Yelp, BBB, Angi, HomeAdvisor, Thumbtack, Nextdoor or Houzz returned **no DecksRXKC listings**.
- The **BBB** search for "DecksRX" in Kansas City (curl) returned `totalResults: 0`.
- The same search surfaces an unrelated **"Decks RX" in Gig Harbor, WA** (bbb.org/us/wa/gig-harbor/profile/general-contractor/decks-rx-1296-1000149715, decksrxgigharbor.com) and a "Decks Rx" Wix site. That raises the risk that Google mixes up the two entities.
- Schema `sameAs` contains **only the Google Maps URL**. Web search suggests Instagram and Facebook presences exist, but they aren't linked from the site.

### 3. Almost no backlinks or off-site authority
- A search for `decksrxkc.com -site:decksrxkc.com` returned only **hometownkc.agency** (the portfolio page links to `https://decksrxkc.com`), a DNS lookup site (robtex), and lpraudit report pages.
- I found no links from supplier dealer locators (Trex/TimberTech), local chambers, the BBB, local news, or the Parade of Homes or HBA. I had no access to a backlink index (see Limits).

### 4. Mobile page speed is only "OK", and third-party tags are the main drag
Lighthouse 12.8.2, mobile (Moto G Power emulation, simulated throttling, one run per page, run from the audit box):

| Page | Perf | FCP | LCP | TBT | CLS | Speed Index |
|---|---|---|---|---|---|---|
| / | **70** | 3.5 s | **4.6 s** | 190 ms | 0 | 5.5 s |
| /service-areas/overland-park-ks | **67** | 4.3 s | **6.1 s** | 80 ms | 0 | 4.4 s |
| /services/custom-decks | **83** | 2.1 s | 3.9 s | 170 ms | 0 | 3.1 s |

Accessibility scored 100, SEO 100 and Best Practices 79 on all three pages.

Findings on the homepage:
- Google Tag Manager (the GA4 and Ads tags) blocked the main thread for **280 ms** and transferred **337 KB**.
- "Unused JavaScript: est. savings **173 KiB**."
- "Properly size images: est. savings **212 KiB**."
- "Image delivery: est. savings **351 KiB**."
- "Document latency: est. savings 530 ms" (root document took **630 ms**).
- Total page weight was **1,420 KiB** with **1,386 DOM elements**.
- The LCP element is a text span (`font-display … text-[1.65rem]`), meaning the rating stat, so **web-font loading/rendering is delaying LCP**.
- The Best Practices score of 79 comes from the third-party `test_cookie` on googleads.g.doubleclick.net.

### 5. Content gaps: services customers mention, project pages with no local proof, thin trust signals
- **Fences and staining** appear in customer reviews quoted on the homepage: "built a 6-foot privacy fence", "small fence/gate replacement", "Great work on our staining project". There are **no fence or deck-staining pages**. Competitors Total Home Fence & Deck and All Weather Decks have them, and "fence" appears in competitor URLs.
- **No pergola, porch or patio-cover pages.** "pergola" appears on **0** of the 49 pages. DW Elite, All Weather, Total Home and Heartland all have pergola URLs.
- **Projects aren't local.** Each city page says the projects shown "are not presented as projects at a specific address in Overland Park", and the 5 project pages carry no city. That's a missed chance for local relevance and links between city pages and projects.
- **Weak trust/E-E-A-T.** "licens" appears only in 2 guides and "insur" in 1 guide. The service pages, /about and /contact never state license or insurance status, years in business, or a named owner. /about has no owner bio.
- **No city + service pages.** DW Elite Decks has **32** city/service URLs (e.g. `/leawood/custom-cedar-decks/`). DecksRXKC has 0.

### Smaller technical items
- **Trailing slash returns a 307 (temporary) redirect**: `/services/` → `/services`. It should be a 301.
- **The 404 page reuses the homepage title.** `/this-page-does-not-exist` returns status 404 (good), but carries `<title>DecksRXKC | Custom Decks & Screened-In Decks in Kansas City` and `robots: index, follow`. Give it its own "Page not found" title.
- **62 of 203 `<img>` tags have empty `alt=""`** across the crawl. On the homepage, 7 of 16 are project photos (e.g. `/images/optimized/kansas-city-elevated-composite-deck-cable-railing-stairs.webp`). On /guides, 11 of 13 are empty.
- **Weak internal links to guides.** `/guides/winter-deck-care-kansas-city` is linked from only **1** page. Replace-boards-with-composite and Trex-vs-TimberTech get 2 each, build-deck-in-fall gets 3, and three other guides get 4 each.
- **Schema gaps.** The business schema has no `address` (at least `addressLocality`/`addressRegion`/`postalCode` are allowed for a service-area business), `sameAs` holds only the GBP, and there's no `founder`/`foundingDate`. /guides and /service-areas have **no** schema. Project pages use plain `WebPage`.
- **All sitemap `<lastmod>` values are identical** (2026-10-23), which weakens the lastmod signal over time.
- **The homepage title is missing the core head term.** "DecksRXKC | Custom Decks & Screened-In Decks in Kansas City" (59 chars) leaves out "deck builder". The H1 is "Custom Decks built for Kansas City Homes".

### What's working (keep it)
- `robots.txt` is `Allow: /` and points to the sitemap. All 49 sitemap URLs return **200**, all carry `index, follow`, and each has a **self-referencing canonical**. No X-Robots-Tag headers.
- `https://www.decksrxkc.com` 301s to `https://decksrxkc.com/`. HSTS is set to `max-age=31536000`. Uppercase URLs and `?utm` variants canonicalize correctly.
- **Titles, metas and H1s are 100% unique** (0 duplicates), with no duplicate body content (MD5 check). Every page has exactly one H1.
- Schema: `HomeAndConstructionBusiness` (with areaServed listing all 17 cities, hours, brands, offer catalog), `Service` + `FAQPage` + `BreadcrumbList` on service and city pages, and `Article` + `FAQPage` on guides.
- **No broken internal links.** All external links resolve: 5 returned 403/timeout to the crawler, but WebFetch or a browser user-agent confirmed they load.
- City pages run 645–956 words (average 831) with city-specific details (neighborhoods, county, popular project types). Guides run up to 3,109 words.

---

## Competitors (Kansas City deck builders)
These came from WebSearch for "deck builder Kansas City" and "deck contractor Overland Park", plus the homepages and sitemaps (fetched 2026-10-24). Review counts come from the lpraudit third-party report except Willow's, which comes from its own schema.

| Competitor | Google reviews | Home title | Schema on home | Sitemap URLs | City-type URLs | Pergola / fence / porch / patio pages |
|---|---|---|---|---|---|---|
| **DW Elite Decks** (dwdecks.com, Olathe) | 233 · 5.0 | "Deck Builder Kansas City Decking Contractor Since 1997" | LocalBusiness (with address), Service, Organization | 173 | 38 (incl. 32 city×service) | pergola, porch, patio |
| **All Weather Decks** (allweatherdecks.net, KCK) | 165 · 4.5 | "24 Time Winner of Best Deck Builder in Kansas City" | Organization only | 209 | 72 (incl. neighborhood pages) | pergola, patio |
| **Archadeck of Kansas City** (archadeck.com/kansas-city) | 132 · 4.9 | Not fetched: Cloudflare 403 | n/a | n/a | n/a | Offers porches and screened porches (search snippet) |
| **Total Home Fence & Deck** (Overland Park) | 128 · 4.8 | "Custom Fences and Decks in the Kansas City Metro" | HomeAndConstructionBusiness + address + aggregateRating | 51 | 29 (incl. city permit/code pages) | pergola, fence |
| **Heartland Decks** (De Soto KS / KCMO) | 28 · 4.6 | "Kansas City Deck Builders, Composite Decking Contractor" | WebPage/WebSite only | 118 | 1 | pergola, porch, patio |
| **Willow Outdoor** (Overland Park) | 57 · 5.0 (own schema) | "Custom Deck Builder in Johnson County, KS" | HomeAndConstructionBusiness/GeneralContractor + address + aggregateRating | 28 | 10 | porch |
| **DecksRXKC** | 18 · 5.0 (site) | "Custom Decks & Screened-In Decks in Kansas City" | HomeAndConstructionBusiness (no address) | 49 | 17 | none |

**Gaps compared with competitors:**
1. Reviews: 7–13× fewer than the leaders.
2. Every leader publishes a street address. DecksRXKC publishes none (fine for a service-area business, but it weakens citation consistency).
3. Leaders put "Deck Builder" in the homepage title.
4. City × service pages (DW Elite) and city permit/code pages (Total Home: `/blue-springs-mo-deck-permits-building-codes/`).
5. Pergola, porch, fence and patio-cover pages.
6. Trust claims in titles and metas: "Since 1997" (DW Elite title), "24 Time Winner of Best Deck Builder in Kansas City" (All Weather title; the site also claims BBB A+), "Google Guaranteed, up to 5 years of workmanship warranty" (Total Home meta).

Where DecksRXKC is stronger: content depth on guides (11 long KC-specific guides vs 0–3 blog-type URLs for most competitors), cleaner schema than All Weather and Heartland, and uniquely written city pages.

---

## Prioritized plan

### This week
1. **GBP check-up (log in as the client/agency).** Confirm the **website field = https://decksrxkc.com/** (with UTM `?utm_source=google&utm_medium=organic&utm_campaign=gbp`), since the third-party snapshot showed "No Website". Set the primary category to **Deck builder**, with secondary categories such as Fence contractor, Carpenter and Contractor only if accurate. Add all 7 services plus fence and staining with descriptions. Upload 20+ geo-relevant project photos. Make the name exactly match the name you pick as the official one (I recommend **"DecksRX KC"** everywhere, matching schema and GBP).
2. **Start a review push.** Send the GBP review link by text to every past customer, aiming for **40+ reviews within 90 days**. Ask reviewers to mention the city and project type.
3. **Change the homepage title and H1.** Title: **"Deck Builder Kansas City | Custom & Screened-In Decks | DecksRX KC"**. H1: **"Kansas City Deck Builder for Custom, Covered & Screened-In Decks"**.
4. **Fix schema.** Add `sameAs` (Instagram, Facebook and every new citation URL), `address` with `addressLocality`/`addressRegion`/`postalCode` (and `streetAddress` only if the client wants it public), `founder` (Charlie, with last name), and `foundingDate`.
5. **Netlify quick fixes.** Change the trailing-slash redirect from 307 to **301**. Give the 404 page the title "Page Not Found | DecksRX KC" and `noindex`.
6. **Alt text.** Write descriptive alt text for the 62 empty-alt images, starting with the homepage gallery and the /guides cards.
7. **Internal links.** Link the weakly linked guides (winter-care, replace-boards, trex-vs-timbertech, build-in-fall) from the matching service pages and from each other.

### Next 30 days
- **Core citations with identical NAP** ("DecksRX KC", (913) 205-6531, https://decksrxkc.com): Bing Places, Apple Business Connect, Yelp, BBB, Facebook Page, Nextdoor, Angi/HomeAdvisor, Houzz, Thumbtack, Porch, plus the Trex and TimberTech contractor locators if eligible. Using the unique "KC" in the name helps separate the business from Decks RX (WA).
- **New service pages** (only for work the client actually does). Search volumes weren't measured; these are keyword-intent suggestions:
  - `/services/fence-installation`: "Fence Installation Kansas City | Privacy Fences & Gates | DecksRX KC". Keywords: fence installation kansas city, privacy fence contractor kansas city.
  - `/services/deck-staining-sealing`: "Deck Staining & Sealing Kansas City | DecksRX KC". Keywords: deck staining kansas city, deck sealing near me.
  - `/services/pergolas`: "Pergola Builder Kansas City | Cedar & Aluminum Pergolas | DecksRX KC". Keywords: pergola builder kansas city.
  - `/services/screened-porches`: "Screened Porch Builder Kansas City | DecksRX KC". Keywords: screened porch kansas city, porch builder kansas city.
  - `/services/wood-decks`: "Cedar & Pressure-Treated Wood Deck Builder Kansas City". Keywords: wood deck builder kansas city, cedar deck kansas city.
- **Trust block on every service and city page:** license/insurance statement (with KCMO/Johnson County licensing where it applies), years in business, warranty terms, and the owner's name and photo. Expand /about with Charlie's story.
- **Speed.** Delay the GA4 and Ads tags until user interaction or load them with Partytown. Preload or self-host the display font with `font-display: swap`. Serve properly sized `srcset` images (212–351 KiB savings). Target mobile LCP under 2.5 s.

### Next 90 days
- **Local project case studies.** Publish 1–2 a month with the city in the URL and title, for example `/projects/composite-deck-overland-park-ks` ("Composite Deck & Stairs in Overland Park, KS | DecksRX KC"), with before/after photos, scope, materials and a review quote. Link each one from its city page.
- **City × service pages** for the top 5 cities (Overland Park, Olathe, Leawood, Lee's Summit, Kansas City MO), e.g. `/service-areas/overland-park-ks/screened-in-decks` ("Screened-In Decks in Overland Park, KS | DecksRX KC", keyword "screened in deck overland park"). Only write them with genuinely unique local content.
- **More city pages if served:** Mission KS, Roeland Park KS, Fairway KS, Spring Hill KS, Gardner KS, De Soto KS, Bonner Springs KS, Grandview MO, Belton MO, Raytown MO, Grain Valley MO, Riverside MO, Kearney MO, Smithville MO. Use the existing URL pattern `/service-areas/<city>-<st>` and the title "Deck Builder in <City>, <ST> | DecksRX KC".
- **City permit guides**, like Total Home's: e.g. `/guides/deck-permits-overland-park-ks` ("Do You Need a Deck Permit in Overland Park?"). The existing guides already cite kcmo.gov permit pages.
- **Link building:** Trex/TimberTech dealer or pro listings, supplier "find a contractor" pages, local chambers (Overland Park, Lee's Summit), the HBA of Greater KC, neighborhood/HOA sponsorships, local news or "before/after" features, and the Hometown agency case study (already live).
- **Track progress:** set up GSC and GBP Insights baselines now. Review rankings for "deck builder kansas city", "deck builder overland park", "screened in deck kansas city" and "composite deck kansas city" monthly with a rank tracker.

---

## Checks blocked or not verified (I did not invent numbers)
- **PageSpeed Insights API: blocked.** HTTP **429** "Quota exceeded … Queries per day" (raw/psi-home-mobile.json). As a result there's **no CrUX field data (real-user Core Web Vitals)**. The speed numbers above are **Lighthouse lab data** from a local CLI run (one run per page, so expect run-to-run variance).
- **http:// → https:// redirect: not verified from the box.** Outbound port 80 is blocked here (even `http://example.com` timed out). WebFetch of `http://decksrxkc.com` returned the site's content, and the site sends HSTS. Netlify enforces HTTPS by default, but I didn't see the actual 301. Check with GSC or a browser.
- **Google Business Profile details** (exact review count, categories, website field, address/pin): Google Maps renders these with JavaScript, so curl returned only the place name "DecksRX KC". The **18 reviews / 5.0** figure comes from the client's own site. The **9 reviews / "No Website"** figure comes from a third-party snapshot of unknown date.
- **Yelp:** curl returned 403, and WebSearch showed no listing. **Facebook** search requires login (400). Bing/DDG HTML scraping returned bot-filtered junk results. **Archadeck** returned a Cloudflare 403. I made no logins.
- **Backlinks:** I didn't use Ahrefs, Semrush, Moz or GSC (all require logins or paid access). The backlink findings come only from web searches, so they're a floor, not a full count.
- **Keyword search volumes and current rankings:** not measured (no keyword tool access). The recommended keywords are based on intent.
- Competitor review counts are third-party and undated, except Willow Outdoor's (taken from its own schema).

## Files
- Report: `/workspace/seo-audits/decksrxkc.com/audit-2026-10-24.md`
- Crawl (one row per page: status, title, meta, H1/H2, word count, canonical, robots, schema, image alt, CTAs, inlinks): `raw/crawl.csv`. Full page text: `raw/crawl-full.json`
- Link check (internal + external with status): `raw/links.csv`
- Lighthouse: `raw/lighthouse-home-mobile.report.json` / `.report.html`, `raw/lighthouse-service-areas-overland-park-ks-mobile.json`, `raw/lighthouse-services-custom-decks-mobile.json`
- PSI error response: `raw/psi-home-mobile.json`
- Sitemap: `raw/sitemap.xml`, `raw/sitemap-urls.txt`. Homepage HTML: `raw/home.html`. Maps HTML: `raw/gmaps-place.html`
- Competitors: `raw/competitors.csv`, `raw/dwdecks-pages.txt`
- Scripts: `scripts/crawl.py`, `scripts/competitors.py`
