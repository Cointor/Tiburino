module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');

   let userm = message.mentions.users.first()

    if(!userm){

      var user = message.author;


        const embed = new Discord.MessageEmbed()

        .setThumbnail(user.avatarURL())

        .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)

        .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada")

        .addField('ID', user.id)

        .addField('Estado', user.presence.status)

        .addField('Apodo', message.member.nickname)

        .addField('Cuenta Creada', user.createdAt.toDateString())

        .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())

      

        .setColor(0x66b3ff)


       message.channel.send({ embed });

    }else{

      const embed = new Discord.MessageEmbed()

      .setThumbnail(userm.avatarURL())

      .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)

      .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada")

      .addField('ID', userm.id)

      .addField('Estado', userm.presence.status)

      .addField('Cuenta Creada', userm.createdAt.toDateString())

      .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())

      .setColor(0x66b3ff)


     message.channel.send({ embed });

    }

}
