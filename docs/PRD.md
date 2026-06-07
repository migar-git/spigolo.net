---
title: "Spigolo — Product Requirements Document"
version: "1.0"
status: "Active"
owner: "migar"
last-updated: "2026-04-07"
---

# Spigolo — PRD

> **Version 1.0** | Active | Updated 2026-04-07

## 1. Vision & Problem Statement

Spigolo (spigolo.net) is a curated e-commerce marketplace for premium artisan Italian pasta. Positioned as "The Dior of dried pasta," the brand sources bronze-die extruded, slow-dried, heritage-wheat pasta from legendary Italian makers (Gragnano and beyond) and delivers it to food-obsessed consumers globally. The site sells individual products, curated gift boxes ($49–$149), and publishes a "Journal" blog to build editorial authority. The brand targets the premium food gifting and culinary enthusiast markets.

**Problem:** Discerning home cooks and food gift buyers have no reliable English-language destination for authentic artisan Italian pasta. Mainstream grocery stores carry commodity pasta; even specialty retailers rarely stock the best small-producer varieties.

**Audience:** Affluent home cooks (30–55) passionate about Italian cuisine; premium food gift buyers (seasonal gifting, corporate gifting); culinary enthusiasts and food writers; Italian food culture devotees.

## 2. Goals & Success Metrics

| Goal | KPI | Target | Measurement Method |
|---|---|---|---|
| Drive product sales | Orders per month | 50+/month at launch | Order management / Stripe |
| Gift box revenue | Gift box units sold | 20+/month | Order tracking |
| Build editorial authority | Blog organic sessions | +30% MoM | GA4 |
| Email list growth | Subscribers | 200+/month | Email platform |
| Cart conversion | Add-to-cart to purchase | ≥ 4% | Analytics funnel |

## 3. User Personas

| Persona | Role | Pain Points | What Success Looks Like |
|---|---|---|---|
| Culinary Enthusiast | Home cook / foodie | Can't find authentic artisan pasta locally | Discovers producers section; buys 2–3 SKUs |
| Gift Buyer | Someone shopping for a food lover | Wants a premium, unique gift that feels thoughtful | Buys a gift box ($79–$149); adds gift message |
| Italian Food Devotee | Food writer / chef at home | Wants specific regional producers (Gragnano, etc.) | Browses producers section; follows on Instagram |
| Corporate Gifting Lead | Office manager / PA | Needs premium branded food gifts in bulk | Contacts via email for bulk/corporate orders |

## 4. Functional Requirements

### 4.1 Content

- FR-001: Homepage MUST include a hero communicating the premium positioning and primary shop CTA.
- FR-002: "Our Promise" section MUST articulate brand pillars (Heritage Wheat, Bronze-Die, Slow-Dried, Artisan Makers).
- FR-003: Producers section MUST profile individual pasta makers with origin story and product ties.
- FR-004: Products/Shop section MUST list available SKUs with images, descriptions, prices, and add-to-cart functionality.
- FR-005: Gift Boxes page MUST present 3 curated collections ($49–$149) with contents, photography, and buy CTA.
- FR-006: Journal/Blog MUST publish editorial content on Italian pasta culture, recipes, and producer stories.
- FR-007: FAQ page MUST address shipping, ingredients, storage, and gifting questions.
- FR-008: Shipping page MUST clearly state delivery times, costs, and regions served.

### 4.2 Conversion

- FR-009: Add-to-cart functionality MUST be present on product listings (cart counter in nav shows current count).
- FR-010: Gift box pages MUST have prominent buy/order CTAs linked to checkout.
- FR-011: Email capture MUST be present (e.g., "Join for early access / exclusive drops").
- FR-012: Social proof (producer credentials, photography quality) MUST visually anchor premium positioning.
- FR-013: Instagram link MUST be prominent to funnel social discovery.

### 4.3 Legal & Operations

- FR-014: Privacy policy, shipping policy, and terms MUST be accessible from footer.
- FR-015: Product pages MUST include allergen/ingredient information where applicable.

## 5. Non-Functional Requirements

| Category | Requirement | Target | Priority |
|---|---|---|---|
| Performance | LCP | < 2.5s | P0 |
| Performance | Image optimization | All product images WebP, < 200KB each | P1 |
| SEO | Product schema (offers, price) | Valid | P0 |
| SEO | Core Web Vitals | All green | P0 |
| Accessibility | WCAG AA | Pass | P1 |
| Security | HTTPS | 100% | P0 |
| Mobile | Responsive design | All pages fully mobile-optimized | P0 |

## 6. Constraints

- Static HTML site — cart and checkout require third-party integration (Stripe, Snipcart, or similar).
- No server-side inventory management; stock management is manual.
- Small producer supply chains may constrain SKU availability and reorder frequency.
- Premium positioning requires high-quality product photography; current static site depends on excellent visuals.

## 7. Out of Scope

- Subscription pasta boxes (potential future feature).
- Restaurant/wholesale portal.
- Full recipe database (Journal covers editorial recipes only).
- Multi-currency / localization beyond English (future).

## 8. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Cart/checkout not functional (static site) | High | Critical | Integrate Snipcart or Stripe Payment Links before launch |
| Premium price point resists impulse purchase | Medium | High | Lead with gift box angle; free shipping threshold; editorial trust-building |
| Supply chain issues with Italian producers | Medium | High | Source 3+ producers per format; maintain buffer stock |
| Seasonal demand spikes (holidays) crash site | Low | Medium | Use CDN; test load before peak seasons |
| SEO competition from large food retailers | High | Medium | Focus on long-tail (specific producers, varieties, use cases) |

## 9. Document Index

| Document | Path | Status |
|---|---|---|
| Architecture | /docs/ARCHITECTURE.md | Active |
| PRD (this file) | /docs/PRD.md | Active |
| Gift Boxes | /gift-boxes.html | Active |
| FAQ | /faq.html | Active |
| Shipping | /shipping.html | Active |
| Privacy Policy | /privacy.html | Active |
| Terms | /terms.html | Active |
| Blog / Journal | /blog.html | Active |
| Sitemap | /sitemap.xml | Active |
