'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Briefcase } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience } from '@/lib/data/experience'
import { SectionHeader } from '@/components/ui/SectionHeader'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type ExperienceItemId = 'pwc' | 'sancor' | 'escribania' | 'al'

export function Experience() {
  const t = useTranslations('experience')
  const listRef = useRef<HTMLOListElement>(null)

  const itemTranslations: Record<ExperienceItemId, { role: string; period: string; duration: string; location: string; description: string }> = {
    pwc: {
      role: t('items.pwc.role'),
      period: t('items.pwc.period'),
      duration: t('items.pwc.duration'),
      location: t('items.pwc.location'),
      description: t('items.pwc.description'),
    },
    sancor: {
      role: t('items.sancor.role'),
      period: t('items.sancor.period'),
      duration: t('items.sancor.duration'),
      location: t('items.sancor.location'),
      description: t('items.sancor.description'),
    },
    escribania: {
      role: t('items.escribania.role'),
      period: t('items.escribania.period'),
      duration: t('items.escribania.duration'),
      location: t('items.escribania.location'),
      description: t('items.escribania.description'),
    },
    al: {
      role: t('items.al.role'),
      period: t('items.al.period'),
      duration: t('items.al.duration'),
      location: t('items.al.location'),
      description: t('items.al.description'),
    },
  }

  useEffect(() => {
    if (!listRef.current) return
    const items = listRef.current.querySelectorAll('.timeline-item')

    gsap.fromTo(
      items,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title={t('title')} />

        <ol ref={listRef} className="space-y-6">
          {experience.map((item) => {
            const tr = itemTranslations[item.id as ExperienceItemId]
            return (
              <li key={item.id} className="timeline-item">
                <div className="glass border border-dark-border/40 bg-dark-surface/40 p-6 rounded-sm hover:border-cyan/20 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-light">{tr?.role ?? item.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={12} className="text-cyan/60" />
                        <span className="font-mono text-sm text-cyan">{item.company}</span>
                        <span className="text-light/30 text-xs">·</span>
                        <span className="font-mono text-xs text-light/40">{tr?.location ?? item.location}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-mono text-xs text-light/50">{tr?.period ?? item.period}</p>
                      <p className="font-mono text-xs text-magenta/60 mt-0.5">{tr?.duration ?? item.duration}</p>
                    </div>
                  </div>

                  <p className="font-body text-sm text-light/55 leading-relaxed mb-4">
                    {tr?.description ?? item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-2 py-0.5 border border-light/10 text-light/40 rounded-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
