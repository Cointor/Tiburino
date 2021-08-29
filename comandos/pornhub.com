module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
if(!args[0]) return message.channel.send("Escribe el texto a copiar ") 
let txt = args.join('%20');
if (!txt) return message.channel.send("Olvidaste colocar los argumentos.") 
let autor = message.author;
let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`,'logo.png')
message.channel.send(attachment)
}
