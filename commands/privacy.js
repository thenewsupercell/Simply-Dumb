const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'privacy',
  run: async(client, message, args) => {
    
         const slowboi = new Discord.MessageEmbed()
     .setTitle(`Privacy Policy`)
     .setFooter(`Accept the Terms ;)`, message.author.avatarURL)
     .addFields(
         {name: 'What data we will be Collecting ?', value: 'We will collect how many members/guilds are using the bot and id for economy and warning'},
         {name: 'Why do we need the data ?', value: 'We want that data for using it in bot status and in bot stats and we want id for warn commands'},
         {name: 'How would we use that data ?', value: 'We use the data as number of members and guilds..some things like economy and leveling and moderation need usernames or tags of a user and id '},
         {name: 'Who would we share the data with ?', value: 'We wont share the data from the bot and its secure.'},
         {name: 'How can users contact us if they have concerns', value: 'You can contact me with [Twitter](https://twitter.com/Rahul_Playz) | Discord - @Rahul_Plays#0243 | Contact us with [Support Server](https://discord.gg/WX6fRqYfH2)'},
         )
     .setTimestamp()
     .setColor(signatureblue)
     .setURL(`https://discord.gg/WX6fRqYfH2`)

     message.channel.send(slowboi)
     
  },
  aliases: ['policy'],
  description: 'Shows you the privacy policy',
  usage: `/privacy`
}