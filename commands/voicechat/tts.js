const  { getAudioUrl } = require('google-tts-api');

module.exports = {
  name: 'say',
  aliases: ['tts', 's'],
  category: 'voicechat',
  run: async (client, message, args) => {
    if (!args[0]) return message.channel.send('Vui lòng nhập gì đó');
    const string = args.join(' ');
    if (string.length > 200) return message.channel.send('Vui lòng nhập dưới 200 ký tự !');
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel) return message.reply('Bạn phải ở trong voice chat để sử dụng lệnh !');
    const audioUrl = await getAudioUrl(string, {
      lang: 'vi',
      slow: false,
      host: 'https://translate.google.com',
      timeout: 1000000,
    });
    try {
      voiceChannel.join().then(connection => {
        const dispatcher = connection.play(audioUrl);
        dispatcher.on('finish', () => {
          voiceChannel.join();
        });
      });
    }
    catch (e) {
      message.channel.send('Bot lỗi vui lòng thử lại sau !');
      console.error(e);
    };
  },
};