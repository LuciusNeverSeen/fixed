const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "owner",
  category: "util",
  run: async (client, message, args) => {
    const text = args.join("+");
    const e = new MessageEmbed()
      .setColor('YELLOW')
      .setDescription(`**Server owner**: <@!${message.guild.ownerID}>`)
    message.channel.send(e);
  },
};function randomColor() {
 let colors = ["RED", "GREEN", "YELLOW", "BLUE", "ORANGE", "PURPLE", "WHITE", "BLACK"]
  return colors[Math.floor(colors.length * Math.random())]
}