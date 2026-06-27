import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { ButtonLink, SectionIntro } from '../components/ui'
import { getServiceAreaLabel, getServiceAreaPath, serviceAreas } from '../data/serviceAreas'
import { defaultSeoImagePath, getSeoHead } from '../lib/seo'

const serviceAreasTitle = 'DecksRXKC Service Areas | Kansas City Deck Builders'
const serviceAreasDescription =
  "Find DecksRXKC deck builders serving Overland Park, Lee's Summit, Shawnee, Olathe, Leawood, Kansas City, and nearby suburbs."

export const Route = createFileRoute('/service-areas/')({
  head: () => getSeoHead({
    title: serviceAreasTitle,
    description: serviceAreasDescription,
    path: '/service-areas',
    image: defaultSeoImagePath,
  }),
  component: ServiceAreasIndex,
})

function ServiceAreasIndex() {
  return (
    <main className="min-h-screen bg-warm-white text-ink">
      <SiteHeader />

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Kansas City Metro</p>
              <h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
                Deck builders serving both sides of Kansas City
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/72">
                DecksRXKC builds custom decks, screened-in decks, covered decks, stairs, railings,
                and outdoor living spaces across Kansas and Missouri communities.
              </p>
            </div>
            <div className="border-y border-charcoal/12 py-6">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-muted-green">Local coverage</p>
              <p className="mt-3 text-2xl font-black leading-tight text-charcoal">
                Johnson County, Jackson County, Clay County, Platte County, Cass County, Wyandotte County, and nearby communities.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-px bg-charcoal/12 md:grid-cols-2 xl:grid-cols-3">
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
      <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-center">
          <SectionIntro
            eyebrow="Ready to Plan"
            title="A cleaner deck starts with a clear quote"
            copy="Tell DecksRXKC what you want to build, replace, cover, or screen in."
            tone="dark"
          />
          <ButtonLink className="lg:justify-self-end" href="/#contact" variant="light">
            Request a Free Quote
          </ButtonLink>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
