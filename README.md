# Polarys website

Static HTML and CSS site for [getpolarys.app](https://getpolarys.app), hosted with GitHub Pages. No build step or JavaScript is required.

## Preview locally

From this directory:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Check the homepage, privacy policy, and terms at desktop and phone widths.

## Editing

- `index.html`: homepage copy, app walkthrough, native expandable FAQs, and beta links.
- `site.css`: shared typography, colors, layouts, and responsive styles.
- `site.js`: opens FAQ answers when reached through an in-page link.
- `privacy.html` and `terms.html`: legal content, using the shared stylesheet.
- `assets/`: original app screenshots, app icon, and founder portrait.
- `CNAME`: existing custom domain for GitHub Pages.

Fonts are served locally from `assets/fonts/` under their included SIL Open Font Licenses, with system sans-serif fallbacks. All content and FAQ controls work without JavaScript.
