const Discord = require('discord.js');

exports.run = async (client, message, args) => {

message.channel.send('Bekle..').then(a => {
var para = ['Yazı','Tura'];

setTimeout(() => {
a.edit(`*Para atıldı. Çıkan sonuç:* **${Math.floor(Math.random()*para.length)} **`)
}, 1000);
});

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
}

exports.help = {
  name: 'yazı-tura'
};