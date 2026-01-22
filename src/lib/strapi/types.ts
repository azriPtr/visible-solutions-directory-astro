/**
 * Strapi API Response Types
 * 
 * These types match the EXACT structure from Strapi v5 API.
 * They provide type safety and autocomplete for Strapi content.
 */

// Common nested types
export interface Heading {
  id: number;
  heading: string;
  subHeading: string | null;
}

export interface CTA {
  id: number;
  ctaText: string;
  ctaUrl?: string | null;
}

export interface StrapiImage {
  id: number;
  title: string | null;
  caption: string | null;
  altText: string | null;
  url?: string;
  width?: number;
  height?: number;
}

export interface BulletItem {
  id: number;
  icon: string | null;
  text: string;
  desc: string;
}

export interface AccordionItem {
  id: number;
  question: string;
  answer: string;
}

// Section Components (matching Strapi API exactly)

export interface HeroSectionComponent {
  __component: 'section.hero';
  id: number;
  heading: Heading;
  image: StrapiImage;
  cta: CTA;
}

export interface CTASectionComponent {
  __component: 'section.cta';
  id: number;
  heading: Heading;
  bulletList: BulletItem[];
  ctaPrimary: CTA | null;
  ctaSecondary: CTA | null;
}

export interface CardsSectionComponent {
  __component: 'section.cards';
  id: number;
  display: number; // 3 or 4
  content: 'service' | 'location' | 'article';
  heading: Heading;
}

export interface FAQSectionComponent {
  __component: 'section.faq';
  id: number;
  heading: Heading;
  accordion: AccordionItem[];
  cta: CTA;
}

// Union type for all possible Dynamic Zone components
export type DynamicZoneComponent = 
  | HeroSectionComponent 
  | CTASectionComponent
  | CardsSectionComponent 
  | FAQSectionComponent;

// Homepage API Response (matching exact Strapi structure)
export interface HomepageResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    content: DynamicZoneComponent[];
  };
  meta: Record<string, unknown>;
}

// Type guards
export function isHeroSection(
  component: DynamicZoneComponent
): component is HeroSectionComponent {
  return component.__component === 'section.hero';
}

export function isCTASection(
  component: DynamicZoneComponent
): component is CTASectionComponent {
  return component.__component === 'section.cta';
}

export function isCardsSection(
  component: DynamicZoneComponent
): component is CardsSectionComponent {
  return component.__component === 'section.cards';
}

export function isFAQSection(
  component: DynamicZoneComponent
): component is FAQSectionComponent {
  return component.__component === 'section.faq';
}
