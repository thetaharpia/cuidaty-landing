# Cuidaty Landing - Project Setup

This project has been configured with modern web development tools for building a production-ready website.

## Installed Tools & Integrations

### 1. Tailwind CSS (v3.4.19)
- **Purpose**: Utility-first CSS framework for rapid UI development
- **Configuration**: `tailwind.config.mjs`
- **Global Styles**: `src/styles/global.css`
- **Plugins Installed**:
  - `@tailwindcss/typography` - Beautiful typography defaults
  - `@tailwindcss/forms` - Form element styling
  - `@tailwindcss/aspect-ratio` - Aspect ratio utilities

#### Usage Example:
```astro
<div class="bg-primary-600 text-white px-4 py-2 rounded-lg">
  Button
</div>
```

### 2. SEO Tools
- **astro-seo**: Comprehensive SEO component
- **@astrojs/sitemap**: Automatic sitemap generation

#### Features:
- Meta tags (title, description)
- Open Graph tags (Facebook, LinkedIn)
- Twitter Cards
- Canonical URLs
- Automatic sitemap at `/sitemap-index.xml`

#### Usage Example:
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="Page Title"
  description="Page description for SEO"
  image="/og-image.jpg"
>
  <!-- Your content -->
</Layout>
```

### 3. Asset Compression
- **@playform/compress**: Automatic compression of CSS, HTML, JS, Images, and SVG
- Configured in `astro.config.mjs`
- Runs automatically during build

### 4. Code Formatting
- **Prettier**: Code formatter with Astro and Tailwind plugins
- **Configuration**: `.prettierrc.mjs`

#### Available Scripts:
```bash
pnpm format        # Format all files
pnpm format:check  # Check if files are formatted
```

## Configuration Files

### astro.config.mjs
Main Astro configuration with all integrations:
- Site URL: `https://cuidaty.com` (update this to your domain)
- Tailwind integration
- Sitemap generation
- Compress integration

### tailwind.config.mjs
Tailwind CSS configuration:
- Custom color palette (primary colors)
- Content paths for file scanning
- Tailwind plugins

### .prettierrc.mjs
Prettier formatting rules:
- Single quotes
- 2-space indentation
- 100 character line width
- Automatic class sorting for Tailwind

## Project Structure

```
cuidaty-landing/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Main layout with SEO
│   ├── pages/
│   │   └── index.astro           # Homepage
│   ├── components/               # Reusable components
│   └── styles/
│       └── global.css            # Tailwind directives
├── public/
│   └── robots.txt                # Search engine instructions
├── astro.config.mjs              # Astro configuration
├── tailwind.config.mjs           # Tailwind configuration
└── .prettierrc.mjs               # Prettier configuration
```

## SEO Checklist

- [x] Meta tags configured
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Sitemap generation
- [x] robots.txt file
- [x] Canonical URLs
- [ ] Create og-image.jpg (1200x630px) in /public
- [ ] Update site URL in astro.config.mjs
- [ ] Add favicon files

## Development Workflow

1. **Start dev server**:
   ```bash
   pnpm dev
   ```

2. **Format code before committing**:
   ```bash
   pnpm format
   ```

3. **Build for production**:
   ```bash
   pnpm build
   ```

4. **Preview production build**:
   ```bash
   pnpm preview
   ```

## Customization

### Colors
Edit `tailwind.config.mjs` to change the primary color palette:
```js
colors: {
  primary: {
    // Your custom colors
  }
}
```

### SEO Defaults
Edit `src/layouts/Layout.astro` to change default SEO values:
```astro
const {
  title = 'Your Default Title',
  description = 'Your default description',
  // ...
} = Astro.props;
```

### Site URL
Update the site URL in `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

## Next Steps

1. Create your Open Graph image at `/public/og-image.jpg`
2. Update the site URL in `astro.config.mjs`
3. Add your custom favicon files
4. Build your pages and components
5. Customize the Tailwind color scheme to match your brand
6. Add Google Analytics or other tracking (consider using Partytown for performance)

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [astro-seo Documentation](https://github.com/jonasmerlin/astro-seo)
