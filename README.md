# PUZDEV

Static website for Puzzle Tech Studios LLC, published under the public name PUZDEV. The company is an independent mobile app development studio in Nevada, United States. The intended domain is `puzdev.com`.

The site is plain HTML, CSS, and a small script. There is no build step, package install, or backend. It can be opened locally and published from the `main` branch root on GitHub Pages.

Paths to styles, scripts, and pages are relative, so the site works on a project URL such as `https://username.github.io/repository/` before a custom domain is connected.

## Preview locally

Double-click `index.html`, or from this folder run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`. Also open `privacy.html` and use Home, Apps, About, and Contact.

## Publish on GitHub Pages

1. Push this folder to the `main` branch of a GitHub repository. Keep the HTML files at the repository root.
2. In the repository, open Settings, then Pages.
3. Deploy from the branch `main` and set the folder to `/ (root)`.
4. Open the `github.io` address GitHub provides and confirm every page and navigation link.

Do not add a `CNAME` file, and do not change DNS, until `puzdev.com` is registered and the custom domain is turned on in GitHub Pages. GitHub can write that file when the domain is configured there.

Canonical and Open Graph URLs already use `https://puzdev.com/`. Until that domain resolves, give people the live Pages address. For Apple Developer Program organization verification, submit a public URL that actually loads and shows the legal name Puzzle Tech Studios LLC.

## PLACEHOLDERS — verify before launch

### Contact email

`hello@puzdev.com` is the published business, support, and privacy address. Confirm the mailbox exists, that you control it, and that a message sent to it arrives before launch or before you rely on it for Apple verification. The site does not publish a phone number, street address, EIN, or D-U-N-S number.

### App download links

`script.js` keeps the App Store and Google Play buttons hidden until an exact https URL is present:

```javascript
const APP_LINKS = {
  godFocus: {
    appStore: "",
    googlePlay: ""
  },
  roamxp: {
    appStore: "",
    googlePlay: ""
  }
};
```

When a listing is verified, replace only that empty string with the exact URL. Leave the other string empty. Do not guess an App Store or Google Play address. Visitors need JavaScript for those buttons; the rest of the site does not.

### App artwork

The product cards use simple original marks, not screenshots. Replace a mark only with artwork you own for that app. Do not use stock photos, mockups of phones, or invented interface images. If you add an image file, refer to it with a relative path.

### Social preview image

Open Graph tags do not include an image. Link previews will show text until you add a real image and an absolute `og:image` URL. Skip this until the image exists.

### Custom domain

Register `puzdev.com`, then connect it in GitHub Pages. Do not commit `CNAME` before that, and do not change DNS from this project.

## Files

- `index.html` — home page
- `privacy.html` — website privacy policy
- `styles.css` — layout and visual design
- `script.js` — verified App Store and Google Play links
- `favicon.svg` — mark
- `robots.txt` — allows public crawling
- `.nojekyll` — publishes the files as-is, without Jekyll

## Notes

The site does not set cookies or load analytics, fonts, or other third-party scripts. If that changes, update `privacy.html` in the same release. The privacy page does not claim the host keeps no technical logs.

There is no contact form. Mail goes to `hello@puzdev.com`.
