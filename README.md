# Jambavan Software Systems (JSP)

Official marketing website for **Jambavan Software Systems Pvt Ltd** — a software engineering services and IT training company with offices in Bangalore (HQ) and Krishnagiri, Tamil Nadu, India.

A fully client-side single-page application (no backend, no database) built with React 19 + Vite, featuring an interactive 3D project portfolio, Framer Motion animations, and a Tailwind CSS v4 design system.

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 19.1, React DOM 19.1 |
| Build | Vite 7.1 (`@vitejs/plugin-react`) |
| Routing | react-router-dom 7.9 (client-side) |
| Styling | Tailwind CSS 4.1 (`@tailwindcss/vite`, CSS-first `@theme` config) |
| Animation | framer-motion 12.23 |
| 3D | three 0.185, @react-three/fiber 9.6, @react-three/drei 10.7 |
| Linting | ESLint 9 (flat config, react-hooks + react-refresh) |

Fonts (Google Fonts CDN): Hanken Grotesk (display), Inter (body), Geist (labels), Material Symbols Outlined (icons).

Plain JavaScript/JSX — no TypeScript.

## Getting Started

Requires Node.js (developed on Node 24) and npm.

```bash
npm install       # install dependencies
npm run dev       # start dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
```

No environment variables or `.env` files are required. There is no test framework configured.

## Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, trust metrics, vision & mission, tech stack, services, delivery process, CTA |
| `/projects` | Projects | Interactive **3D portfolio carousel** (lazy-loaded), category filters, case-study modals, keyboard nav |
| `/courses` | Courses | Catalog of 15 training courses |
| `/centers` | Centers | Office locations — Bangalore HQ & Krishnagiri branch |
| `/joinus` | JoinUs | Careers: perks, open roles, apply via mailto |
| `/contact` | Contact | Contact info + message form (Formspree) |
| `/about` | About | Who we are, capabilities, why us |

## Features

- **3D project portfolio** — React Three Fiber canvas with rotating category icons, filters (Web / Mobile / Cloud / Custom Software / E-commerce), animated info panel, and arrow-key navigation
- **Motion design** — scroll-triggered reveals, staggered card entrances, hover lifts, gradient headings via Framer Motion
- **Tailwind v4 design system** — Material-3-style tokens in `src/index.css` (`@theme`): primary color, surface containers, typography scale, shadows, gradient utilities
- **Responsive navbar** — fixed with backdrop-blur on scroll and mobile hamburger menu
- **Code splitting** — Projects page is `React.lazy`-loaded as its own chunk
- **Header/footer** — contact bar, social links, quick links, compliance badges, dynamic year

## Project Structure

```
src/
├── main.jsx                  # React root + BrowserRouter
├── App.jsx                   # Layout (Header/Navbar/Footer) + routes
├── index.css                 # Tailwind v4 @theme design tokens
├── constants/index.js        # Branches, social links, courses data
├── components/
│   ├── Header.jsx, Navbar.jsx, Footer.jsx
│   └── three/                # 3D components (ProjectsCarousel3D is the active one)
├── pages/                    # Home, Projects, Courses, Centers, JoinUs, Contact, About
└── assets/                   # Images + brand/tech icons
```

## Content

- **6 services:** Custom Software Development, Full-Stack Web Development, Mobile App Development, UI/UX Design, Cloud & DevOps, E-Commerce Platforms
- **15 training courses:** Java/Python Full Stack, Selenium Automation, DevOps, Data Science, MERN, MEAN, DSA, API Testing, and more (defined in `src/constants/index.js`)
- **6 showcase projects:** OmniChannel E-Commerce, NovaCloud, CarePulse, FleetSync, Apex Financial, SmartEd

## Integrations

- **Contact form** → Formspree (`src/pages/Contact.jsx`) — currently a placeholder endpoint (`yourFormID`); replace with a real form ID before deploying
- **Careers apply** → `mailto:jambavansoftwaresystemspvtltd@gmail.com`
- Socials: phone `+91 8073514213`, Facebook, Instagram, WhatsApp

## Known Notes

- `node_modules/` and `dist/` are committed and there is no `.gitignore` — consider adding one
- `swiper`, `react-icons`, and `@react-three/postprocessing` are declared but unused
- Several components under `src/components/three/` (HeroScene, TechGlobe, Particles, `upgraded/*`) are unused legacy code
