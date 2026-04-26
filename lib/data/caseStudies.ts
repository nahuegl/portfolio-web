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

  'claims-analyst-agent': {
    slug: 'claims-analyst-agent',
    title: 'Claims Analyst Agent',
    image: '/images/project-claims.svg',
    accent: '#0A4494',
    metrics: [
      { value: '9 yrs', label: 'Domain Depth' },
      { value: 'Claude API', label: 'Powered By' },
      { value: '<3s', label: 'Avg. Response' },
    ],
    stack: ['Next.js', 'Claude API', 'Vercel AI SDK', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/nahuegl/claims-analyst-agent',
    live: 'https://claims-analyst-agent.vercel.app',
    content: {
      en: {
        period: '2025',
        company: 'Personal AI Project',
        problem:
          'Insurance claims analysis requires years of domain expertise to do accurately — policy coverage interpretation, technical damage assessment, legal compliance, and resolution recommendation all happen in the same mental model. There\'s no shortcut. The challenge: encode that expertise into an AI agent that performs the workflow reliably, without the analyst.',
        context:
          'After 9 years as an Insurance Operations Analyst at Grupo Sancor Seguros — processing over 2,800 claims per month, coordinating with adjusters, and applying technical and legal criteria — the decision workflow was deeply internalized. This project externalizes it into a working AI product built on the Claude API.',
        process: [
          {
            title: 'Domain Modeling',
            description:
              'Translated 9 years of claims evaluation experience into a structured prompt system. Defined the four-stage analysis framework the agent follows: (1) coverage verification against policy type, (2) circumstance-to-cause classification, (3) technical damage assessment, (4) resolution recommendation with legal rationale. Each stage maps to real adjuster decision points.',
          },
          {
            title: 'Agent Architecture',
            description:
              'Built with Next.js App Router and the Vercel AI SDK using Claude as the inference layer. The agent receives structured case input (policy type, insured event, circumstances, damage description) and returns a full analysis in a consistent JSON-structured response — coverage decision, rationale, risk flags, and recommended resolution.',
          },
          {
            title: 'Chat Interface',
            description:
              'Designed a two-panel UI: a case intake form on the left (policy fields, incident description, attachments) and a real-time chat with the agent on the right. The agent can ask clarifying questions before issuing a recommendation — simulating the back-and-forth of a real adjuster intake session.',
          },
          {
            title: 'Report Generation',
            description:
              'After analysis, the agent generates a structured formal report — claim summary, coverage assessment, resolution recommendation, and supporting legal references — formatted for operations manager review. Output mirrors the documentation standard used in real Sancor Seguros claim files.',
          },
        ],
        results: [
          {
            metric: 'End-to-end claims analysis',
            description:
              'The agent handles the full evaluation cycle: policy verification, cause classification, damage assessment, and resolution recommendation — without human intervention.',
          },
          {
            metric: '9 years of domain encoded',
            description:
              'The prompt system captures real decision logic from Grupo Sancor Seguros operations — not a generic insurance model, but a domain-specific one.',
          },
          {
            metric: 'Sub-3s average response',
            description:
              'Claude\'s inference speed on the Vercel Edge runtime delivers analysis in under 3 seconds for standard cases, suitable for production use.',
          },
          {
            metric: 'Formal report output',
            description:
              'Every analyzed case generates a structured report ready for review — covering coverage decision, legal basis, and resolution path.',
          },
        ],
      },
      es: {
        period: '2025',
        company: 'Proyecto de IA Personal',
        problem:
          'El análisis de siniestros de seguros requiere años de experiencia de dominio para hacerse con precisión — interpretación de cobertura de pólizas, evaluación técnica de daños, cumplimiento legal y recomendación de resolución ocurren dentro del mismo modelo mental. No hay atajos. El desafío: codificar esa experiencia en un agente de IA que ejecute el flujo de trabajo de forma confiable, sin el analista.',
        context:
          'Tras 9 años como Analista de Operaciones de Seguros en Grupo Sancor Seguros — procesando más de 2.800 siniestros mensuales, coordinando con peritos y aplicando criterios técnicos y legales — el flujo de decisión estaba profundamente internalizado. Este proyecto lo externaliza en un producto de IA funcional construido sobre la API de Claude.',
        process: [
          {
            title: 'Modelado de Dominio',
            description:
              'Se tradujo la experiencia de 9 años en evaluación de siniestros en un sistema de prompts estructurado. Se definió el framework de análisis de cuatro etapas que sigue el agente: (1) verificación de cobertura según tipo de póliza, (2) clasificación circunstancia-causa, (3) evaluación técnica del daño, (4) recomendación de resolución con fundamento legal. Cada etapa mapea puntos de decisión reales del perito.',
          },
          {
            title: 'Arquitectura del Agente',
            description:
              'Construido con Next.js App Router y el Vercel AI SDK usando Claude como capa de inferencia. El agente recibe input estructurado del caso (tipo de póliza, evento asegurado, circunstancias, descripción del daño) y devuelve un análisis completo en una respuesta estructurada en JSON — decisión de cobertura, fundamento, alertas de riesgo y resolución recomendada.',
          },
          {
            title: 'Interfaz de Chat',
            description:
              'Se diseñó una UI de dos paneles: un formulario de ingreso del caso a la izquierda (campos de póliza, descripción del incidente, archivos adjuntos) y un chat en tiempo real con el agente a la derecha. El agente puede hacer preguntas de clarificación antes de emitir una recomendación — simulando el intercambio real de una sesión de ingreso con un perito.',
          },
          {
            title: 'Generación de Informes',
            description:
              'Tras el análisis, el agente genera un informe formal estructurado — resumen del siniestro, evaluación de cobertura, recomendación de resolución y referencias legales de respaldo — formateado para revisión del gerente de operaciones. El output refleja el estándar de documentación utilizado en los expedientes reales de siniestros de Sancor Seguros.',
          },
        ],
        results: [
          {
            metric: 'Análisis de siniestros de principio a fin',
            description:
              'El agente gestiona el ciclo completo de evaluación: verificación de póliza, clasificación de causa, evaluación de daño y recomendación de resolución — sin intervención humana.',
          },
          {
            metric: '9 años de dominio codificados',
            description:
              'El sistema de prompts captura lógica de decisión real de las operaciones de Grupo Sancor Seguros — no un modelo genérico de seguros, sino uno específico del dominio.',
          },
          {
            metric: 'Respuesta promedio menor a 3s',
            description:
              'La velocidad de inferencia de Claude en el Vercel Edge Runtime entrega análisis en menos de 3 segundos para casos estándar, apto para uso en producción.',
          },
          {
            metric: 'Informe formal como output',
            description:
              'Cada caso analizado genera un informe estructurado listo para revisión — cubriendo decisión de cobertura, base legal y ruta de resolución.',
          },
        ],
      },
    },
  },

  'k1-tax-assistant': {
    slug: 'k1-tax-assistant',
    title: 'K-1 Tax Assistant',
    image: '/images/project-k1.svg',
    accent: '#D04A02',
    metrics: [
      { value: 'K-1 + K-3', label: 'Forms Covered' },
      { value: 'PDF', label: 'Upload Support' },
      { value: 'Claude API', label: 'Powered By' },
    ],
    stack: ['Next.js', 'Claude API', 'Vercel AI SDK', 'TypeScript', 'pdf-parse'],
    github: 'https://github.com/nahuegl/k1-tax-assistant',
    live: 'https://k1-tax-assistant.vercel.app',
    content: {
      en: {
        period: '2025',
        company: 'Personal AI Project',
        problem:
          'Schedule K-1 and K-3 are among the most misunderstood tax documents in the US system. Partnership investors — many of them non-specialists — receive these forms without clear guidance on what each Box means, where the values go in their return, or what inconsistencies to watch for. Tax professionals are expensive; the form is complex; deadline pressure is real.',
        context:
          'At PwC Argentina, two years of supporting US clients on Form K1 compliance meant handling these exact questions daily — Box-level explanations, common misreporting patterns, and the cascade effect of errors on the final return. This assistant encodes that support layer into an AI product anyone can access.',
        process: [
          {
            title: 'Form Mapping',
            description:
              'Compiled a complete field-by-field reference for Schedule K-1 (Form 1065) and K-3 — covering all Boxes, their definitions, the IRS instructions, and the most common errors seen in practice. This knowledge base forms the foundation of the agent\'s system prompt and retrieval layer.',
          },
          {
            title: 'PDF Ingestion',
            description:
              'Implemented PDF upload and parsing using pdf-parse — the user uploads their actual K-1 document, the text is extracted and passed to Claude as context. The agent then analyzes the specific values in the user\'s form, not a generic example. Handles both digital PDFs and OCR-processed scans.',
          },
          {
            title: 'Agent Logic',
            description:
              'Built with the Vercel AI SDK streaming chat interface. The agent follows a structured conversation flow: (1) identify what the user needs — Box explanation, full-form walkthrough, or inconsistency check; (2) respond with the appropriate depth; (3) flag any values that are statistically unusual or conflict with other fields. All responses include the IRS reference code.',
          },
          {
            title: 'Alert System',
            description:
              'Implemented a pattern-matching layer that detects common K-1 inconsistencies — mismatched partner percentages, missing foreign income disclosures required by K-3, and Box 20 codes that require additional schedules. Alerts are surfaced inline during the conversation with a specific action recommendation.',
          },
        ],
        results: [
          {
            metric: 'Full K-1 and K-3 coverage',
            description:
              'Every field in Schedule K-1 (Form 1065) and the associated K-3 is covered — definitions, IRS instructions, and transfer guidance to the individual return.',
          },
          {
            metric: 'PDF-aware analysis',
            description:
              'The agent reads the user\'s actual form values — not hypothetical examples — delivering specific, actionable guidance rather than generic tax information.',
          },
          {
            metric: 'Inconsistency detection',
            description:
              'Automated pattern matching flags common errors and missing disclosures before they become filing problems — replicating the compliance-check role performed daily at PwC.',
          },
          {
            metric: 'Plain-language explanations',
            description:
              'Complex partnership tax concepts are translated into clear investor-facing language — the same communication standard maintained during 2+ years of client support at PwC Argentina.',
          },
        ],
      },
      es: {
        period: '2025',
        company: 'Proyecto de IA Personal',
        problem:
          'Los formularios Schedule K-1 y K-3 se encuentran entre los documentos fiscales más mal comprendidos del sistema estadounidense. Los inversores en partnerships — muchos de ellos no especialistas — reciben estos formularios sin orientación clara sobre qué significa cada casilla, dónde van los valores en su declaración, o qué inconsistencias vigilar. Los profesionales impositivos son costosos; el formulario es complejo; la presión de los plazos es real.',
        context:
          'En PwC Argentina, dos años dando soporte a clientes de EE.UU. en cumplimiento fiscal del Formulario K1 significó responder exactamente estas preguntas diariamente — explicaciones a nivel de casilla, patrones comunes de declaración incorrecta y el efecto en cascada de los errores en la declaración final. Este asistente codifica esa capa de soporte en un producto de IA accesible para cualquiera.',
        process: [
          {
            title: 'Mapeo del Formulario',
            description:
              'Se compiló una referencia campo por campo completa para el Schedule K-1 (Formulario 1065) y K-3 — cubriendo todas las casillas, sus definiciones, las instrucciones del IRS y los errores más comunes observados en la práctica. Esta base de conocimiento forma el fundamento del system prompt y la capa de recuperación del agente.',
          },
          {
            title: 'Ingesta de PDF',
            description:
              'Se implementó carga y parseo de PDF usando pdf-parse — el usuario sube su documento K-1 real, el texto es extraído y pasado a Claude como contexto. El agente analiza los valores específicos en el formulario del usuario, no un ejemplo genérico. Maneja tanto PDFs digitales como escaneos procesados con OCR.',
          },
          {
            title: 'Lógica del Agente',
            description:
              'Construido con la interfaz de chat en streaming del Vercel AI SDK. El agente sigue un flujo de conversación estructurado: (1) identificar qué necesita el usuario — explicación de casilla, recorrido completo del formulario o verificación de inconsistencias; (2) responder con la profundidad apropiada; (3) marcar valores estadísticamente inusuales o que conflictúen con otros campos. Todas las respuestas incluyen el código de referencia del IRS.',
          },
          {
            title: 'Sistema de Alertas',
            description:
              'Se implementó una capa de coincidencia de patrones que detecta inconsistencias comunes del K-1 — porcentajes de socios no coincidentes, declaraciones de ingresos extranjeros faltantes requeridas por el K-3 y códigos de la Casilla 20 que requieren schedules adicionales. Las alertas se muestran en línea durante la conversación con una recomendación de acción específica.',
          },
        ],
        results: [
          {
            metric: 'Cobertura completa K-1 y K-3',
            description:
              'Cada campo del Schedule K-1 (Formulario 1065) y el K-3 asociado está cubierto — definiciones, instrucciones del IRS y guía de transferencia a la declaración individual.',
          },
          {
            metric: 'Análisis consciente del PDF',
            description:
              'El agente lee los valores reales del formulario del usuario — no ejemplos hipotéticos — entregando orientación específica y accionable en lugar de información fiscal genérica.',
          },
          {
            metric: 'Detección de inconsistencias',
            description:
              'La coincidencia de patrones automatizada señala errores comunes y declaraciones faltantes antes de que se conviertan en problemas de presentación — replicando el rol de verificación de compliance realizado diariamente en PwC.',
          },
          {
            metric: 'Explicaciones en lenguaje simple',
            description:
              'Los conceptos fiscales complejos de partnerships se traducen a lenguaje claro dirigido al inversor — el mismo estándar de comunicación mantenido durante más de 2 años de soporte a clientes en PwC Argentina.',
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
