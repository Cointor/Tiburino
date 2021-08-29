module.exports = async (client, message, args) => { 
    const Discord = require('discord.js');
    const fetch = require('node-fetch')
    const req = await fetch('https://source.unsplash.com/random')
    const res = await req.buffer()
    const attachament = new Discord.MessageAttachment(res)
    message.channel.send(attachament)
}
