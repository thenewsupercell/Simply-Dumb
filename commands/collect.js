 Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const { EconomyManager } = require("quick.eco")
const eco = new EconomyManager({
    adapter: 'sqlite'
});
const db = require('quick.db')
const ms = require('ms')

module.exports = {
  name: 'o',
  run: async(client, message, args) => {

						const nonembed = new Discord.MessageEmbed()
				.setTitle('Oh no')
				.setDescription(`You already opened the gift`)
				.setColor(signatureblue)
				.setFooter('E')
	
const gifto = db.fetch(`gift_${message.author.id}`)

if(gifto == null){
	let user = message.author
	let amount = 2500
		let owo = await eco.addMoney(message.author.id, false, Number(amount))
const oldo = await eco.fetchMoney(user.id)

						 const noembed = new Discord.MessageEmbed()
				.setTitle('⛄ Merry Christmas ⛄')
				.setDescription(` 💸 I gifted **${amount} 💸** to ${message.author} 💸\nYou have a total of ${owo} cash 💸.`)
				.setColor(signatureblue)
				.setFooter('Wow.. 2.5k noice')

message.reply(noembed) 
db.set(`gift_${message.author.id}`, 1)} else 
{message.reply(nonembed)
}
  },
	aliases: ['o'],
  description: 'o',
  usage: `nothing`
}