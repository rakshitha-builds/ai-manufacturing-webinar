import { useRef, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, CheckCircle2, Loader2 } from 'lucide-react'
import { benefits, roles } from '../data'
import { Reveal } from './Reveal'
import { Section } from './Section'

type Ticket = 'early' | 'regular'
type Errors = Partial<Record<'name' | 'email' | 'phone' | 'role', string>>

function validate(v: { name: string; email: string; phone: string; role: string }): Errors {
  const e: Errors = {}
  const phone = v.phone.replace(/[\s-]/g, '').replace(/^(\+91|91|0)(?=\d{10}$)/, '')
  if (v.name.trim().length < 2) e.name = 'Enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Enter a valid email, like name@company.com.'
  if (!/^[6-9]\d{9}$/.test(phone)) e.phone = 'Enter a valid 10-digit Indian mobile number.'
  if (!v.role) e.role = 'Select your professional role.'
  return e
}

function PassCard({ ticket, selected, onChoose }: { ticket: Ticket; selected: boolean; onChoose: () => void }) {
  const early = ticket === 'early'
  return (
    <div className={`glass relative p-7 ${early ? 'border-cyan shadow-[0_0_0_1px_#22D3EE] animate-glow' : ''} ${selected && !early ? 'border-brand' : ''}`}>
      {early && <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-brand to-cyan px-3 py-1 text-xs font-bold text-navy">Recommended</span>}
      <h3 className="text-lg font-semibold">{early ? 'Early Bird Pass' : 'Regular Pass'}</h3>
      <p className="my-2 text-5xl font-extrabold tracking-tight">{early ? '₹299' : '₹499'}{early && <s className="ml-2 text-lg font-normal text-mute">₹499</s>}</p>
      <ul className="mb-6 mt-4 grid gap-2.5 text-[15px] text-mute">{benefits.map((b) => <li key={b} className="flex gap-2.5"><Check size={18} className="mt-0.5 flex-none text-cyan" />{b}</li>)}</ul>
      <a href="#register" onClick={onChoose} className={`btn w-full ${early ? 'btn-p' : 'btn-s'}`}>{selected ? 'Selected' : early ? 'Choose Early Bird' : 'Choose Regular'}</a>
    </div>
  )
}

function RegisterForm({ ticket, setTicket }: { ticket: Ticket; setTicket: (t: Ticket) => void }) {
  const [v, setV] = useState({ name: '', email: '', phone: '', role: '' })
  const [err, setErr] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle')
  const busy = useRef(false)
  const set = (k: keyof typeof v) => (e: { target: { value: string } }) => {
    const next = { ...v, [k]: e.target.value }; setV(next)
    if (err[k]) setErr(validate(next))
  }
  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (busy.current) return
    const errors = validate(v); setErr(errors)
    if (Object.keys(errors).length) { document.getElementById(`f-${Object.keys(errors)[0]}`)?.focus(); return }
    busy.current = true; setStatus('submitting')
    setTimeout(() => { busy.current = false; setStatus('done') }, 1200)
  }
  const reset = () => { setV({ name: '', email: '', phone: '', role: '' }); setErr({}); setStatus('idle') }
  const field = (k: keyof typeof v, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div className="mt-4">
      <label htmlFor={`f-${k}`} className="mb-1.5 block text-sm font-medium">{label}</label>
      <input id={`f-${k}`} value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} aria-describedby={`e-${k}`} className="field" {...props} />
      <p id={`e-${k}`} aria-live="polite" className="mt-1 text-[13px] text-red-300">{err[k]}</p>
    </div>
  )
  return (
    <div id="register" className="glass p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === 'done' ? (
          <motion.div key="ok" role="status" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="py-4 text-center">
            <CheckCircle2 size={46} className="mx-auto text-cyan" />
            <h3 className="my-3 text-2xl font-bold">Seat reserved, {v.name.trim().split(' ')[0]}!</h3>
            <p className="text-mute">{ticket === 'early' ? 'Early Bird Pass (₹299)' : 'Regular Pass (₹499)'} for December 12, 2026, 10:00 AM – 12:00 PM IST.</p>
            <p className="mt-3 text-sm text-mute">This is a demonstration. No payment was processed, no booking was created and no confirmation email was sent. With a payment gateway connected, the next step would be secure payment, then a joining link by email.</p>
            <button className="btn btn-s mt-6" onClick={reset}>Register another person</button>
          </motion.div>
        ) : (
          <motion.form key="form" noValidate onSubmit={submit} exit={{ opacity: 0 }}>
            <h3 className="text-xl font-semibold">Registration</h3><p className="text-sm text-mute">All fields are required.</p>
            {field('name', 'Full name', { autoComplete: 'name' })}
            {field('email', 'Email address', { type: 'email', autoComplete: 'email' })}
            {field('phone', 'Mobile number', { type: 'tel', autoComplete: 'tel', placeholder: '10-digit mobile number' })}
            <div className="mt-4">
              <label htmlFor="f-role" className="mb-1.5 block text-sm font-medium">Professional role</label>
              <select id="f-role" value={v.role} onChange={set('role')} aria-invalid={!!err.role} aria-describedby="e-role" className="field">
                <option value="" className="bg-ink">Select your role</option>{roles.map((r) => <option key={r} className="bg-ink">{r}</option>)}
              </select>
              <p id="e-role" aria-live="polite" className="mt-1 text-[13px] text-red-300">{err.role}</p>
            </div>
            <fieldset className="mt-3"><legend className="mb-1.5 text-sm font-medium">Ticket selection</legend>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {([['early', 'Early Bird · ₹299'], ['regular', 'Regular · ₹499']] as const).map(([k, l]) => (
                  <label key={k} className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-sm transition-colors ${ticket === k ? 'border-cyan bg-cyan/10' : 'border-white/10'}`}>
                    <input type="radio" name="ticket" checked={ticket === k} onChange={() => setTicket(k)} />{l}
                  </label>
                ))}
              </div>
            </fieldset>
            <button type="submit" disabled={status === 'submitting'} className="btn btn-p mt-6 w-full">
              {status === 'submitting' ? <><Loader2 size={18} className="animate-spin" />Submitting…</> : 'Reserve My Seat'}
            </button>
            <p className="mt-3 text-[13px] text-mute">Demo flow: no payment is taken and no data is sent anywhere.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Pricing() {
  const [ticket, setTicket] = useState<Ticket>('early')
  return (
    <Section id="pricing" title="Choose Your Webinar Pass" lead="Early Bird pricing is available for a limited time.">
      <div className="mt-12 grid items-start gap-7 lg:grid-cols-2">
        <div className="grid gap-6">
          <Reveal x={-28} y={0}><PassCard ticket="early" selected={ticket === 'early'} onChoose={() => setTicket('early')} /></Reveal>
          <Reveal x={-28} y={0} delay={0.1}><PassCard ticket="regular" selected={ticket === 'regular'} onChoose={() => setTicket('regular')} /></Reveal>
        </div>
        <Reveal x={28} y={0}><RegisterForm ticket={ticket} setTicket={setTicket} /></Reveal>
      </div>
    </Section>
  )
}
