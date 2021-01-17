const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const api = require('random-stuff-api')

module.exports = {
  name: 'joke',
  run: async(client, message, args) => {
    api.random.joke()
      .then(joke => {
        const emb = new Discord.MessageEmbed()
        .setDescription(`**${joke}**`)
        .setColor(signatureblue)
        .setFooter(`Please laugh ${message.author.tag}`)
message.channel.send(emb)
      })

    
  },
  aliases: ['dedjoke'],
  description: 'Tells some dead joke',
  usage: `/joke`
}