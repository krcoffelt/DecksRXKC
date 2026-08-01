export type GuideSection = {
  heading: string
  body: string
  points?: string[]
}

export type GuidePage = {
  slug: string
  title: string
  shortTitle: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  intro: string
  heroImage: string
  sections: GuideSection[]
  faqs: Array<{ question: string; answer: string }>
  relatedServiceSlugs: string[]
  relatedProjectSlugs: string[]
  publishedAt: string
  updatedAt: string
}

export const guidePages: GuidePage[] = [
  {
    slug: 'repair-or-replace-your-deck',
    title: 'Should You Repair or Replace Your Deck?',
    shortTitle: 'Repair or Replace Your Deck?',
    metaTitle: 'Repair or Replace Your Deck? Kansas City Guide | DecksRXKC',
    metaDescription:
      'Compare deck repair, resurfacing, and replacement based on framing condition, safety, remaining life, project scope, and long-term plans.',
    eyebrow: 'Deck planning guide',
    intro:
      'The right answer depends on more than worn surface boards. Start with structure, safety, the size of the problem, and how long the updated deck needs to serve your home.',
    heroImage: '/images/kansas-city-deck-stairs-railing-skirt.jpg',
    sections: [
      {
        heading: 'Start below the deck surface',
        body:
          'A weathered board can be replaced. Widespread movement, soft structural components, connection concerns, or repeated failures may point to a larger issue. An assessment should look at the frame, posts, beams, stairs, rails, and visible connections—not only the decking.',
        points: ['Is the concern isolated or repeated?', 'Does the deck move under normal use?', 'Are stairs and rails secure?', 'Can the supporting frame reasonably serve the planned upgrade?'],
      },
      {
        heading: 'When a focused repair may make sense',
        body:
          'A repair can be practical when the supporting structure is sound and the problem is limited. Examples may include a small group of damaged boards, a localized railing issue, or a stair component that can be corrected without rebuilding the whole system.',
      },
      {
        heading: 'When replacement becomes the clearer path',
        body:
          'Replacement deserves serious consideration when concerns are widespread, the layout no longer works, or several major components are approaching the end of their useful life. Rebuilding also creates an opportunity to improve the footprint, stairs, materials, railing, and shade together.',
      },
      {
        heading: 'Compare the full outcome, not only the first price',
        body:
          'A low initial repair cost can be a good investment when it solves the real problem. It can also postpone an inevitable rebuild if the remaining deck is already declining. Ask what the proposed work fixes, what remains unchanged, and what future work is likely.',
      },
    ],
    faqs: [
      {
        question: 'Can new decking be installed over an old frame?',
        answer:
          'Sometimes. The frame should be assessed for condition, layout, spacing, connections, and whether it is appropriate for the selected decking system before surface work begins.',
      },
      {
        question: 'Does a damaged board mean the whole deck is unsafe?',
        answer:
          'Not necessarily. One damaged board may be isolated, but repeated soft areas, movement, loose guards, or stair problems are reasons to request a broader assessment.',
      },
      {
        question: 'Can replacement keep the same footprint?',
        answer:
          'Yes, when that footprint still works. Homeowners can also use a replacement project to reconsider stairs, circulation, entertaining space, and material choices.',
      },
    ],
    relatedServiceSlugs: ['deck-repair', 'deck-replacement', 'stairs-and-railings'],
    relatedProjectSlugs: ['ground-up-deck-replacement', 'deck-stair-and-railing-upgrade'],
    publishedAt: '2026-07-31',
    updatedAt: '2026-07-31',
  },
  {
    slug: 'composite-vs-wood-decking-kansas-city',
    title: 'Composite vs. Wood Decking for Kansas City Weather',
    shortTitle: 'Composite vs. Wood Decking',
    metaTitle: 'Composite vs Wood Decking in Kansas City | DecksRXKC',
    metaDescription:
      'Compare composite and wood decking for Kansas City sun, rain, freeze-thaw weather, maintenance, appearance, comfort, and long-term ownership.',
    eyebrow: 'Material comparison guide',
    intro:
      'Both materials can create a great deck. The better choice depends on the look you want, the maintenance you will realistically do, how the surface is used, and how you value first cost versus ongoing care.',
    heroImage: '/images/kansas-city-composite-deck-board-railing-detail.jpg',
    sections: [
      {
        heading: 'Maintenance and appearance',
        body:
          'Wood offers natural variation and can be refinished, but it normally needs periodic cleaning and protective maintenance. Composite products such as Trex and TimberTech are selected by many homeowners for a more consistent finish and reduced routine maintenance.',
      },
      {
        heading: 'Kansas City sun, moisture, and seasonal change',
        body:
          'Kansas City decks experience strong sun, humid stretches, rain, snow, and freeze-thaw cycles. Good drainage, ventilation, framing details, fasteners, and installation practices matter with either surface material.',
        points: ['Compare color and heat in direct sun', 'Plan drainage and airflow', 'Review traction and cleaning expectations', 'Coordinate the surface with rails, fascia, and stairs'],
      },
      {
        heading: 'Up-front cost versus ongoing care',
        body:
          'Wood may have a lower initial material cost, while composite can reduce staining and sealing work over time. Compare the complete material package, expected upkeep, and how long you plan to own and use the deck.',
      },
      {
        heading: 'Use real samples before choosing',
        body:
          'Small online swatches can hide color variation and texture. Review physical samples outdoors, in sun and shade, against the home exterior. Then consider the matching fascia, railing, and stair details before making the final selection.',
      },
    ],
    faqs: [
      {
        question: 'Does composite decking require no maintenance?',
        answer:
          'No deck surface is maintenance-free. Composite generally reduces staining and sealing work, but it still needs cleaning and care based on the manufacturer’s instructions.',
      },
      {
        question: 'Does composite decking get hot?',
        answer:
          'Surface temperature varies by product, color, exposure, and weather. Compare samples in direct sun if heat is an important concern for bare feet or pets.',
      },
      {
        question: 'Can DecksRXKC install Trex and TimberTech?',
        answer:
          'Yes. DecksRXKC can discuss Trex and TimberTech options alongside wood decking so the material decision fits the project and maintenance goals.',
      },
    ],
    relatedServiceSlugs: ['composite-decks', 'custom-decks', 'deck-replacement'],
    relatedProjectSlugs: ['elevated-composite-deck-and-stairs', 'ground-up-deck-replacement'],
    publishedAt: '2026-07-31',
    updatedAt: '2026-07-31',
  },
]

export function getGuidePage(slug: string) {
  return guidePages.find((guide) => guide.slug === slug)
}

export function getGuidePagePath(guide: GuidePage) {
  return `/guides/${guide.slug}`
}

export function getGuidesBySlugs(slugs: string[]) {
  return slugs.flatMap((slug) => {
    const guide = getGuidePage(slug)
    return guide ? [guide] : []
  })
}
