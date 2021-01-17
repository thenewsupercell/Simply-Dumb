const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'noice',
  run: async(client, message, args) => {
    
      const noiceemb = new Discord.MessageEmbed()
            .setTitle("Noice !")
            .setImage("https://media0.giphy.com/media/8Odq0zzKM596g/giphy.gif")
            .setColor("RANDOM")

        message.channel.send(noiceemb)
  }
}