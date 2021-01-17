const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const { EconomyManager } = require("quick.eco")
const eco = new EconomyManager({
    adapter: 'sqlite'
});
const ms = require('ms')

module.exports = {
  name: 'daily',
  run: async(client, message, args) => {
let user = message.author;
const homeGuild = client.guilds.cache.get('772814149155553280')
const member = homeGuild.member(user);
let bonus = 0

if(member){
	bonus = 200
	console.log('hehe')
}

let add = await eco.daily(message.author.id, false, 1000 + bonus);
				 const noembed = new Discord.MessageEmbed()
				.setTitle('💸 Daily Reward 💸')
				.setDescription(` 💸 You claimed ${add.amount} as your daily cash 💸\n And now you have total ${add.money} cash  💸.`)
				.setColor(signatureblue)
				.setFooter('Wow..')

        if (add.cooldown)  {
					        const embed = new Discord.MessageEmbed()
				.setTitle('💸 Oh no.. 💸')
				.setDescription(`You already claimed your daily cash. Come back after ${add.time.days} days, ${add.time.hours} hours, ${add.time.minutes} minutes & ${add.time.seconds} seconds.`)
				.setColor(signatureblue)
				.setFooter('Meanwhile.. Join the support server. And get some boost')
				
				message.reply(embed);}

        else{ message.reply(noembed);}
  },
  description: 'Gives daily reward',
  usage: `/daily`
}