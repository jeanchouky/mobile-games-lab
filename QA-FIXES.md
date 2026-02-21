# QA Fixes — Round 1 (Browser Testing)

## CRITICAL: Landing Page Cards Invisible
**File:** `landing-page/web/index.html`
**Bug:** All game cards (Featured + All Games sections) are present in the DOM but visually invisible. The card elements have dark backgrounds/text that don't contrast against the page's dark background.
**Expected:** Cards should have visible backgrounds (semi-transparent dark panels with light borders/glow), readable text, and hover effects.
**Fix:** Check CSS for `.game-card`, `.featured-card`, and similar classes. Ensure:
- Cards have a visible background (e.g., `rgba(255,255,255,0.05)` or `rgba(30,30,50,0.8)`)
- Text is light-colored (`#e0e0e0` or similar)
- Cards have subtle borders (`1px solid rgba(255,255,255,0.1)`)
- Hover state adds glow or brightness
- Emojis should be large/prominent as visual anchors

## MINOR: Fractal Explorer
- ✅ Looks great! WebGL Mandelbrot renders perfectly.
- Consider: Info panel (top-left) text is slightly hard to read against the fractal background. Add a stronger backdrop blur or darker background.

## MINOR: Synth Pad
- ✅ Splash screen looks clean.
- Can't test audio without user interaction (browser policy). Looks solid visually.

## MINOR: Physics Sandbox
- ✅ Toolbar visible, material options, settings.
- The welcome splash text overlaps with the toolbar area. Consider starting it lower.

## MINOR: Gravity Flip
- ✅ Major upgrade! Level editor, infinite mode, leaderboard. 
- Looks polished, neon aesthetic consistent.

## MINOR: Asteroid Miner
- ✅ Upgrade shop looks great! Ore types, mining runs, ship upgrades.
- All asteroids show "Stone" — maybe randomize types on load?

## Priority
Fix the landing page FIRST (it's the entry point). Then address minors.
