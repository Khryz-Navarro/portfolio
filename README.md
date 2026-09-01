# Khryz Navarro — Portfolio

A dark, single-page developer portfolio built with React, Vite and Three.js. The hero is a live WebGL shader (`emerald-horizon`) — a deep emerald glow rising from an organic moving horizon — layered under a clean, responsive layout with work, about, experience and contact sections.

**Live:** [khryz-navarro.github.io/portfolio](https://khryz-navarro.github.io/portfolio/)

## Features

- **Live WebGL hero** — a Three.js shader background (`StructureFlowCollection`, `emerald-horizon` variant) that pauses when off-screen and resizes with its container
- **Data-driven content** — all copy, projects, socials and experience live in a single file (`src/data/portfolio.ts`)
- **Scroll-reveal motion** — sections fade and rise into view via `IntersectionObserver`, respecting `prefers-reduced-motion`
- **Responsive** — desktop side rails, a mobile hamburger menu, and layouts that adapt from phone to widescreen
- **Modern React stack** — React 19 with the React Compiler
- **Tailwind CSS v4** — utility-first styling with a small custom theme
- **Automated deploys** — every push to `main` builds and publishes to GitHub Pages via GitHub Actions

## Tech Stack

| Category    | Technology                                              |
| ----------- | ------------------------------------------------------- |
| Framework   | [React](https://react.dev/) 19 (+ React Compiler)       |
| Build tool  | [Vite](https://vite.dev/) 8                             |
| Language    | TypeScript                                              |
| Styling     | [Tailwind CSS](https://tailwindcss.com/) v4             |
| 3D / shader | [Three.js](https://threejs.org/) r128                   |
| Icons       | [lucide-react](https://lucide.dev/)                     |
| Deployment  | GitHub Pages (GitHub Actions)                           |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later (CI uses Node 22)
- npm (included with Node.js)

### Installation

```bash
npm install
```

### Development

Start the local dev server with hot reload:

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`) in your browser.

### Production Build

```bash
npm run build
```

The optimized static files are output to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
portfolio/
├── .github/workflows/
│   └── deploy-pages.yml         # GitHub Pages CI/CD
├── public/                      # Static assets (favicon, icons, .nojekyll)
├── src/
│   ├── assets/                  # Images (profile photo, logos)
│   ├── components/              # Nav, Hero, Work, About, Experience, Contact, Reveal
│   ├── data/
│   │   └── portfolio.ts         # ← All site content lives here
│   ├── shaders/
│   │   ├── emerald-horizon/     # Shader component + GLSL source
│   │   └── threeui.css          # Shared shader styles
│   ├── threeui/
│   │   └── index.tsx            # StructureFlowCollection export surface
│   ├── App.tsx                  # Page composition + side rails
│   ├── App.css                  # Frame, veil, nav underline, reveal transitions
│   ├── index.css                # Tailwind import + theme
│   └── main.tsx                 # Application entry point
├── index.html                   # HTML shell
├── vite.config.ts               # Vite config (base path, aliases)
└── package.json
```

## Customization

Almost everything you'll want to change lives in **`src/data/portfolio.ts`** — your name, role, tagline, email, social links, project cards, stats, tech stack and experience timeline. Update that file and the whole page follows.

Other tweaks:

- **Profile photo** — replace `src/assets/profile.jpg` (shown in the About section)
- **Theme colors & fonts** — `src/index.css` (Tailwind theme) and the Google Fonts link in `index.html`
- **Shader look** — the `emerald-horizon` GLSL and props live in `src/shaders/emerald-horizon/`; the hero passes them in `src/components/Hero.tsx`

## Deployment

The site deploys to GitHub Pages automatically. On every push to `main`, the workflow in `.github/workflows/deploy-pages.yml` runs `npm ci && npm run build` and publishes `dist/`.

The Vite `base` is set to `/portfolio/` in `vite.config.ts` to match the project-site URL. In the repo's **Settings → Pages**, the build source must be set to **GitHub Actions**.

## License

Private project.
