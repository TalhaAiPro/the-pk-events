'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

// Custom WhatsApp SVG Icon for World-Class Elite Styling
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  )
}

const WHATSAPP_NUMBER = '923396224168'

function getHeaderWhatsAppLink() {
  const message =
    'Assalam-o-Alaikum The PK Events! Mujhe apne event ke liye custom package booking aur availability confirm karni hai.'
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const LINKS = [
  { label: 'Services & Pricing', href: '#services' },
  { label: 'Video Gallery', href: '#gallery' },
  { label: 'B2B Partner Desk', href: '#b2b' },
  { label: 'Reviews', href: '#testimonials' },
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
        scrolled ? 'py-2.5' : 'py-4'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 py-3 sm:px-5 transition-all duration-300 bg-[#090D16]/85 text-white backdrop-blur-xl border border-white/10 shadow-2xl',
            scrolled
              ? 'shadow-black/80 border-emerald-500/30 bg-[#090D16]/95'
              : 'hover:border-white/20'
          )}
        >
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl bg-slate-900/90 border border-emerald-500/40 p-0.5 transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Image
                src="/logo.png"
                alt="The PK Events Logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              The PK Events
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-emerald-400 focus:outline-none"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop WhatsApp CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={getHeaderWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2.5 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-emerald-400 hover:scale-[1.03] active:scale-95 shadow-lg shadow-emerald-950/60 sm:flex"
            >
              <WhatsAppIcon className="h-4 w-4 fill-slate-950" />
              <span>Book Event Now</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white lg:hidden transition-colors hover:bg-white/20 active:scale-95"
            >
              {open ? <X className="h-5 w-5 text-emerald-400" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {open ? (
          <div className="mt-2 rounded-2xl bg-[#090D16]/95 p-4 border border-emerald-500/20 backdrop-blur-2xl lg:hidden shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-1.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-200 transition-all hover:bg-white/10 hover:text-emerald-400 active:bg-emerald-500/10"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={getHeaderWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-emerald-400 active:scale-95 shadow-md shadow-emerald-950/50"
            >
              <WhatsAppIcon className="h-4 w-4 fill-slate-950" />
              <span>Book Event Now</span>
            </a>
          </div>
        ) : null}
      </div>
    </header>
  )
}