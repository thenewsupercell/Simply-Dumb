const Client = require('../Client/Client')
const Discord = require('discord.js')
const db = require('quick.db')
const fs = require('fs')
const signatureblue = '0070FF'
const rss = require('rss-converter');

module.exports = {
  name: 'message',
  run: async(client, message) => {
		if(message.author.bot) return;

const user = message.author
const homeGuild = client.guilds.cache.get('772814149155553280')
const member = homeGuild.member(user);
let bonus = 0

if(member){
	bonus = 5
}
const lvlmsg = await db.fetch(`levels.${message.guild.id}`, 1)
if(lvlmsg !== null){
		const randomNumber = Math.floor(Math.random() * 10) + 15 + bonus
		db.add(`xp_${message.guild.id}_${message.author.id}`, randomNumber)
		db.add(`xptotal_${message.guild.id}_${message.author.id}`, randomNumber)
		var level = db.get(`level_${message.guild.id}_${message.author.id}`) || 1
		var xp = db.get(`xp_${message.guild.id}_${message.author.id}`)
		var xpNeeded = level * 500
		if(xpNeeded < xp){
			var newLevel = db.add(`level_${message.guild.id}_${message.author.id}`, 1)
			db.subtract(`xp_${message.guild.id}_${message.author.id}`, xpNeeded)
			const levelemb = new Discord.MessageEmbed()
			.setTitle(':tada: Congrats :tada:')
			.setDescription(`${message.author} has Reached Level ${newLevel}.. GG`)
			.setFooter('Gimme some xp pls')
			.setColor(signatureblue)

      
			message.reply(levelemb)
      }
		}

				    var msgo = message.content.toLowerCase();
				if (msgo.includes('nigga')) {
				message.delete()
        message.channel.send(`**<a:smacc:778510510500347955> Shush.. Stop saying that Or you will get a chance to visit banland. <a:smacc:778510510500347955>**`).then(msg => msg.delete({ timeout: 10000 }));
				message.author.send('**Stop saying that word please..**')}

		const ado = await db.fetch(`ad.${message.guild.id}`, 1)

		if(ado !== null) {
			var msg = message.content.toLowerCase();
			if (msg.includes('discord.gg/')) {

            message.delete()
						message.reply('**<a:hecc:774124385119895552> Stop Advertising.. <a:hecc:774124385119895552> This server has disabled advertisements.. So stop it.**').then(msg => msg.delete({ timeout: 10000 }))
			}
		}

				const idko = await db.fetch(`swear.${message.guild.id}`, 1)

		if(idko !== null) {
		var noWords = JSON.parse(fs.readFileSync("./blockedWords.json"));
    var msg = message.content.toLowerCase();

    for (let i = 0; i < noWords["blockedWords"].length; i++) {

        if (msg.includes(noWords["blockedWords"] [i])) {
            message.delete()
        
        return message.channel.send(`**<a:smacc:778510510500347955> You are not allowed to say that. <a:smacc:778510510500347955>**`).then(msg => msg.delete({ timeout: 10000 }));
			 }
		}
		}

	 let afk = new db.table("AFKs"),
	 authorStatus = await afk.fetch(message.author.id, message.guild.id)
	 let mentioned = message.mentions.members.first()

	 if(mentioned){
		 let status = await afk.fetch(mentioned.id, message.guild.id)
		 if(status){
			 const embed = new Discord.MessageEmbed()
			 .setColor(signatureblue)
			 .setDescription(`<@${mentioned.user.id}> is in AFK, Reason: **${status}**`)
			 message.channel.send(embed).then(i => i.delete({timeout: 10000}))
		 }
	 }

	 		 if(authorStatus){
			 const embedo = new Discord.MessageEmbed()
			 .setColor(signatureblue)
			 .setDescription(`**${message.author}** is no longer AFK`)
			 message.channel.send(embedo).then(i => i.delete({timeout: 10000}))
			 afk.delete(message.author.id, message.guild.id)
		 }

         if (message.content.includes("@here") || message.content.includes("@everyone")) return;
             if (message.mentions.has(client.user.id)) {
        message.channel.send("Hey.. My Prefix is s! if you forget..").then(i => i.delete({timeout: 10000}))
    };
    
   const [ cmd, ...args ] = message.content.slice(client.prefix.length).trim().split(/ +/g);
   const command = client.getCommand(cmd.toLowerCase());
   if(!command) return;
   
   if(message.content.toLowerCase().startsWith(`s!${cmd}`)){
       
     const Allowed = await db.fetch(`CommandOn_${message.guild.id}_${cmd.toLowerCase()}`);
  if (Allowed !== null) return;

   command.run(client, message, args).catch(e => console.log(e))
	 }
  }
}