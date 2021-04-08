
const AmeClient = require('amethyste-api');
const AmeAPI = new AmeClient("ad49b1ec817af8bec8ed60dd0bf1f8cd10fb3a3a1c24f5b0e50495dfbabf10f1883350fc7859134d398644f5ff4b77221d938000c7ff54fb465ea98444b84e21")
const signatureblue = '0070FF'
const Discord = require('discord.js')

module.exports = {
  name: 'fire',
  run: async(client, message, args) => {
    
     let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        let m = await message.channel.send("**Please Wait...**");
        let buffer = await AmeAPI.generate("fire", { url: user.user.displayAvatarURL({ format: "png", size: 2048 }) });
        let attachment = new Discord.MessageAttachment(buffer, "fire.png");
        m.delete({ timeout: 5000 });
        message.channel.send(attachment);

  },
  aliases: ['burn'],
  description: 'Burn the profile pic alive MUHAHAHAHA !!',
  usage: `/fire <user>`
}