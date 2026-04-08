# ADR-001: Initial Architecture — Static HTML/CSS/JS on GitHub Pages

**Date:** 2026-02-14
**Status:** Accepted
**Author:** migar

---

## Context

Spigolo is a premium artisan pasta e-commerce storefront. It sells physical products (pasta, gift boxes) to consumers. The site needs excellent visual design, fast performance, and reliable payment processing — with minimal ongoing infrastructure burden.

Architecture options evaluated:

1. **Static HTML/CSS/JS + Stripe Payment Links on GitHub Pages** — zero hosting cost, full design control, simple deployment
2. **Shopify** — purpose-built e-commerce, but $39+/month and limits custom design
3. **WooCommerce on WordPress** — flexible but requires server management, plugin updates, PCI compliance complexity
4. **Next.js + headless commerce (Medusa, Commerce.js)** — powerful but over-engineered for a focused SKU catalog

## Decision

**Static HTML/CSS/JS on GitHub Pages with Stripe Payment Links / Stripe Checkout for payment processing.**

Inventory management and order fulfillment are handled outside the codebase (Stripe dashboard + manual fulfillment at current scale).

## Rationale

### Why static HTML (not Shopify)?

- **Brand differentiation:** Shopify themes are templates. Spigolo's premium positioning ("The Dior of pasta") requires full visual control impossible within Shopify's theme system without significant customization cost.
- **Cost:** GitHub Pages is free. Shopify costs $39/month minimum plus transaction fees.
- **Performance:** Custom static HTML achieves better Core Web Vitals than theme-based platforms.

### Why GitHub Pages (not Vercel/Netlify)?

- Zero additional configuration on top of existing GitHub usage
- Adequate CDN performance for e-commerce at current traffic volumes
- Free with custom domain and HTTPS

### Why Stripe (not PayPal, Gumroad)?

- Stripe Payment Links require no backend code — the link redirects to Stripe-hosted checkout
- PCI scope reduced to SAQ A (lowest level) — card data never touches the static site
- Lower transaction fees than PayPal or Gumroad at comparable volumes
- Strong brand trust with premium buyers

### Physical vs. Digital Products

All products are physical (pasta, gift boxes). This means:
- No instant delivery — order fulfillment is manual at current scale
- Shipping pages and policies are required
- Returns/refund policy applies to physical goods

## Consequences

### Positive
- Full design control for premium brand aesthetic
- Zero hosting cost
- Stripe handles PCI compliance
- Simple deployment workflow

### Negative / Trade-offs
- No built-in inventory management — must track stock manually
- No automated order fulfillment — requires manual processing from Stripe dashboard
- Adding user accounts (order history, tracking) requires migrating to a dynamic platform

## Future Considerations

At higher order volumes or with expanded SKU catalog, the natural migration is to a headless commerce platform (Medusa.js) with Next.js on Vercel, retaining the current custom design as the frontend. Stripe remains the payment processor throughout this migration path.
