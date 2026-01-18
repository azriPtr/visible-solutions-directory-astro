# UK Locksmith Directory

A modern, high-performance directory platform for connecting customers with verified locksmith professionals across the United Kingdom. Built with Astro for optimal performance and SEO, featuring server-side rendering, content collections, and a clean, accessible design.

## 🎯 About This Project

UK Locksmith Directory is a comprehensive service business directory platform that helps homeowners and businesses find verified, local locksmith professionals. The platform includes advanced search functionality, detailed business profiles, educational content, and multiple ways for locksmiths to showcase their services and credentials.

## ✨ Key Features

- 🔍 **Advanced Search** - Search locksmiths by location, service type, and availability
- 📱 **Responsive Design** - Mobile-first, fully responsive UI built with Tailwind CSS v4
- 🏢 **Business Listings** - Detailed profiles with ratings, reviews, service areas, and credentials
- 📝 **Content Collections** - SEO-optimized articles, guides, and resources using Astro Content Collections
- 🚀 **Performance Optimized** - Server-side rendering, optimized images with srcset, lazy loading
- ♿ **Accessible** - Semantic HTML5, ARIA labels, keyboard navigation support
- 🎨 **Modern UI** - Built with FlyonUI component library and Tailwind CSS v4
- 📍 **Location-Based Pages** - Dynamic routing for counties, cities, and service areas
- ✅ **Verification System** - Badge system for verified, DBS-checked, and insured professionals
- 📞 **Emergency Support** - Dedicated emergency locksmith finder and AI dispatch system

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** v5.16.6 - Static site generator with hybrid rendering
- **[Tailwind CSS](https://tailwindcss.com)** v4.1.18 - Utility-first CSS framework
- **[FlyonUI](https://flyonui.com)** v2.4.1 - Component library built on Tailwind
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **Content Collections** - Built-in Astro feature for managing content
- **Plus Jakarta Sans** - Modern, professional typeface

## 📁 Project Structure

```text
/
├── public/              # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/          # Local images (optimized with Astro)
│   │   ├── logo.svg
│   │   └── article-*.png
│   ├── components/      # Reusable UI components
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PageHero.astro
│   │   ├── FAQ.astro
│   │   └── ...
│   ├── content/         # Content Collections (Markdown + frontmatter)
│   │   ├── config.ts    # Zod schemas for content validation
│   │   ├── articles/
│   │   ├── guides/
│   │   ├── listings/
│   │   ├── locations/
│   │   ├── pages/
│   │   ├── reviews/
│   │   └── services/
│   ├── data/            # Structured data (TypeScript)
│   │   ├── homepage.ts
│   │   ├── navigation.ts
│   │   ├── services/
│   │   └── locations/
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   ├── lib/             # Utility functions
│   │   └── imageUtils.ts
│   ├── pages/           # File-based routing
│   │   ├── index.astro
│   │   ├── search.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── articles.astro
│   │   ├── listings/
│   │   │   └── [slug].astro
│   │   ├── locations/
│   │   │   ├── [county]/
│   │   │   │   ├── [city]/
│   │   │   │   │   └── [service]/
│   │   │   │   │       └── index.astro
│   │   │   ├── west-midlands.astro
│   │   │   └── west-midlands/
│   │   │       └── birmingham.astro
│   │   ├── services/
│   │   │   ├── [service]/
│   │   │   │   └── index.astro
│   │   │   └── index.astro
│   │   ├── guides/
│   │   │   └── [slug].astro
│   │   └── ...
│   └── styles/
│       └── global.css
├── astro.config.mjs     # Astro configuration
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## 📄 Pages & Routes

### Public Pages
- `/` - Homepage with search, featured locksmiths, and service categories
- `/search` - Advanced search with filters (location, service type, availability)
- `/directory` - Browse all listings
- `/locations` - UK-wide location directory
- `/services` - Service categories hub

### Location Pages
- `/locations/west-midlands` - County-level location page
- `/locations/west-midlands/birmingham` - City-level location page
- `/locations/[county]/[city]/[service]` - Dynamic service + location pages

### Business Listings
- `/listings/[slug]` - Individual business profile pages
  - Ratings and reviews
  - Service offerings
  - Coverage area
  - Verification badges
  - Contact information

### Services
- `/services` - All services directory
- `/services/[service]` - Individual service detail pages
  - Service description
  - When you need it
  - Professional vs DIY
  - Find specialists

### Content Pages
- `/guides/[slug]` - Educational guides and articles
- `/articles` - Article library hub
- `/about` - About the directory
- `/contact` - Contact form
- `/trust` - Trust and verification information
- `/partners` - Industry partners and associations
- `/pricing` - Pricing for business listings

### Utility Pages
- `/add-business` - Add or claim a business listing
- `/emergency` - 24/7 emergency locksmith dispatch
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/cookies` - Cookie policy

## 🌐 Example URLs

```
Homepage:
https://yourdomain.com/

Search:
https://yourdomain.com/search?location=birmingham&service=emergency

Business Profile:
https://yourdomain.com/listings/brum-city-security

City Page:
https://yourdomain.com/locations/west-midlands/birmingham

Service Page:
https://yourdomain.com/services/upvc-repairs

City + Service:
https://yourdomain.com/locations/west-midlands/birmingham/upvc-repairs

Guide:
https://yourdomain.com/guides/bs3621-lock-standard
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Modular-Shift/directory-astro.git
cd directory-astro
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:4321
```

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This will generate a static site in the `./dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deploy

The project is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **Cloudflare Pages**
- Any static hosting provider

## 🧞 Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 🎨 Design System

### Components

All reusable components follow a consistent API:
- **Button.astro** - Versatile button with variants (primary, secondary, outline, text, ghost)
- **Card.astro** - Multi-purpose card (article, service, review, location, listing variants)
- **PageHero.astro** - Hero section with breadcrumbs and flexible content slot
- **FAQ.astro** - Accordion-style FAQ component

### Color Scheme

- **Primary** - Brand color for CTAs and important elements
- **Secondary** - Accent color for ratings and highlights
- **Base** - Neutral colors for text and backgrounds
- **Success/Error/Warning** - Status and feedback colors

## 📝 Content Management

### Content Collections

Content is managed using Astro Content Collections with Zod validation:

```typescript
// src/content/config.ts
export const collections = {
  listings: defineCollection({ schema: listingSchema }),
  articles: defineCollection({ schema: articleSchema }),
  guides: defineCollection({ schema: guideSchema }),
  // ... more collections
};
```

### Adding New Content

1. **Add a new listing:**
   - Create `src/content/listings/your-business-slug.md`
   - Follow the schema defined in `config.ts`

2. **Add a new article:**
   - Create `src/content/articles/your-article-slug.md`
   - Include frontmatter (title, description, author, date)

3. **Add a new guide:**
   - Create `src/content/guides/your-guide-slug.md`
   - Structure content with markdown headings

## 🖼️ Image Optimization

Images are optimized using:
- **Astro `<Image />`** - For local assets in `src/assets/`
- **Responsive srcset** - For external images (Strapi, Supabase)
- **Lazy loading** - Below-the-fold images
- **Eager loading** - LCP images (hero, logo)

Helper utilities available in `src/lib/imageUtils.ts`.

## 🔮 Future CMS Integration

The architecture is designed for easy CMS migration:
- Current: Data in `src/data/*.ts` files
- Future: Replace with Strapi/Contentful API calls
- Pages remain unchanged, only data source changes

## 🤝 Contributing

This is a production project. For development guidelines:
1. Use existing reusable components
2. Follow the established file structure
3. Keep data separate from presentation
4. Maintain TypeScript type safety
5. Test responsive design on multiple devices

## 🔗 Links

- **Documentation:** [Astro Docs](https://docs.astro.build)
- **Tailwind CSS:** [Tailwind Docs](https://tailwindcss.com/docs)
- **FlyonUI:** [FlyonUI Docs](https://flyonui.com)

---

Built with ❤️ using Astro, Tailwind CSS, and FlyonUI