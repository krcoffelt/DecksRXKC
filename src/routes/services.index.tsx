import { createFileRoute } from '@tanstack/react-router'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ButtonLink } from '../components/ui'
import { getServicePagePath, servicePages } from '../data/servicePages'
import { defaultSeoImagePath, getSeoHead, siteUrl } from '../lib/seo'

const servicesTitle = 'Deck Services in Kansas City | DecksRXKC'
const servicesDescription =
  'Explore DecksRXKC services for custom decks, screened-in decks, covered decks, composite decks, deck repair, and deck replacement.'

export const Route = createFileRoute('/services/')({
  head: () => getSeoHead({
    title: servicesTitle,
    description: servicesDescription,
    path: '/services',
    image: defaultSeoImagePath,
  }),
  component: ServicesIndex,
})

function ServicesIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'DecksRXKC services',
            itemListElement: servicePages.map((service, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: service.title,
              url: `${siteUrl}${getServicePagePath(service)}`,
            })),
          }),
        }}
      />
      <main className="min-h-screen bg-warm-white text-ink">
        <SiteHeader />
        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Deck Services</p>
              <h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
                Outdoor living work built for Kansas City homes
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/72">
                DecksRXKC handles the core deck projects homeowners ask for most: new builds, replacements, screening, covers, repairs, stairs, and railings.
              </p>
            </div>

            <div className="mt-12 grid gap-px bg-charcoal/12 md:grid-cols-2 xl:grid-cols-3">
              {servicePages.map((service) => (
                <a key={service.slug} className="group bg-white p-6 transition hover:bg-charcoal hover:text-white sm:p-8" href={getServicePagePath(service)}>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-wood transition group-hover:text-soft-beige">
                    {service.eyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl font-black leading-tight text-charcoal transition group-hover:text-white">
                    {service.shortTitle}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-ink/68 transition group-hover:text-white/70">
                    {service.heroCopy}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-10">
              <ButtonLink href="/#contact">Request a Free Quote</ButtonLink>
            </div>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  )
}
