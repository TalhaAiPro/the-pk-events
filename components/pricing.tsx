'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, MapPin, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CITIES, buildWhatsAppLink } from '@/lib/site'

const PLANS = [
  {
    name: 'Solo Package',
    tagline: 'Single giant gorilla entrance',
    price: 'Best Value',
    highlight: false,
    features: [
      'One giant gorilla mascot',
      '30 to 45 mins live performance',
      'Crowd dance & selfie session',
      'Ideal for birthdays & parties',
    ],
  },
  {
    name: 'VIP Combo Package',
    tagline: 'Gorilla + full media coverage',
    price: 'Most Booked',
    highlight: true,
    features: [
      'Giant gorilla mascot entrance',
      'Dedicated professional cameraman',
      'Full HD event photography',
      'Cinematic edited highlight video',
      'Social media ready reels',
    ],
  },
  {
    name: 'B2B Commercial Package',
    tagline: 'For venues, malls & brands',
    price: 'Custom Rates',
    highlight: false,
    features: [
      'Multi-gorilla fleet options',
      'Full-day commercial activation',
      'Brand & promo integration',
      'Priority multi-city scheduling',
    ],
  },
]

export function Pricing() {
  const [city, setCity] = useState<string>('')

  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-4 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full bg-primary/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          Transparent Pricing
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Pick Your Package & Book Instantly
        </h2>
        <p className="mt-3 text-muted-foreground text-pretty">
          Apna shehar select karein, phir WhatsApp par direct availability
          check karein. Message pehle se ready hoga.
        </p>

        <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2">
          <MapPin className="h-4 w-4 text-primary" />
          <label htmlFor="pricing-city" className="sr-only">
            Select your city
          </label>
          <select
            id="pricing-city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-transparent text-sm font-medium outline-none"
          >
            <option value="" className="bg-popover">
              Select your city
            </option>
            {CITIES.map((c) => (
              <option key={c} value={c} className="bg-popover">
                {c}
              </option>
            ))}
          </select>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className={
                plan.highlight
                  ? 'relative flex h-full flex-col rounded-3xl border border-primary/35 bg-primary/[0.05] p-8 shadow-emerald-glow'
                  : 'relative flex h-full flex-col rounded-3xl glass p-8'
              }
            >
              {plan.highlight ? (
                <div className="absolute inset-x-0 top-0 h-px shimmer" />
              ) : null}
              <p
                className={
                  plan.highlight
                    ? 'text-xs font-bold uppercase tracking-wider text-primary'
                    : 'text-xs font-bold uppercase tracking-wider text-muted-foreground'
                }
              >
                {plan.price}
              </p>
              <h3 className="mt-2 text-xl font-bold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground text-pretty">
                {plan.tagline}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={
                        plan.highlight
                          ? 'mt-0.5 h-4 w-4 shrink-0 text-primary'
                          : 'mt-0.5 h-4 w-4 shrink-0 text-muted-foreground'
                      }
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={buildWhatsAppLink(plan.name, city)}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  plan.highlight
                    ? 'mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]'
                    : 'mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/5'
                }
              >
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </a>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
