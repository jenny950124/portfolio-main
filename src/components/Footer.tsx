import { ArrowUpRight, Mail } from 'lucide-react'
import type { PortfolioCopy } from '../data/copy'
export function Footer({ t }: { t: PortfolioCopy }) {
  return (
    <footer id="contact">
      <div className="footer-inner page-grid">
        <p className="eyebrow">07 · {t.contactLabel}</p>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactBody}</p>
        <div className="homepage-socials" aria-label="Social and email links">
          <a href="https://www.linkedin.com/in/jenny237k">LinkedIn<ArrowUpRight size={16} aria-hidden="true" /></a>
          <a href="https://www.instagram.com/jennyk.archive/">Instagram<ArrowUpRight size={16} aria-hidden="true" /></a>
          <a href="mailto:jenny237k@gmail.com"><Mail size={18} aria-hidden="true" />{t.aboutLabel === '소개' ? '이메일' : 'Email'}<ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="footer-bottom">
          <span>Jenny Kim · UI/UX Designer</span>
          <span>Vancouver · Seoul</span>
          <a href="#top">{t.back} <ArrowUpRight size={16}/></a>
        </div>
      </div>
    </footer>
  )
}