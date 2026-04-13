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
    id: 'data-dashboard',
    title: 'Data Analytics Dashboard',
    tagline: 'Business intelligence dashboard for insurance KPIs',
    description:
      'Power BI dashboard tracking key performance indicators for insurance operations at Grupo Sancor Seguros. Centralized claims processing metrics, vendor payment tracking, and document digitization progress — replacing manual Excel reporting.',
    role: 'Data Analyst',
    stack: ['Power BI', 'DAX', 'Excel', 'SQL', 'Azure'],
    image: '/images/project-dashboard.svg',
    category: 'data',
    featured: true,
  },
  {
    id: 'crm-optimization',
    title: 'CRM Workflow Optimization',
    tagline: '-20% response time · 95% CSAT at PwC',
    description:
      'Led the redesign of CRM workflows and data entry processes for PwC Argentina\'s Contact Center. Identified bottlenecks in US client support queues (Form K1 tax compliance), implemented standardized response templates, and improved data quality metrics. Resulted in 20% reduction in average response time and sustained 95% CSAT score.',
    role: 'Process Analyst & Frontend Support',
    stack: ['CRM', 'Process Design', 'Data Analysis', 'Excel', 'Power BI'],
    metrics: '-20% response time · 95% CSAT · 30% admin reduction',
    image: '/images/project-crm.svg',
    category: 'data',
    featured: true,
  },
]
