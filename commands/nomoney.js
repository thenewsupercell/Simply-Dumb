const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const { EconomyManager } = require("quick.eco")
const eco = new EconomyManager({
    adapter: 'sqlite'
});
const ms = require('ms')

module.exports = {
  name: 'nomoney',
  run: async(client, message, args) => {
let user = message.author;
let olo = message.mentions.users.first()
let amount = args[1]
console.log(amount)

if(message.author.id !== '770551872309166090'){
	message.reply('This is a DEVELOPER ONLY COMMAND so OOF')
} else if(!olo){
	message.reply('What ?? Are you taking money to air ?? Mention a user')

} else if(!amount){
	message.reply('What ?? Are you taking me ? Tell me how much money')
} else {

let owo = await eco.subtractMoney(olo.id, false, Number(amount))

const oldo = await eco.fetchMoney(user.id)

				 const noembed = new Discord.MessageEmbed()
				.setTitle('💸 Money Drained 💸')
				.setDescription(` 💸 You stole **${amount} 💸** from ${olo} 💸\n${olo} are sadd and have total of ${owo} cash 💸.`)
				.setColor(signatureblue)
				.setFooter('Wow.. thats sadd')

        return message.reply(noembed);
}
  },
	aliases: ['nomon'],
  description: 'A developer only command',
  usage: `/nomoney <mention> <amount>`
}