import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ButtonLink } from '../components/ui'
import { getGuidePagePath, guidePages } from '../data/guides'
import { getSeoHead } from '../lib/seo'

export const Route = createFileRoute('/guides/')({
  head: () => getSeoHead({ title: 'Deck Planning Guides | DecksRXKC', description: 'Practical Kansas City guides for deck repair, replacement, composite materials, wood decking, stairs, and outdoor planning.', path: '/guides', image: guidePages[0].heroImage }),
  component: GuidesIndexPage,
})

function GuidesIndexPage() {
  return <main className="min-h-screen bg-warm-white text-ink">
    <SiteHeader />
    <section className="px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Planning Library</p><h1 className="mt-4 max-w-5xl text-5xl font-black leading-[0.98] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">Clear deck decisions before construction begins</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70">Compare scope, materials, maintenance, and long-term use with practical guidance built for Kansas City homeowners.</p></div></section>
    <section className="px-5 pb-16 sm:px-8 lg:pb-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">{guidePages.map((guide) => <a key={guide.slug} href={getGuidePagePath(guide)} className="group"><img className="aspect-[16/10] w-full object-cover" src={guide.heroImage} alt={guide.shortTitle} width="1000" height="625" loading="eager" decoding="async" /><div className="border-b border-charcoal/12 py-6"><p className="text-xs font-black uppercase tracking-[0.14em] text-muted-green">{guide.eyebrow}</p><h2 className="mt-3 text-3xl font-black leading-tight text-charcoal transition group-hover:text-wood">{guide.title}</h2><p className="mt-4 text-base leading-7 text-ink/68">{guide.intro}</p><span className="mt-5 inline-flex items-center text-sm font-black text-charcoal">Read guide <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /></span></div></a>)}</div></section>
    <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-20"><div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Talk It Through</p><h2 className="mt-3 text-4xl font-black">Get guidance for your actual deck.</h2></div><ButtonLink href="/contact" variant="light">Request a Free Quote</ButtonLink></div></section>
    <SiteFooter />
  </main>
}
