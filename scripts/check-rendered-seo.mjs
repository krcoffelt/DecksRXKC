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

const results = await Promise.all(sitemapUrls.map(checkPage))
const failures = results.filter((result) => result.errors.length > 0)

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`\n${failure.path}`)
    for (const error of failure.errors) {
      console.error(`  - ${error}`)
    }
  }

  process.exitCode = 1
} else {
  const target = baseUrl || 'the built server entry'
  console.log(`Rendered SEO check passed for ${results.length} sitemap URLs using ${target}`)
}

async function checkPage(sitemapUrl) {
  const sitemapLocation = new URL(sitemapUrl)
  const path = `${sitemapLocation.pathname}${sitemapLocation.search}`
  const expectedCanonical = new URL(path, productionOrigin).href
  const errors = []

  try {
    const requestUrl = new URL(path, `${baseUrl || 'http://localhost'}/`)
    const response = builtApp
      ? await builtApp.fetch(new Request(requestUrl))
      : await fetch(requestUrl, { redirect: 'manual' })
    const html = await response.text()

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
  } catch (error) {
    errors.push(error instanceof Error ? error.message : String(error))
  }

  return { path, errors }
}

function assertMatch(html, pattern, message, errors) {
  if (!pattern.test(html)) {
    errors.push(message)
  }
}
