const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: '8ball',
  run: async(client, message, args) => {
const PREFIX = '/'
     let question = message.content.split(`${PREFIX}8ball `).join(" ")
        let results = ["As I see it, yes", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don’t count on it", "It is certain", "It is decidedly so", "Most likely", "My reply is no", "My sources say no", "Outlook not so good", "Outlook good", "Reply hazy", "Try again", "Signs point to yes", "Very doubtful", " Without a doubt", "Yes", "Yes – definitely", "You may rely on it", "My Brain is small.. Pls dont ask me", "Thats True", "Idek how stoopid i am OOF.. Try again", "You found a Easter egg.. And the answer is Big NO", "Ask to your friends"]
        let result = Math.floor((Math.random() * results.length))

        const ballembed = new Discord.MessageEmbed()
            .setTitle("8Ball Results")
            .addField(`Your Question`, question)
            .addField(`My AI says`, results[result])
            .setFooter(`Asked by ${message.author.tag}`)
            .setColor(signatureblue)

        if (question === "/8ball") { message.channel.send(`Tell me a question`) } else { message.channel.send(ballembed) }

                 },
 description: 'Just a good old 8ball',
 usage: `/8ball <question>`
}