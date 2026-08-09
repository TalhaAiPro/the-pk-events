'use client'

import { Reveal } from '@/components/reveal'
import { VideoPlayer } from '@/components/video-player'

const VIDEO_REVIEWS = [
  { id: 'r1', src: '/r1.mp4' },
  { id: 'r2', src: '/r2.mp4' },
  { id: 'r3', src: '/r3.mp4' },
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

      {/* Video Testimonials Grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {VIDEO_REVIEWS.map((v, i) => (
          <Reveal key={v.id} delay={i * 0.08}>
            <VideoPlayer
              id={v.id}
              src={v.src}
              aspect="4/5"
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}