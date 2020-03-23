const Commando = require('discord.js-commando');

module.exports = class KickCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'mod',
            memberName: 'kick',
            description: 'Kicks a user from the guild.',
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
        if (args) {
            user = msg.guild.members.get(args[0]); // checks if userid has been provided
        }
        if (user) {
            if (user.kickable) {
                args.shift(); // removes the mention
                let reason = args.join(" "); // puts together the reason.
                let message = `The user has been kicked for the following reason: ${reason}`;
                user.kick(message)
                    .then(m => console.log(message))
                    .then(m => msg.channel.send(message))
                    .catch(err => console.log(err))
            } else {
                msg.channel.send("This user cannot be kicked by you.");
            }
        } else {
            msg.channel.send("No user has been mentioned.");
        }
    }
};