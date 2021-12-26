//import.
const { Client, MessageEmbed, Util, Discord, Collection, Intents } = require("discord.js");
require('dotenv').config();
const moment = require("moment")
require('./server.js');

// HMMm
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
module.exports = client;



client.commands = new Collection();
client.events = new Collection();
client.aliases = new Collection();
client.snipes = new Collection();


["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});


client.snipes = new Map()

client.login(process.env.TOKEN, e => { console.error(e) })