export const services = [
  {
    slug: 'custom-deck-building',
    name: 'Custom Deck Building',
    shortName: 'Custom Decks',
    title: 'Custom Deck Builder in Kansas City | DecksRXKC',
    description:
      'Custom deck building in Kansas City for homeowners who want a durable, well-planned outdoor living space.',
    h1: 'Custom Deck Builder in Kansas City',
    intro:
      'DecksRXKC designs and builds custom decks that fit Kansas City homes, lot layouts, family routines, and long-term maintenance goals.',
    benefits: ['Site-specific deck layouts', 'Composite and wood material planning', 'Railings, stairs, landings, and access points', 'Clear estimate process before build work begins'],
    includes: ['Deck layout consultation', 'Material recommendations', 'Frame and surface construction', 'Railing and stair coordination', 'Final walkthrough'],
    options: 'Choose from composite decking, pressure-treated wood, cedar-style finishes, low-maintenance railings, stair lighting options, and layouts planned around shade, doors, grade changes, and traffic flow.',
    faq: [
      ['How much does a custom deck cost in Kansas City?', 'Deck cost depends on size, access, material, railing style, stairs, and existing conditions. DecksRXKC provides project-specific estimates after reviewing the space.'],
      ['Can you help plan the deck layout?', 'Yes. The estimate process can include layout ideas, material direction, traffic flow, and practical construction considerations.'],
      ['Do I need a permit for a custom deck?', 'Permit requirements vary by city and project scope. Homeowners should verify local rules, and DecksRXKC can discuss common requirements during the estimate.']
    ]
  },
  {
    slug: 'composite-decks',
    name: 'Composite Decks',
    shortName: 'Composite Decks',
    title: 'Composite Decking Kansas City | DecksRXKC',
    description:
      'Composite deck construction and replacement in Kansas City with low-maintenance materials and clean modern detailing.',
    h1: 'Composite Decking in Kansas City',
    intro:
      'Composite decking is a strong choice for Kansas City homeowners who want a polished deck surface with less routine staining and sealing than wood.',
    benefits: ['Low-maintenance deck boards', 'Modern color and texture options', 'Clean picture-frame and border details', 'Durable surfaces for busy outdoor spaces'],
    includes: ['Composite material guidance', 'Deck board layout planning', 'Hidden fastener options', 'Trim, fascia, railing, and stair coordination', 'Replacement or new construction'],
    options: 'Composite decks can be paired with aluminum, composite, cable-style, or wood railing options depending on budget, code needs, and the style of the home.',
    faq: [
      ['Is composite decking worth it in Kansas City?', 'Many homeowners choose composite for lower maintenance and consistent appearance. The right answer depends on budget, sun exposure, and how you use the deck.'],
      ['Can composite decking go on an existing frame?', 'Sometimes. The existing frame must be evaluated for condition, spacing, and structural suitability before resurfacing.'],
      ['Does composite decking get hot?', 'Some composite colors retain more heat than others. Lighter colors and shaded layouts can help improve comfort.']
    ]
  },
  {
    slug: 'wood-decks',
    name: 'Wood Decks',
    shortName: 'Wood Decks',
    title: 'Wood Deck Builder Kansas City | DecksRXKC',
    description:
      'Wood deck construction in Kansas City for homeowners who prefer natural texture, classic outdoor warmth, and practical value.',
    h1: 'Wood Deck Builder in Kansas City',
    intro:
      'A well-built wood deck brings natural warmth to a backyard and can be a practical fit for many Kansas City homes.',
    benefits: ['Classic wood appearance', 'Flexible layouts and details', 'Repairable surface boards', 'Strong value for many projects'],
    includes: ['Wood deck design guidance', 'Pressure-treated and upgrade material discussion', 'Deck framing and surface installation', 'Stairs, railings, and trim', 'Maintenance planning'],
    options: 'Wood decks can be built with pressure-treated lumber and other wood options, with railing, stair, and skirting choices tailored to the home.',
    faq: [
      ['How often does a wood deck need maintenance?', 'Maintenance depends on exposure, product choice, and finish. Many wood decks need periodic cleaning, sealing, or staining.'],
      ['Can you replace only damaged wood boards?', 'In many cases, yes. DecksRXKC can evaluate whether board replacement, repair, or full replacement is the better path.'],
      ['Is wood cheaper than composite?', 'Wood often has a lower upfront material cost, while composite can reduce some long-term maintenance. The estimate should compare both.']
    ]
  },
  {
    slug: 'deck-repair',
    name: 'Deck Repair',
    shortName: 'Deck Repair',
    title: 'Deck Repair Kansas City | DecksRXKC',
    description:
      'Deck repair in Kansas City for worn boards, loose railings, unsafe stairs, surface damage, and aging outdoor structures.',
    h1: 'Deck Repair in Kansas City',
    intro:
      'DecksRXKC helps Kansas City homeowners address worn, damaged, or aging deck areas before they become larger problems.',
    benefits: ['Focused repair recommendations', 'Board, stair, and railing repair options', 'Help deciding repair vs replacement', 'Improved function and appearance'],
    includes: ['On-site condition review', 'Repair scope recommendations', 'Board and railing replacement options', 'Stair and landing improvements', 'Project planning for future upgrades'],
    options: 'Repairs may include surface boards, railings, stairs, trim, fasteners, and selected framing concerns when the project is appropriate for repair work.',
    faq: [
      ['Can an old deck be repaired instead of replaced?', 'Sometimes. The decision depends on structure, age, rot, movement, and how much of the deck needs work.'],
      ['Do you repair deck railings and stairs?', 'Yes. Railing and stair issues are common repair requests and can often be evaluated during an estimate.'],
      ['When is replacement better than repair?', 'Replacement is often better when damage is widespread, framing is compromised, or repeated repairs would not be a good long-term value.']
    ]
  },
  {
    slug: 'deck-replacement',
    name: 'Deck Replacement',
    shortName: 'Deck Replacement',
    title: 'Deck Replacement Kansas City | DecksRXKC',
    description:
      'Deck replacement in Kansas City for outdated, damaged, or undersized decks, with composite and wood upgrade options.',
    h1: 'Deck Replacement in Kansas City',
    intro:
      'When a deck no longer fits the home or has reached the end of its useful life, DecksRXKC can replace it with a stronger, cleaner outdoor space.',
    benefits: ['Replace aging or unsafe deck areas', 'Upgrade from wood to composite', 'Improve stairs, railings, and usable space', 'Better layout for today’s outdoor living'],
    includes: ['Existing deck review', 'Replacement scope planning', 'Material and railing recommendations', 'New deck construction', 'Final walkthrough'],
    options: 'Deck replacement is a good time to improve size, flow, railing style, stair placement, privacy, shade planning, and maintenance expectations.',
    faq: [
      ['Can you replace a deck with the same footprint?', 'Yes, if the existing footprint still works and local requirements allow it. Many homeowners also use replacement as a chance to improve layout.'],
      ['Can I switch from wood to composite?', 'Often, yes. The frame and design requirements need to be reviewed to support the selected composite system.'],
      ['How long does deck replacement take?', 'Timeline depends on size, material availability, weather, site conditions, and permitting where required.']
    ]
  }
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
