import { getServiceAreaLabel, getServiceAreaPath, serviceAreas } from '../data/serviceAreas'
import { getServicePagePath, servicePages } from '../data/servicePages'

export function SiteFooter() {
  return (
    <footer className="bg-charcoal px-5 py-14 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <img
              className="h-12 w-auto max-w-[210px] object-contain"
              src="/images/decksrxkc-header-logo-cropped.png"
              alt="DecksRXKC"
              width="330"
              height="84"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-5 max-w-md text-sm font-semibold leading-6 text-white/58">
              Custom decks, screened-in decks, covered decks, stairs, and railings across the Kansas City metro.
            </p>
            <a className="mt-5 inline-flex text-sm font-black text-soft-beige transition hover:text-white" href="tel:+19132056531">
              (913) 205-6531
            </a>
          </div>
          <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr]">
            <nav aria-label="Footer services">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-soft-beige">Services</p>
              <div className="mt-4 grid gap-3 text-sm font-bold text-white/66">
                {servicePages.map((service) => (
                  <a key={service.slug} className="transition hover:text-soft-beige" href={getServicePagePath(service)}>
                    {service.shortTitle}
                  </a>
                ))}
              </div>
            </nav>
            <nav aria-label="Footer service areas">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-soft-beige">Service Areas</p>
              <div className="mt-4 grid gap-3 text-sm font-bold text-white/66 sm:grid-cols-2 lg:grid-cols-3">
                {serviceAreas.map((area) => (
                  <a key={area.slug} className="transition hover:text-soft-beige" href={getServiceAreaPath(area)}>
                    {getServiceAreaLabel(area)}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-sm font-bold text-white/58 sm:flex-row sm:items-center sm:justify-between">
          <p>Serving the Kansas City metro.</p>
          <a
            className="transition hover:text-soft-beige"
            href="https://hometownkc.agency"
            target="_blank"
            rel="noreferrer"
          >
            Website created by Hometown Marketing Agency
          </a>
        </div>
      </div>
    </footer>
  )
}
