
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'servers',
  run: async(client, message, args) => {
        var servercount = client.guilds.cache.size

        const serveremb = new Discord.MessageEmbed()
        .setTitle('Servers i am handling')
        .setDescription(`${servercount} Servers`)
        .setFooter("Wanna make that number big ? Add this bot to another server by saying /invite")
        .setColor(signatureblue)

        message.channel.send(serveremb)
  },
  aliases: ['botserver']
}