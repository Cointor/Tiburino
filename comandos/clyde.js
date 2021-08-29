module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js')
if(!args[0]) return message.channel.send("Escribe el texto a copiar ") 
let mensaje = args.join('%20');
let attachment = new MessageAttachment
 (`https://ctk-api.herokuapp.com/clyde/${mensaje}`, 'image.png')
message.channel.send(attachment);
}
