'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { VideoPlayer } from '@/components/video-player'

import 'swiper/css'
import 'swiper/css/navigation'

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

      <Reveal delay={0.1} className="relative mt-14">
        {/* Navigation Arrows for Desktop */}
        <button
          id="gallery-prev"
          aria-label="Previous reel"
          className="absolute -left-5 top-1/2 z-30 hidden -translate-y-1/2 items-center justify-center rounded-full bg-background/90 p-3 text-foreground shadow-2xl backdrop-blur transition hover:bg-background sm:flex disabled:opacity-20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          id="gallery-next"
          aria-label="Next reel"
          className="absolute -right-5 top-1/2 z-30 hidden -translate-y-1/2 items-center justify-center rounded-full bg-background/90 p-3 text-foreground shadow-2xl backdrop-blur transition hover:bg-background sm:flex disabled:opacity-20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Responsive Single Row Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '#gallery-prev',
            nextEl: '#gallery-next',
          }}
          spaceBetween={16}
          slidesPerView={1.25}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="w-full !overflow-visible"
        >
          {CLIPS.map((clip) => (
            <SwiperSlide key={clip.id} className="h-full">
              <VideoPlayer
                id={clip.id}
                src={clip.src}
                aspect="9/16"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  )
}