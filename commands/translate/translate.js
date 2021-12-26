const { Client, Message, MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const translate = require("@iamtraction/google-translate");

module.exports = {
  name: "translate",
  aliases: ['vi'],
  category: 'translate',
  usage: 'translate <text>',
  description: 'Translate any language to english !',
  run: async (client, message, args) => {
    const query = args.join(' ');
    if (!query) return message.reply("Please specify a text to translate");

    const translated = await translate(query, {to: 'vi' });
    const e = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${ message.author.displayAvatarURL({ dynamic: false })}`)
    .setDescription("**Content**: " + "`" + query + "`"+ "\n**Translated**: " + "`" + `${translated.text}` + "`" )
    .setTimestamp()
  message.reply(e);
  },
};