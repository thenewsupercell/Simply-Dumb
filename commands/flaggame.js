const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const { EconomyManager } = require("quick.eco")
const eco = new EconomyManager({
    adapter: 'sqlite'
});
const ezgames = require('ez-games.js')

module.exports = {
  name: 'flaggame',
  run: async(client, message, args) => {
		let user = message.author;
		 let data = await ezgames.flags(message.author.id, message.guild.id)
            const filter = m => m.author.id === message.author.id;

							 let owo = await eco.search(user.id, false, 200)
 
            let embed = new Discord.MessageEmbed()
                .setImage(data.countryflag)
								.setTitle('Guess the flag')
                .setFooter('X_x Im not that smart oof')
            await message.channel.send(embed);
 
            message.channel.awaitMessages(filter, {
                max: 1,
                error: ["time"],
                time: 30000
            })
                .then(collected => {
                    const m = collected.first();
                    if (!m.content || m.content.toLowerCase() !== data.countryname.toLowerCase())
                         return message.channel.send(`Wrong, The answer is: **${data.countryname.toLowerCase()}**`)
 
                    return message.channel.send(`Correct one, Now you have ${add.amount} cash`);
                })
                .catch(() => {
                    message.channel.send(`You took too long, the correct answer is: ${data.countryname.toLowerCase()}`);
                });
  },
  aliases: ['flag'],
  description: 'Just a guessing game',
  usage: `/flaggame`
}