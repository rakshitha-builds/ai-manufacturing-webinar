import { NAV } from '../data'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-14 text-sm text-mute">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-9 md:grid-cols-[1.6fr_1fr_1fr]">
          <div><h4 className="mb-3 font-semibold text-white">MANUFACTURING AI SUMMIT</h4>
            <p className="max-w-sm">AI-Powered Manufacturing: Building the Factory of Tomorrow. A two-hour live online webinar on predictive maintenance, computer vision, digital twins and smart factory automation.</p></div>
          <div><h4 className="mb-3 font-semibold text-white">Quick links</h4>
            <ul className="grid gap-2">{NAV.map(([id, l]) => <li key={id}><a className="hover:text-white" href={`#${id}`}>{l}</a></li>)}</ul></div>
          <div><h4 className="mb-3 font-semibold text-white">Contact</h4>
            <a className="hover:text-white" href="mailto:events@example.com">events@example.com</a><p className="text-xs">Placeholder address</p>
            <ul className="mt-3 flex gap-2" aria-label="Social media placeholders">{['LinkedIn', 'X', 'YouTube'].map((s) => <li key={s} className="rounded-lg border border-white/10 px-2.5 py-1 text-xs">{s}</li>)}</ul></div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-5">© 2026 Manufacturing AI Summit. Demonstration page; speaker and organizer details are fictional.</p>
      </div>
    </footer>
  )
}
