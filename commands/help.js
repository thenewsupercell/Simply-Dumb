
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'help',
  run: async(client, message, args) => {
const data = []
const { commands } = message.client
const idk = ``+ commands.map(c => c.name).join(` , `)
if(!args.length){
  const emb = new Discord.MessageEmbed()
  .setTitle("Here is the list of my commands")
  .setDescription(`http://simplydumb.ezyro.com/commands`)
  .setFooter(`\n You can use /help <command name> for more info about that`)
  .setColor(signatureblue)
  .setThumbnail(client.user.displayAvatarURL({format: 'png'}))
  message.reply(emb)
}
const name = args[0]
if(!args[0]) return;
const cmd = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

if(!cmd){
  message.reply(`${name} is not a valid`)
}
if(cmd){
const embo = new Discord.MessageEmbed()
.setTitle('Help')
.addFields({name:`Command`, value: `${client.prefix}${cmd.name}`})
.setColor(signatureblue)
.setThumbnail(client.user.displayAvatarURL({format: 'png'}))
.setFooter(`Helping ${message.author.tag}`)
if(cmd.description){embo.addFields({name:`Description`, value: `${cmd.description}`})}
if(cmd.aliases){embo.addFields({name:`Aliases`, value: `${cmd.aliases}`})}
if(cmd.usage){embo.addFields({name:`Usage`, value: `${cmd.usage}`})}

message.reply(embo)
}
  },
    aliases: ['welp'],
  description: 'Helps you UwU',
  usage: `/help (or) /help <command name>`
}