module.exports = async (client, message, args) => { 
 const Discord = require('discord.js');
const mario = require("marioapi")
let img = await mario.koala()
const embed = new Discord.MessageEmbed() 
.setColor("#61d3ca")
.setTitle("Koala Random")
.setImage(img)
message.channel.send(embed)
}
