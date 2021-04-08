
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'unban',
  run: async(client, message, args) => {

    let tounban = await client.users.fetch(args[0])

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You dont have permission to unban")
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("I dont have permission to unban him")
if(tounban){
        const reasonunban = args[1] || "No Reason"
        message.guild.members.unban(tounban, reasonunban)
        const embed = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setFooter(message.author.tag)
        message.channel.send(embed.setDescription(`:smile: ${tounban.tag} has been Unbanned by ${message.author}`))
} else {message.reply('The user is not banned. Wat are you talking about ?')}

    
  },
  description: 'Unban if you are a moderator',
  usage: `/unban <user id>`
}