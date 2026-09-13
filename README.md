# CityRideTaxi — Landing Page

Production-ready static landing page built from the supplied design files
(`DESIGN.md`, `code.html`, `screen.png`). No build step, no framework, no CDN
runtime — open `index.html` or drop the folder on any static host.

## Run it

```bash
npx serve .          # or: python -m http.server 8000
```

Opening `index.html` directly over `file://` works too.

## Structure

```
index.html              All 15 sections, SEO head, JSON-LD (TaxiService + FAQPage)
assets/css/styles.css   Design tokens + components + responsive layers
assets/js/main.js       Drawer, tabs, accordion, booking form, reveal, back-to-top
assets/img/             Logo mark, full lockup, hero photo
site.webmanifest        PWA metadata
robots.txt, sitemap.xml Crawl directives
DESIGN.md, code.html    Original design files (source of truth, unmodified)
screen.png              Original reference screenshot
```

## Design system

Every colour, type step, radius and spacing value in `styles.css` comes from the
`DESIGN.md` front-matter, exposed as CSS custom properties on `:root`. The
typography scale is `.t-display` / `.t-headline-lg` / `.t-headline-md` /
`.t-body-*` / `.t-label-*` / `.t-telemetry`, matching the token names exactly.

Elevation follows the four levels defined in DESIGN.md (`--shadow-1`…`--shadow-3`).

## Sections

Hero + booking card · Trust features · Service tiers · App experience · Fare
transparency · Live tracking (dark) · Safety · Driver acquisition · Fleet
partners · App download · Coverage hubs · Testimonials · FAQ · Final CTA · Footer.

## Responsive behaviour

| Breakpoint | Layout |
|---|---|
| `< 640px` | Single column, 16px margins, bottom nav docked, drawer navigation |
| `640–1023px` | Two-up card grids, inline button pairs |
| `≥ 1024px` | 12-column structure, 24px gutters, 40px margins; header nav replaces the drawer, bottom nav hides, hero and several sections become two-column splits |

## What changed from the Stitch export

The export in `code.html` is a mobile-only prototype. This build keeps its
design and copy verbatim while making it shippable:

- **Real CSS** instead of the `cdn.tailwindcss.com` script, which is explicitly
  not for production and blocks first paint.
- **Local assets.** The hero photo and logo were served from expiring
  `googleusercontent.com` URLs; they are now in `assets/img/`, with the logo
  redrawn as SVG so it stays crisp and doubles as the favicon.
- **Working download tabs.** `switchAppTab('apk')` in the export fell through to
  the driver branch, so the third tab did nothing. All three tabs now swap
  heading, badge, description, package name, ABI line, size and CTA, with
  arrow-key support and correct `aria-selected`.
- **Desktop layouts.** The export had no breakpoints above `sm:`.
- **Accessibility.** Skip link, labelled form fields, focus-visible rings,
  focus trap and Escape handling in the drawer, `aria-expanded` on the
  accordion, `role="tablist"` semantics, decorative icons hidden from AT.
- **SEO.** Title, description, canonical, Open Graph, Twitter card, and two
  JSON-LD blocks. The FAQ markup mirrors the on-page accordion.
- **`alert()` calls replaced** with a non-blocking toast; the SHA-256 button
  copies the checksum to the clipboard.
- **Booking form works** — validates the destination, supports the browser
  geolocation pin, and reports back through the toast.
- **Reveal animations degrade safely.** The hidden state is only applied when
  scripting and motion are both available, and a 2.5s timer reveals everything
  if the observer never fires, so content can never be stranded invisible.

## Before going live

These are placeholders in the design and need real values:

1. `#apk-download` — point at the real APK URL and remove the `preventDefault`
   handler in `main.js`; same for the Play Store / App Store links.
2. The SHA-256 constant in `main.js` is the empty-string digest from the mock.
3. Swap `https://www.cityridetaxi.in/` in the canonical, OG and JSON-LD tags for
   the production domain.
4. `assets/img/hero-taxi.jpg` is 512×286 — fine on mobile, slightly soft on
   large screens. Replace with a ~1600px wide version (and add a WebP source)
   when you have the original.
5. The QR tile is an icon placeholder; generate a real code pointing at the
   install page.
6. Footer and nav links are in-page anchors; wire them to real routes as those
   pages exist.
