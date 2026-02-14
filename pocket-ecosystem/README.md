# Pocket Ecosystem

**A living terrarium shaped by phone usage**

🌱 **Live Demo:** https://pocket-ecosystem-game.web.app

---

## Overview

Pocket Ecosystem is a relaxing mobile web game where you nurture a living digital terrarium. The ecosystem evolves over time with plants, fish, birds, and insects that grow, eat, reproduce, and die based on natural simulation.

## Features

✅ **10+ Species Procedurally Rendered**
- **Plants:** Grass stems, leafy bushes, tall reeds
- **Fish:** Minnows, carp, pike (predator)
- **Birds:** Sparrows, hawks (predator)
- **Insects:** Butterflies, dragonflies (predator)

✅ **Living Ecosystem Simulation**
- Creatures move, hunt, feed, and reproduce
- Natural food chain: plants → herbivores → predators
- Ecosystem health meter shows balance

✅ **Watercolor Nature Journal Aesthetic**
- Soft organic shapes and pastel colors
- Paper texture background with layers (sky, water, ground)
- Procedural rendering with variation (no two creatures identical)

✅ **Day/Night Cycle**
- Based on real clock (dawn, day, dusk, night)
- Dynamic lighting and color shifts

✅ **Weather System**
- Clear, sunny, rain, storm
- Weather reflects ecosystem health

✅ **Interactive**
- Tap plants to water them (grow faster)
- Tap creatures to feed them (reduce hunger)
- Tap ground to plant seeds
- Drag creatures to move them (future feature)

✅ **Persistent State**
- Saves to localStorage automatically
- Ecosystem ages while you're away
- Journal tracks significant events

✅ **Ambient Nature Soundscape**
- Water trickling (filtered noise)
- Wind ambience
- Bird chirps (context-aware)
- Insect buzzing
- Mute button for silent mode

✅ **No Fail State**
- Zen/relaxing vibe
- Ecosystem can struggle but never "game over"

## Phone Usage Integration (Simulated)

While the full app would track real phone usage, this web version simulates:
- **Screen Time** → Spawns predators
- **Exercise/Steps** → Grows plants
- **Music Played** → Attracts birds
- **Phone-Free Time** → Herbivores thrive

## Technical Details

- **Single HTML file** (41KB) - no frameworks
- **HTML5 Canvas** with vanilla JavaScript
- **Web Audio API** for ambient soundscape
- **localStorage** for persistence
- **Mobile-optimized** touch controls
- **Procedural generation** for creature variation

## Development

Built with the Trust Nothing game engine architecture:
- Canvas-based rendering with watercolor effects
- Entity-component-like creature system
- Real-time simulation with delta time
- Particle system for visual feedback

## Deployment

```bash
# Configure Firebase hosting target
firebase target:apply hosting pocket-ecosystem-game pocket-ecosystem-game --project trust-nothing-game

# Deploy
cd /home/jean-chouky/games/pocket-ecosystem
firebase deploy --only hosting:pocket-ecosystem-game --project trust-nothing-game
```

## Future Enhancements

- Real phone usage tracking (native app wrapper)
- Multiple biomes (desert, coral reef, alpine)
- Detailed analytics and insights
- Screenshot/share functionality
- Time-lapse video export
- More species and interactions
- Seasonal events

---

**Created:** February 2026  
**Engine:** Custom HTML5 Canvas  
**Style:** Watercolor nature journal  
**Vibe:** Zen, relaxing, no pressure
