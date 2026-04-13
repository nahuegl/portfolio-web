export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  duration: string
  location: string
  description: string
  skills: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'pwc',
    role: 'Contact Center Specialist',
    company: 'PwC Argentina',
    period: 'Dec 2022 – Jun 2025',
    duration: '2 yrs 7 mos',
    location: 'Argentina · Hybrid',
    description:
      'Provided support to US clients on tax compliance (Form K1) and account management, ensuring high standards of regulatory accuracy. Reduced average response times by 20% by optimizing workflows, maintaining a 95% Customer Satisfaction (CSAT) score. Managed data quality in CRM to ensure metric compliance and a consistent user experience.',
    skills: ['CRM', 'Process Optimization', 'Data Analysis', 'Regulatory Compliance', 'Customer Service'],
  },
  {
    id: 'sancor',
    role: 'Insurance Operations & Process Analyst',
    company: 'Grupo Sancor Seguros',
    period: 'Jan 2013 – Feb 2022',
    duration: '9 yrs 2 mos',
    location: 'Argentina · On-site',
    description:
      'Managed the comprehensive evaluation of claims, coordinating with adjusters and applying technical and legal criteria for effective resolution. Led document management and digitization initiatives ensuring efficient file organization and transition to paperless processes. Monitored vendor payments and performed billing audits, reducing administrative time by 30%.',
    skills: ['Claims Management', 'Document Digitization', 'Process Analysis', 'Vendor Management', 'Problem Solving'],
  },
  {
    id: 'escribania',
    role: 'Administrative Assistant',
    company: 'Escribanía Boymorto - Pereiro',
    period: 'Jul 2011 – Jan 2013',
    duration: '1 yr 7 mos',
    location: 'Argentina · On-site',
    description:
      'Managed legal documentation and drafted certifications, ensuring strict compliance with banking and regulatory standards. Guaranteed the proper processing of procedures with a high level of accuracy and confidentiality.',
    skills: ['Document Management', 'Banking Regulations', 'Attention to Detail'],
  },
  {
    id: 'al',
    role: 'Administrative Assistant',
    company: 'AL: Organización de Servicios Judiciales',
    period: 'Feb 2008 – Mar 2011',
    duration: '3 yrs 2 mos',
    location: 'Argentina · On-site',
    description:
      'Provided legal-administrative support for judicial files and organized complex legal documentation. Collaborated with legal teams to ensure compliance with current regulatory frameworks.',
    skills: ['Legal Support', 'Organization', 'Teamwork'],
  },
]
