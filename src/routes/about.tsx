import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, CheckCircle, Quote } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ButtonLink } from '../components/ui'
import { business } from '../data/business'
import { getServiceAreaLabel, getServiceAreaPath, serviceAreas } from '../data/serviceAreas'
import { getServicePagePath, servicePages } from '../data/servicePages'
import { googleReviews } from '../data/siteContent'
import { absoluteUrl, getSeoHead, siteUrl } from '../lib/seo'
import { getResponsiveImageProps } from '../lib/images'

const aboutDescription = 'Meet DecksRXKC and learn how the team plans custom decks, repairs, replacements, screened rooms, stairs, and railings across the Kansas City metro.'

const process = [
  { title: 'Listen first', copy: 'Start with what feels limited, worn, awkward, exposed, or difficult to use—and what the finished space needs to make easier.' },
  { title: 'Read the whole space', copy: 'Consider the house, existing deck, visible condition, grade, doors, patios, yard access, furniture, views, sun, and shade together.' },
  { title: 'Compare practical paths', copy: 'Talk through repair, replacement, footprint, surface, stairs, railings, coverage, screening, and future upgrades before narrowing the scope.' },
  { title: 'Define the work', copy: 'Connect the chosen direction to a clear project scope, material decisions, visible details, and the sequence needed to complete the work.' },
  { title: 'Finish the system', copy: 'Treat framing, decking, rails, stairs, landings, fascia, trim, and outdoor-room details as parts of one finished space.' },
]

const aboutReviews = googleReviews.filter((review) => ['Matt Panuco', 'Laura Heitshusen', 'Brandy Sansone'].includes(review.name))
const featuredServices = servicePages.filter((service) => ['custom-decks', 'deck-repair', 'deck-replacement', 'screened-in-decks', 'stairs-and-railings'].includes(service.slug))
const featuredAreas = serviceAreas.filter((area) => ['kansas-city-mo', 'leawood-ks', 'raymore-mo'].includes(area.slug))

export const Route = createFileRoute('/about')({
  head: () => getSeoHead({
    title: 'About DecksRXKC | Kansas City Deck Craft & Process',
    description: aboutDescription,
    path: '/about',
    image: '/images/kansas-city-custom-wood-deck-railing-project.jpg',
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <AboutStructuredData />
      <main className="min-h-screen bg-warm-white text-ink">
        <SiteHeader />

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-bold text-ink/52">
                <a className="transition hover:text-wood" href="/">Home</a>
                <span aria-hidden="true">/</span>
                <span aria-current="page" className="text-charcoal">About</span>
              </nav>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">About DecksRXKC</p>
              <h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">Practical deck planning. Craft you notice in the details.</h1>
              <p className="mt-6 text-xl leading-9 text-ink/72">DecksRXKC builds and improves outdoor spaces across the Kansas City metro with responsive communication, useful options, and close attention to the parts homeowners see and use every day.</p>
            </div>
            <figure>
              <img className="aspect-[4/3] w-full object-cover" {...getResponsiveImageProps('/images/kansas-city-custom-wood-deck-railing-project.jpg', '(min-width: 1024px) 55vw, 100vw')} alt="Custom wood deck and dark railing built by DecksRXKC" width="1200" height="900" loading="eager" decoding="async" fetchPriority="high" />
              <figcaption className="border-b border-charcoal/12 py-4 text-sm font-semibold leading-6 text-ink/62">Surface, railing, stairs, and finished edges are considered as one outdoor space.</figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">What Guides the Work</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal sm:text-5xl">Solve the practical problem before selecting the finish</h2>
            </div>
            <div>
              <p className="text-xl font-semibold leading-9 text-charcoal">A deck should make the relationship between the house and yard easier—not simply add square footage. That means beginning with use, circulation, condition, exposure, and access before deciding what the surface should look like.</p>
              <p className="mt-6 text-lg leading-8 text-ink/70">DecksRXKC works across custom builds, focused repairs, full replacements, composite and wood surfaces, covered and screened rooms, stairs, and railings. Trex and TimberTech are among the composite options the team can discuss, alongside wood, without treating one material as the right answer for every home.</p>
              <div className="mt-8 grid border-y border-charcoal/12 sm:grid-cols-2">
                {['Plan around daily use', 'Explain repair versus replacement', 'Coordinate the visible details', 'Keep the next step clear'].map((item) => (
                  <p key={item} className="flex gap-3 border-b border-charcoal/12 py-5 pr-5 text-base font-black leading-7 text-charcoal sm:odd:border-r sm:even:pl-5 sm:nth-last-[-n+2]:border-b-0"><CheckCircle className="mt-1 h-5 w-5 shrink-0 text-muted-green" aria-hidden="true" />{item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">How We Work</p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">A clear path from the first problem to the finished space</h2>
            </div>
            <ol className="divide-y divide-white/14 border-y border-white/14">
              {process.map((step, index) => (
                <li key={step.title} className="grid gap-3 py-6 sm:grid-cols-[3.5rem_0.65fr_1.35fr] sm:items-start">
                  <span className="text-sm font-black text-soft-beige">0{index + 1}</span>
                  <h3 className="text-xl font-black">{step.title}</h3>
                  <p className="text-base leading-7 text-white/68">{step.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Work in Progress and Finished</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal sm:text-5xl">The hidden structure and visible finish both matter</h2>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <figure>
                <img className="aspect-[4/3] w-full object-cover" {...getResponsiveImageProps('/images/kansas-city-covered-deck-framing-addition.jpg', '(min-width: 1024px) 55vw, 100vw')} alt="Covered deck framing connected to a Kansas City home" width="1200" height="900" loading="lazy" decoding="async" />
                <figcaption className="border-b border-charcoal/12 py-4 text-sm font-semibold leading-6 text-ink/62">Framing, headroom, roof connection, and drainage set up the finish work that follows.</figcaption>
              </figure>
              <figure className="lg:pt-24">
                <img className="aspect-[4/3] w-full object-cover" {...getResponsiveImageProps('/images/optimized/kansas-city-composite-covered-deck-railing-detail.jpg', '(min-width: 1024px) 45vw, 100vw')} alt="Finished composite deck surface and dark railing detail" width="1200" height="900" loading="lazy" decoding="async" />
                <figcaption className="border-b border-charcoal/12 py-4 text-sm font-semibold leading-6 text-ink/62">Decking, railing, fascia, and transitions create the finished view homeowners live with.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">What Customers Notice</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal sm:text-5xl">Communication, judgment, and care in the finished work</h2>
            </div>
            <div className="mt-10 grid border-y border-charcoal/12 lg:grid-cols-3">
              {aboutReviews.map((review) => (
                <blockquote key={review.name} className="border-b border-charcoal/12 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                  <Quote className="h-6 w-6 text-muted-green" aria-hidden="true" />
                  <p className="mt-5 text-lg font-semibold leading-8 text-charcoal">“{review.review}”</p>
                  <cite className="mt-6 block text-sm font-black not-italic text-wood">{review.name} · Google review</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">What We Build</p>
              <div className="mt-5 divide-y divide-white/14 border-y border-white/14">
                {featuredServices.map((service) => (
                  <a key={service.slug} className="flex items-center justify-between gap-5 py-5 text-lg font-black text-white transition hover:text-soft-beige" href={getServicePagePath(service)}>
                    {service.shortTitle}
                    <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Where We Work</p>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">DecksRXKC serves homeowners across the Kansas City metropolitan area. Start with the location guide that matches your home, then use the service pages to compare the project itself.</p>
              <div className="mt-7 divide-y divide-white/14 border-y border-white/14">
                {featuredAreas.map((area) => (
                  <a key={area.slug} className="flex items-center justify-between gap-5 py-5 text-lg font-black text-white transition hover:text-soft-beige" href={getServiceAreaPath(area)}>
                    Deck builder in {getServiceAreaLabel(area)}
                    <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <a href="/service-areas" className="mt-6 inline-flex items-center text-sm font-black text-soft-beige transition hover:text-white">View every service area <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 border-y border-charcoal/12 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Your Outdoor Space</p>
              <h2 className="mt-3 text-3xl font-black text-charcoal">Tell us what needs to work better.</h2>
              <p className="mt-3 text-base leading-7 text-ink/66">Share the project type, city, current condition, and timing. DecksRXKC will help define the next useful step.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request a Free Quote</ButtonLink>
              <ButtonLink href={`tel:${business.phone}`} variant="ghost">Call {business.phoneDisplay}</ButtonLink>
            </div>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  )
}

function AboutStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'AboutPage',
              '@id': `${absoluteUrl('/about')}#webpage`,
              url: absoluteUrl('/about'),
              name: 'About DecksRXKC',
              description: aboutDescription,
              about: { '@id': business.entityId },
              primaryImageOfPage: absoluteUrl('/images/kansas-city-custom-wood-deck-railing-project.jpg'),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
                { '@type': 'ListItem', position: 2, name: 'About', item: absoluteUrl('/about') },
              ],
            },
          ],
        }),
      }}
    />
  )
}
