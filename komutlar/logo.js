const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" jarvis v12 sürümüyle yeniden sizlerle.")
.setTitle(" Logo Komutları ")
 .setTimestamp()
.setDescription(" **!dinamik** = Dinamik logo oluşturur.  \n  **!altın** = Altın logo oluşturur.  \n **!banner** = Banner logo oluşturur.  \n  **!basit** = Basit logo oluşturur.  \n  **!elmas** = Elmas logo oluşturur.  \n  **!sarı** = Sarı logo oluşturur.  \n **!neonmavi** = Neon mavi logo oluşturur.  \n  **!kalın** = Kalın logo oluşturur.  \n  **!animefont** = Anime yazı tipinde logo oluşturur.  \n  **!habbo** = Habbo yazı tipinde logo oluşturur.  \n  **!arrow** = Ok işaretli logo oluşturur. \n  **!green** = Yeşil logo oluşturur.  \n **!alev** = Alevli logo oluşturur. \n **!red = **kırmızı logo oluşturur** \n !black **= Siyah logo oluşturur** \n !neonyeşil **= Neon yeşil logo oluşturur** \n !neonpembe **= Neon pembe logo oluşturur** \n !korkunç **= Korkunç Logo Yapar")
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