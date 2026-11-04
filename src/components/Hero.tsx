import { ArrowDownRight } from 'lucide-react'
import type { PortfolioCopy } from '../data/copy'
import { HeroImageSequence } from './HeroImageSequence'
import './hero-image-sequence.css'

export function Hero({ t }: { t: PortfolioCopy }) {
  return (
    <section className="hero hero-introduction hero-with-sequence page-grid" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-identity">{t.eyebrow}</p>
        <h1 id="hero-title">{t.headline}</h1>
        <p className="hero-intro">{t.intro}</p>
        <a className="text-link" href="#work">{t.cta}<ArrowDownRight size={19} /></a>
      </div>
      <HeroImageSequence />
    </section>
  )
}
