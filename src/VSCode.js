require('dotenv').config();
const fs = require('fs');
const os = require('os');

const path = process.env.VSCODE_SETTINGS_PATH;

if (!path) {
    throw new Error('VSCODE_SETTINGS_PATH environment variable is required');
}

const settings = require(path);

const themes = [
    'Shades of Purple',
    'Cobalt2',
    'Night Owl',
    'Dracula',
    'Level Up',
    'Level Up Syntax',
    'codeSTACKr Theme',
    'HotDogStand',
    'Fortnite',
];

const setTheme = (theme) => {
    if (theme === 'random') {
        setRandomTheme();
    } else {
        settings['workbench.colorTheme'] = theme;
        fs.writeFileSync(path, JSON.stringify(settings, null, 4));
    }
};

const setRandomTheme = async () => {
    const currentTheme = settings['workbench.colorTheme'];
    const currentThemeIndex = themes.indexOf(currentTheme);
    let randomIndex = Math.floor(Math.random() * themes.length);

    if (currentThemeIndex >= 0) {
        while (currentThemeIndex === randomIndex) {
            randomIndex = Math.floor(Math.random() * themes.length);
        }
    }

    const theme = themes[randomIndex];
    console.log(`Setting theme to ${theme}`);
    settings['workbench.colorTheme'] = theme;
    await fs.promises.writeFile(path, JSON.stringify(settings, null, 4));
    return theme;
};

module.exports = { setTheme, setRandomTheme };
