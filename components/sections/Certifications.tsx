'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Award } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { certifications } from '@/lib/data/certifications'
import { SectionHeader } from '@/components/ui/SectionHeader'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function Certifications() {
  const t = useTranslations('certifications')
  const featuredRef = useRef<HTMLDivElement>(null)
  const additionalRef = useRef<HTMLDivElement>(null)

  const featured = certifications.filter((c) => c.featured)
  const additional = certifications.filter((c) => !c.featured)

  useEffect(() => {
    const refs = [featuredRef.current, additionalRef.current].filter(Boolean)
    refs.forEach((el) => {
      if (!el) return
      gsap.fromTo(
        el.querySelectorAll('.cert-item'),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title={t('title')} />

        {/* Featured */}
        <p className="font-mono text-xs text-light/30 tracking-widest uppercase mb-4">
          {t('featured')}
        </p>
        <div ref={featuredRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {featured.map((cert) => (
            <div
              key={cert.id}
              className="cert-item glass border border-cyan/20 bg-dark-surface/40 p-5 rounded-sm hover:border-cyan/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center border border-cyan/20 rounded-sm group-hover:border-cyan/40 transition-colors flex-shrink-0">
                  <Award size={16} className="text-cyan/60" />
                </div>
                <div>
                  <p className="font-body text-sm text-light/80 leading-tight mb-1">{cert.title}</p>
                  <p className="font-mono text-xs text-cyan/50">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional */}
        <p className="font-mono text-xs text-light/30 tracking-widest uppercase mb-4">
          {t('more')}
        </p>
        <div ref={additionalRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {additional.map((cert) => (
            <div
              key={cert.id}
              className="cert-item border border-dark-border/40 p-4 rounded-sm hover:border-light/20 transition-colors duration-200"
            >
              <p className="font-body text-xs text-light/50 leading-snug mb-1">{cert.title}</p>
              <p className="font-mono text-xs text-light/25">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
