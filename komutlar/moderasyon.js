const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("v12 sürümüyle sizlerle.")
.setTitle(" Moderasyon Komutları ")
 .setTimestamp()
.setDescription(" **d+sil** = Yazdığınız miktarda mesajı siler.  \n  **d+ban** = Etiketlediğiniz kişiyi banlarsınız.  \n  **d+kick** = Etiketlediğiniz kişiyi atarsınız. \n **d+mute** = istediğiniz kullanıcıya mute atarsın  \n  **d+duyuru** = Bota duyuru yaptırırsınız.  \n  **d+küfür** = Küfür engel sistemini açarsınız.  \n  **d+reklam** = Reklam engel sistemi açarsınız.  \n  **d+slowmode** = Yavaş modu ayarlarsınız.  \n  **d+forceban** = Birisine id ban atarsınız.  \n  **d+unban** = Birisinin banını açarsınız.  \n  **d+sa-as** = Bot biri sa dedimi cevap verir.  \n  **d+sunucubilgi** = Sunucu bilgilerini görürsün.  \n  **d+üyedurum** = Üyelerin durumlarını görürsün.  \n  **d+çekiliş** = Çekiliş başlatırsınız.   \n **d+yapımcım** = yapımcımı gösterir   \n  **d+nuke** = kanalı siler ve tekrar yapar.  \n  **d+toplamkomut** = toplam komut sayısını gösterir \n **d+copy** = kanal kopyalar")
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