# Mobile Games Lab — Agent Team Task

## Mission
Improve all games in this repo using the audit findings below. Fix bugs, add polish, then test visually using browser screenshots. Commit after each game is done.

## Repo structure
Each game lives at `./<game-name>/web/index.html` — single HTML file, zero dependencies.
Git remote: `https://github.com/jeanchouky/mobile-games-lab`

## Rules
- Single-file HTML constraint MUST be preserved (no external JS/CSS files)
- Mobile-first: test at 375×812 viewport
- Zero dependencies (no CDN imports)
- Commit after each game: `git add -A && git commit -m "Improve <game>: <what changed>"`
- Push at the end: `git push origin master`
- Use browser tool or screenshots to visually verify each game renders correctly before committing

## Recommended agent team split
- **Agent 1 (Bug Fixer)**: Fix all documented bugs across games, focus on Asteroid Miner, Color Flood, Hex Match, Neon Snake, Orbit, Pixel Painter, Rhythm Tap, Tower Defense, Word Architect
- **Agent 2 (Polish & UX)**: Add missing features and polish to Déjà Vu, Emoji Wars, Haunted, Lie Detector, Memory Palace, Pocket Ecosystem, Sound Thief, Conspiracy Board
- **Agent 3 (Featured games)**: Deep improvement of the best games: Gravity Flip, Trust Nothing (both versions). These are the flagship games — make them exceptional.

Agents should work in parallel, claim a game by starting it, commit when done, then pick the next unclaimed game.

## Audit findings (apply these)

### Asteroid Miner
- Fix: `canBuy` variable declared but never used in `renderUpgrades()`
- Fix: `Cargo Bay` upgrade has empty `effect` function
- Fix: AudioContext created on page load (needs user gesture first)
- Fix: `#achievements` div referenced but no rendering logic
- Add: visual indicator when upgrades become affordable (glow/pulse)
- Add: better number formatting at extreme values (K, M, B suffixes)

### Color Flood
- Fix: `animCells` doesn't throttle RAF — excessive redraws
- Add: animated cell transitions on capture
- Add: move counter displayed during play

### Déjà Vu
- Add: save/resume progress between loops (localStorage)
- Add: subtle accessibility option for reduced flashing

### Emoji Wars
- Fix: any unit targeting/pathfinding bugs spotted during play
- Add: visual unit health bars
- Add: wave counter display

### Gravity Flip
- Add: more obstacle variety in later levels
- Add: level progress indicator
- Polish: smoother flip animation

### Haunted
- Fix: any timing issues in scare events
- Add: difficulty progression between levels
- Add: scare counter/score display

### Hex Match
- Fix: any edge cases in match detection
- Add: combo multiplier display
- Add: power-up gems (one special type)

### Lie Detector
- Add: score persistence via localStorage
- Add: category display for each question
- Fix: any timing/animation glitches

### Memory Palace
- Add: rotation speed shown to player as difficulty indicator
- Add: progressive difficulty (speed increases)
- Polish: smoother 3D card flip effect

### Neon Snake
- Fix: any wall collision edge cases
- Add: wrap-around option (toggle)
- Add: high score persistence (localStorage)

### Orbit
- Add: visual orbit prediction trail
- Add: sandbox mode (no enemies, just orbit)
- Fix: any collision detection edge cases

### Pixel Painter
- Add: eraser tool
- Add: color palette with 12+ colors
- Add: clear canvas button with confirmation
- Add: simple export (download as PNG)

### Pocket Ecosystem
- Fix: any performance issues with many creatures
- Add: creature count display per species
- Add: day/night cycle visual

### Rhythm Tap
- Add: visual beat anticipation (upcoming beat preview)
- Add: streak counter display
- Add: localStorage high score

### Sound Thief
- Add: better visual feedback during recording phase
- Add: volume meter visualization
- Fix: any AudioContext issues

### Tower Defense
- Fix: any wave spawn timing issues
- Add: tower range indicators on hover
- Add: wave countdown timer between waves

### Trust Nothing (both versions)
- Add: timer/speedrun mode
- Add: hint system (max 3 hints per game)
- Polish: smoother transitions between rooms
- Fix: any state reset bugs

### Word Architect
- Add: daily challenge mode (seeded random, same word for everyone)
- Add: localStorage high score
- Add: letter count hint

### Conspiracy Board
- Add: more cases (at minimum 2 new ones)
- Add: difficulty progression
- Fix: any string/evidence connection bugs
