module.exports = (client, message, args) => { 
 const Discord = require('discord.js');
let cvv1 = ['0','1','2','3','4','5','6','7','8','9'];
let cv1 = cvv1[Math.floor(cvv1.length * Math.random())];
let cvv2 = ['0','1','2','3','4','5','6','7','8','9'];
let cv2 = cvv2[Math.floor(cvv2.length * Math.random())];
let cvv3 = ['0','1','2','3','4','5','6','7','8','9'];
let cv3 = cvv3[Math.floor(cvv3.length * Math.random())];
let mes = ['01','02','03','04','05','06','07','08','09','10','11','12'];
let mes1 = mes[Math.floor(mes.length * Math.random())];
let año = ['/2024','/2025','/2026','/2027'];
let año1 = año[Math.floor(año.length * Math.random())];
let pin1 = ['0','1','2','3','4','5','6','7','8','9'];
let pi1 = pin1[Math.floor(pin1.length * Math.random())];
let pin2 = ['0','1','2','3','4','5','6','7','8','9'];
let pi2 = pin2[Math.floor(pin2.length * Math.random())];
let pin3 = ['0','1','2','3','4','5','6','7','8','9'];
let pi3 = pin3[Math.floor(pin3.length * Math.random())];
let pin4 = ['0','1','2','3','4','5','6','7','8','9'];
let pi4 = pin4[Math.floor(pin4.length * Math.random())];
let nombre = ['Jasmine ','Sawa ','Matti ','Hugi ','Ghayda ','Yolanda ','Jozef ','Emma ','Wuter ','Kazj '];
let name = nombre[Math.floor(nombre.length * Math.random())];
let apellido = ['Clarke','Araujo','Ibeamaka','Repo','Bradshaw','Zotova','Williamson','Ribeiro','Wal','Kueste'];
let ape = apellido[Math.floor(apellido.length * Math.random())];
////// Numero targeta ///// 14 digitos + 2 prefijo
let num1 = ['0','1','2','3','4','5','6','7','8','9'];
let nu1 = num1[Math.floor(num1.length * Math.random())];
let num2 = ['0','1','2','3','4','5','6','7','8','9'];
let nu2 = num2[Math.floor(num2.length * Math.random())];
let num3 = ['0','1','2','3','4','5','6','7','8','9'];
let nu3 = num3[Math.floor(num3.length * Math.random())];
let num4 = ['0','1','2','3','4','5','6','7','8','9'];
let nu4 = num4[Math.floor(num4.length * Math.random())];
let num5 = ['0','1','2','3','4','5','6','7','8','9'];
let nu5 = num5[Math.floor(num5.length * Math.random())];
let num6 = ['0','1','2','3','4','5','6','7','8','9'];
let nu6 = num6[Math.floor(num6.length * Math.random())];
let num7 = ['0','1','2','3','4','5','6','7','8','9'];
let nu7 = num7[Math.floor(num7.length * Math.random())];
let num8 = ['0','1','2','3','4','5','6','7','8','9'];
let nu8 = num8[Math.floor(num8.length * Math.random())];
let num9 = ['0','1','2','3','4','5','6','7','8','9'];
let nu9 = num9[Math.floor(num9.length * Math.random())];
let num10 = ['0','1','2','3','4','5','6','7','8','9'];
let nu10 = num10[Math.floor(num10.length * Math.random())];
let num11 = ['0','1','2','3','4','5','6','7','8','9'];
let nu11 = num11[Math.floor(num11.length * Math.random())];
let num12 = ['0','1','2','3','4','5','6','7','8','9'];
let nu12 = num12[Math.floor(num12.length * Math.random())];
let num13 = ['0','1','2','3','4','5','6','7','8','9'];
let nu13 = num13[Math.floor(num13.length * Math.random())];
let num14 = ['0','1','2','3','4','5','6','7','8','9'];
let nu14 = num14[Math.floor(num14.length * Math.random())];
/// fin
  const embed = new Discord.MessageEmbed()
  .setColor("#61d3ca")
  .setThumbnail("https://media.discordapp.net/attachments/769761491062358056/818298242075721738/ca_targeta_visa_credit_cara_copia_0.png")
  .setTitle("Generador de tarjetas de credito")
  .addField("MARCA:", "VISA")
  .addField("PAÍS:", "ANDORRA")
  .addField("BANCO:", "CREDIT ANDORRA")
  .addField("CVV/CVV2:", cv1 + cv2 + cv3)
  .addField("FECHA (MM-AAAA):", mes1 + año1)
  .addField("PIN DE TARJETA:", pi1 + pi2 + pi3 + pi4)
  .addField("NOMBRE:", name + ape)
  .addField("TARJETA:", "45" + nu1 + nu2 + nu3 + nu4 + nu5 + nu6 + nu7 + nu8 + nu9 + nu10 + nu11 + nu12 + nu13 + nu14)


message.channel.send(embed)
}
