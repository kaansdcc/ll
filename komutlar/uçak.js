const Discord = require ("discord.js");
exports.run = (client, message) => {
const Embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setImage("https://cdn.discordapp.com/attachments/954756294177349682/988468122149351474/b07a6c018acefd21db2227c0552178c6.gif")
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
    name: 'uçak', 
    description: 'uçak uçar', 
    usage: 'uçak'
};