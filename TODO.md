# 1Ghalon Landing — To do

_Last updated: 2026-10-22_

Download landing page for 1Ghalon, a mobile app that shows fuel prices (from CediRates) and directions to nearby fuel stations in Ghana. It is a single-page Next.js 16 + Tailwind CSS 4 site set up for Vercel; there has been no work since 2026-01-08.

## Done
- Started from the HeyU landing template (upstream `alnahian2003/heyu`, 2020–2021)
- Customised it for 1Ghalon with new colours, copy and images; marked v1.0 in Nov 2025, then removed the language switcher and fixed the footer
- Rebuilt as a Next.js app and removed the legacy static code (Jan 2026)
- Single page with hero and canvas animation, features (directions, NPA news), team, info and download sections
- Download links to TestFlight (iOS) and Google Play (`com.achendo.one_ghalon`)
- Page title, description, OpenGraph and Twitter metadata in `app/layout.tsx`
- Vercel deploy fixes: app folders moved to the repo root, `engines.node >=20`, cache-clearing rebuild (Jan 2026)

## To do
- [ ] Point the App Store badge at the App Store listing once the iOS app is out of TestFlight, and update the "Beta Access" copy to match
- [ ] Add a social preview image to the metadata (the Twitter card is `summary_large_image` but no image is set); `public/preview.png` is available and unused
- [ ] Wire `public/favicon/` (apple-touch-icon, Android icons, `site.webmanifest`) into the layout metadata; only `app/favicon.ico` is used today
- [ ] Add `aria-label`s to the icon-only menu, close and scroll-to-top buttons in `app/page.tsx`
- [ ] Confirm the support email: the page says hi@achendo.com, while the Achendo site uses hello@achendo.agency
- [ ] Remove unused files: `components/hero.tsx`, `public/avatar1-3.jpg` and the default Next.js SVGs (`file`, `globe`, `next`, `vercel`, `window`)
- [ ] Replace the stock create-next-app `README.md` with project notes and deploy steps

## Notes
- Branch `main`, in sync with `origin/main`; working tree clean. Last commit 2026-01-08.
- The repo also has an `upstream` remote pointing to the original HeyU template.
