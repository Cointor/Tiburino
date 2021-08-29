module.exports = (client, message, args) => { 
 const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
      .setTitle("Mis colaboradores :") 
      .setColor("61d3ca")
      .setDescription("Invocaste el comando `<clb`")  
      .addField("Soy lo que soy gracias a ellos :","`Creador :` <@732403926862659625>  \n `Helper :` \<@!705782859398381620> ")
      .setFooter(client.users.resolve("743286312026767452").username , client.users.cache.get("743286312026767452").displayAvatarURL());
      message.channel.send(embed);

}
