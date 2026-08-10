'use client'

import { motion } from 'framer-motion'
import { Handshake, Camera, Sparkles, ShieldCheck } from 'lucide-react'

// Custom Official WhatsApp SVG Icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  )
}

export function Hero() {
  const whatsappUrl = `https://wa.me/923396224168?text=${encodeURIComponent(
    'Hi! I want to book the Gorilla Entrance.'
  )}`

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#090D16] flex items-center justify-center pt-24 sm:pt-28 pb-16"
    >
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Central Neon Aura */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-emerald-500/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center flex flex-col items-center"
        >
          {/* Live Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-300 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.15)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span>Live Bookings Open Across Pakistan</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Pakistan&apos;s{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
              #1 Mascot Entertainment
            </span>{' '}
            & 4K Media Coverage
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-xl font-normal">
            Experience high-energy entrances with our massive{' '}
            <span className="font-bold text-white underline decoration-emerald-500 decoration-2 underline-offset-4">
              8.5 Feet Giant Gorilla Mascot
            </span>
            , perfectly paired with dedicated camera professionals for full event DSLR photo & 4K video coverage.
          </p>

          {/* Action Call Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center justify-center w-full sm:w-auto">
            {/* Direct WhatsApp CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-emerald-500 px-8 py-3.5 text-base font-extrabold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:bg-emerald-400 hover:scale-[1.03] active:scale-95 w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5 fill-slate-950" />
              <span>Book Gorilla Entrance</span>
            </a>

            {/* Direct Section Anchor Link Button (#b2b-title) */}
            <a
              href="#b2b"
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-base font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:border-emerald-500/40 active:scale-95 w-full sm:w-auto shadow-lg shadow-black/40"
            >
              <Handshake className="h-5 w-5 text-emerald-400" />
              <span>Get B2B Partner Rates</span>
            </a>
          </div>

          {/* Feature Badges Grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-3 sm:grid-cols-3 w-full max-w-4xl">
            {[
              { icon: Sparkles, label: '8.5ft High-Energy Entrances' },
              { icon: Camera, label: 'Full Event Photo & 4K Reels' },
              { icon: ShieldCheck, label: 'Verified Professional Crew' },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.06]"
              >
                <f.icon className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200 whitespace-nowrap">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}