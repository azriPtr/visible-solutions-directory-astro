/**
 * County-Specific Data
 * 
 * This file contains detailed data for county-level location pages.
 * In the future, this will be replaced with Strapi API calls.
 */

import type { City } from "./index";

export interface CountyTown {
  name: string;
  slug: string;
  prosCount: string;
}

export interface CountyService {
  slug: string;
  title: string;
  description: string;
}

export interface CountyArticle {
  title: string;
  description: string;
  category: string;
  linkUrl: string;
}

export interface CountyFaq {
  question: string;
  answer: string;
}

export interface CountyPageData {
  slug: string;
  name: string;
  region: string;
  description: string;
  prosCount: string;
  towns: CountyTown[];
  services: CountyService[];
  articles: CountyArticle[];
  faqs: CountyFaq[];
}

// West Midlands County Data
export const westMidlandsData: CountyPageData = {
  slug: "west-midlands",
  name: "West Midlands",
  region: "England",
  description:
    "The West Midlands is home to Birmingham, the UK's second-largest city, along with Coventry, Wolverhampton, and surrounding towns. Our directory connects you with verified locksmiths across the entire county.",
  prosCount: "342+ PROS",
  towns: [
    { name: "Birmingham", slug: "birmingham", prosCount: "128" },
    { name: "Coventry", slug: "coventry", prosCount: "64" },
    { name: "Wolverhampton", slug: "wolverhampton", prosCount: "52" },
    { name: "Solihull", slug: "solihull", prosCount: "38" },
    { name: "West Bromwich", slug: "west-bromwich", prosCount: "28" },
    { name: "Sutton Coldfield", slug: "sutton-coldfield", prosCount: "32" },
  ],
  services: [
    {
      slug: "emergency-lockouts",
      title: "Emergency Lockouts",
      description:
        "24/7 rapid response for residential and commercial lockouts across West Midlands",
    },
    {
      slug: "upvc-repairs",
      title: "uPVC Door Repairs",
      description:
        "Specialist repairs for multipoint locks and misaligned uPVC doors",
    },
    {
      slug: "lock-changes",
      title: "Lock Changes & Upgrades",
      description:
        "British Standard lock installations and security upgrades for homes and businesses",
    },
    {
      slug: "burglary-repairs",
      title: "Burglary Damage Repairs",
      description:
        "Emergency securing and repair services following break-ins",
    },
  ],
  articles: [
    {
      title: "Understanding BS3621 Lock Standards",
      description:
        "What insurance companies require and why British Standard locks matter for West Midlands properties",
      category: "TECHNICAL",
      linkUrl: "/guides/bs3621-lock-standard",
    },
    {
      title: "uPVC Door Maintenance Tips",
      description:
        "How to prevent common uPVC door problems in West Midlands homes",
      category: "MAINTENANCE",
      linkUrl: "/guides/upvc-maintenance",
    },
    {
      title: "Burglary Statistics West Midlands",
      description:
        "Latest crime data and how to protect your property in the region",
      category: "SECURITY",
      linkUrl: "/guides/west-midlands-security",
    },
  ],
  faqs: [
    {
      question: "How quickly can a locksmith arrive in West Midlands?",
      answer:
        "Response times vary by location and time of day. In Birmingham city centre, emergency locksmiths typically arrive within 30-60 minutes. In more rural areas of the county, expect 60-90 minutes for emergency call-outs.",
    },
    {
      question: "What does a locksmith call-out cost in West Midlands?",
      answer:
        "Standard call-out fees range from £60-£90 during business hours. Emergency or out-of-hours services typically cost £90-£150. Final costs depend on the work required and parts needed.",
    },
    {
      question: "Are all West Midlands locksmiths DBS checked?",
      answer:
        "Not automatically. We verify DBS checks for locksmiths who provide them, and these are clearly marked on their profiles. We recommend choosing DBS-checked locksmiths for added peace of mind.",
    },
  ],
};

/**
 * Get county data by slug
 */
export function getCountyData(slug: string): CountyPageData | undefined {
  // In the future, this will fetch from Strapi
  // For now, return hard-coded data
  if (slug === "west-midlands") {
    return westMidlandsData;
  }
  return undefined;
}
