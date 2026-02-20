# Mobile Games Lab — Agent Team Mission

You are part of an agent team tasked with dramatically improving the Mobile Games Lab — a collection of 24 single-file HTML5 games.

## Project Context
- Each game is a single self-contained `index.html` file (HTML + CSS + JS)
- Zero dependencies, mobile-first, touch controls
- Deployed to GitHub Pages at jeanchouky.github.io/mobile-games-lab
- Repository: ~/mobile-games-lab

## Audit Findings (read ~/memory/introspection/2026-02-20-gamelab-audit.md for full details)

### Critical Cross-Cutting Fixes (do these FIRST):
1. **AudioContext on page load** — Several games create AudioContext without user gesture. Fix: wrap in `ensureAudio()` pattern (see gravity-flip for reference)
2. **Frame-rate dependent physics** — Use `deltaTime` not frame counting
3. **Landing page** says "11 games" — update to reflect actual count (20+ games)
4. **Landing page screenshots** — ensure all games have screenshots referenced

### Top 5 Games to Polish (highest ROI):
1. **Gravity Flip** (9/10) — Add: level editor mode, more obstacle variety at later levels, online leaderboard via localStorage
2. **Trust Nothing** (8.5/10) — Add: more lies/tricks, expand to 5+ acts, more meta-puzzles
3. **Déjà Vu** (8.5/10) — Add: more time loop variations, save/resume, accessibility options for flashing
4. **Pocket Ecosystem** (7.5/10) — Add: more species, weather system, day/night cycle
5. **Sound Thief** (7.5/10) — Add: more levels, better onboarding, visual feedback for sound recordings

### Bottom 5 Games to Transform:
1. **Pixel Painter** → Add game objectives (pixel art challenges, timed drawing, guess-the-drawing)
2. **Asteroid Miner** → Fix empty upgrade effects, add offline progress, better number formatting
3. **Tower Defense** → Add more tower types, upgrade paths, wave variety, better enemy pathing
4. **Memory Palace** → Fix 3D touch target distortion, add themes, fix level count mismatch
5. **Word Architect** → Add dictionary validation, hint system, difficulty progression

### Every Game Gets:
- Bug fixes from the audit
- Improved touch UX
- Better onboarding/tutorial for first-time players
- At least one new feature or game mode
- Performance check (requestAnimationFrame, no unnecessary redraws)

## Validation Strategy — HOW TO VERIFY IMPROVEMENTS

After modifying any game, you MUST:

1. **Serve and screenshot**: Run `cd deploy && python3 -m http.server 8080` and use the browser tool to actually load and screenshot each modified game
2. **Interaction test**: Click/tap through the game flow — title screen → gameplay → game over → replay
3. **Bug regression**: Check that existing functionality still works after changes
4. **Mobile viewport**: Test at 375x667 (iPhone SE) viewport
5. **Console errors**: Check browser console for JavaScript errors
6. **Before/after line count**: Track lines of code added per game
7. **Copy deploy versions**: After fixing source, copy to deploy/ directory

## Quality Bar
- Every game should score 7+ on playability after improvements
- No console errors
- AudioContext handled correctly in ALL games
- Every game has at least 3 distinct levels/modes/stages
- Every game has a clear "how to play" visible on first load

## Git Workflow
- Commit after each game is improved: `git commit -m "improve: <game-name> — <what changed>"`
- Push to origin when a batch of games is done
- Update README.md game count and descriptions

## DO NOT:
- Break the single-file constraint (no external dependencies)
- Remove existing features
- Make games desktop-only
- Skip the validation steps
