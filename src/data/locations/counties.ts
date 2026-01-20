/**
 * County-Specific Data
 * 
 * This file contains detailed data for county-level location pages.
 * In the future, this will be replaced with Strapi API calls.
 */

export interface CountyTown {
  name: string;
  slug: string;
  prosCount: string;
}

export interface CountyService {
  slug: string;
  title: string;
  description: string;
}

export interface CountyArticle {
  title: string;
  description: string;
  category: string;
  linkUrl: string;
}

export interface CountyFaq {
  question: string;
  answer: string;
}

export interface CountyPageData {
  slug: string;
  name: string;
  region: string;
  description: string;
  prosCount: string;
  towns: CountyTown[];
  services: CountyService[];
  articles: CountyArticle[];
  faqs: CountyFaq[];
}

// Default services available in all counties
const defaultServices: CountyService[] = [
  {
    slug: "emergency-lockouts",
    title: "Emergency Lockouts",
    description: "24/7 rapid response for residential and commercial lockouts",
  },
  {
    slug: "upvc-repairs",
    title: "uPVC Door Repairs",
    description: "Specialist repairs for multipoint locks and misaligned uPVC doors",
  },
  {
    slug: "lock-changes",
    title: "Lock Changes & Upgrades",
    description: "British Standard lock installations and security upgrades",
  },
  {
    slug: "burglary-repairs",
    title: "Burglary Damage Repairs",
    description: "Emergency securing and repair services following break-ins",
  },
];

// Default FAQs for all counties (customized per county)
function getDefaultFaqs(countyName: string): CountyFaq[] {
  return [
    {
      question: `How quickly can a locksmith arrive in ${countyName}?`,
      answer: `Response times vary by location and time of day. In urban areas, emergency locksmiths typically arrive within 30-60 minutes. In more rural areas, expect 60-90 minutes for emergency call-outs.`,
    },
    {
      question: `What does a locksmith call-out cost in ${countyName}?`,
      answer: `Standard call-out fees range from £60-£90 during business hours. Emergency or out-of-hours services typically cost £90-£150. Final costs depend on the work required and parts needed.`,
    },
    {
      question: `Are all ${countyName} locksmiths DBS checked?`,
      answer: `Not automatically. We verify DBS checks for locksmiths who provide them, and these are clearly marked on their profiles. We recommend choosing DBS-checked locksmiths for added peace of mind.`,
    },
  ];
}

// County-specific data
export const countyData: Record<string, CountyPageData> = {
  "west-midlands": {
    slug: "west-midlands",
    name: "West Midlands",
    region: "England",
    description:
      "The West Midlands is home to Birmingham, the UK's second-largest city, along with Coventry, Wolverhampton, and surrounding towns. Our directory connects you with verified locksmiths across the entire county.",
    prosCount: "342+",
    towns: [
      { name: "Birmingham", slug: "birmingham", prosCount: "128" },
      { name: "Coventry", slug: "coventry", prosCount: "64" },
      { name: "Wolverhampton", slug: "wolverhampton", prosCount: "52" },
      { name: "Solihull", slug: "solihull", prosCount: "38" },
      { name: "Dudley", slug: "dudley", prosCount: "34" },
      { name: "Walsall", slug: "walsall", prosCount: "29" },
    ],
    services: defaultServices,
    articles: [
      {
        title: "Understanding BS3621 Lock Standards",
        description: "What insurance companies require and why British Standard locks matter",
        category: "TECHNICAL",
        linkUrl: "/guides/bs3621-lock-standard",
      },
      {
        title: "uPVC Door Maintenance Tips",
        description: "How to prevent common uPVC door problems",
        category: "MAINTENANCE",
        linkUrl: "/guides/upvc-maintenance",
      },
    ],
    faqs: getDefaultFaqs("West Midlands"),
  },

  "greater-london": {
    slug: "greater-london",
    name: "Greater London",
    region: "England",
    description:
      "Greater London spans 33 boroughs with diverse security needs from Victorian properties to modern apartments. Our directory features the capital's largest network of verified locksmiths.",
    prosCount: "890+",
    towns: [
      { name: "Central London", slug: "london", prosCount: "890" },
      { name: "Westminster", slug: "westminster", prosCount: "156" },
      { name: "Camden", slug: "camden", prosCount: "89" },
      { name: "Islington", slug: "islington", prosCount: "72" },
      { name: "Hackney", slug: "hackney", prosCount: "65" },
      { name: "Tower Hamlets", slug: "tower-hamlets", prosCount: "78" },
    ],
    services: defaultServices,
    articles: [
      {
        title: "London Flat Security Guide",
        description: "Security considerations for apartment living in the capital",
        category: "RESIDENTIAL",
        linkUrl: "/guides/london-flat-security",
      },
      {
        title: "Insurance Requirements in London",
        description: "What locks your London insurer likely requires",
        category: "INSURANCE",
        linkUrl: "/guides/london-insurance-locks",
      },
    ],
    faqs: getDefaultFaqs("Greater London"),
  },

  "greater-manchester": {
    slug: "greater-manchester",
    name: "Greater Manchester",
    region: "England",
    description:
      "Greater Manchester encompasses ten metropolitan boroughs including Manchester, Salford, and Bolton. Find trusted locksmiths serving homes and businesses across the region.",
    prosCount: "425+",
    towns: [
      { name: "Manchester", slug: "manchester", prosCount: "156" },
      { name: "Salford", slug: "salford", prosCount: "67" },
      { name: "Bolton", slug: "bolton", prosCount: "54" },
      { name: "Stockport", slug: "stockport", prosCount: "48" },
      { name: "Oldham", slug: "oldham", prosCount: "38" },
      { name: "Rochdale", slug: "rochdale", prosCount: "32" },
    ],
    services: defaultServices,
    articles: [
      {
        title: "Terraced House Security",
        description: "Protecting traditional terraced properties common in Greater Manchester",
        category: "RESIDENTIAL",
        linkUrl: "/guides/terraced-house-security",
      },
    ],
    faqs: getDefaultFaqs("Greater Manchester"),
  },

  "west-yorkshire": {
    slug: "west-yorkshire",
    name: "West Yorkshire",
    region: "England",
    description:
      "West Yorkshire includes Leeds, Bradford, and surrounding towns. Our directory connects you with verified locksmiths serving residential and commercial properties throughout the region.",
    prosCount: "312+",
    towns: [
      { name: "Leeds", slug: "leeds", prosCount: "98" },
      { name: "Bradford", slug: "bradford", prosCount: "72" },
      { name: "Wakefield", slug: "wakefield", prosCount: "45" },
      { name: "Huddersfield", slug: "huddersfield", prosCount: "52" },
      { name: "Halifax", slug: "halifax", prosCount: "34" },
    ],
    services: defaultServices,
    articles: [
      {
        title: "Student Accommodation Security",
        description: "Lock security for student housing in Leeds and Bradford",
        category: "RESIDENTIAL",
        linkUrl: "/guides/student-accommodation-security",
      },
    ],
    faqs: getDefaultFaqs("West Yorkshire"),
  },

  "merseyside": {
    slug: "merseyside",
    name: "Merseyside",
    region: "England",
    description:
      "Merseyside covers Liverpool, Wirral, and surrounding areas. Find professional locksmiths serving the region's homes and businesses.",
    prosCount: "198+",
    towns: [
      { name: "Liverpool", slug: "liverpool", prosCount: "112" },
      { name: "Wirral", slug: "wirral", prosCount: "45" },
      { name: "Southport", slug: "southport", prosCount: "24" },
      { name: "St Helens", slug: "st-helens", prosCount: "28" },
    ],
    services: defaultServices,
    articles: [
      {
        title: "Georgian Property Lock Advice",
        description: "Securing historic Georgian properties in Liverpool",
        category: "HERITAGE",
        linkUrl: "/guides/georgian-property-locks",
      },
    ],
    faqs: getDefaultFaqs("Merseyside"),
  },

  "south-yorkshire": {
    slug: "south-yorkshire",
    name: "South Yorkshire",
    region: "England",
    description:
      "South Yorkshire includes Sheffield, Doncaster, Rotherham, and Barnsley. Our directory features verified locksmiths serving the Steel City and surrounding areas.",
    prosCount: "187+",
    towns: [
      { name: "Sheffield", slug: "sheffield", prosCount: "89" },
      { name: "Doncaster", slug: "doncaster", prosCount: "42" },
      { name: "Rotherham", slug: "rotherham", prosCount: "34" },
      { name: "Barnsley", slug: "barnsley", prosCount: "28" },
    ],
    services: defaultServices,
    articles: [
      {
        title: "Industrial Property Security",
        description: "Commercial security for South Yorkshire's industrial heritage",
        category: "COMMERCIAL",
        linkUrl: "/guides/industrial-security",
      },
    ],
    faqs: getDefaultFaqs("South Yorkshire"),
  },

  "kent": {
    slug: "kent",
    name: "Kent",
    region: "England",
    description:
      "Kent, the Garden of England, spans from the White Cliffs of Dover to the borders of London. Find trusted locksmiths serving properties throughout the county.",
    prosCount: "234+",
    towns: [
      { name: "Maidstone", slug: "maidstone", prosCount: "52" },
      { name: "Canterbury", slug: "canterbury", prosCount: "38" },
      { name: "Dover", slug: "dover", prosCount: "28" },
      { name: "Ashford", slug: "ashford", prosCount: "35" },
      { name: "Margate", slug: "margate", prosCount: "24" },
    ],
    services: defaultServices,
    articles: [
      {
        title: "Holiday Home Security",
        description: "Protecting coastal holiday properties in Kent",
        category: "RESIDENTIAL",
        linkUrl: "/guides/holiday-home-security",
      },
    ],
    faqs: getDefaultFaqs("Kent"),
  },

  "essex": {
    slug: "essex",
    name: "Essex",
    region: "England",
    description:
      "Essex stretches from the London borders to the coast. Our directory connects you with verified locksmiths serving Chelmsford, Colchester, Southend, and beyond.",
    prosCount: "278+",
    towns: [
      { name: "Chelmsford", slug: "chelmsford", prosCount: "58" },
      { name: "Colchester", slug: "colchester", prosCount: "48" },
      { name: "Southend-on-Sea", slug: "southend-on-sea", prosCount: "65" },
      { name: "Basildon", slug: "basildon", prosCount: "42" },
      { name: "Harlow", slug: "harlow", prosCount: "32" },
    ],
    services: defaultServices,
    articles: [
      {
        title: "New Build Security Upgrades",
        description: "Improving locks on newly built Essex homes",
        category: "RESIDENTIAL",
        linkUrl: "/guides/new-build-security",
      },
    ],
    faqs: getDefaultFaqs("Essex"),
  },
};

/**
 * Get county data by slug
 */
export function getCountyData(slug: string): CountyPageData | undefined {
  return countyData[slug];
}

/**
 * Get all county slugs (for static path generation)
 */
export function getAllCountySlugs(): string[] {
  return Object.keys(countyData);
}

/**
 * Get all county data
 */
export function getAllCountyData(): CountyPageData[] {
  return Object.values(countyData);
}
