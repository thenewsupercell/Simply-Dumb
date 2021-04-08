
const Discord = require('discord.js')
const signatureblue = '0070FF'
const db = require('quick.db')

module.exports = {
  name: 'removewarn',
  run: async(client, message, args) => {
		if(!message.member.hasPermission('ADMINISTRATOR')){message.reply('You dont have any permission to do it')} else {

		var target = message.mentions.members.first() || message.author
  if (!target) {
    message.reply('What ?? Thats wrong.. Just use it as /removewarn <mention>')
  }

	const fetcho = await db.fetch(`warns.${message.guild.id}.${target.id}`)
	if(fetcho == null) {
				const embb = new Discord.MessageEmbed()
	.setTitle('Wait a second...')
	.setDescription(`The user ${target} dont have any warnings to remove`)
	.setColor(signatureblue)

		message.channel.send(embb)} else {

	const emb = new Discord.MessageEmbed()
	.setTitle('Removed ;)')
	.setDescription(`The warning has been removed from ${target}`)
	.setColor(signatureblue)

  message.channel.send(emb)
db.delete(`warns.${message.guild.id}.${target.id}`, 1)
		}
		}
  },
  aliases: ['delwarn'],
  description: 'Remove Warnings',
  usage: `/removewarn <mention>`
}