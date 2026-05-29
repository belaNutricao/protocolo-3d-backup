# Implementation Plan: Bela 2D Protocolo 3D on GitHub Pages

## Technical Context

- Project type: static HTML/CSS/assets.
- Runtime target: GitHub Pages from main branch root.
- Core files: `index.html`, `protocolo3d.html`, `Protocolo 3D.html`, `assets/lp-3d.css`, `assets/remote/*`.
- Verification: local Python static server + browser console + syntax/security checks + GitHub Pages URL check.

## Constitution Check

- Static-first: no bundler or server runtime introduced.
- Visual continuity: existing HTML/CSS preserved; changes are limited to canonical filename, local images, index card, and broken placeholder CTA.
- Browser quality: local server and browser console checks are required before publish.
- Public hygiene: run secret scans before push.

## Decisions

1. Keep both `Protocolo 3D.html` and canonical `protocolo3d.html`.
   Rationale: task names `protocolo3d.html`; original ZIP also had a titled file that may be referenced by humans.
2. Download remote Protocolo 3D campaign images into `assets/remote/`.
   Rationale: faster/reproducible GitHub Pages rendering and fewer external image failure points.
3. Replace empty `https://wa.me/` placeholder with internal `#inscricao` CTA.
   Rationale: avoids a broken public CTA while preserving conversion intent.
4. Publish from root on `main`.
   Rationale: simplest GitHub Pages static deployment for a new repository.

## Project Structure

```text
/
├── index.html
├── protocolo3d.html
├── Protocolo 3D.html
├── assets/
│   ├── lp-3d.css
│   ├── protocolo-3d-logo.png
│   └── remote/
├── uploads/
├── *.html supporting materials
├── DEPLOYMENT.md
└── .specify/
```

## Verification Plan

- Check HTML/CSS references for remote URLs and placeholder links.
- Run static server and browser console inspection.
- Run simple asset status checks for first-party files.
- Run syntax/security hygiene checks.
- Commit, create GitHub repo, push, enable GitHub Pages, then verify public URL.
