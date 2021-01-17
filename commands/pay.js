const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const { EconomyManager } = require("quick.eco")
const eco = new EconomyManager({
    adapter: 'sqlite'
});
const ms = require('ms')

module.exports = {
  name: 'pay',
  run: async(client, message, args) => {
let user = message.author;
let olo = message.mentions.users.first()
let amount = args[1]
console.log(amount)

if(!olo){
	message.reply('What ?? Are you giving the money to yourself ?? Mention a user')

} else if(!amount){
	message.reply('What ?? Are you giving a jar of air ? Tell me how much money')

} else {

let addd = await eco.fetchMoney(user.id)
console.log(addd)

if(amount > 10000) return message.reply('The Transaction was limited to 10k only. Sorry')
if(amount > addd) return message.reply('Transaction was Unsuccessful. Reason: You dont have much money')


let add = await eco.subtractMoney(message.author.id, false, Number(amount))
let owo = await eco.addMoney(olo.id, false, Number(amount))

const oldo = await eco.fetchMoney(user.id)

				 const noembed = new Discord.MessageEmbed()
				.setTitle('💸 Money Transfer 💸')
				.setDescription(` 💸 You gave ${amount} 💸 to ${olo} 💸\n And now you have total of ${oldo} cash 💸 and ${olo} have total of ${owo} cash 💸.`)
				.setColor(signatureblue)
				.setFooter('Wow.. Gimme some money pwease')

        if (add.cooldown){
				 const embed = new Discord.MessageEmbed()
				.setTitle('💸 Oh no.. 💸')
				.setDescription(`You already gave them money... Wait for few seconds`)
				.setColor(signatureblue)
				.setFooter('OOF')

					message.reply(embed)
					} else { message.reply(noembed)}
}
  },
	aliases: ['give'],
  description: 'Pay some money to other people',
  usage: `/pay <mention> <amount>`
}