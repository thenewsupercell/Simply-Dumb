
const Discord = require('discord.js')
const fetch = require('node-fetch');
const{MessageEmbed} = require('discord.js');

module.exports = {
  name: 'wide',
  run: async(client, message, args) => {
        if (message.mentions.members.first()) {
            user = message.mentions.users.first()
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user
        } else {
            user = message.author
        }

        let AV = user.displayAvatarURL({ size: 4096, dynamic: false })

        let link = await fetch(`https://vacefron.nl/api/wide?image=${AV}`)
        let embed = new MessageEmbed()
        .setImage(link.url)

        message.channel.send(embed)
        .catch(e => {
            console.log(e)
            return message.channel.send("Something went wrong!")
        })
      },
			description: "Wanna be a wide guy ?? here you go..",
  aliases: ['getwide']
}