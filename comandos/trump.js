module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js')
if(!args[0]) return message.channel.send("Escribe el texto a copiar ") 
let mensaje = args.join('%20');
let attachment = new MessageAttachment (`https://api.no-api-key.com/api/v2/trump?message=${mensaje}`, 'image.png')
 message.channel.send(attachment)
}
