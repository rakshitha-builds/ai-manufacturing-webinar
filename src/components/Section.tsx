import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = { id?: string; title: string; lead?: string; alt?: boolean; children: ReactNode }
export function Section({ id, title, lead, alt, children }: Props) {
  return (
    <section id={id} className={`py-20 md:py-24 ${alt ? 'bg-ink' : ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          {lead && <p className="mt-4 max-w-xl text-mute">{lead}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
