const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("jarvis v12 sürümüyle yeniden sizlerle.")
.setTitle(" Eğlence Komutları ")
 .setTimestamp()
.setDescription(" **!tersyazı** = Bir Yazıyı Bot Ters Yazar. \n **!zar-at** = Bot Zar Atar \n **!mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **!fbi** = Bot FBi Gif Atar.  \n  **!token** = Tokenimi Öğrenmek İstemezmisin?  \n  **!düello** = Düello Atarsın.  \n  **!wasted** = Polis tarafından yakalanırsın.  \n  **!atatürk** = Dene ve gör... (1881-1938) \n **!lafat** = Bot Laf Atar. \n **!a101** = a101 komutudur \n **!aşkölçer** = Aşk Ölçmeni sağlar \n **!çıkma-teklifi-et** = Çıkma Teklifi Edersin \n **!ara155** = Polisi Arar \n **!ağla** = Bot Ağlar \n **!balık-tut** = Balık Tutarsın \n **!kralol** = Kral olursun \n **!espiri** = Bot espiri yapar \n **!adamasmaca** = Adamasmaca oyununu başlatırsın \n **!sor** = Bota soru sorarsın")

 .setImage("https://cdn.discordapp.com/attachments/947400801553354752/954697612995481610/game-of-thrones-white-walker.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}