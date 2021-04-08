const Discord = require('discord.js')
const signatureblue = '0070FF'

const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
  name: 'daily',
  run: async(client, message, args) => {
  let user = message.author;

  let timeout = 86400000;

  let daili = Math.floor(Math.random() * 200) + 1;
  let multiplier = await db.fetch(`multiplier_${message.guild.id}`);
  if(!multiplier) multiplier = 1;
  let dailies =  daili * multiplier;

  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor(signatureblue)
    .setDescription(`❌ You've **already collected** your daily reward ❌\n\nCollect it again in **${time.hours}h ${time.minutes}m ${time.seconds}s** `);
    message.channel.send(timeEmbed)
  } else {
    
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setTitle('💸 Daily Reward 💸')
  .setDescription(`You've collected your daily reward of **${dailies} <:DumbCoin:828912273786667019>**`);
  
  await db.add(`money_${message.guild.id}_${user.id}.pocket`, dailies);
  await db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

  message.channel.send(moneyEmbed)
  

		}
  },
  description: 'Gives daily reward',
  usage: `/daily`
}