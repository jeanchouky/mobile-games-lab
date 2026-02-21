# Mobile Games Lab — Phase 2: Ambitious Upgrades

## Mission
Take these games from "polished demos" to "portfolio showpieces". Each game should feel like a complete, released product.

## Priority Tasks (pick the most impactful ones, do as many as you can)

### New Games to Build
1. **Fractal Explorer** — Interactive Mandelbrot/Julia set explorer with smooth zooming, color palette cycling, WebGL-accelerated rendering. Touch/mouse to pan and zoom. Save favorite coordinates.
2. **Synth Pad** — Web Audio API synthesizer with a grid of pads, each triggering different sounds. Support for recording loops, layering, effects (reverb, delay, filter). Visual waveform display.
3. **Physics Sandbox** — Matter.js-powered playground. Spawn shapes, apply forces, create Rube Goldberg machines. Gravity controls, material properties (bouncy, sticky, fragile).

### Upgrade Existing Games
1. **Gravity Flip** — Add procedurally generated levels, a level editor, and online leaderboard (localStorage-based for now)
2. **Trust Nothing** — Add 3 new puzzle levels with increasingly mind-bending mechanics
3. **Asteroid Miner** — Add ship upgrades system, new asteroid types with different minerals, a shop/upgrade screen between runs
4. **Rhythm Tap** — Add 3 built-in songs with actual beat maps, score grading (S/A/B/C), combo multiplier visuals
5. **Neon Snake** — Add power-ups (speed boost, ghost mode, magnet), obstacles, and a "snake vs snake" AI opponent mode
6. **Pixel Painter** — Add layers support, export as PNG, undo/redo stack, color picker with hex input

### Landing Page
- Update the landing page to showcase all games with animated thumbnails/GIFs
- Add category filters (puzzle, action, creative, music)
- Add "Featured" section for the best 3 games
- Mobile-first responsive grid layout

### Infrastructure  
- Add a shared analytics module (play count, high scores — all localStorage, no server)
- Consistent meta tags + OpenGraph for social sharing per game
- PWA manifest for each game (installable on mobile)

## Agent Team Setup
Use native agent teams. Suggested split:
- **Agent 1: New Games** — Build Fractal Explorer, Synth Pad, Physics Sandbox from scratch
- **Agent 2: Game Upgrades** — Enhance existing games with the features listed above
- **Agent 3: Landing + Infra** — Landing page redesign, PWA manifests, analytics, meta tags

Commit after completing each game/feature. Push when all done.
