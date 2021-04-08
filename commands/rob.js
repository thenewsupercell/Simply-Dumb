
const Discord = require('discord.js')
const signatureblue = '0070FF'
const db = require('quick.db')

module.exports = {
  name: 'rob',
  run: async(client, message, args) => {
    
		let user =
    message.mentions.users.first() ||
    client.users.cache.get(args[0]) ||
    (args.join(" ").toLowerCase(), message.guild);

    if(!user){message.channel.send('You cant rob yourselves.. Mention them to rob.')}

  let targetuser = await db.fetch(`money_${message.guild.id}_${user.id}.pocket`);
  let author     = await db.fetch(`rob_${message.guild.id}_${message.author.id}`);
  let author2    = await db.fetch(`money_${message.guild.id}_${message.author.id}.pocket`);

  let timeout = 6000000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    
  let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor(signatureblue)
    .setDescription(`❌ You have already robbed someone ❌\n\n**Try again in ${time.minutes}m ${time.seconds}s** `);
    message.channel.send(timeEmbed)

  } else {

    let moneyEmbed = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setDescription(`❌ You need at least 200 coins in your wallet to rob someone ❌`);


  if (author2 < 200) {
    return message.channel.send(moneyEmbed)
  }

  let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setTitle('❌ They are Broke ❌')
  .setDescription(`❌ ${user.username} does not have anything you can rob ❌`);

  if (targetuser <= 0 || targetuser === null) {
    return message.channel.send(moneyEmbed2)
  }

  let authorembed = new Discord.MessageEmbed()
  .setColor(signatureblue)
  .setTitle('❌ Ayo what the- ❌')
  .setDescription(`❌ You cannot rob yourself! ❌`);

  if(user.id === message.author.id) {
    return message.channel.send(authorembed)
  }


  let vip = await db.fetch(`bronze_${user.id}`)

  if(vip === true) random = Math.floor(Math.random() * parseInt(targetuser)) + 1;
  if(vip === null) random = Math.floor(Math.random() * 100) + 1;


  let embed = new Discord.MessageEmbed()
   .setDescription(`✅ You robbed ${user} and got away with ${random} <:DumbCoin:828912273786667019> ✅`)
   .setColor(signatureblue)

   message.channel.send(embed)

await db.subtract(`money_${message.guild.id}_${user.id}.pocket`, random);
await db.add(`money_${message.guild.id}_${message.author.id}.pocket`, random);
await db.set(`rob_${message.guild.id}_${message.author.id}`, Date.now());
  
		}

  },
  aliases: ['steal'],
  description: 'Rob other players hehe',
  usage: `/rob <user>`
}