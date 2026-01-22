# Strapi Integration - Quick Reference Card

## Import Statement

```typescript
import { getHeroSection } from '../lib/strapi';
import type { HeroSectionComponent } from '../lib/strapi';
```

## Basic Usage

### In Astro Pages
```astro
---
import { getHeroSection } from '../lib/strapi';

const heroData = await getHeroSection();
---

<HeroSection data={heroData} />
```

### In Components
```astro
---
import type { HeroSectionComponent } from '../lib/strapi';

interface Props {
  data?: HeroSectionComponent | null;
}

const { data } = Astro.props;

const heading = data?.heading?.heading || "Default";
const subHeading = data?.heading?.subHeading || "Default";
const ctaText = data?.cta?.ctaText || "Click Here";
---

<h1>{heading}</h1>
<p>{subHeading}</p>
```

## Available Functions

| Function | Returns | Use Case |
|----------|---------|----------|
| `getHomepage()` | `HomepageResponse` | Get full homepage data |
| `getHeroSection()` | `HeroSectionComponent \| null` | Get hero section only |
| `extractHeroSection(homepage)` | `HeroSectionComponent \| null` | Extract hero from homepage data |

## Type Guards

```typescript
import { isHeroSection, isServicesSection } from '../lib/strapi';

homepage.data.content.forEach(component => {
  if (isHeroSection(component)) {
    // component is HeroSectionComponent
  }
  else if (isServicesSection(component)) {
    // component is ServicesSectionComponent
  }
});
```

## Component Data Structure

```typescript
{
  __component: 'section.hero',
  heading: {
    heading: string,
    subHeading: string
  },
  image: {
    id: number,
    url?: string,
    alternativeText?: string
  },
  cta: {
    ctaText: string,
    ctaUrl?: string
  }
}
```

## Quick Template for New Section

1. **Add type** in `types.ts`:
```typescript
export interface NewSectionComponent {
  __component: 'section.new';
  // fields...
}
```

2. **Add to union**:
```typescript
export type DynamicZoneComponent = 
  | HeroSectionComponent 
  | NewSectionComponent;
```

3. **Add type guard**:
```typescript
export function isNewSection(
  component: DynamicZoneComponent
): component is NewSectionComponent {
  return component.__component === 'section.new';
}
```

4. **Add fetch function** in `client.ts`:
```typescript
export async function getNewSection(): Promise<NewSectionComponent | null> {
  try {
    const homepage = await getHomepage();
    return homepage.data.content.find(isNewSection) || null;
  } catch (error) {
    console.error('Failed to get new section:', error);
    return null;
  }
}
```

5. **Export** in `index.ts`:
```typescript
export { getNewSection } from './client';
export type { NewSectionComponent } from './types';
export { isNewSection } from './types';
```

## Environment Variables

```bash
PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_token_here
```

## Checklist for New Sections

- [ ] Define type in `types.ts`
- [ ] Add to `DynamicZoneComponent` union
- [ ] Create type guard function
- [ ] Add fetch function in `client.ts`
- [ ] Export in `index.ts`
- [ ] Update component to accept props
- [ ] Add fallback values

## Common Patterns

### Defensive Data Access
```typescript
const value = data?.nested?.field || 'fallback';
```

### Image Handling
```typescript
const imageUrl = data?.image?.url 
  ? `${import.meta.env.PUBLIC_STRAPI_URL}${data.image.url}`
  : null;
```

### Array Handling
```typescript
const items = data?.items || [];
items.map(item => /* ... */);
```

## 💡 Pro Tips

1. ✅ Always use type guards, never hardcode array indices
2. ✅ Provide fallback values in components
3. ✅ Use optional chaining (`?.`) everywhere
4. ✅ Log warnings when expected data is missing
5. ✅ Test both with and without Strapi data
6. ❌ Never assume dynamic zone order
7. ❌ Never expose `STRAPI_API_TOKEN` to browser
8. ❌ Don't skip null checks

## 📊 Error Handling

All fetch functions return `null` on error and log to console:

```typescript
const data = await getHeroSection();

if (!data) {
  // Handle missing data
  // Component will use fallback values
}
```

## 🎯 File Locations

```
src/lib/strapi/
├── index.ts       ← Import from here
├── client.ts      ← Fetch functions
├── types.ts       ← Type definitions
└── README.md      ← Full documentation
```

## 🔗 Quick Links

- Full Documentation: `src/lib/strapi/README.md`
- Setup Guide: `STRAPI_INTEGRATION.md`
- Example Component: `src/components/HeroSection.astro`
- Example Page: `src/pages/index.astro`
