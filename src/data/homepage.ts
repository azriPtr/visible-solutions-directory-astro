/**
 * Homepage Content
 * 
 * This file contains all content for the homepage.
 * In the future, this will be replaced with Strapi API calls.
 */

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export interface SectionContent {
  title: string;
  description: string;
  viewAllText?: string;
  viewAllUrl?: string;
}

export const seo = {
  title: "UK Locksmith Directory - Find Verified Local Locksmiths Near You",
  description:
    "Search 1,200+ verified local locksmiths for emergencies, repairs, and lock upgrades across the UK. Compare ratings, reviews, and get instant quotes 24/7.",
};
