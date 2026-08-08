import { Crown, MapPin, Building2 } from 'lucide-react'
import { CITIES } from '@/lib/site'

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Crown className="h-5 w-5" />
              </span>
              <span className="text-base font-bold">The PK Events</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
              Pakistan&apos;s premier giant mascot entertainment and full event
              media coverage agency. High energy, guaranteed.
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <MapPin className="h-4 w-4 text-primary" />
              Head Office
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
              Faisalabad HQ
              <br />
              Punjab, Pakistan
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <Building2 className="h-4 w-4 text-primary" />
              Multi-City Network
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © 2026 The PK Events. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            ThePKEvents.com : Giant Gorilla Mascots & Event Media Coverage
          </p>
        </div>
      </div>
    </footer>
  )
}
