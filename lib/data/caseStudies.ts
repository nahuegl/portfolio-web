export interface Metric {
  value: string
  label: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface ResultItem {
  metric: string
  description: string
}

export interface CaseStudyContent {
  period: string
  company: string
  problem: string
  context: string
  process: ProcessStep[]
  results: ResultItem[]
}

export interface CaseStudy {
  slug: string
  title: string
  image: string
  accent: string
  metrics: Metric[]
  stack: string[]
  github?: string
  live?: string
  content: {
    en: CaseStudyContent
    es: CaseStudyContent
  }
}

export const caseStudies: Record<string, CaseStudy> = {
  'portfolio-web': {
    slug: 'portfolio-web',
    title: 'Portfolio Web',
    image: '/images/project-portfolio.svg',
    accent: '#0bd3d3',
    metrics: [
      { value: 'Sub 1s', label: 'LCP' },
      { value: 'EN / ES', label: 'Bilingual' },
      { value: 'A+', label: 'Lighthouse' },
    ],
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'GSAP', 'next-intl', 'Vercel'],
    github: 'https://github.com/nahuegl/portfolio-web',
    live: 'https://nahuelgl-portfolio.vercel.app',
    content: {
      en: {
        period: '2024 — Present',
        company: 'Personal Project',
        problem:
          'A resume alone doesn\'t demonstrate frontend craft — it lists it. The challenge was building a portfolio that serves as its own case study: a site that doesn\'t just describe skills but visibly practices them.',
        context:
          'After transitioning from corporate operational roles at PwC Argentina and Grupo Sancor Seguros into software development, the gap between "I can build this" and "here\'s proof" needed to be closed. The portfolio had to reflect both technical depth and a clear design sensibility — without feeling like a template.',
        process: [
          {
            title: 'Architecture & Stack',
            description:
              'Next.js 14 App Router with strict TypeScript and Tailwind CSS v3 using CSS custom properties for dynamic theming. Tailwind\'s design tokens were extended with a cyberpunk palette — cyan #0bd3d3, magenta #f92672, yellow #f4dd51 — controlled via CSS variables so both dark and light modes adapt without duplication.',
          },
          {
            title: 'Motion Design',
            description:
              'GSAP SplitText animates the hero name character by character on load. ScrollTrigger drives section reveals across the full page. Lenis provides sub-pixel smooth scroll, synchronized with GSAP\'s ticker for consistent 60fps behavior. The 3D tilt effect on project cards uses gsap.quickTo for buttery mouse tracking.',
          },
          {
            title: 'Internationalization',
            description:
              'Full EN/ES bilingual support via next-intl with locale prefix set to "as-needed" — English at the root, Spanish at /es. All content — including metadata, OG image, and aria labels — is translated. Language switch is instant with no page reload.',
          },
          {
            title: 'Dark / Light Theming',
            description:
              'Dark mode uses a near-black zinc palette. Light mode switches to a warm cream palette (#f2ede4 base) — deliberately warm to avoid the sterile look of most light themes. The GlitchBackground canvas adapts color profiles dynamically to the active theme.',
          },
        ],
        results: [
          {
            metric: 'Sub-second LCP',
            description:
              'Optimized image loading, font subsetting, and Vercel Edge Network deliver consistently fast load times in production.',
          },
          {
            metric: 'Full bilingual coverage',
            description:
              'Every string — including dynamic OG images and meta tags — is translated into English and Spanish.',
          },
          {
            metric: 'Zero layout shift',
            description:
              'Font loading strategy and reserved image dimensions eliminate cumulative layout shift (CLS ≈ 0).',
          },
          {
            metric: 'Automatic CI/CD',
            description:
              'Every push to main triggers a Vercel production deployment with no manual steps.',
          },
        ],
      },
      es: {
        period: '2024 — Presente',
        company: 'Proyecto Personal',
        problem:
          'Un CV solo describe habilidades — no las demuestra. El desafío era construir un portfolio que funcione como su propio caso de estudio: un sitio que no solo enumere capacidades, sino que las practique visiblemente.',
        context:
          'Luego de la transición desde roles operativos corporativos en PwC Argentina y Grupo Sancor Seguros hacia el desarrollo de software, era necesario cerrar la brecha entre "puedo construir esto" y "acá está la prueba". El portfolio tenía que reflejar tanto profundidad técnica como criterio de diseño — sin parecer un template.',
        process: [
          {
            title: 'Arquitectura y Stack',
            description:
              'Next.js 14 App Router con TypeScript estricto y Tailwind CSS v3 usando CSS custom properties para tematización dinámica. Los design tokens de Tailwind se extendieron con una paleta cyberpunk — cyan #0bd3d3, magenta #f92672, amarillo #f4dd51 — controlada por variables CSS para que los modos claro y oscuro se adapten sin duplicación.',
          },
          {
            title: 'Motion Design',
            description:
              'GSAP SplitText anima el nombre del hero carácter por carácter al cargar. ScrollTrigger maneja los reveals de cada sección. Lenis provee scroll ultra-suave sincronizado con el ticker de GSAP para un comportamiento consistente a 60fps. El efecto tilt 3D en las tarjetas de proyectos usa gsap.quickTo para un seguimiento del mouse fluido.',
          },
          {
            title: 'Internacionalización',
            description:
              'Soporte bilingüe completo EN/ES vía next-intl con prefijo de locale configurado como "as-needed" — inglés en la raíz, español en /es. Todo el contenido — incluyendo metadatos, imagen OG y aria labels — está traducido. El cambio de idioma es instantáneo sin recarga de página.',
          },
          {
            title: 'Tematización Dark / Light',
            description:
              'El modo oscuro usa una paleta zinc casi negra. El modo claro cambia a una paleta crema cálida (#f2ede4 base) — deliberadamente cálida para evitar el look estéril de la mayoría de los temas claros. El canvas GlitchBackground adapta sus perfiles de color dinámicamente al tema activo.',
          },
        ],
        results: [
          {
            metric: 'LCP sub-segundo',
            description:
              'Carga de imágenes optimizada, subsetting de fuentes y Vercel Edge Network entregan tiempos de carga consistentemente rápidos en producción.',
          },
          {
            metric: 'Cobertura bilingüe total',
            description:
              'Cada string — incluyendo imágenes OG dinámicas y meta tags — está traducido al inglés y al español.',
          },
          {
            metric: 'Cero layout shift',
            description:
              'La estrategia de carga de fuentes y las dimensiones de imagen reservadas eliminan el cumulative layout shift (CLS ≈ 0).',
          },
          {
            metric: 'CI/CD automático',
            description:
              'Cada push a main dispara un deploy de producción en Vercel sin pasos manuales.',
          },
        ],
      },
    },
  },

  'data-dashboard': {
    slug: 'data-dashboard',
    title: 'Data Analytics Dashboard',
    image: '/images/project-dashboard.svg',
    accent: '#f4dd51',
    metrics: [
      { value: '−30%', label: 'Admin Time' },
      { value: '+2,800', label: 'Claims / Month' },
      { value: '1 Source', label: 'of Truth' },
    ],
    stack: ['Power BI', 'DAX', 'SQL', 'Excel', 'Azure'],
    live: 'https://data-analytics-dashboard-nahuegls-projects.vercel.app',
    content: {
      en: {
        period: '2013 — 2022',
        company: 'Grupo Sancor Seguros',
        problem:
          'Insurance operations at Grupo Sancor Seguros relied entirely on manual Excel spreadsheets to track claims processing, vendor payments, and document digitization. Weekly reporting took hours, data was siloed across departments, and decision-making was reactive rather than real-time.',
        context:
          'As Operations & Process Analyst, managing over 2,800 insurance claims per month required visibility across multiple operational streams simultaneously. The absence of a centralized data layer made it impossible to identify bottlenecks, track resolution times accurately, or give management a reliable performance picture.',
        process: [
          {
            title: 'Process Audit',
            description:
              'Mapped the existing Excel-based reporting workflow end-to-end across claims, vendor payments, and digitization tracks. Identified three core pain points: duplicated manual data entry, a 48-hour lag between events and reporting, and no single view linking vendor payment status to claim resolution.',
          },
          {
            title: 'Data Modeling',
            description:
              'Designed a star-schema data model in Power BI connecting operational tables from multiple source systems via SQL queries. Defined DAX measures for the KPIs that operations managers tracked weekly: claims processed, average resolution time (ART), vendor payment aging, and digitization completion rate.',
          },
          {
            title: 'Dashboard Design',
            description:
              'Built an executive-facing summary page and three operational drill-down views — one per business stream. Prioritized clarity over density: each visual had a single decision it needed to support. Applied conditional formatting to surface SLA breaches without requiring users to interpret raw numbers.',
          },
          {
            title: 'Adoption & Documentation',
            description:
              'Ran onboarding sessions for operations managers and documented the data model, refresh schedule, and KPI definitions. Established a data governance standard for input files to ensure upstream quality didn\'t corrupt downstream metrics.',
          },
        ],
        results: [
          {
            metric: '−30% admin time',
            description:
              'Weekly reporting that previously required manual Excel assembly was replaced with automated Power BI refreshes — saving approximately 6 hours per week across the operations team.',
          },
          {
            metric: 'Real-time operational visibility',
            description:
              'Management moved from a 48-hour reporting lag to near-real-time dashboards, enabling same-day decisions on escalated claims and overdue vendor payments.',
          },
          {
            metric: 'Single source of truth',
            description:
              'Three previously siloed data streams — claims, vendor payments, digitization — were unified into one dashboard, eliminating version conflicts between department reports.',
          },
          {
            metric: '+2,800 claims tracked monthly',
            description:
              'The full claims volume was brought under structured monitoring, with resolution time and outcome tracked per claim type for the first time.',
          },
        ],
      },
      es: {
        period: '2013 — 2022',
        company: 'Grupo Sancor Seguros',
        problem:
          'Las operaciones de seguros en Grupo Sancor Seguros dependían completamente de planillas Excel manuales para el seguimiento de siniestros, pagos a proveedores y digitalización de documentos. Los reportes semanales demandaban horas, los datos estaban fragmentados entre departamentos y la toma de decisiones era reactiva en lugar de en tiempo real.',
        context:
          'Como Analista de Operaciones y Procesos, gestionar más de 2.800 siniestros mensuales requería visibilidad simultánea sobre múltiples flujos operativos. La ausencia de una capa de datos centralizada hacía imposible identificar cuellos de botella, medir tiempos de resolución con precisión o dar a la dirección una imagen confiable del rendimiento.',
        process: [
          {
            title: 'Auditoría de Procesos',
            description:
              'Se mapeó el flujo de reporte basado en Excel de principio a fin, abarcando siniestros, pagos a proveedores y digitalización. Se identificaron tres puntos críticos: carga de datos duplicada y manual, un desfase de 48 horas entre eventos y reportes, y la ausencia de una vista que vinculara el estado de pago a proveedores con la resolución de siniestros.',
          },
          {
            title: 'Modelado de Datos',
            description:
              'Se diseñó un modelo de datos en esquema estrella en Power BI conectando tablas operativas de múltiples sistemas fuente mediante consultas SQL. Se definieron medidas DAX para los KPIs que los gerentes de operaciones monitoreaban semanalmente: siniestros procesados, tiempo promedio de resolución, antigüedad de pagos a proveedores y tasa de completitud de digitalización.',
          },
          {
            title: 'Diseño del Dashboard',
            description:
              'Se construyó una página de resumen ejecutivo y tres vistas de drill-down operativo — una por flujo de negocio. Se priorizó la claridad sobre la densidad: cada visual soportaba una sola decisión. Se aplicó formato condicional para visibilizar incumplimientos de SLA sin requerir que el usuario interprete números crudos.',
          },
          {
            title: 'Adopción y Documentación',
            description:
              'Se realizaron sesiones de onboarding para gerentes de operaciones y se documentó el modelo de datos, el esquema de actualización y las definiciones de KPIs. Se estableció un estándar de gobernanza de datos para los archivos fuente para garantizar que la calidad upstream no corrompiera las métricas downstream.',
          },
        ],
        results: [
          {
            metric: '−30% tiempo administrativo',
            description:
              'Los reportes semanales que antes requerían armado manual en Excel fueron reemplazados por actualizaciones automatizadas de Power BI — ahorrando aproximadamente 6 horas semanales en el equipo de operaciones.',
          },
          {
            metric: 'Visibilidad operativa en tiempo real',
            description:
              'La dirección pasó de un desfase de 48 horas en los reportes a dashboards en tiempo casi real, habilitando decisiones del mismo día sobre siniestros escalados y pagos vencidos a proveedores.',
          },
          {
            metric: 'Única fuente de verdad',
            description:
              'Tres flujos de datos previamente aislados — siniestros, pagos a proveedores, digitalización — se unificaron en un solo dashboard, eliminando conflictos de versiones entre reportes departamentales.',
          },
          {
            metric: '+2.800 siniestros monitoreados mensualmente',
            description:
              'El volumen total de siniestros quedó bajo monitoreo estructurado, con tiempo de resolución y resultado registrado por tipo de siniestro por primera vez.',
          },
        ],
      },
    },
  },

  'crm-optimization': {
    slug: 'crm-optimization',
    title: 'CRM Workflow Optimization',
    image: '/images/project-crm.svg',
    accent: '#f92672',
    metrics: [
      { value: '−20%', label: 'Response Time' },
      { value: '95%', label: 'CSAT' },
      { value: '−30%', label: 'Admin Load' },
    ],
    stack: ['CRM', 'Process Design', 'Data Analysis', 'Excel', 'Power BI'],
    content: {
      en: {
        period: '2022 — 2025',
        company: 'PwC Argentina',
        problem:
          'PwC Argentina\'s Contact Center was supporting US clients on Form K1 tax compliance — a high-stakes, detail-intensive workflow. Response times were above SLA targets, CRM data quality was inconsistent, and the team had no standardized approach for the most frequent client queries, causing each agent to handle the same questions differently.',
        context:
          'Form K1 support involves sensitive financial data and regulatory deadlines. Errors or delays in this context have real compliance consequences for clients. With a team handling hundreds of interactions monthly, the lack of process structure was compounding into measurable SLA and satisfaction gaps.',
        process: [
          {
            title: 'Workflow Audit',
            description:
              'Performed a full audit of the CRM support queue — categorized inbound queries by type, volume, and resolution time. Identified that 65% of contacts fell into 20 recurring query patterns, yet each was handled from scratch with no shared template or escalation path. Three bottleneck categories drove 80% of SLA breaches.',
          },
          {
            title: 'Template System',
            description:
              'Designed a library of 20 standardized response templates mapped to the most frequent K1 query types. Each template included: the approved response, links to relevant regulatory references, and a decision tree for edge cases. Templates were reviewed with the compliance team before rollout.',
          },
          {
            title: 'CRM Data Standards',
            description:
              'Defined and documented CRM data entry standards — field-level rules for case categorization, client tier, query type, and resolution status. Ran a retroactive cleanup of existing records. Implemented a weekly data quality check with automated exception reports.',
          },
          {
            title: 'Knowledge Base & Training',
            description:
              'Built an internal knowledge base consolidating regulatory references, process guides, and the template library. Ran two onboarding sessions for the full team and a condensed version for new agents. Established a feedback loop: agents flagged templates that needed updating, reviewed monthly.',
          },
        ],
        results: [
          {
            metric: '−20% average response time',
            description:
              'Standardized templates eliminated the research phase for common queries, cutting average handling time and bringing response times within SLA targets.',
          },
          {
            metric: '95% CSAT sustained',
            description:
              'Customer satisfaction scores reached 95% and were maintained consistently throughout the engagement — measured via post-interaction surveys on a rolling 30-day basis.',
          },
          {
            metric: '−30% administrative overhead',
            description:
              'CRM data standards and template adoption reduced per-case administrative burden — agents spent less time formatting responses and logging case details manually.',
          },
          {
            metric: 'Team-wide adoption',
            description:
              'The template system and CRM standards were adopted by the full Contact Center team, not just the K1 queue — extending the process improvement beyond the original scope.',
          },
        ],
      },
      es: {
        period: '2022 — 2025',
        company: 'PwC Argentina',
        problem:
          'El Contact Center de PwC Argentina brindaba soporte a clientes de EE.UU. en el cumplimiento fiscal del Formulario K1 — un flujo de trabajo de alto riesgo y gran detalle. Los tiempos de respuesta superaban los objetivos de SLA, la calidad de datos en el CRM era inconsistente, y el equipo no tenía un enfoque estandarizado para las consultas más frecuentes, haciendo que cada agente resolviera las mismas preguntas de manera diferente.',
        context:
          'El soporte del Formulario K1 involucra datos financieros sensibles y fechas límite regulatorias. Los errores o demoras en este contexto tienen consecuencias de cumplimiento reales para los clientes. Con un equipo manejando cientos de interacciones mensuales, la falta de estructura de proceso se estaba convirtiendo en brechas medibles de SLA y satisfacción.',
        process: [
          {
            title: 'Auditoría del Flujo de Trabajo',
            description:
              'Se realizó una auditoría completa de la cola de soporte en el CRM — las consultas entrantes se categorizaron por tipo, volumen y tiempo de resolución. Se identificó que el 65% de los contactos correspondían a 20 patrones de consulta recurrentes, pero cada uno se gestionaba desde cero sin plantilla ni ruta de escalamiento compartida. Tres categorías de cuellos de botella generaban el 80% de los incumplimientos de SLA.',
          },
          {
            title: 'Sistema de Plantillas',
            description:
              'Se diseñó una biblioteca de 20 plantillas de respuesta estandarizadas mapeadas a los tipos de consulta K1 más frecuentes. Cada plantilla incluía: la respuesta aprobada, vínculos a referencias regulatorias relevantes y un árbol de decisión para casos límite. Las plantillas fueron revisadas con el equipo de compliance antes del lanzamiento.',
          },
          {
            title: 'Estándares de Datos en CRM',
            description:
              'Se definieron y documentaron estándares de carga de datos en el CRM — reglas a nivel de campo para categorización de casos, tier de cliente, tipo de consulta y estado de resolución. Se realizó una limpieza retroactiva de registros existentes. Se implementó un control semanal de calidad de datos con reportes de excepciones automatizados.',
          },
          {
            title: 'Base de Conocimiento y Capacitación',
            description:
              'Se construyó una base de conocimiento interna consolidando referencias regulatorias, guías de proceso y la biblioteca de plantillas. Se realizaron dos sesiones de onboarding para el equipo completo y una versión condensada para agentes nuevos. Se estableció un circuito de feedback: los agentes marcaban las plantillas que necesitaban actualización, revisadas mensualmente.',
          },
        ],
        results: [
          {
            metric: '−20% tiempo de respuesta promedio',
            description:
              'Las plantillas estandarizadas eliminaron la fase de investigación para consultas frecuentes, reduciendo el tiempo de gestión promedio y llevando los tiempos de respuesta dentro de los objetivos de SLA.',
          },
          {
            metric: '95% CSAT sostenido',
            description:
              'Los puntajes de satisfacción del cliente alcanzaron el 95% y se mantuvieron de forma consistente durante todo el engagement — medidos mediante encuestas post-interacción en una base móvil de 30 días.',
          },
          {
            metric: '−30% carga administrativa',
            description:
              'Los estándares de datos en el CRM y la adopción de plantillas redujeron la carga administrativa por caso — los agentes gastaban menos tiempo dando formato a respuestas y registrando detalles de casos manualmente.',
          },
          {
            metric: 'Adopción en todo el equipo',
            description:
              'El sistema de plantillas y los estándares de CRM fueron adoptados por el equipo completo del Contact Center, no solo la cola K1 — extendiendo la mejora de procesos más allá del alcance original.',
          },
        ],
      },
    },
  },

  'pwc-redesign': {
    slug: 'pwc-redesign',
    title: 'PwC Argentina Redesign',
    image: '/images/project-pwc.svg',
    accent: '#D04A02',
    metrics: [
      { value: 'EN / ES', label: 'Bilingual' },
      { value: 'Dark / Light', label: 'Theming' },
      { value: 'Next.js 15', label: 'Stack' },
    ],
    stack: ['Next.js 15', 'TypeScript', 'GSAP', 'Lenis', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/nahuegl/pwc-redesign',
    live: 'https://pwc-redesign.vercel.app',
    content: {
      en: {
        period: '2025',
        company: 'Conceptual Redesign',
        problem:
          'pwc.com.ar felt dated — heavy page transitions, inconsistent typography, and an information hierarchy that buried key services. The brief: redesign the site respecting PwC\'s strict global brand identity while delivering the modern, editorial experience the brand\'s positioning deserves.',
        context:
          'This is a self-initiated conceptual project. Having worked at PwC Argentina for over two years, the brief wasn\'t abstract — it came from firsthand knowledge of how the site was actually used by clients and internal staff. The redesign had to serve real navigation patterns, not just look good in a mockup.',
        process: [
          {
            title: 'Brand Analysis',
            description:
              'Studied PwC\'s global brand guidelines in detail: ITC Charter (substituted with Lora) for editorial display, Helvetica Neue (substituted with Inter) for UI, #D04A02 orange as the primary accent, and #E0301E red as secondary. The design language is flat and editorial — zero border-radius on buttons and cards, generous whitespace, high-contrast type.',
          },
          {
            title: 'Architecture',
            description:
              'Next.js 15 App Router with strict TypeScript. No third-party state management — layout state handled with React context and CSS custom properties. Internationalization via a centralized translations object (no URL routing, no next-intl) — language is toggled in-place for a seamless UX without URL changes.',
          },
          {
            title: 'Motion System',
            description:
              'All animations use GSAP 3 with the @gsap/react useGSAP hook — eliminating the need for manual cleanup in useEffect. ScrollTrigger handles section reveals and parallax. Lenis provides smooth scroll integrated directly with GSAP\'s ticker for frame-perfect synchronization. The motion language is restrained — purposeful reveals, no decoration.',
          },
          {
            title: 'Theming Strategy',
            description:
              'Dark mode uses CSS [data-theme="dark"] on the html element — not Tailwind\'s .dark class strategy. This was a deliberate choice: it allows CSS variables to cascade without JavaScript class toggling and avoids the flash-of-incorrect-theme that next-themes can produce on first render. The dark palette uses #1F0B0A as background — a warm near-black that keeps PwC\'s orange accent readable.',
          },
        ],
        results: [
          {
            metric: 'Live at pwc-redesign.vercel.app',
            description:
              'Deployed to Vercel production with automatic CI/CD from the main branch. Accessible publicly for portfolio review.',
          },
          {
            metric: 'Full dark/light mode',
            description:
              'Both themes are fully implemented with PwC brand colors — the dark theme maintains brand legibility on a warm near-black background.',
          },
          {
            metric: 'Bilingual EN/ES',
            description:
              'All content is available in English and Spanish with an instant in-place toggle — no page reload, no URL change.',
          },
          {
            metric: 'Scroll-driven narrative',
            description:
              'GSAP ScrollTrigger orchestrates a full cinematic scroll experience across all sections, with section timings tuned to PwC\'s editorial pacing.',
          },
        ],
      },
      es: {
        period: '2025',
        company: 'Rediseño Conceptual',
        problem:
          'pwc.com.ar se sentía desactualizado — transiciones de página pesadas, tipografía inconsistente y una jerarquía de información que sepultaba los servicios clave. El brief: rediseñar el sitio respetando la estricta identidad visual global de PwC, entregando la experiencia editorial moderna que el posicionamiento de la marca merece.',
        context:
          'Este es un proyecto conceptual de iniciativa propia. Habiendo trabajado en PwC Argentina durante más de dos años, el brief no era abstracto — surgió del conocimiento de primera mano sobre cómo el sitio era realmente utilizado por clientes y personal interno. El rediseño tenía que servir a patrones de navegación reales, no solo verse bien en un mockup.',
        process: [
          {
            title: 'Análisis de Marca',
            description:
              'Se estudiaron en detalle las guías de marca global de PwC: ITC Charter (sustituida por Lora) para display editorial, Helvetica Neue (sustituida por Inter) para UI, naranja #D04A02 como acento primario y rojo #E0301E como secundario. El lenguaje de diseño es plano y editorial — cero border-radius en botones y cards, espaciado generoso, tipografía de alto contraste.',
          },
          {
            title: 'Arquitectura',
            description:
              'Next.js 15 App Router con TypeScript estricto. Sin gestión de estado de terceros — el estado de layout se maneja con React context y CSS custom properties. Internacionalización mediante un objeto de traducciones centralizado (sin URL routing, sin next-intl) — el idioma se alterna in-place para una UX sin cambios de URL.',
          },
          {
            title: 'Sistema de Motion',
            description:
              'Todas las animaciones usan GSAP 3 con el hook useGSAP de @gsap/react — eliminando la necesidad de cleanup manual en useEffect. ScrollTrigger gestiona los reveals de sección y los parallax. Lenis provee scroll suave integrado directamente con el ticker de GSAP para sincronización frame-perfect. El lenguaje de motion es contenido — reveals con propósito, sin decoración.',
          },
          {
            title: 'Estrategia de Tematización',
            description:
              'El modo oscuro usa CSS [data-theme="dark"] en el elemento html — no la estrategia de clase .dark de Tailwind. Esta fue una decisión deliberada: permite que las variables CSS cascaden sin toggle de clases JavaScript y evita el flash-of-incorrect-theme que next-themes puede producir en el primer render. La paleta oscura usa #1F0B0A como fondo — un near-black cálido que mantiene el acento naranja de PwC legible.',
          },
        ],
        results: [
          {
            metric: 'Live en pwc-redesign.vercel.app',
            description:
              'Deployado en producción en Vercel con CI/CD automático desde la rama main. Accesible públicamente para revisión del portfolio.',
          },
          {
            metric: 'Dark/light mode completo',
            description:
              'Ambos temas están completamente implementados con los colores de marca PwC — el tema oscuro mantiene la legibilidad de marca sobre un fondo near-black cálido.',
          },
          {
            metric: 'Bilingüe EN/ES',
            description:
              'Todo el contenido está disponible en inglés y español con un toggle instantáneo in-place — sin recarga de página, sin cambio de URL.',
          },
          {
            metric: 'Narrativa por scroll',
            description:
              'GSAP ScrollTrigger orquesta una experiencia de scroll cinemática completa en todas las secciones, con timings afinados al ritmo editorial de PwC.',
          },
        ],
      },
    },
  },

  'sancor-seguros-redesign': {
    slug: 'sancor-seguros-redesign',
    title: 'Sancor Seguros Redesign',
    image: '/images/project-sancor.svg',
    accent: '#A70355',
    metrics: [
      { value: 'ES / PT / EN', label: 'Trilingual' },
      { value: 'Dark / Light', label: 'Theming' },
      { value: 'In Progress', label: 'Status' },
    ],
    stack: ['Next.js 15', 'TypeScript', 'GSAP', 'Framer Motion', 'Lenis', 'next-intl'],
    github: 'https://github.com/nahuegl/sancor-seguros-redesign',
    content: {
      en: {
        period: '2025',
        company: 'Conceptual Redesign',
        problem:
          'sancorseguros.com.ar serves a broad, diverse audience — individuals quoting auto or home policies, SMEs seeking commercial coverage, and enterprises managing large portfolios — across Argentina, Brazil, and international markets. The existing site had poor information hierarchy, no dark mode, no animation layer, and a single language. The brief: redesign it to serve all three user types clearly, in three languages, with a modern interactive layer.',
        context:
          'Nine years working in Sancor\'s operations — processing over 2,800 claims monthly, coordinating with vendors, and managing document digitization — gave an unusually detailed understanding of how the product actually works and what clients actually need. This isn\'t a surface-level redesign of a brand I found online. It\'s a redesign informed by deep domain knowledge of the business behind the site.',
        process: [
          {
            title: 'UX Audit & Journey Mapping',
            description:
              'Identified the three primary user journeys that drive 90% of site traffic: quote a policy, find a branch or contact, and submit or track a claim. The redesigned information architecture is built around these three paths — every navigation decision is justified by one of them.',
          },
          {
            title: 'Design System',
            description:
              'Built a design system grounded in Sancor\'s brand: magenta #A70355 as primary, navy #0A4494 as secondary, Montserrat variable font at weights 500/600/700, pill-shaped CTAs (1.5rem radius), and card components with consistent 1.5rem radius. The system supports both dark (#0D0D0D base) and light (#FFFFFF base) modes with full brand fidelity in each.',
          },
          {
            title: 'Motion Architecture',
            description:
              'Dual motion layer: GSAP handles scroll-driven animations (section reveals, parallax, counter increments for stat blocks) while Framer Motion handles component-level micro-interactions (hover states, modal enter/exit transitions, accordion animations). Lenis provides smooth scroll with GSAP ticker integration. The motion language is warmer and more approachable than the PwC redesign — appropriate for a consumer-facing insurance brand.',
          },
          {
            title: 'Trilingual i18n',
            description:
              'Full ES/PT/EN support via next-intl with three locale routes (/es, /pt, /en). All content — including insurance terminology that differs significantly between Argentine Spanish and Brazilian Portuguese — is fully translated. Locale detection defaults to Spanish, with browser-preference detection for Portuguese.',
          },
        ],
        results: [
          {
            metric: 'Trilingual architecture complete',
            description:
              'The full next-intl routing and translation infrastructure for ES/PT/EN is in place — all three locales are functional.',
          },
          {
            metric: 'Dark/light theming live',
            description:
              'Both themes are fully implemented. The dark theme uses a near-black base (#0D0D0D) with magenta and navy accents maintaining WCAG AA contrast ratios.',
          },
          {
            metric: 'Domain-informed UX',
            description:
              'Navigation and content hierarchy are designed around real user needs — informed by 9 years of operational experience inside the company, not surface-level competitive analysis.',
          },
          {
            metric: 'In active development',
            description:
              'Core sections are built and functional. Full deployment scheduled upon completion of the hero video and enterprise services pages.',
          },
        ],
      },
      es: {
        period: '2025',
        company: 'Rediseño Conceptual',
        problem:
          'sancorseguros.com.ar atiende a una audiencia amplia y diversa — particulares cotizando seguros de auto o hogar, PyMEs buscando cobertura comercial y empresas gestionando grandes portfolios — en Argentina, Brasil y mercados internacionales. El sitio existente tenía una jerarquía de información deficiente, sin modo oscuro, sin capa de animación y en un solo idioma. El brief: rediseñarlo para servir con claridad a los tres tipos de usuarios, en tres idiomas, con una capa interactiva moderna.',
        context:
          'Nueve años trabajando en las operaciones de Sancor — procesando más de 2.800 siniestros mensuales, coordinando con proveedores y gestionando la digitalización documental — dieron una comprensión inusualmente detallada de cómo funciona realmente el producto y qué necesitan realmente los clientes. Este no es un rediseño superficial de una marca encontrada online. Es un rediseño informado por un conocimiento profundo del dominio del negocio detrás del sitio.',
        process: [
          {
            title: 'Auditoría UX y Mapeo de Journeys',
            description:
              'Se identificaron los tres journeys de usuario primarios que generan el 90% del tráfico del sitio: cotizar una póliza, encontrar una sucursal o contacto, y iniciar o hacer seguimiento de un siniestro. La arquitectura de información rediseñada está construida alrededor de estos tres caminos — cada decisión de navegación está justificada por uno de ellos.',
          },
          {
            title: 'Sistema de Diseño',
            description:
              'Se construyó un sistema de diseño basado en la marca Sancor: magenta #A70355 como primario, azul marino #0A4494 como secundario, fuente variable Montserrat en pesos 500/600/700, CTAs en forma de píldora (radio 1.5rem) y componentes de card con radio consistente de 1.5rem. El sistema soporta modos oscuro (#0D0D0D base) y claro (#FFFFFF base) con fidelidad de marca completa en cada uno.',
          },
          {
            title: 'Arquitectura de Motion',
            description:
              'Capa de motion dual: GSAP gestiona las animaciones basadas en scroll (reveals de sección, parallax, incrementos de contador para bloques de estadísticas) mientras Framer Motion maneja las micro-interacciones a nivel de componente (estados hover, transiciones de entrada/salida de modales, animaciones de acordeón). Lenis provee scroll suave con integración del ticker de GSAP. El lenguaje de motion es más cálido y accesible que el del rediseño PwC — apropiado para una marca de seguros orientada al consumidor.',
          },
          {
            title: 'i18n Trilingüe',
            description:
              'Soporte completo ES/PT/EN vía next-intl con tres rutas de locale (/es, /pt, /en). Todo el contenido — incluyendo terminología aseguradora que difiere significativamente entre el español argentino y el portugués brasileño — está completamente traducido. La detección de locale defaultea a español, con detección de preferencia de navegador para el portugués.',
          },
        ],
        results: [
          {
            metric: 'Arquitectura trilingüe completa',
            description:
              'El routing y la infraestructura de traducción next-intl para ES/PT/EN están en su lugar — los tres locales son funcionales.',
          },
          {
            metric: 'Tematización dark/light activa',
            description:
              'Ambos temas están completamente implementados. El tema oscuro usa una base near-black (#0D0D0D) con acentos magenta y azul marino manteniendo ratios de contraste WCAG AA.',
          },
          {
            metric: 'UX informada por dominio',
            description:
              'La navegación y jerarquía de contenido están diseñadas en torno a necesidades reales de los usuarios — informadas por 9 años de experiencia operativa dentro de la empresa, no por análisis competitivo superficial.',
          },
          {
            metric: 'En desarrollo activo',
            description:
              'Las secciones principales están construidas y funcionales. El deploy completo está programado al finalizar el video hero y las páginas de servicios empresariales.',
          },
        ],
      },
    },
  },
}
