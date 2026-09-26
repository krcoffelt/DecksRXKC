import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { CtaBand, PageHero } from '../components/ui'
import { guidePages } from '../data/guides'
import { getGuidePagePath } from '../data/paths'
import { getSeoHead } from '../lib/seo'
import { getResponsiveImageProps } from '../lib/images'

export const Route = createFileRoute('/guides/')({
  head: () => getSeoHead({ title: 'Deck Planning Guides | DecksRXKC', description: 'Practical Kansas City guides for deck repair, replacement, composite materials, wood decking, stairs, and outdoor planning.', path: '/guides', image: '/images/kansas-city-deck-stairs-railing-skirt.jpg' }),
  component: GuidesIndexPage,
})

function GuidesIndexPage() {
  const [lead, ...rest] = guidePages
  return <main id="main" className="min-h-screen bg-bone text-ink">
    <SiteHeader />
    <PageHero
      title={<>Clear deck decisions <em className="text-soft-beige">before</em> construction begins</>}
      intro="Compare scope, materials, maintenance, and long-term use with practical guidance built for Kansas City homeowners."
      image={lead.heroImage}
      imageAlt={lead.shortTitle}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Guides' }]}
      size="compact"
    />
    <section className="bg-bone">
      <div className="shell py-24 lg:py-32">
        <a href={getGuidePagePath(lead)} className="group grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="frame aspect-[16/10] bg-sand" data-reveal="clip">
            <img className="h-full w-full object-cover" {...getResponsiveImageProps(lead.heroImage, '(min-width: 1024px) 58vw, 100vw')} alt={lead.shortTitle} width="1200" height="750" loading="lazy" decoding="async" />
          </div>
          <div data-reveal="up">
            <h2 className="display-md transition-colors group-hover:text-wood">{lead.title}</h2>
            <p className="lede mt-6 text-ink/64">{lead.intro}</p>
            <span className="link-line mt-8 inline-flex items-center gap-2 font-medium">Read guide <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" /></span>
          </div>
        </a>
        <div className="mt-24 border-t hairline lg:mt-32">
          {rest.map((guide, index) => (
            <a key={guide.slug} href={getGuidePagePath(guide)} className="group grid items-center gap-6 border-b hairline py-8 md:grid-cols-[1fr_14rem_auto] md:gap-10" data-reveal="up" style={{ ['--d' as string]: index * 0.5 }}>
              <div>
                <h2 className="text-[clamp(1.8rem,2.8vw,2.7rem)] leading-[1.02] transition-colors group-hover:text-wood">{guide.title}</h2>
                <p className="mt-3 max-w-2xl text-[0.95rem] leading-7 text-ink/65">{guide.intro}</p>
              </div>
              <div className="frame hidden aspect-[4/3] bg-sand md:block">
                <img className="h-full w-full object-cover" {...getResponsiveImageProps(guide.heroImage, '224px')} alt="" width="448" height="336" loading="lazy" decoding="async" />
              </div>
              <span className="hidden h-11 w-11 items-center justify-center border border-ink/15 transition-all duration-500 group-hover:bg-ink group-hover:text-bone md:flex"><ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
    <CtaBand title={<>Get guidance for <em className="text-soft-beige">your actual deck.</em></>} />
    <SiteFooter />
  </main>
}
