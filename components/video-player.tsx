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

  // Handle Play / Pause logic
  useEffect(() => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.play().catch(() => {})
    } else {
      videoRef.current.pause()
      videoRef.current.currentTime = 0 // Stop hone par initial frame par reset karega
    }
  }, [isPlaying])

  // Universal Mute / Unmute Sync across all videos
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isGlobalMuted
    }
  }, [isGlobalMuted])

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl glass cursor-pointer select-none',
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
        onLoadedMetadata={(e) => {
          // Instant thumbnail frame render karne ke liye
          e.currentTarget.currentTime = 0.001
        }}
      />

      {/* Gradient overlay for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

      {/* Center play/pause overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={cn(
            'flex h-14 w-14 items-center justify-center rounded-full glass-strong text-foreground transition-all duration-300',
            isPlaying
              ? 'scale-90 opacity-0 group-hover:opacity-100'
              : 'scale-100 opacity-100',
          )}
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6 translate-x-0.5" />
          )}
        </span>
      </div>

      {/* Universal Speaker Control Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation() // Play/pause state trigger hone se rokega
          toggleGlobalMute()
        }}
        aria-label={isGlobalMuted ? 'Unmute all videos' : 'Mute all videos'}
        className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full glass-strong text-foreground transition-colors hover:text-primary"
      >
        {isGlobalMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </div>
  )
}