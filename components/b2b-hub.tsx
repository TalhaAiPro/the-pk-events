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
          <span className="inline-flex rounded-full bg-accent/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            B2B Partner Hub
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Partner With Us & Earn On Every Booking
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Planners, venues aur commercial businesses ke liye guaranteed income
            stream. Aap client refer karein, hum event deliver karein.
          </p>

          <div className="mt-8 rounded-3xl border border-accent/25 bg-accent/[0.05] p-6 shadow-gold-glow">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <BadgeDollarSign className="h-7 w-7" />
              </span>
              <div>
                <p className="text-2xl font-extrabold text-accent">
                  PKR 3,000
                </p>
                <p className="text-sm text-muted-foreground">
                  Guaranteed direct cash commission per booking
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenB2B}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-bold text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Apply as B2B Partner
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
                className="flex flex-col items-start gap-3 rounded-2xl glass p-5"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold leading-snug text-pretty">
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
