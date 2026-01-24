# VariAmity Website

The official website for VariAmity - showcasing cloud-agnostic open source software.

## Prerequisites

- [Node.js](https://nodejs.org/) v18, v20, or v22+
- [Yarn](https://yarnpkg.com/) package manager

## Getting Started

### Install Dependencies

```bash
yarn install
```

### Development

Start the local development server with hot reload:

```bash
yarn dev
```

The site will be available at `http://localhost:5173/site/`

### Build for Production

Create a production-ready build:

```bash
yarn build
```

The built files will be output to the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
yarn preview
```

## Deployment

This site is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Automatic Deployment

Push to the `main` branch and the site will be automatically built and deployed via the workflow in `.github/workflows/deploy.yml`.

### Manual Deployment

To deploy manually using gh-pages:

```bash
yarn deploy
```

## Project Structure

```
site/
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions deployment workflow
├── public/
│   └── .nojekyll         # Prevents Jekyll processing on GitHub Pages
├── index.html            # Main HTML file
├── style.css             # Stylesheet (dark theme, logo-inspired colors)
├── main.js               # JavaScript for animations and interactions
├── logo.svg              # VariAmity logo
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## Design

The website design is inspired by the VariAmity logo:

- **Primary color**: `#005a96` (deep blue)
- **Accent color**: `#73fffe` (cyan)
- **Dark background theme** with gradient effects
- **Floating logo animation** in the hero section

## Adding New Projects

To add a new project to the Projects section, edit `index.html` and add a new `<article class="project-card">` element in the `.projects-grid` container. Use the VariObjectStorage card as a template.

## License

MIT License
