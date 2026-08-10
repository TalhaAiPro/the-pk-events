'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight, Sparkles, Volume2 } from 'lucide-react'
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
    <section id="gallery" className="relative mx-auto max-w-7xl px-4 py-20 sm:py-24 overflow-hidden">
      {/* Background Ambient Emerald Glow Accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <Sparkles className="h-3.5 w-3.5" /> 4K Live Event Reels
        </span>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-balance sm:text-4xl lg:text-5xl text-white">
          Real Action Reels From Live Events
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed text-pretty">
          Tap to play & experience the energy. Universal speaker control synchronization keeps sound seamless across all reels.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="relative mt-10 sm:mt-14">
        {/* Navigation Arrows for Desktop */}
        <button
          id="gallery-prev"
          aria-label="Previous reel"
          className="group absolute -left-2 sm:-left-5 top-1/2 z-30 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 p-3.5 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/20 hover:text-primary hover:scale-110 active:scale-95 sm:flex disabled:opacity-20"
        >
          <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
        </button>
        <button
          id="gallery-next"
          aria-label="Next reel"
          className="group absolute -right-2 sm:-right-5 top-1/2 z-30 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 p-3.5 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/20 hover:text-primary hover:scale-110 active:scale-95 sm:flex disabled:opacity-20"
        >
          <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Responsive Swiper Carousel */}
        <div className="w-full px-1">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '#gallery-prev',
              nextEl: '#gallery-next',
            }}
            spaceBetween={14}
            slidesPerView={1.25}
            grabCursor={true}
            breakpoints={{
              480: {
                slidesPerView: 1.8,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 22,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="w-full rounded-3xl"
          >
            {CLIPS.map((clip) => (
              <SwiperSlide key={clip.id} className="h-full py-2">
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <VideoPlayer
                    id={clip.id}
                    src={clip.src}
                    aspect="9/16"
                  />
                  
                  {/* Subtle Sound & Play Overlay Badge */}
                  <div className="pointer-events-none absolute bottom-3 right-3 z-20 flex items-center gap-1 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-md transition-opacity duration-300 group-hover:bg-primary group-hover:text-slate-950">
                    <Volume2 className="h-3 w-3" />
                    <span>TAP AUDIO</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Reveal>
    </section>
  )
}