const Discord = require('discord.js')
const signatureblue = '0070FF'
const { EconomyManager } = require("quick.eco")
const eco = new EconomyManager({
    adapter: 'sqlite'
});
const ms = require('ms')
const db = require('quick.db')

module.exports = {
  name: 'beg',
  run: async(client, message, args) => {
 let user = message.author;
  let timeout = 60000;

  let multiplier = await db.fetch(`multiplier_${message.guild.id}`);
  if(!multiplier) multiplier = 1;
  let amounta = Math.floor(Math.random() * 30) + 1;

  let amounts = amounta * multiplier;

  let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setTitle(`💸 RIP 💸`)
    .setColor(signatureblue)
    .setDescription(`✖️ Stop Begging like a idiota..\n\nBeg again after 1 minute `)
    .setFooter(`Stop it... Get some help..`);
    message.channel.send(timeEmbed)
  } else {

  await db.add(`money_${message.guild.id}_${user.id}.pocket`, amounts);
  await db.set(`beg_${message.guild.id}_${user.id}`, Date.now());

    let yesEmbed = new Discord.MessageEmbed()
    .setTitle(`💸 Begged 💸`)
    .setColor(signatureblue)
    .setDescription(`✔️ You've begged on the streets and received ${amounts} coins`)
        .setFooter(`You got some sweet money`);
    message.channel.send(yesEmbed)
	}
  
  },
  description: 'Beg and get some money',
  usage: `/beg`
}