import { createFileRoute } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  Hammer,
  Home,
  Menu,
  MessageSquare,
  ShieldCheck,
  Sun,
  Trees,
  X,
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const navItems = ['Decks', 'Screened-In Decks', 'Covered Decks', 'Our Work', 'Contact']

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

const values = [
  {
    title: 'Clear quoting',
    copy: 'Know what you are getting before the project starts.',
    icon: MessageSquare,
  },
  {
    title: 'Built to last',
    copy: 'Durable materials, solid framing, and clean craftsmanship.',
    icon: ShieldCheck,
  },
  {
    title: 'Designed for real life',
    copy: 'Perfect for hosting, relaxing, pets, kids, and everyday use.',
    icon: Trees,
  },
]

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

function LandingPage() {
  return (
    <main className="overflow-hidden bg-warm-white text-ink">
      <Hero />
      <Services />
      <ProjectShowcase />
      <Testimonials />
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
        <a href="#top" className="flex items-center gap-3" aria-label="DecksRXKC home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-soft-beige/70 text-soft-beige">
            <Home className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-xl font-black tracking-tight sm:text-2xl">DecksRXKC</span>
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

function Testimonials() {
  return (
    <section id="contact" className="bg-warm-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"
        >
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Testimonials</p>
            <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Trusted by homeowners across Kansas City
            </h2>
            <blockquote className="mt-8 border-l-4 border-muted-green pl-6 text-2xl font-semibold leading-snug text-charcoal sm:text-3xl">
              "DecksRXKC made the entire process easy. They helped us understand our options,
              gave us a clear quote, and built a deck that feels like it should have always
              been part of our home."
            </blockquote>
            <p className="mt-5 text-base font-black text-muted-green">Homeowner in the Kansas City Metro</p>
          </div>

          <div className="grid gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.5rem] bg-white p-6 shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted-green text-white">
                    <value.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-charcoal">{value.title}</h3>
                    <p className="mt-2 leading-7 text-ink/70">{value.copy}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-charcoal text-white shadow-image"
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
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a className={lightButton} href="tel:+19132056531">
                  Get a Free Quote
                  <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
                <p className="text-sm font-bold text-white/62">Serving Kansas City and surrounding areas.</p>
              </div>
            </div>
            <img
              className="h-72 w-full object-cover lg:h-full"
              src="/images/kansas-city-elevated-composite-deck-cable-railing-stairs.png"
              alt="Kansas City composite deck with stairs and railings"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function slugify(value: string) {
  return value.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-')
}
