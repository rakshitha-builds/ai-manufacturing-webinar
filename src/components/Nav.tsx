import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV } from '../data'
import { useScrollSpy } from '../hooks'

const ids = NAV.map(([id]) => id)
export function Nav() {
  const { active, scrolled } = useScrollSpy(ids)
  const [open, setOpen] = useState(false)
  const links = NAV.map(([id, label]) => (
    <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
      className={`group relative text-sm transition-colors ${active === id ? 'text-white' : 'text-mute hover:text-white'}`}>
      {label}
      <span className={`absolute -bottom-1.5 left-0 h-0.5 w-full origin-left bg-cyan transition-transform duration-300 ${active === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
    </a>
  ))
  return (
    <header className={`sticky top-0 z-30 border-b transition-colors duration-300 ${scrolled || open ? 'border-white/10 bg-navy/80 backdrop-blur-xl' : 'border-transparent bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#overview" className="flex items-center gap-2.5 text-sm font-bold tracking-wide">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-brand to-cyan text-xs">AI</span>MANUFACTURING AI SUMMIT
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links}<a href="#pricing" className="btn btn-p !px-5 !py-2.5">Register Now</a>
        </nav>
        <button className="rounded-lg border border-white/15 p-2 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden">
            <div className="flex flex-col gap-5 px-6 pb-6 pt-2">{links}<a href="#pricing" onClick={() => setOpen(false)} className="btn btn-p">Register Now</a></div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
