module.exports = async  (client, message, args) => { 
const Discord = require('discord.js');
const fetch = require("node-fetch")
const res = await fetch('https://risapi.bacanoicua.tk/')
const json = await res.json();
 const embed = new Discord.MessageEmbed()

 .setTitle("Chistes")
 .setColor("RANDOM")
 .addField("Chiste : ", `${json.chiste}`)

message.channel.send(embed);
}
