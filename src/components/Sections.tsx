import { motion } from 'framer-motion'
import { agenda, audience, challenges, learn } from '../data'
import { Reveal } from './Reveal'
import { Section } from './Section'
import type { LucideIcon } from 'lucide-react'

function Card({ icon: Icon, title, text, fix, i }: { icon: LucideIcon; title: string; text?: string; fix?: string; i: number }) {
  return (
    <Reveal delay={(i % 3) * 0.08} className="h-full">
      <motion.article whileHover={{ y: -4 }} className="glass group h-full p-6 transition-[border-color,box-shadow] duration-300 hover:border-cyan/50 hover:shadow-[0_18px_40px_-20px_rgba(34,211,238,.4)]">
        <Icon className="text-cyan transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" size={24} />
        <h3 className="mb-2 mt-4 text-lg font-semibold">{title}</h3>
        {text && <p className="text-[15px] text-mute">{text}</p>}
        {fix && <p className="mt-4 border-t border-white/10 pt-4 text-sm"><b className="font-semibold text-cyan">With AI: </b>{fix}</p>}
      </motion.article>
    </Reveal>
  )
}

export const Challenges = () => (
  <Section title="Manufacturing Is Changing. Is Your Factory Ready?" lead="Four problems cost most factories the most. Each one now has a practical AI answer." alt>
    <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{challenges.map((c, i) => <Card key={c.title} {...c} i={i} />)}</div>
  </Section>
)
export const Learn = () => (
  <Section id="learn" title="Explore the Power of AI in Manufacturing" lead="Six practical areas, explained with real plant examples.">
    <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{learn.map((c, i) => <Card key={c.title} {...c} i={i} />)}</div>
  </Section>
)
export const Agenda = () => (
  <Section id="agenda" title="Two Hours, Fully Mapped" lead="All times in IST on December 12, 2026." alt>
    <ol className="relative mt-11 max-w-3xl border-l-2 border-white/10 pl-8">
      {agenda.map(([t, s], i) => (
        <li key={t} className="pb-7 last:pb-0">
          <Reveal x={-28} y={0} delay={i * 0.05} className="relative grid gap-1 sm:grid-cols-[100px_1fr] sm:gap-4">
            <span aria-hidden className="absolute -left-[42px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-cyan bg-ink" />
            <time className="font-semibold text-cyan">{t}</time><span className="font-medium">{s}</span>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
)
export const Audience = () => (
  <Section title="Who Should Attend?" alt>
    <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{audience.map((c, i) => <Card key={c.title} {...c} i={i} />)}</div>
  </Section>
)
export const Speaker = () => (
  <Section id="speaker" title="Learn From an Industry Practitioner">
    <Reveal className="glass mt-11 grid max-w-4xl items-center gap-9 p-6 sm:p-9 md:grid-cols-[220px_1fr]">
      <svg viewBox="0 0 200 200" role="img" aria-label="Placeholder portrait of the speaker" className="aspect-square w-full max-w-[220px] rounded-2xl">
        <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1b2a4a" /><stop offset="1" stopColor="#2563EB" /></linearGradient></defs>
        <rect width="200" height="200" fill="url(#g)" /><circle cx="100" cy="78" r="36" fill="#a9c4f5" /><path d="M28 200c0-46 32-68 72-68s72 22 72 68z" fill="#d6e4ff" /><path d="M84 132h32l-16 22z" fill="#2563EB" />
      </svg>
      <div>
        <h3 className="text-2xl font-bold">Dr. Arjun Mehta</h3>
        <p className="mb-3 mt-1 font-medium text-cyan">Industrial AI &amp; Smart Manufacturing Consultant</p>
        <p><b>12+ years</b> in industrial automation and AI solutions.</p>
        <p className="mt-3 text-mute">An experienced industry professional specializing in industrial automation, predictive analytics, smart manufacturing systems and AI-driven operational transformation.</p>
        <ul className="mt-4 flex flex-wrap gap-2">{['Predictive analytics', 'Industrial automation', 'Computer vision', 'Digital twins'].map((b) => <li key={b} className="rounded-full border border-white/10 px-3 py-1 text-[13px] text-cyan">{b}</li>)}</ul>
        <p className="mt-4 border-l-2 border-white/10 pl-3 text-[13px] text-mute">Illustrative, fictional speaker profile and placeholder portrait created for this demonstration. Not a confirmed real speaker.</p>
      </div>
    </Reveal>
  </Section>
)
