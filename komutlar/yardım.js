const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("jarvis v12 sürümüyle sizlerle.")
.setTitle("jarvis'in yardım menüsüne hoşgeldin! ")
 .setTimestamp()
.setDescription("<a:dart:813712609714110504> **d+eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n <a:gear:813714047030525982> **d+moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n <a:sunglasses:813714441006612481> **d+kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n <a:zap:813714783962529803> **d+logo** = __Logo komutlarını görüntülersiniz__. \n :ghost: **d+gif** = __Gif komutlarını görüntülersiniz__. ")

.setImage("https://cdn.discordapp.com/attachments/947400801553354752/954697612995481610/game-of-thrones-white-walker.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}