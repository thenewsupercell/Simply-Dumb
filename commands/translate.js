const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const translate = require('@k3rn31p4nic/google-translate-api')

module.exports = {
  name: 'translate',
  run: async(client, message, args) => {
     let language = args[0]
        let text = args.slice(1).join(" ")

        if (!language) return message.reply("Mention a language to translate to")
        if (language.length !== 2) return message.reply("Language must be in 2 letter codes (Dont know the language codes ?? Type '/lang')")
        if (!text) return message.channel.send("Translate what ?? Translate your life ?? NO !.. Give me something to translate")

        const rezult = await translate(text, { to: language });

        const translateemb = new Discord.MessageEmbed()
            .setTitle("Translator.")
            .setDescription(`**${text}** - **${rezult.text}**`)
            .setFooter(`Powered by Google Translate | Translated By ${message.author.username}`)
            .setTimestamp()
            .setColor(0xFEFEFE)
            .setThumbnail("https://www.fluentu.com/blog/wp-content/uploads/2018/11/best-free-online-translator.png")

        message.channel.send(translateemb)
    
  },
  aliases: ['tr'],
  description: 'Translate a word',
  usage: `/translate <language in 2 letter code> <word>`
}