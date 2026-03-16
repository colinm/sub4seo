# SEO Implementation — Suburban Construction Website Rebuild

A complete reference of every SEO enhancement implemented in the new Next.js site.

---

## Table of Contents

1. [Per-Page Metadata — All 60+ Pages](#1-per-page-metadata)
2. [Metadata Generation System](#2-metadata-generation-system)
3. [Canonical URLs](#3-canonical-urls)
4. [Open Graph (Social Sharing)](#4-open-graph)
5. [Twitter Cards](#5-twitter-cards)
6. [Structured Data / JSON-LD Schemas](#6-structured-data--json-ld-schemas)
7. [XML Sitemap](#7-xml-sitemap)
8. [robots.txt](#8-robotstxt)
9. [301 Redirects — Legacy URL Preservation](#9-301-redirects)
10. [City / Service Area Pages](#10-city--service-area-pages)
11. [Image Optimization](#11-image-optimization)
12. [Performance & Core Web Vitals](#12-performance--core-web-vitals)
13. [Global Site Settings](#13-global-site-settings)
14. [Analytics](#14-analytics)

---

## 1. Per-Page Metadata

Every page has a unique title, meta description, and keyword set defined in `lib/seo/pageSeoData.ts`. No two pages share the same title or description.

### Homepage

| Field | Value |
|-------|-------|
| Title | Replacement Windows, Siding & Doors \| Quad Cities General Contractor |
| Description | Suburban Construction — the Quad Cities' trusted home improvement contractor since 1985. Replacement windows, siding, doors, gutters, and patio enclosures. Serving Davenport, Bettendorf, Moline, Rock Island, and surrounding 90-mile radius. |
| Keywords | replacement windows Quad Cities, siding contractor Davenport IA, doors Bettendorf Iowa, general contractor Quad Cities, triple pane windows Davenport, vinyl siding installation, entry doors Rock Island IL, gutter cap Moline IL, home improvement Quad Cities |
| OG Image | /main.jpg |

---

### Windows — 14 Pages

#### /windows/window-styles
| Field | Value |
|-------|-------|
| Title | Window Styles — Replacement Windows in the Quad Cities |
| Description | Browse our complete line of replacement window styles: single hung, double hung, slider, bay & bow, casement, garden, basement, and egress windows. Professional installation in Davenport, Bettendorf, Moline, Rock Island. |
| Keywords | window styles Quad Cities, replacement window types, double hung windows Davenport, casement windows Iowa, window installation Bettendorf |

#### /windows/double-hung
| Field | Value |
|-------|-------|
| Title | Double Hung Replacement Windows \| Suburban Construction |
| Description | Double hung windows feature two operable sashes for easy cleaning and great ventilation. Triple pane krypton glass available. Expert installation across the Quad Cities. |
| Keywords | double hung windows Quad Cities, double hung replacement windows, energy efficient windows Davenport |

#### /windows/single-hung
| Field | Value |
|-------|-------|
| Title | Single Hung Replacement Windows \| Suburban Construction |
| Description | Single hung windows offer classic style with a fixed upper sash and operable lower sash. Energy-efficient, triple pane options available. Serving the Quad Cities area. |
| Keywords | single hung windows, single hung replacement windows Quad Cities, window installation Davenport IA |

#### /windows/slider
| Field | Value |
|-------|-------|
| Title | Slider & Glider Replacement Windows \| Suburban Construction |
| Description | Slider and glider windows provide wide views and easy operation. Perfect for wider openings. Available in triple pane with Argon or Krypton gas fill. |
| Keywords | slider windows, glider windows Quad Cities, sliding windows Davenport IA |

#### /windows/bay-and-bow
| Field | Value |
|-------|-------|
| Title | Bay & Bow Replacement Windows \| Suburban Construction |
| Description | Bay and bow windows add space, light, and curb appeal to any room. Custom-built and professionally installed by Suburban Construction in the Quad Cities. |
| Keywords | bay windows Quad Cities, bow windows Davenport, bay and bow window installation |

#### /windows/casement
| Field | Value |
|-------|-------|
| Title | Casement & Awning Windows \| Suburban Construction |
| Description | Casement and awning windows provide excellent ventilation and a tight seal when closed. Energy Star certified options available in the Quad Cities. |
| Keywords | casement windows Davenport, awning windows Iowa, casement window installation Quad Cities |

#### /windows/garden-specialty
| Field | Value |
|-------|-------|
| Title | Garden & Specialty Windows \| Suburban Construction |
| Description | Garden windows bring the outdoors in. Perfect for kitchens and sunrooms. Specialty window shapes available for unique architectural needs. |
| Keywords | garden windows Iowa, specialty windows Quad Cities, garden window installation |

#### /windows/basement
| Field | Value |
|-------|-------|
| Title | Basement Replacement Windows \| Suburban Construction |
| Description | Improve natural light and ventilation in your basement with quality replacement windows. Properly sealed for moisture protection. Serving the Quad Cities. |
| Keywords | basement windows Quad Cities, basement window replacement Davenport, basement windows Iowa |

#### /windows/egress
| Field | Value |
|-------|-------|
| Title | Egress Windows \| Safety & Code Compliance \| Suburban Construction |
| Description | Egress windows provide emergency exit and meet building codes for basement bedrooms. Professionally installed across the Quad Cities area. |
| Keywords | egress windows Quad Cities, egress window installation Iowa, basement egress Davenport |

#### /windows/krypton
| Field | Value |
|-------|-------|
| Title | Triple Pane Krypton Glass Windows \| Maximum Energy Efficiency |
| Description | Suburban Construction specializes in triple pane krypton glass windows — the most energy-efficient option available. Lower your heating and cooling bills in the Quad Cities. |
| Keywords | triple pane windows Quad Cities, krypton gas windows Davenport, energy efficient windows Iowa, triple pane krypton glass |

#### /windows/storm
| Field | Value |
|-------|-------|
| Title | Storm Windows \| Extra Protection & Energy Savings |
| Description | Storm windows add an extra layer of insulation and weather protection to existing windows. Affordable energy upgrade for Quad Cities homeowners. |
| Keywords | storm windows Quad Cities, storm windows Iowa, storm window installation Davenport |

#### /windows/window-options
| Field | Value |
|-------|-------|
| Title | Window Options & Upgrades \| Suburban Construction |
| Description | Explore window options including grids, hardware finishes, low-e coatings, Argon/Krypton gas fills, and specialty glass. Customize your replacement windows. |
| Keywords | window options Quad Cities, window upgrades Iowa, window grids hardware |

#### /windows/window-installation
| Field | Value |
|-------|-------|
| Title | Window Installation Process \| Suburban Construction |
| Description | Learn about Suburban Construction's expert window installation process. Lifetime workmanship guarantee on all window installations across the Quad Cities. |
| Keywords | window installation Davenport IA, window installation process, window replacement Quad Cities |

#### /windows/replacement-windows-faq
| Field | Value |
|-------|-------|
| Title | Replacement Windows FAQ \| Common Questions Answered |
| Description | Frequently asked questions about replacement windows: costs, installation time, energy savings, warranties, and more. Serving the Quad Cities since 1985. |
| Keywords | replacement windows FAQ, window replacement questions Quad Cities, how long does window installation take |

---

### Siding — 8 Pages

#### /siding/vinyl-siding
| Field | Value |
|-------|-------|
| Title | Vinyl Siding Installation \| Freedom Series \| Suburban Construction |
| Description | Vinyl siding is the most popular choice for Quad Cities homeowners. Suburban Construction installs Freedom Series vinyl siding — durable, beautiful, and virtually maintenance-free. |
| Keywords | vinyl siding Quad Cities, vinyl siding Davenport IA, vinyl siding installation Iowa, Freedom Series siding |

#### /siding/steel-siding
| Field | Value |
|-------|-------|
| Title | Steel Siding Installation \| Durable & Low Maintenance \| Quad Cities |
| Description | Steel siding offers unmatched durability and fire resistance for Quad Cities homes. Available in a wide range of colors and profiles. Professional installation by Suburban Construction. |
| Keywords | steel siding Quad Cities, steel siding Davenport IA, steel siding installation Iowa |

#### /siding/composite-siding
| Field | Value |
|-------|-------|
| Title | Composite Siding \| Cedar Look Without the Maintenance \| Quad Cities |
| Description | Composite siding gives your home the beauty of real wood without the maintenance. Ideal for Quad Cities homes. Expert installation by Suburban Construction. |
| Keywords | composite siding Quad Cities, composite siding Davenport, wood look siding Iowa |

#### /siding/insulated-siding
| Field | Value |
|-------|-------|
| Title | Insulated Siding \| Extra Energy Efficiency \| Suburban Construction |
| Description | Insulated vinyl siding reduces energy costs while improving the look of your home. Extra foam backing provides superior insulation for Quad Cities homes. |
| Keywords | insulated siding Quad Cities, insulated vinyl siding Iowa, energy efficient siding Davenport |

#### /siding/siding-options
| Field | Value |
|-------|-------|
| Title | Siding Options & Colors \| Suburban Construction |
| Description | Explore siding color options, profiles, trim details, and accessories. Suburban Construction offers a wide selection of styles to match any Quad Cities home. |
| Keywords | siding options Iowa, siding colors Quad Cities, siding styles Davenport |

#### /siding/siding-installation
| Field | Value |
|-------|-------|
| Title | Siding Installation Process \| Suburban Construction |
| Description | Professional siding installation with attention to detail and a lifetime workmanship guarantee. Serving all of the Quad Cities area since 1985. |
| Keywords | siding installation Davenport IA, siding installation process, siding contractor Quad Cities |

#### /siding/vinyl-siding-faq
| Field | Value |
|-------|-------|
| Title | Vinyl Siding FAQ \| Suburban Construction |
| Description | Answers to common questions about vinyl siding: maintenance, durability, cost, installation, and more. Suburban Construction has been siding Quad Cities homes since 1985. |
| Keywords | vinyl siding FAQ, vinyl siding questions, siding FAQ Quad Cities |

#### /siding/insulated-siding-faq
| Field | Value |
|-------|-------|
| Title | Insulated Siding FAQ \| Suburban Construction |
| Description | Frequently asked questions about insulated siding's energy savings, installation, and cost. Learn how insulated siding can lower your heating and cooling bills. |
| Keywords | insulated siding FAQ, insulated siding questions Iowa |

---

### Doors — 5 Pages

#### /doors/door-styles
| Field | Value |
|-------|-------|
| Title | Entry & Storm Door Styles \| Suburban Construction |
| Description | Browse our selection of entry doors and storm doors. Available in a wide range of styles, colors, and glass options. Expert installation across the Quad Cities. |
| Keywords | door styles Quad Cities, entry doors Iowa, storm doors Davenport IA |

#### /doors/entry
| Field | Value |
|-------|-------|
| Title | Entry Door Installation \| Suburban Construction |
| Description | Beautiful, energy-efficient entry doors custom-ordered and professionally installed by Suburban Construction. Serving the Quad Cities area since 1985. |
| Keywords | entry doors Quad Cities, entry door installation Davenport, front doors Iowa |

#### /doors/easy-vent
| Field | Value |
|-------|-------|
| Title | Easy Vent Storm Doors \| Suburban Construction |
| Description | Easy Vent storm doors let in fresh air while keeping bugs and weather out. Available in multiple styles and colors. Installed across the Quad Cities. |
| Keywords | storm doors Quad Cities, easy vent doors Iowa, storm door installation Davenport |

#### /doors/mini-blinds
| Field | Value |
|-------|-------|
| Title | Doors with Built-In Mini Blinds \| Suburban Construction |
| Description | Doors with built-in mini blinds offer the convenience of light control without the hassle of traditional blinds. No dusting, no cords. |
| Keywords | door mini blinds, built-in blinds door Quad Cities, doors with blinds Iowa |

#### /doors/door-app
| Field | Value |
|-------|-------|
| Title | Door Catalog & Applications \| Suburban Construction |
| Description | Explore our full door catalog. Find the perfect entry door, storm door, or patio door for your Quad Cities home. |
| Keywords | door catalog Quad Cities, door options Iowa |

---

### Gutters — 5 Pages

#### /gutters/seamless-gutters
| Field | Value |
|-------|-------|
| Title | Seamless Gutters \| Custom Fabricated On-Site \| Quad Cities |
| Description | Seamless gutters are custom fabricated on-site for a perfect fit with no leaky seams. Suburban Construction installs seamless gutters throughout the Quad Cities. |
| Keywords | seamless gutters Quad Cities, seamless gutters Davenport IA, gutter installation Iowa |

#### /gutters/gutter-cap
| Field | Value |
|-------|-------|
| Title | Gutter Cap System \| Never Clean Your Gutters Again \| Quad Cities |
| Description | The Gutter Cap system uses surface tension to guide water into gutters while leaves and debris fall to the ground. Suburban Construction is your local Gutter Cap installer. |
| Keywords | Gutter Cap Quad Cities, gutter guard Davenport, gutter protection system Iowa, never clean gutters |

#### /gutters/shurflo
| Field | Value |
|-------|-------|
| Title | Shur Flow Gutter System \| Suburban Construction |
| Description | The Shur Flow gutter system keeps gutters clear of leaves and debris year-round. No more climbing ladders to clean gutters. Professional installation in the Quad Cities. |
| Keywords | Shur Flow gutters Quad Cities, gutter protection Iowa, gutter guard Davenport IA |

#### /gutters/gutter-installation
| Field | Value |
|-------|-------|
| Title | Gutter Installation \| Suburban Construction |
| Description | Learn about Suburban Construction's gutter installation process. Proper drainage protects your home's foundation, siding, and landscaping. |
| Keywords | gutter installation Davenport IA, gutter installer Quad Cities, gutter installation process |

#### /gutters/gutter-cap-faq
| Field | Value |
|-------|-------|
| Title | Gutter Cap FAQ \| Suburban Construction |
| Description | Frequently asked questions about the Gutter Cap system. Learn how it works, how it compares to other gutter guards, and what installation involves. |
| Keywords | gutter cap FAQ, gutter guard questions Iowa, gutter protection FAQ |

---

### Patio — 6 Pages

#### /patio
| Field | Value |
|-------|-------|
| Title | Patio Enclosures & Awnings \| Suburban Construction |
| Description | Transform your outdoor living space with a custom patio enclosure or awning from Suburban Construction. Serving the Quad Cities area since 1985. |
| Keywords | patio enclosures Quad Cities, patio awnings Iowa, sunrooms Davenport IA |

#### /patio/patio-awning
| Field | Value |
|-------|-------|
| Title | Patio Awnings \| Shade & Style \| Suburban Construction |
| Description | Patio awnings provide shade and protection while enhancing your outdoor living area. Available in retractable and fixed styles. Installed throughout the Quad Cities. |
| Keywords | patio awnings Quad Cities, awning installation Iowa, retractable awnings Davenport |

#### /patio/swing-and-clean
| Field | Value |
|-------|-------|
| Title | Swing & Clean Windows for Porches \| Suburban Construction |
| Description | Swing and clean windows are perfect for porch enclosures — they tilt in for easy cleaning. Available in the Quad Cities from Suburban Construction. |
| Keywords | swing and clean windows Iowa, porch windows Quad Cities |

#### /patio/solar-shades
| Field | Value |
|-------|-------|
| Title | Solar Shades for Patios & Porches \| Suburban Construction |
| Description | Solar shades block UV rays and reduce heat gain on your patio or porch while maintaining your view. Available from Suburban Construction. |
| Keywords | solar shades Quad Cities, porch solar shades Iowa, UV protection shades Davenport |

#### /patio/canopies
| Field | Value |
|-------|-------|
| Title | Canopies \| Outdoor Shade Solutions \| Suburban Construction |
| Description | Custom canopies for your patio, deck, or outdoor space. Professional installation throughout the Quad Cities by Suburban Construction. |
| Keywords | canopies Quad Cities, patio canopy Iowa, outdoor canopy Davenport |

#### /patio/awning-care
| Field | Value |
|-------|-------|
| Title | Awning Care & Maintenance \| Suburban Construction |
| Description | Tips and instructions for caring for your awning to maximize its lifespan and keep it looking great year after year. |
| Keywords | awning care Iowa, awning maintenance Quad Cities |

---

### About — 6 Pages

#### /about/our-story
| Field | Value |
|-------|-------|
| Title | Our Company Story \| Suburban Construction Since 1985 |
| Description | Suburban Construction has been serving the Quad Cities area since 1985. Learn about our history, our commitment to quality, and why homeowners keep choosing us. |
| Keywords | Suburban Construction history, home improvement company Davenport IA, Quad Cities contractor since 1985 |

#### /about/meet-the-owners
| Field | Value |
|-------|-------|
| Title | Meet the Owners \| Suburban Construction |
| Description | Meet the team behind Suburban Construction — a family-owned home improvement company serving the Quad Cities with integrity since 1985. |
| Keywords | Suburban Construction owners, family owned contractor Quad Cities |

#### /about/showroom-tour
| Field | Value |
|-------|-------|
| Title | Visit Our Showroom \| Davenport, Iowa \| Suburban Construction |
| Description | Visit the Suburban Construction showroom at 3602 North Harrison, Davenport, Iowa. See our full selection of windows, siding, and doors in person. Open Mon-Fri 7:30AM–4:30PM. |
| Keywords | Suburban Construction showroom, window showroom Davenport IA, home improvement showroom Quad Cities |

#### /about/testimonials
| Field | Value |
|-------|-------|
| Title | Customer Testimonials \| Suburban Construction Reviews |
| Description | Read what Quad Cities homeowners say about Suburban Construction. Over 53 testimonials from satisfied customers in Davenport, Bettendorf, Moline, Rock Island, and beyond. |
| Keywords | Suburban Construction reviews, customer testimonials Davenport IA, home improvement reviews Quad Cities |

#### /about/in-the-news
| Field | Value |
|-------|-------|
| Title | In the News \| Suburban Construction |
| Description | See Suburban Construction featured in local news and publications. Serving the Quad Cities with award-winning home improvement services since 1985. |
| Keywords | Suburban Construction news, home improvement news Quad Cities |

#### /about/referral-program
| Field | Value |
|-------|-------|
| Title | Referral Program \| Suburban Construction |
| Description | Refer a friend to Suburban Construction and earn rewards. Join our referral program and help your neighbors get the best home improvement service in the Quad Cities. |
| Keywords | Suburban Construction referral, home improvement referral program Iowa |

---

### Resources — 11 Pages

#### /resources/faq
| Field | Value |
|-------|-------|
| Title | FAQ \| Home Improvement Questions \| Suburban Construction |
| Description | Find answers to frequently asked questions about replacement windows, siding, doors, gutters, and more. Suburban Construction has served the Quad Cities since 1985. |
| Keywords | home improvement FAQ Quad Cities, window FAQ Iowa, siding FAQ Davenport |

#### /resources/condensation-faq
| Field | Value |
|-------|-------|
| Title | Window Condensation FAQ \| Suburban Construction |
| Description | Learn about window condensation — what causes it, what it means, and how to address it. Expert answers from Suburban Construction. |
| Keywords | window condensation FAQ, condensation on windows Iowa |

#### /resources/convection-faq
| Field | Value |
|-------|-------|
| Title | Window Convection FAQ \| Suburban Construction |
| Description | Understand window convection, how it affects heat loss, and how triple pane windows reduce convection. Technical answers from Suburban Construction. |
| Keywords | window convection FAQ, window heat loss Iowa |

#### /resources/heater-cap-faq
| Field | Value |
|-------|-------|
| Title | Heater Cap FAQ \| Suburban Construction |
| Description | Frequently asked questions about the Heater Cap gutter system — how it prevents ice dams and keeps gutters clear in winter. |
| Keywords | heater cap FAQ, gutter heater Iowa, ice dam prevention Quad Cities |

#### /resources/stain-formula-faq
| Field | Value |
|-------|-------|
| Title | Stain Formulas for Siding & Windows \| Suburban Construction |
| Description | Find the correct stain formulas for matching and touching up your siding or windows. Helpful resource from Suburban Construction. |
| Keywords | siding stain formula Iowa, window stain matching |

#### /resources/glossary
| Field | Value |
|-------|-------|
| Title | Home Improvement Glossary \| Suburban Construction |
| Description | Learn the terminology used in home improvement: windows, siding, doors, gutters, and more. A complete A-Z glossary from Suburban Construction. |
| Keywords | home improvement glossary, window terms definitions, siding terminology Quad Cities |

#### /resources/recommended
| Field | Value |
|-------|-------|
| Title | Recommended Maintenance \| Suburban Construction |
| Description | Keep your windows, siding, doors, and gutters in top condition with these recommended maintenance tips from Suburban Construction. |
| Keywords | window maintenance Iowa, siding maintenance tips, home maintenance Quad Cities |

#### /resources/warranty-information
| Field | Value |
|-------|-------|
| Title | Warranty Information \| Suburban Construction |
| Description | Learn about manufacturer warranties and our lifetime workmanship guarantee. Suburban Construction stands behind every installation. |
| Keywords | window warranty Iowa, siding warranty Quad Cities, lifetime guarantee home improvement |

#### /resources/downloads
| Field | Value |
|-------|-------|
| Title | Downloads \| Product Brochures & PDFs \| Suburban Construction |
| Description | Download product brochures, installation guides, warranty documents, and care instructions from Suburban Construction. |
| Keywords | Suburban Construction downloads, window brochure PDF Iowa |

#### /resources/support
| Field | Value |
|-------|-------|
| Title | Support \| Suburban Construction |
| Description | Need help with your windows, siding, doors, or gutters? Suburban Construction provides excellent after-sale support for all products. |
| Keywords | Suburban Construction support, window repair Quad Cities, home improvement support Iowa |

---

### Other Pages

#### /contact
| Field | Value |
|-------|-------|
| Title | Contact Us \| Free Estimate \| Suburban Construction |
| Description | Contact Suburban Construction for a free home improvement estimate. Call 563-391-4000 or 1-800-717-3066. Serving Davenport, Bettendorf, Moline, Rock Island, and the surrounding Quad Cities. |
| Keywords | contact Suburban Construction, free estimate Quad Cities, home improvement estimate Davenport IA |

#### /service-areas
| Field | Value |
|-------|-------|
| Title | Service Areas \| Quad Cities & Surrounding 90-Mile Radius |
| Description | Suburban Construction serves Davenport, Bettendorf, Moline, Rock Island, East Moline, Sterling, Rock Falls, Muscatine, Clinton, DeWitt, and the surrounding 90-mile radius. |
| Keywords | Suburban Construction service areas, home improvement Quad Cities, window installer near me Iowa Illinois |

---

## 2. Metadata Generation System

All per-page metadata is centralized in `lib/seo/pageSeoData.ts` and generated through a single reusable function in `lib/seo/metadata.ts`.

**`generatePageMetadata()` produces:**
- Full `<title>` tag with site name appended: `"[Page Title] | Suburban Construction"`
- `<meta name="description">`
- `<meta name="keywords">` (comma-joined from keywords array)
- Canonical `<link rel="canonical">`
- Complete Open Graph block (title, description, URL, image 1200×630, locale, type)
- Complete Twitter card block (summary_large_image, title, description, image)

**Applied on every page:**
```typescript
export const metadata: Metadata = generatePageMetadata(pageSeoData['/path'])
```

**Dynamic pages** (city pages) use `generateMetadata()` with route parameters instead.

---

## 3. Canonical URLs

Every page declares a canonical URL to prevent duplicate content penalties.

**Format:** `https://www.suburbanconstruction.com/[path]`

**Implementation:** `alternates.canonical` in Next.js Metadata API — automatically outputs `<link rel="canonical" href="...">` in the HTML `<head>`.

All 60+ static pages and all 10 dynamic city pages have canonical URLs defined.

---

## 4. Open Graph

Open Graph tags control how pages appear when shared on Facebook, LinkedIn, and other social platforms.

**Fields set on every page:**
| Tag | Value |
|-----|-------|
| `og:title` | Page title (without site name suffix) |
| `og:description` | Page meta description |
| `og:url` | Full canonical URL |
| `og:site_name` | Suburban Construction |
| `og:type` | website |
| `og:locale` | en_US |
| `og:image` | Page-specific image (1200×630px) |
| `og:image:width` | 1200 |
| `og:image:height` | 630 |
| `og:image:alt` | Page title |

**OG images vary by page** — product pages use relevant product photos (double-hung.jpg, steel-siding.jpg, composite1.jpg, etc.); most other pages use main.jpg.

---

## 5. Twitter Cards

Twitter card tags control how pages appear when shared on X (Twitter).

**Card type:** `summary_large_image` — shows a large preview image with title and description.

**Fields set on every page:**
| Tag | Value |
|-----|-------|
| `twitter:card` | summary_large_image |
| `twitter:title` | Full title including " \| Suburban Construction" |
| `twitter:description` | Page meta description |
| `twitter:image` | Same image as Open Graph |

---

## 6. Structured Data / JSON-LD Schemas

Structured data helps Google display rich results (star ratings, FAQs, breadcrumbs) directly in search results.

### A. Local Business Schema (Every Page)

**Type:** `HomeAndConstructionBusiness`
**Rendered globally in root layout — appears on every page of the site**

Includes:
- Business name, website, logo, main photo
- Full address: 3602 North Harrison, Davenport, IA 52806
- GPS coordinates: 41.5623, -90.6029
- Phone numbers: 563-391-4000 and 1-800-717-3066
- Business hours: Mon–Fri 7:30 AM – 4:30 PM
- All 10 service area cities
- **Aggregate Rating: 5/5 stars (53 reviews)** — eligible for star display in search results
- Services offered: Replacement Windows, Siding Installation, Door Installation, Gutter Installation, Patio Enclosures & Awnings
- Social profiles: Facebook, Instagram, YouTube

### B. Product Schema (All Product/Service Pages)

**Type:** `Product`
**Applied on:** All window, siding, door, gutter, and patio product pages

Includes per-page:
- Product name and description
- Product image (1200×630px)
- Brand: Suburban Construction
- **Aggregate Rating: 5/5 (53 reviews)** — eligible for star display
- Service area cities
- Availability: InStock

### C. FAQ Schema (All FAQ Pages)

**Type:** `FAQPage`
**Applied on:** `/resources/faq`, `/resources/condensation-faq`, `/resources/convection-faq`, `/resources/heater-cap-faq`, `/resources/stain-formula-faq`, `/windows/replacement-windows-faq`, `/gutters/gutter-cap-faq`, `/siding/vinyl-siding-faq`, `/siding/insulated-siding-faq`

Enables **Google FAQ rich results** — question/answer pairs can appear expanded directly in search results, taking up significantly more SERP real estate.

### D. Breadcrumb Schema (Hierarchical Pages)

**Type:** `BreadcrumbList`
**Applied on:** All product/service pages and city pages

Enables **breadcrumb display in Google search results** (e.g., "suburbanconstruction.com › Windows › Double Hung").

Example structure:
1. Home (/)
2. Windows (/windows/window-styles)
3. Double Hung Windows (/windows/double-hung)

---

## 7. XML Sitemap

**URL:** `https://www.suburbanconstruction.com/sitemap.xml`
**Auto-generated** by Next.js from `app/sitemap.ts`

**Total URLs: 81**
- 71 static pages
- 10 dynamic city pages

**Priority assignments:**
| Priority | Pages |
|----------|-------|
| 1.0 | Homepage |
| 0.9 | /contact, /service-areas |
| 0.8 | Core product pages (window styles, vinyl siding, steel siding, etc.), all city pages |
| 0.7 | Secondary product pages, about pages |
| 0.6 | Option/installation/FAQ pages |
| 0.5 | Door pages |
| 0.4 | Patio pages, general resources |

**Change frequencies:**
- Homepage: weekly
- Most content pages: monthly
- Company/showroom/glossary/warranty: yearly

Submitted to Google Search Console upon launch to accelerate indexing.

---

## 8. robots.txt

**URL:** `https://www.suburbanconstruction.com/robots.txt`
**Auto-generated** from `app/robots.ts`

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /sent
Sitemap: https://www.suburbanconstruction.com/sitemap.xml
```

- All search engine bots are allowed to crawl everything
- API routes excluded (not indexable content)
- Contact form confirmation page `/sent` excluded (no SEO value, avoids duplicate thank-you indexing)
- Sitemap URL declared so all bots can find it automatically

---

## 9. 301 Redirects

The old site used flat URLs (e.g., `/double_hung`). The new site uses a nested category structure (e.g., `/windows/double-hung`). **46 permanent 301 redirects** are configured in `next.config.ts` to preserve all existing search rankings and backlinks from the old site.

301 redirects pass ~99% of link equity and ranking signals to the new URL.

### Windows (15 redirects)
| Old URL | New URL |
|---------|---------|
| /window-styles | /windows/window-styles |
| /single_hung | /windows/single-hung |
| /double_hung | /windows/double-hung |
| /slider | /windows/slider |
| /bay_and_bow | /windows/bay-and-bow |
| /garden_specialty | /windows/garden-specialty |
| /casement | /windows/casement |
| /basement | /windows/basement |
| /egress | /windows/egress |
| /krypton | /windows/krypton |
| /window-options | /windows/window-options |
| /window-installation | /windows/window-installation |
| /storm | /windows/storm |
| /replacement_windows_faq | /windows/replacement-windows-faq |
| /swing_and_clean | /patio/swing-and-clean |

### Siding (8 redirects)
| Old URL | New URL |
|---------|---------|
| /steel-siding | /siding/steel-siding |
| /composite_siding | /siding/composite-siding |
| /vinyl-siding | /siding/vinyl-siding |
| /siding-options | /siding/siding-options |
| /siding-installation | /siding/siding-installation |
| /insulated-siding | /siding/insulated-siding |
| /vinyl_siding_faq | /siding/vinyl-siding-faq |
| /insulated_siding_faq | /siding/insulated-siding-faq |

### Doors (5 redirects)
| Old URL | New URL |
|---------|---------|
| /door-styles | /doors/door-styles |
| /entry | /doors/entry |
| /easy-vent | /doors/easy-vent |
| /mini-blinds | /doors/mini-blinds |
| /door-app | /doors/door-app |

### Gutters (5 redirects)
| Old URL | New URL |
|---------|---------|
| /seamless-gutters | /gutters/seamless-gutters |
| /shurflo | /gutters/shurflo |
| /gutter-cap | /gutters/gutter-cap |
| /gutter-installation | /gutters/gutter-installation |
| /gutter_cap_faq | /gutters/gutter-cap-faq |

### Patio (4 redirects)
| Old URL | New URL |
|---------|---------|
| /patio-awning | /patio/patio-awning |
| /solar-shades | /patio/solar-shades |
| /awning-care | /patio/awning-care |
| /canopies | /patio/canopies |

### About (7 redirects)
| Old URL | New URL |
|---------|---------|
| /our-story | /about/our-story |
| /meet_the_owners | /about/meet-the-owners |
| /showroom-tour | /about/showroom-tour |
| /testimonials | /about/testimonials |
| /in_the_news | /about/in-the-news |
| /referral_program | /about/referral-program |
| /about | /about/our-story |

### Resources (10 redirects)
| Old URL | New URL |
|---------|---------|
| /faq | /resources/faq |
| /condensation_faq | /resources/condensation-faq |
| /convection_faq | /resources/convection-faq |
| /heater_cap_faq | /resources/heater-cap-faq |
| /stain_formula_faq | /resources/stain-formula-faq |
| /glossary | /resources/glossary |
| /recommended | /resources/recommended |
| /warranty_information | /resources/warranty-information |
| /downloads | /resources/downloads |
| /support | /resources/support |

---

## 10. City / Service Area Pages

10 dedicated city landing pages targeting local search queries like "replacement windows Bettendorf Iowa" or "siding contractor Moline IL".

**Cities with dedicated pages:**
1. Davenport, IA (`/service-areas/davenport-ia`)
2. Bettendorf, IA (`/service-areas/bettendorf-ia`)
3. Moline, IL (`/service-areas/moline-il`)
4. Rock Island, IL (`/service-areas/rock-island-il`)
5. East Moline, IL (`/service-areas/east-moline-il`)
6. Sterling, IL (`/service-areas/sterling-il`)
7. Rock Falls, IL (`/service-areas/rock-falls-il`)
8. Muscatine, IA (`/service-areas/muscatine-ia`)
9. Clinton, IA (`/service-areas/clinton-ia`)
10. DeWitt, IA (`/service-areas/dewitt-ia`)

**Each city page includes:**
- Unique title, description, and keywords targeting that specific city
- City-specific intro content mentioning local landmarks and neighborhoods
- Local Business Schema customized for that city
- Breadcrumb Schema (Home → Service Areas → [City])
- Links to nearby cities
- Priority 0.8 in sitemap (same as core product pages)

---

## 11. Image Optimization

**Next.js Image component** is used throughout the site instead of plain `<img>` tags. This provides:

- **Automatic format conversion** — serves AVIF (newest, smallest) to supporting browsers, WebP to others, original format as fallback. Configured in `next.config.ts`: `formats: ['image/avif', 'image/webp']`
- **Lazy loading** by default — images below the fold load only when scrolled into view
- **Proper sizing** — `width` and `height` attributes prevent layout shift (improves CLS score)
- **Responsive images** — automatically generates srcset for different screen sizes
- **Alt text** — all images include descriptive alt text with relevant keywords

---

## 12. Performance & Core Web Vitals

Page speed directly affects Google rankings. Optimizations in place:

### Font Loading
- Google Fonts (Montserrat, Dancing Script) loaded with `display: swap`
- Prevents invisible text during font load (improves FCP)
- Subset to Latin only — reduces font file size

### Script Loading
- Google Analytics loads with `strategy="afterInteractive"` — non-blocking
- Does not delay page render or Time to Interactive

### React Compiler
- Enabled in `next.config.ts`
- Automatically optimizes React rendering, reduces unnecessary re-renders

### Static Generation
- Next.js pre-renders all pages at build time (SSG)
- Pages served as static HTML — extremely fast TTFB (Time to First Byte)
- No server-side rendering delays

---

## 13. Global Site Settings

Configured in root `app/layout.tsx`:

| Setting | Value |
|---------|-------|
| Default title | Suburban Construction \| Replacement Windows, Siding & Doors \| Quad Cities |
| Title template | `%s \| Suburban Construction` |
| Default description | Suburban Construction — the Quad Cities' trusted home improvement contractor since 1985... |
| metadataBase | https://www.suburbanconstruction.com |
| Robots | index: true, follow: true |
| HTML lang | en |
| Theme color | #2a2e40 |
| Favicon 16×16 | /favicon-16x16.png |
| Favicon 32×32 | /favicon-32x32.png |
| Apple touch icon | /apple-touch-icon.png |
| Web manifest | /site.webmanifest |

---

## 14. Analytics

**Google Analytics 4** (`G-SMSKZH24G0`) is implemented site-wide via `@next/third-parties/google`.

- Loads asynchronously — does not block page rendering
- Tracks page views, session data, and conversion events
- Integrates with Google Search Console for keyword performance data

---

## Summary

| Category | Count / Detail |
|----------|---------------|
| Pages with unique metadata | 60+ static pages + 10 city pages |
| Total keywords targeted | 150+ unique keyword phrases |
| Structured data schema types | 5 (LocalBusiness, Product, FAQPage, BreadcrumbList, Service Area) |
| Pages with FAQ rich result eligibility | 9 |
| Pages with star rating eligibility | All product/service pages + every page (via global LocalBusiness schema) |
| Sitemap entries | 81 |
| 301 redirects preserving old URLs | 46 |
| City-targeted landing pages | 10 |
| Image format optimization | AVIF + WebP auto-conversion |
| Canonical URLs | All 60+ pages |
| Open Graph coverage | 100% of pages |
| Twitter card coverage | 100% of pages |
