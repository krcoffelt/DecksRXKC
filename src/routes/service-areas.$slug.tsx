import { createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowUpRight, CheckCircle, Hammer, MapPin, ShieldCheck, Trees } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import {
  getServiceArea,
  getServiceAreaLabel,
  getServiceAreaPath,
  serviceAreas,
  type ServiceArea,
} from '../data/serviceAreas'

export const Route = createFileRoute('/service-areas/$slug')({
  loader: ({ params }) => {
    const area = getServiceArea(params.slug)

    if (!area) {
      throw notFound()
    }

    return area
  },
  head: ({ loaderData }) => {
    const area = loaderData as ServiceArea
    const label = getServiceAreaLabel(area)

    return {
      meta: [
        {
          title: `Deck Builder in ${label} | DecksRXKC`,
        },
        {
          name: 'description',
          content: `DecksRXKC builds custom decks, screened-in decks, covered decks, stairs, and railings for homeowners in ${label} and nearby ${area.county} communities.`,
        },
        {
          property: 'og:title',
          content: `Deck Builder in ${label} | DecksRXKC`,
        },
        {
          property: 'og:description',
          content: `Custom decks, screened-in decks, covered decks, stairs, railings, and outdoor living spaces in ${label}.`,
        },
      ],
      links: [
        {
          rel: 'canonical',
          href: `https://decksrxkc.com${getServiceAreaPath(area)}`,
        },
      ],
    }
  },
  component: ServiceAreaPage,
})

const services = [
  {
    title: 'Custom Deck Builds',
    copy: 'New deck builds, deck replacements, framing, decking, stairs, and railing systems planned around your home.',
    icon: Hammer,
  },
  {
    title: 'Screened-In Decks',
    copy: 'Screened-in deck and porch options that help block bugs, harsh sun, and wind while keeping the outdoor feel.',
    icon: ShieldCheck,
  },
  {
    title: 'Covered Decks',
    copy: 'Roof structures, ceiling finishes, lighting, fans, gutters, and upgrades that make the deck more usable.',
    icon: Trees,
  },
]

function ServiceAreaPage() {
  const area = Route.useLoaderData()
  const label = getServiceAreaLabel(area)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'DecksRXKC',
            areaServed: {
              '@type': 'City',
              name: label,
            },
            serviceType: ['Deck builder', 'Screened-in deck builder', 'Covered deck builder'],
            url: `https://decksrxkc.com${getServiceAreaPath(area)}`,
            image: `https://decksrxkc.com${area.image}`,
          }),
        }}
      />

      <main className="min-h-screen bg-warm-white text-ink">
      <header className="bg-charcoal px-5 py-5 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a href="/" className="flex shrink-0 items-center" aria-label="DecksRXKC home">
            <img
              className="h-11 w-auto max-w-[180px] object-contain sm:h-14 sm:max-w-[220px]"
              src="/images/decksrxkc-header-logo-cropped.png"
              alt="DecksRXKC"
            />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold text-white/82 lg:flex" aria-label="Service area navigation">
            <a className="transition hover:text-soft-beige" href="/#decks">Services</a>
            <a className="transition hover:text-soft-beige" href="/#our-work">Our Work</a>
            <a className="transition hover:text-soft-beige" href="/service-areas">Service Areas</a>
            <a className="transition hover:text-soft-beige" href="/#contact">Contact</a>
          </nav>
          <a className="hidden min-h-11 items-center justify-center rounded-full bg-soft-beige px-6 text-sm font-black text-charcoal shadow-soft transition hover:bg-white lg:inline-flex" href="/#contact">
            Free Quote
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-24">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-42"
          src={area.image}
          alt={`${label} deck project by DecksRXKC`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0_/_0.78),rgb(0_0_0_/_0.42)_56%,rgb(0_0_0_/_0.25))]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-soft-beige">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {label} service area
            </p>
            <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Deck builder in {label}
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-white/82">
              Custom decks, screened-in decks, covered decks, stairs, railings, and outdoor
              living spaces for homeowners in {label}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex min-h-14 items-center justify-center rounded-full bg-soft-beige px-8 text-base font-black text-charcoal shadow-soft transition hover:bg-white" href="/#contact">
                Request a Free Quote
                <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
              <a className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/55 px-8 text-base font-black text-white transition hover:border-white hover:bg-white hover:text-charcoal" href="/service-areas">
                View Service Areas
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Local Deck Services</p>
            <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight text-charcoal sm:text-5xl">
              Built for {area.city} homes and Kansas City weather
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/72">{area.localNote}</p>
            <div className="mt-8 border-y border-charcoal/12 py-6">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-muted-green">Nearby communities</p>
              <p className="mt-3 text-xl font-black text-charcoal">{area.nearby.join(' / ')}</p>
              <p className="mt-3 text-base leading-7 text-ink/66">
                Serving {area.county} and surrounding Kansas City metro communities.
              </p>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-charcoal/10 bg-charcoal/10 shadow-soft">
            {services.map((service) => (
              <article key={service.title} className="bg-white p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted-green text-white">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-black text-charcoal">{service.title} in {label}</h3>
                    <p className="mt-3 text-base leading-7 text-ink/70">{service.copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Why Homeowners Call DecksRXKC</p>
            <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl">
              A simpler path from deck idea to finished outdoor space
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              'Clear quoting before the project starts',
              `Deck design options that fit ${area.city} homes`,
              'Composite, wood, covered, and screened-in options',
              'Practical guidance on stairs, rails, shade, and usability',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-soft-beige" aria-hidden="true" />
                <p className="text-base font-bold leading-7 text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <div className="grid lg:grid-cols-[1fr_0.75fr]">
              <div className="p-7 sm:p-10 lg:p-12">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Free Quote</p>
                <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight text-charcoal sm:text-5xl">
                  Planning a deck project in {label}?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/72">
                  Tell us what you want to build, replace, cover, or screen in. We will help
                  you understand practical options for your space, budget, and timeline.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a className="inline-flex min-h-14 items-center justify-center rounded-full bg-charcoal px-8 text-base font-black text-white shadow-soft transition hover:bg-muted-green" href="/#contact">
                    Start Your Quote
                    <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </a>
                  <a className="inline-flex min-h-14 items-center justify-center rounded-full border border-charcoal/18 px-8 text-base font-black text-charcoal transition hover:bg-warm-white" href="tel:+19132056531">
                    Call (913) 205-6531
                  </a>
                </div>
              </div>
              <img
                className="h-72 w-full object-cover lg:h-full"
                src="/images/kansas-city-screened-porch-wood-trim-black-screen.png"
                alt="Screened-in deck built by DecksRXKC"
              />
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
      </main>
    </>
  )
}

export function getStaticPaths() {
  return serviceAreas.map((area) => ({
    params: {
      slug: area.slug,
    },
  }))
}
