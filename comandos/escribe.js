module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
 message.channel.startTyping();
setTimeout(() => {
  message.channel.send(':pencil: ');
  message.channel.stopTyping()
}, 60000);
}
