import { createFileRoute } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle,
  Hammer,
  Home,
  LoaderCircle,
  MapPin,
  Menu,
  ShieldCheck,
  Sun,
  Trees,
  X,
} from 'lucide-react'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { SiteFooter } from '../components/SiteFooter'
import { featuredServiceAreas, getServiceAreaLabel, getServiceAreaPath, serviceAreas } from '../data/serviceAreas'
import { isSupabaseConfigured, supabase } from '../lib/supabase'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const navItems = ['Decks', 'Screened-In Decks', 'Covered Decks', 'Service Areas', 'Our Work', 'Contact']

const trustPoints = [
  { label: 'Composite & Wood Decks', copy: 'Built for Kansas City weather', icon: Hammer },
  { label: 'Screened-In Options', copy: 'Comfort without bugs or harsh sun', icon: ShieldCheck },
  { label: 'Kansas City Local', copy: 'Designed for metro-area homes', icon: Trees },
]

const services = [
  {
    title: 'Custom Deck Builds',
    description:
      'New decks, rebuilds, stairs, framing, decking, and railing options built to fit your home and budget.',
    image: '/images/kansas-city-elevated-composite-deck-cable-railing-stairs.png',
    icon: Hammer,
    tags: ['Composite decking', 'Pressure-treated wood', 'Aluminum railing', 'Stair access'],
  },
  {
    title: 'Screened-In Decks',
    description:
      'Enjoy your backyard without bugs, harsh sun, or constant maintenance. Great for second-story decks, covered patios, and outdoor rooms.',
    image: '/images/kansas-city-screened-porch-wood-trim-black-screen.png',
    icon: ShieldCheck,
    tags: ['Pet-proof screen options', 'Screen doors', 'Screen systems', 'Covered layouts'],
  },
  {
    title: 'Covered Decks & Outdoor Rooms',
    description:
      'Add a roof, ceiling finish, lights, fan, gutters, and other upgrades to make your deck feel like a true extension of your home.',
    image: '/images/kansas-city-covered-screened-porch-addition.png',
    icon: Home,
    tags: ['Shed roofs', 'Gable roofs', 'Shiplap ceilings', 'Lighting & fans'],
  },
]

const projects = [
  {
    title: 'Second-Story Deck Rebuild',
    details: 'Composite decking, black aluminum railing, stairs, and upgraded framing.',
    image: '/images/kansas-city-elevated-screened-deck-wood-stairs.png',
  },
  {
    title: 'Screened-In Outdoor Room',
    details: 'Pet-proof screening, screen door, covered roof, and finished ceiling.',
    image: '/images/kansas-city-elevated-screened-porch-black-railing.png',
  },
  {
    title: 'Covered Deck Upgrade',
    details: 'Roof structure, shiplap ceiling, lighting, fan, and weather protection.',
    image: '/images/kansas-city-composite-covered-deck-railing-detail.png',
  },
]

const projectTypes = [
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

const timelines = [
  'Flexible',
  'As soon as possible',
  'Within 1-3 months',
  'Within 3-6 months',
  'Planning for later this year',
]

const googleReviews = [
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
    review:
      'Great work on our staining project. Flexible and responsive. Good communication and easy to work with.',
  },
  {
    name: 'Christopher Hinken',
    meta: '5 reviews - 3 photos',
    date: '6 weeks ago',
    review:
      'From taking the old deck out and rebuilding from the ground up DecksRx did a fabulous job. The work site was cleaned up...',
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
    review:
      'DecksRX KC build a deck for us last month. They did an excellent job. Got it done in one day and it turned out better...',
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
    review:
      'Charlie did such a great job with a repair on part of my deck. I would use him again for any woodwork!',
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
    review:
      'Charlie and Ryan were great to work with and did an amazing job in a time efficient manner. I would hire them again or recommend to anyone!',
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
    review:
      'Charlie and his crew were the best! They replaced our front porch, back deck, built new stairs off the deck and off our...',
  },
]

const initialLeadForm = {
  name: '',
  phone: '',
  email: '',
  city: '',
  projectType: projectTypes[0],
  timeline: timelines[0],
  message: '',
}

type LeadFormState = typeof initialLeadForm
type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const lightButton =
  'inline-flex min-h-14 items-center justify-center rounded-full bg-soft-beige px-8 text-base font-black text-charcoal shadow-soft transition hover:bg-white hover:text-charcoal'

const compactLightButton =
  'inline-flex min-h-11 items-center justify-center rounded-full bg-soft-beige px-6 text-sm font-black text-charcoal shadow-soft transition hover:bg-white hover:text-charcoal'

const outlineButton =
  'inline-flex min-h-14 items-center justify-center rounded-full border border-white/55 px-8 text-base font-black text-white transition hover:border-white hover:bg-white hover:text-charcoal'

const fieldClass =
  'mt-2 min-h-12 w-full rounded-2xl border border-white/12 bg-white px-4 text-base font-semibold text-charcoal shadow-none outline-none transition placeholder:text-charcoal/45 focus:border-soft-beige focus:ring-4 focus:ring-soft-beige/25'

const labelClass = 'text-xs font-black uppercase tracking-[0.14em] text-soft-beige'

function LandingPage() {
  return (
    <main className="overflow-hidden bg-warm-white text-ink">
      <Hero />
      <Services />
      <ProjectShowcase />
      <ServiceAreas />
      <Testimonials />
      <SiteFooter />
    </main>
  )
}

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-charcoal text-white">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/kansas-city-composite-covered-deck-railing-detail.png"
        alt="Finished Kansas City covered deck with composite railing detail"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0_/_0.62),rgb(0_0_0_/_0.24)_48%,rgb(0_0_0_/_0.1))]" />

      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8"
      >
        <a href="#top" className="flex shrink-0 items-center" aria-label="DecksRXKC home">
          <img
            className="h-11 w-auto max-w-[180px] object-contain sm:h-14 sm:max-w-[220px]"
            src="/images/decksrxkc-header-logo-cropped.png"
            alt="DecksRXKC"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold text-white/85 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} className="transition hover:text-soft-beige" href={item === 'Contact' ? '#contact' : `#${slugify(item)}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className={compactLightButton}
          >
            Free Quote
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute inset-x-5 top-20 z-30 rounded-3xl border border-white/15 bg-charcoal/95 p-4 shadow-soft backdrop-blur lg:hidden"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={item === 'Contact' ? '#contact' : `#${slugify(item)}`}
                className="block rounded-2xl px-4 py-3 text-base font-bold text-white/90"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 flex min-h-12 items-center justify-center rounded-full bg-soft-beige px-6 font-black text-charcoal transition hover:bg-white hover:text-charcoal"
              onClick={() => setMenuOpen(false)}
            >
              Free Quote
            </a>
          </motion.nav>
        ) : null}
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl flex-col justify-center px-5 pb-8 pt-12 sm:px-8 sm:pb-28 lg:pb-36">
        <div className="max-w-4xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-soft-beige"
          >
            <span className="h-px w-12 bg-soft-beige" aria-hidden="true" />
            <span>Kansas City deck contractor</span>
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.22 }}
            className="max-w-5xl text-5xl font-black leading-[0.96] tracking-tight sm:text-6xl lg:text-8xl"
          >
            Custom Decks Built for Kansas City Homes
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.34 }}
            className="mt-6 max-w-3xl text-2xl font-semibold leading-tight text-soft-beige sm:text-3xl"
          >
            Designed for summer nights, family dinners, and every season in between.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.44 }}
            className="mt-6 max-w-3xl text-base leading-8 text-white/82 sm:text-lg"
          >
            DecksRXKC builds custom decks, screened-in decks, covered decks, stairs, railings,
            and outdoor living spaces across the Kansas City metro. Whether you are replacing
            an old deck or starting from scratch, we make the process simple from quote to completion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.58 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a className={lightButton} href="#contact">
              Get a Free Quote
              <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
            <a className={outlineButton} href="#our-work">
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.78 }}
        className="relative z-10 mx-auto grid w-full max-w-7xl gap-3 px-5 pb-6 sm:absolute sm:inset-x-5 sm:bottom-6 sm:grid-cols-3 sm:px-3 sm:pb-0"
      >
        {trustPoints.map(({ label, copy, icon: Icon }) => (
          <div key={label} className="border-t border-soft-beige/70 pt-4 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-soft-beige text-charcoal">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-sm font-black">{label}</p>
            </div>
            <p className="mt-2 max-w-xs text-sm leading-6 text-white/68">{copy}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

function Services() {
  return (
    <section id="decks" className="bg-warm-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="max-w-4xl"
        >
          <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Services</p>
          <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Outdoor spaces <span className="font-serif italic text-muted-green">built around</span> how you actually live
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/72">
            From a simple deck replacement to a fully covered and screened-in space, DecksRXKC
            helps homeowners create outdoor areas that are comfortable, durable, and made for everyday use.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-soft"
              id={index === 1 ? 'screened-in-decks' : index === 2 ? 'covered-decks' : undefined}
            >
              <div className="relative h-72 overflow-hidden">
                <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={service.image} alt={`${service.title} by DecksRXKC`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/52 to-transparent" />
                <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-charcoal">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-2xl font-black text-charcoal">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-ink/70">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-warm-white px-3 py-2 text-xs font-black text-muted-green">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectShowcase() {
  return (
    <section id="our-work" className="bg-charcoal px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Project Showcase</p>
            <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              From old deck to favorite room of the house
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-lg leading-8 text-white/72"
          >
            Whether your current deck is worn out, too small, unsafe, or unusable in the
            summer heat, DecksRXKC can help you turn it into a space your family actually wants to use.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              className="group relative min-h-[430px] overflow-hidden rounded-[2rem] shadow-image"
            >
              <img className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src={project.image} alt={project.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/28 to-black/5" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl font-black">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/78">{project.details}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="mt-8 grid gap-0 overflow-hidden rounded-[1.5rem] border border-white/14 sm:grid-cols-2"
        >
          <div className="border-b border-white/14 bg-black/18 p-6 sm:border-b-0 sm:border-r">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-white/52">Before</p>
            <p className="mt-2 text-xl font-black">Hot, Exposed, Unused</p>
          </div>
          <div className="bg-soft-beige p-6 text-charcoal">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-muted-green">After</p>
            <p className="mt-2 text-xl font-black">Shaded, Screened, Comfortable</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-warm-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Service Areas</p>
            <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Deck builders for the Kansas City metro
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/72">
              DecksRXKC serves homeowners across both sides of the state line with custom decks,
              screened-in decks, covered decks, stairs, railings, and outdoor living upgrades.
            </p>
            <div className="mt-8 grid gap-4 border-y border-charcoal/12 py-6 sm:grid-cols-3">
              <div>
                <p className="text-4xl font-black text-charcoal">{serviceAreas.length}</p>
                <p className="mt-1 text-sm font-bold text-ink/62">Metro service areas</p>
              </div>
              <div>
                <p className="text-4xl font-black text-charcoal">KS + MO</p>
                <p className="mt-1 text-sm font-bold text-ink/62">Both sides of KC</p>
              </div>
              <div>
                <p className="text-4xl font-black text-charcoal">3</p>
                <p className="mt-1 text-sm font-bold text-ink/62">Core deck services</p>
              </div>
            </div>
            <a className="mt-8 inline-flex items-center text-sm font-black uppercase tracking-[0.14em] text-muted-green transition hover:text-charcoal" href="/service-areas">
              View every service area
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="grid gap-px overflow-hidden rounded-[2rem] border border-charcoal/10 bg-charcoal/10 shadow-soft sm:grid-cols-2 xl:grid-cols-3"
          >
            {featuredServiceAreas.map((area) => (
              <a
                key={area.slug}
                className="group bg-white p-6 transition hover:bg-charcoal hover:text-white"
                href={getServiceAreaPath(area)}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-warm-white text-muted-green transition group-hover:bg-soft-beige group-hover:text-charcoal">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-wood transition group-hover:text-soft-beige" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-black text-charcoal transition group-hover:text-white">
                  {getServiceAreaLabel(area)}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-ink/64 transition group-hover:text-white/68">
                  {area.projectTypes.slice(0, 2).join(' and ')} for homeowners in {area.county}.
                </p>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <>
      <section id="reviews" className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
            className="text-center"
          >
            <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Google Reviews</p>
            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              The kind of deck work homeowners recommend
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/68">
              Real Google feedback from customers who trusted DecksRXKC with decks, fences,
              repairs, staining, stairs, and outdoor living projects.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-14 flex flex-col gap-6 border-y border-charcoal/10 py-8 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <GoogleGLogo className="h-12 w-12" />
                <span className="text-3xl font-semibold text-charcoal">Google Rating</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-4xl font-black text-charcoal">5.0</span>
                <RatingStars className="text-3xl" />
                <span className="text-base font-bold text-ink/52">{googleReviews.length} recent reviews</span>
              </div>
            </div>
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-charcoal px-8 text-base font-black text-white shadow-soft transition hover:bg-muted-green"
              href="https://www.google.com/search?q=DecksRX+KC+Google+reviews"
              target="_blank"
              rel="noreferrer"
            >
              Write a Review
              <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-12 flex snap-x gap-6 overflow-x-auto pb-4"
            aria-label="DecksRXKC Google review cards"
          >
            {googleReviews.map((review) => (
              <ReviewCard key={`${review.name}-${review.date}`} review={review} />
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="bg-warm-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[2rem] bg-charcoal text-white shadow-image"
          >
            <div className="grid lg:grid-cols-[1fr_0.8fr]">
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="flex items-center gap-2 text-soft-beige">
                  <Sun className="h-5 w-5" aria-hidden="true" />
                  <p className="text-sm font-black uppercase tracking-[0.16em]">Free Quote</p>
                </div>
                <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl">
                  Ready to build the deck your home has been missing?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                  Tell us about your project and we will help you understand the best options
                  for your space, budget, and timeline.
                </p>
                <p className="mt-8 text-sm font-bold text-white/62">
                  Serving Kansas City and surrounding areas.
                </p>
              </div>
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function ReviewCard({ review }: Readonly<{ review: (typeof googleReviews)[number] }>) {
  return (
    <article className="flex h-[430px] w-[86vw] shrink-0 snap-start flex-col justify-between rounded-[1.5rem] border border-charcoal/10 bg-warm-white p-6 shadow-soft sm:w-[420px]">
      <div>
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-charcoal text-xl font-black text-soft-beige">
            {getInitials(review.name)}
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-black text-charcoal">{review.name}</h3>
            <p className="mt-1 text-sm font-bold text-ink/48">{review.meta}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <RatingStars className="text-xl" />
              <span className="text-sm font-bold text-ink/50">{review.date}</span>
            </div>
          </div>
        </div>
        <p className="mt-6 overflow-hidden text-xl font-semibold leading-8 text-charcoal [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5]">
          "{review.review}"
        </p>
        <p className="mt-3 text-base font-bold text-ink/42">Read more</p>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <GoogleGLogo className="h-9 w-9" />
        <div className="text-sm leading-5">
          <p className="font-bold text-ink/52">Posted on</p>
          <p className="font-black text-[#4285f4]">Google</p>
        </div>
      </div>
    </article>
  )
}

function RatingStars({ className = '' }: Readonly<{ className?: string }>) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-[#fbbc04] ${className}`} aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">★</span>
      ))}
    </span>
  )
}

function GoogleGLogo({ className = '' }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-label="Google" role="img">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  )
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function LeadForm() {
  const [form, setForm] = useState<LeadFormState>(initialLeadForm)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  function updateField<Field extends keyof LeadFormState>(field: Field, value: LeadFormState[Field]) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage('')

    if (!isSupabaseConfigured || !supabase) {
      setSubmitState('error')
      setErrorMessage('Supabase is not configured yet. Add the VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.')
      return
    }

    setSubmitState('submitting')

    const { error } = await supabase.from('quote_requests').insert({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || null,
      city: form.city.trim(),
      project_type: form.projectType,
      timeline: form.timeline,
      message: form.message.trim() || null,
      source: 'decksrxkc-landing-page',
      user_agent: typeof navigator === 'undefined' ? null : navigator.userAgent,
      page_path: typeof window === 'undefined' ? '/' : window.location.pathname,
    })

    if (error) {
      setSubmitState('error')
      setErrorMessage(error.message)
      return
    }

    setForm(initialLeadForm)
    setSubmitState('success')
  }

  return (
    <form
      className="border-t border-white/12 bg-black/18 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className={labelClass}>Name</span>
          <input
            className={fieldClass}
            name="name"
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>

        <label>
          <span className={labelClass}>Phone</span>
          <input
            className={fieldClass}
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            placeholder="(913) 555-0123"
            autoComplete="tel"
            required
          />
        </label>

        <label>
          <span className={labelClass}>Email</span>
          <input
            className={fieldClass}
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>

        <label>
          <span className={labelClass}>City</span>
          <input
            className={fieldClass}
            name="city"
            value={form.city}
            onChange={(event) => updateField('city', event.target.value)}
            placeholder="Kansas City"
            autoComplete="address-level2"
            required
          />
        </label>

        <label>
          <span className={labelClass}>Project Type</span>
          <select
            className={`${fieldClass} appearance-none`}
            name="projectType"
            value={form.projectType}
            onChange={(event) => updateField('projectType', event.target.value)}
            required
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className={labelClass}>Timeline</span>
          <select
            className={`${fieldClass} appearance-none`}
            name="timeline"
            value={form.timeline}
            onChange={(event) => updateField('timeline', event.target.value)}
            required
          >
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </label>

        <label className="sm:col-span-2">
          <span className={labelClass}>Project Notes</span>
          <textarea
            className={`${fieldClass} min-h-32 py-3 leading-7`}
            name="message"
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            placeholder="Tell us what you want to build, repair, replace, or screen in."
          />
        </label>
      </div>

      {submitState === 'success' ? (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/14 bg-white/10 p-4 text-sm font-bold leading-6 text-white">
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-soft-beige" aria-hidden="true" />
          Your request was sent. We will follow up shortly.
        </div>
      ) : null}

      {submitState === 'error' ? (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200/30 bg-red-500/10 p-4 text-sm font-bold leading-6 text-red-100">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          {errorMessage || 'Something went wrong. Please call us or try again.'}
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          className="inline-flex min-h-14 items-center justify-center rounded-full bg-soft-beige px-8 text-base font-black text-charcoal shadow-soft transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
          type="submit"
          disabled={submitState === 'submitting'}
        >
          {submitState === 'submitting' ? (
            <>
              <LoaderCircle className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            <>
              Request Free Quote
              <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </>
          )}
        </button>
        <a className="text-sm font-black text-soft-beige transition hover:text-white" href="tel:+19132056531">
          Or call (913) 205-6531
        </a>
      </div>
    </form>
  )
}

function slugify(value: string) {
  return value.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-')
}
