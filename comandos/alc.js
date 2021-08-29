module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
 let accion = ['Fui ','Iré ', 'Conocí ', 'Llegue ', 'Estuve ','Corrí ','Viaje '];
let selector = accion[Math.floor(accion.length * Math.random())];
let lugar = ['China ','Italia ','Perú ','México ','Latinoamérica ','Tabasco ','Chiapas ','Rusia ','Madre Patria '];
let selector1 = lugar[Math.floor(lugar.length * Math.random())];
let comida = ['Chile','Torta','Taco','Piña','Tiburon','Carne','GALLETA'];
let selector2 = comida[Math.floor(comida.length * Math.random())];


message.channel.send(selector + selector1 + selector2);

}
