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
    <section id="services" className="relative mx-auto max-w-7xl px-4 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full bg-primary/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          Core Service Packages
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Choose Your Level of Event Energy
        </h2>
        <p className="mt-3 text-muted-foreground text-pretty">
          Solo gorilla entrance ya complete media combo: dono packages guaranteed
          viral moments deliver karte hain.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Option A - Solo */}
        <Reveal>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="flex h-full flex-col rounded-3xl glass p-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
              <Sparkles className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-2xl font-bold">Solo Gorilla Entrance</h3>
            <p className="mt-2 text-sm text-muted-foreground text-pretty">
              Pure high-energy entertainment. Aapke mehmaan hairaan reh jayenge.
            </p>

            <ul className="mt-6 space-y-3">
              {SOLO_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={buildWhatsAppLink('Solo Gorilla Entrance package')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/5"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              Check Availability
            </a>
          </motion.div>
        </Reveal>

        {/* Option B - VIP Combo (Featured) */}
        <Reveal delay={0.1}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-accent/30 bg-accent/[0.04] p-8 shadow-gold-glow"
          >
            <div className="absolute inset-x-0 top-0 h-px shimmer" />
            <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
              <Star className="h-3.5 w-3.5" />
              Most Popular
            </span>

            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <Camera className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-2xl font-bold">
              VIP All-In-One Combo
            </h3>
            <p className="mt-2 text-sm text-muted-foreground text-pretty">
              Gorilla entrance + professional media team. Ek booking, poora event
              cover.
            </p>

            <ul className="mt-6 space-y-3">
              {COMBO_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-accent/25 bg-accent/[0.06] p-4">
              <p className="text-sm font-semibold text-accent">
                Complete Event Photography Included
              </p>
              <p className="mt-1 text-sm text-muted-foreground text-pretty">
                Alag studio ka kharcha bachayein. Sab kuch ek package mein.
              </p>
            </div>

            <a
              href={buildWhatsAppLink('VIP All-In-One Combo package')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" />
              Book VIP Combo
            </a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
