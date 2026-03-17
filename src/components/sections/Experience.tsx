import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const { t } = useTranslation();

  // Get jobs array from translations
  // Using type assertion since we know the structure of the translations
  const jobs = t('experience.jobs', { returnObjects: true }) as Array<{
    id: string;
    role: string;
    company: string;
    period: string;
    location: string;
    description: string;
    skills: string[];
  }>;

  return (
    <section className="py-16 md:py-24" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="text-[var(--color-brand-cyan)]" size={28} />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase font-mono">
            {t('experience.title')}
          </h2>
          <div className="h-[1px] flex-1 bg-[var(--border-color)] opacity-50 ml-4" />
        </div>

        <div className="relative border-l-2 border-[var(--border-color)] ml-3 md:ml-4 flex flex-col gap-12 pt-4">
          
          {jobs.map((job, index) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              <div className="absolute w-4 h-4 rounded-full bg-[var(--bg-color)] border-2 border-[var(--color-brand-magenta)] left-[-9px] top-1 group-hover:bg-[var(--color-brand-magenta)] group-hover:shadow-[0_0_10px_var(--color-brand-magenta)] transition-all z-10" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl md:text-2xl font-bold font-mono text-[var(--text-color)] group-hover:text-[var(--color-brand-cyan)] transition-colors">
                  {job.role}
                </h3>
                <span className="text-sm font-bold text-[var(--color-brand-cyan)] mt-1 md:mt-0 font-mono tracking-widest">
                  {job.period}
                </span>
              </div>
              
              <div className="text-[var(--text-muted)] font-mono text-sm mb-4">
                <span className="text-[var(--text-color)] font-bold">{job.company}</span> | {job.location}
              </div>

              <p className="text-[var(--text-color)] mb-4 leading-relaxed opacity-90 max-w-3xl">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {job.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-2 py-1 text-xs font-mono font-bold tracking-wider border border-[var(--border-color)] text-[var(--text-muted)] group-hover:border-[var(--color-brand-cyan)]/50 group-hover:text-[var(--color-brand-cyan)] bg-[var(--bg-color)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          
        </div>
      </motion.div>
    </section>
  );
}
