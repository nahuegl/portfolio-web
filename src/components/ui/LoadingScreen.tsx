import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function LoadingScreen() {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.floor(Math.random() * 15);
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center font-mono z-50 overflow-hidden select-none text-white">
      {/* Glitching overlay text effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1, 0.8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        className="text-[var(--color-brand-cyan)] absolute text-opacity-10 pointer-events-none tracking-widest text-[16vmax] font-black -rotate-12 translate-x-[-10vw]"
      >
        SYS.REQ
      </motion.div>

      <div className="w-full max-w-md px-8 z-10 flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <h1 className="text-xl md:text-2xl font-bold tracking-[0.2em] text-[var(--color-brand-cyan)] animate-[glitch_2s_infinite]">
            {progress < 100 ? t('ui.loading') : t('ui.access_granted')}
          </h1>
          <span className="text-[var(--color-brand-cyan)] opacity-70 mb-1">
            {Math.min(progress, 100)}%
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="h-1 w-full bg-neutral-900 border border-[var(--color-brand-cyan)]/20 relative overflow-hidden">
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            className="absolute top-0 left-0 bottom-0 bg-[var(--color-brand-cyan)]"
          />
        </div>

        {/* Console output emulation */}
        <div className="font-mono text-[10px] sm:text-xs text-green-500 opacity-60 flex flex-col gap-1">
          <p>&gt; initialize system...</p>
          {progress > 20 && <p>&gt; loading i18n modules: [OK]</p>}
          {progress > 50 && <p>&gt; fetching user data [nahuegl]...</p>}
          {progress > 80 && <p>&gt; establishing secure connection...</p>}
          {progress === 100 && <p className="text-[var(--color-brand-cyan)]">&gt; connection established.</p>}
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
