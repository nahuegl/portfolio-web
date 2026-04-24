'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Github, ExternalLink } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects, type Project, type ProjectCategory } from '@/lib/data/projects'
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

type ProjectId =
  | 'portfolio-web'
  | 'data-dashboard'
  | 'crm-optimization'
  | 'pwc-redesign'
  | 'sancor-seguros-redesign'

type ItemTranslation = { tagline: string; description: string; role: string }

function ProjectImage({
  project,
  className,
}: {
  project: Project
  className?: string
}) {
  return (
    <div className={cn('relative overflow-hidden bg-dark-border/20', className)}>
      {project.image && (
        project.image.endsWith('.svg') ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )
      )}
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
      <span className="absolute top-3 right-3 font-mono text-xs px-2 py-0.5 bg-dark/80 border border-dark-border/60 text-light/40 uppercase tracking-wider">
        {project.category}
      </span>
    </div>
  )
}

export function Projects() {
  const t = useTranslations('projects')
  const [activeCategory, setActiveCategory] = useState<'all' | ProjectCategory>('all')
  const containerRef = useRef<HTMLDivElement>(null)

  const itemTranslations: Record<ProjectId, ItemTranslation> = {
    'portfolio-web': {
      tagline: t('items.portfolio-web.tagline'),
      description: t('items.portfolio-web.description'),
      role: t('items.portfolio-web.role'),
    },
    'data-dashboard': {
      tagline: t('items.data-dashboard.tagline'),
      description: t('items.data-dashboard.description'),
      role: t('items.data-dashboard.role'),
    },
    'crm-optimization': {
      tagline: t('items.crm-optimization.tagline'),
      description: t('items.crm-optimization.description'),
      role: t('items.crm-optimization.role'),
    },
    'pwc-redesign': {
      tagline: t('items.pwc-redesign.tagline'),
      description: t('items.pwc-redesign.description'),
      role: t('items.pwc-redesign.role'),
    },
    'sancor-seguros-redesign': {
      tagline: t('items.sancor-seguros-redesign.tagline'),
      description: t('items.sancor-seguros-redesign.description'),
      role: t('items.sancor-seguros-redesign.role'),
    },
  }

  const filtered = projects.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  )

  const featured = filtered.find((p) => p.featured) ?? null
  const rest = filtered.filter((p) => !p.featured || p !== featured)

  // Scroll reveal
  useEffect(() => {
    if (!containerRef.current) return
    const cards = containerRef.current.querySelectorAll('.project-card')
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
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [activeCategory])

  // Re-animate on filter change
  useEffect(() => {
    if (!containerRef.current) return
    const cards = containerRef.current.querySelectorAll('.project-card')
    gsap.fromTo(
      cards,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power3.out' }
    )
  }, [activeCategory])

  // 3D tilt on hover
  useEffect(() => {
    if (!containerRef.current) return
    const cards = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>('.project-card')
    )
    const cleanups: (() => void)[] = []

    cards.forEach((card) => {
      gsap.set(card, { transformPerspective: 1000 })
      const xTo = gsap.quickTo(card, 'rotationY', { duration: 0.4, ease: 'power3.out' })
      const yTo = gsap.quickTo(card, 'rotationX', { duration: 0.4, ease: 'power3.out' })

      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        xTo(((e.clientX - rect.left) / rect.width - 0.5) * 12)
        yTo(-((e.clientY - rect.top) / rect.height - 0.5) * 7)
      }
      const onLeave = () => {
        xTo(0)
        yTo(0)
      }

      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      cleanups.push(() => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      })
    })

    return () => cleanups.forEach((fn) => fn())
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

        <div ref={containerRef}>
          {/* Featured card — full-width horizontal */}
          {featured && (
            <article className="project-card group relative overflow-hidden border border-dark-border/60 bg-dark-surface/40 hover:border-cyan/30 transition-all duration-300 mb-6 flex flex-col md:flex-row">
              <ProjectImage
                project={featured}
                className="h-56 md:h-auto md:w-[44%] flex-shrink-0"
              />
              <div className="p-8 flex flex-col justify-center flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <p className="font-mono text-xs text-cyan/50 tracking-widest uppercase">
                    {itemTranslations[featured.id as ProjectId]?.role ?? featured.role}
                  </p>
                  <span className="font-mono text-xs px-2 py-0.5 border border-cyan/20 text-cyan/40 uppercase tracking-wider">
                    featured
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-light mb-2">
                  {featured.title}
                </h3>
                <p className="font-mono text-xs text-magenta/70 mb-4">
                  {itemTranslations[featured.id as ProjectId]?.tagline ?? featured.tagline}
                </p>
                <p className="font-body text-sm text-light/50 leading-relaxed mb-5">
                  {itemTranslations[featured.id as ProjectId]?.description ?? featured.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {featured.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2 py-0.5 border border-dark-border text-light/30 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {featured.github && (
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs px-4 py-2 border border-dark-border/60 text-light/40 hover:border-cyan/40 hover:text-cyan transition-all duration-200"
                    >
                      <Github size={14} /> Code
                    </a>
                  )}
                  {featured.live && (
                    <a
                      href={featured.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs px-4 py-2 border border-cyan/30 text-cyan/70 hover:bg-cyan/10 transition-all duration-200"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          )}

          {/* Regular grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((project) => {
              const tr = itemTranslations[project.id as ProjectId]
              return (
                <article
                  key={project.id}
                  className="project-card group relative overflow-hidden border border-dark-border/60 bg-dark-surface/40 rounded-sm hover:border-cyan/30 transition-all duration-300"
                >
                  <ProjectImage project={project} className="h-52" />
                  <div className="p-6">
                    <p className="font-mono text-xs text-cyan/50 tracking-widest uppercase mb-1">
                      {tr?.role ?? project.role}
                    </p>
                    <h3 className="font-display text-xl font-semibold text-light mb-2">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-magenta/70 mb-3">
                      {tr?.tagline ?? project.tagline}
                    </p>
                    <p className="font-body text-sm text-light/50 leading-relaxed mb-4 line-clamp-3">
                      {tr?.description ?? project.description}
                    </p>
                    {project.metrics && (
                      <p className="font-mono text-xs text-yellow/60 border-l-2 border-yellow/30 pl-3 mb-4">
                        {project.metrics}
                      </p>
                    )}
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
              )
            })}
          </div>
        </div>

        <p className="text-center font-mono text-xs text-light/25 mt-10 tracking-widest">
          /{' '}{t('wip')}
        </p>
      </div>
    </section>
  )
}
