# 🧠 Astro Schema Writer Guide

## Purpose

This document defines a clean, scalable, non-hardcoded schema generation system for this Astro directory project.

Goals:
- No hardcoded JSON-LD in pages
- All schema generated via functions
- All schema driven by page data
- Type-safe, reusable, composable
- Easy to extend for new page types
- SEO-first architecture

---

## Core Principles

Never do:
- Hardcode JSON-LD inside .astro files
- Copy-paste schema blocks per page
- Mix schema logic with UI rendering
- Duplicate schema shapes

Always do:
- Use builder functions
- One schema type = one function
- Pass page data in
- Return JSON-LD object
- Centralize output renderer

---

## Folder Structure

src/
  lib/
    schema/
      index.ts
      renderSchema.ts
      types.ts
      builders/
        buildLocksmithSchema.ts
        buildServiceSchema.ts
        buildLocationSchema.ts
        buildArticleSchema.ts

---

## Architecture Overview

Each page:
1. Loads its data (listing, service, location, etc)
2. Calls a schema builder function
3. Passes the result into a renderer
4. Renderer outputs JSON-LD script tag

---

## Example Flow

In page frontmatter:
- Import buildLocksmithSchema
- Import renderSchema
- const schema = buildLocksmithSchema(listing)

In template:
- Call renderSchema(schema)

---

## Schema Renderer

File: renderSchema.ts

Purpose:
- Accepts object or array of objects
- Stringifies safely
- Outputs <script type="application/ld+json">

---

## Builder Function Rules

Each builder:
- Lives in builders/
- Name: buildXSchema
- Accepts ONE data object
- Returns ONE schema object
- No side effects
- No DOM access
- No string building
- Only plain JS objects

---

## Example: buildLocksmithSchema

Input:
- listing data

Output:
- JSON-LD object with:
- @context: https://schema.org
- @type: Locksmith
- name, url, address, rating, etc

---

## Never Do

const schema = {
  "@type": "Locksmith",
  "name": "Hardcoded Name"
}

Always Do

const schema = {
  "@type": "Locksmith",
  "name": listing.title
}

---

## Types System

File: types.ts

Define:
- BaseSchema
- LocksmithSchema
- ServiceSchema
- LocationSchema
- ArticleSchema

So all builders are type-safe.

---

## Schema Types We Will Support

Business Pages:
- Locksmith (LocalBusiness)

Location Pages:
- Place
- AdministrativeArea
- ServiceArea

Service Pages:
- Service
- Offer

Content Pages:
- Article
- BlogPosting
- FAQPage

---

## Multi Schema Pages

Some pages can output:
- MainEntity schema
- Breadcrumb schema
- FAQ schema

Renderer must support array input.

---

## Breadcrumb Schema

Each page should generate:
- BreadcrumbList schema
- Based on its route hierarchy

---

## Rules For Astro Integration

- Schema generation happens in frontmatter
- Rendering happens in template
- No schema logic in components

---

## Future Proofing

This system must support:
- Strapi
- Any CMS
- API data
- Static markdown data

---

## Golden Rule

UI can change.
Schema system must stay stable.

---

## Definition of Done

- No page contains hardcoded JSON-LD
- All schema comes from builders
- All builders are reusable
- All schema output is centralized
