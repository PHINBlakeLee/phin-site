---
name: phin-design
description: Use this skill to generate well-branded interfaces and assets for PHiN (Personal Health INtelligence) — the Korea-first health-AI life platform. Dark-mode, deep-forest brand, signature selected/unselected brightness ladder. Contains essential design guidelines, colors, type, fonts, and component primitives for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Key files:
- `README.md` — brand context, content fundamentals, visual foundations, iconography.
- `colors_and_type.css` — drop-in CSS custom properties + utility classes for the entire system (colors, type scale, spacing, radii, buttons, cards, badges, options, inputs).
- `src/` — reusable React components written as JSX (Landing, Steps, Result, Shared, scoring).
- `preview/` — small specimen cards that mirror the Design System tab.
- `index.html` — the working prototype (landing → 6 surveys → result). Open this for a complete reference.

If creating visual artifacts (slides, mocks, throwaway prototypes), always start by linking `colors_and_type.css` so you inherit the dark palette, type scale, and component classes.

If the user invokes this skill without other guidance, ask what they want to build, ask a few clarifying questions, and act as an expert designer producing HTML artifacts or production code as needed.

## Non-negotiables (the brand's identity rules)

1. **Dark mode is the only mode.** Canvas is `#0a0f0c`. There is no light-mode counterpart.
2. **One brand color, one bright accent.** `#054d28` (deep forest) for primary surfaces; `#39ff6a` (GREEN PHIN) for accents, scores, CTAs. No second brand color.
3. **The brightness ladder IS the interaction.** Selected text climbs to `#ffffff`. Unselected text descends to `#5b6661`. Idle sits at `#a8b1ad`. This carries 100% of the selection feedback — don't add extra fills, borders, or checkmarks beyond what `phin-option` already does.
4. **Buttons are pill (9999 px). Cards are 16–20 px rounded.** No sharp corners.
5. **No box-shadow.** Elevation = tonal step + hairline. The only "shadow" is a low-opacity radial glow behind hero / score moments.
6. **Pretendard for Korean, Inter for numbers.** Display weight is 800–900, body is 400–600. Never weight 700 in display.
7. **Emoji are sanctioned only in survey option icons.** Never in headlines, marketing copy, buttons, or chrome.
8. **Tier colors only appear at the result moment.** Never as UI primary.
