const Client = require('../Client/Client')
const Discord = require('discord.js')
const moment = require('moment')
module.exports = {
  name: 'uptime',
  run: async(client, message, args) => {
   const msg = await message.channel.send("Getting Data...")
        const ping = msg.createdAt - message.createdAt
        msg.edit("Done :thumbsup:").then(i => i.delete({timeout: 2000}))

const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

        const Embed = new Discord.MessageEmbed()
            .setTitle(`⬆️ Uptime go brrr`)
            .addFields(
                { name: "Bot Uptime", value: `\`\`\`${duration}\`\`\`` },
            )
            .setColor(0xbf0000)

        message.channel.send(Embed)
  },
  aliases: ['up'],
	description: 'Check the uptime UwU',
	usage: '/uptime'
}