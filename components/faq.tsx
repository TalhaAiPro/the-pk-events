'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const FAQS = [
  {
    q: 'Kya main ek saath multiple gorillas book kar sakta hoon?',
    a: 'Ji haan. Bade events, weddings aur commercial activations ke liye hum multi-gorilla fleet provide karte hain. Availability confirm karne ke liye WhatsApp par apni date aur city bhej dein.',
  },
  {
    q: 'Aap kaun kaun se cities cover karte hain?',
    a: 'Hamara head office Faisalabad mein hai aur hum Lahore, Islamabad, Rawalpindi, Karachi, Multan, Gujranwala aur Sialkot samet major cities mein service dete hain. Doosre shehron ke liye bhi rabta karein.',
  },
  {
    q: 'Advance payment ki terms kya hain?',
    a: 'Booking confirm karne ke liye ek chhota sa advance liya jata hai, baqi payment event ke din. Exact amount package aur city par depend karta hai jo WhatsApp par clearly bata diya jata hai.',
  },
  {
    q: 'Camera equipment kaisa hota hai?',
    a: 'VIP combo mein dedicated professional cameraman professional DSLR aur cinematic gear ke saath aata hai. Aapko full HD photos aur edited highlight video milti hai jo social media ke liye ready hoti hai.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section id="faqs" className="relative mx-auto max-w-3xl px-4 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Reveal className="text-center">
        <span className="inline-flex rounded-full bg-primary/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          FAQs
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Everything You Need To Know
        </h2>
      </Reveal>

      <div className="mt-12 space-y-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i
          return (
            <Reveal key={item.q} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl glass">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-pretty">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground text-pretty">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
