const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const { EconomyManager } = require("quick.eco")
const eco = new EconomyManager({
    adapter: 'sqlite'
});
const db = require('quick.db')
const ms = require('ms')

module.exports = {
  name: 'shop',
  run: async(client, message, args) => {
let user = message.author;
let amount = args[0]


if(!amount){
 const shopembed = new Discord.MessageEmbed()
				.setTitle('<a:moneyy:774130326305243137> Shop.. <a:moneyy:774130326305243137>')
				.setDescription(`**Fishing Rod:**\nUsed to Fish (/fish)\nPrize: **6000 cash**\n\n**Computer**\nUsed to code your bot virtually\nPrize: **10000 cash**\n\nComing soon\n`)
				.setColor(signatureblue)
				.setFooter('Ooooo Shopp | Do /shop <item>')


	message.reply(shopembed)
} else right = amount.toLowerCase()

if(right == 'rod'){
	        let dupf = await db.fetch(`fishrod_${user.id}`, 1)
					if(dupf === null) {
let addd = await eco.fetchMoney(user.id)
if(6000 > addd) return message.reply('You dont have much money to buy it.. OOF')

let add = await eco.subtractMoney(message.author.id, false, Number(6000))
const oldo = await eco.fetchMoney(user.id)

        const embed = new Discord.MessageEmbed()
				.setTitle('💸 Fishing Rod 💸')
				.setDescription(`You just bought a Fishing Rod, Now you have ${oldo} cash`)
				.setColor(signatureblue)
				.setFooter('Ooooo')
				
        let dupf = await db.add(`fishrod_${user.id}`, 1)
				message.reply(embed);
				} else {
					 message.reply('You already bought the Fishing Rod')
				}
} else

if(right === 'computer'){
	        let dupf = await db.fetch(`comp_${user.id}`, 1)
					if(dupf === null) {
let addd = await eco.fetchMoney(user.id)
if(10000 > addd) return message.reply('You dont have much money to buy it.. OOF')

let add = await eco.subtractMoney(message.author.id, false, Number(10000))
const oldo = await eco.fetchMoney(user.id)

        const embed = new Discord.MessageEmbed()
				.setTitle('💸 Computer 💸')
				.setDescription(`You just bought a Computer, Now you have ${oldo} cash`)
				.setColor(signatureblue)
				.setFooter('Ooooo')
				
        let dupf = await db.add(`comp_${user.id}`, 1)
				message.reply(embed);
				} else { message.reply('You already bought the Computer')}
} else {message.reply('I think thats not even a thing here')}

  },
  description: 'Buy some useless thing hehe',
  usage: `/shop <item>`
}