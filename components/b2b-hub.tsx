'use client'

import { motion } from 'framer-motion'
import {
  CalendarCheck,
  Building2,
  ShoppingBag,
  Store,
  Dumbbell,
  GraduationCap,
  BadgeDollarSign,
  ArrowRight,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const SEGMENTS = [
  { icon: CalendarCheck, title: 'Event Planners' },
  { icon: Building2, title: 'Marquees & Venues' },
  { icon: ShoppingBag, title: 'Shopping Malls' },
  { icon: Store, title: 'Commercial Outlets' },
  { icon: Dumbbell, title: 'Gyms & Fitness Clubs' },
  { icon: GraduationCap, title: 'Schools & Academies' },
]

type B2BHubProps = {
  onOpenB2B: () => void
}

export function B2BHub({ onOpenB2B }: B2BHubProps) {
  return (
    <section id="b2b" className="relative mx-auto max-w-7xl px-4 py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="inline-flex rounded-full bg-amber-500/15 border border-amber-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
            B2B Partner Hub
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl text-foreground">
            Partner With Us & Earn On Every Booking
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty leading-relaxed">
            Planners, venues aur commercial businesses ke liye guaranteed income
            stream. Aap client refer karein, hum event deliver karein.
          </p>

          {/* Highlight Callout Box */}
          <div className="mt-8 rounded-3xl border border-amber-500/30 bg-amber-500/5 p-6 shadow-[0_0_30px_rgba(245,158,11,0.1)] backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/15 text-amber-400">
                <BadgeDollarSign className="h-7 w-7" />
              </span>
              <div>
                <p className="text-2xl font-extrabold text-amber-400">
                  PKR 3,000
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  Guaranteed direct cash commission per booking
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="button"
            onClick={onOpenB2B}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-base font-bold text-slate-950 shadow-[0_0_25px_rgba(251,191,36,0.3)] transition-all duration-300 hover:bg-amber-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(251,191,36,0.5)] active:scale-[0.98]"
          >
            <span>Apply as B2B Partner</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {SEGMENTS.map((s, i) => (
              <motion.div
                key={s.title}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-colors duration-300 hover:border-primary/40 hover:bg-white/10"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold leading-snug text-foreground text-pretty">
                  {s.title}
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}