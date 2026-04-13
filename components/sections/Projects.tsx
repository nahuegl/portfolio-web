'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Github, ExternalLink } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects, type ProjectCategory } from '@/lib/data/projects'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const categories: { key: 'all' | ProjectCategory; label: string }[] = [
  { key: 'all', label: 'all' },
  { key: 'web', label: 'web' },
  { key: 'data', label: 'data' },
  { key: 'design', label: 'design' },
]

export function Projects() {
  const t = useTranslations('projects')
  const [activeCategory, setActiveCategory] = useState<'all' | ProjectCategory>('all')
  const gridRef = useRef<HTMLDivElement>(null)

  const filtered = projects.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  )

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.project-card')

    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [activeCategory])

  // Re-animate on filter change
  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.project-card')
    gsap.fromTo(
      cards,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power3.out' }
    )
  }, [activeCategory])

  return (
    <section id="projects" className="py-24 px-6 bg-dark-surface/30 dark:bg-dark-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={t('title')} accent={t('subtitle')} />

        {/* Category filter */}
        <div className="flex items-center gap-2 mb-10 flex-wrap">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={cn(
                'font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200',
                activeCategory === key
                  ? 'border-cyan bg-cyan/10 text-cyan'
                  : 'border-dark-border text-light/40 hover:border-light/30 hover:text-light/60'
              )}
            >
              {t(label as 'all' | 'web' | 'data' | 'design')}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <article key={project.id} className="project-card group relative overflow-hidden border border-dark-border/60 bg-dark-surface/40 rounded-sm hover:border-cyan/30 transition-all duration-300">
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-dark-border/20">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-cyan/40 text-cyan hover:bg-cyan/10 transition-colors duration-200"
                      aria-label="View code"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-cyan/40 text-cyan hover:bg-cyan/10 transition-colors duration-200"
                      aria-label="View live"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                {/* Category badge */}
                <span className="absolute top-3 right-3 font-mono text-xs px-2 py-0.5 bg-dark/80 border border-dark-border/60 text-light/40 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="font-mono text-xs text-cyan/50 tracking-widest uppercase mb-1">
                  {project.role}
                </p>
                <h3 className="font-display text-xl font-semibold text-light mb-2">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-magenta/70 mb-3">{project.tagline}</p>
                <p className="font-body text-sm text-light/50 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {project.metrics && (
                  <p className="font-mono text-xs text-yellow/60 border-l-2 border-yellow/30 pl-3 mb-4">
                    {project.metrics}
                  </p>
                )}

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2 py-0.5 border border-dark-border text-light/30 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* WIP note */}
        <p className="text-center font-mono text-xs text-light/25 mt-10 tracking-widest">
          /{' '}{t('wip')}
        </p>
      </div>
    </section>
  )
}
