# Serenity Spa — website files

Static site. No build step. Every file sits at the repo root.

## Deploy on GitHub Pages

1. Create a new public repository (e.g. `serenity-spa`).
2. Upload **every file in this folder** to the repository root — do not put them in a subfolder. On github.com: **Add file → Upload files**, drag them all in, then **Commit changes**.
3. Go to **Settings → Pages**.
4. Under *Build and deployment* → *Source*, choose **Deploy from a branch**.
5. Branch: **main**, folder: **/ (root)**. Click **Save**.
6. Wait 1–2 minutes. Your site appears at `https://YOUR-USERNAME.github.io/serenity-spa/`.

To use a custom domain later: Settings → Pages → Custom domain, then update your DNS with your registrar.

## After it is live

Send the live URL back and the following need updating to the real address
(they currently use the placeholder `https://www.serenityspanc.com`):

- `<link rel="canonical">` in every HTML file
- `og:url` and `og:image` in every HTML file
- every `url` / `@id` / `item` in the JSON-LD schema blocks
- every `<loc>` in `sitemap.xml`
- the `Sitemap:` line in `robots.txt`

Then submit `sitemap.xml` in Google Search Console.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home |
| `services.html` | All services + packages |
| `outcomes.html` | Client photos and reviews |
| `ultrasonic-cavitation.html` | Service page |
| `vacuum-butt-therapy.html` | Service page |
| `red-light-therapy-laser-lipo.html` | Service page |
| `teeth-whitening.html` | Service page |
| `foot-detox-massage.html` | Service page |
| `sauna-bed-detox-wrap.html` | Service page |
| `face-sculpting.html` | Service page |
| `back-massage.html` | Service page |
| `ems-body-sculpting.html` | Service page |
| `sitemap.xml`, `robots.txt` | SEO |
| `styles.css`, `script.js` | Shared styling and menu behaviour |

## Editing later

- Phone, address and hours appear in every page's footer and in the JSON-LD block at the top of each file. If any of them change, they must be changed in **all** files so search engines see one consistent business listing.
- Prices live in three places per service: the service page, the card on `index.html`, and the card on `services.html`.
- The stylesheet is linked as `styles.css?v=8`. If you edit `styles.css` and the change does not show up, raise that number in every HTML file to force browsers to reload it.

## Still outstanding

- EMS Weightloss / Toning description was written from scratch — review it for accuracy.
- Weightloss Package Plan is listed at **$1,200** (the source said $1,200.06).
- Cancellation / deposit policy FAQ on `index.html` is still a placeholder.
