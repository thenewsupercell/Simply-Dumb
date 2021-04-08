
const Discord = require('discord.js')
const signatureblue = '0070FF'
const moment = require('moment')

module.exports = {
  name: 'stats',
  run: async(client, message, args) => {

      var servercount = client.guilds.cache.size
        var memeberCount = client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b).toLocaleString()
				const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

        const statusemb = new Discord.MessageEmbed()
            .setTitle(`${client.user.username} status`)
            .addFields(
                {
                    name: "Servers i am in",
                    value: `${servercount} Servers`
                },
                {
                    name: "Members i am handling",
                    value: `${memeberCount} Members`
                },
                {
                    name: "Status",
                    value: `Idle`
                },
                {
                    name: "Server Prefix",
                    value: `${client.prefix}`
                },
                {
                    name: "Bot Developer",
                    value: `Rahul_Plays#0243`
                },
                {
                    name: "Programmed Language",
                    value: `discord.js`
                },
                {
                    name: "AI ??",
                    value: `no bye`
                },
                {
                    name: "Commands",
                    value: `57 Commands`
                },
                {
                    name: "Made in",
                    value: `31st October 2020`
                },
								 {
                    name: "Uptime",
                    value: `**${duration}**`
                },
								{
                    name: "RAM Used",
                    value: `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**`
                },
                {
                    name: "Invite",
                    value: `https://top.gg/bot/770884670309007391`
                },
                {
                    name: "Bug Report ?? Suggestion ??",
                    value: `Contact us on Support Server`
                },
                {
                    name: "Support Server",
                    value: `https://discord.gg/WX6fRqYfH2`
                },

            )
            .setColor("RANDOM")
            .setThumbnail(client.user.avatarURL)
            .setFooter(`Botted by ${message.author.username}`)
            .setTimestamp()

        message.channel.send(statusemb)
             },
  aliases: ['bot'],
  description: 'Shows you the stats',
  usage: `/stats`
}