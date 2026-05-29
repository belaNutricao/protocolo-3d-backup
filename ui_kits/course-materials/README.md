# UI Kit — Course Materials

Recreations of the **Jejum Glicêmico 2D** document surfaces (the brand's
print/PDF course materials) as reusable React components, all built on the
canonical stylesheet `assets/bela-style.css`.

## Files
- `index.html` — live demo: a **cover**, a **content/schedule page**, and a
  **components showcase**, stacked as A4 pages (on-screen mode, like the real
  deliverables). Open this to see the kit assembled.
- `Components.jsx` — the component library, exported to `window`.

## Components
| Component | Purpose |
|---|---|
| `Page` / `PageHeader` / `PageFooter` | A4 page shell + centered logo header + "Isabela Clerot · Nutricionista" footer |
| `H1` | Heading with the droplet `.h1-mark` |
| `Pill` | Pills — default / `green` (live) / `ghost` |
| `Callout` | Tinted left-border callouts: `''` warn, `danger`, `info`, `safe` |
| `NumCard` / `Tip` | Numbered list card / big italic tip card |
| `ScheduleRow` | Day badge · time · lesson |
| `DietCard` | Color-coded diet plan (`azul`/`vermelha`/`verde`/`preta`) |
| `Stat` / `PullQuote` | Stat tile / italic pull-quote block |
| `Sticker` | Scalloped hero-claim stamp badge |
| `DropList` / `Drop` | Droplet-bulleted list / standalone droplet glyph |

## Notes
- These are **cosmetic** recreations for prototyping, not production logic.
- Asset paths are relative (`../../assets/…`); keep the kit two levels under the
  project root, or adjust the paths.
- The kit faithfully reproduces the existing design — it does not invent new layouts.
  For full real-world compositions, fork the root `*.html` deliverables.
