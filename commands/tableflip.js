const{MessageEmbed} = require('discord.js');
const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const fetch = require('node-fetch');

module.exports = {
    name:"table",
    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.member;
        let uxd= member.user.displayAvatarURL({dynamic: false})
        let link = await fetch(`https://vacefron.nl/api/tableflip?user=${uxd}`)
        let embed = new MessageEmbed()
        .setImage(link.url)
				.setColor(signatureblue)

        message.channel.send(embed)
        .catch(e => {
            console.log(e)
            return message.channel.send("Something went wrong.")
        })
    },
		  description: 'Tableflip ooo',
  usage: `/table <mention> or /table`
}