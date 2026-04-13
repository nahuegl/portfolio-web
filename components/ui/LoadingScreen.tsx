'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import gsap from 'gsap'

export function LoadingScreen() {
  const t = useTranslations('loading')
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const [phase, setPhase] = useState<'accessing' | 'granted'>('accessing')

  useEffect(() => {
    // Skip on return visits within same session
    if (sessionStorage.getItem('portfolio-visited')) {
      if (containerRef.current) {
        gsap.set(containerRef.current, { display: 'none' })
      }
      return
    }

    sessionStorage.setItem('portfolio-visited', '1')

    const tl = gsap.timeline()

    tl.to({}, { duration: 1.2, onComplete: () => setPhase('granted') })
      .to(textRef.current, {
        duration: 0.3,
        opacity: 0,
        onComplete: () => setPhase('granted'),
      })
      .to(textRef.current, { duration: 0.3, opacity: 1 })
      .to({}, { duration: 0.6 })
      .to(containerRef.current, {
        duration: 0.6,
        opacity: 0,
        ease: 'power2.inOut',
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.display = 'none'
          }
        },
      })
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark"
    >
      {/* Animated rings */}
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 border border-cyan/30 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
        <div className="absolute inset-2 border border-magenta/20 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-cyan rounded-full animate-pulse-dot" />
        </div>
      </div>

      {/* Terminal text */}
      <p ref={textRef} className="font-mono text-sm tracking-[0.3em] text-cyan/80 uppercase">
        {phase === 'accessing' ? t('accessing') : t('granted')}
      </p>

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent animate-scan"
        />
      </div>
    </div>
  )
}
