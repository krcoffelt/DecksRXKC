import { createFileRoute, notFound } from '@tanstack/react-router'
import { MapPin } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { ArrowRow, ButtonLink, Figure, PageHero, SectionIntro } from '../components/ui'
import { business } from '../data/business'
import { getProjectPage, projectPages, type ProjectPage } from '../data/projects'
import { getServicePage } from '../data/servicePages'
import { getProjectPagePath, getServicePagePath } from '../data/paths'
import { absoluteUrl, getSeoHead, siteUrl } from '../lib/seo'
import { getResponsiveImageProps } from '../lib/images'

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
  const projectIndex = projectPages.findIndex((candidate) => candidate.slug === project.slug)
  const nextProject = projectPages[(projectIndex + 1) % projectPages.length]

  return (
    <>
      <ProjectStructuredData project={project} />
      <main id="main" className="min-h-screen bg-bone text-ink">
        <SiteHeader />
        <PageHero
          title={project.title}
          intro={project.summary}
          image={project.heroImage}
          imageAlt={project.shortTitle}
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: project.shortTitle }]}
          meta={[
            { label: 'Primary service', value: services[0]?.shortTitle ?? 'Deck project' },
            { label: 'Location', value: project.location },
            { label: 'Key features', value: `${project.features.length} finished details` },
            { label: 'Published', value: new Date(`${project.publishedAt}T12:00:00`).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) },
          ]}
        />

        <section className="bg-bone">
          <div className="shell grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-32">
            <SectionIntro title={<>Start with the problem the space <em className="text-wood">needs to solve</em></>} />
            <div>
              <p className="font-medium text-[clamp(1.7rem,2.6vw,2.5rem)] leading-[1.15] tracking-[-0.03em]" data-reveal="up">{project.goal}</p>
              <ul className="mt-12 border-t hairline">
                {project.considerations.map((item, index) => (
                  <li key={item} className="border-b hairline py-6" data-reveal="up" style={{ ['--d' as string]: index }}>
                    <p className="text-base leading-7 text-ink/72 sm:text-lg sm:leading-8">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-paper">
          <div className="shell py-24 lg:py-32">
            <div className="grid gap-6 lg:grid-cols-12">
              {project.gallery.map((image, index) => (
                <Figure
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  caption={image.caption}
                  className={index % 2 === 0 ? 'lg:col-span-7' : 'lg:col-span-5 lg:mt-32'}
                  aspect={index % 2 === 0 ? 'aspect-[4/3]' : 'aspect-[4/5]'}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="grain relative bg-night text-bone">
          <div className="shell grid gap-12 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
            <div>
              <SectionIntro title="The complete result matters" copy={project.result} tone="dark" />
            </div>
            <ul className="border-t hairline-light">
              {project.features.map((feature, index) => (
                <li key={feature} className="flex items-baseline gap-6 border-b hairline-light py-6" data-reveal="up" style={{ ['--d' as string]: index }}>
                  <span className="font-display text-3xl tracking-[-0.02em] lg:text-4xl">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          {project.testimonial ? (
            <div className="shell pb-24 lg:pb-32">
              <blockquote className="border-t hairline-light pt-14" data-reveal="up">
                <p className="max-w-5xl font-medium text-[clamp(1.9rem,3.6vw,3.4rem)] leading-[1.1] tracking-[-0.03em]"><span className="text-soft-beige">“</span>{project.testimonial}<span className="text-soft-beige">”</span></p>
                <cite className="mono mt-8 block text-[0.72rem] not-italic uppercase tracking-[0.14em] text-bone/55">DecksRXKC customer — Google review</cite>
              </blockquote>
            </div>
          ) : null}
        </section>

        <section className="bg-bone">
          <div className="shell grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-32">
            <div>
              <SectionIntro title="Plan your complete deck" copy="Tell us what your outdoor space needs — we’ll help you compare the right next step." />
              <div className="mt-10 flex flex-wrap gap-3" data-reveal="up">
                <ButtonLink href="/contact">Request a free quote</ButtonLink>
                <ButtonLink href={`tel:${business.phone}`} variant="outline">Call {business.phoneDisplay}</ButtonLink>
              </div>
            </div>
            <div className="border-t hairline">
              {services.map((service) => (
                <ArrowRow key={service.slug} href={getServicePagePath(service)}>{service.shortTitle}</ArrowRow>
              ))}
            </div>
          </div>
        </section>

        {nextProject ? (
          <a href={getProjectPagePath(nextProject)} className="group grain relative block overflow-hidden bg-night text-bone" data-cursor="Next">
            <img className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-105 group-hover:opacity-55" {...getResponsiveImageProps(nextProject.heroImage, '100vw')} alt="" width="1600" height="1200" loading="lazy" decoding="async" />
            <div className="shell relative flex min-h-[60svh] flex-col justify-end py-16">
              <p className="mono text-[0.7rem] uppercase tracking-[0.14em] text-bone/60">Next project →</p>
              <p className="display-lg mt-4 max-w-[14ch]">{nextProject.shortTitle}</p>
            </div>
          </a>
        ) : null}

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
