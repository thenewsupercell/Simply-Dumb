const Discord = require('discord.js')
const signatureblue = '0070FF'
const db = require('quick.db')

module.exports = {
  name: 'deposit',
  run: async(client, message, args) => {
    
		 let user = message.author;

  let member = await db.fetch(`money_${message.guild.id}_${user.id}.pocket`)

  if (args[0] == 'all') {
    let money = await db.fetch(`money_${message.guild.id}_${user.id}.pocket`)

    let embedbank = new Discord.MessageEmbed()
    .setColor(signatureblue)
    .setDescription("❌ You don't have any <:DumbCoin:828912273786667019> to deposit ❌")

    if(money === 0 || money === null) return message.channel.send(embedbank)

    await db.add(`money_${message.guild.id}_${user.id}.bank`, money)
    await db.subtract(`money_${message.guild.id}_${user.id}.pocket`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`✅ You have deposited ${args[0]} <:DumbCoin:828912273786667019> into your bank ✅`)
  .setTitle('💸 Noice 💸')
  message.channel.send(embed5)
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`❌ Specify an amount to deposit ❌`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`❌ You can't deposit negative money ❌`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`❌ You don't have that much money ❌`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`✅ You have deposited ${parseInt(args[0])} <:DumbCoin:828912273786667019> into your bank ✅`)
  .setTitle('💸 Deposited 💸')

  await db.subtract(`money_${message.guild.id}_${user.id}.pocket`, parseInt(args[0]));
  await db.add(`money_${message.guild.id}_${user.id}.bank`, parseInt(args[0]));
  

  message.channel.send(embed5);
  
  
		}

  },
  aliases: ['dep'],
  description: 'Deposit your money to the bank.. Note: You may get robbed..',
  usage: `/deposit <amount>`
}