# Kasho Pay showcase site

Static site (no framework, no dependencies) in French, built for Haiti: low weight (about 0.5 MB with all screenshots), mobile first, SEO ready.

- `build.mjs` generates `index.html`, `sitemap.xml`, `robots.txt`, `site.webmanifest`. **Edit the texts there**, then rebuild.
- `style.css`, `site.js`: design and the small menu / reveal script.
- `img/`: Kasho logo, icons, `og.jpg` (social sharing image) and the app screenshots (`app-*.webp`).

## Build for your real domain
```bash
SITE_URL=https://www.your-domain.com APP_URL=https://app.kashopay.com \
CONTACT_EMAIL=support@your-domain.com WHATSAPP=509XXXXXXXX node build.mjs
```
`SITE_URL` goes into the canonical links, hreflang, sitemap, Open Graph and structured data: **it must be the real address of the site** (the default is `https://kashopay.com`).

## Deploy on Render (Static Site)
New > Static Site > this repository (branch `main`). Build command: empty. Publish directory: `.` (or use `render.yaml`). Then add the domain in Settings > Custom Domains.

## After it is online
1. Add the site in Google Search Console and Bing Webmaster Tools, and submit `/sitemap.xml`.
2. Test sharing with the Facebook Sharing Debugger and WhatsApp (the preview uses `img/og.jpg`).
3. Check the fees table: it is a copy of the default fee schedule, so update `build.mjs` if you change fees in the admin page.

## Refreshing the app screenshots
They were captured from the app with demo data (mock account "Marie Jean"). Retake them after a visual change to the app.

## Legal pages
`legal.mjs` holds the texts (French) of seven pages: conditions d'utilisation, politique de confidentialité, mentions légales, politique de cookies, conditions des cartes virtuelles, frais et réclamations, lutte contre la fraude. They are drafts: **have a lawyer review them**.

Company details still in `[brackets]` must be filled in, with these variables when building (or by editing `build.mjs`):
`LEGAL_ADDRESS`, `LEGAL_REG_NUMBER`, `LEGAL_PUBLISHER`, `CONTACT_EMAIL`, `LEGAL_LAW`, `LEGAL_COURT`, `LEGAL_RETENTION`, `LEGAL_DISPUTE_DELAY` (and `LEGAL_FORM` if it is not an LLC).
A page that still contains a placeholder is built with `noindex` and left out of `sitemap.xml`, so incomplete pages are not indexed by search engines. Once everything is filled in, rebuild and they become indexable.

## Cloudflare Workers (kashopay.com)
`worker.js` sends `www.kashopay.com` to `kashopay.com` with a 301 (path and query string kept) and serves the static files; `wrangler.jsonc` configures it; `.assetsignore` keeps source files (`build.mjs`, `legal.mjs`, `worker.js`...) off the public site.

1. Cloudflare > Workers & Pages > Create > connect this repository. Build command: empty. Deploy command: `npx wrangler deploy`.
2. In `wrangler.jsonc`, `name` must be the name of the Worker you want to update (change `kasho-pay-site` if you already have one).
3. Worker > Settings > Domains & Routes: add `kashopay.com` and `www.kashopay.com` (both must point to this Worker, otherwise the redirect never runs).
4. Check: `curl -I https://www.kashopay.com/conditions-utilisation/?a=1` answers `301` with `location: https://kashopay.com/conditions-utilisation/?a=1`.
