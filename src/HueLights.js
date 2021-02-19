require('dotenv').config();
const Hue = require('@bradgarropy/hue-sdk');

if (!process.env.HUE_LIGHT_IDS) {
    throw new Error('HUE_LIGHT_IDS environment variable is required');
}

if (!process.env.HUE_BRIDGE_IP) {
    throw new Error('HUE_BRIDGE_IP environment variable is required');
}

if (!process.env.HUE_USERNAME) {
    throw new Error('HUE_USERNAME environment variable is required');
}

const hue = new Hue(process.env.HUE_BRIDGE_IP, process.env.HUE_USERNAME);

const lightIds = process.env.HUE_LIGHT_IDS.trim()
    .split(',')
    .map((idStr) => parseInt(idStr));

module.exports = {
    hue,
    lightIds,
};
