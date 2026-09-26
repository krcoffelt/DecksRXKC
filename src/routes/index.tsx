import { createFileRoute } from '@tanstack/react-router'
import { SiteFooter } from '../components/SiteFooter'
import { AnswerBlock } from '../components/home/AnswerBlock'
import { ContactSection } from '../components/home/ContactSection'
import { Hero, heroImagePath } from '../components/home/Hero'
import { Anatomy } from '../components/home/Anatomy'
import { Approach, Marquee } from '../components/home/Approach'
import { Process } from '../components/home/Process'
import { ProjectShowcase } from '../components/home/ProjectShowcase'
import { ReviewsSection } from '../components/home/ReviewsSection'
import { ServiceAreasPreview } from '../components/home/ServiceAreasPreview'
import { ServicesOverview } from '../components/home/ServicesOverview'
import { servicePages } from '../data/servicePages'
import { getBusinessSchema } from '../data/business'
import { defaultSeoDescription, defaultSeoImage, defaultSeoImagePath, defaultSeoTitle, getSeoHead, siteUrl } from '../lib/seo'
import { getOptimizedImagePath, getResponsiveImageProps } from '../lib/images'

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
          href: getOptimizedImagePath(heroImagePath),
          imageSrcSet: getResponsiveImageProps(heroImagePath).srcSet,
          imageSizes: '100vw',
          type: 'image/webp',
          fetchPriority: 'high',
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
      <main className="bg-bone text-ink">
        <Hero />
        <Marquee />
        <Approach />
        <ServicesOverview />
        <ProjectShowcase />
        <Anatomy />
        <Process />
        <ReviewsSection />
        <ServiceAreasPreview />
        <AnswerBlock />
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
