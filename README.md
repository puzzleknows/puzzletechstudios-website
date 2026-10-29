# Puzzle Tech Studios LLC

Corporate website for **Puzzle Tech Studios LLC**, an independent mobile software development company in Nevada, United States.

Intended domain: `https://puzdev.com`

Static HTML, CSS, and minimal JavaScript. No build step. Compatible with GitHub Pages from the `main` branch root.

## Preview locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Pre-launch checklist (owner only — not shown on the website)

### Email aliases

Confirm each `@puzdev.com` alias receives and sends mail via Zoho before treating it as production-ready for support or Apple verification:

- [ ] `hello@puzdev.com` — general business
- [ ] `godfocus@puzdev.com` — God Focus support
- [ ] `roamxp@puzdev.com` — RoamXP support
- [ ] `partners@puzdev.com` — partnerships

Do not claim these addresses are verified until the checks above are complete.

### Legal review

- [ ] Review `privacy.html` and `terms.html` before relying on them for formal filings
- [ ] Confirm app-specific policies remain accurate on their own sites

### App Store listings (already wired on the site)

- God Focus: https://apps.apple.com/us/app/god-focus-bible-scroll/id6791024734 (`id6791024734`)
- RoamXP: https://apps.apple.com/us/app/roamxp-habit-tracker-focus/id6821217688 (`id6821217688`)

Screenshots and icons in `assets/apps/` were downloaded from Apple’s iTunes Lookup API for those exact app IDs. See `assets/apps/manifest.json`.

### App legal pages

- https://puzzleknows.github.io/god-focus-website/privacy.html
- https://puzzleknows.github.io/god-focus-website/terms.html
- https://puzzleknows.github.io/roamxp-website/privacy/
- https://puzzleknows.github.io/roamxp-website/terms/

### Identity

- Public company name: Puzzle Tech Studios LLC
- Domain and emails may use `puzdev.com`
- Do not publish EIN, D-U-N-S, phone, residential address, or founder personal details without approval
- Do not claim Apple has completed organization membership migration

## Publish on GitHub Pages

Deploy from `main` / `(root)`. Do not change DNS from this project. Preserve any GitHub-managed `CNAME` if present.

## Files

- `index.html`, `privacy.html`, `terms.html`
- `styles.css`, `script.js`, `favicon.svg`, `robots.txt`, `.nojekyll`
- `assets/apps/` — official App Store screenshots, icons, and source manifest
