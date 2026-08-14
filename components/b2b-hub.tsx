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
  Sparkles,
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
    <section id="b2b" className="relative mx-auto max-w-7xl px-4 py-20 sm:py-24 overflow-hidden">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left Column: Value Proposition & Call to Action */}
        <Reveal>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <Sparkles className="h-3.5 w-3.5" /> B2B Partner Hub
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl text-white">
            Partner With Us &amp; Earn On Every Booking
          </h2>
          
          <p className="mt-4 text-slate-200 text-pretty leading-relaxed text-sm sm:text-base">
            Planners, venues aur commercial businesses ke liye guaranteed high-yield income stream. Aap client refer karein, baqi tamam execution humari responsibility hai.
          </p>

          {/* Elite Hybrid Commission Callout Box */}
          <div className="mt-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent p-6 shadow-[0_0_30px_rgba(16,185,129,0.1)] backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/40 bg-emerald-500/20 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <BadgeDollarSign className="h-7 w-7" />
              </span>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight">
                  Min. PKR 3,000 <span className="text-lg sm:text-xl font-bold text-slate-200">or up to 10%</span>
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-300">
                  Guaranteed direct cash commission per confirmed booking tier
                </p>
              </div>
            </div>
          </div>

          {/* Action Trigger Button */}
          <button
            type="button"
            onClick={onOpenB2B}
            aria-label="Apply as B2B Partner"
            className="group mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 px-8 py-4 text-base font-extrabold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] active:scale-[0.98]"
          >
            <span>Apply as B2B Partner</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>

        {/* Right Column: Interactive Category Grid */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {SEGMENTS.map((s) => (
              <motion.div
                key={s.title}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:bg-slate-900/90 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/20">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold leading-snug text-white">
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