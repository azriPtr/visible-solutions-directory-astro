# Strapi Integration Guide

This directory contains the Strapi v5 integration layer for the Astro frontend.

## 📁 File Structure

```
src/lib/strapi/
├── index.ts       # Main exports (import from here)
├── client.ts      # API client and fetch functions
├── types.ts       # TypeScript types and type guards
└── README.md      # This file
```

## 🚀 Quick Start

### 1. Environment Setup

Create a `.env` file in your project root:

```bash
# Public Strapi URL (accessible from browser)
PUBLIC_STRAPI_URL=http://localhost:1337

# Strapi API Token (server-side only)
STRAPI_API_TOKEN=your_token_here
```

Generate the API token in Strapi:
1. Go to Strapi Admin → Settings → API Tokens
2. Create new API Token with "Read Only" permissions
3. Copy the token to your `.env` file

### 2. Basic Usage in Astro Pages

```astro
---
import { getHeroSection } from '../lib/strapi';
import HeroSection from '../components/HeroSection.astro';

// Fetch data at build time
const heroData = await getHeroSection();
---

<HeroSection data={heroData} />
```

## 📚 API Reference

### Core Functions

#### `getHomepage()`
Fetches the complete homepage Single Type from Strapi.

```typescript
const homepage = await getHomepage();
// Returns: HomepageResponse with all dynamic zone content
```

#### `getHeroSection()`
Convenience function that fetches homepage and extracts the hero section.

```typescript
const heroData = await getHeroSection();
// Returns: HeroSectionComponent | null
```

#### `extractHeroSection(homepage)`
Safely extracts hero section from homepage response.

```typescript
const homepage = await getHomepage();
const hero = extractHeroSection(homepage);
// Returns: HeroSectionComponent | null
```

### Type Guards

Type guards help you safely identify component types in the dynamic zone:

```typescript
import { isHeroSection, isServicesSection } from '../lib/strapi';

const components = homepage.data.content;

components.forEach(component => {
  if (isHeroSection(component)) {
    // TypeScript knows this is HeroSectionComponent
    console.log(component.heading.heading);
  }
  else if (isServicesSection(component)) {
    // TypeScript knows this is ServicesSectionComponent
    // Handle services section
  }
});
```

## 🔧 Extending the Pattern

### Adding New Section Types

When you add new sections to Strapi (e.g., ServicesSection, ReviewsSection):

#### 1. Update `types.ts`

```typescript
export interface ServicesSectionComponent {
  __component: 'section.services';
  title: string;
  services: Array<{
    name: string;
    description: string;
  }>;
}

// Add to union type
export type DynamicZoneComponent = 
  | HeroSectionComponent 
  | ServicesSectionComponent
  | ReviewsSectionComponent;

// Add type guard
export function isServicesSection(
  component: DynamicZoneComponent
): component is ServicesSectionComponent {
  return component.__component === 'section.services';
}
```

#### 2. Add Extraction Function in `client.ts`

```typescript
export function extractServicesSection(
  homepage: HomepageResponse
): ServicesSectionComponent | null {
  if (!homepage?.data?.content || !Array.isArray(homepage.data.content)) {
    return null;
  }

  const servicesSection = homepage.data.content.find(isServicesSection);

  if (!servicesSection) {
    console.warn('Services section not found in homepage content');
    return null;
  }

  return servicesSection;
}

// Convenience function
export async function getServicesSection(): Promise<ServicesSectionComponent | null> {
  try {
    const homepage = await getHomepage();
    return extractServicesSection(homepage);
  } catch (error) {
    console.error('Failed to get services section:', error);
    return null;
  }
}
```

#### 3. Export in `index.ts`

```typescript
export { 
  getHomepage,
  getHeroSection,
  getServicesSection, // Add new function
  extractHeroSection,
  extractServicesSection, // Add new function
} from './client';

export type {
  ServicesSectionComponent, // Add new type
  // ... other types
} from './types';

export {
  isServicesSection, // Add new type guard
  // ... other type guards
} from './types';
```

#### 4. Use in Your Page

```astro
---
import { getHeroSection, getServicesSection } from '../lib/strapi';

const heroData = await getHeroSection();
const servicesData = await getServicesSection();
---

<HeroSection data={heroData} />
<ServicesSection data={servicesData} />
```

## 🏗️ Component Pattern

Components should:
1. Accept optional Strapi data as props
2. Provide fallback values
3. Handle null/undefined gracefully

```astro
---
import type { HeroSectionComponent } from '../lib/strapi';

interface Props {
  data?: HeroSectionComponent | null;
}

const { data } = Astro.props;

// Extract with fallbacks
const heading = data?.heading?.heading || "Default Heading";
const subHeading = data?.heading?.subHeading || "Default subheading";
---

<h1>{heading}</h1>
<p>{subHeading}</p>
```

## 🔒 Security Notes

- `PUBLIC_STRAPI_URL`: Exposed to browser, use public URL
- `STRAPI_API_TOKEN`: Server-side only, never exposed to browser
- All API calls happen at build time in Astro (SSG)
- For SSR, consider caching strategies

## 🐛 Troubleshooting

### "Failed to fetch from Strapi"
- Check `PUBLIC_STRAPI_URL` is correct
- Check `STRAPI_API_TOKEN` is valid
- Verify Strapi is running
- Check API token permissions in Strapi

### "Hero section not found"
- Check dynamic zone field name is `content`
- Check component name is `section.hero`
- Verify data exists in Strapi

### Type Errors
- Ensure TypeScript types match your Strapi schema
- Check `__component` value matches exactly
- Verify all required fields exist

## 📈 Performance Tips

1. **Build-time Fetching**: Astro fetches data at build time (SSG), so API calls don't slow down users
2. **Populate Strategy**: Use `populate=deep` for nested relations, or specify exact fields:
   ```typescript
   /api/homepage?populate[content][populate]=*
   ```
3. **Caching**: For SSR/incremental builds, consider implementing caching:
   ```typescript
   const cache = new Map();
   // Add caching logic
   ```

## 🎯 Best Practices

1. ✅ Always use type guards when working with dynamic zones
2. ✅ Provide fallback values in components
3. ✅ Use defensive checks (`?.` and `|| null`)
4. ✅ Log warnings when expected data is missing
5. ✅ Keep Strapi types in sync with your schema
6. ✅ Extract reusable patterns into helper functions
7. ❌ Don't assume array order (use type guards to find components)
8. ❌ Don't hardcode `content[0]` - components can be in any order

## 📖 Related Files

- `/src/pages/index.astro` - Example usage
- `/src/components/HeroSection.astro` - Example component integration
- `/.env.example` - Environment variable template
