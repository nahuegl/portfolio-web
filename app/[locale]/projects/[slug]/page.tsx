import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { caseStudies } from '@/lib/data/caseStudies'
import { CaseStudyPage } from '@/components/sections/CaseStudyPage'

interface Props {
  params: { locale: string; slug: string }
}

export function generateStaticParams() {
  const locales = ['en', 'es']
  const slugs = Object.keys(caseStudies)
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = caseStudies[params.slug]
  if (!cs) return {}
  const lang = params.locale as 'en' | 'es'
  const content = cs.content[lang] ?? cs.content.en
  return {
    title: `${cs.title} — Nahuel González`,
    description: content.problem.slice(0, 160),
  }
}

export default function Page({ params }: Props) {
  setRequestLocale(params.locale)

  const cs = caseStudies[params.slug]
  if (!cs) notFound()

  const lang = (params.locale === 'es' ? 'es' : 'en') as 'en' | 'es'

  return <CaseStudyPage caseStudy={cs} lang={lang} locale={params.locale} />
}
