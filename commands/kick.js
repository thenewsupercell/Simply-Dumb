const Client = require('../Client/Client')
const Discord = require('discord.js')
module.exports = {
  name: 'kick',
  run: async(client, message, args) => {

		if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You dont have permissions to kick them")

    let kickvictim = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if (!kickvictim) { message.reply("Kick what ?? Kick you.. Wait i wont.. So Mention a user (Only Moderators can Kick/Ban)") }

        const kickemb = new Discord.MessageEmbed()
            .setDescription(`:thumbsup: ${kickvictim.user.tag} has been Kicked by ${message.author}`)
            .setColor(0x28a745)
            .setFooter(`Kicked by ${message.author.username}`)
						
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply("I dont have permission to kick them")
        if (message.mentions.members.first().hasPermission("ADMINISTRATOR")) return message.reply("I cant kick a admin.. Please remove his/her admin")
        if (message.mentions.members.first() === message.author) return message.reply("You cant kick yourself . _.")


        if (kickvictim) {
            kickvictim.kick({
                reason: reasonkick
            })
            message.channel.send(kickemb)
        }
      },
  description: 'Kicks a user if the author is moderator',
  usage: `/kick <user>`
}