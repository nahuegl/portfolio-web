import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, ShieldAlert, Cpu } from 'lucide-react';

export default function Certifications() {
  const { t } = useTranslation();

  const featured = t('certifications.featured', { returnObjects: true }) as string[];
  const others = t('certifications.others', { returnObjects: true }) as string[];

  return (
    <section className="py-16 md:py-24" id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <Award className="text-[var(--color-brand-cyan)]" size={28} />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase font-mono">
            {t('certifications.title')}
          </h2>
          <div className="h-[1px] flex-1 bg-[var(--border-color)] opacity-50 ml-4" />
        </div>

        {/* Featured Certifications */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <ShieldAlert className="text-[var(--color-brand-magenta)] animate-pulse" size={20} />
            <h3 className="text-xl font-bold font-mono uppercase tracking-wider text-[var(--color-brand-magenta)]">
              {t('certifications.featured_title')}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((cert, index) => (
              <motion.div 
                key={cert}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 border border-[var(--color-brand-cyan)] bg-[var(--color-brand-cyan)]/5 hover:bg-[var(--color-brand-cyan)]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all group flex items-start gap-3"
              >
                <Cpu className="text-[var(--color-brand-cyan)] shrink-0 mt-0.5" size={20} />
                <span className="font-mono text-[var(--text-color)] font-bold group-hover:text-[var(--color-brand-cyan)] transition-colors">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-bold font-mono uppercase tracking-wider text-[var(--text-muted)]">
              {t('certifications.others_title')}
            </h3>
            <div className="h-[1px] flex-1 bg-[var(--border-color)] opacity-30" />
          </div>

          <div className="flex flex-wrap gap-2">
            {others.map((cert, index) => (
              <motion.div 
                key={cert}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-3 py-2 text-xs md:text-sm font-mono border border-[var(--border-color)] text-[var(--text-color)]/80 hover:text-[var(--text-color)] hover:border-[var(--color-brand-magenta)] bg-[var(--bg-color)] transition-colors cursor-crosshair"
              >
                <span className="text-[var(--color-brand-magenta)] mr-2">&gt;</span>
                {cert}
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
}
