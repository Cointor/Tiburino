module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
let numero = Math.floor(Math.random() * 100)

let user = message.mentions.users.first() || message.author

let emoji = "";

if(numero < 30){

  emoji = ':face_vomiting:';

}else if(numero < 40){ 

  emoji = ':neutral_face:';

}else if(numero < 70){ 

  emoji = ':open_mouth:';
        
}else if(numero < 95){

  emoji = ':heart_eyes:';
        
}else if(numero < 101){

   emoji = ':heart_eyes: :smiling_face_with_3_hearts: :kissing_heart: :yum: :hot_face: :smiling_imp: :sweat_drops: :eggplant:'; 

}

message.channel.send(`El porcentaje de lindura de ${user.username} es de un **${numero}%** ${emoji}`)
  }

