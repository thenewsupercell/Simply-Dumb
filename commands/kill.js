const Client = require('../Client/Client')
const Discord = require('discord.js')
module.exports = {
  name: 'kill',
  run: async(client, message, args) => {

let ded = message.mentions.members.first()
        const dedmsg = [`${ded} slipped on floor and died`, `${ded} died unsuccessfully`, `${ded} stepped on legos and died`, `${message.author} killed ${ded} with cringy videos`, `${ded} went to space without space suit... OOF`, `${ded} died from eating 1000 tacos.. Sadd`, `${message.author} spawned cobraboytnt, ${ded} spawned trash can.. cobraboytnt attacked trash can... Trash can and ${ded} has fainted...`, `${ded} died due to ${message.author}'s stupidity`, `${ded}'s clone killed ${ded}`, `${ded} was standing in the void and died accidentally`, `${ded} ate a 40" TV and died`, `${ded} stepped on floor.. and died because the floor was lava`, `${ded} died because Simply Dumb is tooo dumb`, `${ded} killed Simply Dumb.. Simply Dumb exploded and ${ded} died`, `${ded} died in a game UwU`]
        const dedrandom = [Math.floor(Math.random() * dedmsg.length)]
        if (!ded) { message.channel.send("I cant kill the air... So mention a user") } else { message.channel.send(dedmsg[dedrandom]) }

      },
  aliases: ['stab'],
  description: "Shows other's stupid level"
}