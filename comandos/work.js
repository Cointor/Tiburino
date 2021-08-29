module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
const embed = new Discord.MessageEmbed()
      .setTitle("Upadates : ")                          // <:CMD:769249227301716049>
      .setColor("61d3ca")
      .setDescription("\<:CMD:769249227301716049> Versión actualizada | V `1.4` \n \n \<:Verde:769249480159002694> Actualización completa del bot, Todos los comandos se reescribieron desde 0, Ahora hay mejor rendimiento del bot")
      .setFooter(client.users.resolve("743286312026767452").username , client.users.cache.get("743286312026767452").displayAvatarURL());
      message.channel.send(embed);
}
