# Deploy Games to Cloudflare Pages

## Quick Deploy (needs wrangler login first)

```bash
# 1. Login to Cloudflare
/home/jean-chouky/.npm-global/bin/wrangler login

# 2. Deploy all games as a single site
/home/jean-chouky/.npm-global/bin/wrangler pages deploy /home/jean-chouky/games/deploy --project-name=jc-games

# 3. The site will be at: https://jc-games.pages.dev
# Games will be at:
#   https://jc-games.pages.dev/trust-nothing/
#   https://jc-games.pages.dev/deja-vu/
#   https://jc-games.pages.dev/conspiracy-board/
#   https://jc-games.pages.dev/emoji-wars/
#   https://jc-games.pages.dev/haunted/
#   https://jc-games.pages.dev/one-button/
#   https://jc-games.pages.dev/gravity-flip/
#   https://jc-games.pages.dev/sound-thief/
#   https://jc-games.pages.dev/pocket-ecosystem/
#   https://jc-games.pages.dev/lie-detector/
#   https://jc-games.pages.dev/micro-nations/
```

## Deploy Structure
All files are in `/home/jean-chouky/games/deploy/`:
- `index.html` - Landing page
- `trust-nothing/index.html` - Trust Nothing
- `deja-vu/index.html` - Déjà Vu
- etc.

## Changes Made (Night Shift Feb 13-14)
- One Button Odyssey: Fixed canvas centering (was only showing left half)
- Micro Nations: Fixed camera centering on island
- Conspiracy Board: Fixed initial camera zoom to show all clues
- Landing page: Updated URLs from dead Firebase to relative paths
