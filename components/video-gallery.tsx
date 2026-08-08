'use client'

import { Reveal } from '@/components/reveal'
import { VideoPlayer } from '@/components/video-player'

const CLIPS = [
  { src: '/gallery1.mp4', poster: '/gallery-poster-1.png', label: 'Birthday Entrance' },
  { src: '/gallery2.mp4', poster: '/gallery-poster-2.png', label: 'Wedding Stage' },
  { src: '/gallery3.mp4', poster: '/gallery-poster-3.png', label: 'Mall Activation' },
  { src: '/gallery4.mp4', poster: '/gallery-poster-1.png', label: 'Crowd Dance' },
  { src: '/gallery5.mp4', poster: '/gallery-poster-3.png', label: 'Selfie Session' },
  { src: '/gallery6.mp4', poster: '/gallery-poster-2.png', label: 'Highlight Reel' },
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
          Hover ya tap karein play ke liye. Sound on karke poori energy
          mehsoos karein.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {CLIPS.map((clip, i) => (
          <Reveal key={clip.src} delay={i * 0.06}>
            <VideoPlayer
              src={clip.src}
              poster={clip.poster}
              label={clip.label}
              playOnHover
              aspect="9/16"
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
