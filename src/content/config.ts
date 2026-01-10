import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    breadcrumbs: z.array(
      z.object({
        label: z.string(),
        href: z.string().optional(),
      })
    ),
    // About page
    governance: z
      .object({
        operator: z.string(),
        entityType: z.string(),
        primaryFunction: z.string(),
        dataController: z.string(),
        gdprNote: z.string(),
      })
      .optional(),
    independenceClause: z.string().optional(),
    governanceContact: z.string().optional(),
    // Contact page
    infoBox: z.string().optional(),
    contactChannels: z
      .array(
        z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
          linkText: z.string(),
          linkHref: z.string(),
          linkIcon: z.string().optional(),
        })
      )
      .optional(),
  }),
});

// Card collections
const services = defineCollection({
  type: "content",
  schema: z.object({
    number: z.string(),
    title: z.string(),
    description: z.string(),
    linkUrl: z.string(),
    linkText: z.string(),
  }),
});

const reviews = defineCollection({
  type: "content",
  schema: z.object({
    rating: z.number().min(1).max(5),
    description: z.string(),
    category: z.string(),
  }),
});

const locations = defineCollection({
  type: "content",
  schema: z.object({
    number: z.string(),
    title: z.string(),
    prosCount: z.string(),
    description: z.string(),
    linkUrl: z.string(),
    linkText: z.string(),
  }),
});

const articles = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      image: image(),
      imageAlt: z.string(),
      category: z.string(),
      title: z.string(),
      description: z.string(),
      linkUrl: z.string(),
      linkText: z.string(),
    }),
});

export const collections = {
  pages,
  services,
  reviews,
  locations,
  articles,
};
