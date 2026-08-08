'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { buildGeneralWhatsAppLink } from '@/lib/site'

export function ClosingBanner() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/25 bg-primary/[0.06] px-6 py-16 text-center shadow-emerald-glow sm:px-12">
          <div className="absolute inset-x-0 top-0 h-px shimmer" />
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Ready to Make Your Event{' '}
            <span className="text-primary text-glow-emerald">Viral?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-pretty">
            Ek message aur aapka event unforgettable ban jayega. Abhi WhatsApp
            karein, hamari team turant reply karegi.
          </p>

          <motion.a
            href={buildGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            className="mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-9 py-4 text-base font-bold text-primary-foreground shadow-emerald-glow"
          >
            <MessageCircle className="h-5 w-5" />
            Book Event Now on WhatsApp
          </motion.a>
        </div>
      </Reveal>
    </section>
  )
}
