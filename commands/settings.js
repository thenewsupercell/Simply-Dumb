const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const db = require('quick.db')

module.exports = {
  name: 'setting',
  run: async(client, message, args) => {
		if(!message.member.hasPermission('ADMINISTRATOR')){message.reply('You dont have permission to change any guild settings OOF')} else {
			let settings = args[0]
			let tof = args[1]

			if(!settings){
				const embed = new Discord.MessageEmbed()
				.setTitle('Settings')
				.addFields(
					{name: 'antiswear', value: 'Clears any profanity or swear words... Some of the words are permanently banned.'},
					{name: 'antiad', value: 'Clears any invite links'},
					{name: 'Coming soon', value: 'Suggest me some more settings'}
				)
				.setColor(signatureblue)
				.setFooter('Usage: /setting <option> <true/false>')

				message.reply(embed)
			} else

			if(settings === 'antiswear'){
				if(tof === 'true'){

        db.set(`swear.${message.guild.id}`, 1)

				message.reply('I have changed the \`\`antiswear\`\` to ON')
				} 
				else if(tof === 'on'){

        db.set(`swear.${message.guild.id}`, 1)

				message.reply('I have changed the \`\`antiswear\`\` to ON')
				}
				 else if(tof === 'false'){

				db.delete(`swear.${message.guild.id}`, 1)

				message.reply('I have changed the \`\`antiswear\`\` to OFF')
				} else if(tof === 'off'){

				db.delete(`swear.${message.guild.id}`, 1)

				message.reply('I have changed the \`\`antiswear\`\` to OFF')
				}
				 else {message.reply('WOT ?? is that true or false ?? IDK')}
			}
		
			 else 
				if(settings === 'antiad'){
				if(tof === 'true'){

        db.add(`ad.${message.guild.id}`, 1)

				message.reply('I have changed the \`\`antiad\`\` to ON')
				} 
				else if(tof === 'on'){

        db.add(`ad.${message.guild.id}`, 1)

				message.reply('I have changed the \`\`antiad\`\` to ON')
				}
				 else if(tof === 'false'){

				db.delete(`ad.${message.guild.id}`, 1)

				message.reply('I have changed the \`\`antiad\`\` to OFF')
				} else if(tof === 'off'){

				db.delete(`ad.${message.guild.id}`, 1)

				message.reply('I have changed the \`\`antiad\`\` to OFF')
				}
				 else {message.reply('WOT ?? is that true or false ?? IDK')}

				}else {message.reply('Is that even a setting ?? idk')}
		}

  },
  aliases: ['settings'],
  description: 'Change some guild settings',
  usage: `/setting <thing> <true/false>`
}