---
name: jejum-glicemico-2d-design
description: Use this skill to generate well-branded interfaces and assets for Jejum Glicêmico 2D (Isabela Clerot's type-2-diabetes health challenge), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, the droplet motif, assets, and UI-kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files
(`colors_and_type.css`, `assets/bela-style.css`, `assets/bela-defs.svg`, the `preview/`
cards, and `ui_kits/course-materials/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, documents), copy the
assets out and create static HTML files for the user to view — load Newsreader + Manrope
from Google Fonts, link `assets/bela-style.css`, and inline the droplet `<symbol>` defs
from `assets/bela-defs.svg`. If working on production code, copy assets and read the rules
here to become an expert in designing with this brand.

Key rules to honor:
- **Voice:** warm, first-person Brazilian Portuguese; address the **mixed audience** with
  paired forms ("pronto(a)"), never feminine-only. No emoji.
- **Type:** Newsreader *italic* for all display/headings; Manrope for body/UI; set large
  (15–18pt base) for a 50+ audience.
- **Color:** soft-pink layered page background, magenta `#E81C92` accent, burgundy `#7A1840`.
- **Motif:** the water droplet is the icon system — use it for bullets, checks, ornaments.

If the user invokes this skill without other guidance, ask what they want to build, ask a
few questions, and act as an expert designer who outputs HTML artifacts _or_ production
code depending on the need.
