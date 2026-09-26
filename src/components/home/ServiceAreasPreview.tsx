import { ArrowUpRight } from 'lucide-react'
import { getServiceAreaLinkPath, serviceAreaLinks } from '../../data/serviceAreaLinks'
import { ButtonLink, SectionIntro } from '../ui'

export function ServiceAreasPreview() {
  const kansas = serviceAreaLinks.filter((area) => area.state === 'KS')
  const missouri = serviceAreaLinks.filter((area) => area.state === 'MO')

  return (
    <section id="service-areas" className="blueprint-light relative overflow-hidden bg-bone text-ink">
      <div className="shell py-24 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionIntro
            title={<>Deck builders for <em className="text-wood">both sides</em> of State Line</>}
            copy="Custom decks, screened-in and covered decks, stairs, railings, and outdoor living upgrades across Johnson, Wyandotte, Jackson, Clay, Platte, and Cass counties."
          />
          <div data-reveal="up">
            <ButtonLink href="/service-areas" variant="dark">Every service area</ButtonLink>
          </div>
        </div>

        <div className="relative mt-16 grid gap-14 lg:mt-24 lg:grid-cols-2 lg:gap-0">
          <StateColumn state="Kansas" code="KS" areas={kansas} />
          <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 border-l border-dashed border-wood/60 lg:block" aria-hidden="true">
            <span className="mono absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 bg-bone px-3 text-[0.64rem] uppercase tracking-[0.22em] whitespace-nowrap text-wood">
              ← KS · State Line Rd. · MO →
            </span>
          </div>
          <StateColumn state="Missouri" code="MO" areas={missouri} align="right" />
        </div>
      </div>
    </section>
  )
}

function StateColumn({ state, code, areas, align = 'left' }: Readonly<{ state: string; code: string; areas: typeof serviceAreaLinks; align?: 'left' | 'right' }>) {
  return (
    <div className={`relative ${align === 'right' ? 'lg:pl-16' : 'lg:pr-16'}`}>
      <span className="font-display outline-text pointer-events-none absolute -top-8 right-0 hidden lg:block text-[clamp(8rem,16vw,15rem)] leading-none text-wood/45 select-none lg:right-16" aria-hidden="true">
        {code}
      </span>
      <div className="relative flex items-baseline justify-between border-b border-ink pb-4" data-reveal="fade">
        <p className="font-display text-4xl">{state}</p>
        <p className="mono text-[0.68rem] text-ink/45">{areas.length} communities</p>
      </div>
      <ul className="relative">
        {areas.map((area, index) => (
          <li key={area.slug} data-reveal="up" style={{ ['--d' as string]: index * 0.4 }}>
            <a href={getServiceAreaLinkPath(area)} className="group flex items-center justify-between gap-4 border-b hairline py-4 transition-colors hover:text-wood">
              <span className="flex items-baseline gap-4">
                <span className="text-xl font-medium tracking-[-0.015em] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-2 sm:text-2xl">
                  {area.city}, {area.state}
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
