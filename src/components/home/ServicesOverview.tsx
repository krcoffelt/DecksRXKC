import { homeServices } from '../../data/siteContent'
import { ButtonLink, SectionIntro } from '../ui'

export function ServicesOverview() {
  const [featured, ...secondaryServices] = homeServices

  return (
    <section id="decks" className="bg-warm-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionIntro
            eyebrow="What We Build"
            title={
              <>
                Outdoor spaces built around how you actually live
              </>
            }
            copy="From simple deck replacement to covered and screened-in outdoor rooms, the work starts with how your family wants to use the space."
          />
          <div className="border-y border-charcoal/12 py-6">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-muted-green">Most requested</p>
            <p className="mt-3 text-2xl font-black leading-tight text-charcoal">
              Composite decking, screened-in rooms, covered decks, stairs, and black railing systems.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <a className="group relative min-h-[520px] overflow-hidden bg-charcoal text-white" href={featured.href}>
            <img
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              src={featured.image}
              alt={`${featured.title} by DecksRXKC`}
              width="1600"
              height="1200"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/84 via-black/26 to-black/8" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">{featured.proof}</p>
              <h3 className="mt-3 text-4xl font-black leading-tight">{featured.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/76">{featured.description}</p>
            </div>
          </a>

          <div className="grid gap-px bg-charcoal/12">
            {secondaryServices.map((service) => (
              <a key={service.title} className="group bg-white p-6 transition hover:bg-charcoal hover:text-white sm:p-8" href={service.href}>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-warm-white text-muted-green transition group-hover:bg-soft-beige group-hover:text-charcoal">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.14em] text-wood transition group-hover:text-soft-beige">
                      {service.proof}
                    </p>
                    <h3 className="mt-3 text-3xl font-black leading-tight text-charcoal transition group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-ink/68 transition group-hover:text-white/70">
                      {service.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/services/screened-in-decks">Explore Services</ButtonLink>
          <ButtonLink href="#contact" variant="ghost">
            Start a Quote
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
