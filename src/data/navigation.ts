/**
 * Navigation Structure
 * 
 * This file contains all navigation menus for the site.
 * In the future, this will be replaced with Strapi API calls.
 * 
 * IMPORTANT: Only include TOP-LEVEL HUB/INDEX pages.
 * Do NOT include template pages like [service], [city], etc.
 */

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavGroup {
  label: string;
  items: NavLink[];
}

/**
 * Main navigation menu (Desktop dropdown + Mobile menu)
 */
export const mainNavigation: NavGroup[] = [
  {
    label: "Services",
    items: [
      {
        label: "All Services",
        href: "/services",
        description: "Browse all locksmith services we cover",
      },
      {
        label: "Emergency Help",
        href: "/emergency",
        description: "24/7 emergency locksmith support",
      },
    ],
  },
  {
    label: "Locations",
    items: [
      {
        label: "Directory",
        href: "/directory",
        description: "Find locksmiths by location",
      },
      {
        label: "Search by Postcode",
        href: "/search",
        description: "Search for locksmiths near you",
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        label: "Articles",
        href: "/articles",
        description: "Security advice and guides",
      },
      {
        label: "Trust & Verification",
        href: "/trust",
        description: "How we verify locksmiths",
      },
      {
        label: "Partners",
        href: "/partners",
        description: "Industry partners and associations",
      },
    ],
  },
  {
    label: "For Locksmiths",
    items: [
      {
        label: "Add Your Business",
        href: "/add-business",
        description: "Join our verified directory",
      },
      {
        label: "Pricing",
        href: "/pricing",
        description: "Subscription plans for locksmiths",
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        label: "About Us",
        href: "/about",
        description: "Who we are and what we do",
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Get in touch with our team",
      },
    ],
  },
];

/**
 * Footer navigation links
 */
export const footerNavigation = {
  services: [
    { label: "All Services", href: "/services" },
    { label: "Emergency Lockouts", href: "/services/emergency-lockouts" },
    { label: "uPVC Repairs", href: "/services/upvc-repairs" },
    { label: "Lock Changes", href: "/services/lock-changes" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Partners", href: "/partners" },
    { label: "Trust & Verification", href: "/trust" },
  ],
  resources: [
    { label: "Articles", href: "/articles" },
    { label: "Directory", href: "/directory" },
    { label: "Emergency Help", href: "/emergency" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  forLocksmiths: [
    { label: "Add Your Business", href: "/add-business" },
    { label: "Pricing", href: "/pricing" },
  ],
};

/**
 * Mobile menu navigation (flattened structure)
 */
export const mobileNavigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Directory", href: "/directory" },
  { label: "Articles", href: "/articles" },
  { label: "Emergency Help", href: "/emergency" },
  { label: "Partners", href: "/partners" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Quick links (for hero sections, CTAs, etc.)
 */
export const quickLinks = {
  primary: { label: "Find a Locksmith", href: "/search" },
  emergency: { label: "Emergency Help", href: "/emergency" },
  addBusiness: { label: "Add Your Business", href: "/add-business" },
};
