const Commando = require('discord.js-commando');

module.exports = class UserInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'userinfo',
            group: 'mod',
            memberName: 'userinfo',
            description: 'Lists info about a user.',
            userPermissions: [
                'KICK_MEMBERS'
            ],
            clientPermissions: [
                'KICK_MEMBERS'
            ],
            argsType: 'multiple'
        });
    }
    async run(msg, args) {
        let user = msg.mentions.members.first(); // gets the user
        console.log(user);
        msg.channel.send("Info sent to console.");
    }
};