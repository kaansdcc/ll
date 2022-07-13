const Discord = require('discord.js');


exports.run = (client, message, params) => {
    if(message.author.id === message.guild.owner.id) {
      
            message.channel.send(new Discord.MessageEmbed().setColor('#000000').setTitle('Komut girişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
message.guild.roles.create({ data: { name: 'Kurucu' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#070719');
});
message.guild.roles.create({ data: { name: 'Yönetici' }, reason: 'ayn' }).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'KICK_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#3b0b0b');
});
message.guild.roles.create({ data: { name: 'Moderatör' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: '・Kayıt Sorumlusu' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '・Vip' }, reason: 'ayn' }).then(s => s.setColor('#f4fa58'))
message.guild.roles.create({ data: { name: '♀・KIZ' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))
message.guild.roles.create({ data: { name: '♂・ERKEK' }, reason: 'ayn' }).then(s => s.setColor('#2e9afe'))
message.guild.roles.create({ data: { name: '・Üye' }, reason: 'ayn' }).then(s => s.setColor('#00ff40'))
message.guild.roles.create({ data: { name: '・Botlar' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: '🎤・Sesi Güzel' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))
message.guild.roles.create({ data: { name: '🤯・ŞAKAMATİK' }, reason: 'ayn' }).then(s => s.setColor('#ffff00'))
message.guild.roles.create({ data: { name: '🕋 ・Elhamdülillah' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: '🍽️・Doymuyor' }, reason: 'ayn' }).then(s => s.setColor('#2e9afe'))
message.guild.roles.create({ data: { name: '🍌・Gececi' }, reason: 'ayn' }).then(s => s.setColor('#8000ff'))
message.guild.roles.create({ data: { name: '🎮 | CSGO' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: '🎮 | Zula' }, reason: 'ayn' }).then(s => s.setColor('#29cb79'))
message.guild.roles.create({ data: { name: '🎮 | Apex Legends' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))
message.guild.roles.create({ data: { name: '🎮 | Pubg Mobile' }, reason: 'ayn' }).then(s => s.setColor('#2efec8'))
message.guild.roles.create({ data: { name: '🎮 | League of Legends' }, reason: 'ayn' }).then(s => s.setColor('#3299d8'))
message.guild.roles.create({ data: { name: '🎮 | Mobile Legends' }, reason: 'ayn' }).then(s => s.setColor('#ffbf00'))
message.guild.roles.create({ data: { name: '🎮 | PUBG' }, reason: 'ayn' }).then(s => s.setColor('#81f79f'))
message.guild.roles.create({ data: { name: '🎮 | Fortnite' }, reason: 'ayn' }).then(s => s.setColor('#5882fa'))
message.guild.roles.create({ data: { name: '・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#ffffff')) 


            message.guild.channels.create(`ÖNEMLİ KANALLAR`, { type: 'category'});
   message.guild.channels.create(`「📜」kurallar`, {type : "text"})
    .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
   message.guild.channels.create(`「✅」giriş-çıkış「❌」`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
   message.guild.channels.create(`「🎉」duyuru`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
   message.guild.channels.create(`「🎥」video-odası`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
             message.guild.channels.create(`SOHBET KANALLARI`, { type: 'category'});
   message.guild.channels.create(`「💬」sohbet`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`「📈」komutlar`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`「☯」rank-chat`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`「📷」foto-chat`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`「💎」şikayet-odasi`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
              message.guild.channels.create(`SES KANALLARI`, { type: 'category'});
   message.guild.channels.create(`Genel Sohbet`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
   message.guild.channels.create(`♫ Müzik Odası`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
   message.guild.channels.create(`Bekleme Odası`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
            message.guild.channels.create(`LOL`, { type: 'category'});
message.guild.channels.create(`🎮》LOL 1`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "LOL")))
message.guild.channels.create(`🎮》LOL 2`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "LOL")))
message.guild.channels.create(`🎮》LOL 3`, {type : "voice"})
                               message.guild.channels.create(`LOL`, { type: 'category'});
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "LOL")))
 message.guild.channels.create(`🎮》ZULA`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
 message.guild.channels.create(`🎮》COUNTER STRİKE`,{type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
 message.guild.channels.create(`🎮》PUBG`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
  message.guild.channels.create(`🎮》FORTNİTE`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
   message.guild.channels.create(`🎮》MİNECRAFT`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
    message.guild.channels.create(`🎮》ROBLOX`,{type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
     message.guild.channels.create(`🎮》WOLFTEAM`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "OYUN ODALARI")))
  message.channel.send("Gerekli kanallar ve roller kuruluyor. :)")
          });
});
        
    } else {
        message.channel.send(':x: **Üzgünüm ama bu komutu sadece sunucu sahibi kullanabilir!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-kur"],
  permLevel: 3,
  kategori: "mod"
};


exports.help = {
  name: 'sunucukur',
  description: 'Sunucuyu kurar.',
  usage: 'sunucukur'
};