module.exports = (client, message, args, color) => { 

    const Discord = require('discord.js');
		const embed = new Discord.MessageEmbed()
			.setTitle("Invítame a tu servidor")
			.setColor(0x61d3ca)
			.addField("Top.gg:", "https://top.gg/bot/743286312026767452")
      .addField("MadKing:", "https://madking.us/bot/743286312026767452")
			message.channel.send(embed);
  
  }
 



