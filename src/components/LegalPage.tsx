import type { ReactNode } from 'react'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'
import { PageHero } from './ui'

export function LegalPage({ title, intro, sections }: {
  title: string
  intro: string
  sections: Array<{ title: string; content: ReactNode }>
}) {
  return (
    <main id="main" className="min-h-screen bg-bone text-ink">
      <SiteHeader />
      <PageHero title={title} intro={intro} size="compact" breadcrumbs={[{ label: 'Home', href: '/' }, { label: title }]}>
        <p className="mono mt-8 text-xs tracking-wide text-bone/60">Last updated: October 2, 2026</p>
      </PageHero>
      <div className="shell py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-3xl leading-tight sm:text-4xl">{section.title}</h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-ink/75 [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-wood [&_ul]:list-disc [&_ul]:pl-6">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  )
}
