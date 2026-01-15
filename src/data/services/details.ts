/**
 * Service Detail Content
 *
 * This file contains all content for individual service pages.
 * Each service should have a unique slug that matches the URL.
 */

export interface ServiceSymptom {
  icon: "circle" | "wrench" | "door" | "alert";
  title: string;
  description: string;
}

export interface ServiceFactor {
  title: string;
  content: string;
}

export interface ServiceLink {
  label: string;
  href: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  metaDescription: string;
  description: string;

  // What is this service?
  introTitle: string;
  introContent: string[];

  // When is this service needed?
  symptomsTitle: string;
  symptoms: ServiceSymptom[];

  // Technical factors
  factorsTitle: string;
  factorsIntro: string;
  factors: ServiceFactor[];

  // Professional vs DIY
  professionalBox: {
    title: string;
    intro: string;
    points: Array<{
      title: string;
      description: string;
    }>;
  };

  // CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaSearchUrl: string;

  // Internal linking
  popularLocations: ServiceLink[];
  relatedServices: ServiceLink[];
}

export const services: Record<string, ServiceDetail> = {
  "upvc-repairs": {
    slug: "upvc-repairs",
    title: "uPVC Door & Window Lock Repairs",
    metaDescription:
      "uPVC lock repair involves the adjustment, alignment, or replacement of multipoint locking mechanisms found in modern doors and windows.",
    description:
      "uPVC lock repair involves the adjustment, alignment, or replacement of multipoint locking mechanisms found in modern doors and windows. This service is essential when handles become stiff or keys no longer turn smoothly, preventing complete mechanism failure.",

    introTitle: "What is uPVC lock repair?",
    introContent: [
      "Modern uPVC (Unplasticized Polyvinyl Chloride) and composite doors utilize a complex system known as a multipoint lock. Unlike traditional wooden doors that rely on a single latch, multipoint locks engage the handle, shootbolts, and bottom simultaneously when the handle is lifted.",
      "A repair service typically focuses on the internal gearbox or the alignment of the door in the frame. Over time, heat expansion, heavy usage, and settling foundations can cause the locking points to misalign with the keep plates on the frame. If left unaddressed, this misalignment puts excessive stress on the central gearbox, eventually causing it to shatter or jam in the locked position.",
    ],

    symptomsTitle: "When is this service needed?",
    symptoms: [
      {
        icon: "circle",
        title: "Stiff Handle Operation",
        description:
          "The handle requires significant force to lift up to the locking position, indicating the bolts are hitting the frame rather than sliding into the keeps.",
      },
      {
        icon: "wrench",
        title: "Key Turns but Nothing Happens",
        description:
          "The key rotates freely in the cylinder (barrel), but the door does not lock or unlock. This is a classic symptom of a failed gearbox spindle.",
      },
      {
        icon: "door",
        title: "Visible Door Drop",
        description:
          "You can see daylight at the top corner of the door, or the bottom of the door scuffs the threshold when opening and closing.",
      },
    ],

    factorsTitle: "What affects the complexity of repair?",
    factorsIntro:
      "Repairing multipoint locks is distinct from standard locksmithing due to the lack of standardization across manufacturers. Several variables determine the intricacy of the job:",
    factors: [
      {
        title: "Mechanism Brand & Availability",
        content:
          "Thousands of gearbox variations exist across brands like Yale, ERA, Mila, Fullex, and Winkhaus. Obscure or discontinued models may require custom ordering or retrofitting a universal replacement, extending timescales and cost.",
      },
      {
        title: "Door vs. Frame Alignment",
        content:
          "If the door has dropped, simply replacing the gearbox won't solve the issue. The locksmith must adjust hinges, shims, or even repack the glass unit to redistribute weight. Severe drops may require frame realignment or replacement.",
      },
      {
        title: "Security Level Configuration",
        content:
          "Higher-security cylinders (anti-snap, anti-bump) and smart lock integrations add complexity. Upgrades during repair may involve drilling out seized barrels or reconfiguring electronic keypads.",
      },
    ],

    professionalBox: {
      title: "Professional vs. DIY Considerations",
      intro:
        "While changing a simple cylinder (the piece where the key goes) can be a DIY task, repairing the internal multipoint mechanism is discouraged for non-professionals:",
      points: [
        {
          title: "Insurance Validity",
          description:
            "Most home insurance policies require doors to be secured by a functional 5-point locking system. Improper DIY repair may void this coverage.",
        },
        {
          title: "Permanent Damage",
          description:
            "Forcing a misaligned mechanism can shear the spindle inside the gearbox, turning a simple alignment job into a costly full replacement.",
        },
      ],
    },

    ctaTitle: "Find uPVC Specialists near you",
    ctaDescription:
      "Connect with vetted locksmiths who specialize in multipoint lock adjustment, gearbox replacement, and door alignment in your local area.",
    ctaButtonText: "Search for uPVC specialists",
    ctaSearchUrl: "/search?service=upvc-repairs",

    popularLocations: [
      {
        label: "uPVC Repairs in London",
        href: "/services/upvc-repairs/london",
      },
      {
        label: "uPVC Repairs in Manchester",
        href: "/services/upvc-repairs/manchester",
      },
      {
        label: "uPVC Repairs in Birmingham",
        href: "/services/upvc-repairs/birmingham",
      },
      { label: "uPVC Repairs in Leeds", href: "/services/upvc-repairs/leeds" },
    ],

    relatedServices: [
      {
        label: "Snap-Safe Cylinder Upgrades",
        href: "/services/cylinder-upgrades",
      },
      {
        label: "Window Handle & Lock Repair",
        href: "/services/window-lock-repair",
      },
    ],
  },

  // Add more services here following the same structure
  "emergency-lockouts": {
    slug: "emergency-lockouts",
    title: "Emergency Lockout Services",
    metaDescription:
      "Rapid non-destructive entry solutions when you are locked out of your home or business.",
    description:
      "Emergency lockout services provide rapid, non-destructive entry when you're locked out of your property. Professional locksmiths use specialized tools to gain entry without damaging your locks or doors.",

    introTitle: "What is an emergency lockout service?",
    introContent: [
      "Emergency lockout services are designed to help you regain access to your property quickly and safely when you've been locked out. Whether you've lost your keys, left them inside, or experienced a lock malfunction, trained locksmiths can help.",
      "Professional locksmiths prioritize non-destructive entry methods, using specialized tools like lock picks, bypass tools, and manipulation techniques to open doors without causing damage to your locks or frames.",
    ],

    symptomsTitle: "When do you need this service?",
    symptoms: [
      {
        icon: "alert",
        title: "Lost Keys",
        description:
          "You've misplaced your keys and have no spare available to access your property.",
      },
      {
        icon: "door",
        title: "Door Slammed Shut",
        description:
          "The door has closed behind you with keys still inside, often due to wind or automatic locking mechanisms.",
      },
      {
        icon: "wrench",
        title: "Lock Malfunction",
        description:
          "The lock has jammed or broken, preventing you from using your key to open the door.",
      },
    ],

    factorsTitle: "What affects response time and cost?",
    factorsIntro:
      "Several factors influence how quickly a locksmith can reach you and the complexity of gaining entry:",
    factors: [
      {
        title: "Time of Day",
        content:
          "Emergency callouts during evenings, weekends, and holidays typically incur higher fees due to out-of-hours availability. Response times may also vary based on current demand.",
      },
      {
        title: "Lock Type & Security Level",
        content:
          "High-security locks, anti-snap cylinders, and smart locks may require more time and specialized tools to open non-destructively. Basic Yale locks are typically quicker to bypass.",
      },
      {
        title: "Property Location",
        content:
          "Urban areas typically have faster response times (20-40 minutes) compared to rural locations. Distance from the nearest available locksmith affects both timing and travel charges.",
      },
    ],

    professionalBox: {
      title: "Why choose professional lockout services?",
      intro:
        "While it might be tempting to try DIY solutions, professional lockout services offer several advantages:",
      points: [
        {
          title: "No Property Damage",
          description:
            "Professionals have the tools and training to open doors without breaking locks, drilling, or damaging frames, saving you replacement costs.",
        },
        {
          title: "Insurance & Liability",
          description:
            "Licensed locksmiths carry insurance for any accidental damage and provide receipts for insurance claims if needed.",
        },
      ],
    },

    ctaTitle: "Find Emergency Locksmiths near you",
    ctaDescription:
      "Connect with 24/7 emergency lockout specialists in your area. Most locksmiths aim to reach you within 30-60 minutes.",
    ctaButtonText: "Find emergency help now",
    ctaSearchUrl: "/search?service=emergency-lockouts&emergency=true",

    popularLocations: [
      {
        label: "Emergency Lockouts in London",
        href: "/services/emergency-lockouts/london",
      },
      {
        label: "Emergency Lockouts in Manchester",
        href: "/services/emergency-lockouts/manchester",
      },
      {
        label: "Emergency Lockouts in Birmingham",
        href: "/services/emergency-lockouts/birmingham",
      },
      {
        label: "Emergency Lockouts in Leeds",
        href: "/services/emergency-lockouts/leeds",
      },
    ],

    relatedServices: [
      { label: "Lock Replacement", href: "/services/lock-replacement" },
      { label: "Key Cutting", href: "/services/key-cutting" },
    ],
  },
};

/**
 * Get a service by slug
 */
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services[slug];
}

/**
 * Get all service slugs (for static path generation)
 */
export function getAllServiceSlugs(): string[] {
  return Object.keys(services);
}
