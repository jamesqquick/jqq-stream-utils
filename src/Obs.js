require('dotenv').config();
const OBSWebSocket = require('obs-websocket-js');

if (!process.env.OBS_ADDRESS) {
    throw new Error('OBS_ADDRESS environment variable is required');
}
if (!process.env.OBS_PASSWORD) {
    throw new Error('OBS_PASSWORD environment variable is required');
}
const obs = new OBSWebSocket();

obs.connect({
    address: process.env.OBS_ADDRESS,
    password: process.env.OBS_PASSWORD,
})
    .then(() => {
        console.log(`Success! We're connected & authenticated.`);
    })
    .catch((err) => {
        // Promise convention dicates you have a catch on every chain.
        console.log(err);
    });

module.exports = {
    obs,
};
