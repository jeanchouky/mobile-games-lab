# Sound Thief

**Your microphone is your weapon.**

A mobile web platformer where real-world sounds become your arsenal. Record sounds from your environment, and the game analyzes their acoustic properties to create unique weapons.

## 🎮 Live Game

**Play now:** https://sound-thief-game.web.app

## 🎯 Core Mechanics

### Sound Recording
- Tap the **🎤 REC** button to record a 2-second sound clip
- Game analyzes:
  - **Volume (dB)** → Attack power
  - **Frequency (Hz)** → Sound type classification
  - **Harmonic content** → Special abilities
- Store up to 5 sounds in your inventory

### Sound Types
- **Loud** (high volume) → Red → Powerful impact attacks
- **High** (>2kHz) → Cyan → Piercing laser-like projectiles
- **Mid** (800Hz-2kHz) → Yellow → Balanced attacks
- **Low** (<800Hz) → Blue → Wide area-of-effect
- **Harmonic** (musical) → Purple → Special damage vs Harmonic enemies

### Combat
- Tap sound slots (or press 1-5 keys) to fire sound projectiles
- Each sound has a 1-second cooldown
- Enemies have weaknesses to specific sound types
- 2x damage when hitting weakness

### Enemy Types
1. **Silence Wraiths** (magenta) → Weak to loud sounds
2. **Echo Beasts** (cyan) → Weak to mid-frequency sounds
3. **Harmonic Guardians** (purple) → Weak to harmonic/musical sounds
4. **Noise Golems** (gold) → Weak to high-frequency sounds

## 📱 Controls

### Desktop
- **Arrow keys / WASD** → Move & jump
- **1-5 keys** → Use sounds from inventory
- **Mouse** → Click UI buttons

### Mobile/Touch
- **Touch controls** at bottom left → Move left/right, jump
- **Tap sound slots** → Fire sound weapons
- **🎤 REC button** → Record new sounds

## 🎨 Visual Design

**Waveform-meets-platformer aesthetic:**
- Dark navy background (#0a0e1a)
- Animated waveform patterns
- Neon colors for sound visualizations
- Clean, modern UI with audio-reactive elements

## 🎵 Audio Engine

Built entirely with **Web Audio API**:
- Real-time FFT analysis for frequency detection
- RMS calculation for volume measurement
- Harmonic detection via peak analysis
- Procedural sound effects (no audio files)

### Microphone Fallback
If mic permission is denied:
- Tap-to-shoot with procedurally generated sounds
- Random sound types (loud, mid, high, harmonic)
- Full gameplay preserved without recording

## 🏆 Game Progression

### 5 Levels:
1. **Tutorial** → Learn basic mechanics
2. **Echo Chamber** → Multiple Echo Beasts
3. **Harmonic Gate** → Requires harmonic sounds
4. **Noise Pit** → Platforming + Noise Golems
5. **Boss Battle** → Harmonic Guardian (200 HP)

### Progression:
- **HP**: 100% (decreases on enemy contact)
- **Resonance**: In-game currency (earn by defeating enemies)
- **Level completion**: Defeat all enemies to advance

## 🛠️ Technical Stack

- **Single HTML file** (~40KB)
- **HTML5 Canvas** for all rendering
- **Web Audio API** for sound recording & analysis
- **Vanilla JavaScript** (no frameworks)
- **Mobile-first design** (responsive to all screen sizes)
- **PWA-ready** (can be installed to home screen)

## 🚀 Development

### Local Development
```bash
# Open directly in browser
open /home/jean-chouky/games/sound-thief/web/index.html

# Or serve with any HTTP server
cd /home/jean-chouky/games/sound-thief/web
python -m http.server 8080
```

### Firebase Deployment
```bash
cd /home/jean-chouky/games/sound-thief
firebase deploy --only hosting:sound-thief-game --project trust-nothing-game
```

## 🎮 Gameplay Tips

1. **Record diverse sounds** → Different frequencies unlock different strategies
2. **Musical sounds are powerful** → Humming/whistling creates harmonic projectiles
3. **Watch enemy colors** → They hint at weaknesses
4. **Manage inventory** → Only 5 sounds max, choose wisely
5. **Cooldowns matter** → Don't spam the same sound

## 🔒 Privacy

**Zero data collection:**
- Sounds are **never uploaded** to any server
- Audio analysis happens **locally in browser**
- No recording of "what" the sound is, only **acoustic properties**
- All data cleared on page refresh

## 📊 Features Implemented

✅ Microphone recording (getUserMedia)  
✅ Real-time waveform visualization  
✅ FFT-based frequency analysis  
✅ Volume (RMS) calculation  
✅ Harmonic detection  
✅ Sound inventory (max 5)  
✅ Platformer physics (jump, run, gravity)  
✅ 5 unique levels  
✅ 4 enemy types + boss  
✅ Sound-based projectile system  
✅ Weakness/damage multiplier system  
✅ Touch controls for mobile  
✅ Fallback mode (no mic required)  
✅ Procedural sound effects  
✅ Animated waveform background  
✅ HP & resonance tracking  
✅ Particle effects  
✅ Responsive design  

## 🎯 Future Enhancements

- Level editor
- Sound library persistence (IndexedDB)
- More enemy types
- Boss variations
- Combo system
- Achievements
- Leaderboards
- Cosmetic sound skins
- Additional soundscapes

---

**Built with** ❤️ **and sound waves**

Project inspired by the concept: *"The real world is your inventory."*
