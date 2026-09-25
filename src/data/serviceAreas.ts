export type ServiceArea = {
  city: string
  state: 'KS' | 'MO'
  slug: string
  county: string
  image: string
  metaTitle?: string
  metaDescription?: string
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
    decisionGuide?: {
      eyebrow: string
      title: string
      body: string
      points: string[]
    }
    faqs: Array<{ question: string; answer: string }>
    projectSlugs: string[]
    guideSlugs?: string[]
  }
}

export const serviceAreas: ServiceArea[] = [
  {
    city: 'Kansas City',
    state: 'MO',
    slug: 'kansas-city-mo',
    county: 'Jackson, Clay, Platte, and Cass Counties',
    image: '/images/kansas-city-custom-deck-builder.jpg',
    metaTitle: 'Kansas City MO Deck Builder & Repair | DecksRXKC',
    metaDescription: 'Plan a custom deck, repair, replacement, stairs, or railings in Kansas City, MO with useful local guidance and real DecksRXKC project proof.',
    nearby: ['Brookside', 'Waldo', 'Northland'],
    localNote:
      'Kansas City homes often need decks that handle summer heat, winter freeze-thaw cycles, and tight backyard layouts without feeling generic.',
    projectTypes: ['custom decks', 'deck repair', 'deck replacement', 'stairs and railings'],
    priorityContent: {
      intro:
        'Deck projects across Kansas City, Missouri rarely begin with the same conditions. An older Brookside or Waldo yard may call for a compact footprint and a better stair route, while a Northland property may have room for an elevated deck, a covered zone, or a larger connection between the house and yard. The useful first step is to define what the current space does poorly before choosing materials or repeating an old layout.',
      serviceFocus: [
        { serviceSlug: 'custom-decks', title: 'Custom deck building', copy: 'Plan the footprint around doors, grade, furniture, grilling, views, and the route between the house and yard instead of starting with a standard platform.' },
        { serviceSlug: 'deck-repair', title: 'Deck repair and assessment', copy: 'Look beyond a worn board to the nearby framing, stairs, railings, connections, and visible conditions before defining a focused repair.' },
        { serviceSlug: 'deck-replacement', title: 'Deck replacement', copy: 'Use a rebuild to correct an aging structure, awkward access, limited gathering space, or a material package that no longer fits the home.' },
        { serviceSlug: 'stairs-and-railings', title: 'Stairs and railings', copy: 'Coordinate the stair run, landing, handrail, guard, and deck connection around grade, patios, gates, and normal backyard traffic.' },
      ],
      planningNotes: [
        'Measure furniture and circulation before committing to the deck footprint or stair opening.',
        'Compare repair with replacement when concerns extend beyond one isolated component.',
        'Review wood and composite samples in the sun and shade the finished deck will receive.',
        'Plan a future cover, screen room, or lighting package while the structure and layout are still flexible.',
      ],
      decisionGuide: {
        eyebrow: 'Repair or Replace',
        title: 'Start with the whole deck—not the first worn board',
        body:
          'A focused repair can be practical when the concern is isolated and the surrounding deck remains appropriate for the work. Replacement becomes worth comparing when movement, soft components, repeated repairs, loose rails, stair concerns, or an unsuccessful layout affect several parts of the system. A clear scope should explain what the proposed work addresses, what remains unchanged, and how the result supports the way the deck needs to function.',
        points: ['Condition of framing and visible connections', 'Stability of stairs, rails, and landings', 'Extent and pattern of previous repairs', 'Value of changing the footprint, access, or surface material'],
      },
      faqs: [
        { question: 'What deck services does DecksRXKC provide in Kansas City, MO?', answer: 'DecksRXKC serves Kansas City, Missouri with custom deck builds, deck repair, replacement, composite and wood options, covered and screened spaces, stairs, and railings.' },
        { question: 'Can DecksRXKC repair an existing Kansas City deck?', answer: 'Yes. The visible concern and the components around it should be reviewed before deciding whether a focused repair, phased work, or replacement is the clearer path.' },
        { question: 'Can a replacement deck use a different layout?', answer: 'Often, yes. A replacement is a useful time to reconsider furniture space, stair direction, yard access, materials, shade, and whether the old footprint still serves the home.' },
        { question: 'Does DecksRXKC build both wood and composite decks?', answer: 'Yes. DecksRXKC can compare wood with Trex and TimberTech options based on appearance, maintenance, exposure, and the complete project plan.' },
      ],
      projectSlugs: ['elevated-composite-deck-and-stairs', 'ground-up-deck-replacement'],
      guideSlugs: ['repair-or-replace-your-deck', 'composite-vs-wood-decking-kansas-city'],
    },
  },
  {
    city: 'Kansas City',
    state: 'KS',
    slug: 'kansas-city-ks',
    county: 'Wyandotte County',
    image: '/images/kansas-city-large-backyard-deck-build.jpg',
    metaTitle: 'Deck Contractor in Kansas City, KS | DecksRXKC',
    metaDescription: 'Compare custom decks, replacements, wood and composite surfaces, stairs, and contractor scope with DecksRXKC in Kansas City, Kansas.',
    nearby: ['Rosedale', 'Piper', 'Turner'],
    localNote:
      'Kansas City, Kansas projects range from compact backyard replacements to larger outdoor living spaces built around family use.',
    projectTypes: ['deck replacement', 'wood decks', 'composite decks'],
    priorityContent: {
      intro:
        'Kansas City, Kansas homes call for deck plans that respond to the actual lot and household rather than a metro-wide template. A compact Rosedale yard may benefit from a disciplined footprint and carefully placed stairs, while properties around Piper or Turner can support larger gathering zones, broader yard connections, or a future covered area. In either case, the deck contractor should explain how the structure, surface, railings, stairs, and finished edges work together.',
      serviceFocus: [
        { serviceSlug: 'custom-decks', title: 'Custom deck contractor', copy: 'Shape the deck around doors, grade, furniture zones, backyard circulation, and the home exterior before choosing the final material package.' },
        { serviceSlug: 'deck-replacement', title: 'Deck replacement', copy: 'Remove an aging deck and reconsider the footprint, stair direction, rails, and surface instead of automatically rebuilding the same limitations.' },
        { serviceSlug: 'composite-decks', title: 'Composite and wood options', copy: 'Compare maintenance, appearance, sun exposure, railing, fascia, stairs, and first cost with the way the household expects to use the deck.' },
        { serviceSlug: 'stairs-and-railings', title: 'Stairs and backyard access', copy: 'Plan stairs, landings, handrails, and guards around patios, gates, grade changes, and the clearest everyday route to the yard.' },
      ],
      planningNotes: [
        'Protect walking paths after dining, grilling, and conversation furniture is in place.',
        'Use stair direction and landing position to preserve useful yard or patio space.',
        'Compare the full wood or composite package, including rails, fascia, fasteners, and upkeep.',
      ],
      decisionGuide: {
        eyebrow: 'Choosing a Contractor',
        title: 'Compare the complete scope—not only the deck surface',
        body:
          'A useful proposal should make the footprint, materials, framing approach, stairs, railings, visible finishes, and project assumptions understandable. Homeowners should also know how site conditions, changes, cleanup, and communication will be handled. That level of clarity makes it easier to compare deck contractors on the finished result rather than on a single material allowance.',
        points: ['Written scope for structure, surface, stairs, and rails', 'Material and finish details that can be compared', 'Clear assumptions about access, removal, and site conditions', 'Communication plan for questions or scope changes'],
      },
      faqs: [
        { question: 'Does DecksRXKC build decks in Kansas City, KS?', answer: 'Yes. DecksRXKC serves Kansas City, Kansas with custom decks, repairs, replacements, composite and wood options, covered and screened spaces, stairs, and railings.' },
        { question: 'How should I compare deck contractors in Kansas City, KS?', answer: 'Compare the complete written scope, material details, stairs and railings, site assumptions, communication, cleanup, and how changes will be discussed—not only the surface-board price.' },
        { question: 'Can the stairs move during a deck replacement?', answer: 'Often, yes. The practical location depends on grade, doors, patios, gates, utilities, landing space, and normal movement through the yard.' },
        { question: 'Should I choose wood or composite decking?', answer: 'The better fit depends on appearance, maintenance, sun exposure, initial cost, long-term plans, and how the surface coordinates with the rest of the deck.' },
      ],
      projectSlugs: ['ground-up-deck-replacement', 'elevated-composite-deck-and-stairs'],
      guideSlugs: ['composite-vs-wood-decking-kansas-city'],
    },
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
    metaTitle: 'Screened-In Deck Builder Leawood KS | DecksRXKC',
    metaDescription: 'Plan a screened-in, custom, or composite deck in Leawood with coordinated rooflines, screens, railings, materials, and project details.',
    nearby: ['Old Leawood', 'Hallbrook', 'Ironhorse'],
    localNote:
      'Leawood deck projects benefit from polished material selections, careful proportions, and detailing that feels integrated with the home.',
    projectTypes: ['custom decks', 'outdoor rooms', 'premium railing'],
    priorityContent: {
      intro:
        'Leawood outdoor projects often begin with a simple question: how can the deck feel like part of the home rather than an addition behind it? Material transitions, rooflines, screen openings, railing profiles, and the view from inside all deserve attention before the footprint is finalized.',
      serviceFocus: [
        { serviceSlug: 'screened-in-decks', title: 'Screened-in decks', copy: 'Plan the roof, screen bays, doors, trim, airflow, and furniture clearances as one outdoor room connected to the home.' },
        { serviceSlug: 'custom-decks', title: 'Custom deck building', copy: 'Shape the footprint, stairs, railings, and gathering zones around the architecture, mature landscaping, and everyday backyard circulation.' },
        { serviceSlug: 'composite-decks', title: 'Composite decks', copy: 'Compare Trex, TimberTech, railing, fascia, and edge details in the light and exterior palette of the property.' },
      ],
      planningNotes: [
        'Study the deck from important interior rooms as well as from the yard before setting rail, roof, and stair lines.',
        'Coordinate screening, shade, drainage, fans, and lighting before selecting finish materials.',
        'Use physical decking and railing samples beside the home exterior in both sun and shade.',
      ],
      faqs: [
        { question: 'Does DecksRXKC build screened-in decks in Leawood?', answer: 'Yes. DecksRXKC serves Leawood homeowners with screened-in decks, covered outdoor rooms, custom decks, repairs, replacements, stairs, and railings.' },
        { question: 'Can a Leawood deck be designed to match an existing home?', answer: 'Yes. Rooflines, proportions, decking, railing, trim, views, and transitions can be planned together so the finished deck feels related to the home.' },
        { question: 'Can an existing deck be converted into a screened room?', answer: 'Sometimes. The existing framing, roof approach, railings, access, and visible condition should be evaluated before an enclosure is planned.' },
      ],
      projectSlugs: ['screened-in-deck-addition', 'covered-deck-outdoor-room'],
    },
  },
  {
    city: 'Lenexa',
    state: 'KS',
    slug: 'lenexa-ks',
    county: 'Johnson County',
    image: '/images/kansas-city-large-deck-tan-house-railing.jpg',
    metaTitle: 'Deck Contractor in Lenexa, KS | DecksRXKC',
    metaDescription: 'Plan a custom deck, replacement, covered space, stairs, or railings in Lenexa with clear contractor-scope and layout guidance.',
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
      decisionGuide: {
        eyebrow: 'Choosing a Deck Contractor',
        title: 'A clear scope makes contractor comparisons more useful',
        body:
          'When comparing deck contractors in Lenexa, look for a proposal that connects the structure, footprint, surface, stairs, railings, and visible finish details. It should also explain the assumptions behind removal, site access, material choices, timing, cleanup, and changes. Comparing the complete outcome helps prevent a low headline number from hiding work that still needs to be defined.',
        points: ['Complete footprint and structural scope', 'Named material, railing, fascia, and stair details', 'Site-access, removal, and cleanup assumptions', 'A clear process for communication and changes'],
      },
      faqs: [
        { question: 'Does DecksRXKC replace decks in Lenexa?', answer: 'Yes. DecksRXKC serves Lenexa with deck repair, replacement, new builds, covered spaces, screens, stairs, and railing work.' },
        { question: 'Can the replacement deck use a larger footprint?', answer: 'Often, yes. The site, home, project requirements, layout goals, and budget determine the practical footprint.' },
        { question: 'How should I compare deck contractors in Lenexa?', answer: 'Compare the written scope for structure, materials, stairs, rails, visible finishes, site assumptions, communication, cleanup, and changes—not only the square-foot or surface-board price.' },
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
    metaTitle: 'Composite Deck Builder in Shawnee, KS | DecksRXKC',
    metaDescription: 'Compare composite decks, replacements, stairs, railings, and screened rooms for Shawnee lots with grade, shade, and privacy considerations.',
    nearby: ['Lake Quivira', 'Monticello', 'Shawnee Mission'],
    localNote:
      'Shawnee yards vary from wooded lots to newer subdivisions, so deck layouts need to balance grade changes, privacy, and everyday comfort.',
    projectTypes: ['composite decks', 'railing installation', 'deck replacement', 'screened-in decks'],
    priorityContent: {
      intro:
        'Shawnee lots can change quickly in grade and tree cover, which makes the relationship between deck height, stairs, views, privacy, and shade especially important. A successful layout responds to those conditions rather than repeating the old footprint automatically.',
      serviceFocus: [
        { serviceSlug: 'composite-decks', title: 'Composite deck building', copy: 'Compare Trex, TimberTech, railing, fascia, and stair details against the home exterior, tree cover, sun exposure, and desired maintenance level.' },
        { serviceSlug: 'stairs-and-railings', title: 'Stairs and railing systems', copy: 'Plan runs, landings, handrails, and guards around grade changes, patios, gates, and the view from the house.' },
        { serviceSlug: 'deck-replacement', title: 'Replacement and layout updates', copy: 'Use removal and rebuilding to address an aging structure and reconsider access or underused areas.' },
        { serviceSlug: 'screened-in-decks', title: 'Screened outdoor rooms', copy: 'Coordinate roof, screens, doors, trim, airflow, and backyard circulation for more comfortable outdoor time.' },
      ],
      planningNotes: [
        'Use the actual grade and landing area to evaluate stair direction before rebuilding.',
        'Preserve valuable views while considering shade and privacy from nearby properties.',
        'Assess the existing deck before adding new railing, roofing, or an enclosure.',
      ],
      decisionGuide: {
        eyebrow: 'Composite in Shawnee',
        title: 'Choose the surface as part of the whole exterior',
        body:
          'Tree cover, strong afternoon sun, grade, and the view from below all affect how a Shawnee composite deck should be detailed. Physical samples should be compared at the house, then carried through the fascia, stairs, railing, fasteners, and visible frame. A lower-maintenance surface works best when drainage, airflow, framing, and the edge details receive the same attention as the board color.',
        points: ['Color and surface feel in the deck’s real exposure', 'Drainage, airflow, and the condition of any reused frame', 'Railing and fascia choices visible from the yard', 'Stair surfaces and transitions coordinated with the upper deck'],
      },
      faqs: [
        { question: 'Does DecksRXKC repair deck stairs in Shawnee?', answer: 'Yes. DecksRXKC can assess stair, railing, and related deck concerns in Shawnee and explain whether focused repair or rebuilding is the clearer path.' },
        { question: 'Can an existing Shawnee deck be screened in?', answer: 'Sometimes. The existing framing, roof approach, railings, circulation, and visible condition should be evaluated before the enclosure is planned.' },
        { question: 'Does DecksRXKC build composite decks in Shawnee?', answer: 'Yes. DecksRXKC can compare Trex, TimberTech, and wood options for Shawnee deck builds and replacements, including the related railing, fascia, stair, and maintenance decisions.' },
        { question: 'How do composite and wood decks compare in a shaded Shawnee yard?', answer: 'Compare appearance, cleaning, moisture exposure, airflow, sun patterns, surface feel, maintenance, and the complete installed package. Physical samples at the home are more useful than online swatches alone.' },
      ],
      projectSlugs: ['elevated-composite-deck-and-stairs', 'deck-stair-and-railing-upgrade', 'screened-in-deck-addition'],
      guideSlugs: ['composite-vs-wood-decking-kansas-city'],
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
    priorityContent: {
      intro:
        'Prairie Village decks often need to do more within a compact, established yard. A useful plan protects mature landscaping, keeps the route between the house and yard clear, and uses materials and proportions that sit comfortably beside an older home.',
      serviceFocus: [
        { serviceSlug: 'custom-decks', title: 'Custom deck building', copy: 'Fit dining, grilling, conversation, and access into a footprint shaped around the home, lot, doors, and mature landscape.' },
        { serviceSlug: 'deck-repair', title: 'Deck repair', copy: 'Assess boards, framing, stairs, railings, and connections together before choosing a focused repair or a broader rebuild.' },
        { serviceSlug: 'stairs-and-railings', title: 'Stairs and railings', copy: 'Improve backyard access with stair, landing, handrail, and guard details planned around grade, gates, patios, and limited yard space.' },
      ],
      planningNotes: [
        'Measure furniture and walking clearances before deciding whether the existing footprint should stay or change.',
        'Use stair direction and landing placement to preserve landscaping, patio space, and a practical path through the yard.',
        'Compare repair with replacement when several components are aging or the current layout no longer works.',
      ],
      faqs: [
        { question: 'Does DecksRXKC build and repair decks in Prairie Village?', answer: 'Yes. DecksRXKC serves Prairie Village with custom decks, deck repair, replacement, wood and composite options, stairs, railings, covers, and screened rooms.' },
        { question: 'Can a deck be redesigned for a smaller Prairie Village yard?', answer: 'Often, yes. The footprint, stair direction, furniture zones, privacy, and landscaping can be considered together to use a compact yard more effectively.' },
        { question: 'When is replacement clearer than deck repair?', answer: 'Replacement is worth comparing when concerns affect several major components, repairs have become repetitive, or the existing footprint and access no longer suit the home.' },
      ],
      projectSlugs: ['ground-up-deck-replacement', 'deck-stair-and-railing-upgrade'],
    },
  },
  {
    city: 'Mission Hills',
    state: 'KS',
    slug: 'mission-hills-ks',
    county: 'Johnson County',
    image: '/images/kansas-city-screened-porch-black-railing.jpg',
    metaTitle: 'Screened-In & Custom Decks Mission Hills KS | DecksRXKC',
    metaDescription: 'Plan a custom, covered, or screened-in deck in Mission Hills with careful roofline, material, railing, landscape, and outdoor-room decisions.',
    nearby: ['Fairway', 'Westwood', 'Country Club District'],
    localNote:
      'Mission Hills outdoor spaces call for careful design decisions, understated materials, and craftsmanship that supports the home architecture.',
    projectTypes: ['screened-in decks', 'custom decks', 'covered outdoor spaces'],
    priorityContent: {
      intro:
        'Mission Hills deck projects often need to complement established architecture and mature landscaping without competing with either one. The plan should begin with the home exterior, important views, existing doors, shade, grade, and the way people move between indoor rooms, the deck, and the yard. Rooflines, railings, stairs, trim, and surface colors then become parts of one restrained outdoor composition rather than a collection of separate upgrades.',
      serviceFocus: [
        { serviceSlug: 'screened-in-decks', title: 'Screened-in deck planning', copy: 'Coordinate screen bays, doors, roof, trim, airflow, lighting, and furniture so the enclosure feels related to the home and stays open to the landscape.' },
        { serviceSlug: 'custom-decks', title: 'Custom deck building', copy: 'Shape the footprint around doors, established landscaping, views, dining, conversation, and a clear route through the outdoor space.' },
        { serviceSlug: 'covered-decks', title: 'Covered outdoor rooms', copy: 'Study rooflines, headroom, posts, ceiling details, drainage, fans, and lighting before finish selections narrow the structural options.' },
      ],
      planningNotes: [
        'Review decking, railing, trim, and ceiling samples beside the home exterior in both sun and shade.',
        'Protect important views and landscaping while locating posts, stairs, landings, and screen doors.',
        'Identify the applicable approval and permit path for the property before finalizing the construction schedule.',
        'Plan drainage, lighting, fans, and future screening while the roof and structure are still flexible.',
      ],
      decisionGuide: {
        eyebrow: 'Architectural Fit',
        title: 'Make the addition feel deliberate from every view',
        body:
          'A deck can look appropriate from the yard yet feel disconnected where it meets the home. Compare roof pitch, trim depth, post placement, railing rhythm, finished edges, and material color from the street-facing approach, the main indoor rooms, and the backyard. The strongest plan is usually the one that solves circulation and comfort while staying visually quiet beside the existing architecture.',
        points: ['Home connection and roof geometry', 'Views from inside and outside', 'Material and trim relationships', 'Landscape, drainage, and access'],
      },
      faqs: [
        { question: 'Does DecksRXKC build decks in Mission Hills, KS?', answer: 'Yes. DecksRXKC serves Mission Hills with custom decks, covered and screened-in spaces, repair, replacement, stairs, railings, and wood or composite options.' },
        { question: 'Can a new deck be designed around mature landscaping?', answer: 'Often, yes. The footprint, stairs, posts, landings, access, and construction approach can be studied together to reduce conflicts with established outdoor features.' },
        { question: 'Can a Mission Hills deck be covered or screened?', answer: 'Yes, when the home connection, structure, roofline, drainage, openings, and circulation support the proposed outdoor room.' },
        { question: 'Who confirms permit or property approval requirements?', answer: 'The project scope should identify the authority serving the property and clarify responsibility for approvals, submittals, inspections, and any property-specific requirements before work begins.' },
      ],
      projectSlugs: ['screened-in-deck-addition', 'covered-deck-outdoor-room'],
      guideSlugs: ['can-you-screen-in-an-existing-deck', 'add-roof-over-existing-deck'],
    },
  },
  {
    city: 'Merriam',
    state: 'KS',
    slug: 'merriam-ks',
    county: 'Johnson County',
    image: '/images/kansas-city-deck-stairs-railing-skirt.jpg',
    metaTitle: 'Deck Replacement & Stairs Merriam KS | DecksRXKC',
    metaDescription: 'Compare deck repair, replacement, stairs, railings, wood, and composite options for Merriam homes with practical access and condition guidance.',
    nearby: ['Antioch', 'Turkey Creek', 'Downtown Merriam'],
    localNote:
      'Merriam deck projects often involve replacing aging structures with safer stairs, cleaner rails, and better everyday access to the yard.',
    projectTypes: ['deck replacement', 'stairs', 'railing upgrades'],
    priorityContent: {
      intro:
        'Merriam deck work often begins with an existing structure that no longer feels solid, easy to reach, or well connected to the yard. A useful assessment looks beyond one worn board to the framing, visible connections, stair run, landing, guards, handrails, drainage, and the way the current footprint fits daily use. That broader view helps separate a focused repair from a replacement that solves several problems at once.',
      serviceFocus: [
        { serviceSlug: 'deck-replacement', title: 'Deck replacement', copy: 'Use a rebuild to address an aging structure while reconsidering the footprint, surface, stairs, railings, and everyday backyard access.' },
        { serviceSlug: 'deck-repair', title: 'Deck repair', copy: 'Define the boundary of a practical repair after reviewing the visible concern and the supporting components around it.' },
        { serviceSlug: 'stairs-and-railings', title: 'Stairs and railing upgrades', copy: 'Plan the stair run, landing, handrail, guard, gate, and deck connection as one route between the house and yard.' },
      ],
      planningNotes: [
        'Check movement, soft areas, prior repairs, stairs, railings, and visible connections before choosing the scope.',
        'Set the stair direction around doors, patios, gates, utilities, grade, and normal backyard traffic.',
        'Compare the remaining value of the current frame with the benefits of a new layout and material package.',
        'Confirm the applicable Merriam or property-specific review and permit path before scheduling work.',
      ],
      decisionGuide: {
        eyebrow: 'Repair or Replace',
        title: 'Choose a scope that addresses the full pattern',
        body:
          'A focused repair may be appropriate when the concern is isolated and the surrounding deck remains suitable for continued use. Replacement deserves a direct comparison when deterioration, movement, loose rails, unstable stairs, repeated fixes, or an unsuccessful layout affect several parts of the deck. The proposal should state what changes, what remains, and how hidden conditions discovered during removal will be handled.',
        points: ['Extent of visible deterioration', 'Stability of stairs and railings', 'History of recurring repairs', 'Value of changing access or materials'],
      },
      faqs: [
        { question: 'Does DecksRXKC replace decks in Merriam, KS?', answer: 'Yes. DecksRXKC serves Merriam with deck replacement, repair, custom builds, stairs, railings, and wood or composite surface options.' },
        { question: 'Can deck stairs be replaced without rebuilding the whole deck?', answer: 'Sometimes. The existing deck, stair connection, landing area, supporting components, and railing transitions should be assessed before a focused stair scope is confirmed.' },
        { question: 'When should a Merriam deck be replaced instead of repaired?', answer: 'Replacement is worth comparing when concerns affect several major components, repairs are recurring, or the existing footprint and access no longer work well.' },
        { question: 'Can replacement change the stair direction or deck footprint?', answer: 'Often, yes. The property, grade, doors, utilities, approvals, and budget determine which layout changes are practical.' },
      ],
      projectSlugs: ['ground-up-deck-replacement', 'deck-stair-and-railing-upgrade'],
      guideSlugs: ['repair-or-replace-your-deck', 'choose-deck-builder-kansas-city'],
    },
  },
  {
    city: "Lee's Summit",
    state: 'MO',
    slug: 'lees-summit-mo',
    county: 'Jackson and Cass Counties',
    image: '/images/lees-summit-wood-deck-replacement.jpg',
    metaTitle: "Deck Replacement & Covered Decks Lee's Summit | DecksRXKC",
    metaDescription: "Plan a wood or composite deck replacement, covered deck, or screened outdoor room in Lee's Summit with practical lake-area and backyard guidance.",
    nearby: ['Raintree Lake', 'Lakewood', "Downtown Lee's Summit"],
    localNote:
      "Lee's Summit homes often have great backyard potential, from lake-area decks to covered spaces built for hosting and family time.",
    projectTypes: ['wood deck replacement', 'covered decks', 'screened-in decks'],
    priorityContent: {
      intro:
        "Lee's Summit properties range from established neighborhoods to larger lake-area and suburban lots, so the right deck plan depends on exposure, grade, views, access, and the way the backyard is already used. A replacement can preserve a successful footprint or correct limited gathering space and awkward stairs. A cover or screen room adds another layer of roof, drainage, airflow, door, and furniture decisions that should be coordinated from the start.",
      serviceFocus: [
        { serviceSlug: 'deck-replacement', title: 'Wood or composite deck replacement', copy: 'Compare the condition and layout of the existing deck with a rebuild that improves surface, stairs, railings, yard access, and long-term maintenance.' },
        { serviceSlug: 'covered-decks', title: 'Covered decks', copy: 'Coordinate roof connection, posts, ceiling, gutters, downspouts, fans, lighting, and open-deck space around the home and view.' },
        { serviceSlug: 'screened-in-decks', title: 'Screened-in outdoor rooms', copy: 'Plan screen bays, doors, airflow, trim, furniture, pets, and the route between the house, enclosure, stairs, and yard.' },
      ],
      planningNotes: [
        'Protect useful views while placing railings, posts, stairs, and screen doors where they support normal circulation.',
        'Compare wood and composite as complete installed systems, including surface, fascia, rails, stairs, cleaning, and maintenance.',
        "Identify whether the property follows Lee's Summit or another authority's approval and inspection process before final scheduling.",
        'Plan roof drainage and downspout discharge so added protection does not create water problems near patios, stairs, or foundations.',
      ],
      decisionGuide: {
        eyebrow: 'Open, Covered, or Screened',
        title: 'Match weather protection to the way the yard is used',
        body:
          'An open deck keeps broad views and direct sun. A roof creates more dependable shade and rain protection. Screening reduces bugs and adds a defined room, but it also affects airflow, doors, views, trim, and circulation. Many homes benefit from a combination: a protected dining or conversation zone connected to an open area for grilling, sun, or larger gatherings.',
        points: ['Sun, wind, rain, and view exposure', 'Open-deck and protected-room balance', 'Doors, stairs, and furniture circulation', 'Roof, ceiling, drainage, and electrical needs'],
      },
      faqs: [
        { question: "Does DecksRXKC replace decks in Lee's Summit?", answer: "Yes. DecksRXKC serves Lee's Summit with wood and composite deck replacement, custom decks, covered and screened spaces, repair, stairs, and railings." },
        { question: "Can a Lee's Summit deck include both covered and open areas?", answer: 'Yes. A coordinated plan can create dependable shade while keeping an open section for grilling, sun, views, or larger gatherings.' },
        { question: 'Can an existing deck be screened in?', answer: 'Sometimes. The framing, roof conditions, connections, rail layout, access, and visible condition should be evaluated before an enclosure is planned.' },
        { question: 'Does DecksRXKC build with wood, Trex, and TimberTech?', answer: 'Yes. The team can compare wood with available Trex and TimberTech options around appearance, exposure, maintenance, and the complete project plan.' },
      ],
      projectSlugs: ['ground-up-deck-replacement', 'covered-deck-outdoor-room', 'screened-in-deck-addition'],
      guideSlugs: ['composite-vs-wood-decking-kansas-city', 'add-roof-over-existing-deck'],
    },
  },
  {
    city: 'Blue Springs',
    state: 'MO',
    slug: 'blue-springs-mo',
    county: 'Jackson County',
    image: '/images/kansas-city-black-railing-deck-stairs-backyard.jpg',
    metaTitle: 'Deck Builder in Blue Springs, MO | DecksRXKC',
    metaDescription: 'Plan composite decking, stairs, dark railings, repair, or replacement in Blue Springs with clear material and backyard-access guidance.',
    nearby: ['Lake Tapawingo', 'Grain Valley', 'Burr Oak Woods'],
    localNote:
      'Blue Springs projects often benefit from sturdy framing, easy-to-maintain decking, and rail systems that open up backyard views.',
    projectTypes: ['composite decks', 'deck stairs', 'black railing'],
    priorityContent: {
      intro:
        'A useful Blue Springs deck plan should connect surface maintenance, backyard views, stairs, and railings instead of treating them as separate selections. Some homes benefit from a lower-maintenance composite surface and a dark railing that keeps the yard visually open; others need a replacement plan that corrects worn access, an awkward landing, or a footprint that no longer supports everyday use.',
      serviceFocus: [
        { serviceSlug: 'composite-decks', title: 'Composite deck building', copy: 'Compare Trex, TimberTech, and wood around appearance, direct sun, cleaning, maintenance, fascia, railings, stairs, and the complete installed package.' },
        { serviceSlug: 'stairs-and-railings', title: 'Deck stairs and railings', copy: 'Coordinate the stair run, landing, handrail, guard, and railing transitions with grade, patios, gates, and the desired backyard view.' },
        { serviceSlug: 'deck-replacement', title: 'Deck replacement', copy: 'Use a rebuild to address an aging structure while reconsidering the footprint, material, access route, and finished edges.' },
      ],
      planningNotes: [
        'Review physical decking samples in the sun and shade the deck will receive.',
        'Choose railing profiles with both the view from the deck and the view from the yard in mind.',
        'Set stair direction and landing space before furniture and circulation decisions are finalized.',
      ],
      decisionGuide: {
        eyebrow: 'Wood or Composite',
        title: 'Compare the maintenance and the finished system',
        body:
          'Wood offers natural variation and can be refinished, while composite is often selected to reduce staining and sealing work. The decision should also include sun exposure, cleaning, surface feel, first cost, railing, fascia, stairs, and the condition of any frame being considered for reuse. Good drainage and airflow matter with either material.',
        points: ['Appearance beside the home exterior', 'Cleaning and maintenance expectations', 'Surface exposure and comfort', 'Coordination with stairs, rails, fascia, and framing'],
      },
      faqs: [
        { question: 'Does DecksRXKC build decks in Blue Springs, MO?', answer: 'Yes. DecksRXKC serves Blue Springs homeowners with custom decks, composite and wood options, repair, replacement, covered and screened spaces, stairs, and railings.' },
        { question: 'Can DecksRXKC replace deck stairs in Blue Springs?', answer: 'Yes. The stair run, stringers, treads, landing, rails, and connection to the supporting deck can be assessed and planned as one access system.' },
        { question: 'Does DecksRXKC install Trex and TimberTech?', answer: 'Yes. DecksRXKC can compare Trex and TimberTech options without implying a manufacturer certification or warranty relationship.' },
        { question: 'Can black railing be added to an existing deck?', answer: 'Sometimes. The existing deck and the components receiving the new railing should be evaluated before the scope and railing system are confirmed.' },
      ],
      projectSlugs: ['elevated-composite-deck-and-stairs', 'deck-stair-and-railing-upgrade'],
      guideSlugs: ['composite-vs-wood-decking-kansas-city'],
    },
  },
  {
    city: 'Independence',
    state: 'MO',
    slug: 'independence-mo',
    county: 'Jackson County',
    image: '/images/kansas-city-elevated-deck-stairs-black-railing.jpg',
    metaTitle: 'Deck Repair, Rebuilds & Stairs Independence MO | DecksRXKC',
    metaDescription: 'Plan deck repair, replacement, stairs, railings, and better backyard access for Independence homes with clear condition and scope guidance.',
    nearby: ['Englewood', 'Sugar Creek', 'Blue Ridge'],
    localNote:
      'Independence homes often need practical deck rebuilds, safer stairs, and outdoor spaces that make older yards easier to use.',
    projectTypes: ['deck rebuilds', 'stairs', 'deck repairs'],
    priorityContent: {
      intro:
        'Independence deck projects often start with an older outdoor structure, a difficult stair route, or a backyard that is harder to use than it should be. The first decision is not the board color; it is whether the visible concern is isolated or part of a larger pattern involving framing, connections, rails, stairs, drainage, or the original layout. A clear assessment creates a better basis for repair, resurfacing, or a complete rebuild.',
      serviceFocus: [
        { serviceSlug: 'deck-repair', title: 'Deck repair', copy: 'Assess the visible concern and the components around it so the repair boundary, limitations, and unchanged areas are clear.' },
        { serviceSlug: 'deck-replacement', title: 'Deck rebuilds and replacement', copy: 'Replace an aging deck while improving the footprint, material, finished edges, stairs, railings, and connection to the yard.' },
        { serviceSlug: 'stairs-and-railings', title: 'Deck stairs and railings', copy: 'Coordinate the stair run, landing, handrail, guard, and transitions around grade, patios, doors, gates, and daily traffic.' },
      ],
      planningNotes: [
        'Document soft areas, movement, loose guards, stair concerns, drainage patterns, and previous repairs before narrowing the scope.',
        'Compare a focused repair with replacement when several components are aging or the current layout is unsuccessful.',
        'Use the stair and landing plan to create a direct, comfortable route between the house, deck, patio, and yard.',
        'Confirm the authority and permit path serving the property before construction dates are committed.',
      ],
      decisionGuide: {
        eyebrow: 'Existing Deck Assessment',
        title: 'Solve the cause, not only the visible symptom',
        body:
          'A worn board, loose rail, or unstable stair may be a focused problem, but repeated or widespread symptoms can point to a larger scope. Review how water moves, where movement occurs, how stairs connect, which components have already been repaired, and whether the footprint still serves the home. The recommended scope should explain both the work being completed and the parts of the existing deck that will remain.',
        points: ['Pattern and extent of deterioration', 'Movement and visible connections', 'Stair, landing, and railing condition', 'Layout and remaining useful life'],
      },
      faqs: [
        { question: 'Does DecksRXKC repair decks in Independence, MO?', answer: 'Yes. DecksRXKC serves Independence with focused deck repair, replacement, custom decks, stairs, railings, and wood or composite options.' },
        { question: 'Can old deck stairs be rebuilt?', answer: 'Often, yes. The stair run, stringers, treads, landing, rails, and connection to the existing deck should be evaluated together before the scope is set.' },
        { question: 'How do I compare repair with replacement?', answer: 'Compare the extent of deterioration, movement, previous repairs, the condition of major components, and whether the existing footprint and access still meet the household’s needs.' },
        { question: 'Can a replacement deck use a lower-maintenance surface?', answer: 'Yes. Wood, Trex, and TimberTech options can be compared alongside framing, railings, stairs, fascia, exposure, cleaning, and long-term maintenance goals.' },
      ],
      projectSlugs: ['ground-up-deck-replacement', 'deck-stair-and-railing-upgrade'],
      guideSlugs: ['repair-or-replace-your-deck', 'composite-vs-wood-decking-kansas-city'],
    },
  },
  {
    city: 'Liberty',
    state: 'MO',
    slug: 'liberty-mo',
    county: 'Clay County',
    image: '/images/kansas-city-screened-porch-deck-addition.jpg',
    metaTitle: 'Deck Builder in Liberty, MO | DecksRXKC',
    metaDescription: 'Plan a screened-in deck, covered deck, or custom addition in Liberty with coordinated shade, airflow, drainage, and yard access.',
    nearby: ['Shoal Creek', 'Claycomo', 'Kearney'],
    localNote:
      'Liberty homeowners often want outdoor spaces that feel comfortable in open yards, with shade, screening, and durable decking options.',
    projectTypes: ['screened-in decks', 'covered decks', 'deck additions'],
    priorityContent: {
      intro:
        'Open Liberty yards can offer generous views and gathering space, but they can also leave a deck exposed to direct sun, wind, and bugs. A covered or screened plan is most successful when the roof, door locations, airflow, drainage, furniture, stairs, and open-deck areas are coordinated early rather than added one system at a time.',
      serviceFocus: [
        { serviceSlug: 'screened-in-decks', title: 'Screened-in decks', copy: 'Plan screen bays, doors, roof, trim, airflow, furniture zones, and the path to the yard as one outdoor room.' },
        { serviceSlug: 'covered-decks', title: 'Covered deck building', copy: 'Coordinate the roofline, ceiling, fan, lighting, gutters, downspouts, post locations, and any open-deck area before construction begins.' },
        { serviceSlug: 'custom-decks', title: 'Custom deck additions', copy: 'Shape a new deck or addition around the home, everyday circulation, grilling, dining, views, and future shade or screening goals.' },
      ],
      planningNotes: [
        'Place screen doors and stairs around the natural route between the house, room, and yard.',
        'Set furniture zones before deciding post locations, screen bays, fans, and lighting.',
        'Plan roof drainage and downspout discharge so water does not conflict with stairs, patios, or foundations.',
      ],
      decisionGuide: {
        eyebrow: 'Open, Covered, or Screened',
        title: 'Decide how much protection the space needs',
        body:
          'An open deck preserves sun and broad views. A covered area creates more dependable shade and rain protection. Screening adds a boundary against bugs while preserving airflow, but it also introduces door, panel, trim, and circulation decisions. Many Liberty projects can combine an open zone with a covered or screened room so grilling, sun, shade, and evening use each have a practical place.',
        points: ['Sun and weather exposure during normal use', 'Airflow, privacy, pets, and screen durability', 'Door swings, stairs, and furniture circulation', 'Roof, ceiling, fan, lighting, and drainage coordination'],
      },
      faqs: [
        { question: 'Does DecksRXKC build screened-in decks in Liberty, MO?', answer: 'Yes. DecksRXKC serves Liberty homeowners with screened-in decks, covered decks, custom builds, repair, replacement, stairs, and railings.' },
        { question: 'Can an existing Liberty deck be screened in?', answer: 'Sometimes. The existing framing, roof conditions, railing layout, connections, access, and visible condition should be evaluated before an enclosure is planned.' },
        { question: 'Can a project combine covered, screened, and open deck areas?', answer: 'Yes. A coordinated layout can create a protected room while preserving an open area for grilling, sun, or larger gatherings.' },
        { question: 'Can fans and lighting be included in a covered deck?', answer: 'Yes. Fan, lighting, switching, ceiling, and electrical locations should be included while the roof and room layout are being planned.' },
      ],
      projectSlugs: ['screened-in-deck-addition', 'covered-deck-outdoor-room'],
    },
  },
  {
    city: 'Parkville',
    state: 'MO',
    slug: 'parkville-mo',
    county: 'Platte County',
    image: '/images/kansas-city-covered-deck-framing-addition.jpg',
    metaTitle: 'Elevated & Covered Deck Builder Parkville MO | DecksRXKC',
    metaDescription: 'Plan an elevated, covered, or custom deck in Parkville with thoughtful grade, view, stair, framing, drainage, and outdoor-room decisions.',
    nearby: ['Riss Lake', 'Weatherby Lake', 'Downtown Parkville'],
    localNote:
      'Parkville lots can include slopes and views, so elevated decks, stairs, and covered structures need thoughtful layout and solid framing.',
    projectTypes: ['elevated decks', 'covered deck framing', 'stairs'],
    priorityContent: {
      intro:
        'Parkville properties can introduce meaningful grade changes, elevated living areas, wooded edges, and long backyard views. Those conditions make stair direction, landing space, post placement, framing, drainage, and the view from below as important as the surface above. A covered deck adds roof connection, headroom, gutter, downspout, ceiling, lighting, and wind-exposure decisions that should be resolved as part of the structure.',
      serviceFocus: [
        { serviceSlug: 'custom-decks', title: 'Elevated custom decks', copy: 'Shape the upper deck, support layout, finished underside, railings, and yard connection around grade, doors, views, and everyday use.' },
        { serviceSlug: 'covered-decks', title: 'Covered deck framing', copy: 'Coordinate the roofline, posts, headroom, ceiling, gutters, downspouts, fans, lighting, and open view before construction starts.' },
        { serviceSlug: 'stairs-and-railings', title: 'Long stair runs and railings', copy: 'Plan stair direction, landings, guards, handrails, and transitions so elevated access feels direct and preserves useful yard space.' },
      ],
      planningNotes: [
        'Study the deck from the yard as well as from the house because elevated framing and finished edges remain highly visible.',
        'Set stair direction and landing locations around slope, patios, doors, gates, drainage, and the preferred backyard route.',
        'Plan roof water discharge carefully so gutters and downspouts do not create problems near supports, stairs, or foundations.',
        'Identify the authority serving the property and confirm permit, plan, and inspection responsibilities before scheduling.',
      ],
      decisionGuide: {
        eyebrow: 'Elevated Deck Planning',
        title: 'Connect the upper room to the ground-level yard',
        body:
          'An elevated deck can provide a strong view and direct access from the main living level, but the lower perspective and trip to the yard matter just as much. Compare stair length, intermediate landings, railing rhythm, post locations, patio relationships, storage or usable space below, and how the structure will look after fascia and trim are complete. A cover should be integrated into that same vertical composition.',
        points: ['Grade and full stair route', 'Views above and appearance below', 'Post, landing, and patio relationships', 'Roof connection and water management'],
      },
      faqs: [
        { question: 'Does DecksRXKC build elevated decks in Parkville, MO?', answer: 'Yes. DecksRXKC serves Parkville with elevated custom decks, covered decks, repair, replacement, stairs, railings, and wood or composite options.' },
        { question: 'Can an elevated deck include a roof?', answer: 'Yes, when the home connection, structure, headroom, posts, drainage, and desired deck footprint support a covered plan.' },
        { question: 'How should stairs be planned on a sloped lot?', answer: 'The stair run, landings, grade, drainage, patios, gates, utilities, and normal walking route should be studied together before the direction is finalized.' },
        { question: 'Can the space below an elevated deck remain useful?', answer: 'Often, yes. Post placement, stair location, headroom, drainage, surfacing, lighting, and the intended ground-level use should be included in the early layout.' },
      ],
      projectSlugs: ['elevated-composite-deck-and-stairs', 'covered-deck-outdoor-room'],
      guideSlugs: ['add-roof-over-existing-deck', 'choose-deck-builder-kansas-city'],
    },
  },
  {
    city: 'Gladstone',
    state: 'MO',
    slug: 'gladstone-mo',
    county: 'Clay County',
    image: '/images/optimized/kansas-city-covered-screened-porch-addition.jpg',
    metaTitle: 'Covered & Screened Decks Gladstone MO | DecksRXKC',
    metaDescription: 'Plan a covered, screened, replacement, or lower-maintenance deck in Gladstone with coordinated shade, airflow, access, and drainage.',
    nearby: ['North Kansas City', 'Oakview', 'Antioch Acres'],
    localNote:
      'Gladstone projects often focus on making existing outdoor space more usable with shade, screening, and lower-maintenance materials.',
    projectTypes: ['covered decks', 'screened-in decks', 'deck replacement'],
    priorityContent: {
      intro:
        'Gladstone homeowners often want an existing outdoor area to work through more of the day and more of the year. That may mean dependable shade, fewer bugs, a lower-maintenance surface, safer access, or a replacement layout that supports real furniture and circulation. The best plan coordinates the deck structure with the cover, screens, doors, drainage, stairs, railings, lighting, and open yard instead of layering features onto a footprint that was never designed for them.',
      serviceFocus: [
        { serviceSlug: 'covered-decks', title: 'Covered decks', copy: 'Plan the roof connection, posts, ceiling, drainage, fans, lighting, shade, and relationship to any open deck area as one system.' },
        { serviceSlug: 'screened-in-decks', title: 'Screened-in decks', copy: 'Coordinate screen type, bay layout, doors, airflow, views, pets, trim, furniture, and the route to stairs and the yard.' },
        { serviceSlug: 'deck-replacement', title: 'Deck replacement', copy: 'Use a rebuild to improve structure, footprint, access, material maintenance, railings, and readiness for a cover or enclosure.' },
      ],
      planningNotes: [
        'Track direct sun, wind, rain, and the hours the deck is normally used before choosing open, covered, or screened space.',
        'Place doors, stairs, posts, fans, and lighting around furniture zones and everyday walking paths.',
        'Compare wood and composite with the full surface, fascia, rail, stair, cleaning, and maintenance plan in view.',
        'Confirm the applicable Gladstone-area approval and inspection requirements before final scheduling.',
      ],
      decisionGuide: {
        eyebrow: 'More Usable Outdoor Space',
        title: 'Choose protection without closing off the yard',
        body:
          'A roof can create dependable shade while leaving the deck open to breeze and views. Screening adds a more defined room and reduces bugs, but it changes doors, panel layout, trim, and circulation. Replacement may be the better starting point when the existing structure, footprint, or stairs are not suited to the desired cover or enclosure. A combined plan can preserve an open zone for grilling or sun beside the protected room.',
        points: ['Shade and rain protection needed', 'Airflow, screens, pets, and views', 'Existing structure and replacement scope', 'Doors, stairs, furniture, and drainage'],
      },
      faqs: [
        { question: 'Does DecksRXKC build covered decks in Gladstone, MO?', answer: 'Yes. DecksRXKC serves Gladstone with covered and screened-in decks, custom builds, repair, replacement, stairs, railings, and wood or composite options.' },
        { question: 'Can an existing Gladstone deck be screened in?', answer: 'Sometimes. The existing framing, roof conditions, connections, railings, access, and visible condition should be assessed before an enclosure is designed.' },
        { question: 'Can a covered deck include ceiling fans and lighting?', answer: 'Yes. Fan, light, switching, ceiling, and electrical locations should be planned while the roof structure and furniture layout are being developed.' },
        { question: 'Should an older deck be replaced before adding a cover?', answer: 'Possibly. The existing deck and its supports should be evaluated for the added plan; replacement is worth comparing when condition, layout, or access would limit the finished outdoor room.' },
      ],
      projectSlugs: ['covered-deck-outdoor-room', 'screened-in-deck-addition'],
      guideSlugs: ['can-you-screen-in-an-existing-deck', 'add-roof-over-existing-deck'],
    },
  },
  {
    city: 'Raymore',
    state: 'MO',
    slug: 'raymore-mo',
    county: 'Cass County',
    image: '/images/optimized/kansas-city-elevated-composite-deck-cable-railing-stairs.jpg',
    metaTitle: 'Deck Builder in Raymore, MO | DecksRXKC',
    metaDescription: 'Plan a custom or composite deck in Raymore that connects upper living, walkout, patio, stairs, shade, and backyard gathering space.',
    nearby: ['Belton', 'Peculiar', 'Creekmoor'],
    localNote:
      'Raymore homes often have room for outdoor living upgrades that connect patios, walkout basements, and backyard entertaining zones.',
    projectTypes: ['composite decks', 'stairs', 'outdoor living spaces'],
    priorityContent: {
      intro:
        'Raymore properties often create an opportunity to connect an upper living level, a walkout basement, a patio, and a broad backyard within one outdoor plan. The deck footprint, stair route, landing, surface, railings, and gathering zones should support those connections instead of leaving the yard access as a leftover decision.',
      serviceFocus: [
        { serviceSlug: 'custom-decks', title: 'Custom deck building', copy: 'Plan dining, conversation, grilling, doors, stairs, patio connections, and open yard space as one useful outdoor layout.' },
        { serviceSlug: 'composite-decks', title: 'Composite decks', copy: 'Compare Trex, TimberTech, and wood with the home exterior, direct exposure, maintenance goals, railings, fascia, and stairs in mind.' },
        { serviceSlug: 'stairs-and-railings', title: 'Stairs and backyard connections', copy: 'Coordinate the upper deck, full stair run, landing, walkout level, patio, gates, and railing transitions around daily movement.' },
        { serviceSlug: 'covered-decks', title: 'Covered outdoor space', copy: 'Add dependable shade with a roof, drainage, ceiling, fan, and lighting plan connected to both the deck and home.' },
      ],
      planningNotes: [
        'Map the route between the main level, walkout level, patio, and yard before setting the stair direction.',
        'Size dining, grilling, and conversation zones with furniture and walking clearances in place.',
        'Consider shade and future screening before the structure and roof approach are finalized.',
      ],
      decisionGuide: {
        eyebrow: 'Connect the Levels',
        title: 'Treat the deck, stairs, patio, and yard as one route',
        body:
          'An elevated deck can add generous outdoor space, but its stairs and supports also shape the patio and yard below. A successful Raymore plan studies the view from the house, the stair landing, walkout doors, furniture zones, and open lawn together. That prevents the new deck from improving one level while making another harder to use.',
        points: ['Main-level door and furniture circulation', 'Walkout-door and patio clearances', 'Stair direction, landing, and gate access', 'Shade, drainage, and use of the space below'],
      },
      faqs: [
        { question: 'Does DecksRXKC build decks in Raymore, MO?', answer: 'Yes. DecksRXKC serves Raymore with custom decks, composite and wood options, repair, replacement, covered and screened spaces, stairs, and railings.' },
        { question: 'Can a Raymore deck connect an upper level to a patio or walkout basement?', answer: 'Often, yes. The deck height, stairs, landing, doors, patio, grade, and normal yard traffic should be planned together.' },
        { question: 'Can a Raymore deck include both covered and open areas?', answer: 'Yes. A combined layout can add dependable shade while preserving an open area for grilling, sun, or larger gatherings.' },
        { question: 'Is composite a good option for an exposed backyard?', answer: 'Composite can reduce staining and sealing work, but color, heat, cleaning, sun exposure, railings, fascia, stairs, framing, and the complete installed package should all be compared.' },
      ],
      projectSlugs: ['elevated-composite-deck-and-stairs', 'covered-deck-outdoor-room'],
      guideSlugs: ['composite-vs-wood-decking-kansas-city'],
    },
  },
]

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug)
}

export function getServiceAreaPath(area: ServiceArea) {
  return `/service-areas/${area.slug}`
}

export function getServiceAreaLabel(area: ServiceArea) {
  return `${area.city}, ${area.state}`
}
