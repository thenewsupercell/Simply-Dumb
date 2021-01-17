const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const { EconomyManager } = require("quick.eco")
const eco = new EconomyManager({
    adapter: 'sqlite'
});
const ms = require('ms')

module.exports = {
  name: 'beg',
  run: async(client, message, args) => {
let user = message.author;

const homeGuild = client.guilds.cache.get('772814149155553280')
const member = homeGuild.member(user);
let bonus = 0

if(member){
	bonus = 100
	console.log('hehe')
}


const mon = Math.floor(Math.random() * 150) + 4 + bonus

const worko = ['Rahul_Plays', 'Cobraboytnt', 'MrBeast', 'PewDiePie', 'Beggar', 'John Doe', 'Herobrine', 'Simply Dumb', 'Your Fans', 'Hacker']
const mono = [Math.floor(Math.random() * worko.length)]

        let add = await eco.beg(message.author.id, false, mon);
				 const noembed = new Discord.MessageEmbed()
				.setTitle('💸 Beg 💸')
				.setDescription(`${worko[mono]} donated **${mon} cash **\nAnd now you have total of ${add.amount} cash.`)
				.setColor(signatureblue)
				.setFooter('Wow.. You Begged')

        if (add.cooldown){

				const embed = new Discord.MessageEmbed()
				.setTitle('💸 Oh oof.. 💸')
				.setDescription(`Stop Begging like a stoopid. Come back after ${add.time.minutes} minutes & ${add.time.seconds} seconds.`)
				.setColor(signatureblue)
				.setFooter('OOF')

					message.reply(embed);}
        else { message.reply(noembed);}
  },
  description: 'Beg and get some money',
  usage: `/beg`
}