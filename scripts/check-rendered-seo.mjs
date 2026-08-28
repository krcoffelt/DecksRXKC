import { readFileSync } from 'node:fs'

const productionOrigin = 'https://decksrxkc.com'
const baseUrl = process.env.SEO_BASE_URL?.replace(/\/$/, '')
const sitemap = readFileSync('public/sitemap.xml', 'utf8')
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
const builtApp = baseUrl ? null : (await import('../dist/server/server.js')).default

if (sitemapUrls.length === 0) {
  throw new Error('No URLs were found in public/sitemap.xml')
}

const priorityHomepageLinks = [
  '/services/custom-decks',
  '/services/covered-decks',
  '/services/deck-repair',
  '/services/stairs-and-railings',
  '/projects',
  '/guides',
]

const priorityQueryMappings = [
  { query: 'deck builder Kansas City', path: '/', terms: ['DecksRXKC builds custom decks', 'Kansas City'] },
  { query: 'custom decks Kansas City', path: '/services/custom-decks', terms: ['custom deck', 'Kansas City'] },
  { query: 'screened-in deck builder Kansas City', path: '/services/screened-in-decks', terms: ['screened-in deck', 'Kansas City'] },
  { query: 'covered deck builder Kansas City', path: '/services/covered-decks', terms: ['covered deck', 'Kansas City'] },
  { query: 'deck replacement Kansas City', path: '/services/deck-replacement', terms: ['deck replacement', 'Kansas City'] },
  { query: 'composite deck builder Overland Park KS', path: '/service-areas/overland-park-ks', terms: ['composite', 'Overland Park'] },
  { query: "deck builder Lee's Summit MO", path: '/service-areas/lees-summit-mo', terms: ['deck builder', "Lee's Summit"] },
  { query: 'deck builder Shawnee KS', path: '/service-areas/shawnee-ks', terms: ['deck builder', 'Shawnee'] },
  { query: 'who builds screened-in decks near me in Kansas City', path: '/services/screened-in-decks', terms: ['DecksRXKC', 'screened-in deck'] },
  { query: 'what deck services does DecksRXKC offer', path: '/services', terms: ['DecksRXKC', 'deck replacement', 'screened-in decks'] },
]

const results = await Promise.all(sitemapUrls.map(checkPage))
const sitewideErrors = auditSitewide(results)
const failures = results.filter((result) => result.errors.length > 0)

if (failures.length > 0 || sitewideErrors.length > 0) {
  for (const failure of failures) {
    console.error(`\n${failure.path}`)
    for (const error of failure.errors) {
      console.error(`  - ${error}`)
    }
  }

  if (sitewideErrors.length > 0) {
    console.error('\nSitewide checks')
    for (const error of sitewideErrors) {
      console.error(`  - ${error}`)
    }
  }

  process.exitCode = 1
} else {
  const target = baseUrl || 'the built server entry'
  console.log(`Rendered SEO check passed for ${results.length} sitemap URLs and ${priorityQueryMappings.length} priority query mappings using ${target}`)
}

async function checkPage(sitemapUrl) {
  const sitemapLocation = new URL(sitemapUrl)
  const path = `${sitemapLocation.pathname}${sitemapLocation.search}`
  const expectedCanonical = new URL(path, productionOrigin).href
  const errors = []
  let html = ''

  try {
    const requestUrl = new URL(path, `${baseUrl || 'http://localhost'}/`)
    const response = builtApp
      ? await builtApp.fetch(new Request(requestUrl))
      : await fetch(requestUrl, { redirect: 'manual' })
    html = await response.text()

    if (response.status !== 200) {
      errors.push(`expected HTTP 200, received ${response.status}`)
    }

    assertMatch(html, /<title>[^<]+<\/title>/i, 'missing title', errors)
    assertMatch(html, /<meta[^>]+name="description"[^>]+content="[^"]+"/i, 'missing meta description', errors)
    assertMatch(html, /<meta[^>]+name="robots"[^>]+content="index, follow"/i, 'missing index/follow robots meta', errors)
    assertMatch(html, /<main\b/i, 'missing server-rendered main content', errors)

    const h1Count = (html.match(/<h1\b/gi) || []).length
    if (h1Count !== 1) {
      errors.push(`expected one H1, found ${h1Count}`)
    }

    const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1]
    if (!canonical) {
      errors.push('missing canonical link')
    } else if (canonical !== expectedCanonical) {
      errors.push(`expected canonical ${expectedCanonical}, found ${canonical}`)
    }

    if (html.includes('Switched to client rendering because the server rendering errored')) {
      errors.push('server rendering fell back to client rendering')
    }

    if (path === '/') {
      assertMatch(html, /<script[^>]+type="application\/ld\+json"/i, 'missing homepage JSON-LD', errors)

      for (const href of priorityHomepageLinks) {
        if (!html.includes(`href="${href}"`)) {
          errors.push(`missing homepage link to ${href}`)
        }
      }
    }

    if (path.startsWith('/guides/')) {
      assertMatch(html, /<h2[^>]*>Verify the guidance<\/h2>/i, 'missing visible primary-source section', errors)
      assertMatch(html, /"citation":\["https:\/\//i, 'missing Article citation URLs in JSON-LD', errors)
      assertMatch(html, /href="https:\/\/(?:awc\.org|codes\.iccsafe\.org|www\.trex\.com|www\.timbertech\.com|www\.weather\.gov)\//i, 'missing authoritative outbound citation link', errors)
    }
  } catch (error) {
    errors.push(error instanceof Error ? error.message : String(error))
  }

  return { path, errors, html }
}

function assertMatch(html, pattern, message, errors) {
  if (!pattern.test(html)) {
    errors.push(message)
  }
}

function auditSitewide(results) {
  const errors = []
  const sitemapPaths = new Set(sitemapUrls.map((url) => normalizePath(new URL(url).pathname)))
  const titles = new Map()
  const descriptions = new Map()
  const incomingLinks = new Map([...sitemapPaths].map((path) => [path, 0]))

  for (const result of results) {
    const title = decodeHtml(result.html.match(/<title>([^<]+)<\/title>/i)?.[1] || '')
    const description = decodeHtml(result.html.match(/<meta[^>]+name="description"[^>]+content="([^"]+)"/i)?.[1] || '')
    addOccurrence(titles, title, result.path)
    addOccurrence(descriptions, description, result.path)

    const schemas = [...result.html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
    for (const match of schemas) {
      try {
        JSON.parse(match[1])
      } catch {
        errors.push(`${result.path} contains invalid JSON-LD`)
      }
    }

    for (const match of result.html.matchAll(/href="([^"]+)"/gi)) {
      const href = decodeHtml(match[1])
      if (/^(?:https?:|mailto:|tel:|#)/i.test(href)) continue
      const linkedPath = normalizePath(new URL(href, productionOrigin).pathname)
      if (sitemapPaths.has(linkedPath)) {
        incomingLinks.set(linkedPath, (incomingLinks.get(linkedPath) || 0) + 1)
      } else if (!linkedPath.startsWith('/images/') && !linkedPath.startsWith('/assets/')) {
        errors.push(`${result.path} links to internal URL missing from sitemap: ${linkedPath}`)
      }
    }
  }

  reportDuplicates(titles, 'title', errors)
  reportDuplicates(descriptions, 'meta description', errors)

  for (const [path, count] of incomingLinks) {
    if (path !== '/' && count === 0) errors.push(`${path} is orphaned within the sitemap crawl`)
  }

  for (const mapping of priorityQueryMappings) {
    const result = results.find((candidate) => normalizePath(candidate.path) === normalizePath(mapping.path))
    if (!result) {
      errors.push(`priority query "${mapping.query}" maps to a page missing from the sitemap: ${mapping.path}`)
      continue
    }
    const visibleText = decodeHtml(result.html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').toLowerCase()
    for (const term of mapping.terms) {
      if (!visibleText.includes(term.toLowerCase())) {
        errors.push(`priority query "${mapping.query}" maps to ${mapping.path}, which lacks answer term "${term}"`)
      }
    }
  }

  return [...new Set(errors)]
}

function normalizePath(path) {
  if (path === '/') return path
  return path.replace(/\/$/, '')
}

function addOccurrence(map, value, path) {
  if (!value) return
  map.set(value, [...(map.get(value) || []), path])
}

function reportDuplicates(map, label, errors) {
  for (const paths of map.values()) {
    if (paths.length > 1) errors.push(`duplicate ${label} across: ${paths.join(', ')}`)
  }
}

function decodeHtml(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#x27;', "'")
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
}
