import { readFileSync, statSync, writeFileSync } from 'node:fs'

const siteUrl = 'https://decksrxkc.com'

function readSlugs(filePath) {
  const source = readFileSync(filePath, 'utf8')
  return [...source.matchAll(/^\s+slug:\s*'([^']+)'/gm)].map((match) => match[1])
}

function modifiedDate(filePath) {
  return statSync(filePath).mtime.toISOString().slice(0, 10)
}

function page(path, sourceFile, changefreq, priority) {
  return { path, lastmod: modifiedDate(sourceFile), changefreq, priority }
}

const serviceAreaFile = 'src/data/serviceAreas.ts'
const servicePageFile = 'src/data/servicePages.ts'
const projectFile = 'src/data/projects.ts'
const guideFile = 'src/data/guides.ts'

const urls = [
  page('/', 'src/routes/index.tsx', 'weekly', '1.0'),
  page('/services', 'src/routes/services.index.tsx', 'monthly', '0.9'),
  ...readSlugs(servicePageFile).map((slug) => page(`/services/${slug}`, servicePageFile, 'monthly', '0.9')),
  page('/projects', 'src/routes/projects.index.tsx', 'monthly', '0.85'),
  ...readSlugs(projectFile).map((slug) => page(`/projects/${slug}`, projectFile, 'monthly', '0.82')),
  page('/guides', 'src/routes/guides.index.tsx', 'monthly', '0.8'),
  ...readSlugs(guideFile).map((slug) => page(`/guides/${slug}`, guideFile, 'monthly', '0.78')),
  page('/service-areas', 'src/routes/service-areas.index.tsx', 'monthly', '0.85'),
  ...readSlugs(serviceAreaFile).map((slug) => page(`/service-areas/${slug}`, serviceAreaFile, 'monthly', '0.76')),
  page('/about', 'src/routes/about.tsx', 'yearly', '0.65'),
  page('/contact', 'src/routes/contact.tsx', 'yearly', '0.75'),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>
    <loc>${siteUrl}${url.path}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

writeFileSync('public/sitemap.xml', xml)
