import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import perfilImg from '../../assets/perfil-nahuel.png';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-center gap-12 pt-16 mt-8 md:mt-0">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-48 h-48 md:w-64 md:h-64 relative group flex-shrink-0 mx-auto md:mx-0"
      >
        {/* Watch Dogs Glitch Effect Borders */}
        <div className="absolute inset-0 border border-[var(--color-brand-cyan)] opacity-40 translate-x-2 -translate-y-2 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-300" />
        <div className="absolute inset-0 border border-[var(--color-brand-magenta)] opacity-30 -translate-x-2 translate-y-2 group-hover:-translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
        
        {/* Main image container */}
        <div className="absolute inset-0 overflow-hidden bg-neutral-900 border border-[var(--border-color)]">
          {/* Using CSS filter + mix-blend to achieve hacker style visually */}
          <img 
            src={perfilImg} 
            alt="Nahuel"
            className="w-full h-full object-cover grayscale mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal transition-all duration-500 ease-in-out" 
          />
          <div className="absolute inset-0 bg-[#00ffff] mix-blend-overlay opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity" />
        </div>
      </motion.div>

      <div className="flex flex-col gap-6 text-center md:text-left flex-1 h-full z-10 w-full mb-8 lg:mb-0 max-w-[600px] md:max-w-none">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-block border border-[var(--color-brand-cyan)] bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
            {t('hero.role')}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 leading-[1.1]">
            <span className="opacity-90">Nahuel</span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-magenta)]">
              &gt; system_admin
            </span>
          </h1>

          <p className="text-lg text-[var(--text-muted)] mt-2 font-mono">
            {t('hero.tagline')}
          </p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="bg-[var(--text-color)]/5 border border-[var(--border-color)] p-6 my-4 w-full"
        >
          <h2 className="font-bold text-[var(--color-brand-cyan)] mb-4 uppercase tracking-widest font-mono text-sm">{t('about.title')}</h2>
          <p className="text-[var(--text-color)] mb-4">{t('about.p1')}</p>
          <div className="text-sm font-mono mt-4 space-y-2">
            <h3 className="font-bold text-[var(--color-brand-magenta)]">{t('about.stack_title')}</h3>
            <p>{t('about.stack_frontend')}</p>
            <p>{t('about.stack_data')}</p>
            <p>{t('about.stack_tools')}</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2"
        >
          <a
            href="mailto:glnahuel17@gmail.com"
            className="flex items-center gap-2 group border border-[var(--border-color)] hover:border-[var(--color-brand-cyan)] bg-transparent hover:bg-[var(--color-brand-cyan)]/10 px-5 py-3 transition-colors text-sm uppercase tracking-widest font-bold"
          >
            <Mail size={16} />
            {t('hero.email')}
          </a>

          <a 
            href="https://github.com/nahuegl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 border border-[var(--border-color)] hover:border-[var(--color-brand-magenta)] hover:text-[var(--color-brand-magenta)] hover:bg-[var(--color-brand-magenta)]/10 transition-colors"
          >
            <Github size={20} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/nahuelgl17/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 border border-[var(--border-color)] hover:border-[var(--color-brand-cyan)] hover:text-[var(--color-brand-cyan)] hover:bg-[var(--color-brand-cyan)]/10 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>

    </section>
  );
}
