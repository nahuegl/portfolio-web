export interface EducationItem {
  id: string
  degree: string
  institution: string
  period: string
  description: string
  skills: string[]
}

export const education: EducationItem[] = [
  {
    id: 'digital-house',
    degree: 'Certified Tech Developer',
    institution: 'Digital House',
    period: 'May 2022 – Apr 2024',
    description:
      'Intensive training in software development focusing on programming, databases, web architecture, UX/UI, and agile methodologies. The program centered on building scalable digital solutions with a focus on usability, design, and complex problem-solving.',
    skills: ['Programming', 'Databases & Web Architecture', 'UX/UI', 'Agile Methodologies'],
  },
  {
    id: 'coderhouse',
    degree: 'Web Designer',
    institution: 'Coderhouse',
    period: 'Mar 2019 – May 2019',
    description:
      'Practical specialization in designing and building modern websites using HTML, CSS, and JavaScript. Main focus on usability, user experience (UX), and responsive design.',
    skills: ['Web Design', 'HTML/CSS/JS', 'Responsive Design', 'UX'],
  },
  {
    id: 'uade',
    degree: 'B.A. in Multimedia Design',
    institution: 'UADE',
    period: 'Mar 2014 – Jun 2016',
    description:
      'Studies focused on graphic design, visual communication, applied creativity, and audiovisual production. Training strengthened aesthetic, conceptual, and technical vision within digital environments.',
    skills: ['Graphic Design', 'Audiovisual Production', 'Digital Design', 'Multimedia Tools'],
  },
]
