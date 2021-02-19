const axios = require('axios');
const pretzelURL = `https://api.pretzel.tv/playing/twitch/${process.env.TWITCH_ID}`;

const getCurrentSong = async () => {
    try {
        const { data: song } = await axios.get(pretzelURL);
        return { err: null, data: song };
    } catch (err) {
        console.error(err);
        return { err };
    }
};

module.exports = {
    getCurrentSong,
};
