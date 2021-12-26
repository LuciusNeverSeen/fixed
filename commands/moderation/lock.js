const Discord = module.require("discord.js");

module.exports = {
  name: "lock",
  description: "Locks a Channel",
  usage: "lock <channel>",
  category: 'moderation',
  args: true,
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
      return message.channel.send("You dont have permission to use this command !")
    }
    message.channel.overwritePermissions([
      {
        id: message.guild.id,
        deny: ['SEND_MESSAGES'],
      },
    ]);
    message.channel.send(`🔒Locked down ${message.channel} `).then(msg => msg.delete({timeout:5000}));
  }
}