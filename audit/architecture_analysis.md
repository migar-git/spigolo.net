# Architecture Analysis — spigolo.net

**Audit Date:** 2026-03-29

## Directory Structure Overview

```
spigolo.net/
├── index.html                 # Homepage (hero, producers, products, cart)
├── about.html
├── blog.html                  # Blog listing
├── gift-boxes.html            # Gift box products
├── faq.html
├── shipping.html
├── privacy.html
├── terms.html
├── CNAME
├── sitemap.xml
├── robots.txt
├── producers/
│   ├── di-martino.html        # Producer: Di Martino (Gragnano)
│   ├── faella.html            # Producer: Faella
│   └── gentile.html           # Producer: Gentile
├── blog/
│   ├── bronze-die-pasta.html
│   ├── pasta-shapes.html
│   └── perfect-spaghetti.html
├── css/
│   └── styles.css             # Premium styling (Cormorant Garamond + Montserrat)
├── js/                        # JavaScript (cart logic?)
├── docs/
└── AGENT.md / AGENTS.md / MEMORY.md / PORTFOLIO.md
```

## Patterns Observed

**Strengths:**
- Most sophisticated design system in the portfolio — luxury typography and visual identity.
- Producer pages are an excellent content strategy: authenticity and storytelling for premium products.
- `gift-boxes.html` is a strong seasonal monetization vector.
- `faq.html` and `shipping.html` are trust-building pages appropriate for e-commerce.
- Blog articles on pasta topics (bronze-die, pasta shapes, perfect spaghetti) support SEO for pasta keywords.

**Anti-Patterns:**
- Cart UI ("Cart (0)") without an actual cart backend — this is the most jarring UX anti-pattern in the portfolio.
- `js/` directory presumably contains cart logic; without a backend, this is non-functional.
- No product catalog (JSON or database) — product data is hardcoded in HTML.
- Instagram links (`instagram.com/spigolo.net`) in JSON-LD — verify the account exists.
- No product images directory visible.

## Recommendations

1. **Decide on e-commerce approach**: Snipcart (static-site JS cart + Stripe), Shopify Lite, or remove the cart UI and go affiliate-only.
2. Add a `data/products.json` catalog for agent-driven product management.
3. Add an `images/` or `products/` image directory.
4. Create a recipe content section — highest-volume keyword category for pasta.
5. Add GitHub Actions CI for deploy.
