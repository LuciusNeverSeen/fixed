const discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    message.channel.send(`Pong !`)
    .then((msg) => {
      setTimeout(function() {
        msg.edit(`Pong !` + "`" + `${client.ws.ping}ms` + "`" )
      }, client.ws.ping)
    })
  }
}