# Cuidaty Landing Page

Official landing page for Cuidaty - a comprehensive practice management platform for mental health professionals.

## 🌟 Features

- **Modern Design**: Clean, professional interface with responsive layout
- **SEO Optimized**: Built-in SEO meta tags, Open Graph support, and automatic sitemap generation
- **Performance**: Optimized with automatic asset compression (CSS, HTML, JS, images, SVG)
- **Accessibility**: WCAG-compliant components and semantic HTML
- **Sections**:
  - Hero section with call-to-action
  - Features showcase
  - Social proof and testimonials
  - About section with founder information
  - Contact footer

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Modern web framework
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
  - Forms plugin
  - Typography plugin
  - Aspect Ratio plugin
- **[Prettier](https://prettier.io)** - Code formatting
- **GitHub Actions** - CI/CD pipelines

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) 20.x or higher
- [pnpm](https://pnpm.io/) 9.x or higher

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/thetaharpia/cuidaty-landing.git
   cd cuidaty-landing
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

   The site will be available at `http://localhost:4321`

## 📦 Available Commands

| Command              | Action                                              |
| :------------------- | :-------------------------------------------------- |
| `pnpm install`       | Install dependencies                                |
| `pnpm dev`           | Start development server at `localhost:4321`        |
| `pnpm build`         | Build production site to `./dist/`                  |
| `pnpm preview`       | Preview production build locally                    |
| `pnpm format`        | Format code with Prettier                           |
| `pnpm format:check`  | Check code formatting                               |
| `pnpm astro ...`     | Run Astro CLI commands                              |

## 📁 Project Structure

```text
/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD pipelines
├── public/                 # Static assets
│   ├── assets/            # SVG illustrations and logos
│   ├── features/          # Feature icons
│   ├── testimonials/      # Testimonial images
│   └── ...                # Favicon, robots.txt, etc.
├── src/
│   ├── components/        # Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── sections/      # Page sections
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro
│   ├── pages/             # Route pages
│   │   └── index.astro
│   └── styles/            # Global styles
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind configuration
└── package.json
```

## 🔄 CI/CD

The project includes automated GitHub Actions workflows:

### Quality Workflow
- **Formatting**: Validates code formatting with Prettier
- **Build**: Ensures the project builds successfully
- **Triggers**: Push to main, pull requests

### Security Workflow
- **Dependency Audit**: Checks for security vulnerabilities
- **Triggers**: Push, pull requests, weekly schedule

## 🌐 Deployment

The site is configured for deployment at `https://cuidaty.com`.

To build for production:

```bash
pnpm build
```

The built files will be in the `./dist/` directory, ready for deployment to any static hosting service.

## 📄 License

Copyright © 2026 Cuidaty. All rights reserved.

## 🤝 Contributing

This is a private project for Cuidaty. For any questions or contributions, please contact the development team.

---

Built with ❤️ by [ThetaHarpia](https://github.com/thetaharpia)
