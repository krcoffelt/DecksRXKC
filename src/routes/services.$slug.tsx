import { createFileRoute, notFound } from '@tanstack/react-router'
import { CheckCircle } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ButtonLink } from '../components/ui'
import { getServiceAreaLabel, getServiceAreaPath, serviceAreas } from '../data/serviceAreas'
import { getServiceIcon, getServicePage, getServicePagePath, servicePages, type ServicePage } from '../data/servicePages'
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
  const relatedServices = servicePages.filter((candidate) => candidate.slug !== service.slug).slice(0, 3)

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
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0_/_0.82),rgb(0_0_0_/_0.44)_58%,rgb(0_0_0_/_0.2))]" />
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
                <ButtonLink href="/#contact" variant="light">Request a Free Quote</ButtonLink>
                <ButtonLink href="/services" variant="outline">View All Services</ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Built For</p>
              <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight text-charcoal sm:text-5xl">
                Practical deck work with a finished look
              </h2>
              <p className="mt-5 text-lg leading-8 text-ink/72">
                DecksRXKC keeps the process clear, helps you compare options, and builds around how the space will be used.
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

        <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Common Questions</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal">Fast answers before you call</h2>
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

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Related Services</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal">Plan the full outdoor space</h2>
            </div>
            <div className="grid gap-px bg-charcoal/12 sm:grid-cols-3">
              {relatedServices.map((relatedService) => (
                <a key={relatedService.slug} className="bg-white p-5 font-black text-charcoal transition hover:bg-charcoal hover:text-white" href={getServicePagePath(relatedService)}>
                  {relatedService.shortTitle}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Service Areas</p>
              <h2 className="mt-4 text-4xl font-black leading-tight">Available across the Kansas City metro</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {serviceAreas.slice(0, 9).map((area) => (
                <a key={area.slug} className="border border-white/14 p-4 text-sm font-black text-white/76 transition hover:border-soft-beige hover:text-soft-beige" href={getServiceAreaPath(area)}>
                  {getServiceAreaLabel(area)}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 border-y border-charcoal/12 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Free Quote</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-charcoal">Ready to talk through {service.shortTitle.toLowerCase()}?</h2>
            </div>
            <ButtonLink href="/#contact">Start Your Quote</ButtonLink>
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
        __html: JSON.stringify([
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.metaDescription,
            provider: {
              '@type': 'HomeAndConstructionBusiness',
              name: 'DecksRXKC',
              url: siteUrl,
              telephone: '+1-913-205-6531',
            },
            areaServed: 'Kansas City metropolitan area',
            url: absoluteUrl(getServicePagePath(service)),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: siteUrl,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: `${siteUrl}/services`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: service.shortTitle,
                item: absoluteUrl(getServicePagePath(service)),
              },
            ],
          },
        ]),
      }}
    />
  )
}

export function getStaticPaths() {
  return servicePages.map((service) => ({
    params: {
      slug: service.slug,
    },
  }))
}
