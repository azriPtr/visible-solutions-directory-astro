/**
 * Strapi Library Exports
 * 
 * Central export point for all Strapi-related functions and types.
 * Import from here in your Astro pages/components.
 */

// Export all client functions
export { 
  getHomepage,
  getHeroSection,
  getCardsSection,
  getCardsSections,
  getServicesSection,
  getCTASections,
  extractHeroSection,
  extractCardsSection,
  extractCardsSections,
  extractCTASections,
} from './client';

// Export all types
export type {
  Heading,
  CTA,
  StrapiImage,
  BulletItem,
  AccordionItem,
  HeroSectionComponent,
  CTASectionComponent,
  CardsSectionComponent,
  FAQSectionComponent,
  DynamicZoneComponent,
  HomepageResponse,
} from './types';

// Export type guards
export {
  isHeroSection,
  isCTASection,
  isCardsSection,
  isFAQSection,
} from './types';
