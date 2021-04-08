
const Discord = require('discord.js')
const color = '0070FF'

module.exports = {
  name: 'snipe',
  run: async(client, message, args) => {
    
    
 const msg = client.snipes.get(message.channel.id)
        const embedn = new Discord.MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setColor(color)
            .setFooter(client.user.username, client.user.avatarURL())
            .setDescription(`<@${message.author.id}> **There is no deleted messages.**`)
            .setTimestamp();
        if(!msg) return message.channel.send(embedn)

        const embed = new Discord.MessageEmbed()
      
        if(msg.content)
        
        embed.addField('Content Of the Message :', msg.content)
        .setAuthor(msg.author, msg.authorimg)
        .setColor(color)
        .setFooter(" Requested by " + message.author.tag , message.author.avatarURL())
        .setTimestamp()

        if(msg.image)
        embed.setImage(msg.image)
        .setColor(color)
        .setDescription(`**Content of the message:**`)
        .setAuthor(msg.author, msg.authorimg)

        message.channel.send(embed)

    

  },
  aliases: ['expose'],
  description: 'Snipe Messages',
  usage: `/snipe`
}