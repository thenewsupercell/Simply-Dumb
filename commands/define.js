const Client = require('../Client/Client')
const Discord = require('discord.js')
const ud = require("relevant-urban");
const signatureblue = '0070FF'
module.exports = {
  name: 'define',
  run: async(client, message, args) => {

let worder = args[0];
if(!worder) return message.channel.send("Gimme a word to search")
let defin = await ud(args.join(' ')).catch(e => {
  message.channel.send("I cant find that word OOF")
  return;
});
let embed = new Discord.MessageEmbed()
.setTitle(defin.word)
.setURL(defin.urbanURL)
.setDescription(defin.definition)
.addField("Example", defin.example)
.addField("Author", defin.author)
.setColor(signatureblue)
message.channel.send(embed)
  },
  aliases: ['google'],
	description: 'Having doubt ?? Just search it',
	usage: '/define <search term>'
}