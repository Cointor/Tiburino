module.exports = async (client, message, args) => { 
    const Discord = require('discord.js');
    
let id = message.guild.id;
  const embed = new Discord.MessageEmbed()
    .setColor(0x61d3ca)
    .setDescription("**Roles acomodados por fecha de creación :**  \n" + client.guilds.resolve(id).roles.cache.map(r => r.toString()).join("\n "))  
    .setFooter('Lista de roles de: '+ message.guild.name);
    message.channel.send(embed);geAttachment(res)
    message.channel.send(attachament)
    
}
