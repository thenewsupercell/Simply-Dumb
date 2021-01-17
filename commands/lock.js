const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'lock',
  run: async(client, message, args) => {
			if(!message.guild.me.hasPermission('ADMINISTRATOR')){message.reply('I dont have any permission to do it')}
				if(!message.member.hasPermission('ADMINISTRATOR')){message.reply('You dont have any permission to do it')}
								const role = message.channel.guild.roles.everyone

message.channel.updateOverwrite(role, { SEND_MESSAGES: false });

	const emb = new Discord.MessageEmbed()
	.setTitle('Channel locked')
	.setDescription(`The channel with the id \`${message.channel.id}\` has been locked :thumbsup:`)
	.setColor(signatureblue)

message.reply(emb)
    
  },
  aliases: ['lockchannel'],
  description: 'Can lock the channel',
  usage: `/lock`
}
