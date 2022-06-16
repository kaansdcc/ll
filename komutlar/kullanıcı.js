const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("jarvis v12 sürümüyle yeniden sizlerle.")
.setTitle(" Kullanıcı Komutları ")
 .setTimestamp()
.setDescription(" **d+avatar** = Avatarınıza bakarsınız.  \n  **d+yetkilerim** = Yetkilerini görürsün.  \n  **d+profil** = Profilini görürsün.  \n  **d+sunucuresmi** = Sunucu resmini gösterir.  \n  **d+ping** = Botun Pingine Bakarsın.  \n **d+id** = Birisinin id'sine Bakarsın.  \n   \n **d+botbilgi** = Bot istatistiklerini görürsünüz.  \n  **d+bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. ").setImage("https://cdn.discordapp.com/attachments/947400801553354752/954697612995481610/game-of-thrones-white-walker.gif")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}