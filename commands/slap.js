
const Discord = require('discord.js')

module.exports = {
  name: 'slap',
  run: async(client, message, args) => {

     let slappe = message.mentions.members.first()

        if (!slappe) { message.reply("What ?? Are you going to slap the air ?? Mention the user to slap them..") }

        const slapURL = ["https://media1.tenor.com/images/e8f880b13c17d61810ac381b2f6a93c3/tenor.gif?itemid=17897236", "https://media2.giphy.com/media/Hj9ixvpSfqcQo/giphy.gif", "https://media1.tenor.com/images/23bb67307050fc87d5f88cd480286c97/tenor.gif?itemid=8578118", "https://media.tenor.com/images/ac09dd389d43f3bc0adad6432a942532/tenor.gif", "https://media.tenor.com/images/3ccfad9cb027d3515e409b4e0f4f3873/tenor.gif", "https://media.tenor.com/images/46e1c0815a398f6d081094113c88755c/tenor.gif", "https://media.tenor.com/images/56387025912c48b5af27c0711a2645b8/tenor.gif", "https://media.tenor.com/images/734d628ba871022bc9ae142035b969b5/tenor.gif", "https://media.tenor.com/images/f995b195e2a993829807d49e5e200cd8/tenor.gif", "https://forgifs.com/gallery/d/263451-2/Jordan-cat-face-slap.gif", "https://media.tenor.com/images/b6a5e629bf02c52979dc348bafc1c0c8/tenor.gif", "https://media.tenor.com/images/2439d9b859e5a692cc22762ba1e93022/tenor.gif", "https://media.tenor.com/images/b09b36ae92b2b5c6da7212472514063d/tenor.gif"]
        const randomURL = [Math.floor(Math.random() * slapURL.length)]

        const slapspeak = ["I think that hurts..", "Thats not powerful enough", "Bruh.. Thats like slapping a dust . _.", "Wow Thats Powerful..", "That Slap... is nothing..."]
        const slaptalk = [Math.floor(Math.random() * slapspeak.length)]

        const color = ["0xFF3333", "0xFFD133", "0x86FF33", "0x33FF99", "0x33FFF6", "0x3361FF", "0xAF33FF", "0xFF33DA"]
        const colors = [Math.floor(Math.random() * color.length)]

        const slapemb = new Discord.MessageEmbed()
            .setDescription(`**${message.author} Slapped ${slappe.user}** \n \n **${slapspeak[slaptalk]}**`)
            .setImage(slapURL[randomURL])
            .setColor(color[colors])


        if (slappe) { message.channel.send(slapemb) }

  },
  description: 'Slap others if you want',
  usage: `/slap <mention>`
}