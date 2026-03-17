import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Terminal, Lock } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="text-[var(--color-brand-cyan)]" size={28} />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase font-mono">
            {t('projects.title')}
          </h2>
          <div className="h-[1px] flex-1 bg-[var(--border-color)] opacity-50 ml-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative group overflow-hidden border border-[var(--border-color)] p-8 max-w-4xl mx-auto bg-neutral-900 min-h-[300px] flex items-center justify-center">
          
          <div className="absolute inset-0 bg-black/60 z-10 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-6 border-2 border-transparent transition-all duration-500 hover:border-[var(--color-brand-magenta)]">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 border-2 border-[var(--color-brand-magenta)] text-[var(--color-brand-magenta)] rounded-full mb-6 relative"
            >
              <Lock size={32} />
              <div className="absolute inset-0 border-2 border-[var(--color-brand-magenta)] rounded-full animate-ping opacity-20" />
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-black font-mono tracking-widest text-[#f5f5f5] mb-2 uppercase animate-[glitch_3s_infinite]">
              {t('projects.subtitle')}
            </h3>
            
            <p className="text-[var(--color-brand-cyan)] font-mono text-sm max-w-md mx-auto">
              &gt; {t('projects.coming_soon')}
            </p>
          </div>

          {/* Placeholder grid representing "under construction" projects */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity grid grid-cols-2 gap-4 p-4 pointer-events-none">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-[var(--color-brand-cyan)] bg-[var(--color-brand-cyan)]/5 h-32 md:h-auto font-mono text-[10px] p-2 flex items-start break-all overflow-hidden text-[var(--color-brand-cyan)]">
                {`0x${Math.random().toString(16).substring(2, 10).toUpperCase()} INIT_SEQ...`}
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
