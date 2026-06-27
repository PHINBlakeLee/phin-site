# PHiN Design System

**Personal Health INtelligence** — Korea-first health-AI platform. The brand identity is a calm, premium **dark canvas** with a **deep forest brand (#054d28)** and a bright **GREEN PHIN accent (#39ff6a)** carrying every interactive highlight. The signature interaction: when the user picks an option, the chosen text **brightens to white**; the un-chosen options **dim to gray**. Less ceremony, more focus.

> Slogan: **"당신은 핀인가, 아닌가?"** — "Are you PHIN or not?" The goal is for *"너 핀 몇 점이야?"* (What's your PHIN?) to become a casual greeting.

---

## Sources & Provenance

- `uploads/20260518 PHiN_MASTER.docx` — full strategy / patent / tech / roadmap doc (read into the README context).
- Survey content (6 steps + tier table + 16 personality types) — provided directly by the user in chat.
- No Figma file or production codebase has been attached. If/when those become available, re-import via the **Import** menu and we'll sync.

---

## File Index

| Path | What |
|---|---|
| `README.md` | This file. Brand context, voice, visual rules, iconography. |
| `SKILL.md` | Portable Agent-Skill front-matter so this folder can be installed in Claude Code. |
| `colors_and_type.css` | All design tokens as CSS custom properties + utility classes. Import this first. |
| `index.html` | The interactive prototype — landing → 6 surveys → result. **Open this.** |
| `src/scoring.js` | Pure scoring functions (PHIN score, tier, MBTI mapping, body age, percentile). |
| `src/Shared.jsx` | Reusable chrome: TopBar, ProgressBar, StepHeader, ActionBar, OptionTile, ABCard. |
| `src/Landing.jsx` | Marketing landing page (hero, tiers, features, CTA). |
| `src/Steps.jsx` | All 6 survey screens. |
| `src/Result.jsx` | Result page with score, tier, MBTI, body age, 1차 분석, locked premium, CTAs. |
| `preview/` | Specimen cards consumed by the Design System tab. |

---

## Content Fundamentals

**Language.** Korean-first. English appears only as labels for tokens / steps (e.g. `STEP 03`, `BLUE PHIN`, `YOUR PHIN SCORE`) and for numeric scores. Body copy and CTAs are Korean throughout.

**Tone.** Plainspoken, slightly cheeky, never preachy. The voice of a smart friend who's done the research — not a doctor, not a wellness influencer. Examples:

| Avoid | Prefer |
|---|---|
| "건강한 라이프스타일을 위한 솔루션" | "당신은 핀인가, 아닌가?" |
| "혁신적인 AI 기반 분석" | "30초 안에 결과를 받아보세요" |
| "여러분의 소중한 건강을 위해" | "이 세상에서 가장 중요한 건 당신 자신입니다" |

**Person.** Mostly **you/당신/(닉네임)님**. The brand addresses the reader directly and often.

**Casing.** Korean has no case. For English: ALL CAPS only for tier names (GREEN PHIN, RED PHIN), step labels (STEP 01), and the wordmark (PHIN). Sentence case for everything else.

**Punctuation.** Question marks live in hero copy ("당신은 핀인가?"). Periods at the end of complete thoughts. No exclamation marks. No em-dashes in Korean body — use commas. Avoid ellipses.

**Numbers.** Always tabular. `font-variant-numeric: tabular-nums` is set on the score class. Show the score out of 100 always.

**Emoji.** **Yes** — but only as **option icons** in the survey (🐷🥱⚡👁️🎈🤢🍺🚬🌙⏰🍕☕🛋️🚶🏃📱📲🫠). Never in marketing copy, headlines, buttons, or labels. The PHiN survey is one of the few places in the design system where emoji are sanctioned.

---

## Visual Foundations

### Color

- **Canvas `#0a0f0c`** — a deep, slightly green-tinted near-black. Every page background.
- **Brand `#054d28`** — deep forest. Used as the selected-option fill at 16% opacity, primary container backgrounds, accent borders.
- **Brand Bright `#39ff6a`** — the GREEN PHIN tier color, doubling as the brand's high-energy accent. Used for: scores, the bright `N` in the wordmark, primary CTAs, progress bars, glow effects. **Never** use it as a body-text color.
- **Ink ladder** — `#ffffff → #a8b1ad → #5b6661 → #313836`. The signature is the **selected/unselected dichotomy**: selected text climbs the ladder, unselected text descends it. This carries 100% of the interaction feedback — there are no extra checkmarks or fills.
- **Tier palette** — `#888888 → #ff4a4a → #f5c518 → #4a9eff → #39ff6a`. These are emphatic accents reserved for **the result moment** — never as UI primary. The score glows in its tier color on the result page.

### Typography

- **Pretendard** for all Korean text (and Latin as fallback). Handles weights 400–900 with good metrics for Korean.
- **Inter** for numeric displays (scores, ages, percentile numbers). Inter's tabular numerics + thin precision pair well with Pretendard's neutral Korean shapes.
- **Display weight is 800–900.** Hero copy is Pretendard 900. Sub-displays are 800. There is no weight 700 in display — the brand wants the heavy ceiling.
- **Body weight is 400–600.** Default body 400, emphasis 600.

### Backgrounds

- **Solid dark fills only.** No gradients in chrome (buttons, cards, bars).
- **Soft radial glows** are the one "atmospheric" treatment — used behind the hero, the PHIN score on the result page, and the dark-promo CTA. Always **brand-bright** or **tier-color** at low opacity (`#39ff6a18`), radial, with 70% falloff. Never linear gradients.
- **No textures, no grain, no photos in chrome.** Photography would only appear in dedicated illustrative spots inside cards — none in this build.

### Elevation

The system has no `box-shadow`. Elevation = **tonal step + 1px hairline**:

- **Lvl 0** — canvas `#0a0f0c`, no border.
- **Lvl 1** — card `#121814`, 1px `#1f2924` border.
- **Lvl 2** — hovered/nested `#1a221d`, 1px `#2a3631` border.
- **Glow accents** (the brand's only "shadow") are radial-gradient backgrounds, **not** box-shadows. They sit behind cards, not on them.

### Border Radius

- **Cards: 16–20 px.** Generous, friendly. Never sharp.
- **Buttons: 9999 px (pill).** This is a non-negotiable. The pill geometry IS the brand's friendliness signature.
- **Form inputs: 12 px.** A touch tighter than cards to read as "field, not container."

### Motion

- **Duration.** `--dur-fast: 140ms`, `--dur-base: 220ms`, `--dur-slow: 360ms`.
- **Easing.** A single curve: `cubic-bezier(0.2, 0.7, 0.2, 1)` — assertive entry, soft exit.
- **What animates.** Color (selected/unselected transitions), border, background. **Not** transforms. No bounce, no spring, no parallax. The signature is the **brightness ladder** — selected text crossfades from `#a8b1ad` → `#ffffff` over 220ms.

### Hover & Press

| Element | Hover | Press |
|---|---|---|
| `phin-btn-primary` (bright green) | `#5fff86` | translateY(1px) |
| `phin-btn-secondary` | bg → `#121814`, border → `#5b6661` | translateY(1px) |
| `phin-option` (idle) | border → `#2a3631`, text → `#ffffff` | — |
| `phin-option.is-selected` | (already at full brightness) | — |
| `phin-option.is-unselected` | text → `#a8b1ad` | — |

### Transparency & Blur

- **Sticky top bars** use `background: rgba(10, 15, 12, 0.85)` + `backdrop-filter: blur(12px)`. This is the only place blur appears.
- **Modal scrim** would use solid `#050807` at 70% opacity. No blur on modals.

---

## Iconography

The brand uses **two icon systems**, by context:

1. **Survey option icons → emoji.** The 6-survey content brief specifies emoji for every option (🍺🚬🌙⏰ etc). Use the exact emoji from `src/scoring.js`. Don't substitute SVGs.
2. **UI chrome → Lucide via CDN.** Back arrows, checkmarks, chevrons, refresh — all inline Lucide SVG at stroke-width 2.0, square caps, `currentColor`. Sizes: 16 / 18 / 22 px.

**Why two systems?** The emoji carry warmth and instant recognizability in the survey context — they're chosen by the user as "this is me." Lucide carries the UI chrome with restraint so the emoji can do the emotional work without competing.

**No icon font.** No bespoke SVG sprite (yet — PHiN production may produce one). **Flagged substitution:** if PHiN's real brand icons land, swap Lucide for them in `Shared.jsx` and `Result.jsx`.

---

## Components At A Glance

Open the Design System tab to see specimens. Highlights:

- **OptionTile** — the survey's signature primitive. idle / hover / selected / unselected. See `preview/options.html`.
- **PHIN Score display** — the big-number result moment with tier glow. `preview/score-display.html`.
- **Tier ladder** — 5-step ladder with the active tier glowing, the rest dimmed. `preview/tier-ladder.html`.
- **Survey top bar** — back / logo / step counter / progress bar. `preview/topbar.html`.
- **Insight cards** — the 3-up result band (성향 / 신체나이 / 동년배). `preview/insight-cards.html`.

---

## Open Questions for the User

1. **Real logo?** Currently using a wordmark with `PHi**N**` (the N in brand-bright). If you have a logo, drop it into `assets/` and we'll wire it through `<Logo>` in `Shared.jsx`.
2. **Real fonts?** Pretendard is gold-standard for Korean web and is the right choice for prototypes. If PHiN purchases a custom Korean display face, we'll swap it in.
3. **Real BMI/score formula.** The scoring in `src/scoring.js` is **illustrative** — weighting roughly matches the brief's intent but isn't medically validated. Replace with the real formula when defined.
4. **Result page CTAs.** Currently "앱 다운로드" + "이메일 사전등록". Wire to real endpoints when ready.
