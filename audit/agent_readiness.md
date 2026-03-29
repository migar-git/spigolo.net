# Agent Readiness — spigolo.net

**Audit Date:** 2026-03-29

## Current Agent Readiness: Low (20 / 100)

Best design in the portfolio; weakest commerce infrastructure. Agent automation is limited until the e-commerce decision is made.

## What's Working

- AGENT.md schema v1.0 present.
- `/producers/` and `/blog/` directories provide namespaces for agent content generation.
- sitemap.xml and robots.txt maintained.
- Producer page template (di-martino, faella, gentile) provides a reusable pattern.

## What Needs to Be Built for Agent Automation

| Component | Priority | Description |
|-----------|----------|-------------|
| E-commerce decision | Critical | Determines entire automation architecture |
| `data/products.json` | High | Product catalog foundation for all automation |
| Recipe article generator | High | Agent generates recipe content (highest-traffic pasta content type) |
| Producer page generator | High | Agent adds new producers from `data/producers.json` |
| `generate_sitemap.py` | Medium | Agent maintains sitemap.xml |
| GitHub Actions workflow | Medium | CI validates HTML and deploys |
| Affiliate link integration | Medium | If affiliate-first pivot chosen, agent inserts and tracks links |

## For Static Site Agents — Recommended Next Steps

1. **Make the e-commerce decision first** — affiliate-first (Amazon) vs. Snipcart vs. Shopify Lite. This drives everything else.
2. If **affiliate-first**: build the same product data JSON + generate_review.py pipeline as coves7.com. Pasta products are highly affiliate-eligible on Amazon.
3. If **Snipcart**: Ares (node2) can implement Snipcart integration — it's JavaScript configuration, no backend required.
4. **Recipe content is the highest-ROI automation** regardless of commerce model — pasta recipe articles drive organic traffic; Oracle (n2) can research and draft them for Ares to publish.
5. Spigolo is the most brand-differentiated site; its niche (luxury Italian pasta) has less competition than AI tools. Prioritize if the affiliate-first pivot is chosen.
