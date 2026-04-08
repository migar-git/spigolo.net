# Test Strategy — spigolo.net

## Overview

Spigolo is a static HTML/CSS/JS e-commerce storefront. Testing focuses on performance, accessibility, product page accuracy, payment flow, and content integrity.

## Test Categories

### 1. Lighthouse Audits (Primary Quality Gate)

**Targets:**

| Category | Minimum Score |
|---|---|
| Performance | ≥ 90 |
| Accessibility | ≥ 90 |
| Best Practices | ≥ 90 |
| SEO | ≥ 95 |

```bash
npx lighthouse https://spigolo.net --output html --output-path ./lighthouse-report.html
```

### 2. Accessibility Testing

- Run axe DevTools on all product, gift box, and checkout pages
- All product images must have descriptive `alt` text (product name + key attributes)
- Keyboard navigation must work for all purchase CTAs
- Color contrast minimum 4.5:1 for body text, 3:1 for large text
- Test with VoiceOver (macOS/iOS) on the purchase flow

### 3. Link and Navigation Checking

```bash
npx linkinator https://spigolo.net --recurse --skip "^(?!https://spigolo.net)"
```

Verify:
- All product pages accessible from homepage grid
- Gift box pages accessible from gift-boxes.html
- Blog/Journal articles load from blog listing
- Payment CTAs resolve to correct Stripe/payment URLs

### 4. Payment Flow Testing

Before any payment-related change reaches production:
- Test Stripe checkout with test card `4242 4242 4242 4242`, any future expiry, any CVC
- Verify success redirect URL works
- Confirm no secret keys exposed in page source or network requests
- Test gift box order flow end-to-end

### 5. Product Accuracy Review

Before publishing new or updated product pages:
- Verify product name, origin, producer, and wheat variety are accurate
- Confirm prices are consistent with index.html and any bundle pages
- Verify product images are correct (not placeholder or wrong product)

### 6. Image Performance

- All product images should be < 200KB
- Prefer WebP format for photographs
- Verify images are not causing layout shift (set width/height attributes)

### 7. Cross-Browser Testing

Chrome, Firefox, Safari, Edge — latest versions.

### 8. Mobile/Responsive Testing

| Breakpoint | Use Case |
|---|---|
| 375px | Small phones |
| 768px | Tablet |
| 1280px | Desktop |

### 9. SEO Checks

- Product pages have Schema.org Product markup
- `<title>` and `<meta name="description">` unique per page
- sitemap.xml lists all product, gift box, and blog URLs

## Test Schedule

| Trigger | Tests |
|---|---|
| Before every push | Browser smoke test, confirm page loads |
| New product page | Accuracy review, mobile layout, SEO check, payment CTA |
| Major redesign | Full Lighthouse, cross-browser, visual regression |
| Monthly | Lighthouse audit, link check, payment flow |
