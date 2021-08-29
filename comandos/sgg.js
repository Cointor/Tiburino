module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
const embed = new Discord.MessageEmbed()
			.setTitle("Suggested Users")
			.setColor(0x61d3ca)
			.setDescription("Has invocado el comando `<sgg`")
			.addField("\<:TiburinoBaby:770013375697518622>  Gracias a ellos e mejorado :",`\n <@763645148068053012> 4 Sugerencias \n <@433012770003484672> 3 Sugerencia \n`)
			.setTimestamp();
			message.channel.send(embed);
}
