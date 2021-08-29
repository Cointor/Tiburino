app.get("/", function (request, response) {
response.sendFile(__dirname + '/Shark.html');});
app.listen(port, () => console.log(`Code Bien`));
const Discord = require('discord.js');
const client = new Discord.Client();
let { readdirSync } = require('fs'); 
client.config = require('./config.js'); 
client.comandos = new Discord.Collection(); 

client.on('ready', () => {
console.log(`Bot: ${client.user.tag}`);
client.user.setPresence( {
  
activity: {name: `Shark Boy`,
type: "WATCHING"},
status:"online"});})
client.setMaxListeners (200)

// <-- AQUI EL CONTROLADOR DE COMANDOS: -->
for(const file of readdirSync('./comandos/')) { 
  if(file.endsWith(".js")) { 
  let fileName = file.substring(0, file.length - 3); 

  let fileContents = require(`./comandos/${file}`); 
  client.comandos.set(fileName, fileContents);
  }
}

// <-- AQUI EL CONTROLADOR DE EVENTOS: -->
for(const file of readdirSync('./eventos/')) { 
  if(file.endsWith(".js")){

  let fileName = file.substring(0, file.length - 3); 

  let fileContents = require(`./eventos/${file}`); 
  client.on(fileName, fileContents.bind(null, client));
  
  }
}

// <-- AQUI LA PROPIEDAD LOGIN: -->
client.login(process.env.TOKEN)
.then(() => { 
    console.log(`Listo ${client.user.tag}`);

  })
  .catch((err) => {
    console.error("Error al iniciar sesión: " + err);

  });

