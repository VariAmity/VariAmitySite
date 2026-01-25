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

## Adding New Projects

To add a new project to the Projects section, edit `index.html` and add a new `<article class="project-card">` element in the `.projects-grid` container. Use the VariObjectStorage card as a template.
