'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { VideoPlayer } from '@/components/video-player'

import 'swiper/css'
import 'swiper/css/navigation'

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

      {/* Video Testimonials Slider Container */}
      <Reveal delay={0.1} className="relative mt-12">
        {/* Navigation Arrows for Desktop */}
        <button
          id="testimonials-prev"
          aria-label="Previous testimonial"
          className="absolute -left-5 top-1/2 z-30 hidden -translate-y-1/2 items-center justify-center rounded-full bg-background/90 p-3 text-foreground shadow-2xl backdrop-blur transition hover:bg-background sm:flex disabled:opacity-20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          id="testimonials-next"
          aria-label="Next testimonial"
          className="absolute -right-5 top-1/2 z-30 hidden -translate-y-1/2 items-center justify-center rounded-full bg-background/90 p-3 text-foreground shadow-2xl backdrop-blur transition hover:bg-background sm:flex disabled:opacity-20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Responsive Single Row Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '#testimonials-prev',
            nextEl: '#testimonials-next',
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
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="w-full !overflow-visible"
        >
          {VIDEO_REVIEWS.map((v) => (
            <SwiperSlide key={v.id} className="h-full">
              <VideoPlayer
                id={v.id}
                src={v.src}
                aspect="4/5"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  )
}