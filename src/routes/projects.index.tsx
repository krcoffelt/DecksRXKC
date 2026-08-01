import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ButtonLink } from '../components/ui'
import { getProjectPagePath, projectPages } from '../data/projects'
import { getSeoHead } from '../lib/seo'

export const Route = createFileRoute('/projects/')({
  head: () => getSeoHead({
    title: 'Kansas City Deck Projects | DecksRXKC',
    description: 'Explore DecksRXKC project work including composite decks, covered decks, screened rooms, deck replacements, stairs, and railings.',
    path: '/projects',
    image: projectPages[0].heroImage,
  }),
  component: ProjectsIndexPage,
})

function ProjectsIndexPage() {
  const [featured, ...projects] = projectPages

  return (
    <main className="min-h-screen bg-warm-white text-ink">
      <SiteHeader />
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Project Library</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-black leading-[0.98] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
            Kansas City deck work, shown in the details
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70">
            Explore how surfaces, railings, stairs, roofs, screens, and backyard access come together across complete outdoor spaces.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <a className="group relative min-h-[560px] overflow-hidden bg-charcoal text-white" href={getProjectPagePath(featured)}>
            <img className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src={featured.heroImage} alt={featured.shortTitle} width="1400" height="1100" loading="eager" decoding="async" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/26 to-black/8" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-soft-beige">Featured project · {featured.location}</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">{featured.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">{featured.summary}</p>
            </div>
          </a>

          <div className="divide-y divide-charcoal/12 border-y border-charcoal/12">
            {projects.map((project) => (
              <a key={project.slug} className="group grid gap-5 py-6 sm:grid-cols-[0.8fr_1.2fr] lg:grid-cols-1 xl:grid-cols-[0.8fr_1.2fr]" href={getProjectPagePath(project)}>
                <img className="h-44 w-full object-cover" src={project.heroImage} alt={project.shortTitle} width="650" height="520" loading="lazy" decoding="async" />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-muted-green">{project.location}</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight text-charcoal transition group-hover:text-wood">{project.shortTitle}</h2>
                  <span className="mt-4 inline-flex items-center text-sm font-black text-charcoal">View details <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /></span>
                </div>
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
          </div>
          <ButtonLink href="/contact" variant="light">Request a Free Quote</ButtonLink>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
