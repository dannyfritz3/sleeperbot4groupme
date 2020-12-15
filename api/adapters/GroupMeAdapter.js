const axios = require('axios');
const groupMeApiBaseUrl = "https://api.groupme.com/v3/bots/post";
const botId = "7645b38769f3684a49319a64ee";

module.exports = class GroupMeAdapter {
    constructor() {};

    postMessage = async (message) => {
        console.log("Posting Message: " + message);
        const url = `${groupMeApiBaseUrl}`
        var response = await axios.post(url, {"text": message, "bot_id": botId});
        return response;
    };
};