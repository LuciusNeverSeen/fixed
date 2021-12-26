const discord = require("discord.js");
module.exports = {
  name: "invite",
  category: "util",
  args: true,
  description:
    "Vui lòng chỉ định lỗi. Ví dụ: \n`punch không hoạt động. Nó không đề cập đến người dùng mà tôi đang cố đấm`",
  usage:
    "Vui lòng chỉ định lỗi. Ví dụ: \n`punch không hoạt động. Nó không đề cập đến người dùng mà tôi đang cố đấm`",
  run: async (client, message, args) => {
    // again make this fit your command handler style 😀
    args = args.join(" ");
    const channels = message.channel;
    let check;
    if (args[0] === "temp") {
      check = "true";
    } else if (args[1] === "temp") {
      check = "true";
    } else {
      check = "false";
    }
    let check2;
    if (args[0] === "temp") {
      check2 = "86400";
    } else if (args[1] === "temp") {
      check2 = "100000000000000000";
    } else {
      check2 = "0";
    }
    channels
      .createInvite({
        temporary: `${check}`,
        maxAge: `${check2}`,
        maxUses: 0,
        reason: `Requested By : ${message.author.username}`
      })
      .then(InviteCode =>
        message.channel.send(
          new discord.MessageEmbed()
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${ message.author.avatarURL({ dynamic: true })}`)
            .setTitle(`${message.guild.name} invite link`)
            .setDescription(`https://discord.gg/${InviteCode.code}`)
            .setColor("GREEN")
        )
      );
  },
    catch (e) {
      message.channel.send('Bot lỗi vui lòng thử lại sau !');
      console.error(e);
    }
};