//var events = require('events');
//var eventEmitter = new events.EventEmitter();
const natural = require('natural');

var _sleeperService, _matchupsService, _groupMeAdapter;

class GroupMeService {
    constructor(sleeperService, matchupsService, groupMeAdapter) {
        _sleeperService = sleeperService;
        _matchupsService = matchupsService;
        _groupMeAdapter = groupMeAdapter;
    };

    //TODO change all of this stuff to publish/subscribe architecture
    //TODO add model for jsonMessage coming in from GroupMe
    handleCallback = async (req, res) => {
        var jsonMessage = JSON.parse(JSON.stringify(req.body));
        var isValidSender = jsonMessage.name != "Sleeper Bot";

        if(isValidSender && this.botInvoked(jsonMessage.text)) {
            this.parseMessage(jsonMessage);
            _groupMeAdapter.postMessage("i can't take arguments yet :( coming soon...");
        }
    }
    
    botInvoked = (messageText) => {
        var botRegex = /@sleeperbot/i;
        return botRegex.test(messageText);
    }

    parseMessage = (jsonMessage) => {
        const tokenizer = new natural.WordTokenizer();
        let tokenArray = tokenizer.tokenize(jsonMessage.text);
        let argument = tokenArray[1];
        this.argumentsHandler(argument);
    }

    argumentsHandler = (argument) => {
        switch(argument) {
            case /standings/i:

            break;
            case /injuries/i:

            break;
            case /matchup/i:
                _sleeperService.
                break;
            default:
                //
        }
    }
};

module.exports = GroupMeService;