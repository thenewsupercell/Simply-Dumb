
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'shop',
  run: async(client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("Shop")
	.setDescription(
		"**VIP Ranks**\n\n\
		Bronze: 3500 Coins [/buy bronze]\n\
		**Lifestyle Items**\n\n\
		Fresh Nikes: 600 [/buy nikes]\n\
		Car: 800 [,buy car]\n\
		Mansion: 1200 [/buy mansion]\n\n\
		**Useful items**\n\
		Fishing Rod: 50 [/buy fishing]")
    .setColor(signatureblue)
    .setFooter("I need some commission too.. hehe")
    message.channel.send(embed)

  },
  aliases: ['store'],
  description: 'Buy things from shop by doing /buy <thing>',
  usage: `/shop`
}