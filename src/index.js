const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);
});

client.on('messageCreate', (message) => {
    if (message.content.includes('has created a new ticket')) {
        message.reply('pong');
    }
})

client.login("MTI1NDQzMTU5MDY4ODQ5MzY5MA.GLB0VW.GWFNBBh1WIzl_1mFU8KOG4hD52if3TLSFbWYg4")