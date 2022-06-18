const Discord = require("discord.js");

exports.run = (client, message) => {
  let say = new Discord.MessageEmbed()
    .setColor("WHİTE")
   .addField("**Toplam Kullanıcı Sayısı**",message.guild.memberCount )
    .setTimestamp()
  return message.channel.send(say);
};

module.exports.conf = {
  aliases: ["say"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "say",
  description: "",
  usage: ""
};
