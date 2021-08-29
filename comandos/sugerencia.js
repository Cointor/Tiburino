module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
let channel = client.channels.cache.get('829515253107916831');
  let user = message.author;
  let reporte = args.join(' ');
  if(!reporte) return message.channel.send(`\<:Translantok:769253905585668126> Necesitas colocar tu sugerencia, Ejemplo :  ||<comando> <sugerencia> ||`)
const embed = new Discord.MessageEmbed()
   .setTitle('Sugerencia hecha por '+message.author.username)
   .setDescription('\<:Yes:769252943651930133> Tu Sugerencia se envio.')
   .setDescription(reporte)
   .setThumbnail(message.author.displayAvatarURL())
   .setColor("61d3ca")
   .setFooter('Sugerencia enviada por '+`${message.author.username} | ${message.author.id}`)
  channel.send(embed)
  message.channel.send("\<:Yes:769252943651930133> Sugerencia enviada ")
  message.channel.send(embed)
}
