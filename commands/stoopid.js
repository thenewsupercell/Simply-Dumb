const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'stoopid',
  run: async(client, message, args) => {

        let stoopid = message.mentions.members.first()

        const percent = ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%", "5%", "15%", "25%", "35%", "45%", "55%", "65%", "75%", "85%", "95%", "-5%"]
        const percentage = [Math.floor(Math.random() * percent.length)]

         const stupidhimself = new Discord.MessageEmbed()
            .setDescription(`**${message.author}'s Stoopidity'** \n \n **🤪 ${percent[percentage]} Stoopidness 🤪**`)
            .setColor(signatureblue)

        if (!stoopid) { message.channel.send(stupidhimself) }

        const stupidothers = new Discord.MessageEmbed()
            .setDescription(`**${message.mentions.members.first()}'s Stoopidity ** \n \n **🤪 ${percent[percentage]} Stoopidness 🤪**`)
            .setColor(signatureblue)

        if (stoopid) { message.channel.send(stupidothers) }
      },
  aliases: ['stupid'],
  description: "Shows other's stupid level"
}