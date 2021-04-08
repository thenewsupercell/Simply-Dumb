
const Discord = require('discord.js')
const signatureblue = '0070FF'
const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
  name: 'sell',
  run: async(client, message, args) => {
let user = message.author;

if(!args[0]){
  message.reply("What ?? Are you going to sell the air ?? Tell me what you selling..")
}
    if(args[0].toLowerCase() == 'nikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(`<a:false:737764891657633814> You don't have Nikes to sell`);

        let nikeses = await db.fetch(`nikes_${message.guild.id}_${user.id}`)

        if (nikeses < 1) return message.channel.send(Embed2)
       
        await db.fetch(`nikes_${message.guild.id}_${user.id}`)
        await db.subtract(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(`<a:yes:739569362440159252> Sold Fresh Nikes For 200 Coins`);

        await db.add(`money_${message.guild.id}_${user.id}.pocket`, 200)
        message.channel.send(Embed3)
    } else if(args[0].toLowerCase() == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(`<a:false:737764891657633814> You don't have a Car to sell`);

       let cars = await db.fetch(`car_${message.guild.id}_${user.id}`)

        if (cars < 1) return message.channel.send(Embed2)
       
        await db.fetch(`car_${message.guild.id}_${user.id}`)
        await db.subtract(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(`<a:yes:739569362440159252> Sold a Car For 600 Coins`);

        await db.add(`money_${message.guild.id}_${user.id}.pocket`, 600)
        message.channel.send(Embed3)
    } else if(args[0].toLowerCase() == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(`<a:false:737764891657633814> You don't have a Mansion to sell`);

        let houses = await db.fetch(`house_${message.guild.id}_${user.id}`)

        if (houses < 1) return message.channel.send(Embed2)
       
        await db.fetch(`house_${message.guild.id}_${user.id}`)
        await db.subtract(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor(signatureblue)
        .setDescription(`<a:yes:739569362440159252> Sold a Mansion For 1000 Coins`);

        await db.add(`money_${message.guild.id}_${user.id}.pocket`, 1000)
        message.channel.send(Embed3)
		}
  

  },
  description: 'Buy some useless thing hehe',
  usage: `/shop <item>`
}