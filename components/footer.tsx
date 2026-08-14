import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Globe2, Sparkles, MessageCircle } from 'lucide-react'
import { CITIES } from '@/lib/site'

const WHATSAPP_NUMBER = '923396224168'

function getFooterWhatsAppLink() {
  const message =
    'Assalam-o-Alaikum The PK Events! Mujhe apne event ke liye custom package booking aur availability confirm karni hai.'
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#070A12] border-t border-slate-800/80 overflow-hidden text-slate-300">
      {/* Top Ambient Emerald Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 items-start text-center lg:text-left">
          
          {/* Column 1: Brand Info & Mission */}
          <div className="flex flex-col items-center lg:items-start">
            <Link href="#top" className="flex items-center gap-3.5 group cursor-pointer focus:outline-none">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-slate-900 border border-emerald-500/40 p-1 transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-400 shadow-xl shadow-emerald-950/50">
                <Image
                  src="/logo.webp"
                  alt="The PK Events Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                The PK Events
              </span>
            </Link>
            
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-400 max-w-sm">
              Pakistan&apos;s premier giant mascot entertainment & cinematic media coverage agency. Delivering high-energy entrances and elite 4K productions.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-bold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                <span>Nationwide Operations Across Pakistan</span>
              </div>

              <a
                href={getFooterWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-xs font-extrabold text-slate-950 transition-all duration-300 hover:bg-emerald-400 hover:scale-[1.03] active:scale-95 shadow-lg shadow-emerald-950/60"
              >
                <MessageCircle className="h-4 w-4 fill-slate-950" />
                <span>Book Event Now</span>
              </a>
            </div>
          </div>

          {/* Column 2: Central Operations HQ */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="flex items-center justify-center lg:justify-start gap-2 text-xs font-extrabold tracking-widest uppercase text-white font-mono">
              <MapPin className="h-4 w-4 text-emerald-400" />
              Operations HQ
            </h3>
            
            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-xl w-full max-w-sm shadow-xl transition-all duration-300 hover:border-emerald-500/30">
              <p className="text-xs sm:text-sm font-bold text-white">Faisalabad Headquarters</p>
              <div className="mt-2.5 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Status:</span>
                <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" /> Direct Dispatch Ready
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Multi-City Network */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="flex items-center justify-center lg:justify-start gap-2 text-xs font-extrabold tracking-widest uppercase text-white font-mono">
              <Globe2 className="h-4 w-4 text-emerald-400" />
              Service Cities
            </h3>
            
            <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-1.5 max-w-sm">
              {CITIES.map((c) => {
                const isHQ = c.includes('(HQ)')
                const isSpecial = c.includes('All Pakistan')
                
                return (
                  <span
                    key={c}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-all duration-200 backdrop-blur-md border ${
                      isHQ
                        ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-sm shadow-emerald-950/60'
                        : isSpecial
                        ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-emerald-500/30 hover:text-white'
                    }`}
                  >
                    {c}
                  </span>
                )
              })}
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Divider & Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-500">
          <p>© {currentYear} The PK Events. All Rights Reserved.</p>
          <p className="font-mono text-slate-400 tracking-wider">
            ThePKEvents.com : Giant Gorilla Mascots & Event Media Coverage Agency
          </p>
        </div>
      </div>
    </footer>
  )
}