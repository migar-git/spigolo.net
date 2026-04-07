# Security — spigolo.net

## Content Security Policy

Add CSP via `<meta http-equiv="Content-Security-Policy">` in all HTML files.

Recommended:
- `default-src 'self'`
- `script-src 'self' 'unsafe-inline'`
- `style-src 'self' 'unsafe-inline'`
- `img-src 'self' data: https:` (external product images)
- `object-src 'none'`
- `frame-src 'none'`

## E-commerce Security (Pre-launch)

When payment processing is added:
- Use a PCI-compliant provider (Stripe, Shopify Payments, etc.)
- Never store card data on this static site
- Stripe publishable key (`pk_live_*`) is safe in HTML; secret key is not

## Secrets

This is currently a static site. Do not commit:
- Payment provider secret keys
- Email service API credentials
- Shipping provider API tokens

## Privacy and Legal

- `privacy.html` — update to reflect actual data processors when e-commerce goes live
- `terms.html` — must cover product returns and the shipping policy described in `shipping.html`
- `shipping.html` — keep delivery estimates and carrier information accurate

## Reporting Issues

Contact the repo owner privately for security concerns.
