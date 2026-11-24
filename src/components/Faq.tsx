import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../data'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <Section id="faq" title="Frequently Asked Questions" alt>
      <div className="mt-10 grid max-w-3xl gap-3">
        {faqs.map(([q, a], i) => (
          <Reveal key={q} delay={i * 0.05}>
            <div className="glass">
              <h3><button type="button" id={`q${i}`} aria-expanded={open === i} aria-controls={`a${i}`} onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left font-semibold">
                {q}<Plus size={20} className={`flex-none text-cyan transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`} />
              </button></h3>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div id={`a${i}`} role="region" aria-labelledby={`q${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="px-6 pb-5 text-mute">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
