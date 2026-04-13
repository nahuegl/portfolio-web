export interface Certification {
  id: string
  title: string
  issuer: string
  featured: boolean
  icon?: string
}

export const certifications: Certification[] = [
  {
    id: 'azure-ai',
    title: 'Azure AI Essentials Professional Certificate',
    issuer: 'Microsoft',
    featured: true,
    icon: 'microsoft',
  },
  {
    id: 'sap-business',
    title: 'Foundations of Business Analysis',
    issuer: 'SAP',
    featured: true,
    icon: 'sap',
  },
  {
    id: 'ef-set',
    title: 'EF SET English Certificate 81/100 (C2 Proficient)',
    issuer: 'EF SET',
    featured: true,
    icon: 'efset',
  },
  {
    id: 'ai-leaders',
    title: 'Artificial Intelligence for Business Leaders',
    issuer: 'Microsoft',
    featured: true,
    icon: 'microsoft',
  },
  {
    id: 'sap-pro',
    title: 'Professional Fundamentals',
    issuer: 'SAP',
    featured: false,
  },
  {
    id: 'ms-copilot',
    title: 'Copilot for Productivity',
    issuer: 'Microsoft',
    featured: false,
  },
  {
    id: 'ms-sysadmin',
    title: 'Fundamentals of Systems Administration',
    issuer: 'Microsoft',
    featured: false,
  },
  {
    id: 'ms-genai',
    title: 'Professional Foundations of Generative AI',
    issuer: 'Microsoft',
    featured: false,
  },
  {
    id: 'ms-bizanalysis',
    title: 'Professional Fundamentals of Business Analysis',
    issuer: 'Microsoft',
    featured: false,
  },
  {
    id: 'ms-admin',
    title: 'Professional Fundamentals of Administrative Assistance',
    issuer: 'Microsoft',
    featured: false,
  },
  {
    id: 'ms-pm',
    title: 'Professional Foundations of Project Management',
    issuer: 'Microsoft',
    featured: false,
  },
  {
    id: 'ms-software',
    title: 'Professional Fundamentals of Software Development',
    issuer: 'Microsoft',
    featured: false,
  },
  {
    id: 'ms-sustainable',
    title: 'Professional Foundations in Sustainable Technology',
    issuer: 'Microsoft',
    featured: false,
  },
  {
    id: 'ms-humanskills',
    title: 'Human Skills in the AI Era',
    issuer: 'Microsoft',
    featured: false,
  },
  {
    id: 'ms-ai-managers',
    title: 'Artificial Intelligence for Managers',
    issuer: 'Microsoft',
    featured: false,
  },
  {
    id: 'ms-security',
    title: 'Professional Certificate of Security Fundamentals',
    issuer: 'Microsoft',
    featured: false,
  },
  {
    id: 'ms-productivity',
    title: 'Develop Your Productivity Skills with Generative AI',
    issuer: 'Microsoft',
    featured: false,
  },
  {
    id: 'ms-data',
    title: 'Professional Foundations of Data Analysis',
    issuer: 'Microsoft',
    featured: false,
  },
]
