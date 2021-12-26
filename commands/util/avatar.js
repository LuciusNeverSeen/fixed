const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "avatar",
  aliases: ['avt'],
  category: "util",
  run: async (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
    const avatarEmbed = new MessageEmbed()
      .setColor("GREEN")
      .setImage(member.user.displayAvatarURL({ format: 'jpg', dynamic: true, size: 1024 }))
      .setTitle(`Avatar for ${member.user.username}#${member.user.discriminator}`)
      .setDescription(`Link as\n[png](${member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}) | [jpg](${member.user.displayAvatarURL({ format: 'jpg', dynamic: true, size: 1024 })}) | [webp](${member.user.displayAvatarURL({ format: 'webp', dynamic: true, size: 1024 })})`)
    message.channel.send(avatarEmbed)
  }
}