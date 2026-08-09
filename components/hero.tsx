'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Handshake, Camera, Sparkles, ShieldCheck } from 'lucide-react'
import { buildGeneralWhatsAppLink } from '@/lib/site'

type HeroProps = {
  onOpenB2B: () => void
}

export function Hero({ onOpenB2B }: HeroProps) {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-background flex items-center justify-center">
      {/* World-Class Modern Abstract Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.12),transparent_70%)] pointer-events-none" />
      
      {/* Grid Pattern with Fade Effect */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      {/* Ambient Radial Glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center flex flex-col items-center"
        >
          {/* World-Class Live Status Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs sm:text-sm font-medium backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="text-foreground/90">
              Live Bookings Open Across Pakistan
            </span>
          </motion.div>

          {/* Elite Main Heading */}
          <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-7xl">
            Pakistan&apos;s{' '}
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-teal-300 bg-clip-text text-transparent">
              #1 Mascot Fleet
            </span>{' '}
            & Full Event Media Coverage
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty font-normal">
            Unforgettable high-energy mascot entrances combined with a dedicated cameraman for full event photography and cinematic HD videography. Complete event entertainment solution.
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center justify-center w-full sm:w-auto">
            <a
              href={buildGeneralWhatsAppLink('Gorilla Entrance book')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] active:scale-[0.98] w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5 fill-current" />
              <span>Book Gorilla Entrance</span>
            </a>
            <button
              type="button"
              onClick={onOpenB2B}
              className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-base font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-[0.98] w-full sm:w-auto"
            >
              <Handshake className="h-5 w-5 text-emerald-400" />
              <span>Get B2B Partner Rates</span>
            </button>
          </div>

          {/* Elite Feature Badges */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-3 sm:grid-cols-3 w-full max-w-3xl">
            {[
              { icon: Sparkles, label: 'High-Energy Entrances' },
              { icon: Camera, label: 'HD Photo + Cinematic Video' },
              { icon: ShieldCheck, label: 'Verified Professional Crew' },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-center justify-center gap-2.5 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3.5 backdrop-blur-sm transition-colors hover:border-white/10"
              >
                <f.icon className="h-4 w-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground/80">{f.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}