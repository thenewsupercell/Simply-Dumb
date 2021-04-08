
const Discord = require('discord.js')
const signatureblue = '0070FF'
const db = require('quick.db')
const ms = require("parse-ms");

module.exports = {
  name: 'work',
  run: async(client, message, args) => {

let user = message.author;
const homeGuild = client.guilds.cache.get('772814149155553280')
const member = homeGuild.member(user);
let bonus = 0

if(member){
	bonus = 100
	console.log('hehe')
}
    
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 300000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setTitle('❌ Wait.. What !? ❌')
        .setDescription(`❌ You have already worked recently ❌\n\n**Try again in ${time.minutes}m ${time.seconds}s** `);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic', 'Utoober', 'Manager', 'Dentist', 'Doctor', 'Taxi Driver', "God for Cobras"]

        let result = Math.floor((Math.random() * replies.length));
        let amounta = Math.floor(Math.random() * 80 + bonus) + 1;
        let multiplier = await db.fetch(`multiplier_${message.guild.id}`);
        if(!multiplier) multiplier = 1;
        let amount =  amounta * multiplier;

        let embed1 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setTitle("💸 Worked Hard huh ? 💸")
        .setDescription(`💸 You worked as a **${replies[result]}** and earned **${amount} <:DumbCoin:828912273786667019>** 💸`);
        message.channel.send(embed1)
        
        await db.add(`money_${message.guild.id}_${user.id}.pocket`, amount)
        await db.set(`work_${message.guild.id}_${user.id}`, Date.now())
		};

  },
  description: 'Work and get some money',
  usage: `/work`
}