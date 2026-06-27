import { defaultSeoImagePath } from '../../lib/seo'
import { trustPoints } from '../../data/siteContent'
import { SiteHeader } from '../SiteHeader'
import { ButtonLink } from '../ui'

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-charcoal text-white">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={defaultSeoImagePath}
        alt="Finished Kansas City covered deck with composite railing detail"
        width="1728"
        height="1696"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0_/_0.76),rgb(0_0_0_/_0.36)_52%,rgb(0_0_0_/_0.12))]" />

      <SiteHeader variant="overlay" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-5 pb-8 pt-28 sm:px-8 lg:pb-10">
        <div className="max-w-4xl pb-8 lg:pb-16">
          <p className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-soft-beige">
            <span className="h-px w-12 bg-soft-beige" aria-hidden="true" />
            Kansas City deck contractor
          </p>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.96] tracking-tight sm:text-6xl lg:text-8xl">
            Custom Decks Built for Kansas City Homes
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-semibold leading-tight text-soft-beige sm:text-3xl">
            Designed for summer nights, family dinners, and every season in between.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/82 sm:text-lg">
            DecksRXKC builds custom decks, screened-in decks, covered decks, stairs, railings,
            and outdoor living spaces across the Kansas City metro.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact" variant="light">
              Get a Free Quote
            </ButtonLink>
            <ButtonLink href="#our-work" variant="outline">
              View Our Work
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-4 border-t border-white/18 pt-5 sm:grid-cols-3">
          {trustPoints.map(({ label, copy, icon: Icon }) => (
            <div key={label} className="text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-soft-beige text-charcoal">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-sm font-black">{label}</p>
              </div>
              <p className="mt-2 max-w-xs text-sm leading-6 text-white/68">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
