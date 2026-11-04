import { useEffect, useMemo, useState } from 'react'

export function useCityTimes() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return useMemo(() => {
    if (!now) return { vancouver: '--:--', seoul: '--:--', seoulDay: '' }

    const time = (timeZone: string) =>
      new Intl.DateTimeFormat('en-CA', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now)

    const date = (timeZone: string) =>
      new Intl.DateTimeFormat('en-CA', {
        timeZone,
        day: '2-digit',
      }).format(now)

    const vanDay = Number(date('America/Vancouver'))
    const seoulDay = Number(date('Asia/Seoul'))

    return {
      vancouver: time('America/Vancouver'),
      seoul: time('Asia/Seoul'),
      seoulDay: vanDay === seoulDay ? '' : '+1',
    }
  }, [now])
}
