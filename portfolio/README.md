# Portfolio

A personal portfolio website built with React and Vite. The app is a fast, responsive single-page site with a clean layout, light/dark mode support, and hot module replacement for a smooth development experience.

## Features

- **Modern React stack** — React 19 with the React Compiler for optimized rendering
- **Fast development** — Vite with instant HMR when you edit files
- **TypeScript** — Type-safe components and tooling
- **Responsive layout** — Adapts to desktop and mobile screen sizes
- **Light/dark mode** — Automatically follows your system color scheme preference
- **Production-ready build** — Optimized static output via `vite build`

## Tech Stack

| Category   | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | [React](https://react.dev/) 19      |
| Build tool | [Vite](https://vite.dev/) 8         |
| Language   | TypeScript                          |
| Linting    | ESLint                              |
| Styling    | CSS (custom properties, nested CSS) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
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

Serve the production build locally:

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
├── public/           # Static assets (favicon, icons)
├── src/
│   ├── assets/       # Images and logos
│   ├── App.tsx       # Main application component
│   ├── App.css       # Component styles
│   ├── index.css     # Global styles and theme variables
│   └── main.tsx      # Application entry point
├── index.html        # HTML shell
├── vite.config.ts    # Vite configuration
└── package.json      # Dependencies and scripts
```

## Customization

Edit `src/App.tsx` to update the page content. Global styles and theme colors live in `src/index.css`; component-specific styles are in `src/App.css`. Replace images in `src/assets/` and update `public/favicon.svg` to personalize the site.

## License

Private project.
