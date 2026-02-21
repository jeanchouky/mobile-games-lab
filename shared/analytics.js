/**
 * GameLab Analytics Module
 * Lightweight localStorage-based analytics for the Mobile Games Lab.
 * Usage:
 *   GameAnalytics.init('my-game');
 *   GameAnalytics.trackPlay();
 *   GameAnalytics.setHighScore(1500);
 *   GameAnalytics.getStats();       // stats for current game
 *   GameAnalytics.getAllStats();     // stats for all games
 */
const GameAnalytics = (() => {
  const STORAGE_KEY = 'gamelab_analytics';
  let currentGame = null;
  let playStartTime = null;

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }

  function save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch { /* storage full or unavailable */ }
  }

  function ensureGame(data, name) {
    if (!data[name]) {
      data[name] = { plays: 0, highScore: 0, totalPlayTime: 0 };
    }
    return data;
  }

  function trackTime() {
    if (!currentGame || !playStartTime) return;
    const elapsed = Math.floor((Date.now() - playStartTime) / 1000);
    if (elapsed > 0) {
      const data = ensureGame(load(), currentGame);
      data[currentGame].totalPlayTime += elapsed;
      save(data);
    }
    playStartTime = Date.now();
  }

  // Flush time on page hide / unload
  function bindVisibility() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) trackTime();
      else playStartTime = Date.now();
    });
    window.addEventListener('beforeunload', trackTime);
  }

  return {
    /**
     * Initialize analytics for a game. Call once on page load.
     * @param {string} gameName - unique slug, e.g. 'neon-snake'
     */
    init(gameName) {
      currentGame = gameName;
      playStartTime = Date.now();
      bindVisibility();
    },

    /** Increment play count for the current game. */
    trackPlay() {
      if (!currentGame) return;
      const data = ensureGame(load(), currentGame);
      data[currentGame].plays += 1;
      save(data);
    },

    /**
     * Set high score if the new score is higher.
     * @param {number} score
     */
    setHighScore(score) {
      if (!currentGame) return;
      const data = ensureGame(load(), currentGame);
      if (score > data[currentGame].highScore) {
        data[currentGame].highScore = score;
        save(data);
      }
    },

    /** Get stats for the current game. */
    getStats() {
      if (!currentGame) return null;
      trackTime();
      const data = ensureGame(load(), currentGame);
      return { game: currentGame, ...data[currentGame] };
    },

    /** Get stats for every tracked game. */
    getAllStats() {
      trackTime();
      return load();
    },

    /** Manually flush accumulated play time. */
    flush() {
      trackTime();
    }
  };
})();

// Support both module and script-tag usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GameAnalytics;
}
