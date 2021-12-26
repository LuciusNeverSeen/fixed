const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "botinvite",
  category: "util",
  run: async (client, message, args) => {
    const text = args.join("+");
    const e = new MessageEmbed()
      .setColor('YELLOW')
      .setTitle(`${client.user.username} Invite Link`)
      .setURL("https://discord.com/api/oauth2/authorize?client_id=898467863520751616&permissions=8&scope=bot")
    message.channel.send(e);
  },
};function randomColor() {
 let colors = ["RED", "GREEN", "YELLOW", "BLUE", "ORANGE", "PURPLE", "WHITE", "BLACK"]
  return colors[Math.floor(colors.length * Math.random())]
}