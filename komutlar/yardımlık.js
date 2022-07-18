const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`MUHAMMED DEMİREL Moderasyon Yardım Menusü`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
.setDescription("<a:dart:813712609714110504> **!eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n <a:gear:813714047030525982> **!moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n <a:sunglasses:813714441006612481> **!kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n <a:zap:813714783962529803> **!logo** = __Logo komutlarını görüntülersiniz__. \n :ghost: **!gif** = __Gif komutlarını görüntülersiniz__. \n :no_entry: **!kayıtsistemi** = __Kayıt sistemi komutlarını görüntülersiniz__. \n :military_helmet: **!profilsistemi** = __Profil sistemi komutlarını görüntülersiniz__.  ")
  .addField(" • Kategoriler:", `> • [!kullanıcı](Link): **Kullanıcı yardım menüsünü gösterir.**\n > • [!moderasyon](Link): **Moderasyon yardım menüsünü gösterir.**\n > • [!kayıtsistemi](Link): ** Kayıt sistemi yardım menüsünü gösterir.**\n > • [!korumasistemi](Link): ** Koruma sistemi yardım menüsünü gösterir.**\n > • [!logosistemi](Link): ** Logo sistemi yardım menüsünü gösterir.**\n > • [!çekilişsistemi](Link): ** Çekiliş sistemi yardım menüsünü gösterir.**`)
  .addField(" • Güncelleme Notları:", "**Güncelleme v0.4:** Çekiliş sistemi eklendi!")

  .addField(" • Linkler:", "• [Davet Et](https://discord.com/oauth2/authorize?client_id=849214555052834827&scope=bot&permissions=8) • [Destek Sunucusu](https://discord.gg/g7dWfHD6) • [Web Site](https://dcbotlar.xyz) •")
  .setImage("")
.setFooter("Asreaper", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "westra",
    usage: "westra"
}
