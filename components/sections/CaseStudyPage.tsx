'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { CaseStudy } from '@/lib/data/caseStudies'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface Props {
  caseStudy: CaseStudy
  lang: 'en' | 'es'
  locale: string
}

const labels = {
  en: {
    back: 'Back to Projects',
    problem: 'The Problem',
    context: 'Context',
    process: 'Process',
    results: 'Results',
    stack: 'Stack',
    viewCode: 'View Code',
    viewLive: 'View Live',
  },
  es: {
    back: 'Volver a Proyectos',
    problem: 'El Problema',
    context: 'Contexto',
    process: 'Proceso',
    results: 'Resultados',
    stack: 'Stack',
    viewCode: 'Ver Código',
    viewLive: 'Ver Live',
  },
}

export function CaseStudyPage({ caseStudy: cs, lang, locale }: Props) {
  const content = cs.content[lang]
  const l = labels[lang]
  const backPath = locale === 'en' ? '/#projects' : `/${locale}/#projects`

  const heroRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current || !bodyRef.current) return

    const heroEls = heroRef.current.querySelectorAll('.anim-hero')
    gsap.fromTo(
      heroEls,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
    )

    const sections = bodyRef.current.querySelectorAll('.anim-section')
    sections.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none none' },
        }
      )
    })

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()) }
  }, [])

  return (
    <main className="min-h-screen bg-dark text-light pt-24 pb-32 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Back link */}
        <Link href={backPath}
          className="inline-flex items-center gap-2 font-mono text-xs text-light/40 hover:text-cyan transition-colors duration-200 mb-12 tracking-widest uppercase">
          <ArrowLeft size={13} /> {l.back}
        </Link>

        {/* Hero */}
        <div ref={heroRef} className="mb-16">
          <p className="anim-hero font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: cs.accent }}>
            {content.company} · {content.period}
          </p>
          <h1 className="anim-hero font-display text-4xl md:text-5xl font-semibold text-light leading-tight mb-6">
            {cs.title}
          </h1>

          {/* Metrics */}
          <div className="anim-hero flex flex-wrap gap-4 mb-8">
            {cs.metrics.map((m) => (
              <div key={m.label}
                className="flex flex-col items-center px-5 py-3 border border-dark-border/60 bg-dark-surface/40 min-w-[80px]">
                <span className="font-display text-xl font-bold" style={{ color: cs.accent }}>
                  {m.value}
                </span>
                <span className="font-mono text-xs text-light/40 uppercase tracking-widest mt-0.5">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="anim-hero relative h-64 md:h-80 overflow-hidden border border-dark-border/60">
            <img
              src={cs.image}
              alt={cs.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0"
              style={{ background: `linear-gradient(to bottom, transparent 60%, rgba(9,9,11,0.9) 100%)` }} />
          </div>
        </div>

        {/* Body */}
        <div ref={bodyRef} className="space-y-16">

          {/* Problem */}
          <div className="anim-section">
            <p className="font-mono text-xs tracking-widest uppercase mb-4 pb-2 border-b border-dark-border/40"
              style={{ color: cs.accent }}>
              01 / {l.problem}
            </p>
            <p className="font-body text-lg text-light/80 leading-relaxed">
              {content.problem}
            </p>
          </div>

          {/* Context */}
          <div className="anim-section">
            <p className="font-mono text-xs tracking-widest uppercase mb-4 pb-2 border-b border-dark-border/40"
              style={{ color: cs.accent }}>
              02 / {l.context}
            </p>
            <p className="font-body text-base text-light/60 leading-relaxed">
              {content.context}
            </p>
          </div>

          {/* Process */}
          <div className="anim-section">
            <p className="font-mono text-xs tracking-widest uppercase mb-8 pb-2 border-b border-dark-border/40"
              style={{ color: cs.accent }}>
              03 / {l.process}
            </p>
            <div className="space-y-8">
              {content.process.map((step, i) => (
                <div key={i} className="flex gap-6 md:gap-10">
                  <span className="font-mono text-xs text-dark-border mt-1 flex-shrink-0 w-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-light mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-light/50 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="anim-section">
            <p className="font-mono text-xs tracking-widest uppercase mb-8 pb-2 border-b border-dark-border/40"
              style={{ color: cs.accent }}>
              04 / {l.results}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.results.map((r, i) => (
                <div key={i} className="p-5 border border-dark-border/60 bg-dark-surface/30">
                  <p className="font-mono text-sm font-bold mb-2" style={{ color: cs.accent }}>
                    {r.metric}
                  </p>
                  <p className="font-body text-sm text-light/50 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stack + Links */}
          <div className="anim-section pt-6 border-t border-dark-border/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-3 text-light/30">
                {l.stack}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cs.stack.map((tech) => (
                  <span key={tech}
                    className="font-mono text-xs px-2 py-0.5 border border-dark-border text-light/30 rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              {cs.github && (
                <a href={cs.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs px-4 py-2 border border-dark-border/60 text-light/40 hover:border-cyan/40 hover:text-cyan transition-all duration-200">
                  <Github size={14} /> {l.viewCode}
                </a>
              )}
              {cs.live && (
                <a href={cs.live} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs px-4 py-2 border text-cyan/70 hover:bg-cyan/10 transition-all duration-200"
                  style={{ borderColor: `${cs.accent}60` }}>
                  <ExternalLink size={14} /> {l.viewLive}
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
