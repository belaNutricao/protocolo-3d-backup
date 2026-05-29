# Jejum Glicêmico 2D — Design System

Editorial-pink brand system for **Jejum Glicêmico 2D**, a Brazilian-Portuguese
type-2-diabetes health challenge created by nutritionist **Isabela Clerot ("Bela")**.
The system was extracted from the challenge's printed/PDF course materials (A4 portrait)
and packaged here so the same look & voice can be reused across new documents, decks,
landing pages, and other surfaces.

> **Scope note:** This design system is a *visual & voice* reference only. The persona,
> course, and claims described in the source material belong to that product — treat them
> as brand context, not as facts about whoever is using this system.

## What the brand is

- **Product:** "Desafio Jejum Glicêmico 2D" — a 7-day guided challenge promising
  "glicemia de 2 dígitos" (two-digit blood glucose), more energy, and life without
  fear of diabetes.
- **Author / face of brand:** Isabela Clerot, nutritionist. Warm, first-person,
  coach-like ("Oi! Eu sou a Bela…").
- **Audience:** Adults (skews 50+) managing or reversing type-2 diabetes. Readability
  on mobile and for older eyes is a hard requirement — note the large base type (18pt).
- **Deliverables in the source set:** Cronograma Oficial, 5 Aulas (lessons), 4 color-coded
  diet plans (Azul / Vermelha / Verde / Preta), Lista de Compras, Guia de Saúde Intestinal,
  Guia de Medicamentos, and a hub index page.

## Source files (in this project)

- `assets/bela-style.css` — the **complete** shared stylesheet (page shell, components, diet variants). The source of truth.
- `assets/bela-defs.svg` — SVG `<symbol>` defs: `#drop` and `#drop-outline` (the signature droplet glyph).
- `assets/logo.webp` — primary wordmark logo.
- `assets/bela-soft.jpg` — cut-out portrait of Bela on soft-pink (used in circular crops).
- The `*.html` files in the root are the live deliverables this system was lifted from — read them for real-world composition examples.

---

## CONTENT FUNDAMENTALS

**Language:** Brazilian Portuguese. **Voice:** warm, encouraging, first-person singular —
Bela speaks *to* the reader as a coach and ally. Lots of "eu te entrego", "estou aqui",
"vamos juntos".

- **Person:** First person ("eu", "minha jornada") + direct second person ("você", "te").
- **Gender:** Address the **mixed audience** (feminine + masculine). Use neutral or
  paired forms — "pronto(a)", "você não está sozinho(a)", "por conta própria" — never
  default to feminine-only.
- **Tone:** Empathetic and motivating, never clinical or cold. Acknowledges the reader's
  struggle ("Sei que a rotina é corrida…") then reframes it positively ("Solução: …").
- **Casing:** Sentence case for body & headings. ALL-CAPS reserved for eyebrows, pills,
  meal labels, and day badges (with wide letter-spacing).
- **Punctuation flourish:** Section/cover titles often end in a colored period —
  "Oficial**.**" — the period takes the accent pink.
- **Emoji:** **Not used** in the materials. Don't add them. (Source drafts in `scraps/`
  used some, but the finished design system does not.)
- **Numbers as hooks:** "glicemia de 2 dígitos", "em 7 dias", "mais de 1000 pessoas",
  percentage progress (14% → 100%). The "2D" in the name = "2 dígitos".
- **Structure pattern:** problem → empathy → "Solução:" → encouragement. Common in the
  "Erros Comuns" and tips sections.

**Sample copy:**
> "Oi! Eu sou a Bela, sua nutricionista, e estou aqui torcendo e junto com você para
> essa jornada de transformação!"
>
> "Você está pronto(a). Agora é só dar o primeiro passo dentro da sua cozinha."

---

## VISUAL FOUNDATIONS

**Overall vibe:** Editorial, soft, feminine-but-warm health magazine. Pink paper,
italic serif display, clean sans body, a signature water-droplet motif. Calm and
premium, not clinical.

### Color
- **Paper / background:** layered soft-pink gradient — `radial-gradient` pink glows in
  top-right & bottom-left over a `linear-gradient(#fff → #fef4f8 → #fce7ee)`. This is the
  page surface; never a flat white.
- **Accent:** hot magenta-pink `#E81C92` — used for the droplet, eyebrows, title accents,
  pills, buttons, numbers.
- **Burgundy:** `#7A1840` — deep secondary for stamp shadows, badge text, stat numbers.
- **Ink / body:** near-black `#0F0F0F` ink, mid-grey `#595959` body text.
- **Cards:** very light pink `--card-grad` `linear-gradient(180deg, #FDEFF4 → #FCE1EB)`.
- **Diet color codes:** Azul `#1E4FA8`, Vermelha `#C8324A`, Verde `#2E7D4A`, Preta `#0F0F0F`.
- **Semantic callouts:** warn `#FFF3CC`/`#C68F00`, danger `#FFD0D6`/`#C8324A`,
  info `#E0EEFB`/`#1E4FA8`, safe `#E2F2E7`/`#2E7D4A`.

### Type
- **Display:** **Newsreader**, *italic*, weight 400–500 — every heading, title, stat
  number, quote, day name, and diet name is italic Newsreader. This italic-serif display
  is the brand's single strongest signature.
- **Body / UI:** **Manrope**, weights 400–700 — body copy, eyebrows, pills, labels, buttons.
- **Scale (print pt):** cover title 46–72pt · h1 30–44pt · h2 26pt · h3 19pt ·
  lead 16pt · body 15pt · base 18pt. Big and legible by design (50+ audience).
- **Eyebrows / labels:** Manrope 600, uppercase, 0.14–0.24em letter-spacing, accent pink.

### The droplet motif
The water droplet (`#drop` symbol, path in `bela-defs.svg`) is the brand's icon. It appears
as: list bullets (`.drop-list` via CSS mask), the `.h1-mark` beside headings, checklist
checks, oversized translucent corner ornaments (`.corner-drop`), and the "br-brand" footer
mark. Reuse it instead of generic bullets/check icons.

### Shape, depth & layout
- **Corner radii:** cards 14px, pills/badges 999px (full), small chips/buttons 8–12px.
- **Cards:** soft pink gradient fill, no border *or* a 1px `--rule` (#E8D5DC) border;
  an accent variant adds a 4px left border in pink. Callouts always use a 4px colored
  left border + tinted bg.
- **Shadows:** soft and low — `0 6px 30px rgba(15,15,15,.12)` for on-screen page lift;
  stamps/stickers use layered `drop-shadow` (burgundy + pink). Print removes shadows.
- **Stickers/stamps:** scalloped circular "stamp" badge, rotated ~-10°, magenta fill with
  a dashed inner ring and a glossy shine — used for hero claims ("glicemia de 2 dígitos").
- **Layout:** A4 portrait, fixed margins (`--pad-x: 22mm`). Absolute-positioned header
  (centered logo) + footer ("Isabela Clerot · Nutricionista" / page number). Content lives
  in an absolutely-positioned `.page-body`. Grid/flex with `gap` everywhere inside.
- **Transparency/blur:** light translucent fills (`rgba(255,255,255,.4)`) on some cards;
  no heavy glassmorphism or blur.

### Motion & states
The deliverables are print/PDF first, so motion is minimal. The only interactive surface
(the hub `index.html`) uses gentle hover: `translateY(-2px)`, border turns accent pink,
bg lightens to white, `transition: .15s ease`. Keep hovers subtle; no bounces.

---

## ICONOGRAPHY

- **No icon font / library.** The brand's icon language is the **water droplet** — a single
  custom SVG path, supplied two ways in `assets/bela-defs.svg`: `#drop` (filled,
  `currentColor`) and `#drop-outline` (stroked). Inline `<svg><use href="#drop"/></svg>`
  or the CSS-mask data-URI baked into `.drop-list li::before`.
- **Checklist & bullets** all use the droplet, never check-marks or disc bullets.
- **Callout icons** are typographic — a bold "!" / "i" glyph inside a white circle, colored
  by severity (Manrope 700). Not icon-set glyphs.
- **Emoji & unicode icons:** not used. If a new icon is genuinely needed and no droplet
  variant fits, use a thin-stroke set (e.g. Lucide) sized to match, and flag it — but prefer
  the droplet.
- **Logo:** `assets/logo.webp` — "Jejum Glicêmico 2D" wordmark (italic script "Jejum",
  bold "Glicêmico", magenta droplet + "2D"). Centered in page headers at ~150px,
  ~200–230px on covers.

---

## INDEX — what's in this system

**Root tokens & foundations**
- `README.md` — this file.
- `colors_and_type.css` — portable CSS custom properties (colors + type) for new projects.
- `assets/bela-style.css` — full component stylesheet (the canonical source).
- `assets/bela-defs.svg` — droplet SVG symbols.
- `assets/logo.webp`, `assets/bela-soft.jpg` — brand imagery.

**Design System tab cards** — `preview/` (typography, color, spacing/shape, components).

**UI kit** — `ui_kits/course-materials/` — recreations of the brand's document surfaces
(cover, content page, diet plan, callouts) as reusable JSX components + an `index.html`.

**Live deliverables** (real examples to fork): `Cronograma Oficial.html`, `Aula 1–5*.html`,
`Dieta {Azul,Vermelha,Verde,Preta}.html`, `Lista de Compras.html`, `Guia *.html`, `index.html`.

**Fonts:** Newsreader & Manrope are loaded from Google Fonts (CDN) — see the `<link>` tags
in any deliverable's `<head>`. No local font files are bundled.

---

## SKILL.md
See `SKILL.md` — makes this folder usable as a downloadable Agent Skill in Claude Code.
