const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'invite',
  run: async(client, message, args) => {
     const invemb = new Discord.MessageEmbed()
            .setTitle(`Bot Invite go brrr`)
            .setDescription("Here it is - https://top.gg/bot/770884670309007391")
            .setColor(signatureblue)
            .setFooter(`Botted by ${message.author.username}`)
            .setURL("https://discord.com/api/oauth2/authorize?client_id=770884670309007391&permissions=8&scope=bot")

        message.channel.send(invemb)
      },
  aliases: ['botinvite']
}