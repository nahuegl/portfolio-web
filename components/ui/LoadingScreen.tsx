'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import gsap from 'gsap'

type Phase = 'accessing' | 'granted' | 'done'

export function LoadingScreen() {
  const t = useTranslations('loading')
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const ring1Ref = useRef<HTMLDivElement>(null)
  const ring2Ref = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<Phase>('accessing')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!containerRef.current) return

    const tl = gsap.timeline()

    // Rings entrance
    tl.fromTo(
      [ring1Ref.current, ring2Ref.current],
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)' }
    )

    // Progress bar fills over 2s
    tl.fromTo(
      progressRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 2.0, ease: 'power1.inOut', transformOrigin: 'left center' },
      '-=0.3'
    )

    // Switch to granted at 1.6s into progress (80%)
    tl.call(() => setPhase('granted'), [], '-=0.5')

    // Text swap animation
    tl.to(textRef.current, { opacity: 0, y: -8, duration: 0.2, ease: 'power2.in' }, '-=0.5')
    tl.to(textRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' })

    // Hold "ACCESS GRANTED" briefly
    tl.to({}, { duration: 0.5 })

    // Curtain wipe out — slide up
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.7,
      ease: 'power3.inOut',
      onComplete: () => setVisible(false),
    })
  }, [])

  if (!visible) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark overflow-hidden"
    >
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(11,211,211,1) 1px, transparent 1px), linear-gradient(90deg, rgba(11,211,211,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Moving scan line */}
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent animate-scan" />
      </div>

      {/* Animated rings */}
      <div className="relative w-24 h-24 mb-10">
        <div
          ref={ring1Ref}
          className="absolute inset-0 border border-cyan/40 rounded-full"
          style={{
            animation: 'spin 3s linear infinite',
          }}
        />
        <div
          ref={ring2Ref}
          className="absolute inset-3 border border-magenta/25 rounded-full"
          style={{
            animation: 'spin 2s linear infinite reverse',
          }}
        />
        {/* Inner dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={dotRef}
            className="w-3 h-3 bg-cyan rounded-full"
            style={{ boxShadow: '0 0 12px rgba(11,211,211,0.8), 0 0 24px rgba(11,211,211,0.4)' }}
          />
        </div>
        {/* Corner brackets */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-cyan/60" />
        <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-cyan/60" />
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-cyan/60" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-cyan/60" />
      </div>

      {/* Terminal text */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs text-cyan/40">{'>'}</span>
        <p
          ref={textRef}
          className="font-mono text-sm tracking-[0.3em] uppercase"
          style={{ color: phase === 'granted' ? '#0bd3d3' : 'rgba(11,211,211,0.7)' }}
        >
          {phase === 'accessing' ? t('accessing') : t('granted')}
        </p>
        <span className="font-mono text-cyan/60 cursor-blink">_</span>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-px bg-dark-border overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-cyan origin-left"
          style={{ boxShadow: '0 0 8px rgba(11,211,211,0.6)' }}
        />
      </div>

      {/* Bottom label */}
      <p className="absolute bottom-8 font-mono text-xs text-light/15 tracking-widest">
        nahuel.gl · v2.0
      </p>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
