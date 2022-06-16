const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" jarvis v12 sürümüyle yeniden sizlerle.")
.setTitle(" Logo Komutları ")
 .setTimestamp()
.setDescription(" d+dinamik** = Dinamik logo oluşturur.  \n  **d+altın** = Altın logo oluşturur.  \n **d+banner** = Banner logo oluşturur.  \n  **d+basit** = Basit logo oluşturur.  \n  **d+elmas** = Elmas logo oluşturur.  \n  **d+sarı** = Sarı logo oluşturur.  \n **d+neonmavi** = Neon mavi logo oluşturur.  \n  **d+kalın** = Kalın logo oluşturur.  \n  **d+anime** = Anime yazı tipinde logo oluşturur.  \n  **d+habbo** = Habbo yazı tipinde logo oluşturur.  \n  **d+arrow** = Ok işaretli logo oluşturur. \n  **d+green** = Yeşil logo oluşturur.  \n **d+alev** = Alevli logo oluşturur. \n **d+red = **kırmızı logo oluşturur**  ")
.setImage("https://cdn.discordapp.com/attachments/947400801553354752/954697612995481610/game-of-thrones-white-walker.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}