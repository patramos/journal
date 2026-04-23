# Journal — Prompt Generator

A small, tactile journal-prompt generator built from a Figma design. Pick a mood, get a prompt on a torn-paper card, swipe (or tap the arrows) for another. Light and dark themes are persisted to `localStorage`.

## Stack

- Next.js 14 (App Router, JS / JSX)
- Tailwind CSS 3
- `Instrument Serif` + `Instrument Sans` via `next/font/google`
- Custom pointer-event swipe (no external animation libraries)

## Run it

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build && npm run start   # production build
```

## Project layout

```
app/
  layout.jsx         # fonts + FOUC-safe theme script
  page.jsx           # top-level state machine (landing ⇄ prompt)
  globals.css        # theme variables, noise overlay, swipe helpers
  components/
    ThemeProvider.jsx
    Toggle.jsx       # sliding sun / moon
    Chip.jsx         # outlined / filled mood pill
    Button.jsx       # solid + circle variants
    Paper.jsx        # SVG torn-edge card
    PaperStack.jsx   # 3-card stack with swipe + imperative ref
    LandingView.jsx
    PromptView.jsx
lib/
  prompts.js         # 7 moods × 7 prompts + helpers
```

## Editing the prompts

All journal prompts live in **`lib/prompts.js`**. Each mood has its own array under `PROMPTS`; add, remove, or reword entries freely. The companion headlines shown above the card are in `MOOD_HEADLINES` in the same file. The `random` mood automatically pulls from every category.

## Theme

Theme is held in `ThemeProvider` and mirrored to `localStorage` under the key `jpg-theme`. An inline script in `layout.jsx` applies the `.dark` class to `<html>` before hydration to avoid a color-scheme flash.
