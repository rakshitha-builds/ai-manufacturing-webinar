import { useEffect, useState } from 'react'

export function useCountdown(target: number) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t) }, [])
  const s = Math.max(0, Math.floor((target - now) / 1000))
  return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 }
}

export function useScrollSpy(ids: readonly string[]) {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 20)
      let cur = ''
      ids.forEach((id) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= 140) cur = id })
      setActive(cur)
    }
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [ids])
  return { active, scrolled }
}
