const { MessageEmbed } = require("discord.js");
const client = require('../index');
const prefix = process.env.PREFIX
client.on('message', message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.content.toLocaleLowerCase() == `<@!${client.user.id}>`) {
    message.channel.send(`Default Prefix: ${prefix}`)
  }
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const cmd = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args);
})