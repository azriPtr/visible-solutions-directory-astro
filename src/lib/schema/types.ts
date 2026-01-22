export interface BaseSchema {
    "@context": "https://schema.org";
    "@type": string;
}

export interface PostalAddress {
    "@type": "PostalAddress";
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
}

export interface AggregateRating {
    "@type": "AggregateRating";
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
}

export interface LocksmithSchema extends BaseSchema {
    "@type": "Locksmith";
    name: string;
    url: string;
    telephone?: string;
    email?: string;
    image?: string;
    address?: PostalAddress;
    aggregateRating?: AggregateRating;
    priceRange?: string;
    description?: string;
    areaServed?: string | string[];
    openingHours?: string[];
}

export interface BreadcrumbItem {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
}

export interface BreadcrumbSchema extends BaseSchema {
    "@type": "BreadcrumbList";
    itemListElement: BreadcrumbItem[];
}

export interface ServiceSchema extends BaseSchema {
    "@type": "Service";
    name: string;
    description: string;
    provider: {
        "@type": "Organization";
        name: string;
        url: string;
    };
    areaServed?: string | string[];
    serviceType?: string;
    url?: string;
}

export type AnySchema = LocksmithSchema | BreadcrumbSchema | ServiceSchema;
