import { createFileRoute, notFound } from '@tanstack/react-router'
import { CheckCircle } from 'lucide-react'
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
  return <>
    <GuideStructuredData guide={guide} />
    <main className="min-h-screen bg-warm-white text-ink">
      <SiteHeader />
      <section className="px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-wood">{guide.eyebrow}</p><h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-tight text-charcoal sm:text-6xl">{guide.title}</h1><p className="mt-6 text-xl leading-9 text-ink/72">{guide.intro}</p><p className="mt-5 text-xs font-black uppercase tracking-[0.14em] text-muted-green">Updated {guide.updatedAt}</p></div><img className="aspect-[4/3] w-full object-cover" src={guide.heroImage} alt={guide.shortTitle} width="1200" height="900" loading="eager" decoding="async" fetchPriority="high" /></div></section>
      <article>
        {guide.sections.map((section, index) => <section key={section.heading} className={index % 2 === 0 ? 'bg-white px-5 py-16 sm:px-8 lg:py-20' : 'px-5 py-16 sm:px-8 lg:py-20'}><div className="mx-auto grid max-w-5xl gap-7 lg:grid-cols-[0.72fr_1.28fr]"><h2 className="text-3xl font-black leading-tight text-charcoal sm:text-4xl">{section.heading}</h2><div><p className="text-lg leading-8 text-ink/72">{section.body}</p>{section.points ? <div className="mt-7 divide-y divide-charcoal/12 border-y border-charcoal/12">{section.points.map((point) => <p key={point} className="flex gap-3 py-4 font-bold leading-7 text-charcoal"><CheckCircle className="mt-1 h-5 w-5 shrink-0 text-muted-green" aria-hidden="true" />{point}</p>)}</div> : null}</div></div></section>)}
      </article>
      <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-20"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Related Services</p><div className="mt-5 divide-y divide-white/14 border-y border-white/14">{services.map((service) => <a key={service.slug} href={getServicePagePath(service)} className="block py-5 text-lg font-black transition hover:text-soft-beige">{service.shortTitle}</a>)}</div></div><div><p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">See the Work</p><div className="mt-5 divide-y divide-white/14 border-y border-white/14">{projects.map((project) => <a key={project.slug} href={getProjectPagePath(project)} className="block py-5 text-lg font-black transition hover:text-soft-beige">{project.shortTitle}</a>)}</div></div></div></section>
      <section className="px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.74fr_1.26fr]"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Common Questions</p><h2 className="mt-4 text-4xl font-black text-charcoal">Apply the guide to your deck</h2></div><div className="divide-y divide-charcoal/12 border-y border-charcoal/12">{guide.faqs.map((faq) => <article key={faq.question} className="py-6"><h3 className="text-xl font-black text-charcoal">{faq.question}</h3><p className="mt-3 leading-7 text-ink/68">{faq.answer}</p></article>)}</div></div></section>
      <section className="px-5 pb-16 sm:px-8 lg:pb-20"><div className="mx-auto flex max-w-7xl flex-col gap-5 border-y border-charcoal/12 py-10 sm:flex-row sm:items-center sm:justify-between"><h2 className="text-3xl font-black text-charcoal">Need an answer for your actual space?</h2><ButtonLink href="/contact">Request a Free Quote</ButtonLink></div></section>
      <SiteFooter />
    </main>
  </>
}

function GuideStructuredData({ guide }: Readonly<{ guide: GuidePage }>) {
  const path = getGuidePagePath(guide)
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', '@id': `${absoluteUrl(path)}#article`, headline: guide.title, description: guide.metaDescription, image: absoluteUrl(guide.heroImage), datePublished: guide.publishedAt, dateModified: guide.updatedAt, author: { '@id': business.entityId }, publisher: { '@id': business.entityId }, mainEntityOfPage: absoluteUrl(path) },
    { '@type': 'FAQPage', mainEntity: guide.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteUrl}/guides` },
      { '@type': 'ListItem', position: 3, name: guide.shortTitle, item: absoluteUrl(path) },
    ] },
  ] }) }} />
}

export function getStaticPaths() { return guidePages.map((guide) => ({ params: { slug: guide.slug } })) }
