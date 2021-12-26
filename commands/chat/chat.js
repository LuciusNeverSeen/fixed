const discord = require("discord.js");

module.exports = {
  name: "chat",
  category: "info",
  run: async (client, message, args) => {
    if(message.deletable) message.delete()
    const query = args.join(' ');
    if (!query) return message.reply("Please specify a text to send");
    
   message.channel.send(query)
  }
}