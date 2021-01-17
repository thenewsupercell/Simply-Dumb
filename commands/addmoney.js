 Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const { EconomyManager } = require("quick.eco")
const eco = new EconomyManager({
    adapter: 'sqlite'
});
const ms = require('ms')

module.exports = {
  name: 'addmoney',
  run: async(client, message, args) => {
let user = message.author;
let olo = message.mentions.users.first()
let amount = args[1]
console.log(amount)

	if(message.author.id !== '770551872309166090'){
	message.reply('This is a DEVELOPER ONLY COMMAND so OOF')

} else if(!olo){
	message.reply('What ?? Are you giving the money to air ?? Mention a user')

} else if(!amount){
	message.reply('What ?? Are you giving a jar of air ? Tell me how much money')
} else if(message.author.id !== '770551872309166090'){
	message.reply('This is a DEVELOPER ONLY COMMAND so OOF')
} else {

let owo = await eco.addMoney(olo.id, false, Number(amount))


const oldo = await eco.fetchMoney(user.id)

				 const noembed = new Discord.MessageEmbed()
				.setTitle('💸 Money Rained 💸')
				.setDescription(` 💸 You gave **${amount} 💸** to ${olo} 💸\n${olo} are happy and have total of ${owo} cash 💸.`)
				.setColor(signatureblue)
				.setFooter('Wow.. Gimme some money pwease')

        return message.reply(noembed);
}
  },
	aliases: ['addmon'],
  description: 'A developer only command',
  usage: `/addmoney <mention> <amount>`
}