const Discord = require ("discord.js");
exports.run = (client, message) => {
const Embed = new Discord.MessageEmbed()
.setColor("RED")
.setImage("https://cdn.discordapp.com/attachments/955830397932027904/956205403249733642/CourageousPeskyAnole-size_restricted.gif")
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();
return message.channel.send(Embed)
.then; 
};
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  exports.help = {
    name: 'itfaiye', 
    description: 'Bot İtfaiye Gifi Atar', 
    usage: 'itfaiye'
};