export const areas = [
  ['kansas-city-mo', 'Kansas City, MO', 'Deck Builder in Kansas City, MO', 'urban lots, established neighborhoods, and outdoor spaces that need practical access from older homes', 'Kansas City homeowners often need decks planned around grade changes, mature trees, narrow side yards, and existing patios.'],
  ['kansas-city-ks', 'Kansas City, KS', 'Deck Builder in Kansas City, KS', 'family backyards, split-level homes, and replacement projects near the state line', 'DecksRXKC helps Kansas City, KS homeowners improve worn outdoor spaces with clear material guidance and efficient project planning.'],
  ['overland-park-ks', 'Overland Park, KS', 'Deck Builder in Overland Park, KS', 'larger suburban yards, composite upgrades, and polished outdoor entertaining spaces', 'Overland Park projects often call for low-maintenance finishes, clean railing lines, and layouts that connect kitchens, patios, and lawns.'],
  ['olathe-ks', 'Olathe, KS', 'Deck Builder in Olathe, KS', 'newer homes, growing families, and decks built for grilling, seating, and backyard activity', 'DecksRXKC plans Olathe decks around daily use, durable materials, and room for the way homeowners actually spend time outside.'],
  ['lenexa-ks', 'Lenexa, KS', 'Deck Builder in Lenexa, KS', 'sloped lots, composite replacement, and outdoor living upgrades', 'Lenexa homes often benefit from smart stair placement, sturdy railing systems, and decks that make uneven yards easier to enjoy.'],
  ['shawnee-ks', 'Shawnee, KS', 'Deck Builder in Shawnee, KS', 'deck repair, railing upgrades, and backyard remodel projects', 'DecksRXKC helps Shawnee homeowners evaluate aging deck surfaces, replace worn details, and improve safety-minded features like stairs and railings.'],
  ['leawood-ks', 'Leawood, KS', 'Deck Builder in Leawood, KS', 'premium composite details, refined railings, and custom deck layouts', 'Leawood projects often need careful finish choices, balanced proportions, and an outdoor space that feels connected to the architecture.'],
  ['prairie-village-ks', 'Prairie Village, KS', 'Deck Builder in Prairie Village, KS', 'compact yards, older homes, and tasteful deck replacements', 'Prairie Village decks should be efficient, attractive, and proportioned well for established lots and mature landscaping.'],
  ['lees-summit-mo', 'Lee’s Summit, MO', 'Deck Builder in Lee’s Summit, MO', 'wood deck replacement, composite upgrades, and backyard gathering spaces', 'DecksRXKC builds and replaces decks in Lee’s Summit with an eye toward comfort, durability, and clean transitions to the yard.'],
  ['blue-springs-mo', 'Blue Springs, MO', 'Deck Builder in Blue Springs, MO', 'practical deck repairs, replacements, and outdoor living additions', 'Blue Springs homeowners often want dependable deck solutions that improve usable space without making the project feel overbuilt.'],
  ['independence-mo', 'Independence, MO', 'Deck Builder in Independence, MO', 'aging deck repair, replacement planning, and wood or composite options', 'DecksRXKC helps Independence homeowners decide whether repair, resurfacing, or full replacement makes the most sense.'],
  ['liberty-mo', 'Liberty, MO', 'Deck Builder in Liberty, MO', 'comfortable outdoor rooms, family decks, and replacement projects', 'Liberty deck projects often focus on adding dependable space for grilling, seating, and easy movement between house and yard.'],
  ['parkville-mo', 'Parkville, MO', 'Deck Builder in Parkville, MO', 'wooded lots, elevated decks, and railings with views', 'Parkville homes can require thoughtful planning for slopes, trees, stairs, and deck views without sacrificing everyday function.'],
  ['gladstone-mo', 'Gladstone, MO', 'Deck Builder in Gladstone, MO', 'deck repair, replacement, and efficient backyard upgrades', 'DecksRXKC gives Gladstone homeowners straightforward guidance on improving older decks and choosing materials that match the home.'],
  ['north-kansas-city-mo', 'North Kansas City, MO', 'Deck Builder in North Kansas City, MO', 'compact outdoor spaces, replacement decks, and practical railing upgrades', 'North Kansas City deck work benefits from smart use of space, tidy details, and durable construction choices.']
].map(([slug, name, h1, focus, intro]) => ({
  slug,
  name,
  h1,
  focus,
  intro,
  title: `${h1} | DecksRXKC`,
  description: `${h1.replace('Deck Builder in ', 'Custom deck building, deck repair, and deck replacement in ')} from DecksRXKC. Request a local estimate for composite or wood deck work.`
}));

export const getArea = (slug: string) => areas.find((area) => area.slug === slug);
