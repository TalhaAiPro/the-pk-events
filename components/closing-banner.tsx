'use client'

import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { buildGeneralWhatsAppLink } from '@/lib/site'

export function ClosingBanner() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:py-24 overflow-hidden">
      {/* Background Ambient Emerald Glow Accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />

      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-500/30 bg-slate-900/90 px-6 py-16 text-center shadow-[0_0_50px_rgba(16,185,129,0.15)] backdrop-blur-2xl sm:px-12 sm:py-20">
          {/* Top Shimmer Border Line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

          {/* Social Proof Trust Badge */}
          <div className="mx-auto flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <Sparkles className="h-3.5 w-3.5" /> Bookings Open For Season 2026
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-balance sm:text-5xl lg:text-6xl text-white">
            Ready to Make Your Event{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.4)]">
              Viral?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-200 text-sm sm:text-base leading-relaxed text-pretty">
            Ek message aur aapka event unforgettable ban jayega. Dates tezi se book ho rahi hain, abhi WhatsApp karein aur apni date lock karein!
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={buildGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Event Now on WhatsApp"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-9 py-4 text-base font-black text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105 hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] active:scale-95"
            >
              {/* Official WhatsApp SVG Icon */}
              <svg
                className="h-5 w-5 fill-current transition-transform group-hover:rotate-12"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Book Event Now on WhatsApp</span>
            </motion.a>
          </div>

          {/* Micro Trust Indicator Footer inside Banner */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" /> 100% Verified Reliable Service
            </span>
            <span>•</span>
            <span>Instant Response Guarantee</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}