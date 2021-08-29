module.exports = async (client, message, args) => { 
const tfa = require('text-fonts-api')
const { MessageAttachment } = require('discord.js')
const text = args[0]
if(!args[0]) return message.channel.send("Escribe el texto a copiar ")
let img = new tfa.fortniteFont(args.join(' '))
let attachment = new MessageAttachment
(`https://gdcolon.com/tools/gdfont/img/${text}?font=gold`, 'image.png')
message.channel.send(attachment)
}
