# Bela 2D Protocolo 3D Constitution

## Core Principles

### I. Static-first publishing
The project must run as static files on GitHub Pages without build steps, backend dependencies, or runtime secrets.

### II. Visual continuity
The editorial Bela/Jejum Glicêmico aesthetic is part of the product. Changes must preserve the current typography, colors, spacing, premium health positioning, and warm PT-BR voice.

### III. Performance and reliability
Critical landing assets should be local where feasible, image loading should avoid unnecessary layout shift, and public pages must not depend on fragile placeholder links.

### IV. Browser quality gate
Before publishing, the landing page must be served locally and checked for JavaScript errors, failed static assets, and relevant console warnings.

### V. Safe public repository hygiene
The repository must avoid secrets, accidental private tokens, and broken deployment configuration. GitHub Pages must be reproducible from the main branch.

## Development Workflow
- Use Spec-Driven Development artifacts for traceability.
- Keep the project static and dependency-light.
- Verify locally before committing and publishing.
- Document public URL and deployment steps after publishing.

## Governance
This constitution supersedes ad-hoc choices. Any future change that weakens visual continuity, static deployability, or browser reliability needs explicit review.
