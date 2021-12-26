const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "gay",
  category: "Fun",
  run: async (client, message, args) => {
    const text = args.join("+");
    const e = new MessageEmbed()
      .setColor('YELLOW')
      .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${ message.author.avatarURL({ dynamic: false })}`)
      .setDescription('gay ' +  Math.floor(Math.random() * 100 + 1) + '%')
    message.channel.send(e);
  },
};function randomColor() {
 let colors = ["RED", "GREEN", "YELLOW", "BLUE", "ORANGE", "PURPLE", "WHITE", "BLACK"]
  return colors[Math.floor(colors.length * Math.random())]
}