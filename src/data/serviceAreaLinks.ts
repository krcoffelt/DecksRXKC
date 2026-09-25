export type ServiceAreaLink = {
  city: string
  state: 'KS' | 'MO'
  slug: string
}

export const serviceAreaLinks: ServiceAreaLink[] = [
  { city: 'Kansas City', state: 'MO', slug: 'kansas-city-mo' },
  { city: 'Kansas City', state: 'KS', slug: 'kansas-city-ks' },
  { city: 'Overland Park', state: 'KS', slug: 'overland-park-ks' },
  { city: 'Leawood', state: 'KS', slug: 'leawood-ks' },
  { city: 'Lenexa', state: 'KS', slug: 'lenexa-ks' },
  { city: 'Olathe', state: 'KS', slug: 'olathe-ks' },
  { city: 'Shawnee', state: 'KS', slug: 'shawnee-ks' },
  { city: 'Prairie Village', state: 'KS', slug: 'prairie-village-ks' },
  { city: 'Mission Hills', state: 'KS', slug: 'mission-hills-ks' },
  { city: 'Merriam', state: 'KS', slug: 'merriam-ks' },
  { city: "Lee's Summit", state: 'MO', slug: 'lees-summit-mo' },
  { city: 'Blue Springs', state: 'MO', slug: 'blue-springs-mo' },
  { city: 'Independence', state: 'MO', slug: 'independence-mo' },
  { city: 'Liberty', state: 'MO', slug: 'liberty-mo' },
  { city: 'Parkville', state: 'MO', slug: 'parkville-mo' },
  { city: 'Gladstone', state: 'MO', slug: 'gladstone-mo' },
  { city: 'Raymore', state: 'MO', slug: 'raymore-mo' },
]

export const featuredServiceAreaSummaries = [
  { ...serviceAreaLinks[0], county: 'Jackson, Clay, Platte, and Cass Counties', projectTypes: ['custom decks', 'deck repair'] },
  { ...serviceAreaLinks[1], county: 'Wyandotte County', projectTypes: ['deck replacement', 'wood decks'] },
  { ...serviceAreaLinks[2], county: 'Johnson County', projectTypes: ['composite decks', 'deck replacement'] },
  { ...serviceAreaLinks[3], county: 'Johnson County', projectTypes: ['screened-in decks', 'covered decks'] },
  { ...serviceAreaLinks[4], county: 'Johnson County', projectTypes: ['deck replacement', 'composite decks'] },
  { ...serviceAreaLinks[5], county: 'Johnson County', projectTypes: ['deck replacement', 'custom decks'] },
  { ...serviceAreaLinks[6], county: 'Johnson County', projectTypes: ['composite decks', 'stairs and railings'] },
  { ...serviceAreaLinks[7], county: 'Johnson County', projectTypes: ['custom decks', 'deck repair'] },
  { ...serviceAreaLinks[8], county: 'Johnson County', projectTypes: ['screened-in decks', 'custom decks'] },
]

export function getServiceAreaLinkPath(area: ServiceAreaLink) {
  return `/service-areas/${area.slug}`
}

export function getServiceAreaLinkLabel(area: ServiceAreaLink) {
  return `${area.city}, ${area.state}`
}
