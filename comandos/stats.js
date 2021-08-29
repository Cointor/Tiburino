module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
const embed = new Discord.MessageEmbed()
              .setAuthor("Tiburino", client.user.avatarURL())
              .setThumbnail(client.user.avatarURL())
              .setImage("https://media.discordapp.net/attachments/769761491062358056/817990209663926282/Banner.png?width=1025&height=332")
              .setColor(0x61d3ca)
              .addField("Desarrollador :", `<@732403926862659625>`)
              .addField("Servidores : ", ` ${client.guilds.cache.size}`)
              .addField("Usuarios : ", ` ${client.users.cache.size}`)
              .addField("Memoria consumida : ", ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
              .addField("Lenguaje : ", " JavaScript")
              .addField("Libreria : ", "Discord.js v12.16.1")
              .addField("Servidor de Soporte  : ","[Click Aqui](https://discord.gg/8yB89Xfm3G)")
              
              message.channel.send(embed)
}
