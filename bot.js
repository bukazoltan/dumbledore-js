const Commando = require('discord.js-commando');
const path = require('path');
const config = require(path.join(__dirname, 'config', 'config.json'));
const client = new Commando.CommandoClient({
    owner: config.owner,
    commandPrefix: config.prefix
});

client.login(config.token);

client.registry.registerGroups([
    ['mod', 'mod commands'],
    ['fun', 'fun commands'],
    ['api', 'api related commands'],
    ['misc', 'misc commands'],
]).registerDefaults().registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log("Bot has logged in!");
});

client.on('presenceUpdate', (older, newer) => {
    // check for correct guild
    if (older.presence.game && newer.presence.game.name) {
        if ((!older.presence.game.name || older.presence.game.name !== "Twitch") && newer.presence.game.name === "Twitch") {
            console.log(`${newer.user.username} is streaming.`);
        };
    }
    // check newMember.presence.game.streaming
    // compare with oldMember.presence.game.streaming to see if they just started streaming
});