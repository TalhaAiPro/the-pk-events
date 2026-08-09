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
            'flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300',
            scrolled ? 'glass-strong' : 'glass',
          )}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl">
              <Image
                src="/logo.png" // Apne logo image ka path yahan rakhein (e.g. public/logo.png)
                alt="The PK Events Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-base font-bold tracking-tight">
              The PK Events
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
              className="flex h-10 w-10 items-center justify-center rounded-xl glass text-foreground lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open ? (
          <div className="mt-2 rounded-2xl glass-strong p-4 lg:hidden">
            <ul className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
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