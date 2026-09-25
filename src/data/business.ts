import { getServiceAreaLinkLabel, serviceAreaLinks } from './serviceAreaLinks'

const googlePlaceId = 'ChIJkzUai5uhMyYRAdvQsND0a9s'

export const business = {
  name: 'DecksRXKC',
  googleBusinessName: 'DecksRX KC',
  url: 'https://decksrxkc.com',
  entityId: 'https://decksrxkc.com/#business',
  phone: '+19132056531',
  phoneDisplay: '(913) 205-6531',
  region: 'Kansas City metropolitan area',
  logo: 'https://decksrxkc.com/images/decksrxkc-full-logo-transparent.png',
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=DecksRX%20KC&query_place_id=${googlePlaceId}`,
  googleReviewUrl: `https://search.google.com/local/writereview?placeid=${googlePlaceId}`,
  googleReviewCount: 18,
  description:
    'DecksRXKC builds custom decks, screened-in decks, covered decks, stairs, railings, and outdoor living spaces for Kansas City homeowners.',
  brands: ['Trex', 'TimberTech'],
} as const

export function getBusinessSchema() {
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': business.entityId,
    name: business.googleBusinessName,
    alternateName: business.name,
    url: business.url,
    telephone: business.phone,
    description: business.description,
    image: `${business.url}/images/optimized/kansas-city-composite-covered-deck-railing-detail.jpg`,
    logo: {
      '@type': 'ImageObject',
      url: business.logo,
    },
    hasMap: business.googleMapsUrl,
    sameAs: [business.googleMapsUrl],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: business.phone,
      contactType: 'customer service',
      areaServed: ['US-KS', 'US-MO'],
      availableLanguage: 'English',
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: business.region,
      },
      ...serviceAreaLinks.map((area) => ({
        '@type': 'City',
        name: getServiceAreaLinkLabel(area),
      })),
    ],
    knowsAbout: [
      'Custom deck construction',
      'Deck replacement',
      'Deck repair',
      'Covered decks',
      'Screened-in decks',
      'Composite decking',
      'Deck stairs and railings',
    ],
    brand: business.brands.map((name) => ({ '@type': 'Brand', name })),
  }
}
