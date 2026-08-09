'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X, MessageCircle } from 'lucide-react'
import { buildGeneralWhatsAppLink } from '@/lib/site'
import { cn } from '@/lib/utils'

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'B2B Partner Desk', href: '#b2b' },
  { label: 'Video Gallery', href: '#gallery' },
  { label: 'Packages', href: '#pricing' },
  { label: 'FAQs', href: '#faqs' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 bg-black/90 text-white backdrop-blur-md border border-white/10',
            scrolled ? 'shadow-lg shadow-black/50' : '',
          )}
        >
          <a href="#top" className="flex items-center gap-2.5">
            {/* Logo Container with fixed dimensions and clean aspect ratio */}
            <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl">
              <Image
                src="/logo.png"
                alt="The PK Events Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-base font-bold tracking-tight text-white">
              The PK Events
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={buildGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-emerald-glow transition-transform hover:scale-[1.04] sm:flex"
            >
              <MessageCircle className="h-4 w-4" />
              Book Event Now
            </a>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open ? (
          <div className="mt-2 rounded-2xl bg-black/95 p-4 border border-white/10 backdrop-blur-md lg:hidden">
            <ul className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={buildGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Book Event Now
            </a>
          </div>
        ) : null}
      </div>
    </header>
  )
}