module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
let id = message.guild.id;
  const embed = new Discord.MessageEmbed()
  .setTitle("<:Luckyblock:769253493122007092> Versión Actual")
    .setColor(0x61d3ca)
    .setDescription("\n **V 1.4.0.0**")  
    .setFooter('discord.gg/8yB89Xfm3G');
    message.channel.send(embed);
}
