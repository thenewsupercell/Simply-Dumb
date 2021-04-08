
const Discord = require('discord.js')
const signatureblue = '0070FF'
const db = require('quick.db')

module.exports = {
  name: 'warnings',
  run: async(client, message, args) => {

		var target = message.mentions.members.first() || message.author
  if (!target) {
    message.reply('What ?? Thats wrong.. Just use it as /warnings <mention>')
  }
	const fetcho = await db.fetch(`warns.${message.guild.id}.${target.id}`)
	if(fetcho == null) {
			const embb = new Discord.MessageEmbed()
	.setTitle('Warnings ?')
	.setDescription(`${target} has 0 warnings.. Noice`)
	.setColor(signatureblue)

  message.channel.send(embb);
	} else {

	const emb = new Discord.MessageEmbed()
	.setTitle('Warnings')
	.setDescription(`${target} has ${fetcho} warnings`)
	.setColor(signatureblue)

  message.channel.send(emb)}

  },
  aliases: ['warns'],
  description: 'Warnings',
  usage: `/warnings <mention>`
}