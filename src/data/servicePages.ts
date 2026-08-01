import type { ComponentType } from 'react'
import type { LucideProps } from 'lucide-react'
import { serviceIconMap } from './siteContent'

export type ServiceSection = {
  eyebrow: string
  title: string
  body: string
  items?: string[]
}

export type ServicePage = {
  slug: string
  title: string
  shortTitle: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  heroCopy: string
  image: string
  icon: keyof typeof serviceIconMap
  bestFor: string[]
  bullets: string[]
  sections: ServiceSection[]
  process: Array<{ title: string; description: string }>
  decisionPoints: Array<{ title: string; description: string }>
  faqs: Array<{ question: string; answer: string }>
  relatedServiceSlugs: string[]
  relatedProjectSlugs: string[]
  relatedGuideSlugs: string[]
  publishedAt: string
  updatedAt: string
}

const contentDate = '2026-07-31'

export const servicePages: ServicePage[] = [
  {
    slug: 'custom-decks',
    title: 'Custom Deck Builder in Kansas City',
    shortTitle: 'Custom Decks',
    metaTitle: 'Custom Deck Builder Kansas City | DecksRXKC',
    metaDescription:
      'Plan a custom Kansas City deck around your home, yard, materials, stairs, railings, shade, and everyday outdoor living goals.',
    eyebrow: 'Built around your home',
    heroCopy:
      'A custom deck starts with the way you want to move, gather, cook, relax, and connect the house to the yard—not with a one-size-fits-all package.',
    image: '/images/kansas-city-custom-deck-builder.jpg',
    icon: 'hammer',
    bestFor: ['New construction', 'Better backyard access', 'Entertaining space', 'Complete outdoor plans'],
    bullets: [
      'Deck footprints planned around doors, grade, patios, views, and normal traffic',
      'Composite or wood surfaces coordinated with stairs, railings, fascia, and trim',
      'Options for future shade, screening, lighting, and outdoor-room upgrades',
    ],
    sections: [
      {
        eyebrow: 'Start With Use',
        title: 'Plan the deck around real life',
        body:
          'The right footprint depends on more than the available wall space. We look at how people will enter from the house, where furniture and a grill can sit, how guests reach the yard, and which views should stay open.',
        items: ['Dining and conversation zones', 'Door and stair circulation', 'Sun, shade, and privacy', 'Connection to patios and the yard'],
      },
      {
        eyebrow: 'Complete Design',
        title: 'Make every visible detail belong together',
        body:
          'Decking is one part of the finished composition. Railing color, fascia, stair edges, posts, lighting, and the relationship to the home all shape how intentional the deck feels.',
        items: ['Trex, TimberTech, and wood options', 'Dark, cable-style, or wood railings', 'Integrated stairs and landings', 'Covered and screened-in possibilities'],
      },
    ],
    process: [
      { title: 'Walk the space', description: 'Review the house, grade, access, existing structures, and the way the yard is used.' },
      { title: 'Shape the plan', description: 'Compare footprint, stair, railing, material, shade, and upgrade options.' },
      { title: 'Confirm the scope', description: 'Align the selected direction with the written quote and practical project sequence.' },
      { title: 'Build the full system', description: 'Coordinate framing, surface, railings, stairs, and finished details as one project.' },
    ],
    decisionPoints: [
      { title: 'Footprint', description: 'Size the deck for furniture and circulation without overwhelming the house or yard.' },
      { title: 'Surface', description: 'Compare wood, Trex, and TimberTech based on appearance, maintenance, exposure, and budget.' },
      { title: 'Access', description: 'Place stairs and landings where they improve the everyday route to the yard.' },
      { title: 'Future upgrades', description: 'Plan structure and layout with a possible cover, screen room, or lighting package in mind.' },
    ],
    faqs: [
      { question: 'What makes a deck custom?', answer: 'A custom deck responds to the home, yard, grade, doors, furniture needs, material preferences, and access pattern instead of relying on a standard footprint.' },
      { question: 'Can a custom deck include both covered and open areas?', answer: 'Yes. Many layouts pair an open area for sun or grilling with a covered zone for shade and more dependable everyday use.' },
      { question: 'Do you build both composite and wood decks?', answer: 'Yes. DecksRXKC can compare wood with Trex and TimberTech composite options based on the project and maintenance goals.' },
      { question: 'Can stairs be placed somewhere different from the old deck?', answer: 'Often, yes. The best location depends on grade, doors, patios, utilities, yard circulation, and the complete deck plan.' },
      { question: 'Can screening be added later?', answer: 'Some decks can be planned for a future enclosure, but roof, structure, openings, and circulation are easier to coordinate before the initial build.' },
    ],
    relatedServiceSlugs: ['composite-decks', 'covered-decks', 'stairs-and-railings'],
    relatedProjectSlugs: ['elevated-composite-deck-and-stairs', 'covered-deck-outdoor-room'],
    relatedGuideSlugs: ['composite-vs-wood-decking-kansas-city'],
    publishedAt: contentDate,
    updatedAt: contentDate,
  },
  {
    slug: 'screened-in-decks',
    title: 'Screened-In Decks in Kansas City',
    shortTitle: 'Screened-In Decks',
    metaTitle: 'Screened-In Deck Builder Kansas City | DecksRXKC',
    metaDescription:
      'DecksRXKC builds screened-in decks and outdoor rooms for Kansas City homeowners who want shade, airflow, and fewer bugs.',
    eyebrow: 'Fewer bugs, more outdoor time',
    heroCopy:
      'Turn an open deck into a protected place for dinners, game nights, and summer evenings without giving up airflow or the backyard view.',
    image: '/images/optimized/kansas-city-screened-porch-wood-trim-black-screen.jpg',
    icon: 'shield',
    bestFor: ['Second-story decks', 'Covered patios', 'Outdoor rooms', 'Bug control'],
    bullets: [
      'Screen systems, doors, and panel layouts planned around the deck',
      'Options for pets, kids, airflow, shade, and privacy',
      'Roof, railing, trim, and drainage details coordinated as one room',
    ],
    sections: [
      {
        eyebrow: 'Existing Decks',
        title: 'First determine whether the deck can support an enclosure',
        body:
          'An existing deck may be a good candidate for screening, but the frame, roof conditions, railing layout, connections, and overall condition should be reviewed before planning finishes.',
        items: ['Framing and visible condition', 'Roof and drainage approach', 'Door and furniture circulation', 'Screen bay and trim layout'],
      },
      {
        eyebrow: 'Comfort',
        title: 'Keep the room open to air and views',
        body:
          'Large, thoughtfully placed screen openings help preserve the outdoor feeling. Shade direction, privacy, pets, and the location of doors all influence the final panel plan.',
      },
    ],
    process: [
      { title: 'Assess', description: 'Review the deck, cover, access, and visible structural conditions.' },
      { title: 'Lay out', description: 'Plan screen openings, door swings, furniture zones, railings, and circulation.' },
      { title: 'Coordinate', description: 'Confirm roof, drainage, trim, screen, and finish details.' },
      { title: 'Enclose', description: 'Build the room so screens and finished components feel integrated with the deck.' },
    ],
    decisionPoints: [
      { title: 'Screen type', description: 'Balance visibility, airflow, pets, durability, and maintenance.' },
      { title: 'Door location', description: 'Protect furniture space and create a natural path to stairs or the yard.' },
      { title: 'Future use', description: 'Consider fans, lighting, privacy, and seasonal furniture before finalizing openings.' },
    ],
    faqs: [
      { question: 'Can you screen in an existing deck?', answer: 'Often, yes. DecksRXKC can evaluate framing, roof conditions, railings, and layout to determine what should be added or rebuilt.' },
      { question: 'Do screened-in decks still feel open?', answer: 'A good screen layout preserves airflow and views while reducing bugs, direct sun, and wind exposure.' },
      { question: 'Can a screened deck include a ceiling fan and lighting?', answer: 'Yes, when electrical and ceiling locations are included in the project plan.' },
      { question: 'Are screened rooms useful with pets?', answer: 'They can be. Screen type, lower panels, door hardware, and traffic paths should be selected with the pets and household in mind.' },
      { question: 'Does the deck need a roof before it can be screened?', answer: 'A screened room needs overhead protection. If no suitable cover exists, the roof structure becomes part of the project.' },
    ],
    relatedServiceSlugs: ['covered-decks', 'custom-decks', 'deck-replacement'],
    relatedProjectSlugs: ['screened-in-deck-addition', 'covered-deck-outdoor-room'],
    relatedGuideSlugs: [],
    publishedAt: contentDate,
    updatedAt: contentDate,
  },
  {
    slug: 'covered-decks',
    title: 'Covered Decks in Kansas City',
    shortTitle: 'Covered Decks',
    metaTitle: 'Covered Deck Builder Kansas City | DecksRXKC',
    metaDescription:
      'DecksRXKC builds covered decks with coordinated roof structures, ceilings, drainage, fans, lighting, and outdoor living upgrades in Kansas City.',
    eyebrow: 'Shade and weather protection',
    heroCopy:
      'Add a roof, finished ceiling, lighting, fans, and drainage so the deck works harder through Kansas City sun and changing weather.',
    image: '/images/optimized/kansas-city-covered-screened-porch-addition.jpg',
    icon: 'home',
    bestFor: ['Shade', 'Rain protection', 'Outdoor dining', 'Future screening'],
    bullets: [
      'Attached or freestanding cover options evaluated around the home and deck',
      'Ceiling, fan, lighting, gutter, and downspout locations planned early',
      'Can pair with new decking, stairs, railings, or a screened enclosure',
    ],
    sections: [
      {
        eyebrow: 'Feasibility',
        title: 'A good cover begins with the house connection',
        body:
          'Rooflines, windows, doors, headroom, deck framing, and drainage shape what kind of cover works. The goal is a roof that feels related to the home rather than visually added on.',
        items: ['Existing roof and wall conditions', 'Finished ceiling height', 'Water and gutter path', 'Post placement and open views'],
      },
      {
        eyebrow: 'Daily Use',
        title: 'Plan comfort before selecting finishes',
        body:
          'Think through dining, grilling, conversation, fans, lighting, and furniture zones before deciding where posts and ceiling features belong. A covered deck should improve how the space works, not only add a roof.',
        items: ['Sun and rain exposure', 'Fan and light locations', 'Open versus screened edges', 'Connection to uncovered deck space'],
      },
    ],
    process: [
      { title: 'Evaluate the home', description: 'Review rooflines, walls, openings, deck condition, and drainage constraints.' },
      { title: 'Plan the outdoor room', description: 'Set the covered footprint, post locations, circulation, and furniture zones.' },
      { title: 'Coordinate systems', description: 'Align roof, ceiling, fans, lighting, gutters, railings, and possible screening.' },
      { title: 'Build and finish', description: 'Complete structural and finish work so the cover reads as part of the home.' },
    ],
    decisionPoints: [
      { title: 'Attached or freestanding', description: 'The home, roofline, and desired footprint help determine the better structural direction.' },
      { title: 'Open or screen-ready', description: 'Future screens affect openings, rails, doors, and circulation, so decide early when possible.' },
      { title: 'Ceiling package', description: 'Material, lighting, fans, and access points should be coordinated before construction.' },
      { title: 'Water management', description: 'Plan roof pitch, gutters, downspouts, and where water will discharge around the deck.' },
    ],
    faqs: [
      { question: 'Can a covered deck be added to an existing home?', answer: 'Yes. The right approach depends on rooflines, structure, deck framing, drainage, openings, and how the new cover connects to the house.' },
      { question: 'Can a roof be added over an existing deck?', answer: 'Sometimes. The existing deck and its supports should be evaluated to determine what can remain and what needs reinforcement or replacement.' },
      { question: 'Can a covered deck include screens later?', answer: 'Many covers can be planned for later screening. Openings, railings, doors, and circulation are easier to prepare during the original design.' },
      { question: 'Where do gutters and downspouts go?', answer: 'Their location depends on the cover shape and site drainage. They should move water away without creating problems around stairs, patios, or foundations.' },
      { question: 'Can the covered section connect to an open deck?', answer: 'Yes. A combined plan can provide dependable shade alongside an open area for grilling, sun, or larger gatherings.' },
    ],
    relatedServiceSlugs: ['screened-in-decks', 'custom-decks', 'composite-decks'],
    relatedProjectSlugs: ['covered-deck-outdoor-room', 'screened-in-deck-addition'],
    relatedGuideSlugs: [],
    publishedAt: contentDate,
    updatedAt: contentDate,
  },
  {
    slug: 'composite-decks',
    title: 'Composite Deck Builder in Kansas City',
    shortTitle: 'Composite Decks',
    metaTitle: 'Trex & TimberTech Deck Builder Kansas City | DecksRXKC',
    metaDescription:
      'DecksRXKC builds Trex and TimberTech composite decks with coordinated stairs, railings, fascia, and low-maintenance outdoor living details.',
    eyebrow: 'Trex and TimberTech deck builds',
    heroCopy:
      'Choose a lower-maintenance deck surface with colors, railings, stairs, and edge details that look considered from every side.',
    image: '/images/optimized/kansas-city-elevated-composite-deck-cable-railing-stairs.jpg',
    icon: 'hammer',
    bestFor: ['Lower maintenance', 'Modern railings', 'Family use', 'Deck replacements'],
    bullets: [
      'Trex and TimberTech options compared around appearance and project goals',
      'Railing, stair, fascia, fastener, and breaker-board details coordinated',
      'Works for new builds, replacement projects, and elevated decks',
    ],
    sections: [
      {
        eyebrow: 'Material Choice',
        title: 'Compare more than the color swatch',
        body:
          'Trex and TimberTech offer multiple looks and product choices. Compare physical samples in sun and shade, then consider texture, heat, cleaning, railing, fascia, and the complete project—not just one board.',
        items: ['Color against the home exterior', 'Surface feel in direct sun', 'Cleaning and care expectations', 'Coordinating rail and fascia colors'],
      },
      {
        eyebrow: 'Complete System',
        title: 'The frame and details still matter',
        body:
          'Composite is a finished surface, not a shortcut around sound framing or water management. Spacing, ventilation, drainage, fasteners, edge details, and the condition of any reused structure all need attention.',
        items: ['Frame evaluation and layout', 'Drainage and airflow', 'Fastener and seam planning', 'Stairs, fascia, and breaker boards'],
      },
    ],
    process: [
      { title: 'Compare samples', description: 'Review Trex, TimberTech, and wood options in the project’s real light and surroundings.' },
      { title: 'Confirm the base', description: 'Assess new or existing framing for the selected surface and layout.' },
      { title: 'Detail the edges', description: 'Coordinate stairs, rails, fascia, seams, and transitions before installation.' },
      { title: 'Build and review', description: 'Install the complete system and review normal care for the selected products.' },
    ],
    decisionPoints: [
      { title: 'Trex or TimberTech', description: 'Compare available looks, textures, product requirements, and the complete installed package.' },
      { title: 'Light or dark color', description: 'Balance exterior appearance with exposure and surface-temperature preferences.' },
      { title: 'Reuse or replace framing', description: 'Only reuse an existing frame when its condition and layout are appropriate for the new work.' },
      { title: 'Railing and fascia', description: 'Treat rails, stairs, and visible edges as part of the material selection—not a late add-on.' },
    ],
    faqs: [
      { question: 'Is composite decking good for Kansas City weather?', answer: 'It is a strong option for homeowners seeking lower maintenance through sun, rain, snow, and seasonal change, but sound installation and normal cleaning still matter.' },
      { question: 'Does DecksRXKC install Trex and TimberTech?', answer: 'Yes. DecksRXKC can compare Trex and TimberTech options without implying a manufacturer certification or warranty relationship.' },
      { question: 'Can composite decking be used on an old frame?', answer: 'Sometimes, but the frame should be assessed first for condition, spacing, layout, connections, and suitability for the selected decking.' },
      { question: 'Does composite decking get hot?', answer: 'Temperature varies by product, color, sun exposure, and weather. Review physical samples in direct sun when surface heat is an important concern.' },
      { question: 'Is composite maintenance-free?', answer: 'No surface is maintenance-free. Composite generally reduces staining and sealing work but still needs cleaning according to the manufacturer’s guidance.' },
    ],
    relatedServiceSlugs: ['custom-decks', 'deck-replacement', 'stairs-and-railings'],
    relatedProjectSlugs: ['elevated-composite-deck-and-stairs', 'covered-deck-outdoor-room'],
    relatedGuideSlugs: ['composite-vs-wood-decking-kansas-city'],
    publishedAt: contentDate,
    updatedAt: contentDate,
  },
  {
    slug: 'deck-replacement',
    title: 'Deck Replacement in Kansas City',
    shortTitle: 'Deck Replacement',
    metaTitle: 'Deck Replacement Kansas City | DecksRXKC',
    metaDescription:
      'Replace an aging Kansas City deck with evaluated framing, a better layout, new stairs and railings, and wood or composite decking.',
    eyebrow: 'Old deck to useful outdoor space',
    heroCopy:
      'Replace a worn, unsafe, or undersized deck with a stronger plan that better fits the home, yard, and the way you want to use it.',
    image: '/images/optimized/kansas-city-elevated-screened-deck-wood-stairs.jpg',
    icon: 'wrench',
    bestFor: ['Aging decks', 'Repeated repairs', 'Layout problems', 'Material upgrades'],
    bullets: [
      'Removal and visible-condition review before the new system is completed',
      'Wood, Trex, or TimberTech surfaces with coordinated rails and stairs',
      'Opportunity to improve the footprint, yard access, shade, or screening',
    ],
    sections: [
      {
        eyebrow: 'Choose the Scope',
        title: 'Repair, resurface, or replace?',
        body:
          'The decision begins with the supporting deck, not the surface appearance. A sound frame may support focused work. Widespread movement, deterioration, repeated failures, or a poor layout can make replacement the clearer long-term path.',
        items: ['Condition of frame and supports', 'Stability of stairs and railings', 'Extent of recurring repairs', 'Remaining layout and material goals'],
      },
      {
        eyebrow: 'Build Back Better',
        title: 'Use replacement to solve the old deck’s problems',
        body:
          'A replacement can keep a successful footprint or improve what never worked. Consider furniture space, stair direction, privacy, material upkeep, and whether shade or screening belongs in the new plan.',
        items: ['Larger or more useful footprint', 'Clearer route to the yard', 'Lower-maintenance materials', 'Covered or screened-in zone'],
      },
    ],
    process: [
      { title: 'Assess', description: 'Review visible structure, surface, stairs, railings, use patterns, and project goals.' },
      { title: 'Choose the replacement plan', description: 'Set footprint, materials, rails, stairs, and optional outdoor-room upgrades.' },
      { title: 'Remove and verify', description: 'Demolish the old deck and address relevant conditions revealed during removal.' },
      { title: 'Rebuild', description: 'Construct the new deck as one coordinated framing, surface, railing, and access system.' },
    ],
    decisionPoints: [
      { title: 'Keep or change the footprint', description: 'Preserve what worked or improve furniture space, circulation, and the relationship to the yard.' },
      { title: 'Wood or composite', description: 'Compare first cost, maintenance, appearance, exposure, and long-term plans.' },
      { title: 'Stairs and access', description: 'Use the rebuild to correct inconvenient or poorly placed backyard access.' },
      { title: 'Add shade or screening', description: 'Coordinate structure and layout now if an outdoor-room upgrade is part of the goal.' },
    ],
    faqs: [
      { question: 'When should a deck be replaced instead of repaired?', answer: 'Replacement is often worth considering when concerns are widespread, several major components are declining, or the deck no longer fits how the space is used.' },
      { question: 'Can the new deck be larger than the old one?', answer: 'Often, yes. The site, home, project requirements, and budget determine whether a larger or differently shaped deck is practical.' },
      { question: 'Can part of the old frame be reused?', answer: 'Possibly, but only after its condition, layout, spacing, and suitability for the new material package have been assessed.' },
      { question: 'Can replacement include new stair placement?', answer: 'Yes. Replacement is a good time to reconsider how the deck connects to patios, gates, doors, and the yard.' },
      { question: 'What happens when demolition reveals another issue?', answer: 'The relevant condition should be documented and discussed before work beyond the agreed scope proceeds.' },
    ],
    relatedServiceSlugs: ['deck-repair', 'composite-decks', 'stairs-and-railings'],
    relatedProjectSlugs: ['ground-up-deck-replacement', 'elevated-composite-deck-and-stairs'],
    relatedGuideSlugs: ['repair-or-replace-your-deck', 'composite-vs-wood-decking-kansas-city'],
    publishedAt: contentDate,
    updatedAt: contentDate,
  },
  {
    slug: 'deck-repair',
    title: 'Deck Repair in Kansas City',
    shortTitle: 'Deck Repair',
    metaTitle: 'Deck Repair Kansas City | DecksRXKC',
    metaDescription:
      'DecksRXKC evaluates Kansas City deck repairs involving boards, stairs, railings, framing, connections, and practical safety improvements.',
    eyebrow: 'Fix the right problem',
    heroCopy:
      'Address worn, loose, or difficult-to-use deck components with clear guidance about what can be repaired and when replacement makes more sense.',
    image: '/images/kansas-city-deck-stairs-railing-skirt.jpg',
    icon: 'wrench',
    bestFor: ['Localized damage', 'Loose railings', 'Stair issues', 'Usability fixes'],
    bullets: [
      'Assessment begins with the visible concern and the supporting components around it',
      'Board, railing, stair, framing, and access improvements considered together',
      'Clear recommendations when focused repair is not the better long-term investment',
    ],
    sections: [
      {
        eyebrow: 'What to Watch',
        title: 'Look beyond a worn deck board',
        body:
          'One damaged board may be isolated. Repeated soft areas, movement, loose railings, unstable stairs, or water collecting around key components can signal a broader concern worth assessing.',
        items: ['Soft or split boards', 'Loose guards or handrails', 'Movement under normal use', 'Stair or landing instability'],
      },
      {
        eyebrow: 'Scope',
        title: 'A useful repair has a clear boundary',
        body:
          'A repair quote should explain what the work addresses, what remains unchanged, and whether related conditions may affect the result. That distinction helps homeowners compare a focused fix with a larger rebuild.',
      },
    ],
    process: [
      { title: 'Describe the concern', description: 'Share what feels loose, worn, unstable, or difficult to use and how long it has been present.' },
      { title: 'Assess the surrounding deck', description: 'Review the problem area and related visible components before defining the repair.' },
      { title: 'Compare paths', description: 'Explain focused repair, phased work, or replacement when more than one approach is practical.' },
      { title: 'Complete the agreed repair', description: 'Address the defined scope and communicate relevant conditions discovered during the work.' },
    ],
    decisionPoints: [
      { title: 'Repair', description: 'Best suited to an isolated concern when the supporting deck remains appropriate for the work.' },
      { title: 'Resurface', description: 'Worth considering only when the frame can support the planned surface and related upgrades.' },
      { title: 'Replace', description: 'Often clearer when multiple major components are declining or the layout no longer serves the home.' },
    ],
    faqs: [
      { question: 'Can DecksRXKC repair only part of a deck?', answer: 'Yes. When a focused repair is appropriate, DecksRXKC can address the defined area and explain relevant conditions around it.' },
      { question: 'Can only the deck boards be replaced?', answer: 'Sometimes. The frame, spacing, layout, and related components should be evaluated before investing in a new surface.' },
      { question: 'Can loose railings be repaired?', answer: 'In some cases. The railing and the deck components supporting it should both be reviewed before deciding on repair or replacement.' },
      { question: 'What if the deck needs more than repair?', answer: 'If a focused repair is unlikely to provide a durable result, DecksRXKC can compare phased improvements with full replacement.' },
      { question: 'How should I prepare for a repair assessment?', answer: 'Note where the concern appears, when it started, whether it changes with weather, and any previous repair work. Photos can also help begin the conversation.' },
    ],
    relatedServiceSlugs: ['deck-replacement', 'stairs-and-railings', 'composite-decks'],
    relatedProjectSlugs: ['deck-stair-and-railing-upgrade', 'ground-up-deck-replacement'],
    relatedGuideSlugs: ['repair-or-replace-your-deck'],
    publishedAt: contentDate,
    updatedAt: contentDate,
  },
  {
    slug: 'stairs-and-railings',
    title: 'Deck Stair Replacement & Railings in Kansas City',
    shortTitle: 'Stairs & Railings',
    metaTitle: 'Deck Stair Replacement Kansas City | DecksRXKC',
    metaDescription:
      'DecksRXKC replaces and upgrades Kansas City deck stairs, landings, handrails, guards, dark railing systems, and backyard access.',
    eyebrow: 'Safer, easier backyard access',
    heroCopy:
      'Stairs and railings shape how a deck feels every day. Thoughtful placement and clean transitions make the route safer, easier, and more finished.',
    image: '/images/kansas-city-composite-deck-cable-railing-stairs.jpg',
    icon: 'hammer',
    bestFor: ['Stair replacement', 'Safer access', 'Railing upgrades', 'Deck refreshes'],
    bullets: [
      'Stair runs and landings planned around grade, doors, patios, and normal traffic',
      'Dark metal, cable-style, and wood railing options coordinated with the deck',
      'Works as a focused project or part of a repair, replacement, or new build',
    ],
    sections: [
      {
        eyebrow: 'Warning Signs',
        title: 'Know when stairs deserve a closer look',
        body:
          'Movement, soft components, loose rails, uneven treads, awkward landings, and repeated patching are reasons to assess the complete stair system and its connection to the deck.',
        items: ['Loose guard or handrail', 'Soft or split stair parts', 'Movement during normal use', 'Poorly placed or uneven landing'],
      },
      {
        eyebrow: 'Repair or Replace',
        title: 'Treat the stairs as a connected system',
        body:
          'A tread, stringer, landing, rail, and the deck support each affect the others. A focused repair can make sense when the concern is isolated; broader wear or an awkward layout may make a rebuilt run the better choice.',
      },
      {
        eyebrow: 'Design',
        title: 'Use placement to improve the whole yard',
        body:
          'Stair direction affects patio access, gates, furniture, landscaping, and open yard space. The most direct route is not always the most useful one, so circulation should be considered before rebuilding in the same location.',
        items: ['Door-to-yard traffic', 'Landing and gate clearance', 'Views from the house', 'Railing and lighting coordination'],
      },
    ],
    process: [
      { title: 'Assess the route', description: 'Review current stairs, landing, railing, grade, deck support, and everyday traffic.' },
      { title: 'Choose repair or rebuild', description: 'Define whether a focused correction or a complete new stair run better addresses the concern.' },
      { title: 'Plan the details', description: 'Coordinate tread, landing, handrail, guard, railing transition, and optional lighting.' },
      { title: 'Build and finish', description: 'Complete the stair and railing work as one consistent access system.' },
    ],
    decisionPoints: [
      { title: 'Keep or move the stairs', description: 'Compare the current route with patio, gate, door, utility, and yard-use priorities.' },
      { title: 'Repair or rebuild', description: 'Base the scope on the condition of the complete stair system and supporting deck.' },
      { title: 'Railing style', description: 'Choose a system that fits the deck material, views, maintenance, and desired exterior look.' },
      { title: 'Landing and lighting', description: 'Plan safe transitions and visibility as part of the stair layout rather than after it.' },
    ],
    faqs: [
      { question: 'Can railings be upgraded without rebuilding the whole deck?', answer: 'Sometimes. The existing deck and the areas receiving the new railing should be assessed before the scope is confirmed.' },
      { question: 'Can stairs be moved or redesigned?', answer: 'Often, yes. Stair placement can be reconsidered around yard access, patios, doors, grade, and how the deck is used.' },
      { question: 'Can only the damaged stair tread be replaced?', answer: 'Possibly. The other treads, stringers, rails, landing, and connection to the deck should be reviewed to make sure the problem is isolated.' },
      { question: 'What railing styles are available?', answer: 'DecksRXKC can discuss dark metal, cable-style, and wood options based on the deck, views, maintenance goals, and complete project.' },
      { question: 'Can lighting be included with new stairs?', answer: 'Yes. Lighting locations are easiest to coordinate while the stair layout and finish details are being planned.' },
      { question: 'Do new stairs require a new landing?', answer: 'The appropriate landing depends on the layout, grade, existing conditions, and project requirements. It should be considered as part of the complete stair plan.' },
    ],
    relatedServiceSlugs: ['deck-repair', 'deck-replacement', 'custom-decks'],
    relatedProjectSlugs: ['deck-stair-and-railing-upgrade', 'elevated-composite-deck-and-stairs'],
    relatedGuideSlugs: ['repair-or-replace-your-deck'],
    publishedAt: contentDate,
    updatedAt: contentDate,
  },
]

export const featuredServicePages = servicePages.filter((service) =>
  ['custom-decks', 'screened-in-decks', 'covered-decks', 'composite-decks'].includes(service.slug),
)

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug)
}

export function getServicePagePath(service: ServicePage) {
  return `/services/${service.slug}`
}

export function getServicesBySlugs(slugs: string[]) {
  return slugs.flatMap((slug) => {
    const service = getServicePage(slug)
    return service ? [service] : []
  })
}

export function getServiceIcon(service: ServicePage): ComponentType<LucideProps> {
  return serviceIconMap[service.icon]
}
