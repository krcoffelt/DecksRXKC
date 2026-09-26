import { createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ArrowRow, ButtonLink, CtaBand, FaqList, PageHero, SectionIntro } from '../components/ui'
import { business } from '../data/business'
import { getGuidePagePath, getGuidesBySlugs } from '../data/guides'
import { getProjectPagePath, getProjectsBySlugs } from '../data/projects'
import { getServiceArea, getServiceAreaLabel, getServiceAreaPath, serviceAreas, type ServiceArea } from '../data/serviceAreas'
import { getServicePage, getServicePagePath, servicePages } from '../data/servicePages'
import { absoluteUrl, defaultSeoImagePath, getSeoHead, siteUrl } from '../lib/seo'
import { getResponsiveImageProps } from '../lib/images'

export const Route = createFileRoute('/service-areas/$slug')({
  loader: ({ params }) => {
    const area = getServiceArea(params.slug)
    if (!area) throw notFound()
    return area
  },
  head: ({ loaderData }) => {
    const area = loaderData as ServiceArea
    const label = getServiceAreaLabel(area)
    return getSeoHead({
      title: area.metaTitle ?? `Deck Builder in ${label} | DecksRXKC`,
      description: area.metaDescription ?? getServiceAreaDescription(label),
      path: getServiceAreaPath(area),
      image: area.image || defaultSeoImagePath,
    })
  },
  component: ServiceAreaPage,
})

const defaultFocus = [
  { serviceSlug: 'custom-decks', title: 'Custom Deck Builds', copy: 'New decks, replacements, framing, decking, stairs, and railing systems planned around the home and yard.' },
  { serviceSlug: 'screened-in-decks', title: 'Screened-In Decks', copy: 'Screened deck and porch options that reduce bugs and direct exposure while keeping airflow and outdoor views.' },
  { serviceSlug: 'covered-decks', title: 'Covered Decks', copy: 'Roof structures, ceiling finishes, lighting, fans, drainage, and upgrades that make the deck more usable.' },
]

function ServiceAreaPage() {
  const area = Route.useLoaderData()
  const label = getServiceAreaLabel(area)
  const heroTitle = getServiceAreaHeading(area)
  const relatedAreas = getRelatedServiceAreas(area)
  const focus = area.priorityContent?.serviceFocus ?? defaultFocus
  const projects = getProjectsBySlugs(area.priorityContent?.projectSlugs ?? [])
  const guides = getGuidesBySlugs(area.priorityContent?.guideSlugs ?? [])
  const faqs = area.priorityContent?.faqs ?? [
    { question: `What deck services are available in ${area.city}?`, answer: `DecksRXKC serves ${label} with custom decks, repair, replacement, composite and wood options, covers, screened rooms, stairs, and railings.` },
    { question: `Does DecksRXKC provide deck quotes in ${area.city}?`, answer: `Yes. Share the project type, location, current deck condition, and timing to start a practical conversation about the next step.` },
  ]

  return (
    <>
      <ServiceAreaStructuredData area={area} faqs={faqs} />
      <main className="min-h-screen bg-bone text-ink">
        <SiteHeader />
        <PageHero
          title={heroTitle}
          intro={`DecksRXKC is a deck builder serving ${label} with custom decks, screened-in and covered spaces, repairs, replacements, stairs, and railings.`}
          image={area.image}
          imageAlt={`${label} deck project by DecksRXKC`}
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Service Areas', href: '/service-areas' }, { label }]}
          actions={<><ButtonLink href="/contact" variant="bronze">Request a free quote</ButtonLink><ButtonLink href="/projects" variant="outline">View project work</ButtonLink></>}
          meta={[
            { label: 'County', value: area.county },
            { label: 'State', value: area.state === 'KS' ? 'Kansas' : 'Missouri' },
            { label: 'Nearby', value: area.nearby.slice(0, 2).join(', ') },
            { label: 'Popular here', value: area.projectTypes.slice(0, 2).join(' · ') },
          ]}
        />

        <section className="bg-bone">
          <div className="shell grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-32">
            <div>
              <SectionIntro title={<>Built for {area.city} homes and <em className="text-wood">Kansas City weather</em></>} />
              <p className="lede mt-6 text-ink/68" data-reveal="up">{area.localNote}</p>
              {area.priorityContent ? <p className="mt-5 text-lg leading-8 text-ink/68" data-reveal="up">{area.priorityContent.intro}</p> : null}
              <div className="mt-10 bg-paper p-6" data-reveal="up">
                <p className="mono text-[0.68rem] uppercase tracking-[0.14em] text-wood">Nearby communities</p>
                <p className="mt-3 font-display text-2xl leading-snug tracking-[-0.01em]">{area.nearby.join(' / ')}</p>
                <p className="mt-3 text-[0.95rem] leading-7 text-ink/60">Serving {area.county} and surrounding Kansas City metro communities.</p>
              </div>
            </div>
            <div className="border-t hairline">
              {focus.map((item, index) => {
                const service = getServicePage(item.serviceSlug)
                return (
                  <a key={item.serviceSlug} href={service ? getServicePagePath(service) : '/services'} className="group flex items-start justify-between gap-6 border-b hairline py-8" data-reveal="up" style={{ ['--d' as string]: index }}>
                    <div>
                      <h3 className="font-display text-3xl leading-tight tracking-[-0.02em] transition-colors group-hover:text-wood lg:text-4xl">{item.title} in {label}</h3>
                      <p className="mt-3 text-base leading-7 text-ink/64">{item.copy}</p>
                    </div>
                    <span className="mt-1 flex h-11 w-11 items-center justify-center border border-ink/15 transition-all duration-500 group-hover:bg-ink group-hover:text-bone"><ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" /></span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {area.priorityContent ? (
          <section className="grain relative bg-night text-bone">
            <div className="shell grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-32">
              <SectionIntro title={<>Decisions that shape a better <em className="text-soft-beige">{area.city}</em> deck</>} tone="dark" />
              <ul className="border-t hairline-light">
                {area.priorityContent.planningNotes.map((note, index) => (
                  <li key={note} className="border-b hairline-light py-6" data-reveal="up" style={{ ['--d' as string]: index }}>
                    <p className="text-lg leading-8 text-bone/78">{note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {area.priorityContent?.decisionGuide ? (
          <section className="bg-paper">
            <div className="shell grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-32">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionIntro title={area.priorityContent.decisionGuide.title} />
              </div>
              <div>
                <p className="lede text-ink/70" data-reveal="up">{area.priorityContent.decisionGuide.body}</p>
                <div className="mt-10 grid gap-px overflow-hidden border hairline bg-ink/10 sm:grid-cols-2">
                  {area.priorityContent.decisionGuide.points.map((point, index) => (
                    <div key={point} className="bg-paper p-6" data-reveal="fade" style={{ ['--d' as string]: index }}>
                      <p className="text-base leading-7 font-medium">{point}</p>
                    </div>
                  ))}
                </div>
                {guides.length > 0 ? (
                  <div className="mt-10 border-t hairline">
                    {guides.map((guide) => (
                      <ArrowRow key={guide.slug} href={getGuidePagePath(guide)}>{guide.shortTitle}</ArrowRow>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        {projects.length > 0 ? (
          <section className="bg-bone">
            <div className="shell py-24 lg:py-32">
              <SectionIntro title="See similar deck details" copy={`These Kansas City metro projects show services and details commonly considered for ${area.city} homes; they are not presented as projects at a specific address in ${area.city}.`} />
              <div className="mt-14 grid gap-10 lg:grid-cols-2">
                {projects.map((project, index) => (
                  <a key={project.slug} href={getProjectPagePath(project)} className="group block" data-cursor="View" data-reveal="up" style={{ ['--d' as string]: index }}>
                    <div className="frame aspect-[4/3] bg-sand">
                      <img className="h-full w-full object-cover" {...getResponsiveImageProps(project.heroImage, '(min-width: 1024px) 50vw, 100vw')} alt={project.shortTitle} width="1200" height="900" loading="lazy" decoding="async" />
                    </div>
                    <h3 className="mt-5 font-display text-3xl tracking-[-0.02em] transition-colors group-hover:text-wood">{project.shortTitle}</h3>
                    <p className="mt-2 max-w-lg text-[0.95rem] leading-7 text-ink/62">{project.summary}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className={projects.length > 0 ? 'bg-paper' : 'bg-bone'}>
          <div className="shell grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-32">
            <div className="lg:sticky lg:top-28 lg:self-start"><SectionIntro title="Useful answers before you call" /></div>
            <FaqList items={faqs} />
          </div>
        </section>

        <section className="grain relative bg-graphite text-bone">
          <div className="shell grid gap-16 py-24 lg:grid-cols-2 lg:py-28">
            <div>
              <p className="eyebrow text-soft-beige">Nearby service areas</p>
              <div className="mt-8 border-t hairline-light">
                {relatedAreas.map((relatedArea) => (
                  <ArrowRow key={relatedArea.slug} href={getServiceAreaPath(relatedArea)} tone="dark">{getServiceAreaLabel(relatedArea)}</ArrowRow>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow text-soft-beige">All deck services</p>
              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {servicePages.map((service) => (
                  <a key={service.slug} href={getServicePagePath(service)} className="group flex items-center justify-between gap-3 border border-bone/12 p-5 text-[0.95rem] text-bone/80 transition-all duration-500 hover:border-soft-beige hover:bg-soft-beige hover:text-night">
                    {service.shortTitle}
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaBand title={<>Planning a deck project in <em className="text-soft-beige">{label}?</em></>} copy="Tell us what you want to build, repair, replace, cover, or screen in. We will help you compare practical next steps." image="/images/optimized/kansas-city-screened-porch-wood-trim-black-screen.jpg" />
        <SiteFooter />
      </main>
    </>
  )
}

function ServiceAreaStructuredData({ area, faqs }: Readonly<{ area: ServiceArea; faqs: Array<{ question: string; answer: string }> }>) {
  const label = getServiceAreaLabel(area)
  const path = getServiceAreaPath(area)
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', '@id': `${absoluteUrl(path)}#service`, name: `Deck building services in ${label}`, serviceType: servicePages.map((service) => service.shortTitle), provider: { '@id': business.entityId }, areaServed: { '@type': 'City', name: label }, url: absoluteUrl(path), image: absoluteUrl(area.image) },
    { '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${siteUrl}/service-areas` },
      { '@type': 'ListItem', position: 3, name: label, item: absoluteUrl(path) },
    ] },
  ] }) }} />
}

function getServiceAreaDescription(label: string) {
  return `Custom decks, repairs, replacements, screened-in decks, covered decks, stairs, and railings by DecksRXKC in ${label}.`
}

function getServiceAreaHeading(area: ServiceArea) {
  const featuredProjectTypes = area.projectTypes.slice(0, 2).map((projectType) =>
    projectType.replace(/(^|[\s-])\S/g, (letter) => letter.toUpperCase()),
  )

  return `${featuredProjectTypes.join(' & ')} in ${getServiceAreaLabel(area)}`
}

function getRelatedServiceAreas(area: ServiceArea) {
  const sameCounty = serviceAreas.filter((candidate) => candidate.slug !== area.slug && candidate.county === area.county)
  const sameState = serviceAreas.filter((candidate) => candidate.slug !== area.slug && candidate.state === area.state && !sameCounty.includes(candidate))
  const otherAreas = serviceAreas.filter((candidate) => candidate.slug !== area.slug && !sameCounty.includes(candidate) && !sameState.includes(candidate))
  return [...sameCounty, ...sameState, ...otherAreas].slice(0, 4)
}

export function getStaticPaths() {
  return serviceAreas.map((area) => ({ params: { slug: area.slug } }))
}
