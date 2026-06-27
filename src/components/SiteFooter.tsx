import { getServiceAreaLabel, getServiceAreaPath, serviceAreas } from '../data/serviceAreas'

export function SiteFooter() {
  return (
    <footer className="bg-charcoal px-5 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">DecksRXKC Service Areas</p>
            <p className="mt-3 max-w-md text-sm font-semibold leading-6 text-white/58">
              Custom decks, screened-in decks, covered decks, stairs, and railings across the Kansas City metro.
            </p>
          </div>
          <nav className="grid gap-3 text-sm font-bold text-white/66 sm:grid-cols-2 lg:grid-cols-3" aria-label="Footer service areas">
            {serviceAreas.map((area) => (
              <a key={area.slug} className="transition hover:text-soft-beige" href={getServiceAreaPath(area)}>
                {getServiceAreaLabel(area)}
              </a>
            ))}
          </nav>
        </div>
        <div className="pt-6 text-center text-sm font-bold text-white/58">
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
