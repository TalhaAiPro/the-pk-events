'use client'

import React, { createContext, useContext, useState } from 'react'

type VideoContextType = {
  isGlobalMuted: boolean
  activeVideoId: string | null
  toggleGlobalMute: () => void
  playVideo: (id: string) => void
}

const VideoContext = createContext<VideoContextType | undefined>(undefined)

export function VideoProvider({ children }: { children: React.ReactNode }) {
  const [isGlobalMuted, setIsGlobalMuted] = useState(true)
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)

  const toggleGlobalMute = () => {
    setIsGlobalMuted((prev) => !prev)
  }

  const playVideo = (id: string) => {
    setActiveVideoId((prevId) => (prevId === id ? null : id))
  }

  return (
    <VideoContext.Provider
      value={{
        isGlobalMuted,
        activeVideoId,
        toggleGlobalMute,
        playVideo,
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