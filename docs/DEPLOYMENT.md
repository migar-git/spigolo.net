# Deployment — spigolo.net

## Platform

Hosted on **GitHub Pages** (`main` branch → root). Custom domain set via `CNAME` file.

## Deploy Process

```bash
git add .
git commit -m "your message"
git push origin main
```

GitHub Pages rebuilds within ~30 seconds. No CI pipeline required.

## Custom Domain

- CNAME file contains `spigolo.net`
- DNS A records should point to GitHub Pages IPs: 185.199.108–111.153
- HTTPS enforced by GitHub Pages TLS

## Rollback

```bash
git revert HEAD
git push origin main
```

## Pre-deploy Checklist

- [ ] HTML validates (no broken tags)
- [ ] sitemap.xml updated for any new/removed pages
- [ ] No hardcoded localhost or staging URLs
- [ ] Schema.org markup valid (test via Google Rich Results Test)
- [ ] No credentials or API keys in committed files
