module.exports = async (client, message, args) => { 
const Discord = require("discord.js")
const separacion = args.join(" ").split(" | "); 
const [Titulo, Descripcion, Footer, Color, Imagen] = separacion; 
if(!Titulo) return message.channel.send("*Uso correcto:* **titulo | Descripcion | Footer | Color | Imagen**") 
if(Titulo && !Descripcion) { 
const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setTitle(Titulo) 
    .setColor("RANDOM") 

    message.channel.send(embed);
}
if(Titulo && Descripcion && !Footer) { 
    const embed = new Discord.MessageEmbed() 
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setTitle(Titulo)
    .setDescription(Descripcion)
    .setColor("RANDOM")

    message.channel.send(embed); 
}

if(Titulo && Descripcion && Footer && !Color ) { 

   const embed = new Discord.MessageEmbed() 
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setTitle(Titulo)
   .setDescription(Descripcion)
   .setFooter(Footer)
   .setColor("RANDOM")

   message.channel.send(embed);
}

if(Titulo && Descripcion && Footer && Color && !Imagen) { 
    const embed = new Discord.MessageEmbed() 
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setTitle(Titulo)
    .setDescription(Descripcion)
    .setFooter(Footer)
    .setColor(Color)

    message.channel.send(embed);
}

if(Titulo && Descripcion && Footer && Color && Imagen) { 

    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setTitle(Titulo)
    .setDescription(Descripcion)
    .setFooter(Footer)
    .setColor(Color)
    .setThumbnail(Imagen)

    message.channel.send(embed); 

}
 }

