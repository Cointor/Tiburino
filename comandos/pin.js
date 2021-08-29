module.exports = (client, message, args) => { 
 const Discord = require('discord.js');

let ping = Math.floor(message.client.ping);
    message.channel.send("\<a:Cargando:791022808800559104> Cargando...").then(m => {
      m.edit({embed: {
        title: "Retroceso <:Online:769249590930702396>",
        color: "RANDOM",
        description: `Tiempo en **Mili segundos**  **${Math.floor(
          m.createdTimestamp - Date.now()
        )}Ms**`
        }});
    });
}
