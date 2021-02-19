require('dotenv').config();
const soundsDirPath = process.env.SOUND_EFFECTS_DIRECTORY;
const player = require('play-sound')((opts = {}));

if (!soundsDirPath) {
    throw new Error('SOUND_EFFECTS_DIRECTORY environment variable is required');
}

const playSound = async (soundFile) => {
    const soundEffectPath = `${soundsDirPath}${soundFile}`;
    console.log(`Playing sound from: ${soundEffectPath}`);
    player.play(soundEffectPath, function (err) {
        if (err) {
            console.error(err);
        } else {
            ('Sound played successfully');
        }
    });
};

module.exports = {
    playSound,
};
