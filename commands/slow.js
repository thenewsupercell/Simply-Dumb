
const Discord = require('discord.js')
const signatureblue = '0070FF'
const ms = require('ms')

module.exports = {
  name: 'slow',
  run: async(client, message, args) => {
    
     if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You dont have permission to do it")
     if(!message.guild.me.hasPermission('ADMINISTRATOR')) return message.reply("I dont have permission to do it")
    
     const duratio = args[0]

     if(!duratio){message.reply("Tell me the seconds to change the slowmode | Example - /slow 10 (or) /slow 0")}

     const slowboi = new Discord.MessageEmbed()
     .setTitle(`🕒  Slowmode enabled to ${duratio}s  🕒`)
     .setFooter(`🕒  Slowed by ${message.author.username}`, message.author.avatarURL)
     .setTimestamp()
     .setColor(signatureblue)

     message.channel.setRateLimitPerUser(duratio)
     message.channel.send(slowboi)

  },
  aliases: ['slowmode'],
  description: 'Just a normal slowmode command',
  usage: `/slow <time in seconds>`
}