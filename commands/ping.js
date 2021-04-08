
const Discord = require('discord.js')
module.exports = {
  name: 'ping',
  run: async(client, message, args) => {
   const msg = await message.channel.send("Pinging...")
        const ping = msg.createdAt - message.createdAt
        msg.edit("Done :thumbsup:")
        const Embed = new Discord.MessageEmbed()
            .setTitle(`:ping_pong: Pong !`)
            .addFields(
                { name: "Bot Latency", value: `\`\`\`${Math.floor(ping)}ms\`\`\`` },
                { name: "API Latency - This will be not that accurate", value: `\`\`\`${Math.round(client.ws.ping)}ms\`\`\`` }
            )
            .setColor(0xbf0000)

        message.channel.send(Embed)
  },
  aliases: ['latency'],
	description: 'Check the latency of the bot and API',
	usage: '/ping'
}