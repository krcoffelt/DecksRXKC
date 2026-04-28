import { business } from './site';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'Contractor'],
    name: business.name,
    image: `${business.url}${business.image}`,
    logo: `${business.url}${business.logo}`,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kansas City',
      addressRegion: 'MO',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude
    },
    areaServed: ['Kansas City, MO', 'Kansas City, KS', 'Overland Park, KS', 'Olathe, KS', 'Lenexa, KS', 'Shawnee, KS', 'Leawood, KS', 'Prairie Village, KS', 'Lee’s Summit, MO', 'Blue Springs, MO', 'Independence, MO', 'Liberty, MO', 'Parkville, MO', 'Gladstone, MO', 'North Kansas City, MO'],
    priceRange: '$$'
  };
}

export function serviceSchema(service: { name: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
      telephone: business.phone
    },
    areaServed: 'Kansas City metro area'
  };
}

export function faqSchema(faqs: string[][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer
      }
    }))
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${business.url}${item.href}`
    }))
  };
}
