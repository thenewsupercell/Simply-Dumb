const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'rickroll',
  run: async(client, message, args) => {

     let rollvictim = message.mentions.members.first() || message.author

        const rickembed = new Discord.MessageEmbed()
            .setDescription(`**Get Rickrolled ${rollvictim}**`)
            .setFooter(`Rickrolled by ${message.author.tag}`)
            .setImage("https://media1.tenor.com/images/23aeaaa34afd591deee6c163c96cb0ee/tenor.gif?itemid=7220603")
            .setColor(0x00B9FF)

        message.channel.send(rickembed)
          },
  aliases: ['rickr']
}