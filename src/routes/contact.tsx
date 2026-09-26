import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react'
import { LeadForm } from '../components/LeadForm'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ArrowRow, Breadcrumbs, SectionIntro } from '../components/ui'
import { business } from '../data/business'
import { trackEvent } from '../lib/analytics'
import { absoluteUrl, getSeoHead, siteUrl } from '../lib/seo'

export const Route = createFileRoute('/contact')({
  head: () => getSeoHead({ title: 'Request a Free Deck Quote | DecksRXKC', description: 'Tell DecksRXKC about your Kansas City deck build, repair, replacement, stairs, railings, covered deck, or screened-in project.', path: '/contact' }),
  component: ContactPage,
})

function ContactPage() {
  return <>
    <ContactStructuredData />
    <main id="main" className="min-h-screen bg-night text-bone">
    <SiteHeader />
    <section className="grain relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_0%,rgb(184_116_59/0.18),transparent_55%)]" />
      <div className="blueprint pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(180deg,black,transparent_85%)]" aria-hidden="true" />
      <div className="shell grid gap-16 pt-36 pb-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pt-44 lg:pb-32">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="hero-fade" style={{ ['--i' as string]: 0 }}><Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} /></div>
          <h1 className="display-lg hero-fade mt-10 max-w-[12ch]" style={{ ['--i' as string]: 1 }}>Tell us what you want to <em className="text-soft-beige">build or fix</em></h1>
          <p className="lede hero-fade mt-8 max-w-lg text-bone/68" style={{ ['--i' as string]: 2 }}>Share the basics about the space, city, project type, and timing. DecksRXKC will follow up to understand the next useful step.</p>
          <div className="hero-fade mt-12 border-t hairline-light" style={{ ['--i' as string]: 3 }}>
            <a className="group flex items-center justify-between gap-4 border-b hairline-light py-6 transition-colors hover:text-soft-beige" href={`tel:${business.phone}`} onClick={() => trackEvent('click_to_call', { page_path: '/contact' })}>
              <span className="flex items-center gap-4"><Phone className="h-5 w-5 text-soft-beige" aria-hidden="true" /><span className="font-display text-3xl tracking-[-0.02em]">{business.phoneDisplay}</span></span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
            </a>
            <a className="group flex items-center justify-between gap-4 border-b hairline-light py-6 transition-colors hover:text-soft-beige" href={business.googleMapsUrl} target="_blank" rel="noreferrer">
              <span className="flex items-center gap-4"><MapPin className="h-5 w-5 text-soft-beige" aria-hidden="true" />View our Google profile and service area</span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
            </a>
            <p className="flex items-center gap-4 border-b hairline-light py-6 text-bone/72"><Clock className="h-5 w-5 text-soft-beige" aria-hidden="true" />Monday–Saturday, 8 AM–5 PM</p>
          </div>
        </div>
        <div className="hero-fade border border-bone/10 bg-bone/[0.03] p-6 sm:p-10" style={{ ['--i' as string]: 2 }}>
          <LeadForm />
        </div>
      </div>
    </section>
    <section className="bg-bone text-ink">
      <div className="shell grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch lg:gap-20 lg:py-32">
        <div>
          <SectionIntro title="Local deck help across the metro" />
          <p className="mt-8 text-lg leading-8 text-ink/68" data-reveal="up">DecksRXKC is a service-area deck builder serving homeowners throughout the Kansas City metropolitan area. Quotes begin with the project address, project type, current condition, timing, and the way the finished space needs to work.</p>
          <p className="mt-5 text-lg leading-8 text-ink/68" data-reveal="up">The service area includes communities on both sides of the state line, including Kansas City, Overland Park, Olathe, Shawnee, Leawood, Lenexa, Prairie Village, Lee&apos;s Summit, Independence, Liberty, Parkville, Gladstone, Blue Springs, and Raymore.</p>
          <div className="mt-10 border-t hairline"><ArrowRow href="/service-areas">Explore every service area</ArrowRow></div>
        </div>
        <div className="frame min-h-[420px] overflow-hidden bg-sand" data-reveal="clip">
          <iframe
            className="h-full min-h-[420px] w-full border-0 grayscale-[0.6] sepia-[0.15]"
            title="DecksRX KC Google business profile map"
            src="https://www.google.com/maps?q=DecksRX%20KC&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>
  </>
}

function ContactStructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${absoluteUrl('/contact')}#webpage`,
        url: absoluteUrl('/contact'),
        name: 'Contact DecksRXKC',
        description: 'Request a Kansas City deck quote from DecksRXKC.',
        mainEntity: { '@id': business.entityId },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: absoluteUrl('/contact') },
        ],
      },
    ],
  }) }} />
}
