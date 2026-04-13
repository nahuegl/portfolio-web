'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { GraduationCap } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { education } from '@/lib/data/education'
import { SectionHeader } from '@/components/ui/SectionHeader'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function Education() {
  const t = useTranslations('education')
  const listRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    if (!listRef.current) return
    const items = listRef.current.querySelectorAll('.edu-item')

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
    <section id="education" className="py-24 px-6 bg-dark-surface/30 dark:bg-dark-surface/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title={t('title')} />

        <ol ref={listRef} className="space-y-6">
          {education.map((item) => (
            <li key={item.id} className="edu-item">
              <div className="glass border border-cyan/10 bg-dark-surface/40 p-6 rounded-sm hover:border-cyan/20 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-light">{item.degree}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <GraduationCap size={12} className="text-cyan/60" />
                      <span className="font-mono text-sm text-cyan">{item.institution}</span>
                    </div>
                  </div>
                  <p className="font-mono text-xs text-light/40 flex-shrink-0">{item.period}</p>
                </div>

                <p className="font-body text-sm text-light/55 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2 py-0.5 border border-cyan/10 text-cyan/50 rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
