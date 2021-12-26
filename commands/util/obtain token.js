const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "token",
  category: "util",
  description: "Code to obtain token",
  run: async (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
    const token = new MessageEmbed()
      .setColor("GREEN")
      .setTitle("Code to obtain token")
      .setDescription(`Object.values(webpackChunkdiscord_app.push([[Math.random()], [], (e) => r=e.c])).find(m => m.exports && m.exports.default && m.exports.default.getToken).exports.default.getToken()`)
    message.channel.send(token)
  }
}