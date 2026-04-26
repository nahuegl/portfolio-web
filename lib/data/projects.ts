export type ProjectCategory = 'web' | 'data' | 'design'

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  role: string
  stack: string[]
  metrics?: string
  github?: string
  live?: string
  image: string
  category: ProjectCategory
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'portfolio-web',
    title: 'Portfolio Web',
    tagline: 'Premium personal portfolio built from scratch',
    description:
      'Designed and built a high-performance portfolio site with Next.js 14 App Router, GSAP ScrollTrigger animations, dark/light theming, bilingual support (EN/ES), and optimized Core Web Vitals. The project itself is a case study in premium frontend architecture.',
    role: 'Frontend Engineer',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'GSAP', 'next-intl', 'Vercel'],
    github: 'https://github.com/nahuegl/portfolio-web',
    live: 'https://nahuelgl-portfolio.vercel.app',
    image: '/images/project-portfolio.svg',
    category: 'web',
    featured: true,
  },
  {
    id: 'claims-analyst-agent',
    title: 'Claims Analyst Agent',
    tagline: 'AI insurance claims analyst — 9 years of expertise, on demand',
    description:
      'AI agent that evaluates insurance claims by applying technical and legal coverage criteria. Accepts case descriptions, policy type, and circumstances — then delivers a structured resolution recommendation and formal report. Built on 9 years of real claims experience at Grupo Sancor Seguros.',
    role: 'AI Engineer · Domain Expert',
    stack: ['Next.js', 'Claude API', 'Vercel AI SDK', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/nahuegl/claims-analyst-agent',
    live: 'https://claims-analyst-agent.vercel.app',
    image: '/images/project-claims.svg',
    category: 'data',
    featured: true,
  },
  {
    id: 'k1-tax-assistant',
    title: 'K-1 Tax Assistant',
    tagline: 'AI guide for Schedule K-1 & K-3 partnership forms',
    description:
      'AI assistant that helps investors navigate Schedule K-1 and K-3 partnership tax forms. Explains each field in plain language, detects common inconsistencies, and guides users on where to transfer values in their tax return. Powered by real-world expertise supporting US clients at PwC Argentina.',
    role: 'AI Engineer · Domain Expert',
    stack: ['Next.js', 'Claude API', 'Vercel AI SDK', 'TypeScript', 'pdf-parse'],
    github: 'https://github.com/nahuegl/k1-tax-assistant',
    live: 'https://k1-tax-assistant.vercel.app',
    image: '/images/project-k1.svg',
    category: 'data',
    featured: true,
  },
  {
    id: 'pwc-redesign',
    title: 'PwC Argentina Redesign',
    tagline: 'Full corporate redesign — editorial, animated, bilingual',
    description:
      'Complete redesign of pwc.com.ar respecting PwC global brand identity while elevating the experience with GSAP scroll animations, Lenis smooth scroll, dark/light toggle, and EN/ES bilingual support. Built with Next.js 15 App Router and strict TypeScript.',
    role: 'Frontend Engineer',
    stack: ['Next.js 15', 'TypeScript', 'GSAP', 'Lenis', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/nahuegl/pwc-redesign',
    live: 'https://pwc-redesign.vercel.app',
    image: '/images/project-pwc.svg',
    category: 'web',
    featured: false,
  },
  {
    id: 'sancor-seguros-redesign',
    title: 'Sancor Seguros Redesign',
    tagline: 'Corporate insurance web — trilingual, animated, accessible',
    description:
      'Full redesign of sancorseguros.com.ar with a modern corporate aesthetic. Features scroll-driven GSAP animations, Framer Motion micro-interactions, Lenis smooth scroll, dark/light theming, and trilingual support (ES/PT/EN) via next-intl.',
    role: 'Frontend Engineer',
    stack: ['Next.js 15', 'TypeScript', 'GSAP', 'Framer Motion', 'Lenis', 'next-intl'],
    github: 'https://github.com/nahuegl/sancor-seguros-redesign',
    image: '/images/project-sancor.svg',
    category: 'web',
    featured: false,
  },
]
