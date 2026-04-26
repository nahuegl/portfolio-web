# portfolio-web — Nahuel González

**EN** · Premium personal portfolio built with Next.js 14, GSAP, and next-intl. Bilingual (EN/ES), dark/light theming, cinematic scroll animations, and individual case study pages for each project.

**ES** · Portfolio personal premium construido con Next.js 14, GSAP y next-intl. Bilingüe (EN/ES), tematización dark/light, animaciones de scroll cinemáticas y páginas de caso de estudio individuales por proyecto.

🌐 **Live:** [nahuelgl-portfolio.vercel.app](https://nahuelgl-portfolio.vercel.app)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, TypeScript strict) |
| Styles | Tailwind CSS v3 + CSS custom properties |
| Animation | GSAP 3 + ScrollTrigger + SplitText |
| i18n | next-intl 3 · `localePrefix: as-needed` |
| Theming | CSS variables · dark/light via `[data-theme]` |
| Deploy | Vercel · auto-deploy from `main` |

---

## Features / Funcionalidades

- **Bilingual EN/ES** — Full translation including metadata, OG images, and aria labels. English at root `/`, Spanish at `/es`.
- **Case study pages** — Each project has a dedicated `/projects/[slug]` page with problem, context, process steps, and measurable results.
- **GSAP animations** — SplitText character reveal on hero, ScrollTrigger section reveals, `quickTo` 3D tilt on project cards.
- **Dark / Light theming** — Warm cream light mode (`#f2ede4`), near-black dark mode. GlitchBackground canvas adapts to active theme.
- **AI agent projects** — Portfolio includes two domain-expert AI agents: a Claims Analyst Agent (9 yrs Sancor Seguros) and a K-1 Tax Assistant (PwC Argentina).
- **SVG mockups** — All project images are hand-crafted SVGs — no external image dependencies, perfect scaling.

---

## Local Setup / Instalación

```bash
# Clone
git clone https://github.com/nahuegl/portfolio-web.git
cd portfolio-web

# Install (legacy peer deps required)
npm install

# Dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure / Estructura

```
app/
  [locale]/
    page.tsx              # Home — all sections
    layout.tsx            # Root layout + NextIntlClientProvider
    projects/
      [slug]/page.tsx     # Case study pages
components/
  sections/               # Hero, Experience, Projects, CaseStudyPage…
  layout/                 # Navbar, Footer, ThemeProvider
  ui/                     # SectionHeader, GlitchBackground, LoadingScreen
lib/data/
  projects.ts             # Project cards data
  caseStudies.ts          # Bilingual case study content
messages/
  en.json                 # English strings
  es.json                 # Spanish strings
public/images/            # SVG project mockups
```

---

## Deployment / Deploy

Automatic deployment to Vercel on every push to `main`.

```bash
git push origin main   # → triggers Vercel production build
```

---

*Built by Nahuel González · Frontend Engineer & AI Engineer · Buenos Aires, Argentina*  
*[linkedin.com/in/nahuelgl17](https://www.linkedin.com/in/nahuelgl17/) · [glnahuel17@gmail.com](mailto:glnahuel17@gmail.com)*
