module.exports = async (client, message, args) => { 
const tfa = require('text-fonts-api')
const { MessageAttachment } = require('discord.js')
if(!args[0]) return message.channel.send("Escribe el texto a copiar ")
let image = new tfa.enchantingFont(args.join(' '))
let attachment = new MessageAttachment(image.buffer, 'image.png')
message.channel.send(attachment)
}
