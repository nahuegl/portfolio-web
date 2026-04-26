# Retrospectiva — portfolio-web

**Proyecto:** Portfolio Personal Premium  
**URL producción:** https://nahuelgl-portfolio.vercel.app  
**Repositorio:** https://github.com/nahuegl/portfolio-web  
**Período de desarrollo:** Marzo 2026 — Presente  
**Estado:** Activo / En evolución continua  

---

## 1. Resumen del proyecto

Portfolio personal de alta performance construido con Next.js 14 App Router, GSAP, Tailwind CSS y next-intl. Incluye soporte bilingüe (EN/ES), theming dark/light, animaciones cinemáticas, y una sección de proyectos con casos de estudio individuales accesibles en `/projects/[slug]`.

---

## 2. Fases completadas

| Fase | Descripción | Fecha |
|---|---|---|
| Scaffolding inicial | Next.js + Tailwind + GSAP + next-intl | Mar 2026 |
| Migración full App Router | De Vite a Next.js 14 con estructura /[locale]/ | Abr 13, 2026 |
| Light mode + dark mode | Paleta CSS custom properties, warm cream light | Abr 13, 2026 |
| Loading screen + GlitchBackground | Canvas partículas, curtain wipe, animación entrada | Abr 13, 2026 |
| SVG mockups + OG image | Mockups hand-crafted, /api/og edge route | Abr 13, 2026 |
| i18n completo | Todas las secciones traducidas EN/ES | Abr 14, 2026 |
| Projects redesign | Featured layout + GSAP 3D tilt + 2 proyectos nuevos | Abr 24, 2026 |
| Case studies | Páginas /projects/[slug] bilingües, 5 proyectos | Abr 24, 2026 |
| Fix static generation | setRequestLocale para Vercel build | Abr 24, 2026 |
| AI agent projects | Swap dashboard/CRM por claims-agent + k1-assistant | Abr 25, 2026 |

---

## 3. Lo que funcionó bien ✓

### Arquitectura
- **`localePrefix: 'as-needed'`** — Inglés en la raíz sin prefijo, perfecto para SEO y UX
- **CSS custom properties para theming** — Un único cambio de variable adapta todo el sitio sin duplicación de clases Tailwind; escalable y mantenible
- **`ProjectImage` como componente standalone** — Extraerlo fuera de `Projects()` evitó el bug de hydration por nested `<a>` y simplificó la lógica
- **Datos bilingües en `caseStudies.ts` (no en next-intl)** — La decisión de no meter el contenido de casos de estudio en los JSON de mensajes fue correcta: los archivos `messages/*.json` no explotan en tamaño y el contenido largo es más manejable en TypeScript
- **`gsap.quickTo` para el 3D tilt** — Seguimiento del mouse fluido sin event listeners pesados ni re-renders; mejor opción que CSS `transform` directo

### Flujo de trabajo
- **Ramas por feature** (`feat/projects-redesign`, `feat/case-studies`) — El merge limpio con `--no-ff` mantiene el historial legible
- **Vercel auto-deploy desde `main`** — Zero friction en el ciclo build → review → deploy
- **SVG mockups hand-crafted** — Control total sobre paleta y composición; ninguna dependencia de imágenes externas; escalan perfecto en cualquier resolución

---

## 4. Lo que salió mal / errores a no repetir ✗

### Bugs encontrados
| Bug | Causa | Fix aplicado |
|---|---|---|
| `ReferenceError: Github is not defined` | Import de `Github` eliminado pero usado en `ProjectImage` | Limpiar todos los imports al refactorizar un componente |
| `<a> cannot be descendant of <a>` | Links de GitHub/Live dentro de `<Link>` wrapeando la card | Mover los links a la page de caso de estudio; overlay con `<div>` simple |
| Hero name invisible en producción | `gsap.set(h1, { opacity:0 })` antes de SplitText — el parent quedaba invisible | Hacer `gsap.set` en los chars, no en el parent, o resetear el parent antes de animar |
| SplitText mid-word break | GSAP SplitText crea spans por carácter — el browser los separa como si fueran palabras | `type: 'words,chars'` + `whiteSpace: nowrap` en los word wrappers |
| Vercel build ERROR (static generation) | `useMessages()` y `getLocale()` de next-intl leen `headers` en server components | Agregar `setRequestLocale(locale)` en layout + todas las páginas `[locale]/**` |
| Deploy fallaba como Vite | Vercel recordaba config de proyecto anterior (outputDirectory: dist) | Agregar `vercel.json` con framework explícito + buildCommand |
| SVG roto en producción | Entidad `&` sin escapar en el SVG del CRM | Siempre usar `&amp;` en atributos SVG; validar con xmllint antes de commitear |

### Decisiones que se podrían haber tomado antes
- **`setRequestLocale` desde el inicio** — La docs de next-intl lo documenta claramente para SSG; debería ser parte del setup estándar de cualquier proyecto con `[locale]`
- **Separar `ProjectImage` desde el inicio** — El componente siempre iba a necesitar ser standalone; no debería haberse inicializado inline dentro de `Projects()`
- **Definir el tipo de contenido de los casos de estudio antes de scaffoldear la UI** — Se construyó la UI y después se diseñó el data model; hacerlo al revés ahorra refactoring

---

## 5. Aprendizajes técnicos clave

- **next-intl + SSG en Vercel**: SIEMPRE agregar `setRequestLocale(params.locale)` en cada Server Component que esté bajo un segmento dinámico `[locale]`. Sin esto, cualquier ruta dentro de `[locale]/` falla en `next build` con `DYNAMIC_SERVER_USAGE`.
- **GSAP en Next.js App Router**: `if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }` fuera del componente. Nunca dentro de `useEffect`. El registro global solo ocurre una vez.
- **`<Link>` envolviendo cards completas**: Si la card tiene elementos interactivos secundarios, usar `e.stopPropagation()` en ellos, o directamente moverlos fuera de la card (como se hizo con los links GitHub/Live).
- **CSS custom properties > Tailwind dark: variants para theming complejo**: El enfoque de RGB triplets en variables CSS (`--color-dark: 9 9 11`) permite composición con opacidad en Tailwind (`bg-dark/60`) y cambia todo el sitio con un atributo en `html`.

---

## 6. Stack final

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Next.js | 14.2.x |
| Lenguaje | TypeScript | Strict |
| Estilos | Tailwind CSS | v3 + CSS custom properties |
| Animación | GSAP + ScrollTrigger | 3.12.x |
| Scroll | (Lenis — pendiente integración) | — |
| i18n | next-intl | 3.26.x |
| Deploy | Vercel | — |
| CI/CD | GitHub → Vercel auto-deploy | — |

---

## 7. Estado del backlog

| Tarea | Prioridad | Estado |
|---|---|---|
| Integrar Lenis smooth scroll | Alta | Pendiente |
| Agregar links reales de AI agent projects cuando estén deployados | Alta | En progreso |
| Actualizar metadata/OG con dominio propio si se adquiere | Media | Pendiente |
| Agregar sección de testimonios / recomendaciones | Baja | Idea |
| Contact form con backend real (Resend / Formspree) | Media | Pendiente |
| Lighthouse audit en producción | Alta | Pendiente |

---

## 8. Métricas de producción (a completar)

> Completar después de hacer un Lighthouse audit en producción.

| Métrica | Objetivo | Real |
|---|---|---|
| LCP | < 1s | — |
| CLS | ≈ 0 | — |
| FID / INP | < 100ms | — |
| Lighthouse Performance | > 90 | — |
| Lighthouse Accessibility | > 95 | — |

---

## 9. Notas del desarrollador

> Esta sección es para completar con observaciones personales.

_¿Hay algo que cambiarías del stack? ¿Algo de la arquitectura que se volvió incómodo de mantener? ¿Qué agregarías si empezaras de nuevo?_

---

*Generado: 2026-04-25*  
*Próxima revisión recomendada: después de completar claims-analyst-agent y k1-tax-assistant*
