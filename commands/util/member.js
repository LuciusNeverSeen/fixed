const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "member",
  category: "util",
  run: async (client, message, args) => {
    const text = args.join("+");
    const e = new MessageEmbed()
      .setColor('YELLOW')
      .setDescription(`**Members** 
      ${message.guild.memberCount}`)
    message.channel.send(e);
  },
};function randomColor() {
 let colors = ["RED", "GREEN", "YELLOW", "BLUE", "ORANGE", "PURPLE", "WHITE", "BLACK"]
  return colors[Math.floor(colors.length * Math.random())]
}