
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'contact',
  run: async(client, message, args) => {

    const cemb = new Discord.MessageEmbed()
    .setTitle('Contact the Developer')
    .setDescription('**Rahul_Plays Contact Info:**\n[Support Server](https://discord.gg/WX6fRqYfH2)\n[Twitter](https://twitter.com/Rahul_Playz)\n[Instagram](https://www.instagram.com/rahul_playz/)\n[Youtube](https://www.youtube.com/channel/UCFcsR9sAZ9c4K8V7EY5mKlA)\n\nAnd Please dont spam at my social media EEE')
    .setColor(signatureblue)
    .setFooter('Hi. User UwU')

    message.author.send(cemb)
    message.reply('Sent to your dms Hehe')
    
  },
  aliases: ['contactdev'],
  description: 'Wanna contact the dev of the bot ?',
  usage: `/contact`
}