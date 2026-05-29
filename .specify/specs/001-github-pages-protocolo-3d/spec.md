# Feature Spec: Bela 2D Protocolo 3D on GitHub Pages

## User Stories

### US1 — Open Protocolo 3D landing page (P1)
As a visitor, I can open `protocolo3d.html` from GitHub Pages and see the Protocolo 3D landing page with the intended Bela/3D aesthetic.

Acceptance:
- Given the site is published, when I visit `/protocolo3d.html`, then the landing page loads without JavaScript errors.
- Given the page loads, when I scroll, then reveal animations, breadcrumb chips, progress bar, countdown, and section CTAs work.

### US2 — Browse supporting materials (P2)
As a visitor, I can open the index page and access the Protocolo 3D landing page plus the existing course/support materials.

Acceptance:
- Given I visit `/`, when the hub opens, then it links prominently to `protocolo3d.html`.
- Existing material links remain available.

### US3 — Public repository/deployment handoff (P1)
As Luca, I can inspect the GitHub repository and the GitHub Pages deployment URL.

Acceptance:
- The project has a Git repository with a clean main branch.
- A GitHub repository exists under Luca007.
- GitHub Pages is enabled from main/root.
- Documentation states how to open and redeploy the site.

## Functional Requirements

- FR-001: Provide a canonical `protocolo3d.html` file.
- FR-002: Preserve `Protocolo 3D.html` for compatibility with the original ZIP contents.
- FR-003: Localize Protocolo 3D remote campaign images into `assets/remote/` where feasible.
- FR-004: Ensure the index page links to the canonical landing page.
- FR-005: Avoid broken placeholder CTA links.
- FR-006: Include deployment documentation.
- FR-007: Verify browser console has zero relevant errors/warnings before publishing.

## Success Criteria

- SC-001: `/protocolo3d.html` returns HTTP 200 locally and on GitHub Pages.
- SC-002: Local browser console reports zero JavaScript errors and zero relevant warnings for `protocolo3d.html`.
- SC-003: Static asset requests for first-party files return HTTP 200.
- SC-004: GitHub Pages reports a public URL after deployment.

## Assumptions

- Public GitHub Pages repository is acceptable because the task explicitly asks to create a GitHub repo and publish.
- Google Fonts CDN usage is acceptable; campaign imagery should be local for reliability/performance.
- No payment checkout URL or WhatsApp number was provided, so the floating placeholder CTA should route internally to the inscription section rather than to an empty external URL.
