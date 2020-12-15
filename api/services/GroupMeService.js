//var events = require('events');
//var eventEmitter = new events.EventEmitter();
const GroupMeAdapter = require('../adapters/GroupMeAdapter.js');
var regex = require('regex');

var groupMeAdapter;

class GroupMeService {
    constructor() {
        groupMeAdapter = new GroupMeAdapter();
    };

    //TODO change all of this stuff to publish/subscribe architecture
    //TODO add model for jsonMessage coming in from GroupMe
    handleCallback(req, res) {
        var jsonMessage = JSON.parse(JSON.stringify(req.body));
        var botRegex = /@sleeperbot/i;
        var test = botRegex.test(jsonMessage.text);
        console.log("GroupMe message text: " + jsonMessage.text + "\nRegEx Match: " + test);
        if(jsonMessage.name != "Sleeper Bot" && test) {
            this.postMessage(jsonMessage.text);
        };
    }
    
    // invoked (messageText) {
    //     try {        
    //         var botRegex = /(?i)@sleeperbot/;
    //         var test = messageText && botRegex.test(messageText);
    //         console.log("RegEx Test: " + test);
    //         return messageText && botRegex.test(messageText);
    //     } catch(error) {
    //         return false;
    //     };
    // }

    parseMessage (message) {
        console.log(message);
    }

    postMessage (message) {
        groupMeAdapter.postMessage(message);
    }
};

module.exports = GroupMeService;