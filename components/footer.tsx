import Image from 'next/image'
import { MapPin, Building2 } from 'lucide-react'
import { CITIES } from '@/lib/site'

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
          {/* Brand Info */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2.5">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-primary/15">
                <Image
                  src="/logo.png"
                  alt="The PK Events Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-base font-bold">The PK Events</span>
            </div>
            <p className="mt-4 max-w-xs text-center text-sm leading-relaxed text-muted-foreground text-pretty">
              Pakistan&apos;s premier giant mascot entertainment and full event
              media coverage agency. High energy, guaranteed.
            </p>
          </div>

          {/* Head Office */}
          <div className="flex flex-col items-center">
            <h3 className="flex items-center justify-center gap-2 text-sm font-semibold">
              <MapPin className="h-4 w-4 text-primary" />
              Head Office
            </h3>
            <p className="mt-3 text-center text-sm leading-relaxed text-muted-foreground text-pretty">
              Faisalabad HQ
              <br />
              Punjab, Pakistan
            </p>
          </div>

          {/* Multi-City Network */}
          <div className="flex flex-col items-center">
            <h3 className="flex items-center justify-center gap-2 text-sm font-semibold">
              <Building2 className="h-4 w-4 text-primary" />
              Multi-City Network
            </h3>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {CITIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full glass px-3 py-1 text-xs text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 flex flex-col items-center justify-center gap-2 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>© 2026 The PK Events. All Rights Reserved.</p>
          <p>ThePKEvents.com : Giant Gorilla Mascots & Event Media Coverage</p>
        </div>
      </div>
    </footer>
  )
}