const Commando = require('discord.js-commando');

module.exports = class UserInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'botpresence',
            group: 'mod',
            memberName: 'botpresence',
            description: 'Changes the bot presence',
            userPermissions: [
                'KICK_MEMBERS'
            ],
            clientPermissions: [
                'KICK_MEMBERS'
            ],
            argsType: 'single'
        });
    }
    async run(msg, arg) {
        if (arg === "twitch") {
            this.client.user.setPresence({
                game: {
                    name: 'HP1-3 Trifecta',
                    type: "STREAMING",
                    url: "https://www.twitch.tv/nixxoman"
                }
            });
        }
    }
};