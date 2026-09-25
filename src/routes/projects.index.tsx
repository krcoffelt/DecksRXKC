import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ButtonLink } from '../components/ui'
import { business } from '../data/business'
import { getProjectPagePath, projectPages } from '../data/projects'
import { getServicePage, getServicePagePath } from '../data/servicePages'
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
    image: projectPages[0].heroImage,
  }),
  component: ProjectsIndexPage,
})

function ProjectsIndexPage() {
  const [featured, ...projects] = projectPages

  return (
    <>
      <ProjectsStructuredData />
      <main className="min-h-screen bg-warm-white text-ink">
        <SiteHeader />

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-bold text-ink/52">
              <a className="transition hover:text-wood" href="/">Home</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-charcoal">Projects</span>
            </nav>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Project Library</p>
            <h1 className="mt-4 max-w-5xl text-5xl font-black leading-[0.98] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">Kansas City deck work, shown in the details</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70">See how existing conditions, surfaces, railings, stairs, roofs, screens, drainage, and backyard access come together across complete outdoor spaces.</p>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-8 lg:pb-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <a className="group relative min-h-[560px] overflow-hidden bg-charcoal text-white" href={getProjectPagePath(featured)}>
              <img className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" {...getResponsiveImageProps(featured.heroImage, '(min-width: 1024px) 62vw, 100vw')} alt={featured.shortTitle} width="1400" height="1100" loading="eager" decoding="async" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/26 to-black/8" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-soft-beige">Featured project · {featured.location}</p>
                <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">{featured.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">{featured.summary}</p>
                <span className="mt-5 inline-flex items-center text-sm font-black text-white">See the project decisions <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /></span>
              </div>
            </a>

            <div className="divide-y divide-charcoal/12 border-y border-charcoal/12">
              {projects.map((project) => {
                const service = getServicePage(project.primaryServiceSlug)
                return (
                  <a key={project.slug} className="group grid gap-5 py-6 sm:grid-cols-[0.8fr_1.2fr] lg:grid-cols-1 xl:grid-cols-[0.8fr_1.2fr]" href={getProjectPagePath(project)}>
                    <img className="h-44 w-full object-cover" {...getResponsiveImageProps(project.heroImage, '(min-width: 1280px) 16vw, (min-width: 640px) 40vw, 100vw')} alt={project.shortTitle} width="650" height="520" loading="lazy" decoding="async" />
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-muted-green">{service?.shortTitle ?? 'Deck project'} · {project.location}</p>
                      <h2 className="mt-2 text-2xl font-black leading-tight text-charcoal transition group-hover:text-wood">{project.shortTitle}</h2>
                      <p className="mt-3 text-sm leading-6 text-ink/64">{project.summary}</p>
                      <span className="mt-4 inline-flex items-center text-sm font-black text-charcoal">View details <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /></span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {stairProject && stairService ? (
          <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
              <img className="aspect-[4/3] w-full object-cover" {...getResponsiveImageProps(stairProject.heroImage, '(min-width: 1024px) 47vw, 100vw')} alt="Deck stair replacement and dark railing project in the Kansas City metro" width="1200" height="900" loading="lazy" decoding="async" />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Deck Stairs + Railings</p>
                <h2 className="mt-4 text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl">Backyard access is part of the whole deck</h2>
                <p className="mt-6 text-lg leading-8 text-white/74">A useful stair project considers more than new treads. The run, stringers, landing, handrail, guard, deck connection, grade, patios, gates, and normal route through the yard all affect whether repair, full stair replacement, or a different layout makes sense.</p>
                <div className="mt-8 divide-y divide-white/14 border-y border-white/14">
                  {['Assess the complete stair and supporting deck', 'Use the landing and direction to improve yard circulation', 'Coordinate rails, transitions, lighting, and finished edges'].map((point) => (
                    <p key={point} className="flex gap-4 py-5 text-base font-bold leading-7 text-white/78"><CheckCircle className="mt-1 h-5 w-5 shrink-0 text-soft-beige" aria-hidden="true" />{point}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={getServicePagePath(stairService)} variant="light">Explore Stair Replacement</ButtonLink>
                  <ButtonLink href={getProjectPagePath(stairProject)} variant="outline">See the Stair Project</ButtonLink>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Browse by Project Type</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal sm:text-5xl">Move from project proof to planning guidance</h2>
              <p className="mt-5 text-lg leading-8 text-ink/68">Use the project library to see the details, then compare the decisions that shape the service itself.</p>
            </div>
            <div className="divide-y divide-charcoal/12 border-y border-charcoal/12">
              {browseServices.map((service) => (
                <a key={service.slug} href={getServicePagePath(service)} className="group flex items-start justify-between gap-5 py-6">
                  <div>
                    <h3 className="text-2xl font-black text-charcoal transition group-hover:text-wood">{service.shortTitle}</h3>
                    <p className="mt-2 text-base leading-7 text-ink/66">{service.metaDescription}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-green" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Your Project</p>
              <h2 className="mt-3 text-4xl font-black leading-tight">What should your deck solve?</h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-white/66">Tell us about the space, city, project type, current condition, and the result you want to create.</p>
            </div>
            <ButtonLink href="/contact" variant="light">Request a Free Quote</ButtonLink>
          </div>
        </section>
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
