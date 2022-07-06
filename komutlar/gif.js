const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  const embed = new Discord.MessageEmbed()


.setColor('YELLOW')
  .setTitle('Gif Yardım Menüsü')
  .setDescription(`


:white_small_square: | **!uçak:** = Bot uçak gifi atar
:white_small_square: | **!animal:** = Bot hayvan gif atar.
:white_small_square: | **!anime:** = Bot anime  gif atar.
:white_small_square: | **!baby:** = Bot bebek gif atar.
:white_small_square: | **!türk:** = Bot türk gif atar.
:white_small_square: | **!alkış** = Bot alkış gifi atar 
:white_small_square: | **!inek** = Bot inek gifi atar
:white_small_square: | **!itfaiye** = Bot itfaiye gifi atar
:white_small_square: | **!kedi** = Bot kedi gifi atar
`)


.setImage("https://cdn.discordapp.com/attachments/947400801553354752/954697612995481610/game-of-thrones-white-walker.gif")
 message.channel.send(embed) 

}

exports.conf = {

  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["gif"]

}

exports.help = {

  name: 'gif',
  description: 'Gif Menüsünü Açar',
  usage: 'gif'



}