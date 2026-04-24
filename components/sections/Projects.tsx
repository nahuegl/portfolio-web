'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects, type Project } from '@/lib/data/projects'
import { caseStudies } from '@/lib/data/caseStudies'
import { SectionHeader } from '@/components/ui/SectionHeader'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type ProjectId =
  | 'portfolio-web'
  | 'data-dashboard'
  | 'crm-optimization'
  | 'pwc-redesign'
  | 'sancor-seguros-redesign'

type ItemTranslation = { tagline: string; description: string; role: string }

function ProjectImage({ project, className }: { project: Project; className?: string }) {
  const baseClass = 'relative overflow-hidden bg-dark-border/20'
  const finalClass = className ? `${baseClass} ${className}` : baseClass

  return (
    <div className={finalClass}>
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
      <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

export function Projects() {
  const t = useTranslations('projects')
  const locale = useLocale()
  const containerRef = useRef<HTMLDivElement>(null)

  const casePath = (slug: string) =>
    locale === 'en' ? `/projects/${slug}` : `/${locale}/projects/${slug}`

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

  const featured = projects.find((p) => p.featured) ?? null
  const rest = projects.filter((p) => !p.featured || p !== featured)

  // Scroll reveal
  useEffect(() => {
    if (!containerRef.current) return
    const cards = containerRef.current.querySelectorAll('.project-card')
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  // 3D tilt
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
      const onLeave = () => { xTo(0); yTo(0) }

      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      cleanups.push(() => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      })
    })

    return () => cleanups.forEach((fn) => fn())
  }, [])

  const cs = (slug: string) => caseStudies[slug]

  return (
    <section id="projects" className="py-24 px-6 bg-dark-surface/30 dark:bg-dark-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={t('title')} accent={t('subtitle')} />

        <div ref={containerRef}>
          {/* Featured card — full-width horizontal */}
          {featured && (
            <Link href={casePath(featured.id)} className="block mb-6">
              <article className="project-card group relative overflow-hidden border border-dark-border/60 bg-dark-surface/40 hover:border-cyan/30 transition-all duration-300 flex flex-col md:flex-row cursor-pointer">
                <ProjectImage project={featured} className="h-56 md:h-auto md:w-[44%] flex-shrink-0" />
                <div className="p-8 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <p className="font-mono text-xs text-cyan/50 tracking-widest uppercase">
                      {itemTranslations[featured.id as ProjectId]?.role ?? featured.role}
                    </p>
                    {cs(featured.id) && (
                      <span className="font-mono text-xs px-2 py-0.5 border border-cyan/20 text-cyan/40 uppercase tracking-wider">
                        {cs(featured.id).metrics[0].value}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-light mb-2">{featured.title}</h3>
                  <p className="font-mono text-xs text-magenta/70 mb-4">
                    {itemTranslations[featured.id as ProjectId]?.tagline ?? featured.tagline}
                  </p>
                  <p className="font-body text-sm text-light/50 leading-relaxed mb-5 line-clamp-3">
                    {itemTranslations[featured.id as ProjectId]?.description ?? featured.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featured.stack.map((tech) => (
                      <span key={tech} className="font-mono text-xs px-2 py-0.5 border border-dark-border text-light/30 rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan group-hover:gap-3 transition-all duration-200">
                    {t('case_study')} <ArrowRight size={13} />
                  </div>
                </div>
              </article>
            </Link>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((project) => {
              const tr = itemTranslations[project.id as ProjectId]
              return (
                <Link key={project.id} href={casePath(project.id)} className="block">
                  <article className="project-card group relative overflow-hidden border border-dark-border/60 bg-dark-surface/40 rounded-sm hover:border-cyan/30 transition-all duration-300 h-full cursor-pointer">
                    <ProjectImage project={project} className="h-52" />
                    <div className="p-6 flex flex-col">
                      <p className="font-mono text-xs text-cyan/50 tracking-widest uppercase mb-1">
                        {tr?.role ?? project.role}
                      </p>
                      <h3 className="font-display text-xl font-semibold text-light mb-2">{project.title}</h3>
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
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.stack.map((tech) => (
                          <span key={tech} className="font-mono text-xs px-2 py-0.5 border border-dark-border text-light/30 rounded-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex items-center gap-2 font-mono text-xs text-cyan/60 group-hover:text-cyan group-hover:gap-3 transition-all duration-200">
                        {t('case_study')} <ArrowRight size={13} />
                      </div>
                    </div>
                  </article>
                </Link>
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
