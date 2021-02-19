const { playSound } = require('./SoundEffects');
const { setTheme, setRandomTheme } = require('./VSCode');
const { hue, lightIds } = require('./HueLights');
const { getCurrentSong } = require('./Pretzel');
module.exports = {
    playSound,
    setTheme,
    setRandomTheme,
    hue,
    lightIds,
    getCurrentSong,
};
