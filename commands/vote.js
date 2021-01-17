const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'vote',
  run: async(client, message, args) => {
    const votemb = new Discord.MessageEmbed()
            .setTitle("Thank you for using the bot <:wizardo:774124560198402108> ")
            .addFields({name: "Vote here" , value: "**Top.gg:**  https://top.gg/bot/770884670309007391/vote\n**Discord Bot Listing:** https://discordbotlist.com/bots/simply-dumb/upvote\n**"})
            .setColor(signatureblue)
            .setFooter("Vote me plss")
            .setTimestamp()

        message.channel.send(votemb)
  },
  aliases: ['botvote'],
  description: 'Please vote the bot in top.gg',
  usage: `/vote`
}