const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const fetch = require('node-fetch')

module.exports = {
  name: 'changemymind',
  run: async(client, message, args) => {
    let txt = args.join(" ")
   if(!txt) return message.reply("Gimme the word to change your mind")

   fetch(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${txt}`)
   .then(res => res.json())
   .then(data => {
     let emb = new Discord.MessageEmbed()
     .setColor(signatureblue)
     .setImage(data.message)
     .setURL(data.message)
     .setFooter(`${message.author.tag} changed his mind`)

     message.channel.send(emb)
     
   })
  },
  aliases: ['cmm']
}