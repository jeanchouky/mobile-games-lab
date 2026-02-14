# Emoji Wars ⚔️

**A real-time strategy game with emoji armies**

🎮 **Play Now:** https://emoji-wars-jc.web.app

## Features

✅ **24+ Unique Emoji Units** with stats and abilities
- ⚔️ Melee units (beats Ranged, weak to Magic)
- 🏹 Ranged units (beats Magic, weak to Melee)  
- 🧙‍♂️ Magic units (beats Melee, weak to Ranged)
- 🐉 Creatures (balanced)
- ✨ Special units (unique mechanics)

✅ **Rock-Paper-Scissors Combat System**
- Type advantages: 1.5x damage multiplier
- HP-based unit combat
- Real-time battles on 3-lane battlefield

✅ **Army Builder**
- Select 8 emoji units from 20+ options
- Categorized by type (Combat, Ranged, Magic, Creatures, Specials)
- Visual unit cards with stats

✅ **Battle System**
- 2-minute timer
- Tap emoji cards to deploy
- Drag to target specific lanes
- Units auto-march and engage enemies
- Tower damage when reaching enemy base

✅ **AI Opponent (3 Difficulty Levels)**
- Easy: Random weak units
- Medium: Balanced composition
- Hard: Counter-composition that targets your army weaknesses

✅ **Victory Screen**
- Battle stats (damage dealt, HP remaining, time)
- Win/Loss tracker
- Battle replay as emoji string (copy to clipboard!)

✅ **Web Audio API**
- March sounds during movement
- Hit/death sound effects
- Victory/defeat fanfares

## Tech Stack

- **Single HTML file** (33KB)
- HTML5 Canvas for rendering
- Vanilla JavaScript (no frameworks)
- Web Audio API for sound
- Mobile-optimized touch controls
- Deployed on Firebase Hosting

## Game Mechanics

### Unit Types
Each emoji has:
- **Attack** - Damage per second
- **Defense** - HP multiplier
- **Speed** - Movement rate
- **Cost** - Rarity/power level
- **Ability** - Unique special effect

### Combat
- Units march forward automatically
- Engage enemies in same lane within range
- Type advantage system:
  - Melee → Ranged ✓
  - Ranged → Magic ✓
  - Magic → Melee ✓
  - Creatures: balanced against all

### Victory Conditions
- Destroy enemy HP (5000 → 0)
- Survive with more HP when timer expires

## Deployment

```bash
cd /home/jean-chouky/games/emoji-wars
firebase deploy --only hosting:emoji-wars-jc --project trust-nothing-game
```

## Credits

Built as a mobile web game experiment inspired by Clash Royale mechanics with emoji theming.

Concept design from `/mobile-games-lab/concepts/emoji-wars/`

---

**🎮 Start battling at:** https://emoji-wars-jc.web.app
