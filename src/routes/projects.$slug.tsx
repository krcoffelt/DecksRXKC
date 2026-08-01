import { createFileRoute, notFound } from '@tanstack/react-router'
import { CheckCircle, MapPin, Quote } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ButtonLink } from '../components/ui'
import { business } from '../data/business'
import { getProjectPage, getProjectPagePath, projectPages, type ProjectPage } from '../data/projects'
import { getServicePage, getServicePagePath } from '../data/servicePages'
import { absoluteUrl, getSeoHead, siteUrl } from '../lib/seo'

export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => {
    const project = getProjectPage(params.slug)
    if (!project) throw notFound()
    return project
  },
  head: ({ loaderData }) => {
    const project = loaderData as ProjectPage
    return getSeoHead({ title: project.metaTitle, description: project.metaDescription, path: getProjectPagePath(project), image: project.heroImage })
  },
  component: ProjectDetailPage,
})

function ProjectDetailPage() {
  const project = Route.useLoaderData()
  const services = [project.primaryServiceSlug, ...project.relatedServiceSlugs]
    .flatMap((slug) => {
      const service = getServicePage(slug)
      return service ? [service] : []
    })

  return (
    <>
      <ProjectStructuredData project={project} />
      <main className="min-h-screen bg-warm-white text-ink">
        <SiteHeader />
        <section className="relative min-h-[72svh] overflow-hidden bg-charcoal text-white">
          <img className="absolute inset-0 h-full w-full object-cover" src={project.heroImage} alt={project.shortTitle} width="1600" height="1200" loading="eager" decoding="async" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/44 to-black/20" />
          <div className="relative mx-auto flex min-h-[72svh] max-w-7xl items-end px-5 py-14 sm:px-8 lg:py-20">
            <div className="max-w-5xl">
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-soft-beige"><MapPin className="h-4 w-4" aria-hidden="true" /> {project.location}</p>
              <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">{project.title}</h1>
              <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-white/78">{project.summary}</p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Project Goal</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal">Start with the problem the space needs to solve</h2>
            </div>
            <div>
              <p className="text-xl font-semibold leading-9 text-charcoal">{project.goal}</p>
              <div className="mt-8 divide-y divide-charcoal/12 border-y border-charcoal/12">
                {project.considerations.map((item) => (
                  <div key={item} className="flex gap-4 py-5"><CheckCircle className="mt-1 h-5 w-5 shrink-0 text-muted-green" aria-hidden="true" /><p className="leading-7 text-ink/70">{item}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2">
              {project.gallery.map((image) => (
                <figure key={image.src}>
                  <img className="aspect-[4/3] w-full object-cover" src={image.src} alt={image.alt} width="1200" height="900" loading="lazy" decoding="async" />
                  <figcaption className="border-b border-charcoal/12 py-4 text-sm font-semibold leading-6 text-ink/64">{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Finished Details</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-charcoal">The complete result matters</h2>
              <p className="mt-5 text-lg leading-8 text-ink/70">{project.result}</p>
            </div>
            <div className="divide-y divide-charcoal/12 border-y border-charcoal/12">
              {project.features.map((feature) => <p key={feature} className="py-5 text-xl font-black text-charcoal">{feature}</p>)}
            </div>
          </div>
          {project.testimonial ? (
            <blockquote className="mx-auto mt-14 max-w-5xl border-y border-charcoal/12 py-10 text-center">
              <Quote className="mx-auto h-8 w-8 text-muted-green" aria-hidden="true" />
              <p className="mx-auto mt-5 max-w-4xl text-2xl font-black leading-10 text-charcoal">“{project.testimonial}”</p>
              <cite className="mt-5 block text-sm font-black not-italic uppercase tracking-[0.14em] text-wood">DecksRXKC customer · Google review</cite>
            </blockquote>
          ) : null}
        </section>

        <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Related Services</p>
              <h2 className="mt-4 text-4xl font-black leading-tight">Plan your complete deck</h2>
            </div>
            <div className="divide-y divide-white/14 border-y border-white/14">
              {services.map((service) => <a key={service.slug} href={getServicePagePath(service)} className="block py-5 text-lg font-black text-white transition hover:text-soft-beige">{service.shortTitle}</a>)}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 border-y border-charcoal/12 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="text-sm font-black uppercase tracking-[0.16em] text-wood">Start a Project</p><h2 className="mt-3 text-3xl font-black text-charcoal">Tell us what your outdoor space needs.</h2></div>
            <ButtonLink href="/contact">Request a Free Quote</ButtonLink>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  )
}

function ProjectStructuredData({ project }: Readonly<{ project: ProjectPage }>) {
  const path = getProjectPagePath(project)
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${absoluteUrl(path)}#webpage`, url: absoluteUrl(path), name: project.title, description: project.metaDescription, primaryImageOfPage: absoluteUrl(project.heroImage), about: { '@id': business.entityId }, datePublished: project.publishedAt, dateModified: project.updatedAt },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: `${siteUrl}/projects` },
        { '@type': 'ListItem', position: 3, name: project.shortTitle, item: absoluteUrl(path) },
      ] },
    ],
  }) }} />
}

export function getStaticPaths() {
  return projectPages.map((project) => ({ params: { slug: project.slug } }))
}
