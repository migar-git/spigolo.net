# Security — spigolo.net

## Overview

Spigolo is a static e-commerce storefront. All payment processing is handled by a PCI-compliant third-party provider. No payment card data passes through this codebase. The following practices must be maintained.

## Content Security Policy (CSP)

Apply CSP via `<meta http-equiv="Content-Security-Policy">` in all HTML pages.

For a storefront with Stripe integration:

```html
<meta http-equiv="Content-Security-Policy"
  content="default-src 'self';
           script-src 'self' https://js.stripe.com;
           style-src 'self' 'unsafe-inline';
           img-src 'self' data: https:;
           connect-src 'self' https://api.stripe.com;
           frame-src https://js.stripe.com;
           object-src 'none';">
```

## HTTPS Enforcement

GitHub Pages automatically provisions and renews Let's Encrypt TLS certificates for custom domains. Verify "Enforce HTTPS" is enabled in repository Settings → Pages.

All payment interactions require HTTPS. Never disable HTTPS enforcement.

## Payment Security

- Only Stripe **publishable** keys (`pk_live_*` or `pk_test_*`) are safe to include in client-side HTML
- **Secret keys** (`sk_live_*`) must never appear anywhere in this repository — not in HTML, JS, config files, or comments
- Payment Links and Stripe Checkout redirect model requires no secret key client-side
- Stripe handles PCI DSS compliance for card data — do not build custom card input forms

## Secrets Management

Never commit to this repository:
- Stripe secret keys or webhook signing secrets
- Email service API keys
- Any `.env` file

Required `.gitignore` entries:
```
.env
.env.*
*.key
secrets/
node_modules/
```

## External Dependencies

Use Subresource Integrity (SRI) for CDN-loaded resources:

```html
<script src="https://cdn.example.com/lib.js"
        integrity="sha384-..."
        crossorigin="anonymous"></script>
```

## Legal Pages

The following pages must accurately reflect actual practices:
- `privacy.html` — data collection, payment processor, analytics
- `terms.html` — terms of sale for physical goods
- `shipping.html` — accurate shipping policies and timescales

## Vulnerability Reporting

Report security issues privately to the repository owner. Do not post vulnerability details in public issues.
