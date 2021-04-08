
const Discord = require('discord.js')
const signatureblue = '0070FF'
const ms = require("ms")
const db = require("quick.db")

module.exports = {
  name: 'reminder',
  run: async(client, message, args) => {
		let timeuser = args[0]
let reason = args.slice(1).join(" ")  || 'No Reason'

if(!timeuser) return message.reply(":x: You should enter time like 15m (or) 10s (or) 1d")
if(!reason) return message.reply(":x: You should enter a reason")

let timo = ms(timeuser)
db.set(`remind.${message.author.id}`,Date.now() + timo)
const embo = new Discord.MessageEmbed()
.setTitle('Reminder')
.setDescription(`Reminder has set to **${timeuser}** for Reason: **${reason}**`)
.setColor(signatureblue)
.setFooter(`Reminder for ${message.author.tag}`)

message.channel.send(embo)
const interval = setInterval(function() {

	const emboo = new Discord.MessageEmbed()
	.setTitle('Reminder')
.setDescription(`Reminder has finished :thumbsup: for Reason: **${reason}**`)
.setColor(signatureblue)
.setFooter(`Reminded ${message.author.tag}`)

    if(Date.now() > db.fetch(`remind.${message.author.id}`)){
        db.delete(`remind.${message.author.id}`)
        message.author.send(emboo)
        message.channel.send(`${message.author} !! Reminder !! for Reason: ${reason}`)
        .catch(e => console.log(e))
        clearInterval(interval)
    }

},1000)

  },
  aliases: ['remind'],
  description: 'Set a reminder if you want',
  usage: `/remind <time> <reason>`
}