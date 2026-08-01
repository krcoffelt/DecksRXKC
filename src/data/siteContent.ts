import { Hammer, Home, ShieldCheck, Trees, Wrench } from 'lucide-react'

export const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Guides', href: '/guides' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const trustPoints = [
  { label: 'Composite & Wood Decks', copy: 'Built for Kansas City weather', icon: Hammer },
  { label: 'Screened-In Options', copy: 'Comfort without bugs or harsh sun', icon: ShieldCheck },
  { label: 'Kansas City Local', copy: 'Designed for metro-area homes', icon: Trees },
]

export const homeServices = [
  {
    title: 'Custom Deck Builds',
    description: 'New decks, rebuilds, stairs, framing, decking, and railing systems planned around your home.',
    image: '/images/optimized/kansas-city-elevated-composite-deck-cable-railing-stairs.jpg',
    icon: Hammer,
    href: '/services/custom-decks',
    proof: 'Composite and wood options',
  },
  {
    title: 'Screened-In Decks',
    description: 'Bug-blocking screen systems and covered layouts that make outdoor time more comfortable.',
    image: '/images/optimized/kansas-city-screened-porch-wood-trim-black-screen.jpg',
    icon: ShieldCheck,
    href: '/services/screened-in-decks',
    proof: 'Screen doors, panels, and outdoor rooms',
  },
  {
    title: 'Covered Decks',
    description: 'Roof structures, ceilings, fans, lights, and gutters that turn a deck into usable living space.',
    image: '/images/optimized/kansas-city-covered-screened-porch-addition.jpg',
    icon: Home,
    href: '/services/covered-decks',
    proof: 'Shade, weather cover, and finished ceilings',
  },
]

export const projectTypes = [
  'Not sure yet',
  'Custom deck build',
  'Composite deck',
  'Wood deck',
  'Covered deck',
  'Screened-in deck',
  'Deck repair',
  'Deck replacement',
  'Railings or stairs',
  'Outdoor living space',
]

export const timelines = [
  'Flexible',
  'As soon as possible',
  'Within 1-3 months',
  'Within 3-6 months',
  'Planning for later this year',
]

export const googleReviews = [
  {
    name: 'DecksRXKC customer',
    meta: 'Google review',
    date: 'Recent review',
    review:
      'DecksRX KC did an amazing job building my deck. They faced some major challenges, especially a lot of concrete that had to be broken up and removed. They also finished much quicker than I had imagined. They really pay attention to the details and the final result is absolutely beautiful!',
  },
  {
    name: 'Mark Dixon',
    meta: '7 reviews - 3 photos',
    date: '6 weeks ago',
    review: 'Great work on our staining project. Flexible and responsive. Good communication and easy to work with.',
  },
  {
    name: 'Christopher Hinken',
    meta: '5 reviews - 3 photos',
    date: '6 weeks ago',
    review: 'From taking the old deck out and rebuilding from the ground up DecksRx did a fabulous job. The work site was cleaned up...',
  },
  {
    name: 'Matt Panuco',
    meta: '1 review - 0 photos',
    date: '7 weeks ago',
    review:
      'This was a great experience using Charlie. He was right on with his vision and plans. He did everything he said he would do. I would recommend him for your next outdoor environment project.',
  },
  {
    name: 'Ben Hammes',
    meta: '9 reviews - 1 photo',
    date: '7 weeks ago',
    review: 'DecksRX KC build a deck for us last month. They did an excellent job. Got it done in one day and it turned out better...',
  },
  {
    name: 'Kylee Beyea',
    meta: '4 reviews - 5 photos',
    date: '8 weeks ago',
    review:
      'Charlie with DecksRx built a 6-foot privacy fence for me and did such a good job, I had him come back to do more! He also built us an awesome new deck extending off an existing patio. His workmanship is great, communication is timely, and I would recommend him to anyone.',
  },
  {
    name: 'Sunny Y.',
    meta: 'Local Guide - 13 reviews - 19 photos',
    date: '8 weeks ago',
    review: 'Charlie did such a great job with a repair on part of my deck. I would use him again for any woodwork!',
  },
  {
    name: 'Mike Dunn',
    meta: '13 reviews - 1 photo',
    date: '8 weeks ago',
    review:
      'We had a small fence/ gate replacement. DecksRX KC did a great job replacing the existing structure along with adding one to our neighbors house. I would highly recommend this company.',
  },
  {
    name: 'Laura Heitshusen',
    meta: '2 reviews - 1 photo',
    date: '8 weeks ago',
    review:
      'This Company did a great job on our upper deck! They were prompt, considerate and worked hard to meet deadlines. They also had great suggestions and judgement as far as the appropriate choices to make our deck long lasting and durable!!!',
  },
  {
    name: 'lucas castanien',
    meta: '1 review - 4 photos',
    date: '8 weeks ago',
    review: 'Charlie and Ryan were great to work with and did an amazing job in a time efficient manner. I would hire them again or recommend to anyone!',
  },
  {
    name: 'Brandy Sansone',
    meta: '10 reviews - 7 photos',
    date: '8 weeks ago',
    review:
      'Charlie is incredible! Very skilled at his craft, responsive, and truly cares about excellent craftsmanship. We appreciate and love our new big deck energy!! Cannot wait to get it all stained',
  },
  {
    name: 'Michelle Petersen',
    meta: '8 reviews - 3 photos',
    date: '8 weeks ago',
    review: 'Charlie and his crew were the best! They replaced our front porch, back deck, built new stairs off the deck and off our...',
  },
]

export const quickAnswers = [
  {
    question: 'Who builds screened-in decks near Kansas City?',
    answer:
      'DecksRXKC builds screened-in decks, covered decks, and outdoor rooms for homeowners across the Kansas City metro.',
  },
  {
    question: 'Can DecksRXKC replace an old deck?',
    answer:
      'Yes. DecksRXKC handles deck replacement, framing, stairs, railings, and composite or wood decking options.',
  },
  {
    question: 'What areas does DecksRXKC serve?',
    answer:
      "DecksRXKC serves Kansas City and nearby Kansas and Missouri communities including Overland Park, Olathe, Shawnee, Lee's Summit, and Raymore.",
  },
]

export const serviceIconMap = {
  hammer: Hammer,
  home: Home,
  shield: ShieldCheck,
  trees: Trees,
  wrench: Wrench,
}
