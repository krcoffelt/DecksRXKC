export type GuideSection = {
  heading: string
  body: string
  paragraphs?: string[]
  points?: string[]
  sourceIds?: string[]
}

export type GuideSource = {
  id: string
  title: string
  publisher: string
  url: string
}

export type GuidePage = {
  slug: string
  title: string
  shortTitle: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  intro: string
  answer?: string
  heroImage: string
  sections: GuideSection[]
  sources: GuideSource[]
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
        sourceIds: ['awc-dca6', 'irc-existing-structures'],
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
        sourceIds: ['awc-dca6'],
      },
      {
        heading: 'Compare the full outcome, not only the first price',
        body:
          'A low initial repair cost can be a good investment when it solves the real problem. It can also postpone an inevitable rebuild if the remaining deck is already declining. Ask what the proposed work fixes, what remains unchanged, and what future work is likely.',
      },
    ],
    sources: [
      {
        id: 'awc-dca6',
        title: 'Prescriptive Residential Wood Deck Construction Guide (DCA 6)',
        publisher: 'American Wood Council',
        url: 'https://awc.org/wp-content/uploads/2022/02/AWC-DCA62015-DeckGuide-1804.pdf',
      },
      {
        id: 'irc-existing-structures',
        title: '2021 IRC Appendix AJ: Existing Buildings and Structures',
        publisher: 'International Code Council',
        url: 'https://codes.iccsafe.org/content/IRC2021P1/appendix-aj-existing-buildings-and-structures',
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
        sourceIds: ['trex-care', 'timbertech-care'],
      },
      {
        heading: 'Kansas City sun, moisture, and seasonal change',
        body:
          'Kansas City decks experience strong sun, humid stretches, rain, snow, and freeze-thaw cycles. Good drainage, ventilation, framing details, fasteners, and installation practices matter with either surface material.',
        points: ['Compare color and heat in direct sun', 'Plan drainage and airflow', 'Review traction and cleaning expectations', 'Coordinate the surface with rails, fascia, and stairs'],
        sourceIds: ['nws-kc-normals', 'irc-composite-installation'],
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
        sourceIds: ['trex-faq'],
      },
    ],
    sources: [
      {
        id: 'nws-kc-normals',
        title: 'Kansas City Climate Normals',
        publisher: 'National Weather Service',
        url: 'https://www.weather.gov/eax/eaxclinormals',
      },
      {
        id: 'irc-composite-installation',
        title: '2018 IRC Chapter 5: Floors',
        publisher: 'International Code Council',
        url: 'https://codes.iccsafe.org/content/IRC2018P7/chapter-5-floors',
      },
      {
        id: 'trex-care',
        title: 'How to Clean a Trex Deck',
        publisher: 'Trex',
        url: 'https://www.trex.com/customer-support/trex-owners/care-and-cleaning/',
      },
      {
        id: 'trex-faq',
        title: 'Trex Composite Decking and Railing FAQs',
        publisher: 'Trex',
        url: 'https://www.trex.com/why-trex/faq/',
      },
      {
        id: 'timbertech-care',
        title: 'Care and Cleaning Guide for Decking and Railing',
        publisher: 'TimberTech',
        url: 'https://www.timbertech.com/resources/care-cleaning/',
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
  {
    slug: 'can-you-screen-in-an-existing-deck',
    title: 'Can You Screen In an Existing Deck in Kansas City?',
    shortTitle: 'Screen In an Existing Deck',
    metaTitle: 'Can You Screen In an Existing Deck in KC? | DecksRXKC',
    metaDescription:
      'Learn when an existing deck may support a screened room, what must be evaluated, and which roof, door, airflow, and finish choices shape the project.',
    eyebrow: 'Screened-in deck guide',
    intro:
      'An existing deck can sometimes become a comfortable screened room, but the project begins with the structure beneath it—not with a screen style or furniture plan.',
    answer:
      'Yes, some existing decks can be screened in. Before planning the enclosure, a builder should evaluate the footings, posts, beams, joists, house connection, stairs, visible condition, and the loads created by the proposed roof and walls. If the base is not appropriate, rebuilding it may be the clearer long-term path.',
    heroImage: '/images/optimized/kansas-city-screened-porch-wood-trim-black-screen.jpg',
    sections: [
      {
        heading: 'Start with the deck below the room',
        body:
          'Screens are lightweight, but a screened room is more than mesh panels. It normally includes a roof, posts or framed openings, trim, a door, and sometimes a ceiling, fan, lighting, or privacy features. Those additions change how the existing deck must perform.',
        paragraphs: [
          'A useful assessment follows the load path from the proposed roof through the enclosure and deck framing to the ground. The visible surface may look clean while the framing layout, connections, or footings remain unsuitable for the new scope. That is why a site visit should come before a firm design or price.',
          'The American Wood Council deck guide is a useful general reference for conventional wood decks, but it is not a substitute for project-specific design or approval by the local authority. A screened enclosure may fall outside the guide’s prescriptive limits.',
        ],
        points: ['Footings, posts, beams, and joists', 'Ledger and other house connections', 'Movement, moisture, decay, and previous repairs', 'Stairs, guards, landings, and everyday access'],
        sourceIds: ['awc-decks-screen'],
      },
      {
        heading: 'Three starting conditions lead to different projects',
        body:
          'The simplest starting point is an existing covered deck whose structure and roof are appropriate for enclosure. The work may focus on screen bays, a door, trim, rail integration, and small electrical or finish upgrades.',
        paragraphs: [
          'An open deck adds a second major question: how the roof will be supported and connected. A third scenario is an older or poorly configured deck that should be rebuilt before the room is created. Rebuilding can feel like a larger step, but it lets the footprint, roof support, stairs, drainage, and finish details work as one system.',
          'A proposal should clearly identify which starting condition applies. “Screening a deck” should not conceal structural, roofing, demolition, or finish work that is necessary to deliver the room shown in the plan.',
        ],
      },
      {
        heading: 'Plan the roof and water before the screens',
        body:
          'The roof determines headroom, daylight, drainage, and how the new room relates to the home. Its connection should be planned around existing rooflines, walls, windows, doors, and the path water will take during a Kansas City storm.',
        paragraphs: [
          'Gutters, downspouts, flashing, roof pitch, and discharge locations are functional decisions, not finishing touches. Water should be directed away from the house, deck structure, stairs, and high-traffic areas. A finished ceiling also needs coordination with ventilation, lighting, fans, and future access.',
          'Local permit and plan requirements vary across the metro. Kansas City, Missouri, for example, distinguishes limited permit-exempt work from additions and structural alterations. Confirm the current rules for the property’s exact jurisdiction before construction.',
        ],
        sourceIds: ['kcmo-permits-screen'],
      },
      {
        heading: 'Lay out the room around daily use',
        body:
          'A screened room feels generous when its doors, furniture, and walking paths are resolved before framing begins. Mark the dining table, conversation seating, grill route, stair opening, and the path from the house to the yard at real scale.',
        paragraphs: [
          'Door swing is especially easy to underestimate. It should not trap a chair, interrupt the main furniture zone, or create an awkward turn at the stairs. Large screen openings preserve views, while lower rails, solid walls, or privacy panels change sightlines from both inside the home and outside in the yard.',
        ],
        points: ['Airflow and prevailing exposure', 'Pet-resistant or higher-visibility screen options', 'Door location, swing, and hardware', 'Furniture clearances and paths to the yard'],
      },
      {
        heading: 'Coordinate comfort and finish choices early',
        body:
          'Fans, lighting, outlets, heaters, televisions, and privacy details affect framing and electrical planning. Selecting them after the screen openings are built can create visible compromises or extra work.',
        paragraphs: [
          'The same principle applies to trim, railing, ceiling material, decking, and color. The enclosure looks intentional when those pieces relate to the house and to one another. Physical samples viewed outdoors are more reliable than choosing from a small screen image.',
          'A screened room remains an outdoor space. Wind-driven rain, pollen, temperature swings, and normal cleaning still matter. The design should set realistic expectations rather than presenting the room as a conditioned sunroom.',
        ],
      },
      {
        heading: 'Build a quote around the complete scope',
        body:
          'Price changes with the condition of the existing deck, roof design, room size, access, demolition, structural work, screen system, doors, electrical work, ceiling, trim, stairs, railing, and finish package. A low screen-only allowance cannot be compared with a complete outdoor-room proposal.',
        paragraphs: [
          'Ask each builder to state what will remain, what will be removed, how concealed conditions will be handled, which products are included, and whether plans, permits, inspections, cleanup, and electrical work are part of the scope. That creates a more useful comparison and reduces surprises after work begins.',
          'DecksRXKC can evaluate the existing space and explain whether enclosure, a new roof, selective rebuilding, or a complete screened-in deck is the most practical direction.',
        ],
      },
    ],
    sources: [
      { id: 'awc-decks-screen', title: 'Deck Resources and DCA 6 Guidance', publisher: 'American Wood Council', url: 'https://awc.org/topic/decks/' },
      { id: 'kcmo-permits-screen', title: 'Building Permit Exempt Work', publisher: 'City of Kansas City, Missouri', url: 'https://www.kcmo.gov/city-hall/departments/city-planning-development/building-permit-exempt-work' },
    ],
    faqs: [
      { question: 'Can any existing deck be screened in?', answer: 'No. The existing structure, connections, condition, dimensions, and proposed roof and enclosure loads must be evaluated. Some decks can be adapted; others need structural work or replacement first.' },
      { question: 'Does a screened-in deck need a roof?', answer: 'A conventional screened outdoor room normally needs a roof to provide weather protection and a complete enclosure. If a roof is not already present, its support and connection become central parts of the project.' },
      { question: 'Can a screened porch use composite decking?', answer: 'Yes. Composite can work well in a screened room when the selected product, framing layout, ventilation, drainage, fastening, and finished-edge details are planned together.' },
      { question: 'How long does it take to convert a deck to a screened porch?', answer: 'Timing depends on design, approvals, material availability, existing conditions, roof and electrical scope, and inspection scheduling. A site-specific plan is more reliable than a generic timeline.' },
      { question: 'Do I need a permit for a screened-in deck in Kansas City?', answer: 'Often, but requirements depend on the exact city and project scope. A roof, enclosure, structural alteration, or electrical work may trigger review. Confirm current requirements with the authority serving the property.' },
      { question: 'Is a screened-in deck the same as a screened-in porch?', answer: 'Homeowners often use the terms interchangeably. The important distinction is the actual scope: an existing covered platform being screened, a deck receiving a new roof and enclosure, or a new room built from the ground up.' },
    ],
    relatedServiceSlugs: ['screened-in-decks', 'covered-decks', 'deck-replacement'],
    relatedProjectSlugs: ['screened-in-deck-addition', 'covered-deck-outdoor-room'],
    publishedAt: '2026-08-28',
    updatedAt: '2026-08-28',
  },
  {
    slug: 'composite-deck-cost-kansas-city',
    title: 'How Much Does a Composite Deck Cost in Kansas City?',
    shortTitle: 'Composite Deck Cost',
    metaTitle: 'Composite Deck Cost in Kansas City: Key Factors | DecksRXKC',
    metaDescription:
      'See which choices drive composite deck cost in Kansas City, from size and framing to Trex or TimberTech boards, railings, stairs, fascia, and access.',
    eyebrow: 'Composite deck cost guide',
    intro:
      'The most useful composite-deck budget begins with a complete project scope, because the boards are only one part of the finished deck.',
    answer:
      'Composite deck cost in Kansas City depends on whether the project is new, resurfaced, or fully replaced; the deck’s size, height, framing, access, stairs, railing, fascia, board line, demolition, and optional cover. A site-specific quote should identify every major component instead of relying on one generic square-foot number.',
    heroImage: '/images/kansas-city-composite-deck-cable-railing-stairs.jpg',
    sections: [
      {
        heading: 'Price the complete deck, not only the boards',
        body:
          'Online material prices can help compare board lines, but they do not describe an installed deck. Framing, footings, connectors, fasteners, blocking, stairs, guards, fascia, permits, removal, delivery, labor, and site access can represent a substantial share of the work.',
        paragraphs: [
          'Two decks with the same surface area may have very different scopes. A low platform on an open lot is not comparable to an elevated replacement with a long stair run, difficult material access, finished fascia, and premium railing. Ask for the assumptions behind any price before using it as a benchmark.',
          'A good DecksRXKC proposal connects the structural scope, selected products, visible finishes, access, and optional outdoor-room features so the homeowner can understand what the final number is designed to deliver.',
        ],
      },
      {
        heading: 'New build, resurface, or full replacement',
        body:
          'A new deck starts with a new footprint and complete structure. Resurfacing keeps an existing frame and replaces the walking surface and related finish components. Full replacement removes the old deck and rebuilds the complete system.',
        paragraphs: [
          'Resurfacing is not automatically the inexpensive answer. The frame must be suitable for the planned product, layout, fastener pattern, stairs, railing, and expected remaining service. Correcting spacing, flattening, decay, connections, or an awkward layout can narrow the difference between resurfacing and rebuilding.',
          'Replacement costs more than a surface swap but can solve problems the old frame preserves: poor stair placement, limited furniture space, inadequate structure, unfinished edges, or a footprint that no longer fits the household.',
        ],
      },
      {
        heading: 'Size, height, shape, and access drive labor',
        body:
          'Square footage matters, but perimeter, height, corners, board direction, breaker boards, picture framing, and stairs can increase cuts and detailing. Elevated decks also require more railing and a more involved path between the deck and yard.',
        paragraphs: [
          'Site access changes how old material leaves and new material arrives. Gates, landscaping, slopes, patios, utilities, and limited staging space affect the sequence. A quote based only on an aerial image cannot reliably account for those conditions.',
        ],
        points: ['Total surface area and perimeter', 'Deck elevation and stair run', 'Demolition and disposal', 'Material delivery and backyard access', 'Fascia, skirting, lighting, and finished edges'],
      },
      {
        heading: 'Trex and TimberTech prices vary by product line',
        body:
          'Trex and TimberTech each offer multiple collections with different colors, textures, profiles, performance features, and warranty terms. Comparing a value-focused collection from one brand with a premium collection from another does not answer which complete package is the better fit.',
        paragraphs: [
          'Choose physical samples in the actual sun and shade around the home. Then price the compatible fasteners, fascia, stair details, railing, and trim. Verify current installation and warranty documents for the exact product rather than assuming one statement applies to every board sold under the brand.',
          'Color can influence comfort in direct sun, while grain and variation influence how the surface relates to siding, masonry, and landscape. The right selection balances appearance with exposure, budget, maintenance expectations, and availability.',
        ],
        sourceIds: ['trex-faq-cost', 'timbertech-care-cost'],
      },
      {
        heading: 'Stairs, railing, and edges change the package',
        body:
          'A deck is seen from the yard as well as from above. Fascia, stair risers, stringer treatments, posts, railing, and transitions determine whether the finished project looks resolved. They also add material and labor that a surface-only price leaves out.',
        paragraphs: [
          'Decide whether the railing should preserve a view, create contrast, coordinate with the home, or reduce maintenance. Confirm how stairs meet the yard, whether a landing is included, and what happens around gates, patios, or grade changes. These are functional decisions with direct cost implications.',
        ],
      },
      {
        heading: 'Request comparable composite deck quotes',
        body:
          'Give each builder the same priorities, then compare written scopes line by line. The proposal should name the decking collection, color or allowance, fastening approach, frame work, rails, stairs, fascia, demolition, site assumptions, cleanup, and responsibility for plans and approvals.',
        paragraphs: [
          'Ask what is excluded, how concealed conditions will be handled, and how changes are approved. A lower headline number may omit components another quote includes. The goal is not identical formatting; it is enough clarity to understand the finished result and the risks carried by each scope.',
          'DecksRXKC can compare new construction, resurfacing, and replacement options after seeing the deck and discussing how the space needs to work.',
        ],
      },
    ],
    sources: [
      { id: 'trex-faq-cost', title: 'Composite Decking and Railing FAQs', publisher: 'Trex', url: 'https://www.trex.com/why-trex/faq/' },
      { id: 'timbertech-care-cost', title: 'Care and Cleaning for Decking and Railing', publisher: 'TimberTech', url: 'https://www.timbertech.com/resources/care-cleaning/' },
      { id: 'awc-decks-cost', title: 'Residential Deck Resources', publisher: 'American Wood Council', url: 'https://awc.org/topic/decks/' },
    ],
    faqs: [
      { question: 'What is the biggest cost driver for a composite deck?', answer: 'There is no single driver for every project. Size, height, framing, site access, demolition, product line, stairs, railing, fascia, and optional roof or screen work combine to determine the scope.' },
      { question: 'Is composite decking more expensive than wood?', answer: 'Composite commonly has a higher initial material cost than pressure-treated wood, while reducing routine staining and sealing. Compare the complete installed package and realistic maintenance over the period you expect to own the deck.' },
      { question: 'Can composite boards be installed on an old deck frame?', answer: 'Sometimes. The frame should be evaluated for condition, spacing, layout, connections, flatness, ventilation, and compatibility with the selected manufacturer’s instructions before resurfacing.' },
      { question: 'Is Trex or TimberTech more expensive?', answer: 'Both brands offer several product lines, so price depends on the specific collections and complete installed details being compared. Compare like-for-like samples, requirements, railing, fascia, and warranty terms.' },
      { question: 'How do I get an accurate composite deck estimate?', answer: 'Request an on-site assessment and a written scope naming the product line, structural work, stairs, rails, fascia, demolition, access assumptions, approvals, cleanup, exclusions, and change process.' },
    ],
    relatedServiceSlugs: ['composite-decks', 'deck-replacement', 'custom-decks'],
    relatedProjectSlugs: ['elevated-composite-deck-and-stairs', 'ground-up-deck-replacement'],
    publishedAt: '2026-08-28',
    updatedAt: '2026-08-28',
  },
  {
    slug: 'add-roof-over-existing-deck',
    title: 'Can You Add a Roof Over an Existing Deck?',
    shortTitle: 'Add a Roof Over a Deck',
    metaTitle: 'Can You Add a Roof Over an Existing Deck? | DecksRXKC',
    metaDescription:
      'Learn what must be checked before adding a roof over a deck, including footings, framing, house connections, drainage, ceiling plans, fans, and screens.',
    eyebrow: 'Covered deck guide',
    intro:
      'A roof can turn an exposed deck into a more dependable outdoor room, but the existing deck was not automatically built to support that new load.',
    answer:
      'A roof can sometimes be added over an existing deck after the deck, footings, framing, connections, house conditions, and proposed roof loads are evaluated. Depending on what the assessment finds, the project may reuse part of the deck, add structural support, use an independent roof system, or rebuild the deck and cover together.',
    heroImage: '/images/kansas-city-covered-deck-framing-addition.jpg',
    sections: [
      {
        heading: 'A deck roof changes the structural question',
        body:
          'An open deck primarily supports people, furniture, and normal environmental loads. A roof introduces its own framing, connections, dead load, wind exposure, and Kansas City snow and weather demands. Those forces need a continuous path to suitable supports and ground conditions.',
        paragraphs: [
          'A visual walk-through should consider the footings, posts, beams, joists, ledger, lateral stability, and visible deterioration. The proposed roof size, shape, post positions, and connection to the home then determine whether existing components can reasonably participate in the new system.',
          'The American Wood Council DCA 6 guide addresses conventional single-level wood decks within stated limits. A covered deck may require project-specific design beyond that prescriptive guide, with the local building official having final authority.',
        ],
        sourceIds: ['awc-roof'],
      },
      {
        heading: 'Reuse, reinforce, separate, or rebuild',
        body:
          'There are several possible outcomes after evaluation. A suitable deck may support a coordinated roof design. Other projects may need new footings or posts positioned specifically for the cover. A roof can sometimes be designed with support independent from portions of the deck.',
        paragraphs: [
          'When the existing deck is aging, poorly laid out, or incompatible with the desired room, replacement can be the clearer path. Rebuilding lets the footprint, roof supports, stairs, railing, open zone, and covered zone be planned together instead of working around old limitations.',
          'The proposal should make clear which components are being retained and why. Reuse should be based on condition and suitability, not simply on what is easiest to leave in place.',
        ],
      },
      {
        heading: 'Attached and freestanding covers solve different constraints',
        body:
          'An attached cover relates directly to the home’s wall or roof conditions. Windows, doors, eaves, roof valleys, siding, masonry, and interior sightlines can all influence the available connection and roof pitch.',
        paragraphs: [
          'A freestanding or independently supported cover may avoid some attachment constraints, but it still requires a complete structural and drainage plan. “Freestanding” does not mean unregulated or unconnected to the rest of the project. Post locations also affect furniture, views, railings, and movement around the deck.',
          'Rather than choosing an approach from a photo, begin with the house, target footprint, preferred ceiling height, daylight, and water path. Those conditions narrow the practical options.',
        ],
      },
      {
        heading: 'Roof shape affects light, height, and character',
        body:
          'Shed and gable forms can both create useful covered space, but they produce different ceiling volumes, daylight patterns, exterior proportions, and connection details. The best fit depends on the home and the part of the deck being covered.',
        paragraphs: [
          'A lower roof may protect the deck while darkening nearby windows or feeling compressed. A taller or vaulted form can feel open but may increase structural and finish complexity. Study the cover from important rooms inside the home as well as from the yard.',
        ],
        points: ['Headroom and finished ceiling height', 'Daylight at adjacent windows and doors', 'Post placement and furniture zones', 'Relationship to the existing roof and exterior'],
      },
      {
        heading: 'Design the water path before the ceiling',
        body:
          'Pitch, roofing, flashing, valleys, gutters, downspouts, and discharge points protect more than the furniture. They help manage water around the house connection, deck structure, stairs, footings, patios, and landscape.',
        paragraphs: [
          'A finished ceiling can conceal wiring and create a polished room, but it should not obscure unresolved drainage or eliminate necessary access. Fan-rated boxes, lighting, outlets, switching, and future screen plans should be coordinated before the ceiling package is finalized.',
          'Kansas City, Missouri, generally requires permits for additions and structural alterations, while limited low open decks may qualify for an exemption. Rules vary across the metro, so use the exact jurisdiction’s current guidance for the property.',
        ],
        sourceIds: ['kcmo-roof'],
      },
      {
        heading: 'Compare the whole covered-deck scope',
        body:
          'Cost and schedule are shaped by structural work, roof form, size, height, house connection, access, demolition, roofing, gutters, ceiling, electrical work, fans, lighting, railing, stairs, finishes, and optional screening. A roof-only allowance may omit much of the outdoor room shown in an inspiration image.',
        paragraphs: [
          'Ask for a written description of structure, roofing, water management, visible finishes, electrical assumptions, approvals, cleanup, and exclusions. Confirm whether the open portion of the deck is changing and whether the design preserves a practical grill route and yard access.',
          'DecksRXKC can assess an existing deck and develop a covered-deck direction that fits the home, desired use, and complete project scope.',
        ],
      },
    ],
    sources: [
      { id: 'awc-roof', title: 'Prescriptive Residential Wood Deck Construction Guide (DCA 6)', publisher: 'American Wood Council', url: 'https://awc.org/wp-content/uploads/2022/02/AWC-DCA62015-DeckGuide-1804.pdf' },
      { id: 'kcmo-roof', title: 'Development Process Guide and Residential Permits', publisher: 'City of Kansas City, Missouri', url: 'https://www.kcmo.gov/city-hall/departments/city-planning-development/development-management/development-guide' },
    ],
    faqs: [
      { question: 'Can my existing deck support a roof?', answer: 'Possibly, but that should be determined through an evaluation of the deck, supports, connections, condition, house, and proposed roof. An open deck should not be assumed to be roof-ready.' },
      { question: 'Does a covered deck need new footings?', answer: 'Sometimes. The answer depends on the existing footings, roof design, support locations, loads, site conditions, and local requirements. New or dedicated roof supports may be part of the design.' },
      { question: 'Is an attached or freestanding deck roof better?', answer: 'Neither is universally better. Existing rooflines, walls, openings, desired footprint, post locations, water management, and structural strategy determine the better direction.' },
      { question: 'Can a covered deck be screened in later?', answer: 'Often, but future screening is easier when opening sizes, rails, doors, trim, electrical work, airflow, and furniture paths are considered during the covered-deck design.' },
      { question: 'Do I need a permit to put a roof over a deck?', answer: 'A roof commonly triggers permit and plan review, but requirements vary by jurisdiction and scope. Confirm current rules with the city or county serving the property.' },
      { question: 'How much does adding a roof to a deck cost?', answer: 'The cost depends on structural work, roof size and form, connection, roofing, drainage, ceiling, electrical features, access, finishes, and whether the deck also needs repair or replacement. An on-site scope is needed for a useful estimate.' },
    ],
    relatedServiceSlugs: ['covered-decks', 'screened-in-decks', 'deck-replacement'],
    relatedProjectSlugs: ['covered-deck-outdoor-room', 'screened-in-deck-addition'],
    publishedAt: '2026-08-28',
    updatedAt: '2026-08-28',
  },
  {
    slug: 'trex-vs-timbertech-kansas-city',
    title: 'Trex vs. TimberTech for Kansas City Decks',
    shortTitle: 'Trex vs. TimberTech',
    metaTitle: 'Trex vs. TimberTech for Kansas City Decks | DecksRXKC',
    metaDescription:
      'Compare Trex and TimberTech decking by appearance, product range, heat, care, warranty, and installed details to choose a fit for your Kansas City deck.',
    eyebrow: 'Composite brand comparison',
    intro:
      'Trex and TimberTech both offer credible low-maintenance decking, but the useful comparison happens between specific product lines and complete deck details—not brand names alone.',
    answer:
      'Neither Trex nor TimberTech is best for every Kansas City deck. Compare the specific collections by color, texture, board construction, sun exposure, care instructions, current warranty terms, price, availability, and how the decking coordinates with stairs, railings, fascia, and the existing or new frame.',
    heroImage: '/images/kansas-city-composite-deck-board-railing-detail.jpg',
    sections: [
      {
        heading: 'Compare product lines instead of logos',
        body:
          'Both manufacturers sell more than one decking collection. Entry, midrange, and premium lines can differ in appearance, board construction, color variation, performance features, and warranty coverage. A brand-level verdict hides the choices that actually affect the project.',
        paragraphs: [
          'Begin with the products DecksRXKC can source and install for the project. Put similarly positioned collections beside one another, then compare the complete installed packages. A premium board paired with simplified edges and rails may not deliver the same result as a coordinated midrange package.',
          'Manufacturer offerings and terms change. Confirm current specifications, installation instructions, care information, and warranty documents for the exact collection and color before purchase.',
        ],
        sourceIds: ['trex-brand-faq', 'timbertech-brand-care'],
      },
      {
        heading: 'Appearance is more than a color name',
        body:
          'Grain pattern, embossing, sheen, variation, board width, and the way seams are handled all influence the finished surface. A sample that looks neutral indoors may appear warmer, cooler, lighter, or more varied beside the home exterior.',
        paragraphs: [
          'View full-size samples outdoors in morning light, afternoon sun, and shade. Place them near siding, masonry, roofing, doors, and planned railing colors. Consider how picture framing, breaker boards, fascia, stairs, and fastener visibility will change the composition.',
          'If a natural-wood appearance matters, compare several boards rather than one small chip. Variation becomes clearer across a larger area and can be either a feature or a distraction depending on the home.',
        ],
      },
      {
        heading: 'Plan for Kansas City sun and surface comfort',
        body:
          'Every outdoor surface can warm in direct sun. Product, color, exposure, airflow, time of day, and weather influence how the deck feels. Darker samples often deserve especially careful testing where bare feet, children, or pets will use the deck in afternoon sun.',
        paragraphs: [
          'Do not rely on a universal “coolest brand” claim. Compare the exact colors under conditions similar to the project. Shade from the house, trees, a future roof, or an umbrella can matter as much to everyday comfort as the brand choice.',
          'A covered and open combination can create dependable shade while retaining an area for grilling or sun. If a future cover is likely, plan the structure and deck layout before the surface details are finalized.',
        ],
      },
      {
        heading: 'Care, scratches, moisture, and normal use',
        body:
          'Composite decking reduces the recurring staining and sealing associated with many wood decks, but it is not maintenance-free or damage-proof. Dirt, pollen, food, leaves, snow, furniture, and grill use still call for sensible care.',
        paragraphs: [
          'Follow the current manufacturer instructions for cleaning products, tools, pressure, snow removal, mats, and stain treatment. Test furniture feet and protect high-friction areas rather than assuming every mark can be refinished like wood.',
          'Good installation supports performance. Drainage, ventilation, framing layout, fasteners, gaps, edge details, and the condition of any reused structure all need attention.',
        ],
        sourceIds: ['trex-brand-care', 'timbertech-brand-care'],
      },
      {
        heading: 'Read warranties at the product-line level',
        body:
          'Warranty length is only the headline. Homeowners should understand what is covered, which exclusions apply, whether coverage changes over time, what registration or proof may be needed, and how labor differs from product replacement.',
        paragraphs: [
          'Use the current written warranty for the exact product rather than a salesperson’s summary or an old comparison chart. Installation must follow current instructions, and care or site conditions can affect a claim. Ask who the homeowner contacts and what documentation will be provided at project closeout.',
          'DecksRXKC should describe its own workmanship responsibility separately from the manufacturer’s product warranty so the two are not confused.',
        ],
        sourceIds: ['trex-brand-faq'],
      },
      {
        heading: 'Choose the complete system for your home',
        body:
          'The final decision should connect decking to framing, stairs, railing, fascia, lighting, shade, maintenance, budget, and the way the space will be used. Brand preference is one input, not the whole design.',
        paragraphs: [
          'Bring photos of the home and measure major furniture before the consultation. Identify the strongest sun, the normal path to the yard, and areas where a grill, gate, or stair opening will interrupt the surface. Then compare physical Trex and TimberTech samples within that real plan.',
          'DecksRXKC installs Trex and TimberTech options and can explain how available collections fit the proposed deck, replacement, or covered outdoor room.',
        ],
      },
    ],
    sources: [
      { id: 'trex-brand-faq', title: 'Trex Composite Decking and Railing FAQs', publisher: 'Trex', url: 'https://www.trex.com/why-trex/faq/' },
      { id: 'trex-brand-care', title: 'Trex Care and Cleaning', publisher: 'Trex', url: 'https://www.trex.com/customer-support/trex-owners/care-and-cleaning/' },
      { id: 'timbertech-brand-care', title: 'TimberTech Care and Cleaning', publisher: 'TimberTech', url: 'https://www.timbertech.com/resources/care-cleaning/' },
    ],
    faqs: [
      { question: 'Is Trex or TimberTech better?', answer: 'Neither is best for every project. Compare specific collections by appearance, construction, exposure, care, current warranty terms, availability, price, and the details of the complete deck.' },
      { question: 'Which composite decking stays cooler?', answer: 'Surface temperature varies by exact product, color, exposure, airflow, and weather. Compare physical samples in direct sun similar to the project rather than relying on a brand-wide claim.' },
      { question: 'Which composite brand looks most like wood?', answer: 'That is a visual preference and varies by collection. Compare multiple full-size boards outdoors for grain, color variation, sheen, seams, and compatibility with the home.' },
      { question: 'Can Trex or TimberTech be installed on an existing frame?', answer: 'Sometimes. The frame must be assessed for condition, spacing, layout, flatness, ventilation, connections, and compliance with the current instructions for the selected product.' },
      { question: 'How long does composite decking last?', answer: 'Service life depends on the exact product, installation, exposure, use, and care. Review the current product warranty and maintenance instructions, but do not treat warranty length as a guaranteed service-life prediction.' },
      { question: 'Does DecksRXKC install both Trex and TimberTech?', answer: 'Yes. DecksRXKC can compare available Trex and TimberTech options alongside the complete structure, railing, stairs, fascia, and outdoor-room plan.' },
    ],
    relatedServiceSlugs: ['composite-decks', 'custom-decks', 'deck-replacement'],
    relatedProjectSlugs: ['elevated-composite-deck-and-stairs', 'covered-deck-outdoor-room'],
    publishedAt: '2026-08-28',
    updatedAt: '2026-08-28',
  },
  {
    slug: 'choose-deck-builder-kansas-city',
    title: 'How to Choose a Deck Builder Near You in Kansas City',
    shortTitle: 'Choose a Deck Builder',
    metaTitle: 'Choose a Deck Builder Near You in Kansas City | DecksRXKC',
    metaDescription:
      'Compare Kansas City deck builders using scope, materials, permits, proof, communication, warranties, cleanup, and change-order questions before you hire.',
    eyebrow: 'Deck contractor checklist',
    intro:
      'A useful “deck builder near me” search should end with comparable scopes, relevant proof, verified facts, and a team that can explain how the project will be delivered.',
    answer:
      'Choose a Kansas City deck builder by comparing relevant completed work, complete written scopes, exact materials, current local requirements, communication, cleanup, change procedures, and clearly separated workmanship and manufacturer warranties. The lowest number is meaningful only when it describes the same finished result.',
    heroImage: '/images/kansas-city-custom-deck-builder.jpg',
    sections: [
      {
        heading: 'Match the builder to the project type',
        body:
          'Start by defining whether you need a new custom deck, repair, replacement, composite resurfacing, stairs, railing, a roof, or a screened room. A builder’s strongest proof should resemble the structural and finish complexity of your project.',
        paragraphs: [
          'A broad gallery can show craftsmanship, but a useful case study explains the starting condition, homeowner goal, material choices, constraints, scope, and result. For a covered or screened room, look for roof, drainage, ceiling, electrical, door, and enclosure details—not only attractive furniture.',
          'DecksRXKC organizes its work by service and project so homeowners can follow the path from a planning question to a relevant completed example.',
        ],
      },
      {
        heading: 'Compare a complete written scope',
        body:
          'A proposal should make the footprint, structure, surface, rails, stairs, fascia, demolition, site access, cleanup, and visible finish details understandable. If key components are allowances or exclusions, they should be easy to identify.',
        paragraphs: [
          'Ask whether the quote assumes existing framing or footings can be reused, and what happens if removal reveals a different condition. Confirm product collection and color, fastening approach, railing system, stair and landing details, skirting or fascia, and responsibility for electrical or roofing trades.',
          'The goal is not the longest contract. It is a scope specific enough that two proposals can be compared and the homeowner can recognize when a requested change affects cost or schedule.',
        ],
        points: ['Exact project footprint and retained components', 'Named material collections or clear allowances', 'Stairs, guards, fascia, removal, and cleanup', 'Exclusions, assumptions, and change approval process'],
      },
      {
        heading: 'Verify permits and business facts locally',
        body:
          'Kansas City is a metro of many jurisdictions. Permit, plan, survey, setback, inspection, and contractor requirements can differ between cities and counties. A statement that is correct in Kansas City, Missouri, should not automatically be applied to Overland Park, Lenexa, Lee’s Summit, or another community.',
        paragraphs: [
          'Ask who will identify the authority serving the property, prepare required information, submit documents, respond to comments, schedule inspections, and keep records. Verify licenses, registrations, insurance, certifications, and manufacturer relationships directly rather than relying on a logo or an unsupported “approved” claim.',
          'Kansas City, Missouri’s official permitting pages explain that permits are required for most construction while listing limited exemptions. Use the current official page for the exact jurisdiction and scope.',
        ],
        sourceIds: ['kcmo-builder-permits'],
      },
      {
        heading: 'Look for details that reveal project thinking',
        body:
          'Good deck planning connects doors, furniture, grilling, views, shade, stairs, landings, gates, grade, patios, utilities, drainage, and maintenance. Ask why the proposed footprint and stair route are right for the site instead of accepting the old layout by default.',
        paragraphs: [
          'For composite work, ask how the builder handles framing compatibility, board direction, seams, breaker boards, picture framing, fasteners, fascia, and stairs. For a covered deck, ask about roof support, house connection, water path, ceiling, fans, lighting, and future screens.',
          'The American Wood Council’s deck resources are useful background for conventional deck components and connections, while the local authority and project design govern the actual work.',
        ],
        sourceIds: ['awc-builder'],
      },
      {
        heading: 'Understand communication, changes, and cleanup',
        body:
          'Before signing, know who your primary contact will be, how questions are handled, what normal work hours look like, where materials will be staged, and how the yard and access route will be managed.',
        paragraphs: [
          'Construction can reveal concealed conditions or inspire owner-requested changes. Ask how the team documents a changed scope, price, and schedule before proceeding. Verbal assumptions are difficult to reconstruct later.',
          'Clarify daily cleanup, final debris removal, protection of landscaping and patios, inspection closeout, product documentation, and the final walk-through. These operational details have a large effect on the homeowner experience.',
        ],
      },
      {
        heading: 'Use twelve questions before you hire',
        body:
          'A short, consistent interview makes estimates easier to compare. Listen for specific explanations tied to your property rather than rehearsed claims about being the best deck company near you.',
        points: [
          'Which similar projects can I review?',
          'What does this scope include and exclude?',
          'Which existing components are assumed reusable?',
          'Which exact products and finish details are included?',
          'Who handles plans, permits, and inspections?',
          'How are concealed conditions and changes approved?',
          'Who is my day-to-day contact?',
          'How will access, staging, and landscaping be handled?',
          'What is the cleanup and closeout process?',
          'What manufacturer documents will I receive?',
          'What workmanship responsibility is provided in writing?',
          'Which schedule assumptions could change the timeline?',
        ],
        paragraphs: [
          'DecksRXKC provides custom decks, repairs, replacements, composite options, covered and screened spaces, stairs, and railings across the Kansas City metro. A project-specific conversation is the best next step when you are ready to compare a real scope.',
        ],
      },
    ],
    sources: [
      { id: 'kcmo-builder-permits', title: 'Permits Division', publisher: 'City of Kansas City, Missouri', url: 'https://www.kcmo.gov/city-hall/departments/city-planning-development/permits-division/' },
      { id: 'awc-builder', title: 'Residential Deck Resources', publisher: 'American Wood Council', url: 'https://awc.org/topic/decks/' },
    ],
    faqs: [
      { question: 'How do I find a reputable deck builder near me?', answer: 'Define the project, review similar completed work, verify business facts, compare complete written scopes, check current local requirements, read review patterns, and ask how communication, changes, cleanup, and warranties are handled.' },
      { question: 'What should be included in a deck quote?', answer: 'The quote should describe the footprint, structure, decking, stairs, rails, fascia, demolition, access, cleanup, exact products or allowances, approvals, assumptions, exclusions, payment structure, and change process.' },
      { question: 'How many deck estimates should I get?', answer: 'There is no mandatory number. Get enough qualified proposals to understand the available approaches and market, then compare the same scope rather than choosing solely by headline price.' },
      { question: 'Who handles deck permits in Kansas City?', answer: 'Responsibility should be stated in the proposal. Requirements vary across metro jurisdictions, so confirm who identifies the authority, prepares documents, submits, responds to comments, and schedules inspections.' },
      { question: 'What should I ask a composite or covered-deck contractor?', answer: 'For composite, ask about the exact collection, frame compatibility, fasteners, seams, fascia, stairs, care, and warranty documents. For covers, ask about supports, roof connection, water management, ceiling, electrical work, and future screening.' },
      { question: 'Is the lowest deck estimate the best value?', answer: 'Not necessarily. A lower estimate may reflect an efficient approach, but it may also omit structure, finishes, approvals, cleanup, or risk carried elsewhere. Compare the complete outcome and written assumptions.' },
    ],
    relatedServiceSlugs: ['custom-decks', 'composite-decks', 'covered-decks'],
    relatedProjectSlugs: ['ground-up-deck-replacement', 'covered-deck-outdoor-room'],
    publishedAt: '2026-08-28',
    updatedAt: '2026-08-28',
  },
  {
    slug: 'build-deck-in-fall-kansas-city',
    title: 'Can You Build a Deck in Fall in Kansas City?',
    shortTitle: 'Build a Deck in Fall',
    metaTitle: 'Build a Deck in Fall in Kansas City? | DecksRXKC',
    metaDescription:
      'Learn how fall weather, design, permits, materials, and contractor scheduling affect Kansas City deck projects—and when to start planning for spring.',
    eyebrow: 'Seasonal deck planning guide',
    intro:
      'Early fall can be a practical time to build or begin planning a Kansas City deck, but the calendar alone does not determine whether a project is ready to start.',
    answer:
      'Yes, a deck can often be built during fall in Kansas City. Whether construction should begin now depends on the design, permit requirements, footing and site conditions, product instructions, weather, and builder availability. Even when immediate construction is impractical, fall is a useful time to assess the property and prepare a complete spring project.',
    heroImage: '/images/kansas-city-large-backyard-deck-build.jpg',
    sections: [
      {
        heading: 'Fall can work, but project readiness matters more than the month',
        body:
          'A September or October start is not automatically too late. Deck work can move forward when the design is resolved, required approvals are available, the site can be accessed safely, materials are ready, and forecast conditions suit the work being performed. The same season can be a good construction window for one project and a planning window for another.',
        paragraphs: [
          'A straightforward open deck on a clear site may have fewer preconstruction decisions than a roofed or screened outdoor room. Replacing an existing deck can also reveal framing, footing, attachment, concrete, or access conditions that were not visible during the first conversation. Those variables matter more than a generic claim that fall is always faster or easier.',
          'The useful question is not simply “Can a deck be built this fall?” It is “Can this deck be designed, approved, supplied, and built responsibly within the available conditions?” A project-specific answer protects the homeowner from a schedule based on wishful assumptions.',
        ],
      },
      {
        heading: 'Kansas City fall weather is workable and changeable',
        body:
          'Kansas City normally moves from warm early-September days toward cooler October and November conditions. The National Weather Service climate normals show the seasonal decline in average temperatures as well as continuing precipitation, while historical records show that individual days can fall well outside the average.',
        paragraphs: [
          'A normal monthly temperature is planning context, not a construction guarantee. Rain can affect excavation, concrete work, material handling, yard access, and inspection timing. Heat can still influence early-fall work, while shorter daylight and colder overnight temperatures become more relevant later in the season.',
          'A responsible schedule includes weather flexibility. Homeowners should ask which activities are most sensitive to rain, temperature, wet soil, or frozen ground; how the crew protects exposed work and stored materials; and how delays will be communicated. Avoid any promise that a particular fall week will behave like the historical average.',
        ],
        points: ['Review the forecast around weather-sensitive work', 'Protect stored materials according to product requirements', 'Plan access when soil or turf is wet', 'Allow flexibility for inspections and weather delays'],
        sourceIds: ['nws-fall-normals'],
      },
      {
        heading: 'Decide whether to build now or prepare for spring',
        body:
          'Building this fall may be practical when the scope is clear, the site has been assessed, selections are settled, approvals can be obtained, and the required products and trades fit the schedule. Starting now should mean the project is ready—not that decisions will be improvised after demolition.',
        paragraphs: [
          'Planning now for a spring build is often the stronger choice when the footprint is unresolved, an existing structure needs deeper evaluation, multiple material packages are being compared, or the project includes a roof, screens, electrical work, drainage, or major site coordination. Those decisions benefit from time and should not be compressed only to meet a seasonal target.',
          'Fall planning can include a site visit, furniture and circulation layout, stair-direction study, physical material samples, preliminary scope, permit research, and budget alignment. Completing that work before peak outdoor-living season gives the homeowner a more developed project rather than merely an earlier place in a queue.',
        ],
        points: ['Build now: scope, site, approvals, products, and schedule are aligned', 'Plan now: major layout, structural, material, or outdoor-room decisions remain', 'Either path: document assumptions and weather contingencies in writing'],
      },
      {
        heading: 'Material choices still require product-specific planning',
        body:
          'Wood and composite decks can both be built during cooler parts of the year when site conditions and manufacturer requirements are respected. The important details are the exact products, how they are stored and handled, the framing layout, fastening, spacing, drainage, and the weather during each installation step.',
        paragraphs: [
          'Composite boards change dimension with temperature, and each manufacturer publishes installation requirements for its products. The selected Trex or TimberTech collection should be planned from current instructions rather than a generic rule remembered from another brand or season. Board direction, seams, breaker boards, picture framing, fascia, stairs, and fasteners should be resolved as part of the complete system.',
          'Wood decking introduces its own moisture and finishing considerations. The construction schedule and the staining or sealing schedule may not be the same. Product condition, weather, exposure, and the chosen finish manufacturer’s instructions should determine when finishing is appropriate instead of a fixed calendar promise.',
        ],
        sourceIds: ['trex-fall-installation', 'timbertech-fall-installation'],
      },
      {
        heading: 'Permits and jurisdiction can shape the start date',
        body:
          'The Kansas City metro includes many cities and counties with different application, plan, survey, setback, licensing, and inspection requirements. A timeline based on Kansas City, Missouri, should not automatically be applied to Overland Park, Lenexa, Olathe, Lee’s Summit, or another jurisdiction.',
        paragraphs: [
          'Kansas City, Missouri, states that permits are required for most building work and lists limited exceptions, including certain low open decks. A roof, enclosure, structural alteration, electrical scope, property condition, or different location can change what is required. The authority serving the exact property should answer the final question.',
          'Before setting a construction date, confirm who identifies the jurisdiction, prepares drawings or site information, submits the application, responds to review comments, schedules inspections, and keeps the final records. Permit work should be part of the project plan rather than an administrative detail discovered after materials arrive.',
        ],
        sourceIds: ['kcmo-fall-permits'],
      },
      {
        heading: 'Use fall to solve the layout before construction',
        body:
          'A strong deck plan begins with how the household moves between the home, deck, stairs, patio, gates, and yard. Measure dining and conversation furniture, protect clear walking routes, and decide where grilling belongs before choosing the final footprint.',
        paragraphs: [
          'Fall can also reveal comfort issues that summer planning overlooks. Lower sun angles, leaf drop, wind exposure, drainage patterns, privacy, and the view from interior rooms can influence railing, stair, roof, and screen decisions. Observe the yard at the times of day the deck will be used most.',
          'If a future cover or screened room is likely, discuss it while the structure and layout are still flexible. Roof supports, post locations, openings, drainage, ceiling height, lighting, fans, doors, and furniture circulation are easier to coordinate before the base deck is built.',
        ],
        points: ['Furniture dimensions and walking clearances', 'Doors, stairs, gates, patios, and grade', 'Sun, shade, wind, drainage, and privacy', 'Possible future roof, screens, lighting, or fan'],
      },
      {
        heading: 'Ask how the builder handles a seasonal schedule',
        body:
          'A useful fall proposal explains more than a hoped-for completion date. Ask which milestones depend on design approval, permits, material availability, weather, inspections, or other trades. Understand what happens if work begins in fall and conditions delay part of the project.',
        paragraphs: [
          'The written scope should name retained and new structural components, decking, railing, stairs, fascia, demolition, site access, cleanup, products or allowances, exclusions, and the process for concealed conditions or homeowner-requested changes. Clarify how the yard, patio, doors, and stored materials will be protected throughout the work.',
          'DecksRXKC can assess whether a fall build is practical for the actual property or use the season to prepare a clear spring project. The best next step is a site-specific conversation about the deck, not a commitment based only on the date.',
        ],
        points: ['Which milestones are weather-sensitive?', 'How are delays and schedule changes communicated?', 'How will materials and the property be protected?', 'What must happen before construction can begin?', 'What remains if the project crosses into colder weather?'],
      },
    ],
    sources: [
      {
        id: 'nws-fall-normals',
        title: 'Kansas City Climate Normals',
        publisher: 'National Weather Service',
        url: 'https://www.weather.gov/eax/eaxclinormals',
      },
      {
        id: 'kcmo-fall-permits',
        title: 'Building Permit Exempt Work',
        publisher: 'City of Kansas City, Missouri',
        url: 'https://www.kcmo.gov/city-hall/departments/city-planning-development/building-permit-exempt-work',
      },
      {
        id: 'trex-fall-installation',
        title: 'Trex Installation Resources',
        publisher: 'Trex',
        url: 'https://www.trex.com/academy/literature-and-faqs/',
      },
      {
        id: 'timbertech-fall-installation',
        title: 'TimberTech Installation Help',
        publisher: 'TimberTech',
        url: 'https://www.timbertech.com/resources/installation-guides/',
      },
    ],
    faqs: [
      {
        question: 'Is fall a good time to build a deck in Kansas City?',
        answer:
          'It can be. A fall build is most practical when the design, approvals, products, site conditions, weather plan, and builder schedule are aligned. The answer should be based on the actual project rather than the month alone.',
      },
      {
        question: 'How cold is too cold to build a deck?',
        answer:
          'There is no single temperature for every deck activity or product. Excavation, concrete, adhesives, finishes, composite installation, and worker safety have different requirements. Follow the project design, current product instructions, forecast, and local requirements.',
      },
      {
        question: 'Can deck footings be installed during winter?',
        answer:
          'Sometimes, depending on ground conditions, design, concrete requirements, weather, access, and local inspection rules. Frozen or saturated conditions can change the approach and schedule, so footing work needs project-specific planning.',
      },
      {
        question: 'Can composite decking be installed in cold weather?',
        answer:
          'Composite decking can often be installed in cooler weather when the exact manufacturer’s temperature-related spacing, fastening, storage, and handling instructions are followed. Confirm the current guidance for the selected product line.',
      },
      {
        question: 'Should I contact a deck builder in fall for a spring project?',
        answer:
          'Yes. Fall planning creates time to assess the site, compare layouts and materials, resolve roof or screen options, research approvals, and develop a complete written scope before the desired construction window.',
      },
      {
        question: 'Do Kansas City deck projects require permits?',
        answer:
          'Many do, but requirements depend on the exact jurisdiction, deck height and location, structural scope, roof or enclosure, electrical work, and other property conditions. Confirm current requirements with the city or county serving the property.',
      },
    ],
    relatedServiceSlugs: ['custom-decks', 'composite-decks', 'covered-decks'],
    relatedProjectSlugs: ['ground-up-deck-replacement', 'covered-deck-outdoor-room'],
    publishedAt: '2026-09-03',
    updatedAt: '2026-09-03',
  },
]

export function getGuidePage(slug: string) {
  return guidePages.find((guide) => guide.slug === slug)
}

export { getGuidePagePath } from './paths'

export function getGuidesBySlugs(slugs: string[]) {
  return slugs.flatMap((slug) => {
    const guide = getGuidePage(slug)
    return guide ? [guide] : []
  })
}
