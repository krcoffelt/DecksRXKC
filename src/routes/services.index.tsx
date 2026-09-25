import { createFileRoute } from '@tanstack/react-router'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ButtonLink } from '../components/ui'
import { getServicePagePath, servicePages } from '../data/servicePages'
import { defaultSeoImagePath, getSeoHead, siteUrl } from '../lib/seo'

const serviceFaqs = [
  {
    question: 'What deck services does DecksRXKC provide in Kansas City?',
    answer: 'DecksRXKC builds custom, composite, covered, and screened-in decks and provides deck repair, replacement, stairs, and railings across the Kansas City metro.',
  },
  {
    question: 'Can DecksRXKC help decide between repair and replacement?',
    answer: 'Yes. The team can review the visible condition, framing, stairs, railings, layout, and project goals so the scope clearly distinguishes a focused repair from a larger replacement.',
  },
  {
    question: 'Does DecksRXKC install Trex and TimberTech decking?',
    answer: 'Yes. Homeowners can compare Trex, TimberTech, and wood options alongside railings, stairs, fascia, maintenance expectations, and the complete installed plan.',
  },
  {
    question: 'Which Kansas City communities does DecksRXKC serve?',
    answer: "The service area includes Kansas City and nearby Kansas and Missouri communities such as Overland Park, Olathe, Shawnee, Leawood, Lee's Summit, Liberty, Parkville, and Raymore.",
  },
]

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: serviceFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
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
              <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/72">
                Start with the problem the outdoor space needs to solve. That may mean correcting an aging structure, creating a better route to the yard, reducing maintenance with Trex or TimberTech, or coordinating a roof and screens as one outdoor room. Each service guide explains the structural, material, access, and finish decisions that belong in a clear project scope.
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
        <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Kansas City Deck Questions</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal sm:text-5xl">Choose the right starting point</h2>
            </div>
            <div className="divide-y divide-charcoal/12 border-y border-charcoal/12">
              {serviceFaqs.map((faq) => (
                <article key={faq.question} className="py-6">
                  <h3 className="text-xl font-black text-charcoal">{faq.question}</h3>
                  <p className="mt-3 text-base leading-7 text-ink/68">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  )
}
