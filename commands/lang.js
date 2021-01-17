const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'lang',
  run: async(client, message, args) => {
    
    const languagesemb = new Discord.MessageEmbed()
            .setTitle("Language codes for translate")
            .setDescription(`English - **en** \n Turkish - **tr** \n Spanish - **es** \n Arabic - **ar** \n Chinese - **zh** \n Dutch - **nl** \n French - **fr** \n Japanese - **ja** \n Hindi - **hi** \n Malay - **ms** \n Portuguese - **pt** \n Russian - **ru** \n Sanskrit - **sa**`)
            .addFields(
                { name: "Want More ??", value: "Click the link = https://www.sitepoint.com/iso-2-letter-language-codes/" }
            )
            .setURL("https://www.sitepoint.com/iso-2-letter-language-codes/")
            .setColor("RANDOM")
            .setThumbnail("https://www.fluentu.com/blog/wp-content/uploads/2018/11/best-free-online-translator.png")

        message.author.send(languagesemb)
        message.reply('Message sent to your dms ;) | Didint get the message ? Open your dms and try again. | Dont want to open the dms ?? [Click here](https://www.sitepoint.com/iso-2-letter-language-codes/)')

  },
  aliases: ['language'],
  description: 'Shows the 2 letter language code for translator',
  usage: `/lang`
}