# Converting Gravity Flip to a Telegram Mini App

## What's Needed

Gravity Flip is already a single-file HTML5 game — it's perfect for a Telegram Mini App. Here's what Baptiste needs to do:

## Steps

### 1. Create a Telegram Bot via BotFather
1. Open Telegram, search for `@BotFather`
2. Send `/newbot`
3. Choose a name (e.g., "Gravity Flip Game")
4. Choose a username (e.g., `gravity_flip_game_bot`)
5. Save the **bot token** BotFather gives you

### 2. Set Up the Mini App
1. In BotFather, send `/newapp`
2. Select your bot
3. Give the app a title: "Gravity Flip"
4. Give it a description: "Tap to flip gravity and dodge obstacles!"
5. Upload a 640x360 photo for the app icon
6. **(Important)** For the URL, enter: `https://jc-gravity-flip-game.web.app`
   - This works because the game is already hosted and mobile-friendly
7. Optionally add a short name (used in URLs): `gravityflip`

### 3. Add Telegram WebApp SDK (Optional Enhancement)
Add this to the game's `<head>` to integrate with Telegram:

```html
<script src="https://telegram.org/js/telegram-web-app.js"></script>
```

Then in the game code, you can:
```javascript
// Detect Telegram environment
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand(); // Full-screen the mini app
  
  // Get user info
  const user = tg.initDataUnsafe?.user;
  if (user) {
    console.log('Player:', user.first_name);
  }
  
  // Use Telegram's theme colors
  document.body.style.background = tg.themeParams.bg_color || '#000';
  
  // Close button
  tg.BackButton.show();
  tg.BackButton.onClick(() => tg.close());
}
```

### 4. Add a Menu Button (Optional)
In BotFather:
1. Send `/setmenubutton`
2. Select your bot
3. Set type to "web_app"
4. Enter the URL: `https://jc-gravity-flip-game.web.app`
5. Set button text: "🎮 Play"

### 5. Share the Game
Players can access it by:
- Opening the bot and tapping the menu button
- Clicking a direct link: `https://t.me/gravity_flip_game_bot/gravityflip`
- Inline mode (if configured)

## What I Can't Do Without Baptiste
- **Creating the bot** requires a Telegram account (I don't have one)
- **BotFather commands** are interactive and need a human
- **Testing** requires Telegram mobile app

## What's Already Done
- ✅ Game is HTML5, mobile-first, touch-friendly
- ✅ Game is deployed at a public HTTPS URL
- ✅ No external dependencies (single file)
- ✅ Responsive to any screen size

## Time Estimate
~5 minutes of manual work in BotFather + optional 10 minutes for SDK integration.
