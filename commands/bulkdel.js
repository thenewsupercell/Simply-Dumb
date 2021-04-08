
const Discord = require('discord.js')
const canvacord = require("canvacord");

module.exports = {
  name: 'bulkdel',
  run: async(client, message, args) => {
    const bulkclearembed = new Discord.MessageEmbed()
            .setTitle(":white_check_mark: Deleted 100 Messages")
            .setColor(0x28a745)
            .setFooter(`Deleted by ${message.author.username}`)
        if (!message.member.hasPermission("MANAGE_MESSAGES")) { message.reply("You dont have any permission to do this.. OOF") }
        if (message.member.hasPermission("MANAGE_MESSAGES")) { message.channel.bulkDelete(100) } {
            const bulkoof = await message.channel.send(bulkclearembed)
 setTimeout(() => { bulkoof.delete() }, 2000)
        }
  },
  aliases: ['alldelete'],
  description: 'Deletes 100 at a time',
  usage: `/bulkdel`
}