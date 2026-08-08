'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, CheckCircle2, Loader2 } from 'lucide-react'
import { CITIES } from '@/lib/site'

// PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL BELOW to receive leads directly
// in your Google Sheet. Leave empty to just log submissions to the console.
const GOOGLE_SCRIPT_URL = ''

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
          // no-cors keeps things simple for Apps Script web apps.
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={reset}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="b2b-title"
            className="relative w-full max-w-md rounded-3xl glass-strong p-6 sm:p-8"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={reset}
              aria-label="Close form"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full glass text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            {status === 'success' ? (
              <div className="flex flex-col items-center py-6 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary text-glow-emerald" />
                <h3 className="mt-4 text-xl font-bold">Application Received</h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">
                  Shukriya! Hamari team 24 ghante mein aap se rabta karegi
                  partner rates aur commission details ke saath.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <span className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                  B2B Partner Desk
                </span>
                <h3 id="b2b-title" className="mt-3 text-2xl font-bold text-balance">
                  Apply as a B2B Partner
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                  Har booking par PKR 3,000 direct cash commission. Form fill
                  karein, hum aap se rabta karenge.
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
                        className="mb-1.5 block text-xs font-medium text-muted-foreground"
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
                        className="w-full rounded-xl glass px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/60"
                      >
                        <option value="" disabled className="bg-popover">
                          Select
                        </option>
                        {CITIES.map((c) => (
                          <option key={c} value={c} className="bg-popover">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="businessType"
                        className="mb-1.5 block text-xs font-medium text-muted-foreground"
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
                        className="w-full rounded-xl glass px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/60"
                      >
                        <option value="" disabled className="bg-popover">
                          Select
                        </option>
                        {BUSINESS_TYPES.map((b) => (
                          <option key={b} value={b} className="bg-popover">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {status === 'error' ? (
                    <p className="text-sm text-destructive">
                      Kuch masla ho gaya. Please dobara koshish karein.
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting
                      </>
                    ) : (
                      'Submit Application'
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
        className="mb-1.5 block text-xs font-medium text-muted-foreground"
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
        className="w-full rounded-xl glass px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/60"
      />
    </div>
  )
}
