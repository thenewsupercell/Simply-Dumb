const Client = require('../Client/Client')
const Discord = require('discord.js')
const canvacord = require("canvacord");

module.exports = {
  name: 'avatar',
  run: async(client, message, args) => {

        if (message.mentions.members.first()) {
            user = message.mentions.users.first()
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user
        } else {
            user = message.author
        }

        let AV = user.displayAvatarURL({ size: 4096, dynamic: true })


        const color = ["0xFF3333", "0xFFD133", "0x86FF33", "0x33FF99", "0x33FFF6", "0x3361FF", "0xAF33FF", "0xFF33DA"]
        const colors = [Math.floor(Math.random() * color.length)]


        const mentionav = new Discord.MessageEmbed()
            .setTitle(`${user.tag}'s Avatar`)
            .setImage(AV)
            .setColor(color[colors])


        if (user) { message.channel.send(mentionav) }

  },
  aliases: ['av'],
  description: 'Shows other avatar and yours if you want too',
   usage: `/avatar (or) /avatar <mention/ping>`
}