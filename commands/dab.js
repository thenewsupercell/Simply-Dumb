const Client = require('../Client/Client')
const Discord = require('discord.js')
const signatureblue = '0070FF'

module.exports = {
  name: 'dab',
  run: async(client, message, args) => {
    
     const dabURL = ["https://media1.tenor.com/images/9b2147e6ad5a8c7f0ae0f39d37230a56/tenor.gif?itemid=9672617", "https://i.pinimg.com/originals/9c/a3/b2/9ca3b2498fe1241ba36ed81234801679.gif", "https://thumbs.gfycat.com/DizzyWhirlwindAlabamamapturtle-small.gif", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81c3283b-f4a1-4337-a976-da1f8dc91643/ddfzehb-559472ba-1ea3-4aaf-ad41-2e6d5df3eb8f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODFjMzI4M2ItZjRhMS00MzM3LWE5NzYtZGExZjhkYzkxNjQzXC9kZGZ6ZWhiLTU1OTQ3MmJhLTFlYTMtNGFhZi1hZDQxLTJlNmQ1ZGYzZWI4Zi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Cf3nSVQIjE6n9--Yn17hCJghrJQ_pNg0SBA4rbSdqFs", "https://cdn125.picsart.com/212345420005202.gif?to=min&r=640", "https://media1.tenor.com/images/6aa57aadfb47ce7cdc135147ed30c6af/tenor.gif?itemid=13120450", "https://i.gifer.com/7lfm.gif", "https://media1.giphy.com/media/3h5VTO6F1i2gU/giphy.gif", "https://i.gifer.com/8c77.gif", "https://i.pinimg.com/originals/60/7b/20/607b2037931fec6902256532ab33d193.gif"]
        const dabrandomURL = [Math.floor(Math.random() * dabURL.length)]

        const dabemb = new Discord.MessageEmbed()
            .setDescription(`${message.author} dabs`)
            .setImage(dabURL[dabrandomURL])
            .setColor("RANDOM")

        message.channel.send(dabemb)
     
  }
}