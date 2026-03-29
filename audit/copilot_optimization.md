# Copilot Optimization — spigolo.net

**Audit Date:** 2026-03-29

## Current Copilot Usefulness Rating: 5 / 10

Premium design and separated CSS/JS give Copilot more to work with. The cart JavaScript in `js/` is a Copilot-friendly task. Producer pages provide a consistent template Copilot can extend.

## Opportunities for AI Assistance

| Task | Opportunity |
|------|-------------|
| Cart JavaScript | Copilot can implement Snipcart integration or LocalStorage cart |
| New producer page generation | Agent creates producer pages from a data template |
| Recipe article generation | Agent generates pasta recipe articles (highest-traffic content type) |
| Product data JSON | Agent maintains product catalog |
| Gift box page enhancement | Copilot can add Stripe payment link integration |
| Sitemap.xml maintenance | Agent regenerates after new pages |
| Image optimization script | Copilot can write a batch image compression script |

## What Needs to Be Built for Copilot to Help More

1. **`data/products.json`** — product catalog with names, descriptions, prices, affiliate URLs.
2. **Producer template** — `producers/_template.html`; Copilot can generate new producer pages.
3. **Recipe template** — `blog/_template_recipe.html`; agent generates recipe content.
4. **Snipcart or similar cart integration** — once chosen, Copilot can implement the JavaScript.
5. **`.github/copilot-instructions.md`** — describe Spigolo as a luxury Italian pasta brand; tone is editorial/premium, not promotional.
