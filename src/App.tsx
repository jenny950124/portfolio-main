import { useEffect, useLayoutEffect, useState } from 'react'
import { About } from './components/About'
import { CaseStudyLanguageLayer } from './components/CaseStudyControls'
import { CondoConnectCaseStudy } from './components/CondoConnectCaseStudy'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Skills } from './components/Skills'
import { Resume } from './components/Resume'
import {
  ApertureCaseStudy,
  FindMyParkCaseStudy,
  PowerPauseCaseStudy,
} from './components/ProjectCaseStudies'
import { RewardrobeCaseStudy } from './components/RewardrobeCaseStudy'
import { Work } from './components/Work'
import { copy, type Language } from './data/copy'
import './rewardrobe.css'
import './project-case-studies.css'
import './condo-connect.css'
import './case-study-layout.css'
import './readability.css'
import './project-thumbnails.css'
import './worn-forward-editorial.css'

type Page =
  | 'home'
  | 'find-my-park'
  | 'aperture'
  | 'powerpause'
  | 'condo-connect'
  | 'rewardrobe'

function getCurrentPage(): Page {
  // Hash entry links work on static hosts without a server rewrite.
  const entryPath = window.location.hash.startsWith('#/work/')
    ? window.location.hash.slice(1)
    : window.location.pathname
  const normalizedPath = entryPath.replace(/\/+$/, '')

  switch (normalizedPath) {
    case '/work/find-my-park':
      return 'find-my-park'
    case '/work/aperture':
      return 'aperture'
    case '/work/powerpause':
      return 'powerpause'
    case '/work/condo-connect':
      return 'condo-connect'
    case '/work/rewardrobe':
      return 'rewardrobe'
    default:
      return 'home'
  }
}

function App() {
  const [language, setLanguage] = useState<Language>(() =>
    window.localStorage.getItem('portfolio-language') === 'ko'
      ? 'ko'
      : 'en'
  )
  const [dark, setDark] = useState(() => {
    const saved = window.localStorage.getItem('portfolio-theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [page, setPage] = useState<Page>(getCurrentPage)
  const t = copy[language]

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.lang = language === 'ko' ? 'ko' : 'en'
    window.localStorage.setItem('portfolio-language', language)
    window.localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  }, [dark, language])

  useEffect(() => {
    const handlePopState = () => setPage(getCurrentPage())

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('hashchange', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('hashchange', handlePopState)
  }, [])

  useLayoutEffect(() => {
    const root = document.documentElement
    root.classList.add('instant-page-transition')
    root.scrollTop = 0
    document.body.scrollTop = 0
    window.scrollTo(0, 0)

    const frame = window.requestAnimationFrame(() => {
      root.classList.remove('instant-page-transition')
    })

    const pageTitles: Record<Page, string> = {
      home: 'Jenny Kim — UI/UX Designer',
      'find-my-park': 'Find My Park — Jenny Kim',
      aperture: 'Aperture Coffee Bar — Jenny Kim',
      powerpause: 'PowerPause — Jenny Kim',
      'condo-connect': 'Condo Connect — Jenny Kim',
      rewardrobe: 'RE:WARDROBE — Jenny Kim',
    }

    document.title = pageTitles[page]

    return () => {
      window.cancelAnimationFrame(frame)
      root.classList.remove('instant-page-transition')
    }
  }, [page])

  const openPage = (nextPage: Page, path: string) => {
    window.history.pushState({}, '', path)
    setPage(nextPage)
  }

  const returnHome = () => {
    window.history.pushState({}, '', '/#work')
    setPage('home')

    window.requestAnimationFrame(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  if (page === 'rewardrobe') {
    return (
      <CaseStudyLanguageLayer language={language}>
        <RewardrobeCaseStudy
          onBack={returnHome}
          onPrevious={() => openPage('condo-connect', '/work/condo-connect')}
          onNext={() => openPage('find-my-park', '/work/find-my-park')}
          language={language}
          dark={dark}
          onToggleTheme={() => setDark((value) => !value)}
          onLanguageChange={setLanguage}
        />
      </CaseStudyLanguageLayer>
    )
  }

  if (page === 'find-my-park') {
    return (
      <CaseStudyLanguageLayer language={language}>
        <FindMyParkCaseStudy
          onBack={returnHome}
          onPrevious={() => openPage('rewardrobe', '/work/rewardrobe')}
          onNext={() => openPage('aperture', '/work/aperture')}
          language={language}
          dark={dark}
          onToggleTheme={() => setDark((value) => !value)}
          onLanguageChange={setLanguage}
        />
      </CaseStudyLanguageLayer>
    )
  }

  if (page === 'aperture') {
    return (
      <CaseStudyLanguageLayer language={language}>
        <ApertureCaseStudy
          onBack={returnHome}
          onPrevious={() => openPage('find-my-park', '/work/find-my-park')}
          onNext={() => openPage('powerpause', '/work/powerpause')}
          language={language}
          dark={dark}
          onToggleTheme={() => setDark((value) => !value)}
          onLanguageChange={setLanguage}
        />
      </CaseStudyLanguageLayer>
    )
  }

  if (page === 'powerpause') {
    return (
      <CaseStudyLanguageLayer language={language}>
        <PowerPauseCaseStudy
          onBack={returnHome}
          onPrevious={() => openPage('aperture', '/work/aperture')}
          onNext={() => openPage('condo-connect', '/work/condo-connect')}
          language={language}
          dark={dark}
          onToggleTheme={() => setDark((value) => !value)}
          onLanguageChange={setLanguage}
        />
      </CaseStudyLanguageLayer>
    )
  }

  if (page === 'condo-connect') {
    return (
      <CaseStudyLanguageLayer language={language}>
        <CondoConnectCaseStudy
          onBack={returnHome}
          onPrevious={() => openPage('powerpause', '/work/powerpause')}
          onNext={() => openPage('rewardrobe', '/work/rewardrobe')}
          language={language}
          dark={dark}
          onToggleTheme={() => setDark((value) => !value)}
          onLanguageChange={setLanguage}
        />
      </CaseStudyLanguageLayer>
    )
  }

  return (
    <main id="top">
      <Header
        t={t}
        language={language}
        dark={dark}
        onToggleTheme={() => setDark((value) => !value)}
        onLanguageChange={setLanguage}
      />

      <Hero t={t} />

      <Work
        t={t}
        onOpenFindMyPark={() => openPage('find-my-park', '/work/find-my-park')}
        onOpenAperture={() => openPage('aperture', '/work/aperture')}
        onOpenPowerPause={() => openPage('powerpause', '/work/powerpause')}
        onOpenCondo={() =>
          openPage('condo-connect', '/work/condo-connect')
        }
        onOpenRewardrobe={() =>
          openPage('rewardrobe', '/work/rewardrobe')
        }
      />

      <About t={t} />
      <Process t={t} />
      <Skills t={t} />
      <Resume t={t} />
      <Footer t={t} />
    </main>
  )
}

export default App
