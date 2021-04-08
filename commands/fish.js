
const Discord = require('discord.js')
const signatureblue = '0070FF'
const { EconomyManager } = require("quick.eco")
const eco = new EconomyManager({
    adapter: 'sqlite'
});
const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
  name: 'fish',
  run: async(client, message, args) => {			

				 const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  };

  let user = message.author;
  let timeout = 60000;
  let fish = 
    ["Yellow Fish :tropical_fish:", 
    "Fat Fish :blowfish:", 
    "Blue Fish :fish:",
    "Coconut :coconut:",
    "Dolphin :dolphin:",
    "Lobster :lobster:",
    "Shark :shark:",
    "Crab :crab:",
    "Squid :squid:",
    "Whale :whale2:",
    "Shrimp :shrimp:",
    "Octopus :octopus:",
    "Duck :duck:",
    "Diamond :gem:",
    "Cobra :snake:"];

  let randn = rand(0, parseInt(fish.length));
  let randrod = rand(15, 30);

  let fishToWin = fish[randn];


  let fishdb = await db.fetch(`fish_${message.guild.id}_${user.id}`);
  let rod = await db.get(`fish_${message.guild.id}_${user.id}.rod`);
  let rodusage = await db.get(`fish_${message.guild.id}_${user.id}.rodusage`);
  let wait = await db.fetch(`fish_${message.guild.id}_${user.id}.wait`);


  if(!rod) return message.channel.send(`You have to buy a fishing rod!`);

 if(rodusage) {
   if(fishdb.rodusage >= randrod) {
     await db.delete(`fish_${message.guild.id}_${user.id}.rod`);
     return message.reply("Your fishing rod has **broken**! Go buy a new one!")
   }
 }
  let embed = new Discord.MessageEmbed()
      .setTitle("🎣 Fishing 🎣")
      .setFooter('Just Fish and sell.. but dont eat..')
			.setColor(signatureblue)
  

  if (wait !== null && timeout - (Date.now() - wait) > 0) {
    let time = ms(timeout - (Date.now() - wait));

embed.setDescription(`❌ You have **already fished!**\nFish it again in **${time.second}s** ❌`)
.setTitle('❌ Stop it ❌')

    message.channel.send(embed);

  } else {
let money = Math.floor(Math.random() * 100) + 1;

embed.setDescription(`✅ You've fished and gotten a **${fishToWin}** ✅`)
.setTitle('💸 YAY 💸')

  message.channel.send(embed);
message.channel.send(`You sold that and got **${money} <:DumbCoin:828912273786667019>**`)

  await db.push(`fish_${message.guild.id}_${user.id}.fish`, fishToWin);
  await db.set(`fish_${message.guild.id}_${user.id}.wait`, Date.now());
  await db.add(`fish_${message.guild.id}_${user.id}.rodusage`, 1);

    }
  },
  description: 'Fishes',
  usage: `/fish`
}