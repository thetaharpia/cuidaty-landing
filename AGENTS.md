# AGENTS.md - Developer Guide for Cuidaty Landing Page

This guide contains essential information for agentic coding agents working on the Cuidaty landing page project.

## Project Overview

**Project**: Cuidaty Landing Page  
**Framework**: Astro 5.17.3 with TypeScript (strict mode)  
**Styling**: Tailwind CSS 3.4.19  
**Package Manager**: pnpm  
**Language**: Portuguese (Brazilian) - pt-BR  
**Purpose**: Landing page for Cuidaty practice management software for mental health professionals

## Build & Development Commands

### Core Commands

```bash
# Development server (http://localhost:4321)
pnpm dev

# Production build
pnpm build

# Preview production build locally
pnpm preview

# Format code with Prettier
pnpm format

# Check formatting (CI/CD use)
pnpm format:check

# Astro CLI commands
pnpm astro add [integration]
pnpm astro check  # Type checking (not in package.json but recommended)
```

### Testing

**⚠️ No testing framework is currently configured**

- Consider adding Vitest for unit testing
- Consider adding Playwright for E2E testing
- No linting with ESLint configured

### Docker Commands

```bash
# Build container
docker build -t cuidaty-landing .

# Run container
docker run -p 4321:4321 cuidaty-landing
```

## Project Structure

```
cuidaty-landing/
├── src/
│   ├── assets/           # Local images and static files
│   ├── components/       # Astro components
│   │   ├── Header.astro  # Site header
│   │   ├── Footer.astro  # Site footer
│   │   └── sections/     # Landing page sections (10 total)
│   ├── layouts/
│   │   └── Layout.astro  # Main layout with comprehensive SEO
│   ├── pages/
│   │   └── index.astro   # Homepage (single-page landing)
│   └── styles/
│       └── global.css    # Global Tailwind styles
├── public/               # Static assets (images, icons, etc.)
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
├── .prettierrc.mjs      # Code formatting rules
└── tsconfig.json        # TypeScript strict configuration
```

## Code Style Guidelines

### Formatting (Prettier)

- **Semicolons**: Required (semi: true)
- **Quotes**: Single quotes (singleQuote: true)
- **Indentation**: 2 spaces (tabWidth: 2, useTabs: false)
- **Line length**: 100 characters (printWidth: 100)
- **Trailing commas**: ES5 compatible (trailingComma: 'es5')
- **Plugins**: Astro, Tailwind CSS class sorting

### TypeScript

- **Configuration**: Extends Astro's strict tsconfig
- **Type safety**: Full TypeScript strict mode enabled
- **Props interfaces**: Always define interfaces for component props
- **Imports**: Use TypeScript imports for type-only imports

### Import Organization

```typescript
---
// 1. Astro built-in imports first
import { SEO } from 'astro-seo';
import { Image } from 'astro:assets';

// 2. External library imports
import type { SomeType } from 'external-lib';

// 3. Local asset imports
import backgroundImage from '../../assets/background.jpg';
import logo from '../../assets/logo.svg';

// 4. Type definitions
interface Props {
  title?: string;
  description?: string;
}

// 5. Component logic
const { title, description } = Astro.props;
---
```

### Component Structure (Astro)

```astro
---
// TypeScript frontmatter
import type { ComponentProps } from './types';

interface Props {
  title?: string;
  variant?: 'primary' | 'secondary';
}

const { title = 'Default Title', variant = 'primary' } = Astro.props;
---

<!-- HTML template -->
<section class="container mx-auto px-4">
  <h2 class="text-2xl font-bold">{title}</h2>
</section>

<style>
  /* Component-scoped CSS */
  section {
    /* Avoid if possible, prefer Tailwind */
  }
</style>

<script>
  // Client-side JavaScript
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize component
  });
</script>
```

### CSS/Tailwind Guidelines

- **Utility-first**: Prefer Tailwind utilities over custom CSS
- **Custom colors**: Use defined Cuidaty color palette from tailwind.config.mjs
- **Responsive**: Mobile-first responsive design (sm:, md:, lg:, xl:, 2xl:)
- **Class organization**: Use Prettier Tailwind plugin for automatic class sorting
- **Component styles**: Only use `<style>` tags for animations or complex layouts

#### Cuidaty Color Palette

```css
/* Primary brand colors */
cuidaty-dark: #0c202f
cuidaty-primary: #356588
cuidaty-secondary: #5AC3B0
cuidaty-accent: #a7e9a5
cuidaty-light: #ddfdbe

/* Supporting colors */
beige: #F4F1EA
beige-dark: #EBE7DD
mission-blue: #0C202F
teal-light: #CEEDE8
```

### Naming Conventions

- **Files**: kebab-case (hero-section.astro, background-image.jpg)
- **Components**: PascalCase in frontmatter, kebab-case for files
- **Variables**: camelCase
- **CSS classes**: Tailwind utilities + BEM for custom styles
- **Assets**: Descriptive names (psychologist-taking-coffee.jpg)

### Image Optimization

```astro
<!-- Use Astro's Image component for optimization -->
<Image
  src={backgroundImage}
  alt="Descriptive alt text"
  class="h-full w-full object-cover"
  widths={[640, 1024, 1920]}
  sizes="100vw"
  loading="eager"
  Only
  for
  above-the-fold
  images
  fetchpriority="high"
  Only
  for
  critical
  images
  decoding="async"
  quality={80}
  format="webp"
/>
```

### SEO Requirements

- **Structured data**: Use JSON-LD schemas (already implemented)
- **Meta tags**: Complete Open Graph and Twitter Cards
- **Images**: Always include descriptive alt text
- **Portuguese content**: Use pt-BR language attributes
- **Performance**: Optimize images, preload critical resources

### Performance Guidelines

- **Critical resources**: Preload fonts and above-the-fold images
- **Image optimization**: Use WebP format, appropriate sizes
- **Font loading**: Use display: swap for web fonts
- **Bundle optimization**: Leverage Astro's build optimization
- **Prefetching**: Implement hover-based link prefetching (already in Layout.astro)

## Error Handling

### TypeScript Errors

- Use strict mode TypeScript configuration
- Define interfaces for all component props
- Handle optional props with default values

### Build Errors

- Check file imports and paths
- Validate Tailwind class names
- Ensure image assets exist in correct locations

### Runtime Errors

- Use defensive programming for DOM manipulation
- Check for element existence before accessing
- Respect user motion preferences for animations

## Content Guidelines

- **Language**: Brazilian Portuguese (pt-BR)
- **Tone**: Professional, healthcare-focused
- **Target audience**: Mental health professionals
- **Brand voice**: Supportive, technology-focused, professional

## Deployment Notes

- **Output**: Server-side rendering (SSR) with Node.js adapter
- **Environment**: Node.js 20+ required
- **Assets**: Automatic compression enabled
- **Sitemap**: Generated automatically
- **Health checks**: Container includes HTTP health checks on port 4321

## CI/CD Pipeline

- **Quality workflow**: Format checking and build validation
- **Security workflow**: Weekly dependency audits
- **Artifacts**: Build outputs uploaded for deployment

## Key Dependencies

- `@astrojs/node`: SSR adapter
- `@astrojs/sitemap`: SEO sitemap generation
- `@playform/compress`: Asset compression
- `astro-seo`: Comprehensive SEO components
- `sharp`: Image optimization
- `tailwindcss` + plugins: Typography, Forms, Aspect Ratio

## Common Issues & Solutions

1. **Build failures**: Check TypeScript strict mode compliance
2. **Image loading**: Ensure proper paths and formats
3. **Styling**: Verify Tailwind class names and custom color usage
4. **Performance**: Use proper image optimization and loading strategies

Remember: This is a production landing page focused on performance, SEO, and professional presentation for healthcare software.
