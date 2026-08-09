import Image from 'next/image'
import { MapPin, Globe2, Sparkles } from 'lucide-react'
import { CITIES } from '@/lib/site'

export function Footer() {
  return (
    <footer className="relative bg-[#090D16] border-t border-slate-800/80 overflow-hidden text-slate-300">
      {/* Top Ambient Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 text-center md:text-left items-start">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-slate-900 border border-emerald-500/30 p-1 transition-transform duration-300 group-hover:scale-105 group-hover:border-emerald-400 shadow-lg shadow-emerald-950/40">
                <Image
                  src="/logo.png"
                  alt="The PK Events Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                The PK Events
              </span>
            </div>
            
            <p className="mt-4 max-w-sm text-center md:text-left text-xs sm:text-sm leading-relaxed text-slate-400">
              Pakistan&apos;s premier giant mascot entertainment & cinematic media coverage agency. Unrivaled high-energy entries & 4K media production.
            </p>

            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
              <Sparkles className="h-3 w-3 animate-pulse" />
              <span>Serving Nationwide Across Pakistan</span>
            </div>
          </div>

          {/* Central Operations HQ */}
          <div className="flex flex-col items-center md:items-center">
            <h3 className="flex items-center justify-center gap-2 text-sm font-bold tracking-wide uppercase text-white">
              <MapPin className="h-4 w-4 text-emerald-400" />
              Central Operations HQ
            </h3>
            <div className="mt-3 text-center text-xs sm:text-sm leading-relaxed text-slate-400 font-medium">
              <p className="text-white font-semibold">Faisalabad HQ</p>
              <p className="mt-0.5 text-slate-400">Punjab, Pakistan</p>
              <span className="mt-2 inline-block text-[11px] text-slate-500 font-mono">
                Direct Dispatch Center
              </span>
            </div>
          </div>

          {/* Multi-City Network */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="flex items-center justify-center md:justify-end gap-2 text-sm font-bold tracking-wide uppercase text-white">
              <Globe2 className="h-4 w-4 text-emerald-400" />
              Multi-City Network
            </h3>
            
            <div className="mt-3 flex flex-wrap justify-center md:justify-end gap-1.5 sm:gap-2 max-w-md">
              {CITIES.map((c) => {
                const isHQ = c.includes('(HQ)')
                const isSpecial = c.includes('All Pakistan')
                
                return (
                  <span
                    key={c}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all duration-200 cursor-default backdrop-blur-md border ${
                      isHQ
                        ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-semibold shadow-sm shadow-emerald-900/50'
                        : isSpecial
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 font-semibold'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
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
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] sm:text-xs text-slate-500">
          <p>© 2026 The PK Events. All Rights Reserved.</p>
          <p className="font-mono text-slate-400">
            ThePKEvents.com : Giant Gorilla Mascots & Event Media Coverage
          </p>
        </div>
      </div>
    </footer>
  )
}