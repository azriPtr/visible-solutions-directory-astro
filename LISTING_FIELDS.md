# Listing Content Type Fields for Backend/Strapi

## Basic Information
- title (Text, Required)
- slug (UID, Required, Auto-generated from title)
- phone (Text, Required)
- responseTime (Text, Optional) - e.g., "20 mins"
- description (Rich Text/Markdown, Required) - Main "About" section content

## Ratings & Reviews
- rating (Decimal, Required, Min: 0, Max: 5) - e.g., 4.9
- reviewCount (Number, Required) - Total directory reviews
- googleRating (Decimal, Optional, Min: 0, Max: 5) - Google rating if available

## Status & Availability
- status (Enumeration, Required)
  - Options: "Open Now", "Closed", "24 Hours"
- openingHours (Component Repeatable, Optional)
  - day (Text) - e.g., "Mon - Fri"
  - hours (Text) - e.g., "24 Hours"

## Verification Badges (Boolean fields)
- isVerified (Boolean, Default: true) - Directory Verified badge
- isDbsChecked (Boolean, Default: false) - DBS Checked badge
- isEmergency (Boolean, Default: false) - 24/7 Emergency badge
- isIdentityVerified (Boolean, Default: false) - Identity Verified checkmark
- isInsuranceChecked (Boolean, Default: false) - Insurance Checked checkmark

## At a Glance Section
- established (Text, Optional) - e.g., "2014 (10 Years Active)"
- focus (Text, Optional) - e.g., "Residential & uPVC"
- insurance (Text, Optional) - e.g., "Insured up to £5m"
- callOutFee (Text, Optional) - e.g., "No Call Out Fee"

## Services Offered (Component Repeatable)
- servicesOffered (Component Repeatable, Optional)
  - icon (Text) - SVG path string, e.g., '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'
  - title (Text) - e.g., "Emergency Entry"
  - description (Text) - e.g., "Lockouts & Lost Keys"

## Service Area
- serviceAreaRadius (Text, Optional) - e.g., "15 miles of Birmingham"
- serviceAreas (JSON Array or Repeatable Text, Optional) - Array of location names
- serviceAreaMap (Media/Image, Optional) - Map image showing coverage area
- serviceAreaMapAlt (Text, Optional) - Alt text for map image

## Breadcrumbs (Component Repeatable)
- breadcrumbs (Component Repeatable, Required)
  - label (Text) - e.g., "Home", "West Midlands", "Birmingham"
  - href (Text, Optional) - URL path, null for current page

## Directory Reviews (Component Repeatable)
- directoryReviews (Component Repeatable, Optional)
  - author (Text) - Reviewer name
  - initials (Text) - e.g., "SJ"
  - date (Text) - e.g., "Edgbaston • 1 month ago"
  - rating (Number, Min: 1, Max: 5)
  - comment (Text/Long Text) - Review text
  - isVerified (Boolean, Default: true) - Verified Customer badge

## External Reviews (Component Repeatable)
- externalReviews (Component Repeatable, Optional)
  - platform (Enumeration) - Options: "Google", "Trustpilot"
  - rating (Decimal, Min: 0, Max: 5)
  - reviewCount (Number) - Number of reviews on that platform

---

## API Response Format

The backend should return data in this structure:

```json
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "Brum City Security",
      "slug": "brum-city-security",
      "phone": "0121 000 0000",
      "responseTime": "20 mins",
      "description": "Based in Edgbaston...",
      "rating": 4.9,
      "reviewCount": 12,
      "googleRating": 4.8,
      "status": "Open Now",
      "isVerified": true,
      "isDbsChecked": true,
      "isEmergency": true,
      "isIdentityVerified": true,
      "isInsuranceChecked": true,
      "established": "2014 (10 Years Active)",
      "focus": "Residential & uPVC",
      "insurance": "Insured up to £5m",
      "callOutFee": "No Call Out Fee",
      "serviceAreaRadius": "15 miles of Birmingham",
      "serviceAreas": ["Birmingham City Centre", "Edgbaston", "Harborne"],
      "serviceAreaMap": {
        "data": {
          "attributes": {
            "url": "/uploads/map-image.png"
          }
        }
      },
      "serviceAreaMapAlt": "Service area map",
      "breadcrumbs": [
        { "label": "Home", "href": "/" },
        { "label": "West Midlands", "href": "/locations/west-midlands" },
        { "label": "Birmingham", "href": "/locations/birmingham" },
        { "label": "Brum City Security", "href": null }
      ],
      "openingHours": [
        { "day": "Mon - Fri", "hours": "24 Hours" },
        { "day": "Saturday", "hours": "24 Hours" },
        { "day": "Sunday", "hours": "Emergency Only" }
      ],
      "servicesOffered": [
        {
          "icon": "<path d='M13 2L3 14h9l-1 8 10-12h-9l1-8z'/>",
          "title": "Emergency Entry",
          "description": "Lockouts & Lost Keys"
        }
      ],
      "directoryReviews": [
        {
          "author": "Sarah Jenkins",
          "initials": "SJ",
          "date": "Edgbaston • 1 month ago",
          "rating": 5,
          "comment": "Arrived within 30 minutes...",
          "isVerified": true
        }
      ],
      "externalReviews": [
        {
          "platform": "Google",
          "rating": 4.8,
          "reviewCount": 89
        }
      ]
    }
  }
}
```

## Required API Endpoints

- `GET /api/listings` - Get all listings (for listing pages/search)
- `GET /api/listings/:slug` - Get single listing by slug

**Note:** Make sure to enable population for all relations and components in the API response!
