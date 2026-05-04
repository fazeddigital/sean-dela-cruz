# Sean dela Cruz — Wedding & Events Host

A bespoke editorial site for **Sean Sajonia dela Cruz**, Iligan City's premier wedding and events host. Built for the **SPDC Group of Companies** — a six-brand house spanning hosting, bridal, menswear, rentals, 360° video, and the parent group.

> _"For an organized, fun-filled and memorable event — booked across the Philippines and Singapore."_

---

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | [Astro 5](https://astro.build) (static, with React islands) |
| UI islands | React 19 |
| Animation | [GSAP 3](https://gsap.com) + ScrollTrigger via `@gsap/react` |
| Type | [Fraunces](https://fonts.google.com/specimen/Fraunces) (variable serif) + Manrope + Italiana |
| Styling | Vanilla CSS + design tokens (no Tailwind) |
| Deploy target | Vercel (recommended) |

---

## Three Hero Concepts

The site ships with three swappable hero treatments. A floating pill at the bottom of every page lets you A/B/C compare in the browser.

| ID | Route | Direction |
| --- | --- | --- |
| **A — Editorial** | `/` | Asymmetric three-column composition: metadata rail · oversized stacked headline · portrait card. Magazine-spread feel. |
| **B — Spotlight** | `/concept-2` | Centered, theatrical. Sean's portrait spotlit dead-center; "SEAN" wraps above, italic gold "dela Cruz" wraps below. Slow rotating conic rays behind. |
| **C — Cinematic** | `/concept-3` | Sean's photo fills the viewport. Editorial gradient + film grain overlay, decorative gold frame, big bottom-left typography, breathing zoom. |

All three share: Modern Luxe palette, Fraunces type, full-bleed cities marquee, and identical downstream sections (About, Services, Stats, Gallery, Reviews, Brands, Groom Squad, Contact).

---

## Page Structure

```
Hero (A | B | C)
   ↓
Cities Marquee   ← infinite italic ticker, full-bleed
About            ← Chapter I — pull quote + facts
Services         ← Chapter II — numbered list, hover wash
Stats            ← animated counters: 80K · 100% · 11 · 6
Gallery          ← Chapter III — pinned horizontal scroll plates
Reviews          ← Chapter IV — testimonial cards
Brands           ← The House of SPDC — 6-brand catalog
The Groom Squad  ← featured cross-promo with TGS monogram
Contact          ← Chapter V — direct line, email, oversized booking CTA
Footer
```

---

## The House of SPDC

Sean's full brand portfolio is featured in the **Brands** section:

1. **MSM** — Professional Host (the flagship)
2. **The Groom Squad** — Bespoke Suit Gallery (Tipanoy, Iligan)
3. **The Bride Squad** — Bridal Studio
4. **S&M** — Event Rentals
5. **GLAMCAM360°** — The Ultimate 360° Experience
6. **SPDC** — Group of Companies (parent)

---

## Local Development

```bash
# install
npm install

# dev server (defaults to port 4380 via .claude/launch.json)
npm run dev

# production build
npm run build

# preview build
npm run preview
```

Astro will fall back to the next free port if 4380 is in use.

---

## Project Structure

```
src/
├── components/
│   ├── react/                     ← React islands (GSAP-powered)
│   │   ├── HorizontalGallery.tsx  ← pinned plate scroller
│   │   ├── RevealOnScroll.tsx     ← ScrollTrigger.batch wrapper
│   │   └── Stats.tsx              ← counter tweens
│   └── sections/                  ← Astro sections
│       ├── Hero.astro             ← Concept A
│       ├── HeroConceptB.astro     ← Concept B
│       ├── HeroConceptC.astro     ← Concept C
│       ├── Marquee.astro          ← shared full-bleed cities ticker
│       ├── ConceptSwitcher.astro  ← floating A/B/C pill
│       └── …                      ← About, Services, Brands, etc.
├── layouts/Layout.astro
├── lib/data.ts                    ← profile, brands, services, gallery
├── pages/
│   ├── index.astro                ← Concept A
│   ├── concept-2.astro            ← Concept B
│   └── concept-3.astro            ← Concept C
└── styles/global.css              ← design tokens & base styles
```

---

## Design Tokens

Defined in `src/styles/global.css`:

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#0E1410` | body background (forest-black) |
| `--surface` | `#131B16` | cards, marquee strip |
| `--bone` | `#F4EFE6` | primary text |
| `--gold` | `#C8A664` | rules, accents, CTAs |
| `--gold-bright` | `#E2C285` | hover state |
| `--font-display` | Fraunces | headlines, italics |
| `--font-body` | Manrope | body copy |
| `--ease-luxe` | `cubic-bezier(0.22, 1, 0.36, 1)` | universal motion ease |

---

## Replacing Stand-In Imagery

The hero portrait reads from `public/images/sean-portrait.jpg`. Drop a new file at that path to swap. The gallery uses placeholder Unsplash photography in `src/lib/data.ts` — replace the `gallery` array with Sean's real event plates when delivered.

---

## Credits

- **Subject:** Sean Sajonia dela Cruz
- **House:** SPDC Group of Companies
- **Build:** [Fazed Digital](https://github.com/fazeddigital)
