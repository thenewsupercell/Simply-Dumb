const Client = require('../Client/Client')
const Discord = require('discord.js')
const canvacord = require("canvacord");

module.exports = {
  name: 'clear',
  run: async(client, message, args) => {
    let clearnumber = args.join(" ")

        const clearembed = new Discord.MessageEmbed()
            .setTitle(`:white_check_mark:  Deleted ${clearnumber} Messages`)
            .setColor(0x28a745)
            .setFooter(`Cleared by ${message.author.username}`)

        const emptyembed = new Discord.MessageEmbed()
            .setTitle(`I cannot delete the air . _. Give me a number above 0`)
            .setColor(0xFFA500)

        const highembed = new Discord.MessageEmbed()
            .setTitle(`I am very sorry.. Discord allows me to delete only below 100 messages per command..`)
            .setColor(0xff0303)

        message.delete()


        if (!message.member.hasPermission("MANAGE_MESSAGES")) { message.reply("You dont have any permission to do this.. OOF") } else {
            (message.channel.bulkDelete(clearnumber))
            if (clearnumber < 1) { message.channel.send(emptyembed) }
            if (clearnumber > 100) { message.channel.send(highembed) }
            if (clearnumber === '/clear') { message.channel.send(emptyembed) }
            if (clearnumber < 101) { const e = await message.channel.send(clearembed) 
             setTimeout(() => { e.delete() }, 2000)}
        }
  },
  aliases: ['purge'],
  description: 'Just a good old purge/clear command'
}