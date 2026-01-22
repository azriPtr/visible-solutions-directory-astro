# 🎯 Strapi Integration - Phase 1 Complete

## ✅ What Was Implemented

### 1. Type-Safe Strapi Client Layer
- **Location**: `src/lib/strapi/`
- **Files Created**:
  - `types.ts` - TypeScript types for Strapi responses
  - `client.ts` - API client with fetch functions and error handling
  - `index.ts` - Clean exports for easy imports
  - `README.md` - Comprehensive documentation

### 2. Updated Components
- **HeroSection.astro**: Now accepts Strapi data via props with fallbacks
- **index.astro**: Fetches hero data and passes it to component

### 3. Key Features
✅ Production-ready code with defensive checks  
✅ Type guards for safe dynamic zone component handling  
✅ Fallback values when Strapi data is unavailable  
✅ Clean separation of concerns  
✅ Extensible pattern for future sections  
✅ Comprehensive error handling and logging  

## 🚀 Quick Start

### Step 1: Configure Environment Variables

Create or update your `.env` file in the project root:

```bash
# Strapi Backend URL
PUBLIC_STRAPI_URL=http://localhost:1337

# Strapi API Token (get from Strapi Admin → Settings → API Tokens)
STRAPI_API_TOKEN=your_token_here
```

**Important**: Never commit `.env` to git!

### Step 2: Generate Strapi API Token

1. Open Strapi Admin panel (usually `http://localhost:1337/admin`)
2. Go to **Settings** → **API Tokens**
3. Click **"Create new API Token"**
4. Configure:
   - Name: `Astro Frontend`
   - Token type: `Read-only`
   - Token duration: `Unlimited`
5. Click **Save**
6. Copy the token and add it to your `.env` file

### Step 3: Verify Your Strapi Schema

Ensure your Strapi homepage Single Type has this structure:

```
Homepage (Single Type)
└── content (Dynamic Zone)
    └── section.hero (Component)
        ├── heading (Component)
        │   ├── heading (Text)
        │   └── subHeading (Text)
        ├── image (Media - Single)
        └── cta (Component)
            ├── ctaText (Text)
            └── ctaUrl (Text - optional)
```

### Step 4: Test the Integration

1. Start your Strapi backend:
   ```bash
   cd your-strapi-project
   npm run develop
   ```

2. Add test content in Strapi Admin:
   - Go to **Content Manager** → **Homepage**
   - Add a Hero section to the dynamic zone
   - Fill in the fields
   - Click **Save** and **Publish**

3. Start your Astro dev server:
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:4321` - you should see your Strapi content!

## 📋 Data Flow Diagram

```
Strapi CMS
    ↓
/api/homepage?populate=deep
    ↓
getHeroSection() [client.ts]
    ↓
Type Guards & Extraction [isHeroSection()]
    ↓
index.astro [fetch at build time]
    ↓
<HeroSection data={heroData} />
    ↓
Rendered Hero Section
```

## 🔍 Testing Without Strapi

The component gracefully falls back to default content if:
- Strapi is not running
- API token is missing
- Hero section doesn't exist
- Network error occurs

This ensures your site never breaks due to CMS issues.

## 📊 Code Mapping

### Strapi JSON → Component Props

```javascript
// Strapi API Response
{
  "__component": "section.hero",
  "heading": {
    "heading": "The UK's Largest Directory...",
    "subHeading": "Search 1,200+ verified..."
  },
  "image": { "id": 2, "url": "/uploads/hero.jpg" },
  "cta": { "ctaText": "Find Locksmiths" }
}

// ↓ Extracted in client.ts using type guards

// ↓ Passed to HeroSection.astro as `data` prop

// ↓ Rendered in component
<h1>{data.heading.heading}</h1>
<p>{data.heading.subHeading}</p>
<Button text={data.cta.ctaText} />
```

## 🎨 Extending to Other Sections

### Pattern for Adding ServicesSection, ReviewsSection, etc.

#### 1. Define Types (`src/lib/strapi/types.ts`)

```typescript
export interface ServicesSectionComponent {
  __component: 'section.services';
  title: string;
  description: string;
  services: Array<{
    name: string;
    icon: string;
    link: string;
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

#### 2. Add Client Function (`src/lib/strapi/client.ts`)

```typescript
export async function getServicesSection(): Promise<ServicesSectionComponent | null> {
  try {
    const homepage = await getHomepage();
    const section = homepage.data.content.find(isServicesSection);
    return section || null;
  } catch (error) {
    console.error('Failed to get services section:', error);
    return null;
  }
}
```

#### 3. Export (`src/lib/strapi/index.ts`)

```typescript
export { 
  getHeroSection,
  getServicesSection, // Add here
} from './client';

export type {
  ServicesSectionComponent, // Add here
} from './types';

export {
  isServicesSection, // Add here
} from './types';
```

#### 4. Use in Page (`src/pages/index.astro`)

```astro
---
import { getHeroSection, getServicesSection } from '../lib/strapi';

const heroData = await getHeroSection();
const servicesData = await getServicesSection();
---

<HeroSection data={heroData} />
<ServicesSection data={servicesData} />
```

#### 5. Update Component

```astro
---
// src/components/ServicesSection.astro
import type { ServicesSectionComponent } from '../lib/strapi';

interface Props {
  data?: ServicesSectionComponent | null;
}

const { data } = Astro.props;

const title = data?.title || "Our Services";
const services = data?.services || [];
---

<section>
  <h2>{title}</h2>
  {services.map(service => (
    <div>
      <h3>{service.name}</h3>
      <a href={service.link}>Learn More</a>
    </div>
  ))}
</section>
```

## 🎯 Key Principles Applied

1. **Don't Assume Order**: We use type guards instead of `content[0]`
2. **Defensive Programming**: Null checks and optional chaining everywhere
3. **Type Safety**: Full TypeScript coverage with proper types
4. **Separation of Concerns**: 
   - `client.ts` - Data fetching
   - `types.ts` - Type definitions
   - `index.ts` - Public API
5. **Graceful Degradation**: Fallbacks ensure site works without Strapi
6. **Production Ready**: Error handling, logging, documentation

## 📚 Files Modified/Created

### Created:
- ✅ `src/lib/strapi/types.ts`
- ✅ `src/lib/strapi/client.ts`
- ✅ `src/lib/strapi/index.ts`
- ✅ `src/lib/strapi/README.md`
- ✅ `STRAPI_INTEGRATION.md` (this file)

### Modified:
- ✅ `src/components/HeroSection.astro` - Now accepts Strapi data
- ✅ `src/pages/index.astro` - Fetches and passes hero data

## 🐛 Troubleshooting

### Issue: "Failed to fetch from Strapi"
**Solution**: 
- Check Strapi is running
- Verify `PUBLIC_STRAPI_URL` in `.env`
- Check API token is valid

### Issue: Seeing default content instead of Strapi content
**Solution**:
- Check browser console for errors
- Verify hero section exists in Strapi
- Check dynamic zone field name is `content`
- Verify component name is `section.hero`
- Ensure content is published in Strapi

### Issue: Type errors
**Solution**:
- Ensure Strapi schema matches TypeScript types
- Check `__component` value exactly matches
- Verify all required fields exist

## 🎓 What You Learned

1. **Strapi v5 API Integration** - Fetching Single Types with Dynamic Zones
2. **Type Guards** - Safe handling of union types in TypeScript
3. **Defensive Programming** - Null checks and fallbacks
4. **Component Props Pattern** - Passing CMS data to Astro components
5. **API Client Architecture** - Centralized, reusable fetch layer
6. **Scalable Patterns** - Easy to extend to other sections

## 📞 Next Steps

This pattern is now ready to extend to other sections:
- ServicesSection
- ReviewsSection
- CTASection
- etc.

Just follow the "Extending to Other Sections" pattern above!

---

**Questions?** Check `src/lib/strapi/README.md` for detailed API documentation.
