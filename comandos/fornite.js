module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
 const tfa = require('text-fonts-api')
const { MessageAttachment } = require('discord.js')
const text = args[0]

if(!args[0]) return message.channel.send("Escribe el texto a copiar ")
let img = new tfa.fortniteFont(args.join(' '))
let attachment = new MessageAttachment
(`http://fortnitefontgenerator.com/img.php?fontsize=38&textcolor=ffffff&text=${text}`, 'image.png')
message.channel.send(attachment)
}

