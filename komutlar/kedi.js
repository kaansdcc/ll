const Discord = require('discord.js');
exports.run = (client, message) => {
  
  const code = new Discord.MessageEmbed()
  
  .setColor("#ff0000")
  .setDescription('**Ben kedi :)**')
  .setImage('https://cdn.discordapp.com/attachments/955830397932027904/956517347437473843/kitty-highkitten.gif')
  message.channel.send(code);
  
}

exports.conf = {
  enabled: true,
  guilOnly: false,
  aliases: ['kedidir'],
  permLevel: 0
}

exports.help = {
  name: 'kedi',
  description: 'kedi',
  usage: 'kedi'
};