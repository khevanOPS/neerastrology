# Project Context

## Overview

This is a Vite + React + TypeScript single-page marketing site for Neer Astrology.

Primary app file:
- `src/App.tsx`

UI stack:
- React 19
- Vite 7
- TypeScript
- Tailwind CSS
- shadcn/ui components for `Button` and `Card`

## Current Site Structure

The page is currently composed in `src/App.tsx` with these main sections:
- Navigation
- Hero
- About
- Services
- Gallery
- Hindu Lunar Calendar 2026
- Contact
- Footer

The app uses a translation object in `src/App.tsx` and currently supports:
- English (`en`) as default
- French (`fr`)
- Hindi (`hi`)

## Language Switcher

The header uses a dropdown language switcher.

Current behavior:
- Only shows the selected language name: `English`, `French`, or `Hindi`
- Does not show the visible word `Language`
- Keeps an accessible `aria-label`

## Services

Current notable services include:
- Kundli Reading
- General Predictions (Janam Kundli)
- Yearly Predictions (Vaarshik Phal)
- Kundli Milan
- Matrimonial Services
- Naming by Birth Star
- Vastu Consultation
- Parenthood Journey
- Muhurta
- Special Prayers
- Personalised Talisman

### Recent service content changes

- `General Predictions` now includes:
  - `Lucky Numbers`
  - `Personalised car plate number`
  - `favorable colors`
- These changes were also translated into French and Hindi.

- `Yearly Predictions (Vaarshik Phal)` was added in all three languages.

- `Kundli Milan` has a long multi-paragraph description in the modal.
- The modal layout was adjusted so the image stays fixed and does not stretch badly on long content.

## Images / Public Assets

Important custom assets currently in use:

- About section second portrait:
  - `public/1edited_photo_v2.jpg`

- Parenthood Journey service image:
  - `public/choice-child.jpg`

- Extra Special Pujas gallery image:
  - `public/special-puja-chart.jpg`

Other key service/gallery assets remain under `public/`.

## About Section

The About section currently uses:
- `public/astrologer-real.jpg`
- `public/1edited_photo_v2.jpg`

The header branding text `Neer Astrology` has reduced spacing compared with the earlier version.

## Hero / Contact Messaging

The consultation wording was updated in all languages to:
- `Online consultation by WhatsApp & Email`

This appears in:
- Hero button
- Contact card heading

## Gallery

The gallery includes the original visual set plus an additional Special Pujas reference image:
- `public/special-puja-chart.jpg`

Gallery images open in a fullscreen lightbox.

## Deployment

This folder is linked to a Vercel project:
- Project name: `app-5`

Local Vercel link file:
- `.vercel/project.json`

Vercel Authentication / SSO protection was disabled at the project level.

Known public project URLs:
- `https://app-5-lake.vercel.app`
- `https://app-5-akhileshmathoora-4647s-projects.vercel.app`

A direct deployment URL was also created during the latest redeploy:
- `https://app-5-f7nd4vqbb-akhileshmathoora-4647s-projects.vercel.app`

## Build / Run

Verified locally:
- `npm run build` passes

Useful commands:
```bash
npm run dev
npm run build
vercel
vercel --prod
```

## Notes For Future Changes

- Most business/content edits should be made directly in `src/App.tsx`.
- If a new language is added, extend the `Language` type and the `translations` object together.
- Service modal content supports both single strings and paragraph arrays.
- When swapping images, place the file in `public/` and reference it with a root path like `/filename.jpg`.
