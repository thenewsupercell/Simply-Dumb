
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'members',
  run: async(client, message, args) => {
     var memeberCount = client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b).toLocaleString()

        const serveremb = new Discord.MessageEmbed()
        .setTitle('Members i am handling')
        .setDescription(`${memeberCount} Members`)
        .setColor(signatureblue)

        message.channel.send(serveremb)
      },
  aliases: ['botmembers']
}