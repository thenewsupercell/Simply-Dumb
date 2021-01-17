const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'hack',
  run: async(client, message, args) => {

     let victim = message.mentions.members.first()
        let passwordIg = ["cobrasucksatgames.com", "rahulplaysisidiot", "OinkOinkOink", "whyalwaysme?!", "1234567890", "ILuvYoutubers"]
        let passwordResult = Math.floor((Math.random() * passwordIg.length))
        let ffa = ["No one cares about that . _.", "Go check it out", "Subscribe to Rahul_Plays to reveal it", "YES", "NO", ". _."]
        let ffaResult = Math.floor((Math.random() * ffa.length))
        let ai = ["Its Useless to hack him", "His account has nothing", "I dont have AI so you go brrrr", "Its not worth it", "Gud account but i say NO", "It is worth"]
        let aiResult = Math.floor((Math.random() * ai.length))
        let ip = ["168.212.226.2.", "101.010.101.0.", "192.135.174.1.", "104.852.194.5", "Im not smart enough", "I dont care", "10101010"]
        let ipResult = Math.floor((Math.random() * ip.length))

        if (victim) {
            const Message = await message.channel.send("Hacking...")


            setTimeout(() => { Message.edit("Hacking User....") }, 1000)
            setTimeout(() => { Message.edit("Connecting to White web...") }, 3000)
            setTimeout(() => { Message.edit(`Username = ${victim.user.username}`) }, 5000)
            setTimeout(() => { Message.edit(`Password = ${passwordIg[passwordResult]}`) }, 7000)
            setTimeout(() => { Message.edit(`IP = ${ip[ipResult]}`) }, 9000)
            setTimeout(() => { Message.edit(`My AI Says = ${ai[aiResult]} `) }, 11000)
            setTimeout(() => { Message.edit(`2FA = ${ffa[ffaResult]}`) }, 13000)
            setTimeout(() => { Message.edit(`Deleting Servers which ${victim.user.username} own `) }, 15000)
            setTimeout(() => { Message.edit(`Reporting to Discord as Breaking Discord TOS`) }, 17000)
            setTimeout(() => { message.channel.send("A Useless hack has successfully completed :thumbsup:") }, 20000)
        } else { message.channel.send("Mention a user ig") }
        
          },
  aliases: ['hax']
}