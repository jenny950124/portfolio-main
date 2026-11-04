import { useRef } from 'react'
import { ArrowUpRight, Download } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import type { PortfolioCopy } from '../data/copy'
import './resume.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function Resume({ t }: { t: PortfolioCopy }) {
  const korean = t.aboutLabel === '소개'
  const pdf = '/documents/Jenny_Kim_Resume.pdf'
  const viewer = pdf
  const section = useRef<HTMLElement>(null)
  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(min-width: 761px) and (prefers-reduced-motion: no-preference)', () => {
      const timeline = gsap.timeline({ scrollTrigger: {
        trigger: section.current, start: 'top top', end: 'bottom bottom', scrub: .5,
        invalidateOnRefresh: true,
      } })
      timeline.fromTo('.resume-preview', { width: 52, rotation: -7 }, {
        width: () => Math.min(400, window.innerWidth * .36, window.innerHeight * .49),
        rotation: 0, duration: 1, ease: 'power2.inOut',
      }, 0)
      timeline.to('.resume-word-left', { x: -55, opacity: .1, duration: 1, ease: 'power2.inOut' }, 0)
      timeline.to('.resume-word-right', { x: 55, opacity: .1, duration: 1, ease: 'power2.inOut' }, 0)
    })
    return () => media.revert()
  }, { scope: section })
  return (
    <section className="resume-section page-grid" id="resume" aria-labelledby="resume-title" ref={section}>
      <div className="resume-sticky">
        <p className="eyebrow">06 · {korean ? '이력서' : 'Résumé'}</p>
        <p className="resume-caption">{korean ? '지금까지의 경험을 한눈에.' : 'My experience, at a glance.'}</p>
        <div className="resume-reveal">
          <h2 id="resume-title" className="resume-word resume-word-left" aria-label={korean ? '이력서' : 'Résumé'}><span aria-hidden="true">RÉ</span></h2>
          <a className="resume-preview" href={viewer} target="_blank" rel="noreferrer" aria-label={korean ? '영문 이력서 새 탭에서 보기' : 'Open Jenny’s résumé in a new tab'}>
            <img src="/documents/resume-preview.png" alt={korean ? '제니 김의 이력서 첫 페이지' : 'First page of Jenny Kim’s résumé'} width="1224" height="1584" loading="lazy" />
          </a>
          <span className="resume-word resume-word-right" aria-hidden="true">SUMÉ</span>
        </div>
        <div className="resume-actions">
          <a className="resume-view" href={viewer} target="_blank" rel="noreferrer">{korean ? '전체 이력서 보기' : 'View full résumé'}<ArrowUpRight size={19} aria-hidden="true" /></a>
          <a className="resume-download" href={pdf} download="Jenny_Kim_Resume.pdf">{korean ? 'PDF 다운로드' : 'Download PDF'}<Download size={18} aria-hidden="true" /></a>
        </div>
        <span className="resume-format">{korean ? '영문 · PDF · 2페이지' : 'English · PDF · 2 pages'}</span>
      </div>
    </section>
  )
}
