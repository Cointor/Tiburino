// Anti c&p 
module.exports = (client, message, args) => {
    const indice = new Discord.MessageEmbed()
    .setTitle('Help')
    .setColor("61d3ca")
    .setDescription('Un bot para pasar el rato')
    .setFooter(`Reacciones:
    🪙 = Comandos de Criptos
   📜 = Comandos de información
    📷 = Comandos de Imagenes
    🐸 = Comandos de memes
    📡 = Comandos de Say
    🔧 = Comandos de Utilidad 
    💤 = Comandos de Zzz
    🌎 = Indice
    `)
    const criptos = new Discord.MessageEmbed()
    .setTitle('\<:Bitcoin:833149713703895082>  | Criptomonedas')
    .setColor("61d3ca")
    .setDescription('Comandos Criptomonedas')
    .addFields(
        {
            name: "Comandos:", value: "`t!btc` :: Precio Bitcoin \n `t!eth` :: Precio Ethereum \n `t!ltc` :: Precio Litecoin \n `t!xmr` :: Monero \n `t!xrp` :: Ripple \n `t!zec` :: ZCash"
        }
        
    )
    .setFooter(`🌎 = Indice`)
    const info = new Discord.MessageEmbed()
    .setColor("61d3ca")
    .setTitle('<:Informacion:769253174632513546> | Ayuda')
    .setDescription('Comandos de información')
    .addFields(
        {
            name: "Comandos:", value: "`t!add` :: Invitame`\nt!bgr` :: BugRepors \n`t!clb` :: Colaboradores\n`t!info` :: información del bot\n`t!pin` :: Pin del Bot\n `t!servidores` :: Servidores donde estoy\n `t!sgg` :: Sugeridores\n `t!stats` :: Stadisticas\n `t!sugerencia` :: Crea una Sugerencia\n `t!update` :: Mis actualizaciones\n `t!vote` :: Vota por mi\n `t!work` :: Mis novedades"
        }
        
    )
    .setFooter(`🌎 = Indice`)
      const image = new Discord.MessageEmbed()
    .setTitle('<:PNG_carpet:769254645368619050>  | Imagenes')
    .setColor("61d3ca")
    .setDescription('Comandos de Imagenes')
    .addFields(
        {
            name: "Comandos:", value: "`t!cat` :: Gatos\n `t!dog` :: Perros\n `t!foto` :: **Fotos Chidas**\n `t!fox` :: Fox \n `t!koala` :: Koalas\n `t!Pada` :: Pandas"
        }
        
    )
    .setFooter(`🌎 = Indice`)
          const meme = new Discord.MessageEmbed()
    .setTitle('\<:Ok:817991156158824459>   | Memes')
    .setDescription('Comandos de Memes')
    .setColor("61d3ca")
    .addFields(
        {
            name: "Comandos:", value: "`t!chiste` :: Chistes Aleatorios\n`t!meme` :: Memes aleatorios\n`t!memes` :: Memes de una NPM\n`t!memis` :: Memes en ingles\n`t!tarje` :: Tarjetas de Andorra"
        }
        
    )
    .setFooter(`🌎 = Indice`)
             const say = new Discord.MessageEmbed()
             .setColor("61d3ca")
    .setTitle('\<:Online:769249590930702396>  | Say')
    .setDescription('Comandos de Say')
    .addFields(
        {
            name: "Comandos:", value: "`t!clyde` :: Clyde dice\n`t!cube` :: Letra de Geometrydash \n`t!fornite` :: Letra de Fornite\n`t!geometry` :: Otra letra igual\n`t!minecraft` :: Letra de magia\n`t!porhub` :: Pornhub \<:Ok:817991156158824459> \n`t!trump` :: Trump dice"
        }
        
    )
    .setFooter(`🌎 = Indice`)
     const uti = new Discord.MessageEmbed()
    .setTitle('\<:Unitok:769254005984591922>  | Utilidad')
    .setColor("61d3ca")
    .setDescription('Comandos de Utilidad')
    .addFields(
        {
            name: "Comandos:", value: "`t!anime` :: Busca tu anime\n `t!avatar` :: Mira el avatar de los users\n `t!embed` :: Crea tu propio Embed\n`t!rol` :: Mira todos los roles del server\n"
        }
        
    )
    .setFooter(`🌎 = Indice`)
        const zzz = new Discord.MessageEmbed()
    .setTitle(':zzz:  | Zzz')
    .setColor("61d3ca")
    .setDescription('Comandos Zzz, Todos estos comandos o son inservibles o están en desarrollo, Si esta aqui es 200% seguro que nunca salga')
    .addFields(
        {
            name: "Comandos:", value: "`t!alc` :: Palabras Aleatorias\n`t!escribe` :: Solo escribe"
        }
        
    )
    .setFooter(`🌎 = Indice`)
    message.channel.send(indice).then(m => {
        m.react('🪙')
        m.react('📜')
        m.react('📷')
        m.react('🐸')
        m.react('📡')
        m.react('🔧')
        m.react('💤')
        m.react('🌎')
        m.awaitReactions((reaction, user) => { 
            const userReactions = m.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
            if(message.author.id !== user.id) return;
     
            if(reaction.emoji.name === '🪙') {
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(criptos);
            }
            if(reaction.emoji.name === '📜') {
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(info);
            }
            if(reaction.emoji.name === '📷') {
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(image);
            }
            if(reaction.emoji.name === '🐸') {
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(meme);
            }
            if(reaction.emoji.name === '📡') {
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(say);
            }
            if(reaction.emoji.name === '🔧') {
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(uti);
            }
            if(reaction.emoji.name === '💤') {
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(zzz);
            }
            if(reaction.emoji.name === '🌎') {
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id); 
                }
            } catch(error) { console.error(error) }
                m.edit(indice);
            }
        })
    })
}
