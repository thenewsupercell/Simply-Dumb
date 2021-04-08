const Discord = require('discord.js')
const signatureblue = '0070FF'
const db = require('quick.db')

module.exports = {
  name: 'buy',
  run: async(client, message, args) => {
      let user = message.author;

    let author = await db.fetch(`money_${message.guild.id}_${user.id}.pocket`)

    let Embed = new Discord.MessageEmbed()
    .setColor(signatureblue)
    .setDescription(` You need 2000 coins to purchase Bronze VIP`);

    switch(args[0]) {
    case 'bronze':
        if (author < 3500) return message.channel.send(Embed)
        
        await db.fetch(`bronze_${message.guild.id}_${user.id}`);
        await db.set(`bronze_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(` Purchased Bronze VIP For 3500 Coins`);

        await db.subtract(`money_${message.guild.id}_${user.id}.pocket`, 3500)
        message.channel.send(Embed2)
    break;

    case 'nikes':
        let Embedn = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(` You need 600 coins to purchase some Nikes`);

        if (author < 600) return message.channel.send(Embedn)
       
        await db.fetch(`nikes_${message.guild.id}_${user.id}`)
        await db.add(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(` Purchased Fresh Nikes For 600 Coins`);

        await db.subtract(`money_${message.guild.id}_${user.id}.pocket`, 600)
        message.channel.send(Embed3)
    break;

    case 'car':
        let Embed4 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(` You need 800 coins to purchase a new car`);

        if (author < 800) return message.channel.send(Embed4)
       
        await db.fetch(`car_${message.guild.id}_${user.id}`)
        await db.add(`car_${message.guild.id}_${user.id}`, 1)

        let Embed5 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(` Purchased a New Car For 800 Coins`);

        await db.subtract(`money_${message.guild.id}_${user.id}.pocket`, 800)
        message.channel.send(Embed5)
    break;

    case "fish":
    case "fishing":
        let Embed6 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(` You need 50 coins to purchase a fishing rod`);

        if (author < 50) return message.channel.send(Embed6);
        let iffish = await db.get(`fish_${message.guild.id}_${user.id}`);
        if(iffish !== null) {
            if(iffish.rod === 1) return message.channel.send("You already have a fishing rod!");
        }
        //await db.fetch(`fish_${message.guild.id}_${user.id}`)
        await db.add(`fish_${message.guild.id}_${user.id}.rod`, 1);
        await db.set(`fish_${message.guild.id}_${user.id}.fish`, [])

        let Embed7 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(` Purchased a Fishing rod For 50 Coins`);

        await db.subtract(`money_${message.guild.id}_${user.id}.pocket`, 50)
        message.channel.send(Embed7)
    break;

    case 'mansion':
        let Embed8 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(` You need 1200 coins to purchase a Mansion`);

        if (author < 1200) return message.channel.send(Embed8)
       
        await db.fetch(`house_${message.guild.id}_${user.id}`)
        await db.add(`house_${message.guild.id}_${user.id}`, 1)

        let Embed9 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(` Purchased a Mansion For 1200 Coins`);

        await db.subtract(`money_${message.guild.id}_${user.id}.pocket`, 1200)
        message.channel.send(Embed9)
    break;

    default:
        let embed3 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(' Enter an item to buy')
        message.channel.send(embed3)
    break;

        }
  },
  description: 'Buy things which is virtual and useless..',
  usage: `/buy <item>`
}