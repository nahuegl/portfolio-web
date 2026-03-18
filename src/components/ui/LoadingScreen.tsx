import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function LoadingScreen() {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-transparent flex flex-col items-center justify-center font-mono z-50 overflow-hidden select-none">
      
      {/* Glitch Overlay to frame the scene slightly */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHBhdGggZD0iTTAgMEw0IDRNMCA0TDMgME00IDRMMCAzIiBzdHJva2U9InJnYmEoMTMwLDEzMCwxMzAsMC4wNSkiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay" />

      {/* Main minimal loading UI */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 z-10 p-12 bg-[var(--bg-color)]/30 backdrop-blur-md border border-[var(--border-color)]/50 shadow-2xl rounded-sm"
      >
        {/* Spinning tech logo / eye */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-[3px] border-[var(--text-color)] border-t-transparent border-r-transparent rounded-full flex items-center justify-center relative p-2"
        >
            <motion.div 
               animate={{ rotate: -720 }}
               transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
               className="w-full h-full border-2 border-[var(--color-brand-cyan)] border-b-transparent rounded-full flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-[var(--color-brand-magenta)] rounded-full animate-ping" />
            </motion.div>
        </motion.div>

        {/* Minimal text */}
        <h1 className="text-xl md:text-3xl font-black tracking-[0.4em] uppercase text-[var(--text-color)] animate-[glitch_2s_infinite]">
          {t('ui.loading')}
        </h1>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;
