# 🖥️ sys.portfolio.nahuel

*Interactive & responsive single-page portfolio built with React, Vite, and tailwind_CSS v4.*
*Portfolio interactivo y responsivo construido con React, Vite y tailwind_CSS v4.*

---

## 🌎 Overview / Descripción General

**(EN)** 
This repository contains the source code for my professional portfolio. Designed with a distinct "hacker/cyberpunk" aesthetic inspired by the *Watch Dogs* franchise, it serves as a digital presentation card showcasing my transition into the tech industry, my professional experience as a Frontend Developer & Data Analyst, and my key certifications. The interface includes dynamic 60fps animations, fully responsive components, a unified i18n multi-language system (EN/ES), and a real-time dark/light theme switch featuring animated particle network backgrounds.

**(ES)**
Este repositorio contiene el código fuente de mi portfolio profesional. Diseñado con una fuerte estética "hacker/cyberpunk" inspirada en los videojuegos de *Watch Dogs*, sirve como una tarjeta de presentación digital mostrando mi transición a la industria tecnológica, mi experiencia trabajando como Desarrollador Frontend y Analista de Datos, junto con mis certificaciones clave. La interfaz cuenta con animaciones dinámicas a 60 cuadros por segundo, es 100% responsiva, e integra un sistema i18n bilingüe nativo (Inglés/Español) y alternancia instantánea de modo claro/oscuro combinada con redes de partículas animadas de fondo.

---

## ⚙️ Tech Stack / Tecnologías Implementadas

- **Framework:** React 18, Vite 8
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, Custom CSS Animations
- **Motion:** Framer Motion (Scroll reveal, stagger layouts, and transitions)
- **i18n:** `i18next`, `react-i18next`
- **Icons:** `lucide-react`
- **Deployment:** Vercel

---

## ⚡ Core Features / Funcionalidades Clave

- **Dynamic Canvas Background:** A geometric node network (`GlitchBackground.tsx`) animated via HTML5 Canvas that adapts color profiles dynamically to the current Theme.
- **Bilingual System:** Fully translated JSON architecture (`en.json`, `es.json`) supporting text and dynamic metadata generation.
- **Glassmorphism & Cyberpunk UI:** Custom UI styling achieving a terminal-like HUD with crosshair cursors and subtle glitches offset.
- **One-click CV Download:** Easily accessible Resume in PDF format attached directly into the Hero component.
- **Strictly Typed:** Type-safe development enforcing robust and scalable component bindings.

---

## 🚀 Getting Started / Guía de Instalación

To run this project locally, simply clone the repository and run the development server via NPM.
Para correr este proyecto localmente, bastará con clonar el repo y ejecutar el servidor usando NPM.

```bash
# 1. Clone the repository / Clonar el repositorio
git clone https://github.com/nahuegl/portfolio-web.git

# 2. Navigate into the directory / Moverse al directorio
cd portfolio-web

# 3. Install NPM dependencies / Instalar dependencias
npm install 
# (Note: if using older NPM verify using --legacy-peer-deps for Tailwind v4 and Vite 8 compatibility)

# 4. Start the frontend / Iniciar el entorno de desarrollo
npm run dev
```

---
*Built with logic, passion & code. / Creado con lógica, pasión y código.*
