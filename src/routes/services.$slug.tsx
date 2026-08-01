import { createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ButtonLink } from '../components/ui'
import { business } from '../data/business'
import { getGuidesBySlugs, getGuidePagePath } from '../data/guides'
import { getProjectPagePath, getProjectsBySlugs } from '../data/projects'
import { getServiceAreaLabel, getServiceAreaPath, serviceAreas } from '../data/serviceAreas'
import {
  getServiceIcon,
  getServicePage,
  getServicePagePath,
  getServicesBySlugs,
  servicePages,
  type ServicePage,
} from '../data/servicePages'
import { absoluteUrl, getSeoHead, siteUrl } from '../lib/seo'

export const Route = createFileRoute('/services/$slug')({
  loader: ({ params }) => {
    const service = getServicePage(params.slug)

    if (!service) {
      throw notFound()
    }

    return service
  },
  head: ({ loaderData }) => {
    const service = loaderData as ServicePage

    return getSeoHead({
      title: service.metaTitle,
      description: service.metaDescription,
      path: getServicePagePath(service),
      image: service.image,
    })
  },
  component: ServiceDetailPage,
})

function ServiceDetailPage() {
  const service = Route.useLoaderData()
  const Icon = getServiceIcon(service)
  const relatedServices = getServicesBySlugs(service.relatedServiceSlugs)
  const relatedProjects = getProjectsBySlugs(service.relatedProjectSlugs)
  const relatedGuides = getGuidesBySlugs(service.relatedGuideSlugs)
  const featuredAreas = ['lenexa-ks', 'overland-park-ks', 'olathe-ks', 'shawnee-ks']
    .flatMap((slug) => serviceAreas.filter((area) => area.slug === slug))

  return (
    <>
      <ServiceStructuredData service={service} />
      <main className="min-h-screen bg-warm-white text-ink">
        <SiteHeader />
        <section className="relative overflow-hidden bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-24">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-42"
            src={service.image}
            alt={`${service.shortTitle} by DecksRXKC`}
            width="1600"
            height="1200"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0_/_0.84),rgb(0_0_0_/_0.48)_58%,rgb(0_0_0_/_0.2))]" />
          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-soft-beige">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {service.eyebrow}
              </p>
              <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-white/82">{service.heroCopy}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="light">Request a Free Quote</ButtonLink>
                <ButtonLink href="/projects" variant="outline">See Project Work</ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Built For</p>
              <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight text-charcoal sm:text-5xl">
                Make the full project work together
              </h2>
              <p className="mt-5 text-lg leading-8 text-ink/72">
                DecksRXKC helps homeowners compare the structure, layout, material, access, and finish decisions that shape the final space.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.bestFor.map((item) => (
                  <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-black text-muted-green">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="divide-y divide-charcoal/12 border-y border-charcoal/12">
              {service.bullets.map((item) => (
                <div key={item} className="flex gap-4 py-6">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-muted-green" aria-hidden="true" />
                  <p className="text-lg font-bold leading-8 text-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {service.sections.map((section, index) => (
          <section key={section.title} className={index % 2 === 0 ? 'bg-white px-5 py-16 sm:px-8 lg:py-24' : 'px-5 py-16 sm:px-8 lg:py-24'}>
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">{section.eyebrow}</p>
                <h2 className="mt-4 text-4xl font-black leading-[1.04] tracking-tight text-charcoal sm:text-5xl">{section.title}</h2>
              </div>
              <div>
                <p className="text-lg leading-8 text-ink/72">{section.body}</p>
                {section.items ? (
                  <div className="mt-8 grid border-y border-charcoal/12 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <div key={item} className="border-b border-charcoal/12 py-5 pr-5 text-base font-black leading-7 text-charcoal sm:odd:border-r sm:even:pl-5 sm:nth-last-[-n+2]:border-b-0">
                        {item}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ))}

        <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">How It Works</p>
                <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">A clear path from assessment to finish</h2>
              </div>
              <ol className="divide-y divide-white/14 border-y border-white/14">
                {service.process.map((step, index) => (
                  <li key={step.title} className="grid gap-3 py-6 sm:grid-cols-[3.5rem_0.6fr_1.4fr] sm:items-start">
                    <span className="text-sm font-black text-soft-beige">0{index + 1}</span>
                    <h3 className="text-xl font-black">{step.title}</h3>
                    <p className="text-base leading-7 text-white/68">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Decisions That Matter</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal sm:text-5xl">Compare the choices before work begins</h2>
            </div>
            <div className="mt-10 grid border-y border-charcoal/12 md:grid-cols-2">
              {service.decisionPoints.map((point) => (
                <article key={point.title} className="border-b border-charcoal/12 py-7 md:odd:border-r md:odd:pr-8 md:even:pl-8 md:nth-last-[-n+2]:border-b-0">
                  <h3 className="text-2xl font-black text-charcoal">{point.title}</h3>
                  <p className="mt-3 text-base leading-7 text-ink/68">{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {relatedProjects.length > 0 ? (
          <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-5 border-b border-charcoal/12 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Project Proof</p>
                  <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal sm:text-5xl">See the details in finished work</h2>
                </div>
                <ButtonLink href="/projects" variant="ghost">All Projects</ButtonLink>
              </div>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                {relatedProjects.map((project) => (
                  <a key={project.slug} className="group grid gap-5 sm:grid-cols-[0.9fr_1.1fr]" href={getProjectPagePath(project)}>
                    <img className="h-64 w-full object-cover" src={project.heroImage} alt={project.shortTitle} width="800" height="700" loading="lazy" decoding="async" />
                    <div className="self-end border-b border-charcoal/12 pb-5">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-muted-green">{project.location}</p>
                      <h3 className="mt-3 text-2xl font-black leading-tight text-charcoal group-hover:text-wood">{project.shortTitle}</h3>
                      <p className="mt-3 text-sm leading-6 text-ink/66">{project.summary}</p>
                      <span className="mt-4 inline-flex items-center text-sm font-black text-charcoal">View project <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /></span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Common Questions</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal">Useful answers before you request a quote</h2>
              {relatedGuides.map((guide) => (
                <a key={guide.slug} href={getGuidePagePath(guide)} className="mt-7 block border-y border-charcoal/12 py-5 text-base font-black text-muted-green transition hover:text-wood">
                  Read the guide: {guide.shortTitle}
                </a>
              ))}
            </div>
            <div className="divide-y divide-charcoal/12 border-y border-charcoal/12">
              {service.faqs.map((faq) => (
                <article key={faq.question} className="py-6">
                  <h3 className="text-xl font-black text-charcoal">{faq.question}</h3>
                  <p className="mt-3 text-base leading-7 text-ink/68">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Related Services</p>
              <div className="mt-5 divide-y divide-white/14 border-y border-white/14">
                {relatedServices.map((relatedService) => (
                  <a key={relatedService.slug} className="flex items-center justify-between py-5 text-lg font-black text-white transition hover:text-soft-beige" href={getServicePagePath(relatedService)}>
                    {relatedService.shortTitle}
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Johnson County Focus</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {featuredAreas.map((area) => (
                  <a key={area.slug} className="border border-white/14 p-4 text-sm font-black text-white/76 transition hover:border-soft-beige hover:text-soft-beige" href={getServiceAreaPath(area)}>
                    {getServiceAreaLabel(area)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 border-y border-charcoal/12 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Free Quote</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-charcoal">Ready to talk through {service.shortTitle.toLowerCase()}?</h2>
            </div>
            <ButtonLink href="/contact">Start Your Quote</ButtonLink>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  )
}

function ServiceStructuredData({ service }: Readonly<{ service: ServicePage }>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': `${absoluteUrl(getServicePagePath(service))}#service`,
              name: service.title,
              description: service.metaDescription,
              provider: { '@id': business.entityId },
              areaServed: business.region,
              url: absoluteUrl(getServicePagePath(service)),
            },
            {
              '@type': 'FAQPage',
              mainEntity: service.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
                { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
                { '@type': 'ListItem', position: 3, name: service.shortTitle, item: absoluteUrl(getServicePagePath(service)) },
              ],
            },
          ],
        }),
      }}
    />
  )
}

export function getStaticPaths() {
  return servicePages.map((service) => ({ params: { slug: service.slug } }))
}
