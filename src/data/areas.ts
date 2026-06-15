const areaRows = [
  {
    slug: 'kansas-city-mo',
    name: 'Kansas City, MO',
    city: 'Kansas City',
    state: 'MO',
    h1: 'Deck Builder in Kansas City, MO',
    focus: 'urban lots, established neighborhoods, and outdoor spaces that need practical access from older homes',
    intro: 'Kansas City homeowners often need decks planned around grade changes, mature trees, narrow side yards, and existing patios.',
    localNotes: ['Established homes with older deck framing', 'Backyards with mature trees and tight access', 'Composite or wood replacements near existing patios'],
    keywordFocus: ['deck builder Kansas City', 'deck repair Kansas City', 'deck replacement Kansas City', 'custom decks Kansas City']
  },
  {
    slug: 'kansas-city-ks',
    name: 'Kansas City, KS',
    city: 'Kansas City',
    state: 'KS',
    h1: 'Deck Builder in Kansas City, KS',
    focus: 'family backyards, split-level homes, and replacement projects near the state line',
    intro: 'DecksRXKC helps Kansas City, KS homeowners improve worn outdoor spaces with clear material guidance and efficient project planning.',
    localNotes: ['Split-level deck access and stair planning', 'Repair versus replacement decisions', 'Wood and composite options for everyday use'],
    keywordFocus: ['deck builder Kansas City KS', 'deck contractor Kansas City KS', 'deck repair Kansas City KS', 'custom decks Kansas City KS']
  },
  {
    slug: 'overland-park-ks',
    name: 'Overland Park, KS',
    city: 'Overland Park',
    state: 'KS',
    h1: 'Deck Builder in Overland Park, KS',
    focus: 'larger suburban yards, composite upgrades, and polished outdoor entertaining spaces',
    intro: 'Overland Park projects often call for low-maintenance finishes, clean railing lines, and layouts that connect kitchens, patios, and lawns.',
    localNotes: ['Low-maintenance composite deck upgrades', 'Outdoor entertaining layouts', 'Clean black railing and stair details'],
    keywordFocus: ['deck builder Overland Park', 'composite decking Overland Park', 'deck repair Overland Park', 'custom decks Overland Park']
  },
  {
    slug: 'olathe-ks',
    name: 'Olathe, KS',
    city: 'Olathe',
    state: 'KS',
    h1: 'Deck Builder in Olathe, KS',
    focus: 'newer homes, growing families, and decks built for grilling, seating, and backyard activity',
    intro: 'DecksRXKC plans Olathe decks around daily use, durable materials, and room for the way homeowners actually spend time outside.',
    localNotes: ['Family-friendly deck layouts', 'Replacement decks with better traffic flow', 'Room for grilling, seating, and yard access'],
    keywordFocus: ['deck builder Olathe', 'deck replacement Olathe', 'custom decks Olathe', 'composite decking Olathe']
  },
  {
    slug: 'lenexa-ks',
    name: 'Lenexa, KS',
    city: 'Lenexa',
    state: 'KS',
    h1: 'Deck Builder in Lenexa, KS',
    focus: 'sloped lots, composite replacement, and outdoor living upgrades',
    intro: 'Lenexa homes often benefit from smart stair placement, sturdy railing systems, and decks that make uneven yards easier to enjoy.',
    localNotes: ['Sloped yard and stair placement planning', 'Composite replacement options', 'Railings built around views and grade changes'],
    keywordFocus: ['deck builder Lenexa', 'deck replacement Lenexa', 'composite decking Lenexa', 'deck stairs Lenexa']
  },
  {
    slug: 'shawnee-ks',
    name: 'Shawnee, KS',
    city: 'Shawnee',
    state: 'KS',
    h1: 'Deck Builder in Shawnee, KS',
    focus: 'deck repair, railing upgrades, and backyard remodel projects',
    intro: 'DecksRXKC helps Shawnee homeowners evaluate aging deck surfaces, replace worn details, and improve safety-minded features like stairs and railings.',
    localNotes: ['Aging deck boards and railing repairs', 'Replacement planning for older decks', 'Backyard upgrades with practical material choices'],
    keywordFocus: ['deck builder Shawnee', 'deck repair Shawnee', 'deck replacement Shawnee', 'deck railing repair Shawnee']
  },
  {
    slug: 'leawood-ks',
    name: 'Leawood, KS',
    city: 'Leawood',
    state: 'KS',
    h1: 'Deck Builder in Leawood, KS',
    focus: 'premium composite details, refined railings, and custom deck layouts',
    intro: 'Leawood projects often need careful finish choices, balanced proportions, and an outdoor space that feels connected to the architecture.',
    localNotes: ['Premium composite and railing packages', 'Custom outdoor living layouts', 'Covered deck and screened porch planning'],
    keywordFocus: ['deck builder Leawood', 'custom decks Leawood', 'composite decking Leawood', 'covered decks Leawood']
  },
  {
    slug: 'prairie-village-ks',
    name: 'Prairie Village, KS',
    city: 'Prairie Village',
    state: 'KS',
    h1: 'Deck Builder in Prairie Village, KS',
    focus: 'compact yards, older homes, and tasteful deck replacements',
    intro: 'Prairie Village decks should be efficient, attractive, and proportioned well for established lots and mature landscaping.',
    localNotes: ['Compact deck layouts for established lots', 'Tasteful replacement decks', 'Wood or composite options for older homes'],
    keywordFocus: ['deck builder Prairie Village', 'deck replacement Prairie Village', 'custom decks Prairie Village', 'wood deck builder Prairie Village']
  },
  {
    slug: 'lees-summit-mo',
    name: 'Lee’s Summit, MO',
    city: 'Lee’s Summit',
    state: 'MO',
    h1: 'Deck Builder in Lee’s Summit, MO',
    focus: 'wood deck replacement, composite upgrades, and backyard gathering spaces',
    intro: 'DecksRXKC builds and replaces decks in Lee’s Summit with an eye toward comfort, durability, and clean transitions to the yard.',
    localNotes: ['Replacement decks for backyard gathering', 'Composite upgrades with clean railing lines', 'Stairs and landings planned around yard access'],
    keywordFocus: ['deck builder Lee’s Summit', 'deck replacement Lee’s Summit', 'custom decks Lee’s Summit', 'composite decking Lee’s Summit']
  },
  {
    slug: 'blue-springs-mo',
    name: 'Blue Springs, MO',
    city: 'Blue Springs',
    state: 'MO',
    h1: 'Deck Builder in Blue Springs, MO',
    focus: 'practical deck repairs, replacements, and outdoor living additions',
    intro: 'Blue Springs homeowners often want dependable deck solutions that improve usable space without making the project feel overbuilt.',
    localNotes: ['Practical repair and replacement scopes', 'Deck layouts for grilling and seating', 'Material guidance for budget-conscious upgrades'],
    keywordFocus: ['deck builder Blue Springs', 'deck repair Blue Springs', 'deck replacement Blue Springs', 'custom decks Blue Springs']
  },
  {
    slug: 'independence-mo',
    name: 'Independence, MO',
    city: 'Independence',
    state: 'MO',
    h1: 'Deck Builder in Independence, MO',
    focus: 'aging deck repair, replacement planning, and wood or composite options',
    intro: 'DecksRXKC helps Independence homeowners decide whether repair, resurfacing, or full replacement makes the most sense.',
    localNotes: ['Older decks needing repair guidance', 'Replacement decisions based on condition', 'Railing, stair, and surface upgrades'],
    keywordFocus: ['deck builder Independence', 'deck repair Independence', 'deck replacement Independence', 'wood deck builder Independence']
  },
  {
    slug: 'liberty-mo',
    name: 'Liberty, MO',
    city: 'Liberty',
    state: 'MO',
    h1: 'Deck Builder in Liberty, MO',
    focus: 'comfortable outdoor rooms, family decks, and replacement projects',
    intro: 'Liberty deck projects often focus on adding dependable space for grilling, seating, and easy movement between house and yard.',
    localNotes: ['Family deck layouts with easy access', 'Covered or screened outdoor living options', 'Replacement decks with better flow'],
    keywordFocus: ['deck builder Liberty MO', 'custom decks Liberty MO', 'deck replacement Liberty MO', 'covered decks Liberty MO']
  },
  {
    slug: 'parkville-mo',
    name: 'Parkville, MO',
    city: 'Parkville',
    state: 'MO',
    h1: 'Deck Builder in Parkville, MO',
    focus: 'wooded lots, elevated decks, and railings with views',
    intro: 'Parkville homes can require thoughtful planning for slopes, trees, stairs, and deck views without sacrificing everyday function.',
    localNotes: ['Elevated decks and railing views', 'Stair planning for sloped or wooded lots', 'Covered decks and screened porch options'],
    keywordFocus: ['deck builder Parkville MO', 'custom decks Parkville MO', 'deck railing installation Parkville', 'covered decks Parkville']
  },
  {
    slug: 'gladstone-mo',
    name: 'Gladstone, MO',
    city: 'Gladstone',
    state: 'MO',
    h1: 'Deck Builder in Gladstone, MO',
    focus: 'deck repair, replacement, and efficient backyard upgrades',
    intro: 'DecksRXKC gives Gladstone homeowners straightforward guidance on improving older decks and choosing materials that match the home.',
    localNotes: ['Efficient deck repair scopes', 'Replacement decks for established homes', 'Composite and wood options with clear tradeoffs'],
    keywordFocus: ['deck builder Gladstone MO', 'deck repair Gladstone', 'deck replacement Gladstone', 'custom decks Gladstone']
  },
  {
    slug: 'north-kansas-city-mo',
    name: 'North Kansas City, MO',
    city: 'North Kansas City',
    state: 'MO',
    h1: 'Deck Builder in North Kansas City, MO',
    focus: 'compact outdoor spaces, replacement decks, and practical railing upgrades',
    intro: 'North Kansas City deck work benefits from smart use of space, tidy details, and durable construction choices.',
    localNotes: ['Compact deck layouts', 'Practical railing and stair upgrades', 'Replacement decks with efficient footprints'],
    keywordFocus: ['deck builder North Kansas City', 'deck replacement North Kansas City', 'deck repair North Kansas City', 'custom decks North Kansas City']
  }
];

export const areas = areaRows.map((area) => ({
  ...area,
  title: `${area.h1} | Deck Repair & Replacement | DecksRXKC`,
  description: `Deck builder in ${area.name} for custom decks, deck repair, deck replacement, composite decking, covered decks, screened porches, railings, and stairs.`
}));

export const getArea = (slug: string) => areas.find((area) => area.slug === slug);
