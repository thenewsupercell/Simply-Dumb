const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'laugh',
  run: async(client, message, args) => {

    let funny = message.mentions.members.first()

        const laughh = ["https://media.tenor.com/images/2473c96c5e880fccda4f8e0a1501de30/tenor.gif", "https://thumbs.gfycat.com/BlissfulUnimportantBronco-max-1mb.gif", "https://i.pinimg.com/originals/4f/d6/b2/4fd6b288e420f400d8633d40a4b9ad98.gif", "https://i.gifer.com/XSYY.gif", "https://i.gifer.com/64Or.gif", "https://i.imgur.com/zJEiJ4k.gif", "https://i.pinimg.com/originals/26/df/21/26df2182fc943676dc6cc51371efc04b.gif"]
        const laughgif = [Math.floor(Math.random() * laughh.length)]


        const laughwithoutvictimemb = new Discord.MessageEmbed()
            .setDescription(`**${message.author} laughed**`)
            .setImage(laughh[laughgif])
            .setColor(signatureblue)

        if (!funny) { message.channel.send(laughwithoutvictimemb) }
        
if (funny) {
        const laughwithvictimemb = new Discord.MessageEmbed()
            .setDescription(`**${message.author} laughed at ${message.mentions.members.first().user} **`)
            .setImage(laughh[laughgif])
            .setColor(signatureblue)


        message.channel.send(laughwithvictimemb) }
    
  },
  aliases: ['lol'],
  description: 'Laugh at someone or laugh at a wall',
  usage: `/laugh <mention> (or) /laugh`
}