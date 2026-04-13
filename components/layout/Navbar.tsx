'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import gsap from 'gsap'

const navLinks = ['experience', 'education', 'certifications', 'projects', 'contact'] as const

export function Navbar() {
  const t = useTranslations('nav')
  const { theme, setTheme } = useTheme()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!navRef.current) return
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 2.7 }
    )
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'es' : 'en'
    const segments = pathname.split('/')
    if (segments[1] === 'es' || segments[1] === 'en') {
      segments[1] = nextLocale
      router.push(segments.join('/'))
    } else {
      router.push(`/${nextLocale}${pathname}`)
    }
  }

  return (
    <nav
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass',
        scrolled
          ? 'border-b border-dark-border/60 bg-dark/80 dark:bg-dark/80'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-cyan text-sm tracking-wider hover:glow-cyan transition-all duration-200"
        >
          {'<nahue_gl />'}
        </a>

        {/* Links — desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className="font-mono text-xs tracking-widest uppercase text-light/60 dark:text-light/50 hover:text-cyan transition-colors duration-200"
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLocale}
            className="font-mono text-xs tracking-widest text-light/60 hover:text-cyan transition-colors duration-200 border border-dark-border hover:border-cyan px-2 py-1 rounded"
          >
            {locale === 'en' ? 'ES' : 'EN'}
          </button>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded border border-dark-border hover:border-cyan text-light/60 hover:text-cyan transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
