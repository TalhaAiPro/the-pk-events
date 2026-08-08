'use client'

import { Star, BadgeCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { VideoPlayer } from '@/components/video-player'

const REVIEWS = [
  {
    name: 'Ahsan Malik',
    role: 'Wedding, Faisalabad',
    text: 'Gorilla entrance ne poore event ka maza double kar diya. Cameraman ne bhi kamaal ki video banai. Highly recommended!',
  },
  {
    name: 'Sana Riaz',
    role: 'Birthday, Lahore',
    text: 'Bachon ki khushi dekhne wali thi. VIP combo liya tha, photos aur video dono professional level ke mile.',
  },
  {
    name: 'Bilal Events',
    role: 'Event Planner Partner',
    text: 'As a planner, unka B2B system bohat smooth hai. Commission time par milta hai aur clients hamesha khush.',
  },
]

const VIDEO_REVIEWS = [
  { src: '/review1.mp4', poster: '/review-poster-1.png', label: 'Client Feedback' },
  { src: '/review2.mp4', poster: '/review-poster-1.png', label: 'Partner Review' },
  { src: '/review3.mp4', poster: '/review-poster-1.png', label: 'Wedding Client' },
]

const PARTNERS = [
  'Royal Marquee',
  'Grand Palace',
  'City Mall',
  'Elite Planners',
  'FitZone Gym',
]

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full bg-primary/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          Social Proof
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Trusted By Hundreds Of Happy Clients
        </h2>
      </Reveal>

      {/* Text reviews */}
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-3xl glass p-6">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90 text-pretty">
                {r.text}
              </p>
              <div className="mt-5 flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/12 text-sm font-bold text-primary">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="flex items-center gap-1 text-sm font-semibold">
                    {r.name}
                    <BadgeCheck className="h-4 w-4 text-primary" />
                  </p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Video testimonials */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {VIDEO_REVIEWS.map((v, i) => (
          <Reveal key={v.src} delay={i * 0.08}>
            <VideoPlayer
              src={v.src}
              poster={v.poster}
              label={v.label}
              playOnHover
              aspect="4/5"
            />
          </Reveal>
        ))}
      </div>

      {/* Partner trust logos */}
      <Reveal className="mt-12">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Trusted venue & business partners
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {PARTNERS.map((p) => (
            <span
              key={p}
              className="rounded-full glass px-5 py-2.5 text-sm font-semibold text-foreground/80"
            >
              {p}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
