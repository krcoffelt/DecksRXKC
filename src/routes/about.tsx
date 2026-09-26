import { createFileRoute } from '@tanstack/react-router'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ArrowRow, CtaBand, Figure, NumberedList, PageHero, SectionIntro } from '../components/ui'
import { business } from '../data/business'
import { getServiceAreaLabel, getServiceAreaPath, serviceAreas } from '../data/serviceAreas'
import { getServicePagePath, servicePages } from '../data/servicePages'
import { googleReviews, processSteps } from '../data/siteContent'
import { absoluteUrl, getSeoHead, siteUrl } from '../lib/seo'

const aboutDescription = 'Meet DecksRXKC and learn how the team plans custom decks, repairs, replacements, screened rooms, stairs, and railings across the Kansas City metro.'

const aboutReviews = googleReviews.filter((review) => ['Matt Panuco', 'Laura Heitshusen', 'Brandy Sansone'].includes(review.name))
const featuredServices = servicePages.filter((service) => ['custom-decks', 'deck-repair', 'deck-replacement', 'screened-in-decks', 'stairs-and-railings'].includes(service.slug))
const featuredAreas = serviceAreas.filter((area) => ['kansas-city-mo', 'leawood-ks', 'raymore-mo'].includes(area.slug))

export const Route = createFileRoute('/about')({
  head: () => getSeoHead({
    title: 'About DecksRXKC | Kansas City Deck Craft & Process',
    description: aboutDescription,
    path: '/about',
    image: '/images/kansas-city-custom-wood-deck-railing-project.jpg',
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <AboutStructuredData />
      <main className="min-h-screen bg-bone text-ink">
        <SiteHeader />
        <PageHero
          title={<>Practical deck planning. <em className="text-soft-beige">Craft you notice</em> in the details.</>}
          intro="DecksRXKC builds and improves outdoor spaces across the Kansas City metro with responsive communication, useful options, and close attention to the parts homeowners see and use every day."
          image="/images/kansas-city-custom-wood-deck-railing-project.jpg"
          imageAlt="Custom wood deck and dark railing built by DecksRXKC"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
          meta={[
            { label: 'Based in', value: 'Kansas City metro' },
            { label: 'Google rating', value: `5.0 ★ · ${business.googleReviewCount} reviews` },
            { label: 'Materials', value: 'Trex, TimberTech & wood' },
            { label: 'Hours', value: 'Mon – Sat, 8 – 5' },
          ]}
        />

        <section className="bg-bone">
          <div className="shell py-24 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">
              <span className="hidden lg:block" />
              <div>
                <h2 className="display-md max-w-[20ch]" data-reveal="up">Solve the practical problem <em className="text-wood">before</em> selecting the finish</h2>
                <p className="mt-10 max-w-4xl font-medium text-[clamp(1.5rem,2.2vw,2.1rem)] leading-[1.2] tracking-[-0.03em] text-ink/80" data-reveal="up">
                  A deck should make the relationship between the house and yard easier — not simply add square footage. That means beginning with use, circulation, condition, exposure, and access before deciding what the surface should look like.
                </p>
              </div>
            </div>

            <div className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-[1fr_1fr] lg:items-end">
              <Figure src="/images/optimized/kansas-city-elevated-screened-porch-black-railing.jpg" alt="Elevated screened porch with black railing on a Kansas City home" aspect="aspect-[4/5]" sizes="(min-width: 1024px) 50vw, 100vw" />
              <div>
                <p className="lede text-ink/68" data-reveal="up">DecksRXKC works across custom builds, focused repairs, full replacements, composite and wood surfaces, covered and screened rooms, stairs, and railings. Trex and TimberTech are among the composite options the team can discuss, alongside wood, without treating one material as the right answer for every home.</p>
                <div className="mt-10 grid border-t hairline sm:grid-cols-2">
                  {['Plan around daily use', 'Explain repair versus replacement', 'Coordinate the visible details', 'Keep the next step clear'].map((item, index) => (
                    <p key={item} className="border-b hairline py-6 pr-6 text-lg font-medium" data-reveal="up" style={{ ['--d' as string]: index }}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grain relative bg-night text-bone">
          <div className="shell grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-32">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionIntro title={<>A clear path from the first problem to the <em className="text-soft-beige">finished space</em></>} tone="dark" />
            </div>
            <NumberedList items={processSteps} tone="dark" />
          </div>
        </section>

        <section className="bg-paper">
          <div className="shell py-24 lg:py-32">
            <SectionIntro title="The hidden structure and visible finish both matter" />
            <div className="mt-14 grid gap-8 lg:grid-cols-12">
              <Figure className="lg:col-span-7" src="/images/kansas-city-covered-deck-framing-addition.jpg" alt="Covered deck framing connected to a Kansas City home" caption="Framing, headroom, roof connection, and drainage set up the finish work that follows." sizes="(min-width: 1024px) 58vw, 100vw" />
              <Figure className="lg:col-span-5 lg:mt-40" aspect="aspect-[4/5]" src="/images/optimized/kansas-city-composite-covered-deck-railing-detail.jpg" alt="Finished composite deck surface and dark railing detail" caption="Decking, railing, fascia, and transitions create the finished view homeowners live with." sizes="(min-width: 1024px) 42vw, 100vw" />
            </div>
          </div>
        </section>

        <section className="bg-bone">
          <div className="shell py-24 lg:py-32">
            <SectionIntro title="Communication, judgment, and care in the finished work" />
            <div className="mt-14 grid gap-px overflow-hidden border hairline bg-ink/10 lg:grid-cols-3">
              {aboutReviews.map((review, index) => (
                <blockquote key={review.name} className="flex flex-col justify-between gap-10 bg-bone p-8 lg:p-10" data-reveal="up" style={{ ['--d' as string]: index }}>
                  <p className="font-medium text-[1.7rem] leading-[1.2] tracking-[-0.03em]"><span className="text-wood">“</span>{review.review}<span className="text-wood">”</span></p>
                  <cite className="mono block text-[0.7rem] not-italic uppercase tracking-[0.14em] text-ink/55">{review.name} · Google review</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="grain relative bg-graphite text-bone">
          <div className="shell grid gap-16 py-24 lg:grid-cols-2 lg:py-28">
            <div>
              <p className="eyebrow text-soft-beige">What we build</p>
              <div className="mt-8 border-t hairline-light">
                {featuredServices.map((service) => (
                  <ArrowRow key={service.slug} href={getServicePagePath(service)} tone="dark">{service.shortTitle}</ArrowRow>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow text-soft-beige">Where we work</p>
              <p className="mt-8 max-w-xl text-lg leading-8 text-bone/68">DecksRXKC serves homeowners across the Kansas City metropolitan area. Start with the location guide that matches your home, then use the service pages to compare the project itself.</p>
              <div className="mt-8 border-t hairline-light">
                {featuredAreas.map((area) => (
                  <ArrowRow key={area.slug} href={getServiceAreaPath(area)} tone="dark">Deck builder in {getServiceAreaLabel(area)}</ArrowRow>
                ))}
                <ArrowRow href="/service-areas" tone="dark">View every service area</ArrowRow>
              </div>
            </div>
          </div>
        </section>

        <CtaBand title={<>Tell us what needs to <em className="text-soft-beige">work better.</em></>} copy="Share the project type, city, current condition, and timing. DecksRXKC will help define the next useful step." />
        <SiteFooter />
      </main>
    </>
  )
}

function AboutStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'AboutPage',
              '@id': `${absoluteUrl('/about')}#webpage`,
              url: absoluteUrl('/about'),
              name: 'About DecksRXKC',
              description: aboutDescription,
              about: { '@id': business.entityId },
              primaryImageOfPage: absoluteUrl('/images/kansas-city-custom-wood-deck-railing-project.jpg'),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
                { '@type': 'ListItem', position: 2, name: 'About', item: absoluteUrl('/about') },
              ],
            },
          ],
        }),
      }}
    />
  )
}
