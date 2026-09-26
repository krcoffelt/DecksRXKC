import { createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ArrowRow, ButtonLink, CtaBand, FaqList, NumberedList, PageHero, SectionIntro } from '../components/ui'
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
import { getResponsiveImageProps } from '../lib/images'

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
  const spotlightAreas = service.areaSpotlight?.areaSlugs
    .flatMap((slug) => serviceAreas.filter((area) => area.slug === slug)) ?? []
  const featuredAreas = ['leawood-ks', 'prairie-village-ks', 'lenexa-ks', 'overland-park-ks', 'olathe-ks', 'shawnee-ks']
    .flatMap((slug) => serviceAreas.filter((area) => area.slug === slug))

  return (
    <>
      <ServiceStructuredData service={service} />
      <main className="min-h-screen bg-bone text-ink">
        <SiteHeader />
        <PageHero
          title={service.title}
          intro={service.heroCopy}
          image={service.image}
          imageAlt={`${service.shortTitle} by DecksRXKC`}
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: service.shortTitle }]}
          actions={<><ButtonLink href="/contact" variant="bronze">Request a free quote</ButtonLink><ButtonLink href="/projects" variant="outline">See project work</ButtonLink></>}
          meta={service.bestFor.slice(0, 4).map((item, index) => ({ label: 'Best for', value: item }))}
        />

        <section className="bg-bone">
          <div className="shell grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-32">
            <SectionIntro
              title={<>Make the full project <em className="text-wood">work together</em></>}
              copy="DecksRXKC helps homeowners compare the structure, layout, material, access, and finish decisions that shape the final space."
            />
            <ul className="border-t hairline">
              {service.bullets.map((item, index) => (
                <li key={item} className="border-b hairline py-6" data-reveal="up" style={{ ['--d' as string]: index }}>
                  <p className="text-lg leading-8 text-ink/85">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {service.sections.map((section, index) => (
          <section key={section.title} className={index % 2 === 0 ? 'bg-paper' : 'bg-bone'}>
            <div className="shell grid gap-10 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-32">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionIntro title={section.title} />
              </div>
              <div>
                <p className="lede text-ink/72" data-reveal="up">{section.body}</p>
                {section.items ? (
                  <div className="mt-10 grid gap-px overflow-hidden border hairline bg-ink/10 sm:grid-cols-2">
                    {section.items.map((item, itemIndex) => (
                      <div key={item} className={`p-6 ${index % 2 === 0 ? 'bg-paper' : 'bg-bone'}`} data-reveal="fade" style={{ ['--d' as string]: itemIndex }}>
                        <p className="text-base leading-7 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
            {index === 0 && relatedProjects[0] ? (
              <div className="relative h-[70svh] overflow-hidden bg-night">
                <img data-parallax="0.15" className="absolute -inset-y-[15%] inset-x-0 h-[130%] w-full object-cover" {...getResponsiveImageProps(relatedProjects[0].heroImage, '100vw')} alt={relatedProjects[0].title} width="1600" height="1200" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgb(14_13_11/0.75))]" />
                <a href={getProjectPagePath(relatedProjects[0])} className="group shell absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 pb-10 text-bone" data-cursor="View">
                  <span>
                    <span className="block font-display text-4xl tracking-[-0.02em] lg:text-5xl">{relatedProjects[0].shortTitle}</span>
                  </span>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-bone/30 transition-all duration-500 group-hover:bg-bone group-hover:text-night">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                  </span>
                </a>
              </div>
            ) : null}
          </section>
        ))}

        <section className="grain relative bg-night text-bone">
          <div className="shell grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-32">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionIntro title={<>A clear path from assessment to <em className="text-soft-beige">finish</em></>} tone="dark" />
            </div>
            <NumberedList items={service.process.map((step) => ({ title: step.title, copy: step.description }))} tone="dark" />
          </div>
        </section>

        <section className="bg-bone">
          <div className="shell py-24 lg:py-32">
            <SectionIntro title="Compare the choices before work begins" />
            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {service.decisionPoints.map((point, index) => (
                <article key={point.title} className="group border hairline bg-paper p-8 transition-colors duration-500 hover:bg-night hover:text-bone lg:p-10" data-reveal="up" style={{ ['--d' as string]: index }}>
                  <h3 className="font-display text-3xl leading-tight tracking-[-0.02em] lg:text-4xl">{point.title}</h3>
                  <p className="mt-4 text-base leading-7 text-ink/64 transition-colors group-hover:text-bone/64">{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {service.areaSpotlight && spotlightAreas.length > 0 ? (
          <section className="grain relative bg-night text-bone">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[24rem] overflow-hidden">
                <img
                  data-parallax="0.08"
                  className="absolute inset-0 h-[120%] w-full -translate-y-[8%] object-cover"
                  {...getResponsiveImageProps(service.areaSpotlight.image, '(min-width: 1024px) 50vw, 100vw')}
                  alt={`${service.shortTitle} planning details for ${spotlightAreas.map((area) => getServiceAreaLabel(area)).join(' and ')}`}
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
                <SectionIntro title={service.areaSpotlight.title} tone="dark" />
                <p className="lede mt-6 text-bone/68" data-reveal="up">{service.areaSpotlight.body}</p>
                <div className="mt-10 border-t hairline-light">
                  {spotlightAreas.map((area) => (
                    <ArrowRow key={area.slug} href={getServiceAreaPath(area)} tone="dark">
                      Plan {service.shortTitle.toLowerCase()} in {getServiceAreaLabel(area)}
                    </ArrowRow>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {relatedProjects.length > 0 ? (
          <section className="bg-paper">
            <div className="shell py-24 lg:py-32">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                <SectionIntro title="See the details in finished work" />
                <div data-reveal="up"><ButtonLink href="/projects" variant="dark">All projects</ButtonLink></div>
              </div>
              <div className="mt-14 grid gap-10 lg:grid-cols-2">
                {relatedProjects.map((project, index) => (
                  <a key={project.slug} className="group block" href={getProjectPagePath(project)} data-cursor="View" data-reveal="up" style={{ ['--d' as string]: index }}>
                    <div className="frame aspect-[4/3] bg-sand">
                      <img className="h-full w-full object-cover" {...getResponsiveImageProps(project.heroImage, '(min-width: 1024px) 50vw, 100vw')} alt={project.shortTitle} width="1200" height="900" loading="lazy" decoding="async" />
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-6">
                      <div>
                        <h3 className="font-display text-3xl tracking-[-0.02em] transition-colors group-hover:text-wood">{project.shortTitle}</h3>
                        <p className="mt-3 max-w-lg text-[0.95rem] leading-7 text-ink/62">{project.summary}</p>
                      </div>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink/15 transition-all duration-500 group-hover:bg-ink group-hover:text-bone"><ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" /></span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-bone">
          <div className="shell grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-32">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionIntro title="Useful answers before you request a quote" />
              {relatedGuides.length > 0 ? (
                <div className="mt-10 border-t hairline">
                  {relatedGuides.map((guide) => (
                    <ArrowRow key={guide.slug} href={getGuidePagePath(guide)}>{guide.shortTitle}</ArrowRow>
                  ))}
                </div>
              ) : null}
            </div>
            <FaqList items={service.faqs} />
          </div>
        </section>

        <section className="grain relative bg-graphite text-bone">
          <div className="shell grid gap-16 py-24 lg:grid-cols-2 lg:py-28">
            <div>
              <p className="eyebrow text-soft-beige">Related services</p>
              <div className="mt-8 border-t hairline-light">
                {relatedServices.map((relatedService) => (
                  <ArrowRow key={relatedService.slug} href={getServicePagePath(relatedService)} tone="dark">{relatedService.shortTitle}</ArrowRow>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow text-soft-beige">Priority service areas</p>
              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {featuredAreas.map((area) => (
                  <a key={area.slug} className="group flex items-center justify-between gap-3 border border-bone/12 p-5 text-[0.95rem] text-bone/80 transition-all duration-500 hover:border-soft-beige hover:bg-soft-beige hover:text-night" href={getServiceAreaPath(area)}>
                    <span>{service.shortTitle} in {getServiceAreaLabel(area)}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaBand title={<>Ready to talk through <em className="text-soft-beige">{service.shortTitle.toLowerCase()}</em>?</>} image={relatedProjects[1]?.heroImage ?? service.image} />
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
