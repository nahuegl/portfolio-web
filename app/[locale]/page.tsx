import { setRequestLocale } from 'next-intl/server'
import { GlitchBackground } from '@/components/ui/GlitchBackground'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { Education } from '@/components/sections/Education'
import { Certifications } from '@/components/sections/Certifications'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }]
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return (
    <>
      <LoadingScreen />
      <GlitchBackground />
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Education />
          <Certifications />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
