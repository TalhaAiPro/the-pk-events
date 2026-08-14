'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  X,
  Building2,
  User,
  Phone,
  MapPin,
  Briefcase,
  Sparkles,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react'
import { CITIES as SITE_CITIES } from '@/lib/site'

// Fallback cities array in case import is undefined
const FALLBACK_CITIES = [
  'Lahore',
  'Karachi',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Multan',
  'Peshawar',
  'Quetta',
  'Sialkot',
  'Gujranwala',
  'Other',
]

const CITIES = SITE_CITIES && SITE_CITIES.length > 0 ? SITE_CITIES : FALLBACK_CITIES

const BUSINESS_TYPES = [
  'Event Planner',
  'Marquee / Venue',
  'Shopping Mall',
  'Commercial Outlet',
  'Gym / Fitness Club',
  'School / Academy',
  'Other',
]

// TARGET WHATSAPP NUMBER
const WHATSAPP_NUMBER = '923396224168'

type B2BModalProps = {
  open: boolean
  onClose: () => void
}

export function B2BModal({ open, onClose }: B2BModalProps) {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    businessType: '',
  })

  // Lock body scroll while modal is active
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

  // Strict Phone Validation Logic for Pakistani Mobile Numbers
  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/[\s-]/g, '')
    const phoneRegex = /^((\+92)|(92)|(0))3\d{9}$/
    return phoneRegex.test(cleaned)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!validatePhone(form.phone)) {
      setErrorMessage('Sahi Pakistani phone number darj karein (e.g., 03001234567)')
      return
    }

    // Dynamic High-Converting Pre-Formatted WhatsApp Message with Elite Hybrid Offer Structure
    const formattedMessage = `🤝 *NEW B2B PARTNER APPLICATION* 🤝\n\n• *Name:* ${form.name.trim()}\n• *Phone:* ${form.phone.trim()}\n• *City:* ${form.city}\n• *Business Type:* ${form.businessType}\n• *Selected Tier/Offer:* Min. PKR 3,000 or up to 10% Direct Commission / Booking\n\n*Assalam-o-Alaikum! Main The PK Events ke Official B2B Partner Network ko join karna chahta hun.*`

    const encodedMessage = encodeURIComponent(formattedMessage)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

    // Instant Direct Redirect to WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    // Reset and Close Modal
    reset()
  }

  const reset = () => {
    setForm({ name: '', phone: '', city: '', businessType: '' })
    setErrorMessage('')
    onClose()
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop with High-end Blur */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={reset}
            aria-hidden="true"
          />

          {/* Modal Container optimized for all viewports */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="b2b-title"
            className="relative my-auto w-full max-w-lg max-h-[90dvh] overflow-y-auto rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-black/95 p-5 sm:p-8 shadow-[0_0_80px_rgba(16,185,129,0.15)] backdrop-blur-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Glow Accent */}
            <div className="pointer-events-none absolute -top-12 left-1/2 h-24 w-48 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-2xl" />

            {/* Close Button */}
            <button
              type="button"
              onClick={reset}
              aria-label="Close modal"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400 active:scale-95"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <Building2 className="h-3.5 w-3.5" /> B2B Exclusive Network
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-400">
                <Sparkles className="h-3 w-3" /> High Yield
              </span>
            </div>

            <h2 id="b2b-title" className="mt-4 text-2xl sm:text-3xl font-black tracking-tight text-white">
              Become an Official B2B Partner
            </h2>
            
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-200">
              Har booking par <strong className="text-emerald-400 font-bold underline decoration-emerald-500/40 underline-offset-4">Min. PKR 3,000 or up to 10% Direct Commission</strong> earning start karein. Simple details fill karke direct WhatsApp connect karein:
            </p>

            {/* Form Inputs */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <InputField
                label="Full Name"
                id="b2b-name"
                icon={User}
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                placeholder="Enter your name"
              />

              <InputField
                label="Phone Number (WhatsApp)"
                id="b2b-phone"
                type="tel"
                icon={Phone}
                value={form.phone}
                onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                placeholder="03XX XXXXXXX"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* City Select */}
                <div>
                  <label
                    htmlFor="b2b-city"
                    className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-slate-200"
                  >
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Select City</span>
                  </label>
                  <select
                    id="b2b-city"
                    required
                    value={form.city}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, city: e.target.value }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white outline-none transition-all focus:border-emerald-500 focus:bg-slate-900 focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="" disabled className="bg-slate-900 text-slate-400">
                      Select City
                    </option>
                    {CITIES.map((c) => (
                      <option key={c} value={c} className="bg-slate-900 text-white">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Business Type Select */}
                <div>
                  <label
                    htmlFor="b2b-businessType"
                    className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-slate-200"
                  >
                    <Briefcase className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Business Type</span>
                  </label>
                  <select
                    id="b2b-businessType"
                    required
                    value={form.businessType}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        businessType: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white outline-none transition-all focus:border-emerald-500 focus:bg-slate-900 focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="" disabled className="bg-slate-900 text-slate-400">
                      Select Type
                    </option>
                    {BUSINESS_TYPES.map((b) => (
                      <option key={b} value={b} className="bg-slate-900 text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {errorMessage ? (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-red-500/30 bg-red-500/10 p-2.5 text-center text-xs font-semibold text-red-400"
                >
                  {errorMessage}
                </motion.div>
              ) : null}

              {/* High-Converting Emerald WhatsApp Button */}
              <button
                type="submit"
                aria-label="Apply Direct on WhatsApp for B2B Partnership"
                className="group relative mt-3 flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 px-6 font-extrabold text-white shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-[1.01] hover:from-emerald-400 hover:to-green-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] active:scale-[0.98]"
              >
                <MessageSquare className="h-5 w-5 fill-current transition-transform group-hover:scale-110" />
                <span>Apply Direct on WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 pt-1 text-center text-[11px] text-slate-300">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Instant VIP Response &amp; Commission Verification</span>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

function InputField({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = 'text',
  icon: Icon,
}: {
  label: string
  id: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  icon: React.ElementType
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-slate-200"
      >
        <Icon className="h-3.5 w-3.5 text-emerald-400" />
        <span>{label}</span>
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 transition-all focus:border-emerald-500 focus:bg-slate-900 focus:ring-1 focus:ring-emerald-500"
      />
    </div>
  )
}