import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { VideoProvider } from '@/components/video-context'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The PK Events | Giant Gorilla Mascots & Full Event Media Coverage',
  description:
    "Pakistan's #1 fleet of giant energetic gorilla mascots plus dedicated cameraman for full event photography and cinematic HD videography. Book high-energy entrances across major cities.",
  generator: 'v0.app',
  keywords: [
    'gorilla mascot Pakistan',
    'event entertainment Faisalabad',
    'event photography Pakistan',
    'mascot booking',
    'The PK Events',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.webp', type: 'image/webp' },
    ],
    shortcut: '/favicon.webp',
    apple: '/favicon.webp',
  },
  openGraph: {
    title: 'The PK Events | Giant Gorilla Mascots & Event Media Coverage',
    description:
      'Unforgettable high-energy gorilla entrances plus complete event media coverage across Pakistan.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${jakarta.variable} bg-background`}>
      <body className="font-sans antialiased">
        <VideoProvider>
          {children}
        </VideoProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}