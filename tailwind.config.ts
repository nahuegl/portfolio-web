import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#0bd3d3',
          dark: '#08a8a8',
        },
        magenta: {
          DEFAULT: '#f92672',
          dark: '#c61d5a',
        },
        yellow: {
          DEFAULT: '#f4dd51',
        },
        dark: {
          DEFAULT: '#09090b',
          surface: '#111113',
          border: '#1f1f23',
        },
        light: {
          DEFAULT: '#e2e8f0',
          surface: '#f8fafc',
          border: '#cbd5e1',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'grid-dark': 'radial-gradient(circle, #1f1f23 1px, transparent 1px)',
        'grid-light': 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
      animation: {
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'glitch': 'glitch 3s steps(1) infinite',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
        glitch: {
          '0%, 95%, 100%': { transform: 'translate(0)' },
          '96%': { transform: 'translate(-2px, 1px)' },
          '97%': { transform: 'translate(2px, -1px)' },
          '98%': { transform: 'translate(-1px, 2px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
