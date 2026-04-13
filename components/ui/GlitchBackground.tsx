'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

const MAX_PARTICLES = 60
const CONNECTION_DIST = 140
const GLITCH_INTERVAL = 3500

export function GlitchBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let glitchTimer: ReturnType<typeof setTimeout>
    let isGlitching = false
    const particles: Particle[] = []

    const isDark = resolvedTheme !== 'light'
    const colors = {
      particle: isDark ? 'rgba(11,211,211,0.65)' : 'rgba(11,211,211,0.35)',
      connection: isDark ? 'rgba(11,211,211,0.18)' : 'rgba(11,211,211,0.1)',
      glitch1: isDark ? 'rgba(11,211,211,0.12)' : 'rgba(11,211,211,0.06)',
      glitch2: isDark ? 'rgba(249,38,114,0.08)' : 'rgba(249,38,114,0.04)',
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    // Init particles — more for better visual density
    const count = Math.min(MAX_PARTICLES, Math.floor((window.innerWidth * window.innerHeight) / 18000))
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.8 + 0.6,
      })
    }

    const drawGlitch = () => {
      if (!isGlitching) return
      // Horizontal scanlines
      for (let i = 0; i < 3; i++) {
        const y = Math.random() * canvas.height
        const h = Math.random() * 4 + 1
        ctx.fillStyle = colors.glitch1
        ctx.fillRect(0, y, canvas.width, h)
        if (Math.random() > 0.5) {
          ctx.fillStyle = colors.glitch2
          ctx.fillRect(0, y + h, canvas.width, h * 0.6)
        }
      }
    }

    const scheduleGlitch = () => {
      glitchTimer = setTimeout(() => {
        isGlitching = true
        setTimeout(() => { isGlitching = false }, 200)
        scheduleGlitch()
      }, GLITCH_INTERVAL + Math.random() * 2000)
    }
    scheduleGlitch()

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update & draw particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = colors.particle
        ctx.fill()
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          if (Math.abs(dx) > CONNECTION_DIST || Math.abs(dy) > CONNECTION_DIST) continue
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            const alpha = 1 - dist / CONNECTION_DIST
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = colors.connection
            ctx.lineWidth = alpha * 1.0
            ctx.stroke()
          }
        }
      }

      drawGlitch()
      animationId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => resize()
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      cancelAnimationFrame(animationId)
      clearTimeout(glitchTimer)
      window.removeEventListener('resize', handleResize)
    }
  }, [mounted, resolvedTheme])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}
