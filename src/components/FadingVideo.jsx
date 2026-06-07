import { useRef, useEffect, useCallback } from 'react'

const FADE_MS = 500
const FADE_OUT_LEAD = 0.55

export default function FadingVideo({ src, className, style }) {
  const videoRef = useRef(null)
  const rafRef = useRef(null)
  const fadingOutRef = useRef(false)

  const fadeTo = useCallback((target, duration) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const video = videoRef.current
    if (!video) return
    const start = performance.now()
    const startOpacity = parseFloat(video.style.opacity) || 0
    const step = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      video.style.opacity = startOpacity + (target - startOpacity) * progress
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.style.opacity = 0

    const onLoaded = () => {
      video.style.opacity = 0
      video.play().catch(() => {})
      fadeTo(1, FADE_MS)
    }
    const onTimeUpdate = () => {
      const remaining = video.duration - video.currentTime
      if (!fadingOutRef.current && remaining <= FADE_OUT_LEAD && remaining > 0) {
        fadingOutRef.current = true
        fadeTo(0, FADE_MS)
      }
    }
    const onEnded = () => {
      video.style.opacity = 0
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
        fadingOutRef.current = false
        fadeTo(1, FADE_MS)
      }, 100)
    }

    video.addEventListener('loadeddata', onLoaded)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      video.removeEventListener('loadeddata', onLoaded)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
    }
  }, [fadeTo])

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ opacity: 0, ...style }}
    />
  )
}
