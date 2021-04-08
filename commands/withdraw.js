
const Discord = require('discord.js')
const signatureblue = '0070FF'
const db = require('quick.db')

module.exports = {
  name: 'withdraw',
  run: async(client, message, args) => {
		
      let user = message.author;

  let member = await db.fetch(`money_${message.guild.id}_${user.id}.pocket`)
  
  let member2 = await db.fetch(`money_${message.guild.id}_${user.id}.bank`)

  if (args[0] == 'all') {
    let money = await db.fetch(`money_${message.guild.id}_${user.id}.bank`)
    
    await db.subtract(`money_${message.guild.id}_${user.id}.bank`, money)
    await db.add(`money_${message.guild.id}_${user.id}.pocket`, money)
    
    let embed5 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`<a:yes:739569362440159252> You have withdrawn ${args[0]} your coins from your bank`);
  message.channel.send(embed5)
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`<a:false:737764891657633814> Specify an amount to withdraw`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`<a:false:737764891657633814> You can't withdraw negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`<a:false:737764891657633814> You don't have that much money in the bank`);

  if (member2 < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`<a:yes:739569362440159252> You have withdrawn ${args[0]} coins from your bank`);

  message.channel.send(embed5)
  await db.subtract(`money_${message.guild.id}_${user.id}.bank`, parseInt(args[0]))
  await db.add(`money_${message.guild.id}_${user.id}.pocket`, parseInt(args[0]))
		}

  },
  aliases: ['with'],
  description: 'Withdraw your money from the bank hehe',
  usage: `/withdraw <amount>`
}