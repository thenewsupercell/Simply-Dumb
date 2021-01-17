const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'
const { EconomyManager } = require("quick.eco")
const eco = new EconomyManager({
    adapter: 'sqlite'
});

module.exports = {
  name: 'leaderboard',
  run: async(client, message, args) => {

     let lb = await eco.leaderboard(false, 20);
        const embed = new Discord.MessageEmbed()
        .setAuthor("Leaderboard")
        .setColor(signatureblue);
        lb.forEach(u => {
            embed.addField(`${u.position}. ${client.users.cache.get(u.user).tag}`, `Money: ${u.money} 💸`);
        });
        return message.channel.send(embed);
		    
  },
  aliases: ['lead'],
  description: 'Shows the leaderboard',
  usage: `/leaderboard`
}