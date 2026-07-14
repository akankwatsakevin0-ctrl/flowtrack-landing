# FlowTrack — SaaS Landing Page

[![Live Demo](https://img.shields.io/badge/Live-Demo-38BDF8?style=for-the-badge&logo=vercel)](https://contracts-eta.vercel.app)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=fff)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

A responsive landing page for a fictional SaaS project management tool. Built with React 18, Vite, and Tailwind CSS — designed to showcase modern frontend development, component architecture, and pixel-perfect UI.

**Live:** [https://contracts-eta.vercel.app](https://contracts-eta.vercel.app)

---

## Sections

- **Hero** — gradient text, animated CTAs
- **Features** — 6-card grid covering AI, collaboration, workflows, dashboards, security, and mobile
- **Stats** — trust indicators (10k+ teams, 99.9% uptime, etc.)
- **Pricing** — 3-tier table (Starter, Professional, Enterprise)
- **Testimonials** — customer quotes
- **Call to Action** — final conversion section
- **Footer** — links, social icons

---

## Project Structure

```
├── public/
│   └── favicon.svg          # Favicon asset
├── src/
│   ├── App.jsx              # Root component with all sections
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind imports + custom styles
├── index.html               # HTML entry point
├── vite.config.js           # Vite config
├── tailwind.config.js       # Tailwind theme and content paths
├── postcss.config.js        # PostCSS config (Tailwind + autoprefixer)
└── package.json             # Dependencies and scripts
```

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI components and state |
| Vite | Build tool and HMR |
| Tailwind CSS 3 | Utility-first styling |
| Lucide React | Icon library |

---

## Quick Start

```bash
git clone https://github.com/akankwatsakevin0-ctrl/flowtrack-landing.git
cd flowtrack-landing

npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production build

```bash
npm run build
npm run preview
```

---

## License

MIT
