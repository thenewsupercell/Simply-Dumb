const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'poll',
  run: async(client, message, args) => {
		if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You dont have permissions to do that")

		
const poll = args.slice(0).join(' ')
		const regex = poll.match(/"[^"]+"|[\\S]+"[^"]+/g)
		if(!regex){message.reply('You need to specify options with " "')}
		if(regex.length > 9){
			message.reply('You can only have 8 poll choices')
		}
let str = ''
let emojis = [
    '1️⃣',
    '2️⃣',
    '3️⃣',
    '4️⃣',
    '5️⃣',
    '6️⃣',
    '7️⃣',
    '8️⃣',
    '9️⃣'
]

let i = 0

for(const poll of regex){
	str = str + `${emojis[i]} ${poll}\n\n`
	i++
}

const pollemb = new Discord.MessageEmbed()
.setTitle('Poll go brrr')
.setDescription(str.replace(/"/g, ''))
.setColor(signatureblue)
.setFooter(`Poll by ${message.author.tag} | Hi.`)

const msg = await message.channel.send(pollemb)

for(let i = 0; i < regex.length; i++){
	msg.react(emojis[i])
}

  },
	description: 'Check the latency of the bot and API',
	usage: '/poll "choice 1" "choice 2" "choice 3"'
} 