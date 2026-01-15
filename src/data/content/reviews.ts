/**
 * Customer Reviews
 * 
 * This file contains customer review/testimonial data.
 * In the future, this will be replaced with Strapi API calls.
 */

export interface Review {
  rating: number;
  description: string;
  category: string;
  author?: string;
  location?: string;
}

export const reviews: Review[] = [
  {
    rating: 5,
    description:
      "Locked out at 11pm on a Sunday. Found a local locksmith through this directory who arrived in 30 minutes. No damage to the door and reasonable price.",
    category: "Emergency Lockout • Birmingham",
  },
  {
    rating: 5,
    description:
      "Used the directory to upgrade to anti-snap locks after a spate of break-ins locally. The locksmith explained everything clearly and the work was spotless.",
    category: "Lock Upgrade • Manchester",
  },
  {
    rating: 5,
    description:
      "Our uPVC door handle had been stiff for months. The locksmith diagnosed a misaligned gearbox, replaced it same-day, and it works perfectly now.",
    category: "uPVC Repair • Leeds",
  },
];

/**
 * Get reviews for homepage display
 */
export function getHomepageReviews(): Review[] {
  return reviews.slice(0, 3);
}

/**
 * Get reviews by rating
 */
export function getReviewsByRating(minRating: number): Review[] {
  return reviews.filter((review) => review.rating >= minRating);
}
