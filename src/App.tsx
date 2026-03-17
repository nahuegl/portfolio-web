import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import LoadingScreen from './components/ui/LoadingScreen';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import GlitchBackground from './components/ui/GlitchBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Add dark mode by default
    document.documentElement.classList.add('dark');
    
    // Simulate initial loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const isDark = prev === 'dark';
      if (isDark) {
        document.documentElement.classList.remove('dark');
        return 'light';
      } else {
        document.documentElement.classList.add('dark');
        return 'dark';
      }
    });
  };

  if (loading) {
    return (
      <>
        <GlitchBackground />
        <LoadingScreen />
      </>
    );
  }

  return (
    <div className="min-h-screen font-mono relative overflow-hidden text-sm md:text-base">
      <GlitchBackground />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <Hero />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
      </main>

      {/* Decorative background grid overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-color) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}

export default App;
