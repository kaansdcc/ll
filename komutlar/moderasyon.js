const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("v12 sürümüyle sizlerle.")
.setTitle(" Moderasyon Komutları ")
 .setTimestamp()
.setDescription(" **!sil** = Yazdığınız miktarda mesajı siler.  \n  **!ban** = Etiketlediğiniz kişiyi banlarsınız.  \n  **!kick** = Etiketlediğiniz kişiyi atarsınız.   \n  **!duyuru** = Bota duyuru yaptırırsınız.  \n  **!küfür** = Küfür engel sistemini açarsınız.  \n  **!reklam** = Reklam engel sistemi açarsınız.  \n  **!slowmode** = Yavaş modu ayarlarsınız.  \n  **!forceban** = Birisine id ban atarsınız.  \n  **!unban** = Birisinin banını açarsınız.  \n  **!üyedurum** = Üyelerin durumlarını görürsün.  \n  **!çekiliş** = Çekiliş başlatırsınız.   \n **!yapımcım** = yapımcımı gösterir   \n  **!nuke** = kanalı siler ve tekrar yapar.  \n  **!toplamkomut** = toplam komut sayısını gösterir \n **!copy** = kanal kopyalar \n **!say** = Toplam Kullanıcı Sayısını Verir \n **!davet** = Botu Davet Edersin \n **!oylama** = Oylama yaparsın \n **!sunucukur** = Bot Sunucu Kurur")
.setImage("https://cdn.discordapp.com/attachments/947400801553354752/954697612995481610/game-of-thrones-white-walker.gif")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}