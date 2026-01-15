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

export const hero: HeroContent = {
  title: "Find Trusted Local Locksmiths Near You",
  subtitle: "Verified. Vetted. Ready to help.",
  description:
    "Search 1,200+ verified local locksmiths for emergencies, repairs, and lock upgrades across the UK. Compare ratings, reviews, and get instant quotes 24/7.",
  primaryCta: {
    text: "Search locksmiths near me",
    href: "/search",
  },
  secondaryCta: {
    text: "Emergency lockout help",
    href: "/emergency",
  },
};

export const servicesSection: SectionContent = {
  title: "Locksmith services we cover",
  description:
    "From emergency lockouts to high-security upgrades, explore the specialized services our verified professionals provide.",
  viewAllText: "View all locksmith services →",
  viewAllUrl: "/services",
};

export const locationsSection: SectionContent = {
  title: "Popular locksmith locations in the UK",
  description:
    "Discover our most active coverage areas. We connect you with verified professionals in every major UK hub.",
  viewAllText: "View all locksmith locations →",
  viewAllUrl: "/directory",
};

export const articlesSection: SectionContent = {
  title: "Guides to staying secure",
  description:
    "Practical advice and security tips from our experts to help you protect your home and business.",
  viewAllText: "View all guides",
  viewAllUrl: "/guides",
};

export const seo = {
  title: "UK Locksmith Directory - Find Verified Local Locksmiths Near You",
  description:
    "Search 1,200+ verified local locksmiths for emergencies, repairs, and lock upgrades across the UK. Compare ratings, reviews, and get instant quotes 24/7.",
};
