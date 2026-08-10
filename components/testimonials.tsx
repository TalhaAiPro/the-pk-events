'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight, Star, ShieldCheck, Sparkles, MessageSquareQuote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { VideoPlayer } from '@/components/video-player'

import 'swiper/css'
import 'swiper/css/navigation'

const VIDEO_REVIEWS = [
  { id: 'r1', src: '/r1.mp4', name: 'Mian Sahab', location: 'Lahore Event' },
  { id: 'r2', src: '/r2.mp4', name: 'VIP Host', location: 'Wedding Reception' },
  { id: 'r3', src: '/r3.mp4', name: 'Commercial Partner', location: 'Mall Activation' },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative mx-auto max-w-7xl px-4 py-20 sm:py-24 scroll-mt-24 overflow-hidden">
      {/* Background Emerald Glow Accent */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-[350px] w-[500px] -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]" />

      <Reveal className="mx-auto max-w-2xl text-center">
        {/* Social Proof Badge */}
        <div className="flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <Sparkles className="h-3.5 w-3.5" /> Social Proof & Reviews
          </span>
        </div>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-balance sm:text-4xl lg:text-5xl text-white">
          Trusted By Hundreds Of Happy Clients
        </h2>

        {/* 5-Star Rating & Trust Banner */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-amber-400 text-sm font-semibold">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-white font-bold">5.0 / 5.0</span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1 text-slate-300">
            <ShieldCheck className="h-4 w-4 text-primary" /> 100% Verified Live Reactions
          </span>
        </div>
      </Reveal>

      {/* Video Testimonials Slider Container */}
      <Reveal delay={0.1} className="relative mt-10 sm:mt-14">
        {/* Navigation Arrows for Desktop */}
        <button
          id="testimonials-prev"
          aria-label="Previous testimonial"
          className="group absolute -left-2 sm:-left-5 top-1/2 z-30 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 p-3.5 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/20 hover:text-primary hover:scale-110 active:scale-95 sm:flex disabled:opacity-20"
        >
          <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
        </button>
        <button
          id="testimonials-next"
          aria-label="Next testimonial"
          className="group absolute -right-2 sm:-right-5 top-1/2 z-30 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 p-3.5 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/20 hover:text-primary hover:scale-110 active:scale-95 sm:flex disabled:opacity-20"
        >
          <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Responsive Swiper Slider */}
        <div className="w-full px-1">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '#testimonials-prev',
              nextEl: '#testimonials-next',
            }}
            spaceBetween={16}
            slidesPerView={1.2}
            grabCursor={true}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 18,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="w-full rounded-3xl"
          >
            {VIDEO_REVIEWS.map((v) => (
              <SwiperSlide key={v.id} className="h-full py-2">
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <VideoPlayer
                    id={v.id}
                    src={v.src}
                    aspect="4/5"
                  />

                  {/* Glassmorphic Verified Review Badge Overlay */}
                  <div className="pointer-events-none absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-[11px] font-bold text-primary backdrop-blur-md">
                    <MessageSquareQuote className="h-3.5 w-3.5 text-primary" />
                    <span>VERIFIED CLIENT</span>
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