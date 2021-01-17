const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'unlock',
  run: async(client, message, args) => {
				if(!message.member.hasPermission('ADMINISTRATOR')){message.reply('You dont have any permission to do it')}
				const role = message.channel.guild.roles.everyone
				
message.channel.updateOverwrite(role, { SEND_MESSAGES: true });


	const emb = new Discord.MessageEmbed()
	.setTitle('Channel unlocked')
	.setDescription(`The channel with the id \`${message.channel.id}\` has been unlocked :thumbsup:`)
	.setColor(signatureblue)

message.reply(emb)
    
  },
  aliases: ['unlockchannel'],
  description: 'Can unlock the channel',
  usage: `/unlock`
}
