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
  name: 'fish',
  run: async(client, message, args) => {
let user = message.author;			
        let fisho = await db.fetch(`fishrod_${user.id}`, 1)
				if(fisho === null){
					message.reply('You dont have a fishing rod. Please buy it by using /shop Rod')
				} else {

					const homeGuild = client.guilds.cache.get('772814149155553280')
const member = homeGuild.member(user);
let bonus = 0

if(member){
	bonus = 150
	console.log('hehe')
}

					const mon = Math.floor(Math.random() * 400) + 4 + bonus

        let add = await eco.work(message.author.id, false, mon);

				 const noembed = new Discord.MessageEmbed()
				.setTitle('💸 Fishing 💸')
				.setDescription(`You fished and sold it for **${mon} cash **\nAnd now you have total of ${add.amount} cash.`)
				.setColor(signatureblue)
				.setFooter('Wow.. Nice fish')

 if (add.cooldown){
				const embed = new Discord.MessageEmbed()
				.setTitle('💸 Oh no.. 💸')
				.setDescription(`You already fished. Come back after ${add.time.minutes} minutes & ${add.time.seconds} seconds.`)
				.setColor(signatureblue)
				.setFooter('OOF')

					 	message.reply(embed)
						 }
        else {
					 message.reply(noembed)
					 }

				}
  },
  description: 'Fishes',
  usage: `/fish`
}