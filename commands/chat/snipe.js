const Discord = require("discord.js")
const db = require("quick.db")
const moment = require("moment")

module.exports = {
  name: "snipe",
  aliases: ["ms", "messagesnipe"],
  category: "chat",
  usage: "(prefix)snipe",
  description: "Get last message which is deleted with message Author and Image(If any)",
  run:async (client, message, args) => {
    
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send("Nothing to snipe")
    const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, `${ msg.author.avatarURL({ dynamic: true })}`)
    .setDescription(msg.content)
    if(msg.image)embed
    .setImage(msg.image)
    .setTimestamp()
    
    message.channel.send(embed)
   
    
  }
}