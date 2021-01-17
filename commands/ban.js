const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'ban',
  run: async(client, message, args) => {

    let banvictim = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if (!banvictim) { message.reply("Ban what ?? Ban you.. Wait i wont.. So Mention a user (Only Moderators can Ban/Kick)") }

        const reasonban = "Breaking Rules"

        const banemb = new Discord.MessageEmbed()
            .setDescription(`:thumbsup: ${banvictim.user.tag} has been Banned by ${message.author}`)
            .setColor(0x28a745)
            .setFooter(`Banned by ${message.author.username}`)

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You dont have permissions to ban them")
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply("I dont have permission to ban them")
        if (message.mentions.members.first().hasPermission("ADMINISTRATOR")) return message.reply("I cant ban a admin.. Please remove his/her admin")
        if (message.mentions.members.first() === message.author) return message.reply("You cant ban yourself . _.")


        if (banvictim) {
            banvictim.ban({
                reason: "Breaking rules"
            })
            message.channel.send(banemb)
        }
      },
  description: 'Bans a user',
  usage: `/ban <mention>`
}