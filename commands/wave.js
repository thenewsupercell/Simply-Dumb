const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'wave',
  run: async(client, message, args) => {

     let wav = message.mentions.members.first()

        const waveURL = ["https://media.tenor.com/images/ab26116ae304fd5badf5416d218f4439/tenor.gif", "https://media4.giphy.com/media/l0MYPVhG6OKv9yivm/source.gif", "https://i.pinimg.com/originals/48/24/48/482448abd02a1185c36cbaec848feb48.gif", "https://i.pinimg.com/originals/39/bf/c0/39bfc051c9de1e3a71c5210755e4edf7.gif", "https://media1.tenor.com/images/5665fd01ac455701fdcd5b68801a2894/tenor.gif?itemid=13632843", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAqH8dKQHOJMr4jbvMZSxUAJsntmnQzz7Bg&usqp=CAU"]
        const randomwave = [Math.floor(Math.random() * waveURL.length)]

        const wavemb = new Discord.MessageEmbed()
            .setDescription(`**${message.author} Waved at ${wav}**`)
            .setImage(waveURL[randomwave])
            .setColor("RANDOM")

        const wavhimemb = new Discord.MessageEmbed()
            .setDescription(`**${message.author} Waved**`)
            .setImage(waveURL[randomwave])
            .setColor("RANDOM")

        if (!wav) { message.channel.send(wavhimemb) } else { message.channel.send(wavemb) }
        
  },
  description: 'Wave at someone',
	usage: '/wave (or) /wave <mention>'
}