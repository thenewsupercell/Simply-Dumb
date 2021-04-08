
const Discord = require('discord.js')
const signatureblue = '0070FF'


module.exports = {
  name: 'achievement',
  run: async(client, message, args) => {

		let texto = args.join("+")
		
		const response = Math.floor(Math.random(1 - 39) * 39);

		message.channel.send(`https://www.minecraftskinstealer.com/achievement/a.php?i=${response}&h=Achievement+Unlocked%21&t=${texto}`)

  },
  description: 'I think this is your first ever achievement',
  usage: `/achievement <some text>`
}