module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
 let member = message.mentions.members.first()
  || message.guild.members.resolve(args[0])
  || message.member
      
const embed = new Discord.MessageEmbed()
  .setImage( member.user.displayAvatarURL({ size: 1024, dynamic: true, format: "png" }))
  .setColor(member.displayHexColor)
  .setFooter(
    (member.id === message.member.id)?`Tu foto ${member.displayName}`:`Foto de ${member.displayName}`
  );
 
message.channel.send(embed);
}
