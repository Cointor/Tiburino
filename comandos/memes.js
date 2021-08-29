module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
const dimgs = require('discordimgs');
message.channel.send({ files :  [dimgs.randomMemeAll()] })
}
