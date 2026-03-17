import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const { t } = useTranslation();

  const educationItems = t('education.items', { returnObjects: true }) as Array<{
    id: string;
    degree: string;
    institution: string;
    period: string;
    description: string;
    skills: string[];
  }>;

  return (
    <section className="py-16 md:py-24" id="education">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="text-[var(--color-brand-cyan)]" size={28} />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase font-mono">
            {t('education.title')}
          </h2>
          <div className="h-[1px] flex-1 bg-[var(--border-color)] opacity-50 ml-4" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education timeline */}
          <div className="relative border-l-2 border-[var(--border-color)] ml-3 md:ml-4 flex flex-col gap-10">
            {educationItems.map((edu, index) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 group"
              >
                <div className="absolute w-4 h-4 rounded-full bg-[var(--color-brand-cyan)] border-2 border-[var(--bg-color)] left-[-9px] top-1 group-hover:shadow-[0_0_10px_var(--color-brand-cyan)] transition-all z-10" />
                
                <h3 className="text-xl md:text-2xl font-bold font-mono text-[var(--color-brand-cyan)] mb-1">
                  {edu.degree}
                </h3>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                  <span className="text-lg font-bold text-[var(--text-color)]">
                    {edu.institution}
                  </span>
                  <span className="text-sm font-mono text-[var(--text-muted)] tracking-widest mt-1 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                
                <p className="text-[var(--text-color)] mb-4 leading-relaxed opacity-90 max-w-2xl">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-2 py-1 text-xs font-mono font-bold tracking-wider bg-[var(--color-brand-cyan)]/5 border border-[var(--color-brand-cyan)]/30 text-[var(--text-muted)] group-hover:text-[var(--color-brand-cyan)] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
