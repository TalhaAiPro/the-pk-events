'use client'

import { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { cn } from '@/lib/utils'

type VideoPlayerProps = {
  src: string
  poster?: string
  className?: string
  /** Play on hover, pause on leave. Great for gallery grids. */
  playOnHover?: boolean
  /** Aspect ratio wrapper, e.g. "9/16" or "16/9". */
  aspect?: string
  label?: string
}

// Lightweight custom video player with mute/unmute + play/pause controls.
// Falls back gracefully to the poster image when the local video file is
// not present yet.
export function VideoPlayer({
  src,
  poster,
  className,
  playOnHover = false,
  aspect = '9/16',
  label,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      void video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  const handleMouseEnter = () => {
    if (!playOnHover) return
    const video = videoRef.current
    if (!video) return
    void video.play()
    setPlaying(true)
  }

  const handleMouseLeave = () => {
    if (!playOnHover) return
    const video = videoRef.current
    if (!video) return
    video.pause()
    setPlaying(false)
  }

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl glass',
        className,
      )}
      style={{ aspectRatio: aspect }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
      />

      {/* Gradient scrim for control legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

      {label ? (
        <span className="absolute left-3 top-3 rounded-full glass-strong px-3 py-1 text-xs font-medium text-foreground/90">
          {label}
        </span>
      ) : null}

      {/* Center play/pause */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? 'Pause video' : 'Play video'}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span
          className={cn(
            'flex h-14 w-14 items-center justify-center rounded-full glass-strong text-foreground transition-all duration-300',
            playing
              ? 'scale-90 opacity-0 group-hover:opacity-100'
              : 'scale-100 opacity-100',
          )}
        >
          {playing ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6 translate-x-0.5" />
          )}
        </span>
      </button>

      {/* Mute toggle */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full glass-strong text-foreground transition-colors hover:text-primary"
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </div>
  )
}
