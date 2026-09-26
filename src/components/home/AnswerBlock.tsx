import { quickAnswers } from '../../data/siteContent'
import { FaqList, SectionIntro } from '../ui'

export function AnswerBlock() {
  return (
    <section id="questions" className="relative bg-paper text-ink">
      <div className="shell py-24 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionIntro
              title="Questions homeowners ask before they call"
              copy="Straight answers about who we are, what we build, and where we work."
            />
          </div>
          <FaqList items={quickAnswers} />
        </div>
      </div>
    </section>
  )
}
