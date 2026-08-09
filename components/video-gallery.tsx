'use client'

import { Reveal } from '@/components/reveal'
import { VideoPlayer } from '@/components/video-player'

const CLIPS = [
  { id: 'v1', src: '/v1.mp4' },
  { id: 'v2', src: '/v2.mp4' },
  { id: 'v3', src: '/v3.mp4' },
  { id: 'v4', src: '/v4.mp4' },
  { id: 'v5', src: '/v5.mp4' },
  { id: 'v6', src: '/v6.mp4' },
  { id: 'v7', src: '/v7.mp4' },
  { id: 'v8', src: '/v8.mp4' },
]

export function VideoGallery() {
  return (
    <section id="gallery" className="relative mx-auto max-w-7xl px-4 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full bg-primary/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          HD Video Gallery
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Real Action Reels From Live Events
        </h2>
        <p className="mt-3 text-muted-foreground text-pretty">
          Tap karein play karne ke liye. Universal speaker control ke saath sound poori gallery aur testimonials mein sync rahega.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {CLIPS.map((clip, i) => (
          <Reveal key={clip.id} delay={i * 0.06}>
            <VideoPlayer
              id={clip.id}
              src={clip.src}
              aspect="9/16"
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}