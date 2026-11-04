import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import type { Language, PortfolioCopy } from '../data/copy'

type HeaderProps = {
  t: PortfolioCopy
  language: Language
  dark: boolean
  onToggleTheme: () => void
  onLanguageChange: (language: Language) => void
}

function getCityTimes() {
  const now = new Date()

  const formatTime = (timeZone: string) =>
    new Intl.DateTimeFormat('en-CA', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(now)

  const zoneParts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Vancouver',
    timeZoneName: 'short',
  }).formatToParts(now)

  const vancouverZone =
    zoneParts.find((part) => part.type === 'timeZoneName')?.value || 'PST'

  const getDateParts = (timeZone: string) => {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).formatToParts(now)

    return {
      year: Number(
        parts.find((part) => part.type === 'year')?.value
      ),
      month: Number(
        parts.find((part) => part.type === 'month')?.value
      ),
      day: Number(
        parts.find((part) => part.type === 'day')?.value
      ),
    }
  }

  const vancouverDate = getDateParts('America/Vancouver')
  const seoulDate = getDateParts('Asia/Seoul')

  const vancouverUTC = Date.UTC(
    vancouverDate.year,
    vancouverDate.month - 1,
    vancouverDate.day
  )

  const seoulUTC = Date.UTC(
    seoulDate.year,
    seoulDate.month - 1,
    seoulDate.day
  )

  const dayDifference = Math.round(
    (seoulUTC - vancouverUTC) / (1000 * 60 * 60 * 24)
  )

  const seoulDay =
    dayDifference > 0
      ? `+${dayDifference}`
      : dayDifference < 0
        ? `${dayDifference}`
        : ''

  return {
    vancouver: formatTime('America/Vancouver'),
    vancouverZone,
    seoul: formatTime('Asia/Seoul'),
    seoulDay,
  }
}

export function Header({
  t,
  language,
  dark,
  onToggleTheme,
  onLanguageChange,
}: HeaderProps) {
  const [times, setTimes] = useState(() => getCityTimes())

  useEffect(() => {
    const updateTimes = () => {
      setTimes(getCityTimes())
    }

    const interval = window.setInterval(updateTimes, 1000)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#top"
        aria-label="Jenny Kim home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 520 440"
          role="img"
          aria-labelledby="logo-title"
          className="logo-svg"
        >
          <title id="logo-title">Jenny Kim</title>

          <circle
            cx="260"
            cy="220"
            r="170"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.22"
          />

          <ellipse
            cx="260"
            cy="220"
            rx="240"
            ry="62"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            transform="rotate(-16 260 220)"
          />

          <text
            x="260"
            y="267"
            textAnchor="middle"
            fill="currentColor"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="132"
            fontStyle="italic"
            fontWeight="700"
            letterSpacing="-12"
          >
            JK
          </text>
        </svg>
      </a>

      <nav aria-label="Primary navigation">
        <a href="#work">{t.nav.work}</a>
        <a href="#about">{t.nav.about}</a>
        <a href="#contact">{t.nav.contact}</a>
      </nav>

      <div className="header-tools">
        <div className="city-times" aria-label="Local times">
          <span>
            {times.vancouverZone} {times.vancouver}
          </span>

          <span>
            KST {times.seoul} {times.seoulDay}
          </span>
        </div>

        <button
          className="icon-button"
          onClick={onToggleTheme}
          role="switch"
          aria-checked={dark}
          title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-label={dark ? 'Use light mode' : 'Use dark mode'}
          type="button"
        >
          {dark ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        <div className="language-switch" aria-label="Language">
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
    </header>
  )
}
