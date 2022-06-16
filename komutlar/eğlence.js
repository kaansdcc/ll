const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("jarvis v12 sürümüyle yeniden sizlerle.")
.setTitle(" Eğlence Komutları ")
 .setTimestamp()
.setDescription(" **d+tersyazı** = Bir Yazıyı Bot Ters Yazar.  \n  **d+mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **d+fbi** = Bot FBi Gif Atar.  \n  **d+token** = Tokenimi Öğrenmek İstemezmisin?  \n  **d+düello** = Düello Atarsın.  \n  **d+wasted** = Polis tarafından yakalanırsın.  \n  **d+atatürk** = Dene ve gör... (1881-1938) \n **d+lafat** = Bot Laf Atar. \n **d+a101** = a101 komutudur \n **d+aşkölçer** = Aşk Ölçmeni sağlar. ")

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