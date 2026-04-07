# Contributing to spigolo.net

Thank you for contributing to Spigolo, the premium artisan pasta storefront.

## Local Development

No build step required. Open `index.html` in a browser or serve locally:

```bash
# Python
python -m http.server 8080
# Node.js
npx serve .
```

Open http://localhost:8080 in your browser.

## Repository Structure

```
/
├── index.html          # Homepage
├── css/                # Stylesheets
├── js/                 # JavaScript files
├── blog/               # Journal/blog articles
├── producers/          # Producer profile pages
├── gift-boxes.html     # Gift box catalog
├── *.html              # Other site pages
├── CNAME               # Custom domain: spigolo.net
├── robots.txt / sitemap.xml
├── .gitignore
└── docs/               # Project documentation
```

## Branch Naming

| Purpose | Pattern | Example |
|---|---|---|
| New product page | `feat/<product-name>` | `feat/gragnano-rigatoni` |
| Bug fix | `fix/<description>` | `fix/checkout-button` |
| Content/copy update | `content/<description>` | `content/blog-pasta-guide` |
| Documentation | `docs/<description>` | `docs/runbook-update` |

## Pull Request Process

1. Branch from `main`
2. Make focused, atomic changes
3. Test at 375px, 768px, 1280px viewports
4. Verify Lighthouse Performance ≥ 90, Accessibility ≥ 90
5. Ensure product copy is accurate (weights, origins, prices)
6. Open PR with description; request review before merging

## Content Standards

- All product descriptions must be factual (origin, wheat variety, drying method)
- Producer names and certifications must be verified
- Pricing must be consistent across product pages and sitemap data
- Images must be optimized (max 200KB per image, WebP preferred)

## Security

- Never commit API keys, payment credentials, or `.env` files
- See `docs/SECURITY.md` for full policy

## Deployment

Push to `main` triggers automatic GitHub Pages deployment. See `docs/DEPLOYMENT.md` for full procedures.
