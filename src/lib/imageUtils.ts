/**
 * Image optimization utilities for external images (Strapi, Supabase, etc.)
 */

/**
 * Common responsive image widths for srcset generation
 */
export const RESPONSIVE_WIDTHS = [320, 480, 768, 1024, 1600] as const;

/**
 * Builds a responsive srcset string for Strapi/Supabase images
 * Assumes the image service supports URL-based resizing with a width parameter
 * 
 * @param imageUrl - Base URL of the image
 * @param widths - Array of widths to generate (defaults to RESPONSIVE_WIDTHS)
 * @returns Srcset string for use in img elements
 * 
 * @example
 * const srcset = buildStrapiSrcSet("https://example.com/image.jpg");
 * // Returns: "https://example.com/image.jpg?width=320 320w, https://example.com/image.jpg?width=480 480w, ..."
 */
export function buildStrapiSrcSet(
  imageUrl: string,
  widths: readonly number[] = RESPONSIVE_WIDTHS
): string {
  if (!imageUrl) return "";

  // Check if URL already has query parameters
  const separator = imageUrl.includes("?") ? "&" : "?";

  return widths
    .map((width) => `${imageUrl}${separator}width=${width} ${width}w`)
    .join(", ");
}

/**
 * Generates a sizes attribute for responsive images
 * 
 * @param config - Configuration for different breakpoints
 * @returns Sizes string for use in img elements
 * 
 * @example
 * const sizes = generateSizes({ sm: "100vw", md: "50vw", lg: "33vw" });
 * // Returns: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
 */
export function generateSizes(config: {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  default: string;
}): string {
  const breakpoints: string[] = [];

  if (config.sm) breakpoints.push(`(max-width: 640px) ${config.sm}`);
  if (config.md) breakpoints.push(`(max-width: 768px) ${config.md}`);
  if (config.lg) breakpoints.push(`(max-width: 1024px) ${config.lg}`);
  if (config.xl) breakpoints.push(`(max-width: 1280px) ${config.xl}`);

  breakpoints.push(config.default);

  return breakpoints.join(", ");
}

/**
 * Checks if an image URL is external (not a local asset)
 * 
 * @param url - Image URL to check
 * @returns True if the image is external
 */
export function isExternalImage(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}
