import { createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ButtonLink } from '../components/ui'
import { business } from '../data/business'
import { getGuidePage, getGuidePagePath, guidePages, type GuidePage } from '../data/guides'
import { getProjectPagePath, getProjectsBySlugs } from '../data/projects'
import { getServicePagePath, getServicesBySlugs } from '../data/servicePages'
import { absoluteUrl, getSeoHead, siteUrl } from '../lib/seo'

export const Route = createFileRoute('/guides/$slug')({
  loader: ({ params }) => { const guide = getGuidePage(params.slug); if (!guide) throw notFound(); return guide },
  head: ({ loaderData }) => { const guide = loaderData as GuidePage; return getSeoHead({ title: guide.metaTitle, description: guide.metaDescription, path: getGuidePagePath(guide), image: guide.heroImage, type: 'article' }) },
  component: GuideDetailPage,
})

function GuideDetailPage() {
  const guide = Route.useLoaderData()
  const services = getServicesBySlugs(guide.relatedServiceSlugs)
  const projects = getProjectsBySlugs(guide.relatedProjectSlugs)
  const sourcesById = new Map(guide.sources.map((source) => [source.id, source]))
  return <>
    <GuideStructuredData guide={guide} />
    <main className="min-h-screen bg-warm-white text-ink">
      <SiteHeader />
      <section className="px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-wood">{guide.eyebrow}</p><h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-tight text-charcoal sm:text-6xl">{guide.title}</h1><p className="mt-6 text-xl leading-9 text-ink/72">{guide.intro}</p><p className="mt-5 text-xs font-black uppercase tracking-[0.14em] text-muted-green">Updated {guide.updatedAt}</p></div><img className="aspect-[4/3] w-full object-cover" src={guide.heroImage} alt={guide.shortTitle} width="1200" height="900" loading="eager" decoding="async" fetchPriority="high" /></div></section>
      <section className="border-y border-charcoal/12 bg-white px-5 py-10 sm:px-8"><div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-muted-green">The short answer</p><p className="mt-3 text-xl font-bold leading-8 text-charcoal">{guide.answer ?? guide.intro}</p><div className="mt-6 flex flex-wrap gap-3"><ButtonLink href="/contact">Request a Free Quote</ButtonLink><a className="inline-flex min-h-12 items-center justify-center border border-charcoal/18 px-5 text-sm font-black text-charcoal transition hover:border-charcoal hover:bg-warm-white" href={`tel:${business.phone}`}>Call {business.phoneDisplay}</a></div></div><nav aria-label="Table of contents"><p className="text-xs font-black uppercase tracking-[0.16em] text-wood">In this guide</p><ol className="mt-3 border-t border-charcoal/12">{guide.sections.map((section, index) => <li key={section.heading} className="border-b border-charcoal/12"><a className="flex gap-3 py-3 text-sm font-bold leading-5 text-charcoal transition hover:text-wood" href={`#${sectionId(section.heading)}`}><span className="text-muted-green">{String(index + 1).padStart(2, '0')}</span>{section.heading}</a></li>)}</ol></nav></div></section>
      <article>
        {guide.sections.map((section, index) => <section id={sectionId(section.heading)} key={section.heading} className={`scroll-mt-24 ${index % 2 === 0 ? 'bg-warm-white px-5 py-16 sm:px-8 lg:py-20' : 'bg-white px-5 py-16 sm:px-8 lg:py-20'}`}><div className="mx-auto grid max-w-5xl gap-7 lg:grid-cols-[0.72fr_1.28fr]"><h2 className="text-3xl font-black leading-tight text-charcoal sm:text-4xl">{section.heading}</h2><div><p className="text-lg leading-8 text-ink/72">{section.body}</p>{section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-5 text-lg leading-8 text-ink/72">{paragraph}</p>)}{section.points ? <div className="mt-7 divide-y divide-charcoal/12 border-y border-charcoal/12">{section.points.map((point) => <p key={point} className="flex gap-3 py-4 font-bold leading-7 text-charcoal"><CheckCircle className="mt-1 h-5 w-5 shrink-0 text-muted-green" aria-hidden="true" />{point}</p>)}</div> : null}{section.sourceIds?.length ? <p className="mt-6 text-sm leading-6 text-ink/58">Sources: {section.sourceIds.map((sourceId, sourceIndex) => { const source = sourcesById.get(sourceId); return source ? <span key={source.id}>{sourceIndex > 0 ? ' · ' : ''}<a className="font-bold text-muted-green underline decoration-muted-green/35 underline-offset-4 transition hover:text-wood" href={source.url} target="_blank" rel="noreferrer">{source.publisher}</a></span> : null })}</p> : null}</div></div></section>)}
      </article>
      <section className="bg-white px-5 py-16 sm:px-8 lg:py-20"><div className="mx-auto max-w-5xl"><p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Primary Sources</p><h2 className="mt-4 text-3xl font-black text-charcoal sm:text-4xl">Verify the guidance</h2><p className="mt-4 max-w-3xl text-base leading-7 text-ink/68">These authoritative references support the technical and product-specific statements in this guide. Local requirements and manufacturer instructions can change, so confirm the current rules for your project.</p><ul className="mt-8 divide-y divide-charcoal/12 border-y border-charcoal/12">{guide.sources.map((source) => <li key={source.id}><a className="group flex items-center justify-between gap-5 py-5" href={source.url} target="_blank" rel="noreferrer"><span><span className="block text-xs font-black uppercase tracking-[0.14em] text-muted-green">{source.publisher}</span><span className="mt-1 block text-base font-black text-charcoal transition group-hover:text-wood">{source.title}</span></span><ArrowUpRight className="h-5 w-5 shrink-0 text-muted-green" aria-hidden="true" /></a></li>)}</ul></div></section>
      <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-20"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Related Services</p><div className="mt-5 divide-y divide-white/14 border-y border-white/14">{services.map((service) => <a key={service.slug} href={getServicePagePath(service)} className="block py-5 text-lg font-black transition hover:text-soft-beige">{service.shortTitle}</a>)}</div></div><div><p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">See the Work</p><div className="mt-5 divide-y divide-white/14 border-y border-white/14">{projects.map((project) => <a key={project.slug} href={getProjectPagePath(project)} className="block py-5 text-lg font-black transition hover:text-soft-beige">{project.shortTitle}</a>)}</div></div></div></section>
      <section className="px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.74fr_1.26fr]"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Common Questions</p><h2 className="mt-4 text-4xl font-black text-charcoal">Apply the guide to your deck</h2></div><div className="divide-y divide-charcoal/12 border-y border-charcoal/12">{guide.faqs.map((faq) => <article key={faq.question} className="py-6"><h3 className="text-xl font-black text-charcoal">{faq.question}</h3><p className="mt-3 leading-7 text-ink/68">{faq.answer}</p></article>)}</div></div></section>
      <section className="px-5 pb-16 sm:px-8 lg:pb-20"><div className="mx-auto flex max-w-7xl flex-col gap-5 border-y border-charcoal/12 py-10 sm:flex-row sm:items-center sm:justify-between"><h2 className="text-3xl font-black text-charcoal">Need an answer for your actual space?</h2><ButtonLink href="/contact">Request a Free Quote</ButtonLink></div></section>
      <SiteFooter />
    </main>
  </>
}

function sectionId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function GuideStructuredData({ guide }: Readonly<{ guide: GuidePage }>) {
  const path = getGuidePagePath(guide)
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', '@id': `${absoluteUrl(path)}#article`, headline: guide.title, description: guide.metaDescription, image: absoluteUrl(guide.heroImage), datePublished: guide.publishedAt, dateModified: guide.updatedAt, author: { '@id': business.entityId }, publisher: { '@id': business.entityId }, mainEntityOfPage: absoluteUrl(path), citation: guide.sources.map((source) => source.url) },
    { '@type': 'FAQPage', mainEntity: guide.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteUrl}/guides` },
      { '@type': 'ListItem', position: 3, name: guide.shortTitle, item: absoluteUrl(path) },
    ] },
  ] }) }} />
}

export function getStaticPaths() { return guidePages.map((guide) => ({ params: { slug: guide.slug } })) }
