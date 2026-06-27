import type { ComponentType } from 'react'
import type { LucideProps } from 'lucide-react'
import { serviceIconMap } from './siteContent'

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
  faqs: Array<{
    question: string
    answer: string
  }>
}

export const servicePages: ServicePage[] = [
  {
    slug: 'screened-in-decks',
    title: 'Screened-In Decks in Kansas City',
    shortTitle: 'Screened-In Decks',
    metaTitle: 'Screened-In Deck Builder Kansas City | DecksRXKC',
    metaDescription:
      'DecksRXKC builds screened-in decks and outdoor rooms for Kansas City homeowners who want shade, airflow, and fewer bugs.',
    eyebrow: 'Bug-free outdoor living',
    heroCopy:
      'Turn an open deck into a protected space for dinners, game nights, and summer evenings without giving up the outdoor feel.',
    image: '/images/optimized/kansas-city-screened-porch-wood-trim-black-screen.jpg',
    icon: 'shield',
    bestFor: ['Second-story decks', 'Covered patios', 'Outdoor rooms', 'Bug control'],
    bullets: [
      'Screen systems, doors, and panel layouts planned around your deck',
      'Options for pets, kids, airflow, shade, and privacy',
      'Works well with covered deck and railing upgrades',
    ],
    faqs: [
      {
        question: 'Can you screen in an existing deck?',
        answer:
          'Often, yes. DecksRXKC can evaluate the framing, roof conditions, railings, and layout to determine what needs to be added or rebuilt.',
      },
      {
        question: 'Do screened-in decks still feel open?',
        answer:
          'A good screen layout keeps airflow and views while reducing bugs, harsh sun, and wind exposure.',
      },
    ],
  },
  {
    slug: 'covered-decks',
    title: 'Covered Decks in Kansas City',
    shortTitle: 'Covered Decks',
    metaTitle: 'Covered Deck Builder Kansas City | DecksRXKC',
    metaDescription:
      'DecksRXKC builds covered decks, roof structures, ceilings, fans, lighting, and outdoor living upgrades in Kansas City.',
    eyebrow: 'Shade and weather protection',
    heroCopy:
      'Add a roof, finished ceiling, lighting, fans, and gutters so your deck works harder through more of the year.',
    image: '/images/optimized/kansas-city-covered-screened-porch-addition.jpg',
    icon: 'home',
    bestFor: ['Shade', 'Rain protection', 'Outdoor dining', 'Screened-in upgrades'],
    bullets: [
      'Roof structures designed to feel connected to the home',
      'Ceiling, fan, lighting, and gutter options',
      'Can pair with new decking, stairs, railings, or screens',
    ],
    faqs: [
      {
        question: 'Can a covered deck be added to an existing home?',
        answer:
          'Yes. The right approach depends on rooflines, structure, deck framing, drainage, and how the new cover connects to the house.',
      },
      {
        question: 'Can covered decks include screens later?',
        answer:
          'Many covered deck layouts can be planned so screens can be added as part of the same project or in a later phase.',
      },
    ],
  },
  {
    slug: 'composite-decks',
    title: 'Composite Decks in Kansas City',
    shortTitle: 'Composite Decks',
    metaTitle: 'Composite Deck Builder Kansas City | DecksRXKC',
    metaDescription:
      'DecksRXKC builds low-maintenance composite decks with railings, stairs, and outdoor living upgrades across Kansas City.',
    eyebrow: 'Low-maintenance deck builds',
    heroCopy:
      'Composite decking gives Kansas City homeowners a cleaner, longer-lasting surface with less routine maintenance than traditional wood.',
    image: '/images/optimized/kansas-city-elevated-composite-deck-cable-railing-stairs.jpg',
    icon: 'hammer',
    bestFor: ['Low maintenance', 'Modern railings', 'Family use', 'Deck replacements'],
    bullets: [
      'Composite decking options selected for durability and appearance',
      'Clean railing, stair, and fascia details',
      'Works for new builds, replacements, and elevated decks',
    ],
    faqs: [
      {
        question: 'Is composite decking good for Kansas City weather?',
        answer:
          'Composite decking is a strong option for homeowners who want lower maintenance through heat, sun, rain, and freeze-thaw cycles.',
      },
      {
        question: 'Can composite decking be used on an old deck frame?',
        answer:
          'Sometimes, but the frame should be inspected first. DecksRXKC can identify whether repair, reinforcement, or full replacement makes sense.',
      },
    ],
  },
  {
    slug: 'deck-replacement',
    title: 'Deck Replacement in Kansas City',
    shortTitle: 'Deck Replacement',
    metaTitle: 'Deck Replacement Kansas City | DecksRXKC',
    metaDescription:
      'DecksRXKC replaces aging decks with safer framing, stairs, railings, composite decking, wood decking, and better layouts.',
    eyebrow: 'Old deck to new outdoor space',
    heroCopy:
      'Replace a worn, unsafe, or undersized deck with a stronger layout that is easier to use and better matched to your home.',
    image: '/images/optimized/kansas-city-elevated-screened-deck-wood-stairs.jpg',
    icon: 'wrench',
    bestFor: ['Aging decks', 'Unsafe stairs', 'Rot concerns', 'Layout upgrades'],
    bullets: [
      'Removal, framing evaluation, decking, stairs, and railing planning',
      'Composite or wood replacement options',
      'Opportunity to add shade, screening, or better access to the yard',
    ],
    faqs: [
      {
        question: 'When should a deck be replaced instead of repaired?',
        answer:
          'Replacement is often the better path when framing, stairs, posts, or railings are aging, unsafe, or no longer fit how the space is used.',
      },
      {
        question: 'Can the new deck be larger than the old one?',
        answer:
          'Often, yes. DecksRXKC can help plan a better footprint, stairs, railing layout, and material package.',
      },
    ],
  },
  {
    slug: 'deck-repair',
    title: 'Deck Repair in Kansas City',
    shortTitle: 'Deck Repair',
    metaTitle: 'Deck Repair Kansas City | DecksRXKC',
    metaDescription:
      'DecksRXKC handles practical deck repair, stair repair, railing repair, board replacement, and safety-focused deck improvements.',
    eyebrow: 'Safer, cleaner deck repairs',
    heroCopy:
      'Fix the parts of your deck that are worn, loose, unsafe, or keeping your family from using the space comfortably.',
    image: '/images/kansas-city-deck-stairs-railing-skirt.jpg',
    icon: 'wrench',
    bestFor: ['Loose railings', 'Worn boards', 'Stair issues', 'Usability fixes'],
    bullets: [
      'Repair guidance based on safety, structure, and useful life',
      'Board, railing, stair, and access improvements',
      'Clear recommendations when replacement is the smarter investment',
    ],
    faqs: [
      {
        question: 'Can DecksRXKC repair only part of a deck?',
        answer:
          'Yes. If a focused repair makes sense, DecksRXKC can address the problem area and explain any related safety concerns.',
      },
      {
        question: 'What if the deck needs more than repair?',
        answer:
          'If repair is not the best use of budget, DecksRXKC can recommend replacement or phased upgrades instead.',
      },
    ],
  },
  {
    slug: 'stairs-and-railings',
    title: 'Deck Stairs and Railings in Kansas City',
    shortTitle: 'Stairs & Railings',
    metaTitle: 'Deck Stairs and Railings Kansas City | DecksRXKC',
    metaDescription:
      'DecksRXKC builds and upgrades deck stairs, aluminum railings, wood railings, and safer backyard access in Kansas City.',
    eyebrow: 'Details that make decks safer',
    heroCopy:
      'Stairs and railings shape how a deck looks, feels, and functions every day. Clean details make the whole project feel finished.',
    image: '/images/kansas-city-composite-deck-cable-railing-stairs.jpg',
    icon: 'hammer',
    bestFor: ['Safer access', 'Black railing', 'Stair rebuilds', 'Deck refreshes'],
    bullets: [
      'Stair layouts planned around grade, access, and traffic flow',
      'Aluminum, cable-style, and wood railing options',
      'Works as part of a new deck, repair, or replacement project',
    ],
    faqs: [
      {
        question: 'Can railings be upgraded without rebuilding the whole deck?',
        answer:
          'Sometimes. DecksRXKC can review the current deck condition and determine whether railing replacement is practical.',
      },
      {
        question: 'Can stairs be moved or redesigned?',
        answer:
          'Often, yes. Stair placement can be planned around yard access, patios, doors, and how the deck is used.',
      },
    ],
  },
]

export const featuredServicePages = servicePages.slice(0, 4)

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug)
}

export function getServicePagePath(service: ServicePage) {
  return `/services/${service.slug}`
}

export function getServiceIcon(service: ServicePage): ComponentType<LucideProps> {
  return serviceIconMap[service.icon]
}
