import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ButtonLink } from '../components/ui'
import { getSeoHead } from '../lib/seo'

export const Route = createFileRoute('/about')({
  head: () => getSeoHead({ title: 'About DecksRXKC | Kansas City Deck Builder', description: 'Learn how DecksRXKC approaches custom decks, repairs, replacements, covered spaces, screens, stairs, and railings across Kansas City.', path: '/about', image: '/images/kansas-city-custom-wood-deck-railing-project.jpg' }),
  component: AboutPage,
})

function AboutPage() {
  return <main className="min-h-screen bg-warm-white text-ink">
    <SiteHeader />
    <section className="px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-wood">About DecksRXKC</p><h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">Deck work guided by the way the space needs to live</h1><p className="mt-6 text-xl leading-9 text-ink/72">DecksRXKC builds and improves outdoor spaces across the Kansas City metro with practical planning, responsive communication, and close attention to the details homeowners use every day.</p></div><img className="aspect-[4/3] w-full object-cover" src="/images/kansas-city-custom-wood-deck-railing-project.jpg" alt="Custom wood deck and railing project by DecksRXKC" width="1200" height="900" loading="eager" decoding="async" /></div></section>
    <section className="bg-white px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-wood">How We Work</p><h2 className="mt-4 text-4xl font-black leading-tight text-charcoal sm:text-5xl">Solve the practical problem. Finish every visible edge.</h2></div><div className="divide-y divide-charcoal/12 border-y border-charcoal/12">{['Listen to how the homeowner wants to use the space', 'Compare repair, replacement, layout, and material options clearly', 'Coordinate decking, framing, stairs, railings, shade, and screening', 'Communicate through the project and leave a finished outdoor space'].map((item) => <p key={item} className="flex gap-4 py-6 text-lg font-bold leading-8 text-charcoal"><CheckCircle className="mt-1 h-5 w-5 shrink-0 text-muted-green" aria-hidden="true" />{item}</p>)}</div></div></section>
    <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-24"><div className="mx-auto max-w-5xl text-center"><p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">What Customers Notice</p><blockquote className="mt-6 text-3xl font-black leading-tight sm:text-4xl">“Very skilled at his craft, responsive, and truly cares about excellent craftsmanship.”</blockquote><p className="mt-5 text-sm font-black uppercase tracking-[0.14em] text-white/58">DecksRXKC customer · Google review</p></div></section>
    <section className="px-5 py-16 sm:px-8 lg:py-20"><div className="mx-auto flex max-w-7xl flex-col gap-5 border-y border-charcoal/12 py-10 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Your Outdoor Space</p><h2 className="mt-3 text-3xl font-black text-charcoal">Tell us what needs to work better.</h2></div><ButtonLink href="/contact">Request a Free Quote</ButtonLink></div></section>
    <SiteFooter />
  </main>
}
