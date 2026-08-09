'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, CheckCircle2, Loader2, Building2 } from 'lucide-react'
import { CITIES } from '@/lib/site'

// GOOGLE APPS SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwodwdiXG6F0o7zEPk9g8UQJptnioMcDP9t_E_5f2k9gzyy7TdP0ptZrXMimY4Urdh1TQ/exec'

const BUSINESS_TYPES = [
  'Event Planner',
  'Marquee / Venue',
  'Shopping Mall',
  'Commercial Outlet',
  'Gym / Fitness Club',
  'School / Academy',
  'Other',
]

type B2BModalProps = {
  open: boolean
  onClose: () => void
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function B2BModal({ open, onClose }: B2BModalProps) {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    businessType: '',
  })

  // Lock body scroll while the modal is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...form,
            submittedAt: new Date().toISOString(),
          }),
        })
      } else {
        console.log('[v0] B2B lead (add GOOGLE_SCRIPT_URL to save):', form)
        await new Promise((r) => setTimeout(r, 700))
      }
      setStatus('success')
    } catch (err) {
      console.log('[v0] B2B submit error:', (err as Error).message)
      setStatus('error')
    }
  }

  const reset = () => {
    setForm({ name: '', phone: '', city: '', businessType: '' })
    setStatus('idle')
    onClose()
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop with Blur */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity"
            onClick={reset}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="b2b-title"
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl border border-white/10 bg-slate-950/90 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={reset}
              aria-label="Close form"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            {status === 'success' ? (
              <div className="flex flex-col items-center py-6 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/20 text-primary">
                  <CheckCircle2 className="h-10 w-10" />
                </span>
                <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
                  Application Received
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  Shukriya! Hamari team 24 ghante mein aap se rabta karegi partner rates aur commission details ke saath.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-8 h-12 w-full rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-300">
                    <Building2 className="h-3.5 w-3.5" />
                    B2B Partner Desk
                  </span>
                </div>

                <h3 id="b2b-title" className="mt-4 text-2xl font-extrabold tracking-tight text-foreground">
                  Apply as a B2B Partner
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Har booking par <strong className="text-amber-400 font-semibold">PKR 3,000 direct cash commission</strong>. Form fill karein, hum aap se rabta karenge.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <Field
                    label="Full Name"
                    id="name"
                    value={form.name}
                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                    placeholder="Your name"
                  />
                  <Field
                    label="Phone Number"
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                    placeholder="03XX XXXXXXX"
                  />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="city"
                        className="mb-1.5 block text-xs font-medium text-foreground/80"
                      >
                        City
                      </label>
                      <select
                        id="city"
                        required
                        value={form.city}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, city: e.target.value }))
                        }
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary/60 focus:bg-white/10 focus:ring-1 focus:ring-primary/60"
                      >
                        <option value="" disabled className="bg-slate-900 text-foreground">
                          Select
                        </option>
                        {CITIES.map((c) => (
                          <option key={c} value={c} className="bg-slate-900 text-foreground">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="businessType"
                        className="mb-1.5 block text-xs font-medium text-foreground/80"
                      >
                        Business Type
                      </label>
                      <select
                        id="businessType"
                        required
                        value={form.businessType}
                        onChange={(e) =>
                          setForm((f) => ({
                            ...f,
                            businessType: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary/60 focus:bg-white/10 focus:ring-1 focus:ring-primary/60"
                      >
                        <option value="" disabled className="bg-slate-900 text-foreground">
                          Select
                        </option>
                        {BUSINESS_TYPES.map((b) => (
                          <option key={b} value={b} className="bg-slate-900 text-foreground">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {status === 'error' ? (
                    <p className="text-xs text-red-400 font-medium">
                      Kuch masla ho gaya. Please dobara koshish karein.
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-[0.98] disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <span>Submit Application</span>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string
  id: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium text-foreground/80"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/50 transition-all focus:border-primary/60 focus:bg-white/10 focus:ring-1 focus:ring-primary/60"
      />
    </div>
  )
}