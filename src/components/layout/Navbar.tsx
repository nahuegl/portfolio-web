import { Moon, Sun, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

type NavbarProps = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
};

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-[var(--bg-color)]/80 backdrop-blur-md border-b border-[var(--border-color)]"
    >
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a 
          href="#" 
          className="font-mono text-xl md:text-2xl font-black tracking-tighter"
        >
          {`<nahue_gl />`}
        </a>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 p-2 rounded hover:bg-[var(--text-color)]/10 transition-colors text-[var(--text-color)]/80 hover:text-[var(--text-color)]"
            title={t('ui.lang_switch')}
          >
            <Globe size={18} />
            <span className="font-bold text-sm uppercase">{i18n.language}</span>
          </button>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-[var(--text-color)]/10 transition-colors text-[var(--text-color)]/80 hover:text-[var(--text-color)]"
            title={t('ui.theme_switch')}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
