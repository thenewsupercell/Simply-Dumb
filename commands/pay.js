
const Discord = require('discord.js')
const signatureblue = '0070FF'
const ms = require('ms')
const db = require('quick.db')

module.exports = {
  name: 'pay',
  run: async(client, message, args) => {
let user = message.mentions.members.first() ||
    client.users.cache.get(args[0]) ||
    match(args.join(" ").toLowerCase(), message.guild) ||
    message.author;


  let member = await db.fetch(`money_${message.guild.id}_${message.author.id}.pocket`);

  let embed1 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`❌ **Mention someone** to pay ❌`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`❌ **Specify an amount** to pay ❌`);
  
  if (!parseInt(args[1])) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`❌ You can't pay someone **negative money** ❌`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`❌ You **don't have** that much money ❌`);

  if (member < parseInt(args[1])) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`✅ You have payed ${user.user.username} **${parseInt(args[1])} <:DumbCoin:828912273786667019>** ✅` );
  
  await db.add(`money_${message.guild.id}_${user.id}.pocket`, parseInt(args[1]));
  await db.subtract(`money_${message.guild.id}_${message.author.id}.pocket`, parseInt(args[1]));

  message.channel.send(embed5);
  


  },
	aliases: ['give'],
  description: 'Pay some money to other people',
  usage: `/pay <mention> <amount>`
}