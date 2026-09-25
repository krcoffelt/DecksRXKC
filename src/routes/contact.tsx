import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react'
import { LeadForm } from '../components/LeadForm'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
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
    <main className="min-h-screen bg-warm-white text-ink">
    <SiteHeader />
    <section className="px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl overflow-hidden bg-charcoal text-white lg:grid-cols-[0.86fr_1.14fr]"><div className="p-7 sm:p-10 lg:p-12"><p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Free Deck Quote</p><h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl">Tell us what you want to build or fix</h1><p className="mt-6 text-lg leading-8 text-white/72">Share the basics about the space, city, project type, and timing. DecksRXKC will follow up to understand the next useful step.</p><div className="mt-9 divide-y divide-white/14 border-y border-white/14"><a className="flex items-center gap-4 py-5 font-black text-white transition hover:text-soft-beige" href={`tel:${business.phone}`} onClick={() => trackEvent('click_to_call', { page_path: '/contact' })}><Phone className="h-5 w-5" aria-hidden="true" />{business.phoneDisplay}</a><a className="flex items-center gap-4 py-5 font-black text-white transition hover:text-soft-beige" href={business.googleMapsUrl} target="_blank" rel="noreferrer"><MapPin className="h-5 w-5 text-soft-beige" aria-hidden="true" />View our Google profile and service area<ArrowUpRight className="ml-auto h-4 w-4" aria-hidden="true" /></a><p className="flex items-center gap-4 py-5 font-bold text-white/72"><Clock className="h-5 w-5 text-soft-beige" aria-hidden="true" />Monday-Saturday, 8 AM-5 PM</p></div></div><LeadForm /></div></section>
    <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Kansas City Service Area</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal sm:text-5xl">Local deck help across the metro</h2>
          <p className="mt-5 text-lg leading-8 text-ink/70">DecksRXKC is a service-area deck builder serving homeowners throughout the Kansas City metropolitan area. Quotes begin with the project address, project type, current condition, timing, and the way the finished space needs to work.</p>
          <p className="mt-5 text-lg leading-8 text-ink/70">The service area includes communities on both sides of the state line, including Kansas City, Overland Park, Olathe, Shawnee, Leawood, Lenexa, Prairie Village, Lee&apos;s Summit, Independence, Liberty, Parkville, Gladstone, Blue Springs, and Raymore.</p>
          <a className="mt-7 inline-flex items-center gap-2 font-black text-muted-green transition hover:text-wood" href="/service-areas">Explore every service area<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
        <iframe
          className="min-h-[360px] w-full border-0"
          title="DecksRX KC Google business profile map"
          src="https://www.google.com/maps?q=DecksRX%20KC&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
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
