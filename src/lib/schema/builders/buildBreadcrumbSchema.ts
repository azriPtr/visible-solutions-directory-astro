import type { BreadcrumbSchema, BreadcrumbItem } from "../types";

/**
 * @param breadcrumbs
 * @returns
 */

export function buildBreadcrumbSchema(
    breadcrumbs: Array<{
        label: string;
        href?: string;
    }>
): BreadcrumbSchema {
    const baseUrl = "https://uklocksmithdirectory.co.uk";

    const itemListElement: BreadcrumbItem[] = breadcrumbs.map((crumb, index) => {
        const itemUrl = crumb.href
        ? `${baseUrl}${crumb.href}`
        : baseUrl;

        return {
            "@type": "ListItem",
            position: index + 1,
            name: crumb.label,
            item: itemUrl,
        };
    });

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement,
    };
}