
const Discord = require('discord.js')
const signatureblue = '0070FF'
const db = require('quick.db')

module.exports = {
  name: 'warn',
  run: async(client, message, args) => {
				if(!message.member.hasPermission('ADMINISTRATOR')){message.reply('You dont have any permission to do it')} else {
				
		var target = message.mentions.users.first();
  if (!target) {
    message.reply('What ?? Thats wrong.. Just use it as /warn <mention> <reason>')
  }
	let reason = args.slice(1).join(' ')
	if(!reason){
		reason = 'No Reason'
	}
	const emb = new Discord.MessageEmbed()
	.setTitle('Warn !')
	.setDescription(`${target} has been warned by ${message.author} with the Reason: **${reason}**`)
	.setColor(signatureblue)

  message.channel.send(emb);
	db.add(`warns.${message.guild.id}.${target.id}`, 1)
				}

  },
  aliases: ['warnuser'],
  description: 'Warn hehe',
  usage: `/warn <mention> <reason>`
}