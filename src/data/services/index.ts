/**
 * Services Directory
 * 
 * This file contains all service categories and service items.
 * In the future, this will be replaced with Strapi API calls.
 * 
 * Usage:
 * import { serviceCategories, getServiceBySlug } from '@/data/services';
 */

export interface ServiceBadge {
  text: string;
  color: "error" | "warning" | "success" | "primary" | "secondary";
}

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  badge: ServiceBadge;
  scenarios: string[];
  ctaText: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: "emergency" | "everyday" | "security";
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "emergency",
    title: "Emergency Services",
    icon: "emergency",
    services: [
      {
        slug: "emergency-lockouts",
        title: "Emergency Lockouts",
        description:
          "Rapid non-destructive entry solutions when you are locked out of your home or business.",
        badge: { text: "EMERGENCY", color: "error" },
        scenarios: ["Lost keys", "Door slammed shut behind you"],
        ctaText: "Find lockout help by location",
      },
      {
        slug: "burglary-repairs",
        title: "Burglary Repairs",
        description:
          "Immediate securing of property and repair of damage following a break-in.",
        badge: { text: "EMERGENCY", color: "error" },
        scenarios: ["Broken door frame", "Smashed window lock"],
        ctaText: "Find repair services by location",
      },
      {
        slug: "key-extraction",
        title: "Key Extraction",
        description:
          "Removing snapped keys from lock cylinders without damaging the mechanism.",
        badge: { text: "HIGH", color: "warning" },
        scenarios: ["Key snapped in lock", "Debris in keyway"],
        ctaText: "Find extraction services by location",
      },
    ],
  },
  {
    id: "everyday",
    title: "Everyday Locksmith Services",
    icon: "everyday",
    services: [
      {
        slug: "lock-changes",
        title: "Lock Changes",
        description:
          "Replacing old or compromised locks with new, secure cylinders (Euro, Mortice, or Rim).",
        badge: { text: "STANDARD", color: "primary" },
        scenarios: ["Moved into new house", "Key/holder change"],
        ctaText: "Find lock replacement by location",
      },
      {
        slug: "upvc-door-repairs",
        title: "uPVC Door Repairs",
        description:
          "Specialist alignment and mechanism fixes for multipoint locking systems on modern doors.",
        badge: { text: "MEDIUM", color: "warning" },
        scenarios: ["Handle sticks loosely", "Door dropped/misaligned"],
        ctaText: "Find uPVC experts by location",
      },
      {
        slug: "key-cutting",
        title: "Key Cutting",
        description:
          "Duplicate keys cut for residential and commercial locks, often available on-site.",
        badge: { text: "LOW", color: "success" },
        scenarios: ["Need spares for family", "Worn out keys"],
        ctaText: "Find key cutting by location",
      },
    ],
  },
  {
    id: "security",
    title: "Security Upgrades & Specialist",
    icon: "security",
    services: [
      {
        slug: "smart-locks",
        title: "Smart Locks",
        description:
          "Installation of keyless entry systems including Yale, August, and Ultion smart locks.",
        badge: { text: "UPGRADE", color: "secondary" },
        scenarios: ["Desire for keyless convenience", "Remote access for Airbnb"],
        ctaText: "Find smart lock installers",
      },
      {
        slug: "safes-and-vaults",
        title: "Safes & Vaults",
        description:
          "Supply, installation, and opening of home and commercial safes.",
        badge: { text: "SPECIALIST", color: "secondary" },
        scenarios: ["Lost combination code", "Installing new fire-proof safe"],
        ctaText: "Find safe engineers by location",
      },
      {
        slug: "commercial-security",
        title: "Commercial Security",
        description:
          "Master key systems, shutter locks, and access control for business premises.",
        badge: { text: "BUSINESS", color: "secondary" },
        scenarios: ["Employee turnover requiring", "High-traffic access control"],
        ctaText: "Find commercial locksmiths",
      },
    ],
  },
];

/**
 * Get all services as a flat array (useful for homepage cards)
 */
export function getAllServices(): ServiceItem[] {
  return serviceCategories.flatMap((category) => category.services);
}

/**
 * Get a service by slug
 */
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return getAllServices().find((service) => service.slug === slug);
}

/**
 * Get a service category by ID
 */
export function getCategoryById(id: string): ServiceCategory | undefined {
  return serviceCategories.find((category) => category.id === id);
}

/**
 * Get services for homepage display (limit to first 4)
 */
export function getHomepageServices(): ServiceItem[] {
  return getAllServices().slice(0, 4);
}
