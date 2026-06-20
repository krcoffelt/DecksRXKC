import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { getServiceAreaLabel, getServiceAreaPath, serviceAreas } from '../data/serviceAreas'

export const Route = createFileRoute('/service-areas/')({
  head: () => ({
    meta: [
      {
        title: 'DecksRXKC Service Areas | Kansas City Deck Builders',
      },
      {
        name: 'description',
        content:
          "See the Kansas City metro service areas for DecksRXKC, including deck builders in Overland Park, Lee's Summit, Shawnee, Olathe, Leawood, and nearby communities.",
      },
      {
        property: 'og:title',
        content: 'DecksRXKC Service Areas | Kansas City Deck Builders',
      },
      {
        property: 'og:description',
        content:
          'DecksRXKC builds custom decks, screened-in decks, covered decks, stairs, railings, and outdoor living spaces across the Kansas City metro.',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://decksrxkc.com/service-areas',
      },
    ],
  }),
  component: ServiceAreasIndex,
})

function ServiceAreasIndex() {
  return (
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
          <a className="hidden text-sm font-black uppercase tracking-[0.14em] text-soft-beige transition hover:text-white sm:inline-flex" href="/#contact">
            Free Quote
            <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Kansas City Metro</p>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
              Deck builders serving both sides of Kansas City
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/72">
              DecksRXKC builds custom decks, screened-in decks, covered decks, stairs, railings,
              and outdoor living spaces across Johnson County, Jackson County, Clay County,
              Platte County, Cass County, Wyandotte County, and nearby communities.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-charcoal/10 bg-charcoal/10 shadow-soft md:grid-cols-2 xl:grid-cols-3">
            {serviceAreas.map((area) => (
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
                <h2 className="mt-6 text-2xl font-black text-charcoal transition group-hover:text-white">
                  {getServiceAreaLabel(area)}
                </h2>
                <p className="mt-3 text-sm font-semibold leading-6 text-ink/64 transition group-hover:text-white/68">
                  {area.localNote}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
