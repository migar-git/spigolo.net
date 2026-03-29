# Technical Debt — spigolo.net

**Audit Date:** 2026-03-29

## What's Missing vs. What Should Exist

| Should Exist | Current State | Priority |
|-------------|---------------|----------|
| Working cart/e-commerce backend | Cart UI only | Critical |
| Product images directory | Not confirmed | High |
| Analytics | Not confirmed | High |
| GitHub Actions deploy workflow | Manual push | Medium |
| `data/products.json` catalog | Absent | Medium |
| Recipe content section | Absent | Medium |
| Instagram account (@spigolo.net) | Not confirmed | Medium |
| Bilingual Italian/English support | English only | Low |
| Producer data JSON | Hardcoded in HTML | Low |
| Snipcart or Shopify Lite integration | Not started | High |

## Gap Between Current State and Production-Ready State

**Current state:** Premium-looking e-commerce shell without any actual commerce capability. Highest design quality; lowest functional completion in the portfolio.

**Production-ready e-commerce site requires:**
- Working payment flow (Snipcart + Stripe OR Shopify Lite).
- Product image library (professional photography for luxury positioning).
- Order management system.
- Inventory tracking (even a simple spreadsheet linked to site).
- Analytics for conversion tracking.
- Email capture for abandoned cart and promotions.
- At minimum 10 products with full descriptions.

**Estimated gap:** 65% of production readiness for e-commerce. 45% for affiliate-only model (remove cart, add Amazon affiliate links to product mentions).

**Recommendation:** Consider affiliate-first pivot — link all pasta product mentions to Amazon.it/Amazon.com affiliate links. This generates revenue without requiring a commerce backend. Then build full e-commerce if affiliate revenue validates demand.
