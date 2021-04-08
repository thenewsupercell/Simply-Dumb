
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'guild',
  run: async(client, message, args) => {
    
    const { guild } = message

        const { name, region, memberCount, owner, afkTimeout, afkChannel, verificationLevel, createdAt, roles, emojis, channels, approximateMemberCount } = guild
        const icon = guild.iconURL()

        const guildembed = new Discord.MessageEmbed()
            .setTitle(`Server info of ${name}`)
            .setThumbnail(icon)
            .addFields(
                { name: "Members", value: memberCount },
                { name: "Region", value: region },
                { name: "Owner", value: owner },
                { name: "Emojis", value: emojis.cache.size },
                { name: "Channels", value: channels.cache.size },
                { name: "AFK Channel", value: afkChannel },
                { name: "AFK Timeout", value: afkTimeout / 60 },
                { name: "Verification Level", value: verificationLevel },
                { name: "Created at", value: createdAt },
                { name: "Roles", value: roles.cache.size },
            )
            .setColor(0xFFA500)
        message.channel.send(guildembed)
                     },
  aliases: ['guildinfo']
}