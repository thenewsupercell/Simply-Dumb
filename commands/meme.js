const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const Randompuppy = require('random-puppy')

module.exports = {
  name: 'meme',
  run: async(client, message, args) => {
    
     const subReddits = ["meme", "PewdiepieSubmissions", "me_irl", "dankmeme"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
        const img = await Randompuppy(random)
        const color = ["0xFF3333", "0xFFD133", "0x86FF33", "0x33FF99", "0x33FFF6", "0x3361FF", "0xAF33FF", "0xFF33DA"]
        const colors = [Math.floor(Math.random() * color.length)]

				if(!img){message.reply('OOF An error occured from reddit side')}

        const memeembed = new Discord.MessageEmbed()
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`http://reddit.com/${random}`)
            .setFooter(`Requested by ${message.author.username}`)
            .setColor(color[colors])

        message.channel.send(memeembed)
  }
}