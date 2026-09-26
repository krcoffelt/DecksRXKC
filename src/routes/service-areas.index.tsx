import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { CtaBand, PageHero } from '../components/ui'
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
    <main className="min-h-screen bg-bone text-ink">
      <SiteHeader />
      <PageHero
        title={<>Deck builders serving <em className="text-soft-beige">both sides</em> of Kansas City</>}
        intro="DecksRXKC builds custom decks, screened-in decks, covered decks, stairs, railings, and outdoor living spaces across Kansas and Missouri communities."
        image={defaultSeoImagePath}
        imageAlt="Composite deck and railing detail by DecksRXKC"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]}
        meta={[
          { label: 'Communities', value: `${serviceAreas.length} cities` },
          { label: 'Kansas', value: 'Johnson & Wyandotte' },
          { label: 'Missouri', value: 'Jackson, Clay, Platte & Cass' },
          { label: 'Quotes', value: 'Free, on-site' },
        ]}
      />

      <section className="bg-bone">
        <div className="shell py-24 lg:py-32">
          <p className="max-w-5xl font-medium text-[clamp(1.8rem,3.2vw,3rem)] leading-[1.1] tracking-[-0.03em]" data-reveal="up">
            Johnson County, Jackson County, Clay County, Platte County, Cass County, Wyandotte County, and nearby communities.
          </p>

          {(['KS', 'MO'] as const).map((state) => {
            const areas = serviceAreas.filter((area) => area.state === state)
            return (
              <div key={state} className="mt-20 lg:mt-28">
                <div className="flex items-baseline justify-between border-b border-ink pb-4" data-reveal="fade">
                  <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] leading-none">{state === 'KS' ? 'Kansas' : 'Missouri'}</h2>
                  <p className="mono text-xs text-ink/45">{areas.length} communities</p>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3">
                  {areas.map((area, index) => (
                    <a key={area.slug} className="group relative flex flex-col justify-between gap-10 border-b hairline p-6 transition-colors duration-500 hover:bg-night hover:text-bone md:border-r md:[&:nth-child(2n)]:border-r-0 xl:[&:nth-child(2n)]:border-r xl:[&:nth-child(3n)]:border-r-0" href={getServiceAreaPath(area)} data-reveal="up" style={{ ['--d' as string]: index % 3 }}>
                      <div className="flex items-start justify-end gap-4">
                        <ArrowUpRight className="h-5 w-5 text-wood transition-all duration-500 group-hover:text-soft-beige" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-4xl leading-none tracking-[-0.02em]">{getServiceAreaLabel(area)}</h3>
                        <p className="mt-4 text-[0.92rem] leading-6 text-ink/60 transition-colors group-hover:text-bone/65">{area.localNote}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CtaBand title={<>A cleaner deck starts with a <em className="text-soft-beige">clear quote.</em></>} copy="Tell DecksRXKC what you want to build, replace, cover, or screen in." />
      <SiteFooter />
    </main>
  )
}
