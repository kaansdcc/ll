
const { MessageAttachment, MessageEmbed } = require('discord.js');
 
const xpfile = require("../msgData.json"); //Pasador Code
module.exports.run = async (client, message, args) => {
  const level = xpfile[message.author.id].level
  if(level === undefined) level = "0"
  if(level === null) level = "0" //Pasador Code
  const xp = xpfile[message.author.id].xp
  if(xp === undefined) xp = "0" //Pasador Code
  if(xp === null) xp = "0"
  const totalxp = xpfile[message.author.id].reqxp
  if(totalxp === undefined) totalxp = "0"
  if(totalxp === null) totalxp = "0"//Pasador Code
const canvas = createCanvas(1000,333);//Pasador Code
const ctx = canvas.getContext("2d")//Pasador Code
const background = await loadImage("https://cdn.discordapp.com/attachments/834125662565564426/836729027993665547/unknown.png");
ctx.drawImage(background, 0, 0, canvas.width, canvas.height)  //Pasador Code
ctx.lineWidth = 4;
ctx.strokeStyle = "#ffffff";
ctx.globalAlpha = 0.2;
ctx.fillStyle = "#000000";
ctx.fillRect(180, 216, 770, 65);
ctx.fill(); 
ctx.globalAlpha = 1;
ctx.strokeRect(180, 216, 770, 65);//Pasador Code
ctx.stroke();//Pasador Code
ctx.fillStyle = "#ff7306";//Pasador Code
ctx.globalAlpha = 0.6;//Pasador Code
ctx.fillRect(180, 216, ((100 / (totalxp)) * xp) * 7.7, 65);// level* 40
ctx.fill();//Pasador Code
ctx.globalAlpha = 1;//Pasador Code
ctx.font = "30px Arial";//Pasador Code
ctx.textAlign = "center";  
ctx.fillStyle = "#ffffff";  
ctx.fillText(`${xp} / ${totalxp} XP`, 600, 260);
ctx.textAlign = "left";
ctx.fillStyle = "#ffffff";
ctx.fillText(`${message.author.tag} Mesaj İstatistikleri:`, 300, 120);//Pasador Code
ctx.fillStyle = "#ffffff";//Pasador Code
ctx.font = "50px Arial";//Pasador Code
ctx.fillText("Level:", 300, 180);  //Pasador Code
ctx.fillText(level, 450, 180);//Pasador Code
ctx.arc(170, 160, 120, 0, Math.PI * 2, true);//Pasador Code
ctx.lineWidth = 6;//Pasador Code
ctx.strokeStyle = "#ffffff";//Pasador Code
ctx.stroke();//Pasador Code
ctx.closePath();//Pasador Code
ctx.clip();//Pasador Code
const avatar = await loadImage(message.author.displayAvatarURL({ format: "jpg"}))  
ctx.drawImage(avatar, 40, 40, 250, 250);
const final = new MessageAttachment(canvas.toBuffer(), "rank.png")  
message.channel.send(final)
}//Pasador Code
exports.conf = {
  enabled: true, //Pasador Code
  guildOnly: true, 
  aliases: ['stat',"msg","me","levelim"],
  permLevel: 0 
};//Pasador Code

exports.help = {//Pasador Code
  name: 'level'
};