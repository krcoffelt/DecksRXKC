export const business = {
  name: 'DecksRXKC',
  url: 'https://decksrxkc.com',
  entityId: 'https://decksrxkc.com/#business',
  phone: '+19132056531',
  phoneDisplay: '(913) 205-6531',
  region: 'Kansas City metropolitan area',
  description:
    'DecksRXKC builds custom decks, screened-in decks, covered decks, stairs, railings, and outdoor living spaces for Kansas City homeowners.',
  brands: ['Trex', 'TimberTech'],
} as const

export function getBusinessSchema() {
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': business.entityId,
    name: business.name,
    url: business.url,
    telephone: business.phone,
    description: business.description,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: business.region,
    },
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
