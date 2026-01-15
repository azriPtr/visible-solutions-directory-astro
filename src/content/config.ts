import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
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
    // Privacy page
    lastUpdated: z.string().optional(),
    policyVersion: z.string().optional(),
    dataController: z
      .object({
        name: z.string(),
        registeredIn: z.string(),
        email: z.string(),
        ukRep: z.string(),
        ukRepAddress: z.string(),
      })
      .optional(),
    // Terms page
    contactInfo: z
      .object({
        company: z.string(),
        department: z.string(),
        email: z.string(),
      })
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

const listings = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      rating: z.number().min(0).max(5),
      reviewCount: z.number(),
      googleRating: z.number().min(0).max(5).optional(),
      // Badges
      isVerified: z.boolean().default(true),
      isDbsChecked: z.boolean().default(false),
      isEmergency: z.boolean().default(false),
      // At a Glance
      established: z.string().optional(),
      focus: z.string().optional(),
      insurance: z.string().optional(),
      callOutFee: z.string().optional(),
      // Contact
      phone: z.string(),
      responseTime: z.string().optional(),
      // Status & Hours
      status: z.enum(["Open Now", "Closed", "24 Hours"]).default("Open Now"),
      openingHours: z
        .array(
          z.object({
            day: z.string(),
            hours: z.string(),
          })
        )
        .optional(),
      // Verification
      isIdentityVerified: z.boolean().default(false),
      isInsuranceChecked: z.boolean().default(false),
      // Services
      servicesOffered: z
        .array(
          z.object({
            icon: z.string(),
            title: z.string(),
            description: z.string(),
          })
        )
        .optional(),
      // Service Area
      serviceAreaRadius: z.string().optional(),
      serviceAreas: z.array(z.string()).optional(),
      serviceAreaMap: image().optional(),
      serviceAreaMapAlt: z.string().optional(),
      // Reviews (from directory)
      directoryReviews: z
        .array(
          z.object({
            author: z.string(),
            initials: z.string(),
            date: z.string(),
            rating: z.number().min(1).max(5),
            comment: z.string(),
            isVerified: z.boolean().default(true),
          })
        )
        .optional(),
      // External Reviews
      externalReviews: z
        .array(
          z.object({
            platform: z.string(),
            rating: z.number(),
            reviewCount: z.number(),
          })
        )
        .optional(),
    }),
});

// Guides collection (long-form editorial content)
const guides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z
      .object({
        name: z.string(),
        initials: z.string().optional(),
        role: z.string().optional(),
        bio: z.string().optional(),
      })
      .optional(),
    publishedDate: z.string(),
    readingTime: z.string().optional(),
    category: z.string().optional(),
  }),
});

export const collections = {
  pages,
  services,
  reviews,
  locations,
  articles,
  listings,
  guides,
};
