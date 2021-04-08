
const Discord = require('discord.js')
const moment = require('moment')
module.exports = {
  name: 'memory',
  run: async(client, message, args) => {
   const msg = await message.channel.send("Getting Data...")
        const ping = msg.createdAt - message.createdAt
        msg.edit("Done :thumbsup:").then(i => i.delete({timeout: 2000}))

        const Embed = new Discord.MessageEmbed()
            .setTitle(`💿 Memory Usage`)
            .addFields(
                { name: "Memory Usage", value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``},
            )
            .setColor(0xbf0000)

        message.channel.send(Embed)
  },
  aliases: ['mem'],
	description: 'See how the bot is using the Memory OOF',
	usage: '/memory'
}