module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
const embed = new Discord.MessageEmbed()
      .setTitle("Gracias por querer votar <:TiburinoBaby:770013375697518622>") 
      .setColor("61d3ca")
      .setDescription("Invocaste el comando `<vote`")  
      .addField("Top.gg:", "https://top.gg/bot/743286312026767452/vote")
      .addField("Madking:", "https://madking.us/bot/743286312026767452/vote")
      .setFooter(client.users.resolve("743286312026767452").username , client.users.cache.get("743286312026767452").displayAvatarURL());
      message.channel.send(embed);

}
