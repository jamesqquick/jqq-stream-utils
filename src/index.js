const { playSound } = require('./SoundEffects');
const { setTheme, setRandomTheme } = require('./VSCode');
const { hue, lightIds } = require('./HueLights');

module.exports = {
    playSound,
    setTheme,
    setRandomTheme,
    hue,
    lightIds,
};
