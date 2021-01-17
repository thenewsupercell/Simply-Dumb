const Client = require('../Client/Client')
const Discord = require('discord.js')
module.exports = {
  name: 'say',
  run: async(client, message, args) => {

        const giveitem = args.join(" ")

        const saypeople = new Discord.MessageEmbed()
            .setDescription(`**${giveitem}**`)
            .setFooter(`Said by ${message.author.username}`)
            .setColor("RANDOM")

        if (giveitem) { message.channel.send(saypeople) + message.delete() }
        if (!giveitem) { message.reply("Say what ?? Tell me a thing to say") }

      },
  aliases: ['saymsg']
}