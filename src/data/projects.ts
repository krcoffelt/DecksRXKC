export type ProjectPage = {
  slug: string
  title: string
  shortTitle: string
  metaTitle: string
  metaDescription: string
  location: string
  primaryServiceSlug: string
  relatedServiceSlugs: string[]
  summary: string
  heroImage: string
  gallery: Array<{
    src: string
    alt: string
    caption: string
  }>
  goal: string
  considerations: string[]
  features: string[]
  result: string
  testimonial?: string
  publishedAt: string
  updatedAt: string
}

export const projectPages: ProjectPage[] = [
  {
    slug: 'elevated-composite-deck-and-stairs',
    title: 'Elevated Composite Deck, Railings, and Backyard Stairs',
    shortTitle: 'Elevated Composite Deck',
    metaTitle: 'Elevated Composite Deck Project | DecksRXKC',
    metaDescription:
      'See an elevated Kansas City composite deck with dark railings, a full stair run, finished fascia, and direct backyard access.',
    location: 'Kansas City metro',
    primaryServiceSlug: 'composite-decks',
    relatedServiceSlugs: ['stairs-and-railings', 'deck-replacement'],
    summary:
      'A coordinated elevated-deck layout brings the surface, railing, fascia, and stairs together as one finished outdoor space.',
    heroImage: '/images/optimized/kansas-city-elevated-composite-deck-cable-railing-stairs.jpg',
    gallery: [
      {
        src: '/images/kansas-city-composite-deck-cable-railing-stairs.jpg',
        alt: 'Elevated composite deck with dark railings and a long backyard stair run',
        caption: 'The railing and stair lines are planned together so the elevated deck feels visually connected to the yard.',
      },
      {
        src: '/images/kansas-city-elevated-deck-stairs-black-railing.jpg',
        alt: 'Black deck railing and wood stair structure on an elevated Kansas City deck',
        caption: 'Consistent railing details help the landing, stairs, and upper deck read as one system.',
      },
    ],
    goal:
      'Create an elevated deck that feels finished from the house and from the yard while providing a clear, comfortable route between levels.',
    considerations: [
      'Stair placement affects traffic flow, landing space, and how much of the yard remains open.',
      'Railing, fascia, and decking colors need to work together from close range and from the ground.',
      'An elevated frame should be evaluated as part of the complete material and layout decision.',
    ],
    features: ['Composite deck surface', 'Dark railing system', 'Full stair run', 'Finished fascia and edges'],
    result:
      'The finished space pairs a lower-maintenance surface with safer backyard access and a clean, consistent exterior profile.',
    publishedAt: '2026-07-31',
    updatedAt: '2026-07-31',
  },
  {
    slug: 'covered-deck-outdoor-room',
    title: 'Covered Deck Designed as an Outdoor Room',
    shortTitle: 'Covered Outdoor Room',
    metaTitle: 'Covered Deck Outdoor Room Project | DecksRXKC',
    metaDescription:
      'Explore a Kansas City covered deck project planned around shade, weather protection, finished details, and everyday outdoor use.',
    location: 'Kansas City metro',
    primaryServiceSlug: 'covered-decks',
    relatedServiceSlugs: ['screened-in-decks', 'composite-decks'],
    summary:
      'A roofed deck turns an exposed platform into a defined outdoor room with more dependable shade and weather protection.',
    heroImage: '/images/optimized/kansas-city-covered-screened-porch-addition.jpg',
    gallery: [
      {
        src: '/images/kansas-city-covered-deck-framing-addition.jpg',
        alt: 'Covered deck roof structure being integrated with a Kansas City home',
        caption: 'Roof structure, house connection, headroom, and drainage are considered before finish selections begin.',
      },
      {
        src: '/images/optimized/kansas-city-composite-covered-deck-railing-detail.jpg',
        alt: 'Finished covered deck with composite surface and dark railing',
        caption: 'A coordinated ceiling, deck surface, and railing palette gives the outdoor room a finished feel.',
      },
    ],
    goal:
      'Make the deck more comfortable during strong sun and passing rain while keeping it open to the backyard.',
    considerations: [
      'The cover must relate cleanly to the home roofline and exterior materials.',
      'Drainage, gutters, ceiling height, lighting, and fan locations should be planned as one system.',
      'Future screening is easier when openings and circulation are considered early.',
    ],
    features: ['Integrated roof structure', 'Weather protection', 'Finished ceiling potential', 'Lighting and fan planning'],
    result:
      'The covered layout creates a more dependable place for dining, conversation, and daily outdoor use across more of the year.',
    publishedAt: '2026-07-31',
    updatedAt: '2026-07-31',
  },
  {
    slug: 'deck-stair-and-railing-upgrade',
    title: 'Deck Stair Replacement and Railing Upgrade',
    shortTitle: 'Stair & Railing Upgrade',
    metaTitle: 'Deck Stair Replacement Project Kansas City | DecksRXKC',
    metaDescription:
      'See how coordinated deck stairs, landings, railings, and finished skirting can improve backyard access and the look of an existing deck.',
    location: 'Kansas City metro',
    primaryServiceSlug: 'stairs-and-railings',
    relatedServiceSlugs: ['deck-repair', 'deck-replacement'],
    summary:
      'New stairs and railings can change both the safety and the everyday usefulness of an existing deck without treating them as afterthoughts.',
    heroImage: '/images/kansas-city-deck-stairs-railing-skirt.jpg',
    gallery: [
      {
        src: '/images/kansas-city-black-railing-deck-stairs-backyard.jpg',
        alt: 'Backyard deck stairs with black railing and a clear landing area',
        caption: 'The stair direction and landing position create a direct route from the deck into the yard.',
      },
      {
        src: '/images/shawnee-deck-railing-installation.jpg',
        alt: 'Deck railing installation with evenly spaced dark balusters',
        caption: 'Consistent posts, rails, and transitions help a railing upgrade look intentional around the full deck.',
      },
    ],
    goal:
      'Improve the path between deck and yard while giving the deck perimeter a cleaner, more consistent finish.',
    considerations: [
      'Loose rails, soft stair components, uneven movement, and awkward landings deserve a full assessment.',
      'The best stair direction depends on doors, patios, grade, utilities, and normal backyard traffic.',
      'Replacing rails or stairs only makes sense when the supporting deck can safely receive the new work.',
    ],
    features: ['Rebuilt stair run', 'Coordinated guard and handrail', 'Defined landing', 'Finished deck edge'],
    result:
      'The updated access route feels more direct, while the consistent dark railing gives the existing deck a sharper visual edge.',
    publishedAt: '2026-07-31',
    updatedAt: '2026-07-31',
  },
  {
    slug: 'ground-up-deck-replacement',
    title: 'Ground-Up Deck Replacement with Site Challenges',
    shortTitle: 'Ground-Up Deck Replacement',
    metaTitle: 'Ground-Up Deck Replacement Project | DecksRXKC',
    metaDescription:
      'Review a Kansas City deck replacement that included removal, difficult concrete conditions, new framing, stairs, and a finished outdoor space.',
    location: 'Kansas City metro',
    primaryServiceSlug: 'deck-replacement',
    relatedServiceSlugs: ['deck-repair', 'stairs-and-railings'],
    summary:
      'A full replacement made it possible to address the old structure and difficult site conditions before rebuilding the outdoor space from the ground up.',
    heroImage: '/images/optimized/kansas-city-elevated-screened-deck-wood-stairs.jpg',
    gallery: [
      {
        src: '/images/lees-summit-wood-deck-replacement.jpg',
        alt: 'Completed wood deck replacement with new railing and backyard stairs',
        caption: 'A replacement project coordinates framing, surface, railing, and stairs instead of treating each as a separate repair.',
      },
      {
        src: '/images/kansas-city-large-backyard-deck-build.jpg',
        alt: 'Large backyard deck build with a broad usable surface',
        caption: 'Starting over creates room to reconsider the footprint and how the deck connects to the rest of the yard.',
      },
    ],
    goal:
      'Remove an aging deck, work through difficult concrete at the site, and rebuild a dependable outdoor space with close attention to the finished details.',
    considerations: [
      'Demolition can reveal framing, footing, attachment, or site conditions that were not visible from the surface.',
      'Concrete, access, and material staging affect how the removal and rebuild are sequenced.',
      'A full replacement is an opportunity to improve the footprint, stairs, rails, and material package together.',
    ],
    features: ['Old-deck removal', 'Site and concrete work', 'Ground-up rebuild', 'New deck access and finished details'],
    result:
      'The project moved from a difficult removal to a complete new deck, with the homeowner highlighting the team’s speed, attention to detail, and finished result.',
    testimonial:
      'They faced some major challenges, especially a lot of concrete that had to be broken up and removed. They really pay attention to the details and the final result is absolutely beautiful!',
    publishedAt: '2026-07-31',
    updatedAt: '2026-07-31',
  },
  {
    slug: 'screened-in-deck-addition',
    title: 'Screened-In Deck Addition with Finished Outdoor-Room Details',
    shortTitle: 'Screened-In Deck Addition',
    metaTitle: 'Screened-In Deck Addition Project | DecksRXKC',
    metaDescription:
      'Tour a Kansas City screened-in deck addition with a covered roof, dark screen panels, railing, and an open outdoor-room feel.',
    location: 'Kansas City metro',
    primaryServiceSlug: 'screened-in-decks',
    relatedServiceSlugs: ['covered-decks', 'composite-decks'],
    summary:
      'A screened enclosure adds a clear boundary against bugs while preserving airflow, views, and the feeling of being outdoors.',
    heroImage: '/images/optimized/kansas-city-screened-porch-wood-trim-black-screen.jpg',
    gallery: [
      {
        src: '/images/optimized/kansas-city-elevated-screened-porch-black-railing.jpg',
        alt: 'Elevated screened deck with black railing and large screen openings',
        caption: 'Large screen openings protect the room without closing off the view to the yard.',
      },
      {
        src: '/images/kansas-city-screened-porch-deck-addition.jpg',
        alt: 'Screened porch addition connected to a backyard deck',
        caption: 'Door placement, screen bays, roof structure, and deck circulation are planned together.',
      },
    ],
    goal:
      'Create a comfortable outdoor room with fewer bugs and less direct exposure while keeping an open connection to the backyard.',
    considerations: [
      'Existing framing and roof conditions determine whether an open deck can support an enclosure.',
      'Door swings, furniture zones, pet use, privacy, and prevailing sun affect the panel layout.',
      'A screen system works best when roof, rail, trim, and drainage details are coordinated.',
    ],
    features: ['Large screen bays', 'Covered roof', 'Coordinated trim and railing', 'Dedicated screen door'],
    result:
      'The finished room keeps the visual openness of a deck while providing a more comfortable setting for meals and evenings outside.',
    publishedAt: '2026-07-31',
    updatedAt: '2026-07-31',
  },
]

export function getProjectPage(slug: string) {
  return projectPages.find((project) => project.slug === slug)
}

export function getProjectPagePath(project: ProjectPage) {
  return `/projects/${project.slug}`
}

export function getProjectsBySlugs(slugs: string[]) {
  return slugs.flatMap((slug) => {
    const project = getProjectPage(slug)
    return project ? [project] : []
  })
}
