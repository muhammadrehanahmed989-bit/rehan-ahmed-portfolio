# MASTER PROMPT — Muhammad Rehan Ahmed · Luxury Portfolio

Build a single-page, luxury, glassmorphism portfolio website for **Muhammad Rehan Ahmed** — a Digital Marketing Specialist, AI Creator & Creative Developer based in **Faisalabad, Pakistan**, working remotely worldwide. Contact email: **muhammadrehanahmed989@gmail.com**.

The website must feel like **Apple × Linear × Framer × Stripe × Raycast** — premium, cinematic, minimal, AI-powered.

---

## 1. Tech Stack
- **React 18 + Vite 5 + TypeScript 5**
- **Tailwind CSS v3** with `tailwindcss-animate`
- **shadcn/ui** primitives
- **framer-motion** for all animations
- **lucide-react** for icons
- Contact form powered by **FormSubmit AJAX** (no backend) — messages land directly in Rehan's Gmail.
- All routing single-page (react-router); one main route `/` in `src/pages/Index.tsx`.

---

## 2. Color Scheme (light luxury theme)
All colors are defined as HSL CSS variables in `src/index.css` and mapped in `tailwind.config.ts`.

| Token | HSL | Purpose |
|---|---|---|
| `--background` | `220 40% 99%` | Base white with cool tint |
| `--background-2` | `214 32% 96%` | Secondary surface |
| `--foreground` | `250 30% 18%` | Soft indigo-charcoal text |
| `--primary` | `258 90% 66%` | Violet 500 |
| `--secondary` | `199 89% 60%` | Sky blue |
| `--accent` | `187 85% 53%` | Cyan |
| `--muted-foreground` | `245 18% 46%` | Indigo-tinted muted text |
| `--pink` | `330 84% 66%` | |
| `--purple` | `271 91% 70%` | |
| `--sky` | `205 92% 68%` | |
| `--cyan` | `187 85% 53%` | |
| `--radius` | `2.25rem` | Large luxury border-radius |

**Gradients:**
- `--gradient-text` — violet → pink → sky (used on all highlighted headline words)
- `--gradient-brand` — violet → indigo → sky → cyan (CTAs, dots, badges)
- `--gradient-soft` — pastel purple → sky → cyan (soft backdrops)
- `--gradient-border` — animated pastel border for `.glass-border-glow`

**Shadows:** `--shadow-glow`, `--shadow-card`, `--shadow-float` — all violet/sky tinted.

**Body background:** three fixed radial gradients (top-left purple, top-right sky, bottom pink) so every section sits on a soft aurora wash.

---

## 3. Typography
- **Display / headings:** `Fraunces` (fallback `Cormorant Garamond`) — serif, luxury, `-0.02em` tracking, optical sizing.
- **Body / UI:** `Inter`.
- **Mono / eyebrows:** `JetBrains Mono` — uppercase with `0.2em` letter-spacing.
- Utility classes: `.font-display`, `.font-mono`, `.gradient-text`, `.text-balance`.

---

## 4. Global Utilities & Effects (index.css)
- `.glass` — 75% white gradient + 24px blur + saturate(180%) + soft inner highlight.
- `.glass-strong` — 90% white, 32px blur, stronger float shadow.
- `.glass-border-glow` — animated pastel gradient border via masked `::before`.
- `.grid-overlay` — faint 64px grid, masked with radial fade.
- `.vignette-top` — soft white radial fade at page top.
- `.magnetic-btn` — spring hover lift + scale.

**Keyframes:** `float-slow`, `blob`, `aurora`, `glow-pulse`, `ring-spin`, `ring-spin-rev`, `orbit`, `particle`, `shimmer`.

**Reusable animations:** `.animate-float`, `.animate-blob`, `.animate-aurora`, `.animate-glow-pulse`, `.animate-ring-spin`, `.animate-ring-spin-rev`, `.animate-shimmer`.

---

## 5. Global Layers
- **`<Background />`** — fixed `-z-10`. Layers: 4 aurora radial gradients, 4 giant blurred blobs (purple/sky/pink/cyan) with `blob` animation, subtle grid overlay, top vignette, ~26 rising colored particles.
- **`<MouseSpotlight />`** — fixed `z-40`, `pointer-events-none`, follows cursor with a 360px violet+sky radial spotlight in `plus-lighter` blend mode. Disabled on touch devices.
- **`<Nav />`** — floating glass pill nav, centered top, links to every section anchor.

---

## 6. Section Order & Layout
All sections use a shared `<Section>` wrapper with an optional eyebrow chip, display headline (with one gradient keyword), and kicker line. `py-24 sm:py-32`, container-based.

### 6.1 HERO (`#home`) — Bento Dashboard
Two-column: `minmax(0,600px) 1fr`, `gap-14 lg:gap-20`.

**LEFT (content, max 600px):**
- Small glass pill: `✨ CRAFTING SIGNATURE DIGITAL EXPERIENCES`
- Huge Fraunces headline (2.75rem mobile → 5rem desktop):
  - "Building" / "**AI-powered** brands" (gradient on "AI-powered") / "that convert."
- Description (3–4 lines) introducing Rehan — AI automation, Meta/Google Ads, product design.
- Two CTAs: gradient-filled **"Explore my work"** + glass **"Start a project"**.
- Skill chips row: Meta Ads · Google Ads · AI Automation · UI / UX · React · Brand Systems.

**RIGHT (Bento grid, max 560px):**
- 2-column glassmorphism grid, mouse-parallax 3D tilt (`rotateX/Y` up to 3°).
- Radial purple + sky glow behind the whole grid.
- **Profile card (col-span-2):** portrait (`src/assets/portrait.png`) with gradient halo + white ring, "AVAILABLE" badge with pulsing emerald dot, name "**Rehan** Ahmed" (gradient on Rehan), mono line "AI · Ads · Product", and a **row of 5 colorful glassy circular social icons**: Instagram (#E1306C), LinkedIn (#0A66C2), GitHub (#111827), Figma (#A259FF), Email (#EA4335) — each with `linear-gradient(135deg, color, color+cc)`, backdrop blur, white ring, hover lift + scale.
- **Four feature cards** (2×2 below profile): Meta Ads (blue), AI Automation (violet), UI/UX (pink), React (cyan). Each: soft-tinted icon square, display title, one-line description.
- Every card: `28px` radius, conic-gradient inner glow that intensifies on hover, `float-slow` staggered timing, spring hover lift, animated border glow.

**Mobile order:** Headline → description → CTAs → chips → Profile card → 4 feature cards stacked full-width.

### 6.2 ABOUT (`#about`) — Orbiting Pillars
Two-column: text block + circular orbit visual.
- Left: 2 paragraphs about hybrid of strategy, art & code, plus a row of glass skill pills.
- Right: circular canvas with **3 concentric rotating rings** (purple / sky / pink, spinning in alternating directions), central floating glass badge "**Rehan** Ahmed · Operator", and **4 pillar cards orbiting** around it via `orbit` keyframe (radius `min(180px, 34vw)`, 34s duration, 90° offsets): **Growth**, **Design**, **AI**, **Build** — each a small glass card with tinted icon.
- Entrance: spring scale-in for center, staggered pop-in for orbiting cards.

### 6.3 SKILLS (`#skills`) — Bento Grid
- Eyebrow "Skills", headline "An **operating system** for modern brands."
- 2/3/4-column responsive grid of 8 glass cards: Meta Ads 98%, Google Ads 94%, Creative Direction 94%, UI/UX 92%, AI Workflows 90%, React & TS 88%, Copywriting 86%, Analytics 90%.
- Each card: tinted icon square, name, mono `X% mastery`, animated horizontal progress bar filling from 0 → level with per-skill gradient.

### 6.4 CERTIFICATES (`#certificates`) — Auto Cross-Fade Slideshow
- Two-column: large glass card with 4:3 slideshow + text details.
- Auto-advances every 4.5s using `AnimatePresence` (fade + scale + y-shift, 0.9s ease).
- Dots at bottom + tab pills below for direct jump.
- 4 credentials:
  1. **AI Fundamentals** — Microsoft Learn (2024)
  2. **Graphic Designing** — Pixel Nexus Solutions (2020)
  3. **Digital Marketing** — Saylani Mass Training (2020)
  4. **Social Media Certification** — HubSpot Academy (2023)

### 6.5 JOURNEY (`#journey`) — Vertical Timeline
- Center vertical gradient line (purple → sky → transparent), alternating cards left/right on desktop, stacked on mobile.
- 5 milestones (2019 → 2026): Started with digital branding → Scaled first 7-figure funnel → Went all-in on AI → Meta Ads certified specialist → Full-stack creative operator.
- Each card: gradient icon square, year (mono), title (display), description; connected by glowing gradient dot on the line.

### 6.6 WORK (`#work`) — Signature Projects + Case-Study Modals
- 1/2/3-column grid of 8 project cards, floating with staggered timing.
- Each card: 16:10 media (image or autoplay muted-loop video), floating tag pill top-left, colored halo glow, arrow button that opens a **liquid-glass case-study modal**.
- Modal (`max-w-3xl`, 90vh scrollable): backdrop blur-xl, spring scale-in, ESC/backdrop/close-button dismiss; body scroll locked. Shows media, title, description, 3-metric grid (Client · Role · Timeline), Challenge, Solution, and Results as a checkmark list, ending with a "Start a project like this" CTA to `#contact`.
- Projects: **Noor Apparel** (Dubai, Meta Ads, 4.6× ROAS), **Bloom Café** (Faisalabad, Social), **Pulse Analytics** (SaaS UI), **Halo Studio** (Branding), **Vertex Fitness** (Web/Growth), **Lumen Coffee** (Motion ad, video), **Aurora AI** (Product film, video), **Nimbus AI** (Brand motion, video).

### 6.7 TESTIMONIALS (`#feedback`) — Social Feedback
- Grid of 8+ international client testimonials from **US, UAE, Canada, UK, Australia, Germany, Saudi Arabia**, etc.
- Each glass card: `randomuser.me` avatar, name, role/company, country + flag emoji, 5-star rating, quote about Rehan's professionalism and impact on their business.
- Below, a **"Leave feedback" form** that POSTs to the same FormSubmit endpoint so new client comments arrive in Gmail for manual approval before being added.

### 6.8 CONTACT (`#contact`) — Functional Form
- Two-column: left "Direct line" glass card, right full contact form.
- **Left card:** gradient mail icon, email link `muhammadrehanahmed989@gmail.com` in gradient text, location `📍 Faisalabad, Pakistan · Remote worldwide`, and a 3×2 grid of social links (GitHub `muhammadrehanahmed989-bit`, MS Learn `rehanahmad-1241`, LinkedIn, Instagram, Figma, Email).
- **Right form:** Name, Email, Project select (Meta Ads system / Google Ads system / AI creative pipeline / UI/UX & web build / Brand strategy), Vision textarea. Hidden `_honey` honeypot. Submits JSON to `https://formsubmit.co/ajax/muhammadrehanahmed989@gmail.com` with `_subject`, `_template: "table"`, `_captcha: "false"`. Shows loading spinner, success state, and toast notifications. Delivers straight to Gmail — no third-party storage.

### 6.9 FOOTER
- Minimal glass strip with name/logo mark, small nav echo, and © line.

---

## 7. Animation Rules
- Use **framer-motion** everywhere; prefer CSS `transform` over layout animations.
- Global spring: `{ type: "spring", stiffness: 120, damping: 18, mass: 0.9 }`.
- Standard entrance: `fadeUp` variant — `opacity 0 → 1`, `y 28 → 0` on `whileInView`, `viewport={{ once: true, margin: "-100px" }}`, staggered children.
- `<Floaty>` helper wraps content in a gentle vertical float (amount/duration/delay). Respects `useReducedMotion()`.
- Every section must feel **alive but not distracting**: soft floating, hover lifts, border-glow reveals, gradient shimmers — never bouncy or aggressive.
- Target **60 FPS**; avoid heavy blur stacking on mobile.

---

## 8. Head / SEO (index.html)
- `<title>` and `<meta name="description">` reflect "Muhammad Rehan Ahmed — Digital Marketing Specialist, AI Creator & Creative Developer".
- Fonts loaded from Google Fonts: Fraunces, Cormorant Garamond, Inter, JetBrains Mono.
- Matching `og:title`, `og:description`, `og:type`, `twitter:card`.

---

## 9. File Structure
```
src/
  pages/Index.tsx          # All sections composed here
  components/
    Nav.tsx                # Floating glass nav
    NavLink.tsx
    Background.tsx         # Aurora, blobs, grid, particles
    MouseSpotlight.tsx     # Cursor-following radial glow
  assets/
    portrait.png           # Hero portrait
    certs/                 # 4 certificate images
    work/                  # 5 project images + 3 mp4s
  index.css                # Design system + keyframes + utilities
tailwind.config.ts         # Semantic tokens, radius, fonts
index.html                 # Fonts, meta, title
index.txt                  # Code map / edit cheat-sheet
```

---

## 10. Content & Voice
- Tone: confident, editorial, luxury — never salesy or generic.
- Headlines always have exactly ONE gradient keyword.
- Numbers matter: "6+ years", "80+ brands scaled", "$4M+ ad spend managed", "4.6× ROAS", etc.
- CTAs: "Explore my work", "Start a project", "Send message", "Start a project like this".
- Location line: **Faisalabad, Pakistan · Remote worldwide**.

---

## 11. Non-Negotiables
- **Never** use hardcoded colors like `text-white` or `bg-black` — always semantic tokens.
- **Never** use generic AI aesthetics (Inter-only, purple-on-white gradients, default shadcn look). This portfolio must look distinctly luxury-editorial.
- Every section must have a **different composition** — orbit, bento, slideshow, timeline, grid, split — never two sections that feel visually identical.
- Contact and feedback forms must deliver **directly to Gmail** via FormSubmit — no backend.
- Fully responsive: laptop and mobile must both feel premium; on mobile, stacking order is optimized per section (see Hero rule).
- Smooth scroll (`html { scroll-behavior: smooth }`), reduced-motion respected everywhere.
