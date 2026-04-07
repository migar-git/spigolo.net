# Contributing to spigolo.net

## Local Development

```bash
python -m http.server 8080
# or
npx serve .
```

Open `http://localhost:8080`.

## Site Structure

- `index.html` — main landing page
- `producers/` — individual artisan producer pages
- `blog/` — content marketing articles
- `css/` — stylesheets
- `js/` — client-side scripts

## Adding a Producer

1. Create `producers/producer-name.html` (copy an existing producer page as template).
2. Link from the producers section on `index.html`.
3. Add to `sitemap.xml`.

## Adding Blog Content

1. Create article HTML in `blog/`.
2. Update `blog.html` listing.
3. Add to `sitemap.xml`.

## Deploying

Push to `main`. GitHub Pages auto-deploys via CNAME record for spigolo.net. See `docs/DEPLOYMENT.md`.

## Standards

- Keep product descriptions accurate — do not invent certifications or awards.
- All external links: `rel="noopener noreferrer"`.
- Do not commit payment credentials or API keys.
