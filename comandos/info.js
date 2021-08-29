module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
const embed = new Discord.MessageEmbed()
      .setTitle("Info :") 
      .setColor("61d3ca")
      .setDescription("**!Hola** soy \<@743286312026767452>  \<:Tiburino:778067158143860736> un bot de diversión y una amplia y diversa cantidad de comandos tipo `say`  entre mis comandos tengo categorías de Diversión, Reacción, Say, Búsqueda y Utilidad, Cuento con un staff muy amigable y servicial en mi servidor de soporte, Puedes entrar a mi servidor con el comando `<inv` y puedes mandarle un mensaje directo a mi desarrollador para que tengas tu propia reacción \<:TiburinoBaby:770013375697518622> como la de los usuarios `Cointor, Kumiro, Moradito y Fumadero`  Si tienes alguna duda o sugerencia mi staff te ayudara en tus necesidades :thumbsup: ¿Te unirás?")
      .setFooter(client.users.resolve("743286312026767452").username , client.users.cache.get("743286312026767452").displayAvatarURL());
      message.channel.send(embed);
}
