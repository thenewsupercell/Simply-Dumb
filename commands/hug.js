const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'hug',
  run: async(client, message, args) => {
    
            let hugge = message.mentions.members.first()

            if (!hugge) { message.reply("Huh? who are you going to hug ? Mention the user to hug them") }

        const hugURL = ["https://media.tenor.com/images/afbc39fcc4cbe67d9622f657d60d41cf/tenor.gif", "https://media1.giphy.com/media/VhRU9RvKZWKujYXhlJ/source.gif", "https://acegif.com/wp-content/uploads/anime-hug.gif", "https://66.media.tumblr.com/5dfb67d0a674fe5f81950478f5b2d4ed/tumblr_ofd4e2h8O81ub9qlao1_400.gif", "https://i.gifer.com/5VD.gif", "https://media1.tenor.com/images/d41992c683f947437a1c55e00de18ec0/tenor.gif?itemid=4623960"]
        const hugrandom = [Math.floor(Math.random() * hugURL.length)]

        const hugemb = new Discord.MessageEmbed()
            .setDescription(`**${message.author} hugs ${hugge.user}**`)
            .setImage(hugURL[hugrandom])
            .setColor(signatureblue)


        if (hugge) { message.channel.send(hugemb) }

  },
  description: 'Hug a user virtually',
  usage: `/hug <mention/ping>`
}