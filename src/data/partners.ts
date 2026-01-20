/**
 * Partners Data
 * 
 * This file contains all partner organization data.
 * In the future, this will be replaced with Strapi API calls.
 */

export interface PartnerBenefit {
  icon: "check" | "shield" | "award";
  title: string;
}

export interface PartnerStep {
  number: number;
  title: string;
  description?: string;
}

export interface PartnerBadgeItem {
  icon: "trending-flat" | "credit-card" | "clock";
  title: string;
  description: string;
}

export interface PartnerFaq {
  question: string;
  answer: string;
}

export interface Partner {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  verificationLink: string;
  
  about: {
    title: string;
    content: string[];
  };
  
  whyMatters: {
    title: string;
    intro: string;
    benefits: PartnerBenefit[];
  };
  
  verification: {
    title: string;
    intro: string;
    steps: PartnerStep[];
    note: string;
  };
  
  badgeLimitations: {
    title: string;
    intro: string;
    items: PartnerBadgeItem[];
  };
  
  faqs: PartnerFaq[];
  
  externalWebsite: string;
}

export const partners: Partner[] = [
  {
    slug: "mla",
    name: "Master Locksmiths Association",
    subtitle: "Verified Association Partner",
    description:
      "The Master Locksmiths Association (MLA) is the leading trade association for the locksmithing profession in the United Kingdom. We integrate their public membership data to verify that listed professionals adhere to the specific vetting and inspection standards required for MLA licensure.",
    verificationLink: "#verification",
    
    about: {
      title: "About the MLA",
      content: [
        "Established in 1958, the Master Locksmiths Association is a non-profit body recognised by the Home Office, Police, and British Standards Institution (BSI). It acts as the authoritative body for setting and promoting standards of conduct, practice, and materials within the locksmithing industry.",
        "Unlike a commercial directory, the MLA imposes strict entry requirements including exam-based qualifications and regular inspections. Members must pass the British Locksmith Institute (BLI) examinations and undergo ongoing compliance checks.",
      ],
    },
    
    whyMatters: {
      title: "Why this partnership matters",
      intro:
        "The locksmith industry in the UK is currently unregulated, meaning there is no legal requirement for a locksmith to have a background check or formal training. This partnership allows our directory to distinguish providers who have voluntarily submitted to oversight.",
      benefits: [
        { icon: "check", title: "Verifiable proof of competence through the BLI exam." },
        { icon: "shield", title: "Standardised Criminal Record checks (DBS) for key staff." },
        { icon: "award", title: "Regular inspection of business premises and tooling." },
      ],
    },
    
    verification: {
      title: "How verification works",
      intro:
        "Our platform maintains a neutral data link with the association's public register. When a locksmith claims MLA status on their profile, our system performs the following checks:",
      steps: [
        { number: 1, title: "Company Number Match", description: "We verify the registered company number against MLA records." },
        { number: 2, title: "Geographic Verification", description: "We confirm the trading address matches registered details." },
        { number: 3, title: "Membership Status Active", description: "We check that membership is current and in good standing." },
      ],
      note: "Note: We do not access private member data. Checks are performed against publicly accessible records only.",
    },
    
    badgeLimitations: {
      title: "Partner badges & search ranking",
      intro:
        "Locksmiths who pass the verification steps above are awarded the \"Association Member\" badge on their profile. It is important for users to understand the limitations of this badge:",
      items: [
        {
          icon: "trending-flat",
          title: "No Ranking Boost",
          description:
            "Possessing an MLA badge does not artificially boost a locksmith's position in search results. Ranking is determined by distance, availability, and user relevance.",
        },
        {
          icon: "credit-card",
          title: "Not a Paid Ad",
          description:
            "This badge cannot be purchased. It is strictly earned through verified membership with the partner organisation.",
        },
      ],
    },
    
    faqs: [
      {
        question: "Does the directory pay the MLA for these listings?",
        answer:
          "No. The presence of the MLA badge indicates verified membership status only. No financial transaction occurs between the directory and the association for listing prominence.",
      },
      {
        question: "How often is membership checked?",
        answer:
          "We cross-reference our data with the MLA public register on a quarterly basis. Locksmiths who lapse in membership will have the badge removed automatically.",
      },
      {
        question: "Does this partner endorse specific locksmiths?",
        answer:
          "No. The MLA approves the locksmith's compliance with their standards, but they do not endorse specific commercial jobs or pricing structures.",
      },
    ],
    
    externalWebsite: "https://locksmiths.co.uk",
  },
  {
    slug: "icl",
    name: "Institute of Certified Locksmiths",
    subtitle: "Educational Standards Partner",
    description:
      "The Institute of Certified Locksmiths (ICL) is a distinct non-profit organization focused on the educational advancement of security professionals. We reference their certification standards to verify technical competence.",
    verificationLink: "#verification",
    
    about: {
      title: "About the ICL",
      content: [
        "The Institute of Certified Locksmiths provides vocational training and certification for locksmiths across the United Kingdom. Their programs cover residential, commercial, and automotive locksmithing.",
        "ICL certification demonstrates that a locksmith has completed structured training and passed practical assessments in their chosen specialisation areas.",
      ],
    },
    
    whyMatters: {
      title: "Why this partnership matters",
      intro:
        "Technical skill verification is essential in an unregulated industry. ICL certification provides evidence that a locksmith has undergone formal training beyond basic apprenticeship.",
      benefits: [
        { icon: "check", title: "Structured curriculum covering modern lock technologies." },
        { icon: "shield", title: "Practical assessments ensure hands-on competence." },
        { icon: "award", title: "Continuing professional development requirements." },
      ],
    },
    
    verification: {
      title: "How verification works",
      intro:
        "When a locksmith claims ICL certification, we verify their credentials against the institute's records:",
      steps: [
        { number: 1, title: "Certificate Number Validation", description: "We verify the certificate number is genuine and active." },
        { number: 2, title: "Specialisation Check", description: "We confirm which areas the locksmith is certified in." },
        { number: 3, title: "Expiry Date Monitoring", description: "We track certification expiry and renewal status." },
      ],
      note: "Note: Verification is performed against ICL's certification database with their cooperation.",
    },
    
    badgeLimitations: {
      title: "Partner badges & search ranking",
      intro:
        "ICL-certified locksmiths receive the \"Certified Professional\" badge on their profile. Understanding this badge:",
      items: [
        {
          icon: "trending-flat",
          title: "Training Verification Only",
          description:
            "This badge confirms completed training, not years of experience or customer satisfaction ratings.",
        },
        {
          icon: "credit-card",
          title: "No Commercial Influence",
          description:
            "Badge display is based solely on valid certification status, not advertising spend.",
        },
      ],
    },
    
    faqs: [
      {
        question: "What's the difference between MLA and ICL?",
        answer:
          "The MLA is a trade association with business membership requirements. ICL focuses purely on educational certification for individual practitioners.",
      },
      {
        question: "Can a locksmith have both badges?",
        answer:
          "Yes. Many professional locksmiths hold both MLA membership and ICL certification, demonstrating both business standards compliance and technical training.",
      },
      {
        question: "Is ICL certification mandatory?",
        answer:
          "No. The UK locksmith industry is unregulated, so certification is voluntary. However, it demonstrates commitment to professional development.",
      },
    ],
    
    externalWebsite: "https://www.icl-uk.org",
  },
  {
    slug: "dbs",
    name: "Disclosure & Barring Service",
    subtitle: "Background Check Standard",
    description:
      "The Disclosure & Barring Service (DBS) is a UK government body that processes criminal record checks. We verify that locksmiths have submitted to DBS screening for enhanced customer safety.",
    verificationLink: "#verification",
    
    about: {
      title: "About the DBS",
      content: [
        "The Disclosure & Barring Service (formerly CRB) is an executive agency of the Home Office. It provides criminal record checks for employers and organisations to make safer recruitment decisions.",
        "While DBS checks are not legally required for locksmiths, many reputable professionals voluntarily undergo screening to provide assurance to customers about their background.",
      ],
    },
    
    whyMatters: {
      title: "Why DBS checking matters",
      intro:
        "Locksmiths have access to your home security. A DBS check provides additional peace of mind that the professional has no relevant criminal history.",
      benefits: [
        { icon: "check", title: "Criminal record disclosure for relevant offences." },
        { icon: "shield", title: "Barred list checks for regulated activities." },
        { icon: "award", title: "Voluntary screening demonstrates professionalism." },
      ],
    },
    
    verification: {
      title: "How verification works",
      intro:
        "When a locksmith claims DBS-checked status, we verify their certificate through the DBS Update Service:",
      steps: [
        { number: 1, title: "Certificate Upload", description: "Locksmith provides DBS certificate number." },
        { number: 2, title: "Update Service Check", description: "We verify status via DBS Update Service portal." },
        { number: 3, title: "Annual Renewal", description: "We re-verify annually through the Update Service." },
      ],
      note: "Note: We only verify that a valid DBS check exists. We do not have access to the content of any disclosures.",
    },
    
    badgeLimitations: {
      title: "DBS badge & limitations",
      intro:
        "The \"DBS Checked\" badge indicates the locksmith has provided proof of a DBS certificate. Important limitations:",
      items: [
        {
          icon: "clock",
          title: "Point-in-Time Check",
          description:
            "DBS certificates reflect status at time of issue. New offences may not appear until renewal.",
        },
        {
          icon: "credit-card",
          title: "Not a Clean Record Guarantee",
          description:
            "A DBS check existing does not mean no disclosures were made. We verify the check exists, not its contents.",
        },
      ],
    },
    
    faqs: [
      {
        question: "What level of DBS check do locksmiths need?",
        answer:
          "We accept Basic, Standard, or Enhanced DBS certificates. The level depends on the locksmith's typical work (e.g., working with vulnerable adults may require Enhanced).",
      },
      {
        question: "How often are DBS checks renewed?",
        answer:
          "We require locksmiths to maintain their DBS Update Service subscription for annual verification. Lapsed subscriptions result in badge removal.",
      },
      {
        question: "Is a DBS check legally required for locksmiths?",
        answer:
          "No. The UK locksmith industry is unregulated. DBS checks are voluntary but recommended for customer assurance.",
      },
    ],
    
    externalWebsite: "https://www.gov.uk/government/organisations/disclosure-and-barring-service",
  },
];

/**
 * Get all partners
 */
export function getAllPartners(): Partner[] {
  return partners;
}

/**
 * Get partner by slug
 */
export function getPartnerBySlug(slug: string): Partner | undefined {
  return partners.find((partner) => partner.slug === slug);
}

/**
 * Get all partner slugs (for static path generation)
 */
export function getAllPartnerSlugs(): string[] {
  return partners.map((partner) => partner.slug);
}
