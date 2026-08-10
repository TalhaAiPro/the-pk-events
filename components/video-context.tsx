'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

type VideoContextType = {
  isGlobalMuted: boolean
  activeVideoId: string | null
  toggleGlobalMute: () => void
  playVideo: (id: string) => void
  stopAllVideos: () => void
}

const VideoContext = createContext<VideoContextType | undefined>(undefined)

export function VideoProvider({ children }: { children: React.ReactNode }) {
  const [isGlobalMuted, setIsGlobalMuted] = useState(true)
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)

  const toggleGlobalMute = useCallback(() => {
    setIsGlobalMuted((prev) => !prev)
  }, [])

  const playVideo = useCallback((id: string) => {
    setActiveVideoId((prevId) => (prevId === id ? null : id))
  }, [])

  const stopAllVideos = useCallback(() => {
    setActiveVideoId(null)
  }, [])

  return (
    <VideoContext.Provider
      value={{
        isGlobalMuted,
        activeVideoId,
        toggleGlobalMute,
        playVideo,
        stopAllVideos,
      }}
    >
      {children}
    </VideoContext.Provider>
  )
}

export function useVideoContext() {
  const context = useContext(VideoContext)
  if (!context) {
    throw new Error('useVideoContext must be used within a VideoProvider')
  }
  return context
}