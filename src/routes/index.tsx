import { createFileRoute } from '@tanstack/react-router'
import { SiteFooter } from '../components/SiteFooter'
import { AnswerBlock } from '../components/home/AnswerBlock'
import { ContactSection } from '../components/home/ContactSection'
import { Hero } from '../components/home/Hero'
import { ProjectShowcase } from '../components/home/ProjectShowcase'
import { ReviewsSection } from '../components/home/ReviewsSection'
import { ServiceAreasPreview } from '../components/home/ServiceAreasPreview'
import { ServicesOverview } from '../components/home/ServicesOverview'
import { getServiceAreaLabel, serviceAreas } from '../data/serviceAreas'
import { servicePages } from '../data/servicePages'
import { getBusinessSchema } from '../data/business'
import { defaultSeoDescription, defaultSeoImage, defaultSeoImagePath, defaultSeoTitle, getSeoHead, siteUrl } from '../lib/seo'

const homepageTitle = defaultSeoTitle
const homepageDescription = defaultSeoDescription
const homepageImage = defaultSeoImage

export const Route = createFileRoute('/')({
  head: () => {
    const seo = getSeoHead({
      title: homepageTitle,
      description: homepageDescription,
      path: '/',
      image: defaultSeoImagePath,
    })

    return {
      ...seo,
      links: [
        ...seo.links,
        {
          rel: 'preload',
          as: 'image',
          href: defaultSeoImagePath,
        },
      ],
    }
  },
  component: LandingPage,
})

function LandingPage() {
  return (
    <>
      <HomepageStructuredData />
      <main className="overflow-hidden bg-warm-white text-ink">
        <Hero />
        <ServicesOverview />
        <ProjectShowcase />
        <ServiceAreasPreview />
        <AnswerBlock />
        <ReviewsSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </>
  )
}

function HomepageStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          ...getBusinessSchema(),
          image: homepageImage,
          areaServed: [
            {
              '@type': 'AdministrativeArea',
              name: 'Kansas City metropolitan area',
            },
            ...serviceAreas.map((area) => ({
              '@type': 'City',
              name: getServiceAreaLabel(area),
            })),
          ],
          serviceType: servicePages.map((service) => service.shortTitle),
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'DecksRXKC deck services',
            itemListElement: servicePages.map((service) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: service.title,
                areaServed: 'Kansas City metropolitan area',
                url: `${siteUrl}/services/${service.slug}`,
              },
            })),
          },
        }),
      }}
    />
  )
}
