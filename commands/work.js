const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const { EconomyManager } = require("quick.eco")
const eco = new EconomyManager({
    adapter: 'sqlite'
});
const ms = require('ms')
const db = require('quick.db')

module.exports = {
  name: 'work',
  run: async(client, message, args) => {
let user = message.author;
const homeGuild = client.guilds.cache.get('772814149155553280')
const member = homeGuild.member(user);
let bonus = 0

if(member){
	bonus = 100
	console.log('hehe')
}



const mon = Math.floor(Math.random() * 300) + 1 + bonus

const worko = ['Youtuber', 'Fisherman', 'Beggar', 'Chef', 'Developer', 'Hacker', 'Game Developer', 'Cameraman', 'Janitor']
const mono = [Math.floor(Math.random() * worko.length)]

        let add = await eco.search(message.author.id, false, mon);
				 const noembed = new Discord.MessageEmbed()
				.setTitle('💸 Work Salary 💸')
				.setDescription(`You worked as a ${worko[mono]} for **${mon} cash **\nAnd now you have total of ${add.amount} cash.`)
				.setColor(signatureblue)
				.setFooter('Wow.. Nice work')

        if (add.cooldown){

				const embed = new Discord.MessageEmbed()
				.setTitle('💸 Oh no.. 💸')
				.setDescription(`You already worked. Come back after ${add.time.hours} hours, ${add.time.minutes} minutes & ${add.time.seconds} seconds.`)
				.setColor(signatureblue)
				.setFooter('OOF')

					message.reply(embed);}
        else { message.reply(noembed);}
  },
  description: 'Work and get some money',
  usage: `/work`
}