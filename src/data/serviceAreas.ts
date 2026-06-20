export type ServiceArea = {
  city: string
  state: 'KS' | 'MO'
  slug: string
  county: string
  image: string
  nearby: string[]
  localNote: string
  projectTypes: string[]
}

export const serviceAreas: ServiceArea[] = [
  {
    city: 'Kansas City',
    state: 'MO',
    slug: 'kansas-city-mo',
    county: 'Jackson, Clay, Platte, and Cass Counties',
    image: '/images/kansas-city-custom-deck-builder.jpg',
    nearby: ['Brookside', 'Waldo', 'Northland'],
    localNote:
      'Kansas City homes often need decks that handle summer heat, winter freeze-thaw cycles, and tight backyard layouts without feeling generic.',
    projectTypes: ['custom decks', 'screened-in decks', 'covered decks'],
  },
  {
    city: 'Kansas City',
    state: 'KS',
    slug: 'kansas-city-ks',
    county: 'Wyandotte County',
    image: '/images/kansas-city-large-backyard-deck-build.jpg',
    nearby: ['Rosedale', 'Piper', 'Turner'],
    localNote:
      'Kansas City, Kansas projects range from compact backyard replacements to larger outdoor living spaces built around family use.',
    projectTypes: ['deck replacement', 'wood decks', 'composite decks'],
  },
  {
    city: 'Overland Park',
    state: 'KS',
    slug: 'overland-park-ks',
    county: 'Johnson County',
    image: '/images/overland-park-composite-deck.jpg',
    nearby: ['Nottingham Forest', 'Lionsgate', 'Blue Valley'],
    localNote:
      'Overland Park homeowners often want low-maintenance composite decks, clean railing lines, and outdoor rooms that match newer home finishes.',
    projectTypes: ['composite decks', 'covered decks', 'railing upgrades'],
  },
  {
    city: 'Leawood',
    state: 'KS',
    slug: 'leawood-ks',
    county: 'Johnson County',
    image: '/images/kansas-city-composite-deck-board-railing-detail.jpg',
    nearby: ['Old Leawood', 'Hallbrook', 'Ironhorse'],
    localNote:
      'Leawood deck projects benefit from polished material selections, careful proportions, and detailing that feels integrated with the home.',
    projectTypes: ['custom decks', 'outdoor rooms', 'premium railing'],
  },
  {
    city: 'Lenexa',
    state: 'KS',
    slug: 'lenexa-ks',
    county: 'Johnson County',
    image: '/images/kansas-city-large-deck-tan-house-railing.jpg',
    nearby: ['Lake Lenexa', 'Falcon Valley', 'City Center'],
    localNote:
      'Lenexa homes often have room for larger deck footprints, stairs, privacy details, and covered upgrades for year-round use.',
    projectTypes: ['large decks', 'stairs', 'covered deck upgrades'],
  },
  {
    city: 'Olathe',
    state: 'KS',
    slug: 'olathe-ks',
    county: 'Johnson County',
    image: '/images/kansas-city-backyard-deck-small-steps-black-railing.jpg',
    nearby: ['Cedar Creek', 'Arbor Creek', 'Heritage Park'],
    localNote:
      'Olathe projects often focus on family-friendly layouts with durable decking, safe stair access, and practical entertaining space.',
    projectTypes: ['deck builds', 'deck replacement', 'stairs and railings'],
  },
  {
    city: 'Shawnee',
    state: 'KS',
    slug: 'shawnee-ks',
    county: 'Johnson County',
    image: '/images/shawnee-deck-railing-installation.jpg',
    nearby: ['Lake Quivira', 'Monticello', 'Shawnee Mission'],
    localNote:
      'Shawnee yards vary from wooded lots to newer subdivisions, so deck layouts need to balance grade changes, privacy, and everyday comfort.',
    projectTypes: ['railing installation', 'deck replacement', 'screened-in decks'],
  },
  {
    city: 'Prairie Village',
    state: 'KS',
    slug: 'prairie-village-ks',
    county: 'Johnson County',
    image: '/images/kansas-city-custom-wood-deck-railing-project.jpg',
    nearby: ['Corinth', 'Meadowbrook', 'Mission Road'],
    localNote:
      'Prairie Village homes often need smart deck footprints that respect mature lots, older home character, and smaller outdoor spaces.',
    projectTypes: ['wood decks', 'deck repairs', 'compact outdoor spaces'],
  },
  {
    city: 'Mission Hills',
    state: 'KS',
    slug: 'mission-hills-ks',
    county: 'Johnson County',
    image: '/images/kansas-city-screened-porch-black-railing.jpg',
    nearby: ['Fairway', 'Westwood', 'Country Club District'],
    localNote:
      'Mission Hills outdoor spaces call for careful design decisions, understated materials, and craftsmanship that supports the home architecture.',
    projectTypes: ['screened-in decks', 'custom decks', 'covered outdoor spaces'],
  },
  {
    city: 'Merriam',
    state: 'KS',
    slug: 'merriam-ks',
    county: 'Johnson County',
    image: '/images/kansas-city-deck-stairs-railing-skirt.jpg',
    nearby: ['Antioch', 'Turkey Creek', 'Downtown Merriam'],
    localNote:
      'Merriam deck projects often involve replacing aging structures with safer stairs, cleaner rails, and better everyday access to the yard.',
    projectTypes: ['deck replacement', 'stairs', 'railing upgrades'],
  },
  {
    city: "Lee's Summit",
    state: 'MO',
    slug: 'lees-summit-mo',
    county: 'Jackson and Cass Counties',
    image: '/images/lees-summit-wood-deck-replacement.jpg',
    nearby: ['Raintree Lake', 'Lakewood', "Downtown Lee's Summit"],
    localNote:
      "Lee's Summit homes often have great backyard potential, from lake-area decks to covered spaces built for hosting and family time.",
    projectTypes: ['wood deck replacement', 'covered decks', 'screened-in decks'],
  },
  {
    city: 'Blue Springs',
    state: 'MO',
    slug: 'blue-springs-mo',
    county: 'Jackson County',
    image: '/images/kansas-city-black-railing-deck-stairs-backyard.jpg',
    nearby: ['Lake Tapawingo', 'Grain Valley', 'Burr Oak Woods'],
    localNote:
      'Blue Springs projects often benefit from sturdy framing, easy-to-maintain decking, and rail systems that open up backyard views.',
    projectTypes: ['composite decks', 'deck stairs', 'black railing'],
  },
  {
    city: 'Independence',
    state: 'MO',
    slug: 'independence-mo',
    county: 'Jackson County',
    image: '/images/kansas-city-elevated-deck-stairs-black-railing.jpg',
    nearby: ['Englewood', 'Sugar Creek', 'Blue Ridge'],
    localNote:
      'Independence homes often need practical deck rebuilds, safer stairs, and outdoor spaces that make older yards easier to use.',
    projectTypes: ['deck rebuilds', 'stairs', 'deck repairs'],
  },
  {
    city: 'Liberty',
    state: 'MO',
    slug: 'liberty-mo',
    county: 'Clay County',
    image: '/images/kansas-city-screened-porch-deck-addition.jpg',
    nearby: ['Shoal Creek', 'Claycomo', 'Kearney'],
    localNote:
      'Liberty homeowners often want outdoor spaces that feel comfortable in open yards, with shade, screening, and durable decking options.',
    projectTypes: ['screened-in decks', 'covered decks', 'deck additions'],
  },
  {
    city: 'Parkville',
    state: 'MO',
    slug: 'parkville-mo',
    county: 'Platte County',
    image: '/images/kansas-city-covered-deck-framing-addition.jpg',
    nearby: ['Riss Lake', 'Weatherby Lake', 'Downtown Parkville'],
    localNote:
      'Parkville lots can include slopes and views, so elevated decks, stairs, and covered structures need thoughtful layout and solid framing.',
    projectTypes: ['elevated decks', 'covered deck framing', 'stairs'],
  },
  {
    city: 'Gladstone',
    state: 'MO',
    slug: 'gladstone-mo',
    county: 'Clay County',
    image: '/images/kansas-city-covered-screened-porch-addition.png',
    nearby: ['North Kansas City', 'Oakview', 'Antioch Acres'],
    localNote:
      'Gladstone projects often focus on making existing outdoor space more usable with shade, screening, and lower-maintenance materials.',
    projectTypes: ['covered decks', 'screened-in decks', 'deck replacement'],
  },
  {
    city: 'Raymore',
    state: 'MO',
    slug: 'raymore-mo',
    county: 'Cass County',
    image: '/images/kansas-city-elevated-composite-deck-cable-railing-stairs.png',
    nearby: ['Belton', 'Peculiar', 'Creekmoor'],
    localNote:
      'Raymore homes often have room for outdoor living upgrades that connect patios, walkout basements, and backyard entertaining zones.',
    projectTypes: ['composite decks', 'stairs', 'outdoor living spaces'],
  },
]

export const featuredServiceAreas = serviceAreas.slice(0, 9)

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug)
}

export function getServiceAreaPath(area: ServiceArea) {
  return `/service-areas/${area.slug}`
}

export function getServiceAreaLabel(area: ServiceArea) {
  return `${area.city}, ${area.state}`
}
