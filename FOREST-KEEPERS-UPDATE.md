# Forest Keepers — sixth portfolio project

Updated 2026-11-04. Prepared from the portfolio-deploy.zip supplied by Jenny Kim.

## Included

- Project 06 in the existing Work accordion.
- `/work/forest-keepers` case study, with English and Korean copy.
- A browser adaptation of the React Native / Expo game, using its original forest artwork, item illustrations, questions and sound files.
- Seedling Scout (5 items without hints), Woodland Ranger (15 with hints), Forest Guardian (24 with hints).
- Shuffled question decks, three hearts, immediate forest feedback, retry hints, success/game-over screens and mute controls.
- Six-project navigation loop: Find My Park → Aperture → PowerPause → Condo Connect → RE:WARDROBE → Forest Keepers → Find My Park.

The case study uses Jenny's stated project motivation and the actual implementation decisions from the prototype. It does not claim user research, child testing, or measured learning outcomes that have not taken place.

## Local development

```sh
npm ci
npm run dev
```

Open the Local address printed by Vite, then `/work/forest-keepers`.

## Build

```sh
npm run build
```

The `dist/` folder is the deployable site. The supplied deployment ZIP contains the CONTENTS of dist at its root (index.html, .htaccess, assets/, documents/, forest-keepers/, etc.).

## Existing production deployment

The source archive retains your existing `.github/workflows/deploy.yml` workflow (or the workflow filename already in this project). It builds on a push to `main` and uploads `dist/` to `public_html/` using existing GitHub FTP secrets.

This is now your original `jenny950124/portfolio-main` working folder with Forest Keepers already merged. Continue your existing workflow here: review the changes, commit, and push when you are ready to publish. Your original `.git` folder and deployment workflow have been preserved.

Alternatively, upload the CONTENTS of the deployment ZIP to your current web root using your normal hosting file manager/FTP process. Upload the files and their folders together, including the hidden `.htaccess` file. Do not upload the source ZIP or node_modules as the public website.

Direct case-study URLs use the existing `.htaccess` SPA fallback. `/#/work/forest-keepers` is also supported when your host does not apply rewrites.

## Verification performed

- TypeScript compilation and Vite production build.
- Real Chrome desktop and mobile checks (390px viewport).
- Six projects in Work, direct case-study navigation, and document title.
- 24 distinct questions through the playable demo to success.
- Three mistakes through game over.
- Korean language toggle and mobile horizontal-overflow check.
- No browser runtime errors in the tested flows.

Browser playback is subject to the browser's user-gesture/audio policy; all sounds are triggered by the visitor's clicks.

## Project section structure

The full portfolio is `portfolio-deploy/`. The sixth project lives under `src/components/projects/forest-keepers/` (CaseStudy.tsx, Demo.tsx, items.ts, styles.css). Shared portfolio layout, navigation and typography remain in their existing locations.

## Current working folder

Use this original `portfolio-deploy` folder for all further development and deployment. Forest Keepers is integrated into the same existing portfolio; no separate portfolio-projects working folder is needed.
