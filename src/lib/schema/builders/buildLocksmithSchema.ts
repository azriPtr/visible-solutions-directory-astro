import type { LocksmithSchema, PostalAddress, AggregateRating } from "../types";

/** 
 * @param data
 * @param slug
 * @returns
*/

export function buildLocksmithSchema(
    data: {
        title: string;
        phone?: string;
        rating?: number;
        reviewCount?: number;
        serviceAreas?: string[];
        openingHours?: Array<{ day: string; hours: string}>;
        insurance?: string;
    },
    slug: string
): LocksmithSchema {
    const baseUrl = "https://uklocksmithdirectory.co.uk";
    const profileUrl = `${baseUrl}/locksmiths/${slug}`;

    const schema: LocksmithSchema = {
        "@context": "https://schema.org",
        "@type": "Locksmith",
        name: data.title,
        url: profileUrl,
};

if (data.phone) {
    schema.telephone = data.phone;
}

if (data.rating && data.reviewCount) {
    const aggregateRating: AggregateRating = {
        "@type": "AggregateRating",
        ratingValue: data.rating,
        reviewCount: data.reviewCount,
        bestRating: 5,
        worstRating: 1,
    };
    schema.aggregateRating = aggregateRating;
}

if (data.serviceAreas && data.serviceAreas.length > 0) {
    schema.areaServed = data.serviceAreas;
}

if (data.openingHours && data.openingHours.length > 0) {
    schema.openingHours = data.openingHours.map(
      (schedule) => `${schedule.day} ${schedule.hours}`
    );
  }

if (data.insurance) {
    schema.description = data.insurance;
  }

  schema.priceRange = "££";

  return schema;
}