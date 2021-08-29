module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
const embed = new Discord.MessageEmbed()
.addField("Cantidad de servidores en los que estoy :", `${client.guilds.cache.size}`)
.setColor(0x61d3ca)
message.channel.send(embed)
}
