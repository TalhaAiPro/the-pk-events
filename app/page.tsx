'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ServicePackages } from '@/components/service-packages'
import { B2BHub } from '@/components/b2b-hub'
import { VideoGallery } from '@/components/video-gallery'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { ClosingBanner } from '@/components/closing-banner'
import { Footer } from '@/components/footer'
import { B2BModal } from '@/components/b2b-modal'

export default function Page() {
  const [b2bOpen, setB2bOpen] = useState(false)
  const openB2B = () => setB2bOpen(true)

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero onOpenB2B={openB2B} />
      <ServicePackages />
      <B2BHub onOpenB2B={openB2B} />
      <VideoGallery />
      <Testimonials />
      <FAQ />
      <ClosingBanner />
      <Footer />
      <B2BModal open={b2bOpen} onClose={() => setB2bOpen(false)} />
    </main>
  )
}
