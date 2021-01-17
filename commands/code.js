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
  name: 'code',
  run: async(client, message, args) => {
let user = message.author;			
        let fisho = await db.fetch(`comp_${user.id}`, 1)
				if(fisho === null){
					message.reply('You dont have a Computer. Please buy it by using /shop computer')
				} else {

const homeGuild = client.guilds.cache.get('772814149155553280')
const member = homeGuild.member(user);
let bonus = 0

if(member){
	bonus = 200
	console.log('hehe')
}
					const mon = Math.floor(Math.random() * 1200) + 4 + bonus
					console.log(mon)


        let add = await eco.daily(message.author.id, false, mon);

				 const noembed = new Discord.MessageEmbed()
				.setTitle('💸 Coding 💸')
				.setDescription(`You programmed a bot and got **${mon} cash **\nAnd now you have total of ${add.amount} cash.`)
				.setColor(signatureblue)
				.setFooter('Wow.. Nice bot tho')

 if (add.cooldown){
				const embed = new Discord.MessageEmbed()
				.setTitle('💸 Oh no.. 💸')
				.setDescription(`You already coded and you are tired. Come back after ${add.time.hours} hours, ${add.time.minutes} minutes & ${add.time.seconds} seconds.`)
				.setColor(signatureblue)
				.setFooter('Meanwhile.. Join the support server. And get some boost')

					 	message.reply(embed)
						 }
        else {
					 message.reply(noembed)
					 }

				}
  },
  description: 'Get some money by coding',
  usage: `/code`
}