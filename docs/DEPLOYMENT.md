# Deployment — spigolo.net

## Platform

Hosted on **GitHub Pages** with custom domain **spigolo.net**.

## DNS Configuration

| Record Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | migar-git.github.io |

Verify DNS:
```bash
dig spigolo.net A +short
```

## Deploy Process

```bash
git add <changed-files>
git commit -m "feat/fix/content: describe your change"
git push origin main
```

GitHub Pages rebuilds automatically within ~60 seconds.

## Verifying Deployment

1. Open https://spigolo.net in a private browser window
2. Hard-refresh (Ctrl+Shift+R) to bypass cache
3. Confirm changed content appears
4. Verify payment CTAs link to correct Stripe/payment URLs

## Rollback

```bash
# Revert last commit
git revert HEAD
git push origin main

# Revert specific commit
git revert <commit-sha>
git push origin main
```

## Environment Variables

None required for the static site.

- Stripe publishable keys (`pk_live_*`) are safe in client HTML
- Stripe secret keys must never be in this repo

## Pre-Deploy Checklist

- [ ] All pages render at 375px, 768px, 1280px
- [ ] Product images load and are optimized (< 200KB each)
- [ ] Payment/order CTAs point to correct URLs
- [ ] Pricing is consistent across all pages
- [ ] sitemap.xml updated for any new product or blog pages
- [ ] Lighthouse Performance ≥ 90, Accessibility ≥ 90
- [ ] No console errors in browser DevTools

## Post-Deploy Checklist

- [ ] spigolo.net resolves over HTTPS
- [ ] Gift box pages accessible and rendering correctly
- [ ] Journal/blog articles loading correctly
- [ ] Order flow works end-to-end (test with Stripe test mode)
