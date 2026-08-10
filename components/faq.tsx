'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, HelpCircle, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'Booking ka areeqa car kya hai aur kitna time lagta hai?',
    a: 'Bahut asaan! Screen par diye gaye WhatsApp button par click karein, apni event date aur city batayein. Hamari team aapko instant packages bhej degi aur aapki booking minutes mein confirm kar degi.',
  },
  {
    q: 'Kya main ek saath multiple gorillas book kar sakta hoon?',
    a: 'Ji haan. Bade events, weddings aur commercial activations ke liye hum multi-gorilla fleet provide karte hain. Availability lock karne ke liye WhatsApp par dates confirm kar lein.',
  },
  {
    q: 'Aap kaun kaun se cities cover karte hain?',
    a: 'Hamara head office Faisalabad mein hai aur hum Lahore, Islamabad, Rawalpindi, Karachi, Multan, Gujranwala aur Sialkot samet tamam major cities mein service dete hain. Doosre shehron ke liye bhi hum travel karte hain.',
  },
  {
    q: 'Advance payment ki terms kya hain?',
    a: 'Booking date lock karne ke liye ek chhota sa token advance liya jata hai, baqi puri payment event ke din on-spot li jati hai. Exact amount aapke city aur package par depend karti hai.',
  },
  {
    q: 'Mascot costumes ki hygiene aur quality kaisi hoti hai?',
    a: 'Quality aur hygiene hamari top priority hai. Har event ke baad humare imported inflatable costumes thoroughly clean aur sanitize kiye jate hain taake aapko 100% fresh, premium aur odor-free experience mil sake.',
  },
  {
    q: 'VIP Combo mein camera aur coverage equipment kaisa hota hai?',
    a: 'VIP combo mein dedicated cameraman professional DSLR, stabilization gimbal aur cinematic gear ke saath aata hai. Aapko high-res photos aur professionally edited 4K reels milti hain jo instantly social media ready hoti hain.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  // SEO Schema Markup for Google Rich Snippets
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
    <section id="faqs" className="relative mx-auto max-w-4xl px-4 py-20 sm:py-24 scroll-mt-20">
      {/* Dynamic SEO Injector */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <HelpCircle className="h-3.5 w-3.5" /> Support & FAQs
        </span>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-balance sm:text-4xl lg:text-5xl text-white">
          Everything You Need To Know
        </h2>
        <p className="mt-4 text-slate-300 text-pretty leading-relaxed text-sm sm:text-base">
          Aapke zehan mein aane wale tamaam sawalat ke clear aur direct jawabat. Mazeed tafseelat ke liye hamari WhatsApp support 24/7 active hai.
        </p>
      </Reveal>

      <div className="mt-12 sm:mt-16 max-w-3xl mx-auto flex flex-col gap-3 sm:gap-4">
        {FAQS.map((item, i) => {
          const isOpen = open === i
          return (
            <Reveal key={item.q} delay={i * 0.05}>
              <div 
                className={cn(
                  "overflow-hidden rounded-2xl border transition-all duration-300 backdrop-blur-xl",
                  isOpen 
                    ? "border-primary/40 bg-slate-900/90 shadow-[0_0_30px_rgba(16,185,129,0.1)]" 
                    : "border-white/10 bg-slate-900/60 hover:border-primary/30 hover:bg-slate-900/80"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-2xl"
                >
                  <span className={cn(
                    "text-sm sm:text-base font-bold leading-snug transition-colors duration-200 text-pretty",
                    isOpen ? "text-primary" : "text-white"
                  )}>
                    {item.q}
                  </span>
                  
                  <motion.span
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                    className={cn(
                      "flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                      isOpen 
                        ? "border-primary/50 bg-primary/20 text-primary" 
                        : "border-white/10 bg-white/5 text-slate-400"
                    )}
                  >
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7">
                        <div className="h-px w-full bg-gradient-to-r from-white/5 via-white/10 to-transparent mb-5" />
                        <p className="text-sm sm:text-base leading-relaxed text-slate-300 text-pretty">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}