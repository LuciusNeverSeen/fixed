const { WebhookClient } = require('discord.js')
const webhookClient = new WebhookClient(
  process.env.WEBHOOK_ID,
  process.env.WEBHOOK_TOKEN,
);
require('dotenv').config()

module.exports = {
  name: "chat1",
  run: async (client, message, args) => {
    if (message.deletable) message.delete()
    const msg = args.join (' ');
    if(!msg) return message.channel.send('Enter something for bot to say !')
    webhookClient.send(msg)
  }
}