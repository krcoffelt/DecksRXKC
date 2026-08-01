import { createFileRoute } from '@tanstack/react-router'
import { Clock, MapPin, Phone } from 'lucide-react'
import { LeadForm } from '../components/LeadForm'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { business } from '../data/business'
import { trackEvent } from '../lib/analytics'
import { getSeoHead } from '../lib/seo'

export const Route = createFileRoute('/contact')({
  head: () => getSeoHead({ title: 'Request a Free Deck Quote | DecksRXKC', description: 'Tell DecksRXKC about your Kansas City deck build, repair, replacement, stairs, railings, covered deck, or screened-in project.', path: '/contact' }),
  component: ContactPage,
})

function ContactPage() {
  return <main className="min-h-screen bg-warm-white text-ink">
    <SiteHeader />
    <section className="px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl overflow-hidden bg-charcoal text-white lg:grid-cols-[0.86fr_1.14fr]"><div className="p-7 sm:p-10 lg:p-12"><p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Free Deck Quote</p><h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl">Tell us what you want to build or fix</h1><p className="mt-6 text-lg leading-8 text-white/72">Share the basics about the space, city, project type, and timing. DecksRXKC will follow up to understand the next useful step.</p><div className="mt-9 divide-y divide-white/14 border-y border-white/14"><a className="flex items-center gap-4 py-5 font-black text-white transition hover:text-soft-beige" href={`tel:${business.phone}`} onClick={() => trackEvent('click_to_call', { page_path: '/contact' })}><Phone className="h-5 w-5" aria-hidden="true" />{business.phoneDisplay}</a><p className="flex items-center gap-4 py-5 font-bold text-white/72"><MapPin className="h-5 w-5 text-soft-beige" aria-hidden="true" />Serving the Kansas City metro</p><p className="flex items-center gap-4 py-5 font-bold text-white/72"><Clock className="h-5 w-5 text-soft-beige" aria-hidden="true" />Project response times vary; send the form anytime</p></div></div><LeadForm /></div></section>
    <SiteFooter />
  </main>
}
