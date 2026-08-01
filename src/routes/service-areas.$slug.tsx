import { createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowUpRight, CheckCircle, MapPin } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ButtonLink } from '../components/ui'
import { business } from '../data/business'
import { getProjectPagePath, getProjectsBySlugs } from '../data/projects'
import { getServiceArea, getServiceAreaLabel, getServiceAreaPath, serviceAreas, type ServiceArea } from '../data/serviceAreas'
import { getServicePage, getServicePagePath, servicePages } from '../data/servicePages'
import { absoluteUrl, defaultSeoImagePath, getSeoHead, siteUrl } from '../lib/seo'

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
      title: `Deck Builder in ${label} | DecksRXKC`,
      description: getServiceAreaDescription(label),
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
  const relatedAreas = getRelatedServiceAreas(area)
  const focus = area.priorityContent?.serviceFocus ?? defaultFocus
  const projects = getProjectsBySlugs(area.priorityContent?.projectSlugs ?? [])
  const faqs = area.priorityContent?.faqs ?? [
    { question: `What deck services are available in ${area.city}?`, answer: `DecksRXKC serves ${label} with custom decks, repair, replacement, composite and wood options, covers, screened rooms, stairs, and railings.` },
    { question: `Does DecksRXKC provide deck quotes in ${area.city}?`, answer: `Yes. Share the project type, location, current deck condition, and timing to start a practical conversation about the next step.` },
  ]

  return (
    <>
      <ServiceAreaStructuredData area={area} faqs={faqs} />
      <main className="min-h-screen bg-warm-white text-ink">
        <SiteHeader />

        <section className="relative overflow-hidden bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-24">
          <img className="absolute inset-0 h-full w-full object-cover opacity-42" src={area.image} alt={`${label} deck project by DecksRXKC`} width="1600" height="1200" loading="eager" decoding="async" fetchPriority="high" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0_/_0.8),rgb(0_0_0_/_0.44)_56%,rgb(0_0_0_/_0.25))]" />
          <div className="relative mx-auto max-w-7xl"><div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-soft-beige"><MapPin className="h-4 w-4" aria-hidden="true" />{label} service area</p>
            <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">Deck builder in {label}</h1>
            <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-white/82">Custom decks, screened-in decks, covered decks, repairs, replacements, stairs, and railings for homeowners in {label}.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/contact" variant="light">Request a Free Quote</ButtonLink><ButtonLink href="/projects" variant="outline">View Project Work</ButtonLink></div>
          </div></div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Local Deck Planning</p>
              <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight text-charcoal sm:text-5xl">Built for {area.city} homes and Kansas City weather</h2>
              <p className="mt-5 text-lg leading-8 text-ink/72">{area.localNote}</p>
              {area.priorityContent ? <p className="mt-5 text-lg leading-8 text-ink/72">{area.priorityContent.intro}</p> : null}
              <div className="mt-8 border-y border-charcoal/12 py-6"><p className="text-sm font-black uppercase tracking-[0.14em] text-muted-green">Nearby communities</p><p className="mt-3 text-xl font-black text-charcoal">{area.nearby.join(' / ')}</p><p className="mt-3 text-base leading-7 text-ink/66">Serving {area.county} and surrounding Kansas City metro communities.</p></div>
            </div>
            <div className="divide-y divide-charcoal/12 border-y border-charcoal/12">
              {focus.map((item) => {
                const service = getServicePage(item.serviceSlug)
                return <a key={item.serviceSlug} href={service ? getServicePagePath(service) : '/services'} className="group block py-7">
                  <div className="flex items-start justify-between gap-5"><div><h3 className="text-2xl font-black text-charcoal transition group-hover:text-wood">{item.title} in {label}</h3><p className="mt-3 text-base leading-7 text-ink/70">{item.copy}</p></div><ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-green" aria-hidden="true" /></div>
                </a>
              })}
            </div>
          </div>
        </section>

        {area.priorityContent ? (
          <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <div><p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Planning Priorities</p><h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Decisions that shape a better {area.city} deck</h2></div>
              <div className="divide-y divide-white/14 border-y border-white/14">{area.priorityContent.planningNotes.map((note) => <p key={note} className="flex gap-4 py-6 text-lg font-bold leading-8 text-white/78"><CheckCircle className="mt-1 h-5 w-5 shrink-0 text-soft-beige" aria-hidden="true" />{note}</p>)}</div>
            </div>
          </section>
        ) : null}

        {projects.length > 0 ? (
          <section className="bg-white px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="max-w-4xl"><p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Relevant Project Work</p><h2 className="mt-4 text-4xl font-black leading-tight text-charcoal sm:text-5xl">See similar deck details</h2><p className="mt-4 text-base leading-7 text-ink/66">These Kansas City metro projects show services and details commonly considered for {area.city} homes; they are not presented as projects at a specific address in {area.city}.</p></div><div className="mt-9 grid gap-8 lg:grid-cols-2">{projects.map((project) => <a key={project.slug} href={getProjectPagePath(project)} className="group grid gap-5 sm:grid-cols-[0.9fr_1.1fr]"><img className="h-60 w-full object-cover" src={project.heroImage} alt={project.shortTitle} width="700" height="600" loading="lazy" decoding="async" /><div className="self-end border-b border-charcoal/12 pb-5"><h3 className="text-2xl font-black text-charcoal transition group-hover:text-wood">{project.shortTitle}</h3><p className="mt-3 text-sm leading-6 text-ink/66">{project.summary}</p></div></a>)}</div></div></section>
        ) : null}

        <section className="px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-wood">{area.city} Deck Questions</p><h2 className="mt-4 text-4xl font-black leading-tight text-charcoal">Useful answers before you call</h2></div><div className="divide-y divide-charcoal/12 border-y border-charcoal/12">{faqs.map((faq) => <article key={faq.question} className="py-6"><h3 className="text-xl font-black text-charcoal">{faq.question}</h3><p className="mt-3 text-base leading-7 text-ink/68">{faq.answer}</p></article>)}</div></div></section>

        <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-20"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Nearby Service Areas</p><div className="mt-5 grid gap-3 sm:grid-cols-2">{relatedAreas.map((relatedArea) => <a key={relatedArea.slug} href={getServiceAreaPath(relatedArea)} className="border border-white/14 p-4 font-black text-white/76 transition hover:border-soft-beige hover:text-soft-beige">{getServiceAreaLabel(relatedArea)}</a>)}</div></div><div><p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">All Deck Services</p><div className="mt-5 grid gap-3 sm:grid-cols-2">{servicePages.map((service) => <a key={service.slug} href={getServicePagePath(service)} className="border border-white/14 p-4 font-black text-white/76 transition hover:border-soft-beige hover:text-soft-beige">{service.shortTitle}</a>)}</div></div></div></section>

        <section className="px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto overflow-hidden bg-white"><div className="grid lg:grid-cols-[1fr_0.75fr]"><div className="p-7 sm:p-10 lg:p-12"><p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Free Quote</p><h2 className="mt-4 text-4xl font-black leading-tight text-charcoal sm:text-5xl">Planning a deck project in {label}?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-ink/72">Tell us what you want to build, repair, replace, cover, or screen in. We will help you compare practical next steps.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/contact">Start Your Quote</ButtonLink><ButtonLink href={`tel:${business.phone}`} variant="ghost">Call {business.phoneDisplay}</ButtonLink></div></div><img className="h-72 w-full object-cover lg:h-full" src="/images/optimized/kansas-city-screened-porch-wood-trim-black-screen.jpg" alt="Screened-in deck built by DecksRXKC" width="1584" height="1258" loading="lazy" decoding="async" /></div></div></section>
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

function getRelatedServiceAreas(area: ServiceArea) {
  const sameCounty = serviceAreas.filter((candidate) => candidate.slug !== area.slug && candidate.county === area.county)
  const sameState = serviceAreas.filter((candidate) => candidate.slug !== area.slug && candidate.state === area.state && !sameCounty.includes(candidate))
  const otherAreas = serviceAreas.filter((candidate) => candidate.slug !== area.slug && !sameCounty.includes(candidate) && !sameState.includes(candidate))
  return [...sameCounty, ...sameState, ...otherAreas].slice(0, 4)
}

export function getStaticPaths() {
  return serviceAreas.map((area) => ({ params: { slug: area.slug } }))
}
