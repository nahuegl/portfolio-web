'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

interface SectionHeaderProps {
  title: string
  accent?: string
  className?: string
}

export function SectionHeader({ title, accent, className }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(
      ref.current,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <div ref={ref} className={cn('flex items-center gap-4 mb-12', className)}>
      <span className="font-mono text-cyan text-sm opacity-60">/</span>
      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-light dark:text-light">
        {title}
        {accent && <span className="text-cyan"> {accent}</span>}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-cyan/20 to-transparent" />
    </div>
  )
}
