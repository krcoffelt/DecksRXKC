import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getServiceAreaLinkLabel, getServiceAreaLinkPath, serviceAreaLinks } from '../data/serviceAreaLinks'
import { getServicePagePath, servicePages } from '../data/servicePages'
import { business } from '../data/business'
import { trackEvent } from '../lib/analytics'
import { CircleLink } from './ui'

/** Kansas City local time plus whether the posted hours (Mon–Sat, 8–5) are open right now. */
function useKansasCityClock() {
  const [clock, setClock] = useState<{ time: string; open: boolean } | null>(null)

  useEffect(() => {
    const read = () => {
      const now = new Date()
      const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', weekday: 'short', hour: 'numeric', hour12: false }).formatToParts(now)
      const weekday = parts.find((part) => part.type === 'weekday')?.value
      const hour = Number(parts.find((part) => part.type === 'hour')?.value)
      const time = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', hour: 'numeric', minute: '2-digit' }).format(now)
      setClock({ time, open: weekday !== 'Sun' && hour >= 8 && hour < 17 })
    }
    read()
    const timer = window.setInterval(read, 15000)
    return () => window.clearInterval(timer)
  }, [])

  return clock
}

export function SiteFooter() {
  const clock = useKansasCityClock()

  return (
    <footer className="grain relative overflow-hidden bg-night text-bone">
      <div className="shell pt-24 lg:pt-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="display-lg max-w-[13ch]" data-reveal="up">
              Better memories are built on <em className="text-soft-beige">better decks.</em>
            </p>
          </div>
          <div data-reveal="fade">
            <CircleLink href="/contact">Start your<br />free quote</CircleLink>
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t hairline-light pt-12 md:grid-cols-2 lg:mt-28 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.6fr]">
          <div>
            <p className="mono text-[0.68rem] uppercase tracking-[0.14em] text-bone/60">Talk to the builder</p>
            <a
              className="group mt-6 flex items-center gap-3 font-display text-[clamp(2.2rem,3.4vw,3.2rem)] leading-none transition-colors hover:text-soft-beige"
              href={`tel:${business.phone}`}
              onClick={() => trackEvent('click_to_call', { page_path: typeof window === 'undefined' ? '/' : window.location.pathname })}
            >
              {business.phoneDisplay}
              <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
            </a>
            <p className="mono mt-5 text-[0.7rem] uppercase leading-6 tracking-[0.12em] text-bone/60">
              Mon – Sat · 8 AM – 5 PM
              <br />
              <span className="inline-flex items-center gap-2" aria-live="polite">
                <span className={`h-1.5 w-1.5 rounded-full ${clock?.open ? 'bg-emerald-400' : 'bg-bone/30'}`} aria-hidden="true" />
                {clock ? `${clock.time} in KC · ${clock.open ? 'Open now' : 'Closed now'}` : 'Kansas City time'}
              </span>
            </p>
          </div>
          <nav aria-label="Footer services">
            <p className="mono text-[0.68rem] uppercase tracking-[0.14em] text-bone/60">Services</p>
            <ul className="mt-3 grid lg:mt-6 lg:gap-2.5">
              {servicePages.map((service) => (
                <li key={service.slug}>
                  <a className="link-line inline-block py-2.5 text-[0.95rem] text-bone/75 lg:py-0 transition-colors hover:text-bone" href={getServicePagePath(service)}>
                    {service.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer resources">
            <p className="mono text-[0.68rem] uppercase tracking-[0.14em] text-bone/60">Explore</p>
            <ul className="mt-3 grid lg:mt-6 lg:gap-2.5">
              {[
                { label: 'Projects', href: '/projects' },
                { label: 'Guides', href: '/guides' },
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a className="link-line inline-block py-2.5 text-[0.95rem] text-bone/75 lg:py-0 transition-colors hover:text-bone" href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a className="link-line inline-flex items-center gap-1 py-2.5 text-[0.95rem] text-bone/75 lg:py-0 transition-colors hover:text-bone" href={business.googleMapsUrl} target="_blank" rel="noreferrer">
                  Google Business Profile <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Footer service areas">
            <p className="mono text-[0.68rem] uppercase tracking-[0.14em] text-bone/60">Service Areas</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:mt-6 lg:gap-y-2.5">
              {serviceAreaLinks.map((area) => (
                <li key={area.slug}>
                  <a className="link-line inline-block py-2.5 text-[0.95rem] text-bone/75 lg:py-0 transition-colors hover:text-bone" href={getServiceAreaLinkPath(area)}>
                    {getServiceAreaLinkLabel(area)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="relative mt-20 select-none overflow-hidden border-t hairline-light lg:mt-28" aria-hidden="true">
        <p className="font-display pt-[2vw] text-center text-[25.5vw] leading-[0.74] font-bold! tracking-[-0.01em] whitespace-nowrap text-bone" data-reveal="clip">
          Decks<span className="text-soft-beige">RX</span>KC
        </p>
      </div>

      <div className="shell flex flex-col gap-3 border-t hairline-light py-7 text-[0.8rem] text-bone/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} DecksRXKC. Serving the Kansas City metro.</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a className="inline-flex min-h-11 items-center transition-colors hover:text-bone" href="/privacy-policy">Privacy Policy</a>
          <a className="inline-flex min-h-11 items-center transition-colors hover:text-bone" href="/terms-and-conditions">Terms and Conditions</a>
          <a className="transition-colors hover:text-bone" href="https://hometownkc.agency" target="_blank" rel="noreferrer">
            Website by Hometown Marketing Agency
          </a>
          <a className="mono inline-flex min-h-11 items-center gap-2 text-[0.68rem] uppercase tracking-[0.14em] transition-colors hover:text-bone" href="#top">
            Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
