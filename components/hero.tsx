'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Handshake, Camera, Sparkles } from 'lucide-react'
import { buildGeneralWhatsAppLink } from '@/lib/site'

type HeroProps = {
  onOpenB2B: () => void
}

export function Hero({ onOpenB2B }: HeroProps) {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background video with poster fallback */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-gorilla-fleet.mp4"
        poster="/hero-poster.png"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
      {/* Dark cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_92%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          {/* Live status badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="font-medium text-foreground/90">
              Gorilla Squads Available Today Across Major Cities
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-7xl">
            Pakistan&apos;s{' '}
            <span className="text-primary text-glow-emerald">#1 Fleet</span> of
            Giant Energetic Gorilla Mascots & Full Event Media Coverage
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
            Unforgettable high-energy gorilla entrances plus a dedicated
            cameraman for full event photography and cinematic HD videography.
            Ek hi jagah, complete event media solution.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={buildGeneralWhatsAppLink('Gorilla Entrance book')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-emerald-glow transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" />
              Book Gorilla Entrance
            </a>
            <button
              type="button"
              onClick={onOpenB2B}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-white/5"
            >
              <Handshake className="h-5 w-5 text-accent" />
              Get B2B Partner Rates
            </button>
          </div>

          {/* Feature strip */}
          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { icon: Sparkles, label: 'High-Energy Entrances' },
              { icon: Camera, label: 'HD Photo + Cinematic Video' },
              { icon: Handshake, label: 'Multi-City Coverage' },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2.5 rounded-xl glass px-4 py-3"
              >
                <f.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
