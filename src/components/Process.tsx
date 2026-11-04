import type { PortfolioCopy } from '../data/copy'
import { designStory } from '../data/designStory'
import portrait from '../assets/about/jenny-professional-portrait.webp'
import './design-story.css'

export function Process({ t }: { t: PortfolioCopy }) {
  const story = designStory[t.aboutLabel === '소개' ? 'ko' : 'en']
  return (
    <section className="process-section design-story" id="how-i-design" aria-labelledby="process-title">
      <div className="process-intro page-grid">
        <p className="eyebrow">04 · {t.processLabel}</p>
        <h2 id="process-title">{story.title}</h2>
      </div>
      <div className="design-story-chapter page-grid">
        <div className="design-story-profile">
          <h3 className="design-story-label">{story.storyLabel}</h3>
          <img className="design-story-portrait" src={portrait} alt="Jenny Kim" width="1280" height="1280" loading="lazy" decoding="async" />
        </div>
        <div className="design-story-prose">
          {story.story.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
      <div className="design-story-principles page-grid">
        <h3 className="design-story-label">{story.principlesLabel}</h3>
        <div className="design-principle-grid">
          {story.principles.map((principle, index) => (
            <article key={principle.title}>
              <span className="design-principle-number">0{index + 1}</span>
              <h4>{principle.title}</h4>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="design-story-chapter design-story-ai page-grid">
        <h3 className="design-story-label">{story.aiLabel}</h3>
        <div className="design-story-prose">
          <h4>{story.aiTitle}</h4>
          {story.ai.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <p className="design-story-closing">{story.closing}</p>
        </div>
      </div>
    </section>
  )
}
