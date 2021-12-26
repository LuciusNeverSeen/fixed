require('dotenv').config();
const  prefix  = process.env.PREFIX;
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "prefix",
  category: "util",
  description: " Show bot's default prefix !",
  run: async (client, message, args) => {
    const e = new MessageEmbed()
    .setDescription(`**Default prefix**\n\ ${prefix}`)
    .setColor('GREEN')
    message.channel.send (e)
  }
}