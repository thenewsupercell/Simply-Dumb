const Discord = require('discord.js')
const signatureblue = '0070FF'
const db = require('quick.db')

module.exports = {
  name: 'bal',
  run: async(client, message, args) => {
       let user = message.mentions.users.first() ||
  client.users.cache.get(args[0]) ||
  args.join(" ").toLowerCase() || 
  message.author;

  let bal = await db.fetch(`money_${message.guild.id}_${user.id}.pocket`);
  if (bal === null) bal = 0;

  let bank = await db.fetch(`money_${message.guild.id}_${user.id}.bank`);
  if (bank === null) bank = 0;

  let TotalMoney = bank + bal;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setTitle(`💸 **${user.username}'s Balance** 💸`)
  .setDescription(`
  **Pocket:** ${bal} <:DumbCoin:828912273786667019>
  **Bank:** ${bank} <:DumbCoin:828912273786667019>
  **Total:** ${TotalMoney} <:DumbCoin:828912273786667019>`)
	.setFooter('Join the support server for some money boost');

  message.channel.send(moneyEmbed)

  },
  aliases: ['balance'],
  description: 'Shows the balance',
  usage: `/bal (or) /bal <mention>`
}