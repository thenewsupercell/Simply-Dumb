
const Discord = require('discord.js')
const signatureblue = '0070FF'
const fetch = require('node-fetch')

module.exports = {
  name: 'deepfry',
  run: async(client, message, args) => {
    let useio = message.mentions.users.first() || message.author
    let imgo = useio.displayAvatarURL({size: 2048, format: 'jpg'})

   fetch(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${imgo}`)
   .then(res => res.json())
   .then(data => {
     let emb = new Discord.MessageEmbed()
     .setColor(signatureblue)
     .setImage(data.message)
     .setURL(data.message)
     .setFooter(`${message.author.tag} Fried them`)

     message.channel.send(emb)
     
   })
  },
  aliases: ['dpfry']
}