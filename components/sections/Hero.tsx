'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Github, Linkedin, Mail, FileDown, ArrowDown } from 'lucide-react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(SplitText, ScrollTrigger)
}

const techStack = [
  { label: 'React', color: 'cyan' },
  { label: 'Next.js', color: 'cyan' },
  { label: 'TypeScript', color: 'cyan' },
  { label: 'Tailwind CSS', color: 'cyan' },
  { label: 'Power BI', color: 'magenta' },
  { label: 'Azure AI', color: 'magenta' },
  { label: 'SAP', color: 'magenta' },
  { label: 'GSAP', color: 'yellow' },
]

export function Hero() {
  const t = useTranslations('hero')
  const nameRef = useRef<HTMLHeadingElement>(null)
  const roleRef = useRef<HTMLParagraphElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!nameRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.5 })

      // Name — SplitText char reveal
      // First make h1 visible (opacity:0 from gsap-hidden targets the parent,
      // but animation targets child chars — parent must be transparent to chars)
      gsap.set(nameRef.current, { opacity: 1 })
      const split = new SplitText(nameRef.current, { type: 'chars' })
      tl.fromTo(
        split.chars,
        { y: 60, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.03,
          ease: 'back.out(1.2)',
        }
      )

      // Role
      tl.fromTo(
        roleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.3'
      )

      // Tagline
      tl.fromTo(
        taglineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.2'
      )

      // CTAs
      tl.fromTo(
        ctasRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.2'
      )

      // Image — from right
      tl.fromTo(
        imageRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.9'
      )

      // About box
      tl.fromTo(
        aboutRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )

      // Parallax on scroll
      gsap.to(imageRef.current, {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">
        {/* Left — Text */}
        <div>
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-cyan/20 bg-cyan/5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot" />
            <span className="font-mono text-xs tracking-widest text-cyan/80 uppercase">
              {t('available')}
            </span>
          </div>

          {/* Name */}
          <h1
            ref={nameRef}
            className="gsap-hidden font-display text-5xl md:text-6xl lg:text-7xl font-bold text-light dark:text-light leading-tight mb-4 tracking-tight"
            style={{ perspective: '400px' }}
          >
            Nahuel González
          </h1>

          {/* Role */}
          <p
            ref={roleRef}
            className="gsap-hidden font-mono text-sm md:text-base tracking-[0.2em] text-cyan uppercase mb-6"
          >
            {t('role')}
          </p>

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="gsap-hidden font-body text-base md:text-lg text-light/60 dark:text-light/50 leading-relaxed max-w-lg mb-10"
          >
            {t('tagline')}
          </p>

          {/* CTAs */}
          <div ref={ctasRef} className="gsap-hidden flex flex-wrap items-center gap-3 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-dark font-mono text-sm font-bold tracking-wider uppercase hover:bg-cyan-dark transition-colors duration-200"
            >
              {t('cta_work')}
              <ArrowDown size={14} />
            </a>
            <a
              href="/CV-Nahuel-2026.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-light/20 text-light/70 font-mono text-sm tracking-wider uppercase hover:border-cyan hover:text-cyan transition-all duration-200"
            >
              <FileDown size={14} />
              {t('cta_cv')}
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2 ml-2">
              <a
                href="https://github.com/nahuegl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-dark-border hover:border-cyan text-light/40 hover:text-cyan transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/nahuelgl17/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-dark-border hover:border-cyan text-light/40 hover:text-cyan transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:glnahuel17@gmail.com"
                className="p-2 border border-dark-border hover:border-cyan text-light/40 hover:text-cyan transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Tech stack pills */}
          <div>
            <p className="font-mono text-xs text-light/30 tracking-widest uppercase mb-3">
              {t('stack_label')}
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map(({ label, color }) => (
                <span
                  key={label}
                  className={`font-mono text-xs px-2 py-1 border rounded-sm ${
                    color === 'cyan'
                      ? 'border-cyan/20 text-cyan/70 bg-cyan/5'
                      : color === 'magenta'
                      ? 'border-magenta/20 text-magenta/70 bg-magenta/5'
                      : 'border-yellow/20 text-yellow/70 bg-yellow/5'
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Image + About */}
        <div className="flex flex-col items-center lg:items-end gap-8">
          {/* Profile image with glitch borders */}
          <div ref={imageRef} className="gsap-hidden relative">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Glitch border layers */}
              <div className="absolute inset-0 border-2 border-cyan/40 translate-x-1 -translate-y-1" />
              <div className="absolute inset-0 border-2 border-magenta/20 -translate-x-1 translate-y-1" />
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/images/perfil-nahuel.webp"
                  alt="Nahuel González"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </div>
            </div>
          </div>

          {/* About box */}
          <div
            ref={aboutRef}
            className="gsap-hidden w-full max-w-sm glass border border-dark-border/60 bg-dark-surface/60 p-6 rounded-sm"
          >
            <p className="font-mono text-xs text-cyan/60 tracking-widest uppercase mb-3">
              / {t('about_title')}
            </p>
            <p className="font-body text-sm text-light/60 dark:text-light/50 leading-relaxed">
              {t('about_body')}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
        <ArrowDown size={16} className="text-cyan" />
        <span className="font-mono text-xs text-light/40 tracking-widest">SCROLL</span>
      </div>
    </section>
  )
}
