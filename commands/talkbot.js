const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'talkbot',
  run: async(client, message, args) => {

    const bm = ["My Developer said 'Hippity hoppity, Your code is now my property...'", "Wait... Thats Illegal.. You cant talk to a bot . _.", "BOOMSHAKALAKA !! BOOM !!", "REEEEEEEEEE", "Ok What?? I am lazy..", "uMm HeLlO ? hOw ArE y0u ?", "I believe i can flyy... I believe i can touch the skyy...", "I am busy right now... I cant talk to you now..", "GIVEAWAY !!! I AM GIVING AWAY 2 JAR OF AIR !!! to enter in the giveaway... Type /rickroll", "Hi..", "K cool"]
        const bmsg = [Math.floor(Math.random() * bm.length)]


        const batmsg = new Discord.MessageEmbed()
            .setTitle(`Beep Boop... Boop Beep ??`)
            .setDescription(`Translator = ${bm[bmsg]}`)
            .setColor(signatureblue)

        message.channel.send(batmsg)
    
  },
  aliases: ['botchat'],
  description: 'Chat with the bot hehe',
  usage: `/talkbot`
}