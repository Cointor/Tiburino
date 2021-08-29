module.exports = async (client, message, args) => { 
 const Discord = require('discord.js');
const mario = require("marioapi")
let img = await mario.cat()
const embed = new Discord.MessageEmbed() 
.setColor("#61d3ca")
.setTitle("Gato Random")
.setImage(img)
message.channel.send(embed)
}
