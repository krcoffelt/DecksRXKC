import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ArrowRow, ButtonLink, CtaBand, PageHero, SectionIntro } from '../components/ui'
import { business } from '../data/business'
import { projectPages } from '../data/projects'
import { getServicePage } from '../data/servicePages'
import { getProjectPagePath, getServicePagePath } from '../data/paths'
import { absoluteUrl, getSeoHead, siteUrl } from '../lib/seo'
import { getResponsiveImageProps } from '../lib/images'

const projectsDescription = 'Explore Kansas City deck projects with composite surfaces, covered and screened rooms, replacements, stairs, railings, and the planning decisions behind the work.'
const stairProject = projectPages.find((project) => project.slug === 'deck-stair-and-railing-upgrade')
const stairService = getServicePage('stairs-and-railings')
const browseServices = ['composite-decks', 'screened-in-decks', 'covered-decks', 'deck-replacement']
  .flatMap((slug) => {
    const service = getServicePage(slug)
    return service ? [service] : []
  })

export const Route = createFileRoute('/projects/')({
  head: () => getSeoHead({
    title: 'Kansas City Deck Projects | DecksRXKC',
    description: projectsDescription,
    path: '/projects',
    image: '/images/optimized/kansas-city-elevated-composite-deck-cable-railing-stairs.jpg',
  }),
  component: ProjectsIndexPage,
})

function ProjectsIndexPage() {
  const [featured, ...projects] = projectPages

  return (
    <>
      <ProjectsStructuredData />
      <main id="main" className="min-h-screen bg-bone text-ink">
        <SiteHeader />
        <PageHero
          title={<>Kansas City deck work, <em className="text-soft-beige">shown in the details</em></>}
          intro="See how existing conditions, surfaces, railings, stairs, roofs, screens, drainage, and backyard access come together across complete outdoor spaces."
          image={featured.heroImage}
          imageAlt={featured.shortTitle}
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
          meta={[
            { label: 'Projects', value: `${projectPages.length} case studies` },
            { label: 'Location', value: 'Kansas City metro' },
            { label: 'Materials', value: 'Composite, cedar, pressure-treated' },
            { label: 'Scope', value: 'Build · Replace · Cover · Screen' },
          ]}
        />

        <section className="bg-bone">
          <div className="shell py-24 lg:py-32">
            <a className="group grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end" href={getProjectPagePath(featured)} data-cursor="View">
              <div className="frame aspect-[4/3] bg-sand lg:aspect-[16/11]" data-reveal="clip">
                <img className="h-full w-full object-cover" {...getResponsiveImageProps(featured.heroImage, '(min-width: 1024px) 60vw, 100vw')} alt={featured.shortTitle} width="1400" height="1100" loading="lazy" decoding="async" />
              </div>
              <div data-reveal="up">
                <h2 className="display-md transition-colors group-hover:text-wood">{featured.title}</h2>
                <p className="lede mt-6 text-ink/64">{featured.summary}</p>
                <span className="link-line mt-8 inline-flex items-center gap-2 text-base font-medium">See the project decisions <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" /></span>
              </div>
            </a>

            <div className="mt-24 grid gap-x-6 gap-y-16 md:grid-cols-2 lg:mt-32">
              {projects.map((project, index) => {
                const service = getServicePage(project.primaryServiceSlug)
                return (
                  <a key={project.slug} className={`group block ${index % 2 === 1 ? 'md:mt-24' : ''}`} href={getProjectPagePath(project)} data-cursor="View" data-reveal="up">
                    <div className="frame aspect-[4/5] bg-sand">
                      <img className="h-full w-full object-cover" {...getResponsiveImageProps(project.heroImage, '(min-width: 768px) 50vw, 100vw')} alt={project.shortTitle} width="1200" height="1500" loading="lazy" decoding="async" />
                      <span className="mono absolute top-4 left-4 bg-night/60 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.12em] text-bone backdrop-blur-md">{service?.shortTitle ?? 'Deck project'}</span>
                    </div>
                    <div className="mt-6 flex items-start justify-between gap-6">
                      <div>
                        <h2 className="text-[clamp(2rem,3vw,2.9rem)] leading-none transition-colors group-hover:text-wood">{project.shortTitle}</h2>
                        <p className="mt-4 max-w-lg text-[0.98rem] leading-7 text-ink/62">{project.summary}</p>
                      </div>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink/15 transition-all duration-500 group-hover:bg-ink group-hover:text-bone"><ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" /></span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {stairProject && stairService ? (
          <section className="grain relative bg-night text-bone">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[26rem] overflow-hidden">
                <img data-parallax="0.08" className="absolute inset-0 h-[120%] w-full -translate-y-[8%] object-cover" {...getResponsiveImageProps(stairProject.heroImage, '(min-width: 1024px) 50vw, 100vw')} alt="Deck stair replacement and dark railing project in the Kansas City metro" width="1200" height="900" loading="lazy" decoding="async" />
              </div>
              <div className="px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
                <SectionIntro title={<>Backyard access is part of the <em className="text-soft-beige">whole deck</em></>} tone="dark" />
                <p className="lede mt-6 text-bone/68" data-reveal="up">A useful stair project considers more than new treads. The run, stringers, landing, handrail, guard, deck connection, grade, patios, gates, and normal route through the yard all affect whether repair, full stair replacement, or a different layout makes sense.</p>
                <ul className="mt-10 border-t hairline-light">
                  {['Assess the complete stair and supporting deck', 'Use the landing and direction to improve yard circulation', 'Coordinate rails, transitions, lighting, and finished edges'].map((point, index) => (
                    <li key={point} className="border-b hairline-light py-5 text-bone/80" data-reveal="up" style={{ ['--d' as string]: index }}>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap gap-3">
                  <ButtonLink href={getServicePagePath(stairService)} variant="bronze">Explore stair replacement</ButtonLink>
                  <ButtonLink href={getProjectPagePath(stairProject)} variant="outline">See the stair project</ButtonLink>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-paper">
          <div className="shell grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-32">
            <SectionIntro title="Move from project proof to planning guidance" copy="Use the project library to see the details, then compare the decisions that shape the service itself." />
            <div className="border-t hairline">
              {browseServices.map((service) => (
                <ArrowRow key={service.slug} href={getServicePagePath(service)}>{service.shortTitle}</ArrowRow>
              ))}
            </div>
          </div>
        </section>

        <CtaBand title={<>What should <em className="text-soft-beige">your deck</em> solve?</>} copy="Tell us about the space, city, project type, current condition, and the result you want to create." />
        <SiteFooter />
      </main>
    </>
  )
}

function ProjectsStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CollectionPage',
              '@id': `${absoluteUrl('/projects')}#webpage`,
              url: absoluteUrl('/projects'),
              name: 'Kansas City Deck Projects',
              description: projectsDescription,
              about: { '@id': business.entityId },
              mainEntity: {
                '@type': 'ItemList',
                itemListElement: projectPages.map((project, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  name: project.title,
                  url: absoluteUrl(getProjectPagePath(project)),
                })),
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
                { '@type': 'ListItem', position: 2, name: 'Projects', item: absoluteUrl('/projects') },
              ],
            },
          ],
        }),
      }}
    />
  )
}
