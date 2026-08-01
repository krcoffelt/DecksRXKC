export type ServiceArea = {
  city: string
  state: 'KS' | 'MO'
  slug: string
  county: string
  image: string
  nearby: string[]
  localNote: string
  projectTypes: string[]
  priorityContent?: {
    intro: string
    serviceFocus: Array<{
      serviceSlug: string
      title: string
      copy: string
    }>
    planningNotes: string[]
    faqs: Array<{ question: string; answer: string }>
    projectSlugs: string[]
  }
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
    priorityContent: {
      intro:
        'For Overland Park homeowners, the most useful early decisions are often material maintenance, how a deck connects to the main living level, and whether shade should be part of the initial structure. A complete plan keeps those choices connected instead of treating the roof, rails, or stairs as later add-ons.',
      serviceFocus: [
        { serviceSlug: 'composite-decks', title: 'Composite decks', copy: 'Compare Trex and TimberTech colors, maintenance expectations, railing systems, and finished edge details against the home exterior.' },
        { serviceSlug: 'covered-decks', title: 'Covered outdoor space', copy: 'Coordinate the roofline, drainage, ceiling, fan, lighting, and open-deck areas before construction begins.' },
        { serviceSlug: 'deck-replacement', title: 'Deck replacement', copy: 'Use a rebuild to improve the footprint, stair direction, materials, and the connection between the house and yard.' },
      ],
      planningNotes: [
        'Review physical decking samples in the same sun and shade the finished deck will receive.',
        'Plan furniture and grill zones before deciding the final footprint and stair opening.',
        'Consider a cover or future screen room while structure and circulation are still flexible.',
      ],
      faqs: [
        { question: 'Does DecksRXKC build composite decks in Overland Park?', answer: 'Yes. DecksRXKC serves Overland Park homeowners and can compare Trex, TimberTech, and wood options for new decks and replacements.' },
        { question: 'Can a covered and open deck be combined?', answer: 'Yes. A combined layout can create a dependable shaded room while preserving an open zone for grilling, sun, or larger gatherings.' },
      ],
      projectSlugs: ['elevated-composite-deck-and-stairs', 'covered-deck-outdoor-room'],
    },
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
    priorityContent: {
      intro:
        'Lenexa properties can support generous outdoor spaces, but a larger footprint only helps when circulation, shade, stairs, and the relationship to the yard are planned together. The goal is useful square footage rather than an oversized platform with leftover access decisions.',
      serviceFocus: [
        { serviceSlug: 'custom-decks', title: 'Custom deck layouts', copy: 'Plan dining, conversation, grilling, stairs, and open yard space around the home and the way the household gathers.' },
        { serviceSlug: 'stairs-and-railings', title: 'Stairs and railings', copy: 'Use grade, patios, gates, doors, and daily traffic to choose a better route between the deck and yard.' },
        { serviceSlug: 'covered-decks', title: 'Covered deck upgrades', copy: 'Add shade and weather protection with a roof, drainage, ceiling, fan, and lighting plan that feels connected to the house.' },
      ],
      planningNotes: [
        'Set furniture and walking clearances before choosing the final deck dimensions.',
        'Use stair direction and landing position to preserve usable lawn and patio areas.',
        'Plan shade around the home orientation and the times the deck will be used most.',
      ],
      faqs: [
        { question: 'Does DecksRXKC replace decks in Lenexa?', answer: 'Yes. DecksRXKC serves Lenexa with deck repair, replacement, new builds, covered spaces, screens, stairs, and railing work.' },
        { question: 'Can the replacement deck use a larger footprint?', answer: 'Often, yes. The site, home, project requirements, layout goals, and budget determine the practical footprint.' },
      ],
      projectSlugs: ['ground-up-deck-replacement', 'deck-stair-and-railing-upgrade'],
    },
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
    priorityContent: {
      intro:
        'Olathe deck plans often need to balance family gathering space with a direct route to the yard. Durable surfaces, visible stair transitions, and practical furniture zones can make the deck easier to use without making the layout unnecessarily complicated.',
      serviceFocus: [
        { serviceSlug: 'custom-decks', title: 'Family-friendly deck builds', copy: 'Shape clear dining, conversation, and circulation zones around the doors and backyard activity.' },
        { serviceSlug: 'deck-replacement', title: 'Complete deck replacement', copy: 'Replace an aging structure while reconsidering the footprint, materials, railings, and stair route.' },
        { serviceSlug: 'stairs-and-railings', title: 'Backyard access', copy: 'Coordinate stairs, landings, guards, and handrails as one system connected to patios, gates, and lawn areas.' },
      ],
      planningNotes: [
        'Keep the route from the house to the yard clear when furniture is in place.',
        'Compare lower-maintenance composite surfaces with the care and appearance of wood.',
        'Treat stair and railing details as part of the initial deck design.',
      ],
      faqs: [
        { question: 'What deck services are available in Olathe?', answer: 'DecksRXKC serves Olathe with custom decks, repair, replacement, composite and wood options, covered decks, screens, stairs, and railings.' },
        { question: 'Can old stairs be redesigned during a deck replacement?', answer: 'Yes. A replacement is a good time to compare stair locations based on grade, doors, patios, gates, and normal yard traffic.' },
      ],
      projectSlugs: ['elevated-composite-deck-and-stairs', 'deck-stair-and-railing-upgrade'],
    },
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
    priorityContent: {
      intro:
        'Shawnee lots can change quickly in grade and tree cover, which makes the relationship between deck height, stairs, views, privacy, and shade especially important. A successful layout responds to those conditions rather than repeating the old footprint automatically.',
      serviceFocus: [
        { serviceSlug: 'stairs-and-railings', title: 'Stairs and railing systems', copy: 'Plan runs, landings, handrails, and guards around grade changes, patios, gates, and the view from the house.' },
        { serviceSlug: 'deck-replacement', title: 'Replacement and layout updates', copy: 'Use removal and rebuilding to address an aging structure and reconsider access or underused areas.' },
        { serviceSlug: 'screened-in-decks', title: 'Screened outdoor rooms', copy: 'Coordinate roof, screens, doors, trim, airflow, and backyard circulation for more comfortable outdoor time.' },
      ],
      planningNotes: [
        'Use the actual grade and landing area to evaluate stair direction before rebuilding.',
        'Preserve valuable views while considering shade and privacy from nearby properties.',
        'Assess the existing deck before adding new railing, roofing, or an enclosure.',
      ],
      faqs: [
        { question: 'Does DecksRXKC repair deck stairs in Shawnee?', answer: 'Yes. DecksRXKC can assess stair, railing, and related deck concerns in Shawnee and explain whether focused repair or rebuilding is the clearer path.' },
        { question: 'Can an existing Shawnee deck be screened in?', answer: 'Sometimes. The existing framing, roof approach, railings, circulation, and visible condition should be evaluated before the enclosure is planned.' },
      ],
      projectSlugs: ['deck-stair-and-railing-upgrade', 'screened-in-deck-addition'],
    },
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
    image: '/images/optimized/kansas-city-covered-screened-porch-addition.jpg',
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
    image: '/images/optimized/kansas-city-elevated-composite-deck-cable-railing-stairs.jpg',
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
