'use client'

import { Check, Sparkles, Camera, MessageCircle, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'
import { buildWhatsAppLink } from '@/lib/site'

const SOLO_FEATURES = [
  'High-energy 30 to 45 mins entrance',
  'Crazy crowd interaction & dance',
  'Selfie & photo session with guests',
  'Perfect for birthdays & small events',
]

const COMBO_FEATURES = [
  'Giant Gorilla Mascot grand entrance',
  'Dedicated professional cameraman',
  'Full event photography (decor, cake cutting, guests)',
  'Cinematic HD highlight video',
  'Edited reels ready for social media',
]

export function ServicePackages() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />

      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
          Core Service Packages
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
          Choose Your Level of Event Energy
        </h2>
        <p className="mt-3 text-base text-muted-foreground text-pretty sm:text-lg">
          Solo gorilla entrance ya complete media combo: dono packages guaranteed viral moments deliver karte hain.
        </p>
      </Reveal>

      <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 items-stretch">
        {/* Option A - Solo */}
        <Reveal className="h-full">
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="group relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-colors hover:border-white/20"
          >
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <Sparkles className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground">Solo Gorilla Entrance</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                Pure high-energy entertainment. Aapke mehmaan hairaan reh jayenge.
              </p>

              <ul className="mt-8 space-y-4">
                {SOLO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-medium text-foreground/90">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-4">
              <a
                href={buildWhatsAppLink('Solo Gorilla Entrance package')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/25 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>Check Availability</span>
              </a>
            </div>
          </motion.div>
        </Reveal>

        {/* Option B - VIP Combo (Featured) */}
        <Reveal delay={0.1} className="h-full">
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-b from-amber-500/[0.08] via-amber-500/[0.03] to-transparent p-8 shadow-[0_0_40px_rgba(245,158,11,0.12)] backdrop-blur-xl"
          >
            {/* Top Shimmer Effect */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-75" />

            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/15 text-amber-400">
                  <Camera className="h-6 w-6" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 backdrop-blur-md">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  Most Popular
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
                VIP All-In-One Combo
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                Gorilla entrance + professional media team. Ek booking, poora event cover.
              </p>

              <ul className="mt-8 space-y-4">
                {COMBO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-medium text-foreground/90">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-amber-500/25 bg-amber-500/10 p-4 backdrop-blur-md">
                <p className="text-sm font-bold text-amber-300">
                  Complete Event Photography Included
                </p>
                <p className="mt-1 text-xs text-muted-foreground text-pretty">
                  Alag studio ka kharcha bachayein. Sab kuch ek package mein.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-4">
              <a
                href={buildWhatsAppLink('VIP All-In-One Combo package')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-amber-500 px-6 py-3.5 text-sm font-bold text-amber-950 shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-[1.01] hover:bg-amber-400 hover:shadow-[0_0_35px_rgba(245,158,11,0.45)] active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                <span>Book VIP Combo</span>
              </a>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}