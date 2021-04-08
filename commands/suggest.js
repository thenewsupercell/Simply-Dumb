
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'suggest',
  run: async(client, message, args) => {
    let sugg = args.join(" ")
        if (message.author.bot) return;
        if (message.channel.type === 'dm') {

            const suggestyes = new Discord.MessageEmbed()
                .setTitle(`<:wizardo:774124560198402108>  ${message.author.username} just suggested`)
                .setDescription(`**${sugg}**`)
                .setColor(0x0070FF)
                .setFooter(`Suggested By ${message.author.tag}`)
                .setTimestamp()

            const suggestdm = new Discord.MessageEmbed()
                .setTitle(`<:wizardo:774124560198402108>  Thank you for suggesting a command  <:wizardo:774124560198402108>`)
                .setDescription(`Trolls/Jokes will get deleted.. Want to takeback/remove the command ??? React to  <a:nope:779995785173532703> and Thank you`)
                .setColor(0x0070FF)
                .setFooter(`Thank you ${message.author.tag} for suggesting ;)`)

            const sugdel = new Discord.MessageEmbed()
                .setTitle("**You just reacted to <a:nope:779995785173532703>. The Suggestion request has been deleted.. Deleted accidentally ?? Suggest it again ;)**")
                .setColor("RANDOM")
                .setTimestamp()

            if (sugg) {
                const guildz = client.guilds.cache.get('772814149155553280')

                if (guildz) {
                    const channelz = client.channels.cache.get('773142831161147422')

                    if (channelz) {

                        const Sug = await channelz.send(suggestyes)

                        message.channel.send(suggestdm)
                        message.react('<a:tick:779995752990507028>')
                        message.react('<a:nope:779995785173532703>')


                        Sug.react('<:HEHH:774126184568455238>')
                        Sug.react('<:wat:774123715868885053>')
                        Sug.react('<:coolhuh:774124417197539357>')

                        const filter = (reaction, user) => {
                            return reaction.emoji.name === 'nope' && user.id === message.author.id;
                        };

                        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                            .then(collected => Sug.delete() + message.reply(sugdel))
                            .catch(collected => {
                                console.log(`After a minute, only ${collected.size} out of 2 reacted.`);
                            });

                    } else { message.reply("The suggestion channel got deleted/changed i guess.. Please contact the owner in Support Server") }

                } else { message.reply("The Support Server got deleted/changed i guess.. Please contact the owner") }

            } else message.channel.send("**Please provide me a Suggestion !**")

        } else {message.reply("**This is a command used only in Bot dms.. Please try again in Bot Dms**")}
  },
  aliases: ['sugg'],
  description: 'You can suggest a command with this command',
  usage: `/suggest <suggestion>`
}