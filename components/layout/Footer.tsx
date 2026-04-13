import { useTranslations } from 'next-intl'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-border/40 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-light/30">
          <span className="text-cyan">{'<nahue_gl />'}</span>
          {' · '}
          {t('built')}
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/nahuegl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light/40 hover:text-cyan transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/nahuelgl17/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light/40 hover:text-cyan transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:glnahuel17@gmail.com"
            className="text-light/40 hover:text-cyan transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
        <p className="font-mono text-xs text-light/20">
          © {year} Nahuel González. {t('rights')}
        </p>
      </div>
    </footer>
  )
}
