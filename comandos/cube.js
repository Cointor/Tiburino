module.exports = async (client, message, args) => { 
 const Discord = require('discord.js');
message.channel.startTyping();
setTimeout(() => {
  message.channel.stopTyping()
}, 5000);
   if(!args[0]) return message.channel.send("Escribe el texto a copiar ") 
  let texto = args.join('%20');
  let attachment = new Discord.MessageAttachment(`https://gdcolon.com/tools/gdlogo/img/${texto}`, 'logo.png') 
  message.channel.send(attachment)
}
