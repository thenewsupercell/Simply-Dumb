const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'hello',
  run: async(client, message, args) => {

     let tweet = ["Hello, How are you ?", "Wassup.. How is your day ?", "Hello Human..", "Ahhh.. Im lazy to say hello to you.. :zzz: Sorry", "Hello... GAMERS !!", "Ah... Hello my friend.. Atleast you know that i exist"]
        let response = Math.floor((Math.random() * tweet.length))
        message.reply(tweet[response])

                         },
  aliases: ['hi']
}