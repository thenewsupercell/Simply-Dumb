const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const db = require('quick.db')

module.exports = {
  name: 'afk',
  run: async(client, message, args) => {
		const status = new db.table("AFKs")
		let afk = await status.fetch(message.author.id, message.guild.id)
		const emb = new Discord.MessageEmbed()
		.setColor(signatureblue)

		if(!afk){
			emb.setDescription(`**${message.author}** is now AFK, Reason: ${args.join(" ") ? args.join(" "): "No Reason"}`).setFooter('AFK go brrr')
			status.set(message.author.id, message.guild.id, args.join(" ") || `No Reason`)
		} else {
			emb.setDescription(`You are no longer AFK`)
			status.delete(message.author.id, message.guild.id)
		}
		message.channel.send(emb)
    
  },
  description: 'Be afk',
  usage: `/afk (or) /afk <reason>`
}