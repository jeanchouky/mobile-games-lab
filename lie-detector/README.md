# 🎭 Lie Detector Party

**A multiplayer party game with fake AI analysis**

## 🌐 Live Demo
**https://lie-detector-jc.web.app**

## 📱 Features Implemented

### Core Gameplay
- ✅ **2-8 Players** - Local multiplayer (pass the phone)
- ✅ **50+ Questions** - Across 6 categories (embarrassing, hypothetical, would-you-rather, personal, spicy, silly)
- ✅ **Hot Seat Selection** - Dramatic player reveal with animations
- ✅ **Camera Integration** - getUserMedia with avatar fallback
- ✅ **AI Analysis Phase** - Fake scanning animation with progress bar
- ✅ **Truth Score** - Random 40-99% with dramatic reveal
- ✅ **Fake Micro-Expressions** - "Pupil dilation detected", "Micro-smile suppression", etc.
- ✅ **Accusation Phase** - Players vote Truth/Lie/Skip with 30-second timer
- ✅ **Drama Meter** - Fills based on vote participation
- ✅ **Scoring System** - 50 points for correct guesses
- ✅ **Round Results** - Score breakdown with stats
- ✅ **Game Over Screen** - Winner announcement with superlatives

### Visual Style
- ✅ **Pop-Art Aesthetic** - Bold neon colors (pink, cyan, yellow, green, orange, purple)
- ✅ **Thick White Outlines** - Comic book style text strokes
- ✅ **Dark Background** - High contrast (#1a1a1a)
- ✅ **Game Show Energy** - Dramatic reveals, spotlights, glows
- ✅ **Player Avatars** - Colored circles with initials
- ✅ **Progress Bars** - Truth meter, drama meter, scan progress
- ✅ **Particle Effects** - Confetti, sparks, explosions
- ✅ **Screen Shake** - On dramatic moments

### Audio (Web Audio API)
- ✅ **Background Music** - Chiptune dramatic game show theme
- ✅ **Sound Effects**:
  - Click/tap feedback
  - Buzzer (wrong answer)
  - Ding (correct/positive)
  - Dramatic chord progression
  - Victory jingle
  - Heartbeat during analysis
  - Scanning beeps

### Technical
- ✅ **Single HTML File** - No external dependencies
- ✅ **HTML5 Canvas** - All rendering via Canvas API
- ✅ **Vanilla JavaScript** - No frameworks
- ✅ **Mobile-First** - Touch controls, responsive scaling
- ✅ **Camera Access** - getUserMedia with graceful fallback
- ✅ **Particle System** - Dynamic confetti and effects
- ✅ **Screen Shake** - Physics-based camera shake
- ✅ **State Machine** - Clean game state management

## 🎮 Game Flow

1. **SPLASH** - Title screen with dramatic music
2. **SETUP** - Select 2-8 players, assign names
3. **HOT SEAT** - Random player selected with spotlight
4. **QUESTION** - Display question, show camera feed
5. **ANALYSIS** - Fake AI scanning with progress bar and heartbeat
6. **VERDICT** - Reveal truth score (40-99%) and AI verdict
7. **ACCUSATION** - Other players vote with 30-second timer
8. **CONFESSION** - Player reveals truth, points awarded
9. **RESULTS** - Scoreboard and round stats
10. **GAME OVER** - Winner announcement with awards

## 🎯 Superlatives

The game awards fun titles:
- **Most Suspicious** - Most wrong guesses from others
- **Poker Face Award** - (Random for demo)
- **Best Detective** - Most correct guesses

## 🎨 Color Palette

```
Hot Pink:    #ff0099
Cyan:        #00ffff
Yellow:      #ffff00
Green:       #00ff00
Orange:      #ff5500
Purple:      #9933ff
Red-Pink:    #ff3366
Mint:        #00ff99
Background:  #1a1a1a
```

## 🚀 Deployment

```bash
cd /home/jean-chouky/games/lie-detector
firebase deploy --only hosting:lie-detector-jc --project trust-nothing-game
```

## 📂 Files

```
/home/jean-chouky/games/lie-detector/
├── web/
│   └── index.html (46KB - complete game)
├── firebase.json (hosting config)
└── README.md (this file)
```

## 🎯 Design Philosophy

The AI doesn't have to work well—it has to work **entertainingly**. By making the lie detector deliberately unreliable (40-99% random scores), we remove pressure to build accurate ML models and instead focus on creating drama, laughs, and arguments. The game is about human interaction; the AI is just the spark.

## 🔮 Future Enhancements

- Real camera-based facial expression detection (optional)
- Question pack categories with filters
- Replay/highlight reel capture
- Social sharing with screenshots
- Custom question creator
- Multiplayer sync across devices
- Voice recording during answers
- More dramatic sound effects and animations

## 🎉 Credits

Built with reference to the Trust Nothing game coding style.
Concept inspired by party games like Among Us, Jackbox, and Truth or Dare.

**Version 1.0 - February 2026**
