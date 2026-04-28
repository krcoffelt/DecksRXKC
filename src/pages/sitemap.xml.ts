import { business } from '../data/site';
import { services } from '../data/services';
import { areas } from '../data/areas';

const staticRoutes = [
  '/',
  '/about/',
  '/services/',
  '/service-areas/',
  '/gallery/',
  '/contact/',
  '/thank-you/',
  '/privacy-policy/'
];

const routes = [
  ...staticRoutes,
  ...services.map((service) => `/services/${service.slug}/`),
  ...areas.map((area) => `/service-areas/${area.slug}/`)
];

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${business.url}${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
