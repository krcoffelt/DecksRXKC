import { readFileSync, writeFileSync } from 'node:fs'

const siteUrl = 'https://decksrxkc.com'
const lastmod = '2026-06-27'

function readSlugs(filePath) {
  const source = readFileSync(filePath, 'utf8')
  return [...source.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1])
}

const serviceAreaSlugs = readSlugs('src/data/serviceAreas.ts')
const servicePageSlugs = readSlugs('src/data/servicePages.ts')

const urls = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  ...servicePageSlugs.map((slug) => ({
    path: `/services/${slug}`,
    changefreq: 'monthly',
    priority: '0.85',
  })),
  { path: '/service-areas', changefreq: 'monthly', priority: '0.9' },
  ...serviceAreaSlugs.map((slug) => ({
    path: `/service-areas/${slug}`,
    changefreq: 'monthly',
    priority: '0.8',
  })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${siteUrl}${url.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync('public/sitemap.xml', xml)
