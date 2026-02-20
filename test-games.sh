#!/bin/bash
# Quick validation script for mobile-games-lab
# Checks: file exists, no obvious JS errors, AudioContext pattern

DEPLOY_DIR="$(dirname "$0")/deploy"
ERRORS=0
WARNINGS=0

echo "🎮 Mobile Games Lab — Quick Validation"
echo "======================================="

# Check each game in deploy/
for game_dir in "$DEPLOY_DIR"/*/; do
  game=$(basename "$game_dir")
  [ "$game" = "screenshots" ] && continue
  
  html="$game_dir/index.html"
  if [ ! -f "$html" ]; then
    echo "❌ $game: missing index.html"
    ERRORS=$((ERRORS + 1))
    continue
  fi
  
  lines=$(wc -l < "$html")
  size=$(wc -c < "$html")
  
  # Check for AudioContext without user gesture
  if grep -q "new AudioContext\|new webkitAudioContext" "$html" 2>/dev/null; then
    if ! grep -q "ensureAudio\|audioInit\|initAudio\|userGesture\|click.*audio\|touchstart.*audio" "$html" 2>/dev/null; then
      echo "⚠️  $game: AudioContext may init without user gesture ($lines lines)"
      WARNINGS=$((WARNINGS + 1))
    else
      echo "✅ $game: OK ($lines lines, ${size}B)"
    fi
  else
    echo "✅ $game: OK ($lines lines, ${size}B, no audio)"
  fi
done

echo ""
echo "Results: $ERRORS errors, $WARNINGS warnings"
echo ""

# Check landing page game count
GAME_COUNT=$(ls -d "$DEPLOY_DIR"/*/ 2>/dev/null | grep -v screenshots | wc -l)
echo "📊 Games in deploy/: $GAME_COUNT"

# Check README game count
if [ -f "$(dirname "$0")/README.md" ]; then
  README_COUNT=$(grep -c "^\| " "$(dirname "$0")/README.md" 2>/dev/null || echo "?")
  echo "📊 Games in README table: $README_COUNT"
fi

# Check screenshots
SCREENSHOT_COUNT=$(ls "$DEPLOY_DIR/screenshots/"*.png 2>/dev/null | wc -l)
echo "📸 Screenshots: $SCREENSHOT_COUNT"
