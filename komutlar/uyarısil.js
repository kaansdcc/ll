const Discord = require('discord.js');
const db = require('quick.db'); 


exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`⛔ Bu komutu kullanabilmek için **yeterli izne sahip değilsin!**`); 
  let Fynex = args.slice(1).join(' ')
  if (!args[0]) return message.channel.send('? Kimi uyaracağını yazmalısın.')
  let endlesslove = message.mentions.users.first() || bot.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user
  if (!endlesslove) return message.channel.send('❓ Kullanıcıyı bulamadım.') 
  let eendlesslove = message.guild.member(endlesslove)
  if (!endlesslove) return message.channel.send('❓ Kullanıcıyı **bulamadım.**')

  if (!Fynex) return message.reply('⛔ Uyarı silme sebebini yazmalısın.').catch(console.error); 
  message.channel.send(` ⚠️ **${endlesslove.tag}** adlı kullanıcıyı uyarısını silmek istediğinize **emin misiniz?** Lütfen **evet (e)** veya **hayır (h)** ile cevap verin.\n\n\`30\` saniye içerisinde iptal edilcektir.`) 
  let uwu = false; 
  while (!uwu) {
    const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 }); 
    const endlesslove = response.first().content
    if (endlesslove == 'hayır' || endlesslove == 'h') return message.channel.send('? İşlem iptal **edildi.**') 
    if (endlesslove !== 'evet' && endlesslove !== 'e') { 
      message.channel.send('❓ Lütfen sadece **evet (e)** veya **hayır (h)** ile cevap verin.') 
    } 
    if (endlesslove == 'evet' || endlesslove == 'e') uwu = true 
  } 
  if (uwu) { 
    let uyarı = await db.delete(`uyarı.${endlesslove.id+message.guild.id}`, 1) 
    message.channel.send(` ✔️ **${endlesslove.tag}** Başarıyla **uyarısı silindi!**\nBu kullanıcının şuan **${db.get(`uyarı.${endlesslove.id+message.guild.id}`) || '0'}** uyarısı var.`) 
    endlesslove.send(` ⚠️ **${message.guild.name}** adlı sunucudan **uyarı silindi!**\n*Sebep:* \`\`\`${Fynex}\`\`\``) 
    let endlesslove2 = new Discord.RichEmbed()
    .setColor("#FFB900") 
    .setAuthor(`✔️ ${endlesslove.username} adlı kişinin uyarısı silindi!`,
               endlesslove.avatarURL||endlesslove.defaultAvatarURL)
    .addField('⚠️ Uyarısı silinen Kullanıcı', `**${endlesslove.tag}** **[**\`${endlesslove.id}\`**]**`, true)
    .addField('? Uyarıyı silen Yetkili', `**${message.author.tag}** **[**\`${message.author.id}\`**]**`, true) 
    .addField('❓Uyarı silme Nedeni', Fynex, true)
    .addField('⚠️Uyarı Sayısı', db.get(`uyarı.${endlesslove.id+message.guild.id}`) || '0', true);
    let membermodChannel = await db.fetch(`membermodChannel_${message.guild.id}`) 
    if (!message.guild.channels.get(membermodChannel)) return
    else message.guild.channels.get(membermodChannel).send(endlesslove2)} 
  else return console.log('Hata var')
}; 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['uyarsil', 'uyaruısil'], 
  permLevel: 2
};
exports.help = {
  name: 'uyarsil', 
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyarsil [kullanıcı] [sebep]' 
};