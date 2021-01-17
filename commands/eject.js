const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'eject',
  run: async(client, message, args) => {
    const impastaa = message.mentions.members.first()
    if(!impastaa) {message.reply('Eject who ?? Mention a user to eject them')}

        const importer = ["the imposter", "not a imposter", "not a imposter", "not a imposter", "not a imposter", "not a imposter", "not a imposter", "not a imposter", "the impasta", "no one"]
        const imrandom = [Math.floor(Math.random() * importer.length)]

        const imemb = new Discord.MessageEmbed()
            .setDescription(`${impastaa} is ${importer[imrandom]}`)
            .setColor("RANDOM")
            .setFooter(`Thrown by ${message.author.username}`)
            .setTimestamp()

        message.channel.send(imemb)
    
  },
  aliases: ['imposter'],
  description: 'Check who is the imposter',
  usage: `/eject <mention>`
}