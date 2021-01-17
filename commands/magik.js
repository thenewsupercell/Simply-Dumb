const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const fetch = require('node-fetch')

module.exports = {
  name: 'magik',
  run: async(client, message, args) => {
    let useio = message.mentions.users.first() || message.author
    let imgo = useio.displayAvatarURL({size: 2048, format: 'jpg'})
    console.log(imgo)
    message.channel.send('🕑 Wait for few seconds 🕑')

  fetch(`https://nekobot.xyz/api/imagegen?type=magik&image=${imgo}&intensity=2`)
   .then(res => res.json())
   .then(data => {
     let emb = new Discord.MessageEmbed()
     .setColor(signatureblue)
     .setImage(data.message)
     .setFooter(`${message.author.tag} Magiked hehe`)
     message.channel.send(emb)
   })
  },
  aliases: ['mgik']
}