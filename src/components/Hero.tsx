import { motion, useReducedMotion } from 'framer-motion'
import { CalendarDays, Clock, Video, Timer } from 'lucide-react'
import { WEBINAR_START } from '../data'
import { useCountdown } from '../hooks'
import { FactoryVisual } from './FactoryVisual'

const pad = (n: number) => String(n).padStart(2, '0')
export function Hero() {
  const c = useCountdown(WEBINAR_START)
  const reduce = useReducedMotion()
  const up = (i: number) => reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.1 * i } }
  const facts = [[CalendarDays, 'December 12, 2026'], [Clock, '10:00 AM – 12:00 PM IST'], [Video, 'Live Online'], [Timer, '2 Hours']] as const
  return (
    <section id="overview" className="relative overflow-hidden pb-24 pt-16">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-36 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,.35),transparent_65%)] animate-drift" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.span {...up(0)} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold tracking-wider text-cyan">
            <i className="h-2 w-2 rounded-full bg-red-500 animate-blink" />LIVE INDUSTRY WEBINAR | DECEMBER 12, 2026
          </motion.span>
          <motion.h1 {...up(1)} className="my-6 text-5xl font-extrabold leading-[1.08] tracking-tight md:text-6xl lg:text-[64px]">
            The Future of Manufacturing Is <span className="grad-text">Intelligent.</span>
          </motion.h1>
          <motion.p {...up(2)} className="mb-8 max-w-xl text-lg text-mute">Discover how Artificial Intelligence, predictive analytics, computer vision and intelligent automation are transforming modern manufacturing operations.</motion.p>
          <motion.div {...up(3)} className="flex flex-col gap-3.5 sm:flex-row">
            <a href="#pricing" className="btn btn-p">Reserve My Seat</a><a href="#agenda" className="btn btn-s">Explore the Agenda</a>
          </motion.div>
          <motion.ul {...up(4)} className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-mute">
            {facts.map(([Icon, t]) => <li key={t} className="flex items-center gap-2"><Icon size={18} className="text-cyan" />{t}</li>)}
          </motion.ul>
          <motion.div {...up(5)} role="timer" aria-label="Time remaining until the webinar starts" className="mt-8 flex gap-2.5 sm:gap-3">
            {([['Days', c.d], ['Hours', c.h], ['Minutes', c.m], ['Seconds', c.s]] as const).map(([l, v]) => (
              <div key={l} className="glass min-w-0 flex-1 px-2 py-3 text-center sm:min-w-[78px] sm:flex-none">
                <b className="block text-2xl font-bold tabular-nums sm:text-3xl">{pad(v)}</b><span className="text-xs text-mute">{l}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div {...(reduce ? {} : { initial: { opacity: 0, scale: 0.94 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.9, delay: 0.3 } })}>
          <div className="glass p-3.5 shadow-[0_0_80px_-20px_rgba(37,99,235,.6)] animate-float"><FactoryVisual /></div>
        </motion.div>
      </div>
    </section>
  )
}
