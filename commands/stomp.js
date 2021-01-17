const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'stomp',
  run: async(client, message, args) => {
         let stompe = message.mentions.members.first()

        if (!stompe) { message.reply("What ?? Are you going to stomp the floor ?? Mention the user to stomp at them..") }

        const stompURL = ["https://media3.giphy.com/media/mWO3VUuWqKJU7MvWBh/giphy.gif", "https://i.gifer.com/Mwex.gif", "https://media.tenor.com/images/b3b5b4a3f11d0c9db146a2a60764da13/tenor.gif", "https://media.tenor.com/images/837c5f85984d7f00aafb992b2a1560b7/tenor.gif", "https://media.tenor.com/images/9118a25cbabed8553b14327bf103f75e/tenor.gif", "https://media.tenor.com/images/390dbb84f057f65bc0f3efcb0ac612cc/tenor.gif", "https://media.tenor.com/images/7f03e14aeb0f2d15368f3a484e35bfc4/tenor.gif", "https://media.tenor.com/images/a40e543781fb1e8ed67869a60c54143f/tenor.gif", "https://media.tenor.com/images/a40e543781fb1e8ed67869a60c54143f/tenor.gif", "https://media.tenor.com/images/8c1f8d95c07c6012b61ba07a090f4a7f/tenor.gif"]
        const randomURL = [Math.floor(Math.random() * stompURL.length)]

        const stompspeak = ["I think that hurts..", "Thats not powerful enough", "Bruh.. Thats like stomping air . _.", "Wow Thats Powerful..", "That Stomp... is nothing!!..."]
        const stomptalk = [Math.floor(Math.random() * stompspeak.length)]

        const color = ["0xFF3333", "0xFFD133", "0x86FF33", "0x33FF99", "0x33FFF6", "0x3361FF", "0xAF33FF", "0xFF33DA"]
        const colors = [Math.floor(Math.random() * color.length)]

        const stompemb = new Discord.MessageEmbed()
            .setDescription(`**${message.author} Stomped ${stompe.user}** \n \n **${stompspeak[stomptalk]}**`)
            .setImage(stompURL[randomURL])
            .setColor(signatureblue)


        if (stompe) { message.channel.send(stompemb) }
  },
  aliases: ['step'],
  description: 'Stomp at others',
  usage: '/stomp <mention>'
}