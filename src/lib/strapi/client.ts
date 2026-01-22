/**
 * Strapi API Client
 * 
 * Centralized Strapi v5 API client with error handling and type safety.
 * Handles authentication, base URL configuration, and common fetch logic.
 */

import type { HomepageResponse, HeroSectionComponent, CardsSectionComponent, CTASectionComponent } from './types';
import { isHeroSection, isCardsSection, isCTASection } from './types';

// Strapi Configuration
const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = import.meta.env.STRAPI_API_TOKEN || '';
// Allow configuring the homepage API ID (useful if your API ID is different)
const HOMEPAGE_API_ID = import.meta.env.PUBLIC_HOMEPAGE_API_ID || 'homepage';

/**
 * Base fetch function for Strapi API calls
 * Includes authentication and error handling
 */
async function fetchStrapi<T>(endpoint: string): Promise<T> {
  const url = `${STRAPI_URL}/api${endpoint}`;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // Add authorization header if token is available
  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
  }

  try {
    console.log(`[Strapi] Fetching: ${url}`);
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Strapi] Error response:`, errorText);
      
      throw new Error(
        `Strapi API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log(`[Strapi] Success:`, JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.error(`[Strapi] Failed to fetch from: ${endpoint}`, error);
    throw error;
  }
}

/**
 * Fetch Homepage Single Type
 * 
 * Retrieves the homepage data from Strapi including all dynamic zone components.
 * In Strapi v5, the endpoint for single types is: /api/{single-type-name}
 * 
 * The API ID can be configured via PUBLIC_HOMEPAGE_API_ID env variable.
 * Default is 'homepage', but you can change it to match your Strapi setup.
 * 
 * @returns Homepage data with dynamic zone content
 * @throws Error if the API call fails
 */
export async function getHomepage(): Promise<HomepageResponse> {
  // Strapi v5 dynamic zone populate
  return await fetchStrapi<HomepageResponse>(`/${HOMEPAGE_API_ID}?populate[content][populate]=*`);
}

/**
 * Extract Hero Section from Homepage
 * 
 * Safely extracts the hero section component from the dynamic zone.
 * Uses type guards to ensure we get the correct component type.
 * 
 * @param homepage - The homepage response from Strapi
 * @returns Hero section data or null if not found
 */
export function extractHeroSection(
  homepage: HomepageResponse
): HeroSectionComponent | null {
  // Defensive check: ensure content array exists
  if (!homepage?.data?.content || !Array.isArray(homepage.data.content)) {
    console.warn('Homepage content array is missing or invalid');
    return null;
  }

  // Find the hero section component (don't assume it's first)
  const heroSection = homepage.data.content.find(isHeroSection);

  if (!heroSection) {
    console.warn('Hero section not found in homepage content');
    return null;
  }

  return heroSection;
}

/**
 * Get Hero Section Data
 * 
 * Convenience function that fetches homepage and extracts hero section.
 * This is the main function you'll use in your pages.
 * 
 * @returns Hero section data or null if not found
 */
export async function getHeroSection(): Promise<HeroSectionComponent | null> {
  try {
    const homepage = await getHomepage();
    return extractHeroSection(homepage);
  } catch (error) {
    console.error('Failed to get hero section:', error);
    return null;
  }
}

/**
 * Extract Cards Section from Homepage by Content Type
 * 
 * Safely extracts a cards section component from the dynamic zone.
 * You can filter by content type (service, location, article).
 * 
 * @param homepage - The homepage response from Strapi
 * @param contentType - Optional filter by content type
 * @returns Cards section data or null if not found
 */
export function extractCardsSection(
  homepage: HomepageResponse,
  contentType?: 'service' | 'location' | 'article'
): CardsSectionComponent | null {
  // Defensive check: ensure content array exists
  if (!homepage?.data?.content || !Array.isArray(homepage.data.content)) {
    console.warn('Homepage content array is missing or invalid');
    return null;
  }

  // Find cards sections
  const cardsSections = homepage.data.content.filter(isCardsSection);

  if (cardsSections.length === 0) {
    console.warn('No cards sections found in homepage content');
    return null;
  }

  // If content type specified, filter by it
  if (contentType) {
    const filtered = cardsSections.find(section => section.content === contentType);
    if (!filtered) {
      console.warn(`Cards section with content type "${contentType}" not found`);
      return null;
    }
    return filtered;
  }

  // Return first cards section if no filter
  return cardsSections[0];
}

/**
 * Get Cards Section Data
 * 
 * Convenience function that fetches homepage and extracts cards section.
 * Can optionally filter by content type.
 * 
 * @param contentType - Optional filter by content type (service, location, article)
 * @returns Cards section data or null if not found
 */
export async function getCardsSection(
  contentType?: 'service' | 'location' | 'article'
): Promise<CardsSectionComponent | null> {
  try {
    const homepage = await getHomepage();
    return extractCardsSection(homepage, contentType);
  } catch (error) {
    console.error('Failed to get cards section:', error);
    return null;
  }
}

/**
 * Get Services Section Data
 * 
 * Convenience function that fetches homepage and extracts the services cards section.
 * 
 * @returns Services section data or null if not found
 */
export async function getServicesSection(): Promise<CardsSectionComponent | null> {
  return getCardsSection('service');
}

/**
 * Extract Cards Sections from Homepage
 * 
 * Safely extracts all Cards section components from the dynamic zone.
 * Returns an array of Cards sections in the order they appear.
 * 
 * @param homepage - The homepage response from Strapi
 * @returns Array of Cards sections
 */
export function extractCardsSections(
  homepage: HomepageResponse
): CardsSectionComponent[] {
  // Defensive check: ensure content array exists
  if (!homepage?.data?.content || !Array.isArray(homepage.data.content)) {
    console.warn('Homepage content array is missing or invalid');
    return [];
  }

  // Find all Cards sections
  const cardsSections = homepage.data.content.filter(isCardsSection);

  if (cardsSections.length === 0) {
    console.warn('No Cards sections found in homepage content');
  }

  return cardsSections;
}

/**
 * Get All Cards Sections Data
 * 
 * Convenience function that fetches homepage and extracts all Cards sections.
 * 
 * @returns Array of Cards sections
 */
export async function getCardsSections(): Promise<CardsSectionComponent[]> {
  try {
    const homepage = await getHomepage();
    return extractCardsSections(homepage);
  } catch (error) {
    console.error('Failed to get Cards sections:', error);
    return [];
  }
}

/**
 * Extract CTA Sections from Homepage
 * 
 * Safely extracts all CTA section components from the dynamic zone.
 * Returns an array of CTA sections in the order they appear.
 * 
 * @param homepage - The homepage response from Strapi
 * @returns Array of CTA sections
 */
export function extractCTASections(
  homepage: HomepageResponse
): CTASectionComponent[] {
  // Defensive check: ensure content array exists
  if (!homepage?.data?.content || !Array.isArray(homepage.data.content)) {
    console.warn('Homepage content array is missing or invalid');
    return [];
  }

  // Find all CTA sections
  const ctaSections = homepage.data.content.filter(isCTASection);

  if (ctaSections.length === 0) {
    console.warn('No CTA sections found in homepage content');
  }

  return ctaSections;
}

/**
 * Get All CTA Sections Data
 * 
 * Convenience function that fetches homepage and extracts all CTA sections.
 * 
 * @returns Array of CTA sections
 */
export async function getCTASections(): Promise<CTASectionComponent[]> {
  try {
    const homepage = await getHomepage();
    return extractCTASections(homepage);
  } catch (error) {
    console.error('Failed to get CTA sections:', error);
    return [];
  }
}
