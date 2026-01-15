/**
 * Locations Directory
 * 
 * This file contains all location data (counties, cities, regions).
 * In the future, this will be replaced with Strapi API calls.
 * 
 * Usage:
 * import { counties, cities, getCountyBySlug } from '@/data/locations';
 */

export interface City {
  slug: string;
  name: string;
  countySlug: string;
  prosCount: string;
  description: string;
}

export interface County {
  slug: string;
  name: string;
  region: string;
  prosCount: string;
  description: string;
  cities: string[]; // Array of city slugs
}

export interface LocationCard {
  number: string;
  title: string;
  prosCount: string;
  description: string;
  linkUrl: string;
  linkText: string;
}

// Counties data
export const counties: County[] = [
  {
    slug: "west-midlands",
    name: "West Midlands",
    region: "England",
    prosCount: "342+ PROS",
    description:
      "Find verified locksmiths serving Birmingham, Coventry, Wolverhampton, and surrounding areas.",
    cities: ["birmingham", "coventry", "wolverhampton", "solihull"],
  },
  {
    slug: "greater-london",
    name: "Greater London",
    region: "England",
    prosCount: "890+ PROS",
    description:
      "London's largest directory of verified locksmiths covering all 33 boroughs.",
    cities: ["westminster", "camden", "islington", "hackney"],
  },
  {
    slug: "greater-manchester",
    name: "Greater Manchester",
    region: "England",
    prosCount: "425+ PROS",
    description:
      "Connecting residents and businesses with trusted locksmiths across all 10 Greater Manchester boroughs.",
    cities: ["manchester", "salford", "bolton", "stockport"],
  },
  {
    slug: "west-yorkshire",
    name: "West Yorkshire",
    region: "England",
    prosCount: "312+ PROS",
    description:
      "Verified locksmith coverage across Leeds, Bradford, Wakefield, and Kirklees.",
    cities: ["leeds", "bradford", "wakefield", "huddersfield"],
  },
];

// Cities data
export const cities: City[] = [
  {
    slug: "birmingham",
    name: "Birmingham",
    countySlug: "west-midlands",
    prosCount: "128+ locksmiths",
    description:
      "From the Jewellery Quarter to Edgbaston, find verified locksmiths serving all Birmingham postcodes.",
  },
  {
    slug: "manchester",
    name: "Manchester",
    countySlug: "greater-manchester",
    prosCount: "156+ locksmiths",
    description:
      "Emergency lockouts, uPVC repairs, and security upgrades across Manchester city centre and suburbs.",
  },
  {
    slug: "leeds",
    name: "Leeds",
    countySlug: "west-yorkshire",
    prosCount: "98+ locksmiths",
    description:
      "Residential and commercial locksmith services throughout Leeds and surrounding areas.",
  },
  {
    slug: "london",
    name: "London",
    countySlug: "greater-london",
    prosCount: "890+ locksmiths",
    description:
      "London's most comprehensive locksmith directory covering all zones and boroughs.",
  },
];

/**
 * Get county by slug
 */
export function getCountyBySlug(slug: string): County | undefined {
  return counties.find((county) => county.slug === slug);
}

/**
 * Get city by slug
 */
export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

/**
 * Get cities by county
 */
export function getCitiesByCounty(countySlug: string): City[] {
  return cities.filter((city) => city.countySlug === countySlug);
}

/**
 * Get location cards for homepage (format for Card component)
 */
export function getHomepageLocations(): LocationCard[] {
  return cities.slice(0, 4).map((city, index) => ({
    number: (index + 1).toString().padStart(2, "0"),
    title: city.name,
    prosCount: city.prosCount.toUpperCase(),
    description: city.description,
    linkUrl: `/locations/${city.countySlug}/${city.slug}`,
    linkText: "View locksmiths →",
  }));
}

/**
 * Get all counties as location cards
 */
export function getCountyCards(): LocationCard[] {
  return counties.map((county, index) => ({
    number: (index + 1).toString().padStart(2, "0"),
    title: county.name,
    prosCount: county.prosCount,
    description: county.description,
    linkUrl: `/locations/${county.slug}`,
    linkText: "View locksmiths →",
  }));
}
