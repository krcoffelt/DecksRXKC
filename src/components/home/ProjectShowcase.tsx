import { getProjectPagePath, projectPages } from '../../data/projects'
import { SectionIntro } from '../ui'

export function ProjectShowcase() {
  const [featuredProject, ...supportingProjects] = projectPages.slice(0, 3)

  return (
    <section id="our-work" className="bg-charcoal px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionIntro
            eyebrow="Project Work"
            title="From old deck to favorite room of the house"
            copy="The best deck projects solve practical problems first: unsafe stairs, harsh sun, limited space, poor access, or a layout nobody uses."
            tone="dark"
          />
          <div className="border-y border-white/14 py-6">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Before / After</p>
            <p className="mt-3 text-2xl font-black leading-tight text-white">
              Hot, exposed, or aging decks become shaded, safer, and more comfortable outdoor rooms.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <a className="group relative min-h-[560px] overflow-hidden bg-black" href={getProjectPagePath(featuredProject)}>
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={featuredProject.heroImage}
              alt={featuredProject.shortTitle}
              width="1600"
              height="1200"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <h3 className="text-4xl font-black leading-tight">{featuredProject.title}</h3>
              <p className="mt-3 max-w-xl text-base leading-7 text-white/76">{featuredProject.summary}</p>
            </div>
          </a>

          <div className="grid gap-6">
            {supportingProjects.map((project) => (
              <a key={project.title} href={getProjectPagePath(project)} className="group grid gap-4 border-b border-white/14 pb-6 last:border-b-0 last:pb-0 sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1 xl:grid-cols-[0.9fr_1.1fr]">
                <img
                  className="h-48 w-full object-cover"
                  src={project.heroImage}
                  alt={project.title}
                  width="1600"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h3 className="text-2xl font-black leading-tight transition group-hover:text-soft-beige">{project.shortTitle}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/68">{project.summary}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
