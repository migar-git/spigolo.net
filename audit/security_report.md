# Security Report — spigolo.net

**Audit Date:** 2026-03-29

## Security Concerns

| Issue | Severity | Detail |
|-------|----------|--------|
| Cart UI without secure backend | High | A non-functional cart is a UX failure, not a security risk. But if cart JS is ever wired to a backend without SSL/proper auth, it becomes Critical. |
| `ciao@spigolo.net` in Schema.org | Low | Public email exposed to scrapers |
| No CSP | Medium | External font/script loads without Content Security Policy |
| Payment integration (future) | Critical (future) | If Snipcart is added, keys must be public-facing (publishable only) — private Stripe keys must never appear in client-side JS |
| `js/` not fully audited | Medium | Cart logic may contain placeholder API keys |
| Instagram account not confirmed | Low | If Instagram handle is listed but account doesn't exist, it's squattable |

### Secrets Audit

No secrets found in scanned HTML. `js/` not fully inspected — audit cart JavaScript for any hardcoded API keys.

## Security Baseline

1. **Audit `js/` cart logic** for any hardcoded payment keys.
2. **When implementing Snipcart/Stripe**: only public/publishable keys in client-side JS; private keys only in server-side or environment variables (not applicable for fully static, but relevant if adding a payment API proxy).
3. **Claim Instagram account** (@spigolo.net) if it doesn't exist — prevent brand squatting.
4. **Add CSP meta tag** once JS is inventoried.
5. **Confirm HTTPS enforcement** in GitHub Pages.
6. **Review privacy.html** — ensure it accurately reflects what tracking/analytics will be added.
