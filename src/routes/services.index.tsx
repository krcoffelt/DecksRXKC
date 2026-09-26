import { createFileRoute } from '@tanstack/react-router'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ArrowUpRight } from 'lucide-react'
import { ButtonLink, CtaBand, FaqList, PageHero, SectionIntro } from '../components/ui'
import { getServicePagePath } from '../data/paths'
import { getResponsiveImageProps } from '../lib/images'
import { servicePages } from '../data/servicePages'
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
      <main id="main" className="min-h-screen bg-bone text-ink">
        <SiteHeader />
        <PageHero
          title={<>Outdoor living work built for <em className="text-soft-beige">Kansas City</em> homes</>}
          intro="DecksRXKC handles the core deck projects homeowners ask for most: new builds, replacements, screening, covers, repairs, stairs, and railings."
          image={defaultSeoImagePath}
          imageAlt="Composite deck boards and dark railing detail on a Kansas City deck"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
          actions={<ButtonLink href="/contact" variant="bronze">Request a free quote</ButtonLink>}
          meta={[
            { label: 'Services', value: `${servicePages.length} specialties` },
            { label: 'Materials', value: 'Trex, TimberTech & wood' },
            { label: 'Coverage', value: 'Kansas + Missouri' },
            { label: 'Quotes', value: 'Free, no pressure' },
          ]}
        />

        <section className="bg-bone">
          <div className="shell py-24 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">
              <span className="hidden lg:block" />
              <p className="font-medium text-[clamp(1.8rem,3.2vw,3rem)] leading-[1.1] tracking-[-0.03em]" data-reveal="up">
                That may mean correcting an aging structure, creating a better route to the yard, reducing maintenance with Trex or TimberTech, or coordinating a roof and screens as one outdoor room. Each service guide explains the structural, material, access, and finish decisions that belong in a clear project scope.
              </p>
            </div>

            <div className="mt-20 grid gap-x-6 gap-y-16 md:grid-cols-12 lg:mt-28">
              {servicePages.map((service, index) => {
                const span = ['md:col-span-7', 'md:col-span-5', 'md:col-span-4', 'md:col-span-4', 'md:col-span-4', 'md:col-span-5', 'md:col-span-7'][index % 7]
                const tall = span.endsWith('7') || span.endsWith('5')
                return (
                  <a key={service.slug} className={`group block ${span}`} href={getServicePagePath(service)} data-reveal="up" style={{ ['--d' as string]: index % 3 }}>
                    <div className={`frame bg-sand ${tall ? 'aspect-[4/3]' : 'aspect-[4/5]'}`}>
                      <img className="h-full w-full object-cover" {...getResponsiveImageProps(service.image, '(min-width: 768px) 50vw, 100vw')} alt={`${service.shortTitle} by DecksRXKC`} width="1200" height="900" loading="lazy" decoding="async" />
                    </div>
                    <div className="mt-6 flex items-start justify-between gap-6 border-t hairline pt-5">
                      <div>
                        <h2 className="text-[clamp(2rem,3vw,2.9rem)] leading-none transition-colors group-hover:text-wood">{service.shortTitle}</h2>
                        <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-ink/62">{service.heroCopy}</p>
                      </div>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink/15 transition-all duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-bone">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                      </span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-paper">
          <div className="shell grid gap-12 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-32">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionIntro title="Choose the right starting point" />
            </div>
            <FaqList items={serviceFaqs} />
          </div>
        </section>

        <CtaBand title={<>Not sure where to start? <em className="text-soft-beige">Start here.</em></>} copy="Tell us what feels worn, unsafe, exposed, or underused — we’ll help you sort repair from replacement and build from there." />
        <SiteFooter />
      </main>
    </>
  )
}
