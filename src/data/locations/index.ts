/**
 * Locations Directory
 * 
 * This file contains all location data (counties, cities, regions).
 * In the future, this will be replaced with Strapi API calls.
 * 
 * Usage:
 * import { counties, cities, getCountyBySlug } from '@/data/locations';
 */

export interface City {
  slug: string;
  name: string;
  countySlug: string;
  prosCount: string;
  description: string;
  postcodes?: string[];
}

export interface County {
  slug: string;
  name: string;
  region: string;
  prosCount: string;
  description: string;
  cities: string[]; // Array of city slugs
}

export interface LocationCard {
  number: string;
  title: string;
  prosCount: string;
  description: string;
  linkUrl: string;
  linkText: string;
}

// Counties data - comprehensive UK coverage
export const counties: County[] = [
  {
    slug: "west-midlands",
    name: "West Midlands",
    region: "England",
    prosCount: "342+",
    description:
      "Find verified locksmiths serving Birmingham, Coventry, Wolverhampton, and surrounding areas.",
    cities: ["birmingham", "coventry", "wolverhampton", "solihull", "dudley", "walsall"],
  },
  {
    slug: "greater-london",
    name: "Greater London",
    region: "England",
    prosCount: "890+",
    description:
      "London's largest directory of verified locksmiths covering all 33 boroughs.",
    cities: ["london", "westminster", "camden", "islington", "hackney", "tower-hamlets"],
  },
  {
    slug: "greater-manchester",
    name: "Greater Manchester",
    region: "England",
    prosCount: "425+",
    description:
      "Connecting residents and businesses with trusted locksmiths across all 10 Greater Manchester boroughs.",
    cities: ["manchester", "salford", "bolton", "stockport", "oldham", "rochdale"],
  },
  {
    slug: "west-yorkshire",
    name: "West Yorkshire",
    region: "England",
    prosCount: "312+",
    description:
      "Verified locksmith coverage across Leeds, Bradford, Wakefield, and Kirklees.",
    cities: ["leeds", "bradford", "wakefield", "huddersfield", "halifax"],
  },
  {
    slug: "merseyside",
    name: "Merseyside",
    region: "England",
    prosCount: "198+",
    description:
      "Professional locksmiths serving Liverpool, Wirral, and the wider Merseyside region.",
    cities: ["liverpool", "wirral", "southport", "st-helens"],
  },
  {
    slug: "south-yorkshire",
    name: "South Yorkshire",
    region: "England",
    prosCount: "187+",
    description:
      "Trusted locksmiths in Sheffield, Doncaster, Rotherham, and Barnsley.",
    cities: ["sheffield", "doncaster", "rotherham", "barnsley"],
  },
  {
    slug: "kent",
    name: "Kent",
    region: "England",
    prosCount: "234+",
    description:
      "Local locksmiths serving Maidstone, Canterbury, Dover, and throughout the Garden of England.",
    cities: ["maidstone", "canterbury", "dover", "ashford", "margate"],
  },
  {
    slug: "essex",
    name: "Essex",
    region: "England",
    prosCount: "278+",
    description:
      "Emergency and scheduled locksmith services across Chelmsford, Colchester, Southend, and Essex.",
    cities: ["chelmsford", "colchester", "southend-on-sea", "basildon", "harlow"],
  },
];

// Cities data - comprehensive list
export const cities: City[] = [
  // West Midlands
  {
    slug: "birmingham",
    name: "Birmingham",
    countySlug: "west-midlands",
    prosCount: "128+ locksmiths",
    description:
      "From the Jewellery Quarter to Edgbaston, find verified locksmiths serving all Birmingham postcodes.",
    postcodes: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9"],
  },
  {
    slug: "coventry",
    name: "Coventry",
    countySlug: "west-midlands",
    prosCount: "64+ locksmiths",
    description:
      "Professional locksmith services throughout Coventry city centre and surrounding areas.",
    postcodes: ["CV1", "CV2", "CV3", "CV4", "CV5", "CV6"],
  },
  {
    slug: "wolverhampton",
    name: "Wolverhampton",
    countySlug: "west-midlands",
    prosCount: "52+ locksmiths",
    description:
      "Emergency and scheduled locksmith services in Wolverhampton and the Black Country.",
    postcodes: ["WV1", "WV2", "WV3", "WV4", "WV10"],
  },
  {
    slug: "solihull",
    name: "Solihull",
    countySlug: "west-midlands",
    prosCount: "38+ locksmiths",
    description:
      "Residential and commercial locksmith services in Solihull and surrounding areas.",
    postcodes: ["B90", "B91", "B92", "B93", "B94"],
  },
  {
    slug: "dudley",
    name: "Dudley",
    countySlug: "west-midlands",
    prosCount: "34+ locksmiths",
    description:
      "Local locksmiths serving Dudley, Stourbridge, and the surrounding Black Country areas.",
    postcodes: ["DY1", "DY2", "DY3", "DY5"],
  },
  {
    slug: "walsall",
    name: "Walsall",
    countySlug: "west-midlands",
    prosCount: "29+ locksmiths",
    description:
      "Verified locksmiths in Walsall town centre and neighbouring areas.",
    postcodes: ["WS1", "WS2", "WS3", "WS4", "WS5"],
  },

  // Greater London
  {
    slug: "london",
    name: "London",
    countySlug: "greater-london",
    prosCount: "890+ locksmiths",
    description:
      "London's most comprehensive locksmith directory covering all zones and boroughs.",
    postcodes: ["EC", "WC", "W", "SW", "SE", "E", "N", "NW"],
  },
  {
    slug: "westminster",
    name: "Westminster",
    countySlug: "greater-london",
    prosCount: "156+ locksmiths",
    description:
      "24/7 locksmith services in Westminster, Mayfair, and Central London.",
    postcodes: ["W1", "WC1", "WC2", "SW1"],
  },
  {
    slug: "camden",
    name: "Camden",
    countySlug: "greater-london",
    prosCount: "89+ locksmiths",
    description:
      "Professional locksmiths serving Camden Town, Hampstead, and Kings Cross.",
    postcodes: ["NW1", "NW3", "NW5", "WC1"],
  },
  {
    slug: "islington",
    name: "Islington",
    countySlug: "greater-london",
    prosCount: "72+ locksmiths",
    description:
      "Local locksmith services throughout Islington, Highbury, and Finsbury.",
    postcodes: ["N1", "N5", "N7", "EC1"],
  },
  {
    slug: "hackney",
    name: "Hackney",
    countySlug: "greater-london",
    prosCount: "65+ locksmiths",
    description:
      "Emergency and residential locksmiths in Hackney, Shoreditch, and Dalston.",
    postcodes: ["E5", "E8", "E9", "N16"],
  },
  {
    slug: "tower-hamlets",
    name: "Tower Hamlets",
    countySlug: "greater-london",
    prosCount: "78+ locksmiths",
    description:
      "Locksmiths serving Canary Wharf, Bethnal Green, and Tower Hamlets borough.",
    postcodes: ["E1", "E2", "E3", "E14"],
  },

  // Greater Manchester
  {
    slug: "manchester",
    name: "Manchester",
    countySlug: "greater-manchester",
    prosCount: "156+ locksmiths",
    description:
      "Emergency lockouts, uPVC repairs, and security upgrades across Manchester city centre and suburbs.",
    postcodes: ["M1", "M2", "M3", "M4", "M5", "M11", "M12", "M13", "M14", "M15"],
  },
  {
    slug: "salford",
    name: "Salford",
    countySlug: "greater-manchester",
    prosCount: "67+ locksmiths",
    description:
      "Professional locksmith services in Salford Quays, MediaCity, and surrounding areas.",
    postcodes: ["M3", "M5", "M6", "M7", "M50"],
  },
  {
    slug: "bolton",
    name: "Bolton",
    countySlug: "greater-manchester",
    prosCount: "54+ locksmiths",
    description:
      "Local locksmiths serving Bolton town centre and neighbouring communities.",
    postcodes: ["BL1", "BL2", "BL3", "BL4", "BL5", "BL6", "BL7"],
  },
  {
    slug: "stockport",
    name: "Stockport",
    countySlug: "greater-manchester",
    prosCount: "48+ locksmiths",
    description:
      "Residential and commercial locksmith services throughout Stockport.",
    postcodes: ["SK1", "SK2", "SK3", "SK4", "SK5", "SK6", "SK7", "SK8"],
  },
  {
    slug: "oldham",
    name: "Oldham",
    countySlug: "greater-manchester",
    prosCount: "38+ locksmiths",
    description:
      "24/7 emergency locksmiths in Oldham and Saddleworth areas.",
    postcodes: ["OL1", "OL2", "OL3", "OL4", "OL8", "OL9"],
  },
  {
    slug: "rochdale",
    name: "Rochdale",
    countySlug: "greater-manchester",
    prosCount: "32+ locksmiths",
    description:
      "Trusted locksmiths serving Rochdale, Heywood, and Middleton.",
    postcodes: ["OL10", "OL11", "OL12", "OL16"],
  },

  // West Yorkshire
  {
    slug: "leeds",
    name: "Leeds",
    countySlug: "west-yorkshire",
    prosCount: "98+ locksmiths",
    description:
      "Residential and commercial locksmith services throughout Leeds and surrounding areas.",
    postcodes: ["LS1", "LS2", "LS3", "LS4", "LS5", "LS6", "LS7", "LS8", "LS9", "LS10"],
  },
  {
    slug: "bradford",
    name: "Bradford",
    countySlug: "west-yorkshire",
    prosCount: "72+ locksmiths",
    description:
      "Professional locksmith services in Bradford city centre and district.",
    postcodes: ["BD1", "BD2", "BD3", "BD4", "BD5", "BD6", "BD7", "BD8", "BD9"],
  },
  {
    slug: "wakefield",
    name: "Wakefield",
    countySlug: "west-yorkshire",
    prosCount: "45+ locksmiths",
    description:
      "Local locksmiths serving Wakefield and the Five Towns area.",
    postcodes: ["WF1", "WF2", "WF3", "WF4", "WF5"],
  },
  {
    slug: "huddersfield",
    name: "Huddersfield",
    countySlug: "west-yorkshire",
    prosCount: "52+ locksmiths",
    description:
      "Emergency and scheduled locksmith services in Huddersfield and Kirklees.",
    postcodes: ["HD1", "HD2", "HD3", "HD4", "HD5", "HD7", "HD8"],
  },
  {
    slug: "halifax",
    name: "Halifax",
    countySlug: "west-yorkshire",
    prosCount: "34+ locksmiths",
    description:
      "Reliable locksmiths serving Halifax and Calderdale district.",
    postcodes: ["HX1", "HX2", "HX3", "HX4", "HX5", "HX6", "HX7"],
  },

  // Merseyside
  {
    slug: "liverpool",
    name: "Liverpool",
    countySlug: "merseyside",
    prosCount: "112+ locksmiths",
    description:
      "Comprehensive locksmith services across Liverpool city and Merseyside region.",
    postcodes: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9"],
  },
  {
    slug: "wirral",
    name: "Wirral",
    countySlug: "merseyside",
    prosCount: "45+ locksmiths",
    description:
      "Local locksmiths serving Birkenhead, Wallasey, and the Wirral Peninsula.",
    postcodes: ["CH41", "CH42", "CH43", "CH44", "CH45", "CH46", "CH47", "CH48", "CH49"],
  },
  {
    slug: "southport",
    name: "Southport",
    countySlug: "merseyside",
    prosCount: "24+ locksmiths",
    description:
      "Professional locksmith services in Southport and Sefton coastal areas.",
    postcodes: ["PR8", "PR9"],
  },
  {
    slug: "st-helens",
    name: "St Helens",
    countySlug: "merseyside",
    prosCount: "28+ locksmiths",
    description:
      "Trusted locksmiths serving St Helens town and surrounding communities.",
    postcodes: ["WA9", "WA10", "WA11"],
  },

  // South Yorkshire
  {
    slug: "sheffield",
    name: "Sheffield",
    countySlug: "south-yorkshire",
    prosCount: "89+ locksmiths",
    description:
      "Steel City's directory of verified locksmiths for residential and commercial needs.",
    postcodes: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "S11"],
  },
  {
    slug: "doncaster",
    name: "Doncaster",
    countySlug: "south-yorkshire",
    prosCount: "42+ locksmiths",
    description:
      "Local locksmith services throughout Doncaster and surrounding areas.",
    postcodes: ["DN1", "DN2", "DN3", "DN4", "DN5", "DN6", "DN7", "DN8"],
  },
  {
    slug: "rotherham",
    name: "Rotherham",
    countySlug: "south-yorkshire",
    prosCount: "34+ locksmiths",
    description:
      "Emergency and scheduled locksmith services in Rotherham district.",
    postcodes: ["S60", "S61", "S62", "S63", "S64", "S65", "S66"],
  },
  {
    slug: "barnsley",
    name: "Barnsley",
    countySlug: "south-yorkshire",
    prosCount: "28+ locksmiths",
    description:
      "Professional locksmiths serving Barnsley town and surrounding villages.",
    postcodes: ["S70", "S71", "S72", "S73", "S74", "S75"],
  },

  // Kent
  {
    slug: "maidstone",
    name: "Maidstone",
    countySlug: "kent",
    prosCount: "52+ locksmiths",
    description:
      "Kent's county town locksmith services for homes and businesses.",
    postcodes: ["ME14", "ME15", "ME16", "ME17"],
  },
  {
    slug: "canterbury",
    name: "Canterbury",
    countySlug: "kent",
    prosCount: "38+ locksmiths",
    description:
      "Historic city locksmith services including cathedral quarter and suburbs.",
    postcodes: ["CT1", "CT2", "CT3", "CT4"],
  },
  {
    slug: "dover",
    name: "Dover",
    countySlug: "kent",
    prosCount: "28+ locksmiths",
    description:
      "Port town locksmiths serving Dover, Deal, and the White Cliffs area.",
    postcodes: ["CT15", "CT16", "CT17"],
  },
  {
    slug: "ashford",
    name: "Ashford",
    countySlug: "kent",
    prosCount: "35+ locksmiths",
    description:
      "Growing town locksmith services for new builds and established properties.",
    postcodes: ["TN23", "TN24", "TN25", "TN26"],
  },
  {
    slug: "margate",
    name: "Margate",
    countySlug: "kent",
    prosCount: "24+ locksmiths",
    description:
      "Coastal town locksmith services for Thanet district.",
    postcodes: ["CT9", "CT10", "CT11", "CT12"],
  },

  // Essex
  {
    slug: "chelmsford",
    name: "Chelmsford",
    countySlug: "essex",
    prosCount: "58+ locksmiths",
    description:
      "Essex's city centre and surrounding area locksmith services.",
    postcodes: ["CM1", "CM2", "CM3"],
  },
  {
    slug: "colchester",
    name: "Colchester",
    countySlug: "essex",
    prosCount: "48+ locksmiths",
    description:
      "Britain's oldest recorded town with modern locksmith services.",
    postcodes: ["CO1", "CO2", "CO3", "CO4", "CO5", "CO6", "CO7"],
  },
  {
    slug: "southend-on-sea",
    name: "Southend-on-Sea",
    countySlug: "essex",
    prosCount: "65+ locksmiths",
    description:
      "Seaside city locksmith services for homes and holiday properties.",
    postcodes: ["SS0", "SS1", "SS2", "SS3", "SS9"],
  },
  {
    slug: "basildon",
    name: "Basildon",
    countySlug: "essex",
    prosCount: "42+ locksmiths",
    description:
      "New town locksmith services including Basildon and Wickford areas.",
    postcodes: ["SS13", "SS14", "SS15", "SS16"],
  },
  {
    slug: "harlow",
    name: "Harlow",
    countySlug: "essex",
    prosCount: "32+ locksmiths",
    description:
      "Garden city locksmith services for residential and commercial properties.",
    postcodes: ["CM17", "CM18", "CM19", "CM20"],
  },
];

/**
 * Get county by slug
 */
export function getCountyBySlug(slug: string): County | undefined {
  return counties.find((county) => county.slug === slug);
}

/**
 * Get city by slug
 */
export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

/**
 * Get city by slug within a specific county
 */
export function getCityInCounty(countySlug: string, citySlug: string): City | undefined {
  return cities.find((city) => city.slug === citySlug && city.countySlug === countySlug);
}

/**
 * Get cities by county
 */
export function getCitiesByCounty(countySlug: string): City[] {
  return cities.filter((city) => city.countySlug === countySlug);
}

/**
 * Get all counties
 */
export function getAllCounties(): County[] {
  return counties;
}

/**
 * Get all cities
 */
export function getAllCities(): City[] {
  return cities;
}

/**
 * Get location cards for homepage (format for Card component)
 */
export function getHomepageLocations(): LocationCard[] {
  return cities.slice(0, 4).map((city, index) => ({
    number: (index + 1).toString().padStart(2, "0"),
    title: city.name,
    prosCount: city.prosCount.toUpperCase(),
    description: city.description,
    linkUrl: `/locations/${city.countySlug}/${city.slug}`,
    linkText: "View locksmiths",
  }));
}

/**
 * Get all counties as location cards
 */
export function getCountyCards(): LocationCard[] {
  return counties.map((county, index) => ({
    number: (index + 1).toString().padStart(2, "0"),
    title: county.name,
    prosCount: county.prosCount + " PROS",
    description: county.description,
    linkUrl: `/locations/${county.slug}`,
    linkText: "View locksmiths",
  }));
}

/**
 * Generate all county/city/service path combinations
 */
export function getAllLocationServicePaths(): { county: string; city: string; service: string }[] {
  const services = ["emergency-lockouts", "upvc-repairs", "lock-changes", "burglary-repairs"];
  const paths: { county: string; city: string; service: string }[] = [];

  for (const city of cities) {
    for (const service of services) {
      paths.push({
        county: city.countySlug,
        city: city.slug,
        service: service,
      });
    }
  }

  return paths;
}
