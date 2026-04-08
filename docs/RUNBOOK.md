# Runbook — spigolo.net

## Service Overview

- **Site:** https://spigolo.net
- **Type:** Static HTML/CSS/JS e-commerce storefront (premium artisan pasta)
- **Hosting:** GitHub Pages (branch: main)
- **Custom Domain:** spigolo.net

---

## Routine Operations

### Deploy a Change

```bash
git add <files>
git commit -m "type: description"
git push origin main
```

GitHub Pages publishes within ~60 seconds.

### Verify the Site is Live

```bash
curl -I https://spigolo.net
# Expect: HTTP/2 200
```

---

## Incident Procedures

### Site Not Loading

1. Check https://www.githubstatus.com
2. If GitHub Pages operational: check Settings → Pages, confirm source is `main` / root
3. Check last commit did not break HTML structure

### Domain Not Resolving

1. Verify DNS:
   ```bash
   dig spigolo.net A +short
   # Expected: 185.199.108–111.153
   ```
2. Verify A records at registrar
3. Allow up to 48 hours for propagation
4. Verify CNAME file contains `spigolo.net`

### HTTPS Certificate Issue

1. Repository Settings → Pages → verify "Enforce HTTPS" enabled
2. Toggle off/on to re-trigger certificate provisioning if stuck

### Payment Button Not Working

1. Check browser console for JS errors
2. Verify Stripe payment link URL is correct
3. Test with Stripe test mode card: `4242 4242 4242 4242`
4. Check Stripe dashboard for failed events

### Rollback a Bad Deployment

```bash
git revert HEAD
git push origin main
```

---

## Cache Invalidation

Allow 60–120 seconds after push. Test with incognito window or hard-refresh (Ctrl+Shift+R).

---

## Content Operations

### Add a New Product

1. Create product HTML page (copy existing as template)
2. Link from index.html product grid
3. Add URL to sitemap.xml
4. Update any bundle/gift box pages that reference pricing
5. Push to main

### Update Product Pricing

```bash
grep -r "\$49" .
# Update all matching files consistently
```

### Add a Blog/Journal Article

1. Create article in `blog/` directory
2. Add article card to `blog.html`
3. Add URL to `sitemap.xml`
4. Push to main

---

## Monitoring

- Recommended: UptimeRobot free monitor on https://spigolo.net
- Check Google Search Console monthly for crawl errors
- Verify Stripe test-mode checkout monthly

---

## Contacts

| Role | Contact |
|---|---|
| Site Owner | migar (GitHub) |
| Payment Processor | Stripe dashboard — dashboard.stripe.com |
| Domain Registrar | Check registrar account for spigolo.net |
