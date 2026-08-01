# DecksRXKC Local SEO Rollout

Implementation window: July 31–October 29, 2026

Primary KPI: keyword rankings

Secondary KPIs: organic impressions, clicks, quote submissions, and phone clicks

## Access needed

- Google Search Console owner or full-user access
- Google Business Profile manager access
- SE Ranking project access or a weekly export
- GA4 measurement ID, if DecksRXKC already has a property
- GitHub and Netlify deployment access for the production release

Do not place credentials, verification tokens, or API keys in this file. Configure them through the appropriate account or deployment environment.

## Week 1: production and indexing

- Review and deploy the current SEO branch to Netlify.
- Run `SEO_BASE_URL=https://decksrxkc.com npm run check:seo` after deployment.
- Test one real quote submission and confirm it reaches the existing `quote_requests` workflow.
- Submit `https://decksrxkc.com/sitemap.xml` in Search Console.
- Request indexing for the homepage and the custom-decks, stairs-and-railings, covered-decks, deck-repair, deck-replacement, and composite-decks pages.
- Export Search Console query/page/device data for the previous 90 days and fill the current landing-page column in `seo-ranking-baseline-2026-07-29.csv`.

## Weeks 1–2: Google Business Profile

- Confirm the public business name exactly matches real-world branding.
- Use the most accurate available primary category, normally `Deck builder`; add secondary categories only when they describe work DecksRXKC actually performs.
- Confirm phone, website, hours, and service-area settings.
- Use the Contact page for the website/quote destination unless GBP requires a separate appointment URL.
- Add the seven website services using factual summaries from the matching service pages.
- Upload six to eight original project photos across the first two weeks, then two to three per week.
- Do not create additional GBP locations for individual service cities.

## Weeks 2–12: review workflow

- Ask every completed-project customer for an honest Google review after the work is accepted.
- Use one direct review link; do not offer an incentive or screen customers based on expected sentiment.
- Ask for a description of the actual project and experience, not a keyword script.
- Respond to every new review within seven days with a specific, natural reply.
- Request permission before reusing a review or customer photo in a new project page.

## Weeks 2–5: citation cleanup

- Audit Google, Bing Places, Apple Business Connect, Yelp, BBB, Angi, Houzz, Nextdoor, and relevant Kansas City contractor directories.
- Record profile URL, business name, phone, website, status, and correction date in one sheet.
- Correct inconsistent names, numbers, URLs, hours, and service-area settings.
- Close or merge duplicate profiles through the directory’s supported process.
- Skip low-quality directories that exist primarily to sell links.

## Weeks 3–10: local link earning

- Ask legitimate material suppliers and trade partners about contractor or project-gallery listings.
- Apply to Trex or TimberTech directory programs only if DecksRXKC satisfies their current requirements; do not claim certification before approval.
- Identify Kansas City neighborhood, community, association, and sponsorship relationships that can produce a useful public business mention.
- Pitch one project story with original photos to an appropriate local home or outdoor-living publication.
- Track outreach target, contact, relevance, status, follow-up date, resulting URL, and linked landing page.
- Do not buy bulk links or participate in reciprocal-link schemes.

## Weekly ranking review

Every Monday:

- Export SE Ranking desktop and mobile positions.
- Record top 3, top 10, top 30, and top 100 counts.
- Confirm the ranking URL for each priority keyword.
- Compare Search Console impressions, clicks, CTR, and average position by page and device.
- Annotate deployments, content changes, indexing requests, reviews, citations, and earned links.

Do not rewrite a recently changed page based on one weekly fluctuation. Investigate a drop only after it persists for two checks or is accompanied by an indexing, canonical, or rendering problem.

## Formal checkpoints

### August 28: Day 28

- Confirm all 38 launch URLs are indexed or identify the reason for exclusion.
- Evaluate landing-page stability for custom, stairs, covered, repair, replacement, and composite terms.
- Resolve competing pages before changing titles again.
- Add verified city and project details to the project library if the initial content intake supplies them.

### September 25: Day 56

- Refresh pages that are indexed but have relevant impressions and weak CTR.
- Strengthen internal links for pages with impressions but positions outside the top 30.
- Consolidate only pages with clear intent overlap and persistent URL switching.
- Stop new city-page production if priority city pages still show no meaningful impressions; shift effort to reviews, projects, and links.

### October 29: Day 90

- Compare results with `seo-ranking-baseline-2026-07-29.csv`.
- Record position change by keyword and device, top-tier counts, landing-page stability, organic leads, and local-profile activity.
- Preserve winning pages, document misses, and select the next quarter’s guide and city priorities from actual query data.

## Publication guardrails

- Replace Kansas City metro project locations with specific cities only after verifying the project address at city level and obtaining publication permission.
- Add names, years in business, insurance, license, warranty, financing, permit, price, or manufacturer-status claims only after factual approval.
- Keep one business entity and use service areas rather than implying a physical office in each city.
- Publish meaningful updates only; do not change dates solely to make content appear fresh.
