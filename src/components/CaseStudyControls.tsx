import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Moon,
  Sun,
} from 'lucide-react'
import type { Language } from '../data/copy'
import { getCaseStudyTranslation } from '../data/caseStudyTranslations'
export type CaseStudyControlProps = {
  language: Language
  dark: boolean
  onToggleTheme: () => void
  onLanguageChange: (language: Language) => void
}
type CaseStudyControlsProps = CaseStudyControlProps
export type CaseStudyNavItem = {
  id: string
  label: string
}
type CaseStudyFooterProps = {
  language: Language
  currentProjectDescription: string
  previousProjectName: string
  previousProjectPath: string
  nextProjectName: string
  nextProjectPath: string
  onPrevious: () => void
  onNext: () => void
}
function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7.5v.01M12 17v-4a3 3 0 0 1 6 0v4M12 10v7" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  )
}
const originalText = new WeakMap<Text, string>()
const originalAttributes = new WeakMap<Element, Map<string, string>>()
const translatedAttributes = ['aria-label', 'alt', 'title'] as const
function normalizeText(value: string) {
  return value.replace(/\s+/g, ' ').trim()
}
function preserveOuterWhitespace(original: string, translated: string) {
  const leading = original.match(/^\s*/)?.[0] ?? ''
  const trailing = original.match(/\s*$/)?.[0] ?? ''
  return `${leading}${translated}${trailing}`
}
function localizeCaseStudy(root: HTMLElement, language: Language) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let currentNode = walker.nextNode()
  while (currentNode) {
    const textNode = currentNode as Text
    if (textNode.parentElement?.closest('[data-language-controlled]')) {
      currentNode = walker.nextNode()
      continue
    }
    const savedText = originalText.get(textNode) ?? textNode.nodeValue ?? ''
    if (!originalText.has(textNode)) {
      originalText.set(textNode, savedText)
    }
    const normalized = normalizeText(savedText)
    const translated = language === 'ko'
      ? getCaseStudyTranslation(normalized)
      : normalized
    textNode.nodeValue = normalized
      ? preserveOuterWhitespace(savedText, translated)
      : savedText
    currentNode = walker.nextNode()
  }
  root.querySelectorAll<HTMLElement>('[aria-label], [alt], [title]').forEach((element) => {
    if (element.closest('.case-study-controls, [data-language-controlled]')) {
      return
    }
    let savedAttributes = originalAttributes.get(element)
    if (!savedAttributes) {
      savedAttributes = new Map<string, string>()
      originalAttributes.set(element, savedAttributes)
    }
    translatedAttributes.forEach((attribute) => {
      const currentValue = element.getAttribute(attribute)
      if (currentValue !== null && !savedAttributes?.has(attribute)) {
        savedAttributes?.set(attribute, currentValue)
      }
      const savedValue = savedAttributes?.get(attribute)
      if (savedValue !== undefined) {
        element.setAttribute(
          attribute,
          language === 'ko'
            ? getCaseStudyTranslation(normalizeText(savedValue))
            : savedValue,
        )
      }
    })
  })
}
export function CaseStudyLanguageLayer({
  language,
  children,
}: {
  language: Language
  children: ReactNode
}) {
  const rootRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (rootRef.current) {
      localizeCaseStudy(rootRef.current, language)
    }
  }, [language])
  return (
    <div className="case-study-language-layer" ref={rootRef}>
      {children}
    </div>
  )
}
export function CaseStudyControls({
  language,
  dark,
  onToggleTheme,
  onLanguageChange,
}: CaseStudyControlsProps) {
  return (
    <div
      className="case-study-controls"
      aria-label={language === 'ko' ? '화면 설정' : 'Display settings'}
    >
      <button
        className="case-study-theme-button"
        onClick={onToggleTheme}
        role="switch"
        aria-checked={dark}
        title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-label={
          dark
            ? language === 'ko' ? '라이트 모드 사용' : 'Use light mode'
            : language === 'ko' ? '다크 모드 사용' : 'Use dark mode'
        }
        type="button"
      >
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>
      <div className="case-study-language-switch" aria-label="Language">
        <button
          className={language === 'en' ? 'active' : ''}
          onClick={() => onLanguageChange('en')}
          type="button"
        >
          ENG
        </button>
        <span>/</span>
        <button
          className={language === 'ko' ? 'active' : ''}
          onClick={() => onLanguageChange('ko')}
          type="button"
        >
          KOR
        </button>
      </div>
    </div>
  )
}
export function CaseStudyFooter({
  language,
  currentProjectDescription,
  previousProjectName,
  previousProjectPath,
  nextProjectName,
  nextProjectPath,
  onPrevious,
  onNext,
}: CaseStudyFooterProps) {
  const openProject = (
    event: MouseEvent<HTMLAnchorElement>,
    callback: () => void,
  ) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }
    event.preventDefault()
    callback()
  }
  return (
    <footer className="case-study-footer">
      <div className="case-study-footer-current-band">
        <p>{currentProjectDescription}</p>
      </div>
      <div
        className="case-study-footer-projects"
        aria-label="Project navigation"
      >
        <a
          className="case-study-footer-previous"
          href={previousProjectPath}
          onClick={(event) => openProject(event, onPrevious)}
          aria-label={`View ${previousProjectName} previous`}
        >
          <ArrowLeft aria-hidden="true" />
          <span>
            <small>Previous project</small>
            <strong>{previousProjectName}</strong>
          </span>
        </a>
        <a
          className="case-study-footer-next"
          href={nextProjectPath}
          onClick={(event) => openProject(event, onNext)}
          aria-label={`View ${nextProjectName} next`}
        >
          <span>
            <small>Next project</small>
            <strong>{nextProjectName}</strong>
          </span>
          <ArrowRight aria-hidden="true" />
        </a>
      </div>
      <div className="case-study-footer-meta">
        <div className="case-study-footer-brand">
          <span className="case-study-footer-logo" aria-hidden="true">
            JK
            <i />
          </span>
          <div>
            <strong>Jenny Kim</strong>
            <span>UI/UX Designer</span>
            <small>© 2026 Jenny Kim. All rights reserved.</small>
          </div>
        </div>
        <nav
          className="case-study-footer-links"
          aria-label={language === 'ko' ? '푸터 메뉴' : 'Footer navigation'}
          data-language-controlled
        >
          <a href="/#work">{language === 'ko' ? '프로젝트' : 'Work'}</a>
          <a href="/#about">{language === 'ko' ? '소개' : 'About'}</a>
          <a href="/#contact">{language === 'ko' ? '연락처' : 'Contact'}</a>
        </nav>
        <div className="case-study-footer-socials" aria-label="Social links">
          <a href="mailto:jenny237k@gmail.com" aria-label="Email Jenny Kim">
            <Mail aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/jenny237k"
            aria-label="Open Jenny Kim on LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/jennyk.archive/"
            aria-label="Open Jenny Kim on Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
export function CaseStudySectionNav({
  items,
}: {
  items: CaseStudyNavItem[]
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')
  useEffect(() => {
    let frame = 0
    const updateActiveSection = () => {
      frame = 0
      const marker = window.innerHeight * 0.38
      let nextActiveId = items[0]?.id ?? ''
      items.forEach((item) => {
        const section = document.getElementById(item.id)
        if (section && section.getBoundingClientRect().top <= marker) {
          nextActiveId = item.id
        }
      })
      setActiveId(nextActiveId)
    }
    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateActiveSection)
      }
    }
    updateActiveSection()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [items])
  const moveToSection = (id: string) => {
    setActiveId(id)
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'start',
    })
  }
  return (
    <aside
      className="case-study-section-nav"
      role="navigation"
      aria-label="Case study sections"
    >
      <div className="case-study-section-nav-track" aria-hidden="true" />
      {items.map((item, index) => (
        <button
          className={item.id === activeId ? 'active' : ''}
          key={item.id}
          onClick={() => moveToSection(item.id)}
          type="button"
          aria-label={`Go to ${item.label}`}
          aria-current={item.id === activeId ? 'location' : undefined}
        >
          <span className="case-study-section-number">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="case-study-section-label">{item.label}</span>
        </button>
      ))}
    </aside>
  )
}