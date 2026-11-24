import { CalendarDays, Clock } from 'lucide-react'
import { Reveal } from './Reveal'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_50%_0,rgba(37,99,235,.3),transparent_60%)] bg-ink py-24 text-center">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 shadow-[0_0_0_110px_rgba(34,211,238,.02),0_0_0_111px_rgba(255,255,255,.08)]" />
      <Reveal className="relative mx-auto max-w-3xl px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold tracking-wider text-cyan"><i className="h-2 w-2 rounded-full bg-cyan" />ONLINE EVENT</span>
        <h2 className="mx-auto my-5 text-3xl font-bold tracking-tight md:text-5xl">Your Smart Manufacturing Journey Starts Here.</h2>
        <p className="mx-auto mb-8 max-w-xl text-mute">Discover how artificial intelligence can transform manufacturing operations and help build the factories of tomorrow.</p>
        <a href="#pricing" className="btn btn-p">Reserve Your Seat</a>
        <p className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-mute">
          <span className="flex items-center gap-2"><CalendarDays size={18} className="text-cyan" />December 12, 2026</span>
          <span className="flex items-center gap-2"><Clock size={18} className="text-cyan" />10:00 AM – 12:00 PM IST</span>
        </p>
      </Reveal>
    </section>
  )
}
