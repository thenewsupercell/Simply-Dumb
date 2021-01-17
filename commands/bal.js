const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const { EconomyManager } = require("quick.eco")
const eco = new EconomyManager({
    adapter: 'sqlite'
});

module.exports = {
  name: 'bal',
  run: async(client, message, args) => {
     let user = message.mentions.members.first() || message.author;

  let money = await eco.fetchMoney(user.id);
        const embed = new Discord.MessageEmbed()
				.setTitle('💸 Balance 💸')
				.setDescription(`${user} has ${money} cash 💸.`)
				.setColor(signatureblue)
				.setFooter('Join the support server for some money boost')
				return message.channel.send(embed);
  },
  aliases: ['balance'],
  description: 'Shows the balance',
  usage: `/bal (or) /bal <mention>`
}