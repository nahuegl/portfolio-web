# Portfolio Web Nahuel - Documentación Técnica (Watch Dogs Aesthetic)

## Resumen Ejecutivo
El **Portfolio Web** es una Single Page Application (SPA) desarrollada para mostrar el perfil profesional de Nahuel, integrando sus roles como Desarrollador Frontend y Analista de Datos. El diseño está fuertemente inspirado en la interfaz cibernética y de infiltración tecnológica de los videojuegos *Watch Dogs* y *Watch Dogs 2*, utilizando paralelismos visuales de consolas de comandos y redes de nodos (ctOS), balanceando la estética con alta accesibilidad y usabilidad profesional.

## Stack Tecnológico
- **Core Framework:** React 18 + Vite
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4 para diseño atómico y manejo de tokens (Cyberpunk theme).
- **Animaciones:** Framer Motion (para transiciones de secciones a 60fps) y HTML5 Canvas (para el fondo interactivo).
- **Internacionalización:** `i18next` y `react-i18next` para el sistema bilingüe integrado (Inglés por defecto, seleccionable a Español).
- **Iconografía:** Lucide React.

## Principios de Diseño
El diseño no recae en plantillas genéricas, sino que sigue una identidad definida:
1. **Modo Claro / Oscuro Dual:** Lejos de ser un simple cambio de colores, la iluminación y la paleta de fondo se mutan. El Dark Mode asume un color primario Deep Black (`#09090b`) con destellos de Neón Cían (`#0bd3d3`) y Magenta (`#f92672`). El Light Mode fue calibrado para asemejarse a papel ahumado (`#f8fafc`), no blanco puro, invirtiendo la carga tonal de la estética de red para no ser agresiva.
2. **Minimalismo Hack:** Formas agudas, bordes simples de `1px`, cursores tipo `crosshair` (retícula) mundial, y glitchs CSS sutiles (offset en las transformaciones). 
3. **Typography:** Empleo global de fuentes monoespaciadas (`Space Mono` / `Courier`) para títulos e interfaces de datos para mimetizar líneas de comandos y lecturas de sistemas de red.

## Componentes y Arquitectura

### 1. `App.tsx` & `main.tsx`
Orquestadores de la SPA. Definen mediante estados si el entorno está cargando, o en operación normal. También enlazan el entorno multilenguaje al arbol del DOM, envuelto en una clase Tailwind `dark` por defecto.

### 2. `GlitchBackground.tsx` (Canvas Background)
- **Concepto:** Fiel a las redes *DedSec* de Watch Dogs, genera dinámicamente sobre Canvas 2D una red geométrica de nodos (partículas que se cruzan y vinculan si están próximas). 
- **Funcionalidades:** A su vez, produce interferencias horizontales ("scanlines") pseudo-aleatorias y desplazamientos en el imageData del canvas que destrozan brevemente el marco (glitching visual controlado), coloreado según el tema Light/Dark.

### 3. `LoadingScreen.tsx` (Pre-carga)
- **Concepto:** Es la compuerta de acceso. En lugar de pesadas barras de progreso (desestimadas en refactorings), ahora utiliza anillos concéntricos creados con Tailwind Borders rotando en direcciones opuestas sobre sí mismos a diferentes velocidades espaciales, con la leyenda "LOADING..." glitcheando en el centro.

### 4. `Hero.tsx` (Presentación)
- Renderiza la tarjeta de presentación frontal. Usa efectos de mezcla múltiple: Imagen en escala de grises y un contorno Cían/Magenta offset. Ante el hover del usuario, remueve el filtro de blanco y negro, recuperando el color.
- Agrega un bloque introductorio, perfiles sociales extraídos con estilos de "Command Line Options" simples.

### 5. `Experience.tsx` & `Education.tsx`
Líneas de tiempo asimétricas (*Timelines*). En la versión final, estas vistas recuperan toda la historia laboral en firmas como PwC y Sancor Seguros, importando un array de nodos desde el diccionario `en.json` y `es.json`. Ambos emplean `whileInView` de Framer Motion para ser renderizados dinámicamente sólo cuando el viewport del navegador los intercepta en el scroll.

### 6. `Certifications.tsx`
Para evitar sobrecarga de la historia académica, los cursos se desprenden en este componente. Incorpora bloques para *Certificaciones Clave* (Azure, English C2 Proficient, SAP) con animación y diseño de bloque resaltado. Acompañado de *Cursos adicionales* en un esquema de "log" continuo abajo.

### 7. `Projects.tsx`
Un bloque intencionalmente trunco llamado "Anulación del Sistema: Trabajo en Progreso". Usa efectos en React/CSS para simular que dicha área está bloqueada con un candado emitiendo pulsos, rematando el estilo cibernético narrativamente (el usuario deduce que no hay proyectos porque el sistema no permite el acceso final).

## Estructura de i18n
Todo el contenido estático de lenguajes está unificado. Modificar `src/i18n/locales/es.json` y `en.json` repercute sin necesidad de build adicional. El toggle se aloja en `Navbar.tsx`.

## Configuración y Setup 
Los scripts clave disponibles son:
- `npm install` (Instalación)
- `npm run dev` (Servidor de desarrollo local en puerto 5173).
- `npm run build` (Inicia tsc compilando TypeScript con validación estricta y empaqueta Vite produciendo el `/dist`).

## Resumen de Rendimiento, Accesibilidad (WCAG) y Despliegue
- La Web no usa frameworks CSS gigantescos en el bundle gracias a la compilación en tiempo de ejecución nativo de Vite 8. 
- Los contrastes del modo oscuro y claro superan la estricta relación 4.5:1. 
- Todas las animaciones que utilizan transformaciones/opacidad se designaron con `will-change: transform` o corren fuera del main UI Thread para alcanzar los 60 fps sólidos.
- Lista para despliegue productivo *One-Click* (ej. plataforma Vercel).
