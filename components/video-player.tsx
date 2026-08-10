'use client'

import { useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useVideoContext } from '@/components/video-context'

type VideoPlayerProps = {
  id: string
  src: string
  poster?: string
  className?: string
  aspect?: string
}

export function VideoPlayer({
  id,
  src,
  poster,
  className,
  aspect = '9/16',
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { isGlobalMuted, activeVideoId, toggleGlobalMute, playVideo } = useVideoContext()

  const isPlaying = activeVideoId === id

  // Handle Play / Pause logic with native Promise rejection safety
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if browser blocks auto playback
        })
      }
    } else {
      video.pause()
      video.currentTime = 0
    }
  }, [isPlaying])

  // Universal Mute / Unmute Sync across all videos with direct audio stream unlock
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = isGlobalMuted
    }
  }, [isGlobalMuted])

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-slate-900 cursor-pointer select-none border border-white/10 transition-all duration-300 hover:border-primary/40',
        className,
      )}
      style={{ aspectRatio: aspect }}
      onClick={() => playVideo(id)}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        muted={isGlobalMuted}
        loop
        playsInline
        preload="metadata"
      />

      {/* Dark Ambient Gradient for High Visual Contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

      {/* Center Play/Pause Animated Indicator */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span
          className={cn(
            'flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-primary backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]',
            isPlaying
              ? 'scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100'
              : 'scale-100 opacity-100',
          )}
        >
          {isPlaying ? (
            <Pause className="h-6 w-6 text-white" />
          ) : (
            <Play className="h-6 w-6 translate-x-0.5 text-primary fill-primary" />
          )}
        </span>
      </div>

      {/* Universal Speaker Control Button with Emerald Active State */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation() // Prevent video play/pause toggle on sound button tap
          toggleGlobalMute()
        }}
        aria-label={isGlobalMuted ? 'Unmute all videos' : 'Mute all videos'}
        className={cn(
          'absolute bottom-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 backdrop-blur-md active:scale-90',
          isGlobalMuted
            ? 'border-white/20 bg-slate-950/70 text-slate-300 hover:text-white'
            : 'border-primary/50 bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.5)] font-bold',
        )}
      >
        {isGlobalMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </div>
  )
}