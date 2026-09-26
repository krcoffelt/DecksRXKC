import { createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowUpRight, Check } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ArrowRow, ButtonLink, CtaBand, FaqList, PageHero, SectionIntro } from '../components/ui'
import { business } from '../data/business'
import { getGuidePage, guidePages, type GuidePage } from '../data/guides'
import { getProjectsBySlugs } from '../data/projects'
import { getServicesBySlugs } from '../data/servicePages'
import { getGuidePagePath, getProjectPagePath, getServicePagePath } from '../data/paths'
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
  const wordCount = guide.sections.reduce((total, section) => total + [section.body, ...(section.paragraphs ?? []), ...(section.points ?? [])].join(' ').split(/\s+/).length, 0)
  const readingMinutes = Math.max(3, Math.round(wordCount / 220))
  return <>
    <GuideStructuredData guide={guide} />
    <main id="main" className="min-h-screen bg-bone text-ink">
      <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent" aria-hidden="true"><div data-page-progress className="h-full origin-left scale-x-0 bg-soft-beige" /></div>
      <SiteHeader />
      <PageHero
        title={guide.title}
        intro={guide.intro}
        image={guide.heroImage}
        imageAlt={guide.shortTitle}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides' }, { label: guide.shortTitle }]}
        meta={[
          { label: 'Updated', value: guide.updatedAt },
          { label: 'Sections', value: `${guide.sections.length} topics` },
          { label: 'Reading time', value: `${readingMinutes} min` },
          { label: 'Sources', value: `${guide.sources.length} references` },
        ]}
      />

      <section className="bg-paper">
        <div className="shell grid gap-10 py-16 lg:grid-cols-[0.3fr_1fr] lg:py-20">
          <span className="hidden lg:block" />
          <div>
            <p className="font-medium text-[clamp(1.7rem,2.6vw,2.5rem)] leading-[1.15] tracking-[-0.03em]" data-reveal="up">{guide.answer ?? guide.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Request a free quote</ButtonLink>
              <ButtonLink href={`tel:${business.phone}`} variant="outline">Call {business.phoneDisplay}</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-bone">
        <div className="shell grid gap-12 py-20 lg:grid-cols-[16rem_1fr] lg:gap-20 lg:py-28">
          <nav aria-label="Table of contents" className="lg:sticky lg:top-28 lg:self-start">
            <p className="mono text-[0.7rem] uppercase tracking-[0.14em] text-ink/65">In this guide</p>
            <ol className="mt-5 border-t hairline">
              {guide.sections.map((section, index) => (
                <li key={section.heading} className="border-b hairline">
                  <a className="group flex py-3 text-[0.9rem] leading-5 text-ink/70 transition-colors hover:text-ink" href={`#${sectionId(section.heading)}`}>
                    <span className="link-line">{section.heading}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="max-w-3xl">
            {guide.sections.map((section, index) => (
              <section id={sectionId(section.heading)} key={section.heading} className="scroll-mt-28 border-t hairline pt-10 pb-14 first:border-t-0 first:pt-0">
                <h2 className="display-sm">{section.heading}</h2>
                <p className="mt-6 text-lg leading-8 text-ink/75">{section.body}</p>
                {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-5 text-lg leading-8 text-ink/75">{paragraph}</p>)}
                {section.points ? (
                  <ul className="mt-8 grid gap-2">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-4 bg-paper px-5 py-4 text-base leading-7">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-wood" aria-hidden="true" />{point}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.sourceIds?.length ? (
                  <p className="mono mt-6 text-[0.72rem] leading-6 uppercase tracking-[0.08em] text-ink/65">Sources: {section.sourceIds.map((sourceId, sourceIndex) => { const source = sourcesById.get(sourceId); return source ? <span key={source.id}>{sourceIndex > 0 ? ' · ' : ''}<a className="text-wood underline decoration-wood/35 underline-offset-4 transition hover:text-ink" href={source.url} target="_blank" rel="noreferrer">{source.publisher}</a></span> : null })}</p>
                ) : null}
              </section>
            ))}
          </article>
        </div>
      </div>

      <section className="bg-paper">
        <div className="shell grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-28">
          <div>
            <p className="eyebrow text-wood">Primary sources</p>
            <h2 className="display-md mt-6">Verify the guidance</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-ink/64">These authoritative references support the technical and product-specific statements in this guide. Local requirements and manufacturer instructions can change, so confirm the current rules for your project.</p>
          </div>
          <ul className="border-t hairline">
            {guide.sources.map((source) => (
              <li key={source.id}>
                <a className="group flex items-center justify-between gap-6 border-b hairline py-5" href={source.url} target="_blank" rel="noreferrer">
                  <span>
                    <span className="mono block text-[0.68rem] uppercase tracking-[0.14em] text-wood">{source.publisher}</span>
                    <span className="mt-1 block text-lg font-medium transition-colors group-hover:text-wood">{source.title}</span>
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink/15 transition-all duration-500 group-hover:bg-ink group-hover:text-bone"><ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" /></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grain relative bg-graphite text-bone">
        <div className="shell grid gap-16 py-24 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="eyebrow text-soft-beige">Related services</p>
            <div className="mt-8 border-t hairline-light">{services.map((service) => <ArrowRow key={service.slug} href={getServicePagePath(service)} tone="dark">{service.shortTitle}</ArrowRow>)}</div>
          </div>
          <div>
            <p className="eyebrow text-soft-beige">See the work</p>
            <div className="mt-8 border-t hairline-light">{projects.map((project) => <ArrowRow key={project.slug} href={getProjectPagePath(project)} tone="dark">{project.shortTitle}</ArrowRow>)}</div>
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="shell grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-32">
          <div className="lg:sticky lg:top-28 lg:self-start"><SectionIntro title="Apply the guide to your deck" /></div>
          <FaqList items={guide.faqs} />
        </div>
      </section>

      <CtaBand title={<>Need an answer for <em className="text-soft-beige">your actual space?</em></>} image={guide.heroImage} />
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
