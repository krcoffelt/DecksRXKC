import { MapPin } from 'lucide-react'
import { featuredServiceAreaSummaries, getServiceAreaLinkLabel, getServiceAreaLinkPath, serviceAreaLinks } from '../../data/serviceAreaLinks'
import { ButtonLink, SectionIntro } from '../ui'

export function ServiceAreasPreview() {
  return (
    <section id="service-areas" className="bg-warm-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionIntro
              eyebrow="Service Areas"
              title="Deck builders for both sides of Kansas City"
              copy="DecksRXKC serves homeowners across the metro with custom decks, screened-in decks, covered decks, stairs, railings, and outdoor living upgrades."
            />
            <div className="mt-8 grid gap-4 border-y border-charcoal/12 py-6 sm:grid-cols-3">
              <div>
                <p className="text-4xl font-black text-charcoal">{serviceAreaLinks.length}</p>
                <p className="mt-1 text-sm font-bold text-ink/70">Metro service areas</p>
              </div>
              <div>
                <p className="text-4xl font-black text-charcoal">KS + MO</p>
                <p className="mt-1 text-sm font-bold text-ink/70">Both sides of KC</p>
              </div>
              <div>
                <p className="text-4xl font-black text-charcoal">7</p>
                <p className="mt-1 text-sm font-bold text-ink/70">Dedicated service pages</p>
              </div>
            </div>
            <ButtonLink className="mt-8" href="/service-areas">
              View Every Service Area
            </ButtonLink>
          </div>

          <div className="grid gap-px bg-charcoal/12 sm:grid-cols-2">
            {featuredServiceAreaSummaries.map((area) => (
              <a key={area.slug} className="group bg-white p-5 transition hover:bg-charcoal hover:text-white sm:p-6" href={getServiceAreaLinkPath(area)}>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-warm-white text-muted-green transition group-hover:bg-soft-beige group-hover:text-charcoal">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-charcoal transition group-hover:text-white">
                      {getServiceAreaLinkLabel(area)}
                    </h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-ink/70 transition group-hover:text-white/74">
                      {area.projectTypes.slice(0, 2).join(' and ')} in {area.county}.
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
