# CLAUDE.md

Project context for Claude Code. Read this first before making changes.

## Project

Editorial marketing site for **Sean Sajonia dela Cruz** — Iligan City wedding & events host, flagship of the **SPDC Group of Companies** (six sister brands). Built by Fazed Digital.

- **Stack:** Astro 5 (static) + React 19 islands + GSAP 3
- **Animation:** GSAP ScrollTrigger via `@gsap/react` `useGSAP()` for React; native Astro `<script>` blocks for one-off page animations
- **Styling:** Vanilla CSS with design tokens in `src/styles/global.css`. **No Tailwind, no UI library.** Don't add one.
- **Type:** Fraunces (variable serif) + Manrope + Italiana — loaded via Google Fonts in `global.css`
- **Aesthetic:** Modern Luxe — forest-black `#0E1410` + champagne gold `#C8A664` + bone `#F4EFE6`. Editorial magazine voice.

## Run / build

```bash
npm install
npm run dev      # Astro dev server, port 4380 (set in .claude/launch.json)
npm run build    # static output to dist/
npm run preview
```

Port 4380 will fall back if occupied. Don't change the launch.json port unless asked.

## Three hero concepts (don't merge them)

The site ships three swappable hero treatments, each on its own route. The downstream sections (About → Contact) are reused as-is.

| Route | Hero file | Direction |
| --- | --- | --- |
| `/` | `Hero.astro` | A · Editorial — three-column asymmetric |
| `/concept-2` | `HeroConceptB.astro` | B · Spotlight — centered theatrical |
| `/concept-3` | `HeroConceptC.astro` | C · Cinematic — fullscreen background |

A floating `ConceptSwitcher` pill is rendered on every page so the user can A/B/C compare. If you add a new concept, add it to `ConceptSwitcher.astro`'s `concepts` array and create a matching page.

## File layout

```
src/
├── components/
│   ├── react/        ← React islands. GSAP lives here for components that need refs/cleanup.
│   └── sections/     ← Astro sections. GSAP runs in <script> blocks for one-shot page animations.
├── layouts/Layout.astro
├── lib/data.ts       ← SINGLE SOURCE OF TRUTH for profile, brands, services, gallery, reviews, stats.
├── pages/            ← One file per route. Compose by importing sections.
└── styles/global.css ← Tokens, fonts, base. Don't add component CSS here.
```

## Conventions

- **Component CSS:** colocated in each `.astro` file's `<style>` block. Use `is:global` only when the styles must leak across components (e.g. `Marquee.astro`, the horizontal gallery overlay).
- **Data:** `src/lib/data.ts` is the only place to edit profile facts, brand list, services, reviews, stats. **Don't hardcode them in components.**
- **Imagery:** `public/images/sean-portrait.jpg` is the hero portrait. The hero `<img>` has an Unsplash `onerror` fallback so the page never breaks if the file is missing.
- **Gallery:** real event photos belong in `data.ts`'s `gallery` array. Current entries are Unsplash placeholders pending real plates.
- **Marquee:** use the shared `Marquee.astro` component. **Do not** inline marquee markup in heroes — that's how concept B and C briefly broke.
- **Fonts:** if you add headings, use `font-family: var(--font-display)` (Fraunces). Italic = `font-style: italic`. Avoid generic system fonts.
- **Easing:** use `var(--ease-luxe)` (`cubic-bezier(0.22, 1, 0.36, 1)`) for hover transitions for visual consistency.

## GSAP gotchas

- **Don't** use a `useGSAP()` scope set to an empty `<div>` ref — selectors like `.foo` find nothing. (We had this bug with the original `HeroReveal.tsx` — the file still exists but isn't imported. Delete-able.)
- **Do** prefer Astro `<script>` for hero entrance animations: `import gsap from 'gsap'`, run on `DOMContentLoaded`, target classes directly. See `Hero.astro` for the pattern.
- **Pinned horizontal gallery** in `HorizontalGallery.tsx` uses `containerAnimation` for plate parallax — the parent track tween **must** use `ease: 'none'` (1:1 scroll → position mapping).
- **ScrollTrigger.batch** in `RevealOnScroll.tsx` is the standard pattern for staggered fade-up reveals across sections.

## Marquee — full-bleed pattern

`Marquee.astro` uses the classic centered full-bleed trick:

```css
position: relative;
width: 100vw;
left: 50%;
margin-left: -50vw;
margin-right: -50vw;
```

Don't try to break out with `margin-left: calc(-1 * var(--pad))` — that only works when the parent has matching padding, which isn't always the case for siblings of the hero. The 100vw + 50% trick works regardless of parent.

## Responsive breakpoints

| Width | What changes |
| --- | --- |
| `≤980px` | Nav links tighten |
| `≤820px` | Hero stacks portrait-on-top, links collapse to brand + CTA |
| `≤600px` | Marquee gets tighter padding/gaps; brands grid → 1 column |
| `≤480px` | Brand sub-label hides; nav CTA shrinks |

## Profile facts

| Field | Value |
| --- | --- |
| Full name | Sean Sajonia dela Cruz |
| Role | Wedding & Events Host |
| Based | Iligan City, Philippines |
| Established | 1996 (birth-year stamp on the barong) |
| Hosting since | 2018 |
| Phone | 0952 644 4652 |
| Email | seanpreildelacruz@spdcgroupofcompanies.com |
| YouTube | youtube.com/c/SeandelaCruzOfficial |
| Following | ~80K (Facebook) |
| Recommend | 100% (9 reviews) |
| Cities hosted | 11 (PH + Singapore) |

## The SPDC house — six brands

Listed in `data.ts` `brands` and rendered in `Brands.astro`. Order matters (it's the catalog index).

1. **MSM** — Professional Host
2. **The Groom Squad** — Suit Gallery
3. **The Bride Squad** — Bridal Studio
4. **S&M** — Event Rentals
5. **GLAMCAM360°** — The Ultimate 360 Experience
6. **SPDC** — Group of Companies (parent)

## Don't

- Don't introduce Tailwind, styled-components, MUI, shadcn, or any other UI/styling lib.
- Don't replace Fraunces with a generic font (Inter, Roboto, system-ui) — the editorial feel depends on it.
- Don't merge or simplify the three hero concepts into one — they're an intentional A/B/C exploration the client is comparing.
- Don't add comments explaining what well-named code does. The codebase already follows this.
- Don't commit `node_modules`, `dist`, `.astro/`, `.env*`, or `.DS_Store` (covered by `.gitignore`).
- Don't push to `main` without confirmation from the user — confirm first.

## Deployment

Not yet wired. Vercel is the intended target (the Vercel MCP is loaded). When deploying, double-check that the FB CDN gallery URLs in `data.ts` are replaced with hosted assets (Sean's real photos in `public/images/`) — FB hotlinks are signed and expire.
